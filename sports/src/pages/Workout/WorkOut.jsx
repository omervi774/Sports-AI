import React, { useState } from "react";
import { openai } from "./apiConf";
import { Box } from "@mui/material";
import AppText from "../../components/AppText";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AppButton from "../../components/AppButton";
import { workOutStyle } from "./workOutStyle";
import LoadingButton from "@mui/lab/LoadingButton";
import { useTrain } from "./useTrain";

import Modal from "@mui/material/Modal";

const options = ["Male", "Fmale"];

function WorkOut() {
  const [
    values,
    handleAutocompleteChange,
    handleInputChange,
    buttonAction,
    loader,
    open,
    data,
    handleClose,
    hidden,
  ] = useTrain();

  return (
    <Box sx={workOutStyle.wrapper}>
      <AppText
        variant="h2"
        color="white"
        children="Get Fit with Your Personal Plan"
      />
      {loader && (
        <LoadingButton
          loading={loader}
          //startIcon={<SaveIcon />}
          variant="outlined"
          sx={{ width: 200, height: 100 }}
        ></LoadingButton>
      )}

      <Box
        component="form"
        sx={{ ...workOutStyle.formStyle, visibility: hidden && "hidden" }}
        noValidate
        autoComplete="off"
      >
        <Autocomplete
          sx={{ width: 300 }}
          id="sex"
          options={options}
          value={values.sex}
          onChange={handleAutocompleteChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Sex"
              error={values.sexError}
              helperText={values.sexError ? "Please select an option" : ""}
            />
          )}
        />
        <TextField
          variant="outlined"
          sx={{ width: 300, marginTop: "1.7rem" }}
          value={values.age}
          onChange={(e) => handleInputChange(e)}
          error={values.ageError}
          id="age"
          label="Age"
          helperText={
            values.ageError && "age is required and must to be a number"
          }
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          variant="outlined"
          sx={{ width: 300, marginTop: "1.7rem" }}
          value={values.weight}
          onChange={(e) => handleInputChange(e)}
          error={values.weightError}
          id="weight"
          label="Weight"
          helperText={
            values.weightError && "weight is required and must to be a number"
          }
          InputLabelProps={{ shrink: true }}
        />
        <AppButton
          variant="contained"
          color="success"
          style={workOutStyle.buttonStyle}
          action={buttonAction}
          children={"submit"}
        />
      </Box>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={workOutStyle.modalStyle}>
            <AppText
              color="primary.main"
              variant="p"
              component="p"
              children={data}
            />
          </Box>
        </Modal>
      )}
    </Box>
  );
}

export default WorkOut;
