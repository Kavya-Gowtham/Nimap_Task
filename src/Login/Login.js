import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
function Login(props) {
  const [loginData, setLoginData] = useState("");
  const classes = useStyles();
  const handleChange = (e) => {
    console.log(e.target.value, "handleChange");
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    props.parentCallback(loginData);
  };
  return (
    <div className="Login">
      <h1>Login</h1>
      <div className={classes.root}>
        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          value={loginData.username}
          name="username"
          onChange={handleChange}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
}
export default Login;
