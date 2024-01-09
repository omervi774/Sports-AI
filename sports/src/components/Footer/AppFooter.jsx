import React from "react";
import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import AppText from "../AppText";
import { footerStyle } from "./footerStyle";

function AppFooter() {
  return (
    <Box sx={footerStyle.warpper}>
      <Box sx={footerStyle.itemWrapper}>
        <AppText variant="h3" color="#bdc3c7" children="FitForm AI" />
        <AppText
          variant="h6"
          color="#bdc3c7"
          children={`Take the first step towards`}
        />
        <AppText
          variant="h6"
          color="#bdc3c7"
          children={`a healthier you today.`}
        />
      </Box>
      <Box sx={footerStyle.itemWrapper}>
        <AppText variant="h4" color="#bdc3c7" children={`Follow Us`} />
        <Box>
          <FacebookIcon sx={footerStyle.iconStyle} />
          <InstagramIcon sx={footerStyle.iconStyle} />
          <LinkedInIcon sx={footerStyle.iconStyle} />
        </Box>
      </Box>
      <Box sx={footerStyle.itemWrapper}>
        <AppText variant="h4" color="#bdc3c7" children={`Contact Us`} />
        <PhoneIcon
          sx={{ cursor: "pointer", fontSize: "3rem", marginBottom: "1rem" }}
          color="success"
          gutterBottom
        />
        <AppText variant="h6" color="#bdc3c7" children={`+972-548-192-557`} />
      </Box>
    </Box>
  );
}

export default AppFooter;
