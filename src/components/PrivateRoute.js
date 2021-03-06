import {Redirect, Route} from "react-router-dom";
import AuthContext from "../context/AuthContext";
import {useContext} from "react";
import AuthApi from "../services/AuthApi";

export const PrivateRouteToLevelPower = ({path, component, levelPower}) => {
    const actualPower = (AuthApi.isAuthenticated() ? AuthApi.getPayload()["rolePower"] : 0);

    return actualPower > levelPower
        ? <Route path={path} component={component}/>
        : <Redirect to={"/login"}/>
}