import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import menu from "../globals/Menu";
import { useForm } from 'react-hook-form';

function BaseNavBar(props) {

  return (
    <Toolbar >
          {menu.map((item) => (
            ((<Button color="inherit" component={Link} to={item.route}>{item.title}</Button>
	    ))))}
    </Toolbar>
  );
}

export default function NavBar(props) {
  return (
    <div>
      <AppBar position={!props.sticky ? "static" : 'fixed'}>
      </AppBar>
      {props.sticky}
    </div>
  );
}

