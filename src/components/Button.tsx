import React from "react";
import { createUseStyles, useTheme } from "react-jss";

type propType = {
  children: React.ReactNode;
  onClick: () => void;
  color: string;
};

const useStyles = createUseStyles((theme) => ({
  myClass: {
    margin: {
      top: 16
    },
    backgroundColor: theme.colorPrimary,
    color: theme.textPrimary,
    padding: 10,
    border: "none",
    cursor: "pointer"
  }
}));

const Button = (props: propType) => {
  const theme = useTheme();
  const classes = useStyles({ ...props, theme });

  return (
    <button className={classes.myClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
