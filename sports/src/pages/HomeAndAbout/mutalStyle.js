const urlImg = "/assets/workout.jpg";
export const homeStyle = {
  wrapper: {
    //flex: 1,
    display: "flex",
    // justifyContent: "space-around",

    alignItems: "center",
    // flexWrap: "wrap",
    height: "100vh",
    width: "100%",
    gap: "1rem",
  },
  homeImgWrapper: {
    //backgroundColor: "#e0e0d1",
    height: "50%",
    width: "100%",
    backgroundImage: `url(${urlImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
};
export const aboutStyle = {
  wrapper: { ...homeStyle.wrapper },
  aboutImgWrapper: {
    ...homeStyle.homeImgWrapper,
    [`height`]: "87%",
  },
};
//export default mutalStyle;
