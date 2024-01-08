import React from "react";
import listItems from "./consts/headerConsts";
import { url } from "./consts/headerConsts";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useNavigate } from "react-router-dom";
import { Box, ListItemText, Tooltip, Typography } from "@mui/material";
import style from "./styles/sheaderStyle";

export default function AppHeader() {
  const navigate = useNavigate();
  return (
    <List>
      <Box sx={style.wrapper}>
        <Typography
          variant="h2"
          component="a"
          onClick={() => navigate("/")}
          color={"#bdc3c7"}
          style={{ cursor: "pointer" }}
        >
          FitForm AI
        </Typography>

        <Box sx={style.itemsWrapper}>
          {listItems.map((item) => {
            return (
              <Tooltip
                title={`${url}${item.route}`}
                // sx={{ position: "absolute", bottom: "0", right: "0" }}
              >
                <ListItem
                  sx={style.item}
                  key={item.id}
                  onClick={() => navigate(item.route)}
                >
                  <ListItemText primary={item.label} />
                </ListItem>
              </Tooltip>
            );
          })}
        </Box>
      </Box>
    </List>
  );
}
