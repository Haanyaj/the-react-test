import React from "react";
import { Route, Switch } from "react-router-dom";
import menu from "../globals/Menu";
import { PublicRoute } from "./PublicRoute";

export default function Routes() {
    return (
        <Switch>
            {menu.map((item) => (
                <Route path={item.route} exact component={item.component} />         
            ))}
        </Switch>
    );
}

