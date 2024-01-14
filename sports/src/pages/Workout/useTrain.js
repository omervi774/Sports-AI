import { useState } from "react";
import { openai } from "./apiConf";
export function useTrain() {
  const [values, setValues] = useState({
    sex: "Male",
    sexError: false,
    age: "",
    ageError: false,
    weight: "",
    weightError: false,
  });
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const handleClose = () => {
    setOpen(false);
    setHidden(false);
  };
  const handleAutocompleteChange = (event, newValue) => {
    setValues((prev) => ({
      ...prev,
      sex: newValue || "", // Set the selected value or an empty string if none selected
      sexError: newValue && false,
    }));
  };
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    console.log(value);
    console.log(id.split("-")[0]);
    setValues((prev) => {
      return {
        ...prev,
        [`${id.split("-")[0]}`]: value,
        [`${id}Error`]: isValidNum(value) ? false : true,
      };
    });
  };
  function isValidNum(num) {
    if (num[0] === "0" || num === "" || !(num[0] >= "0" && num[0] <= "9")) {
      return false;
    }
    for (let i = 1; i < num.length; i++) {
      if (!(num[i] >= "0" && num[i] <= "9")) {
        return false;
      }
    }
    if (Number(num) > 150) {
      return false;
    }
    return true;
  }
  async function buttonAction() {
    if (!values.sex) {
      setValues((prev) => {
        return {
          ...prev,
          sexError: true,
        };
      });
    }
    if (values.age === "" || values.weight === "") {
      setValues((prev) => {
        return {
          ...prev,
          ageError: (values.age === "" || !isValidNum(values.age)) && true,
          weightError:
            (values.weight === "" || !isValidNum(values.weight)) && true,
        };
      });
      return;
    }
    if (values.ageError || values.weightError || values.sexError) {
      return;
    }

    console.log("submitted");
    setHidden(true);
    setLoader(true);
    try {
      const compelation = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: `my details : age: ${values.age}, sex: ${values.sex}, weight:${values.weight}, please provide me workout plan for each day of the weak and i want the response to start without any preview,Day 1: ... ,`,
          },
        ],
      });
      setValues((prev) => {
        return {
          ...prev,
          ["sex"]: "",
          ["weight"]: "",
          ["age"]: "",
        };
      });
      setData(compelation.data.choices[0].message.content);
      setOpen(true);
    } finally {
      setLoader(false);
    }
  }
  return [
    values,
    handleAutocompleteChange,
    handleInputChange,
    buttonAction,
    loader,
    open,
    data,
    handleClose,
    hidden,
  ];
}
