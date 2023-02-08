import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../../../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const [click, setClick] = useState(false)
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  const handleClick2 = (location) => {
    window.location.assign("http://localhost:3002/register");
    
   
  }

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                <Button color="inherit" onClick={() => handleClick("/")}>
                  Home
                </Button>
                <Button color="inherit" onClick={() => handleClick("/addjob")}>
                  Add Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  My Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/employees")}>
                  Employees
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/allcourse")}>
                  Home
                </Button>
                <Button
                  color="inherit"
                  onClick={() => handleClick("/applications")}
                >
                  Applications
                </Button>
                <Button color="inherit" onClick={() => handleClick("/profile")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/home")}>
                  JOBS
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            )
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/login")}>
                Login
              </Button>
              <Button color="inherit" onClick={() => handleClick("/signup")}>
                Signup
                  </Button>
                  <Button color="inherit" onClick={() => handleClick2("http://localhost:3002/")}>
                Trainer Login
              </Button>
              <Button color="inherit" onClick={() => handleClick2("http://localhost:3002/")}>
                Trainer Login
              </Button>
            </>
          )}
          </ul>
          <div className='start'>
            <div className='button'></div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
