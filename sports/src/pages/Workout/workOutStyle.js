export const workOutStyle = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formStyle: {
    "& > :not(style)": { m: 1, width: "40ch" },

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonStyle: {
    width: "25%",
    fontSize: "0.9rem",
  },
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};
