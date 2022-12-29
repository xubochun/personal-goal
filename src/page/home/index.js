import React from "react";
import { Container } from "@mui/system";
import Grid from '@mui/material/Grid';
import logo from "../../image/goal.jpg"
//import PersistentDrawerLeft from "./components/drawer";

const Home = () => {
    return (
        <div>
            <h1>"Stop whining, start hustling." – Gary Vaynerchuk, Entrepreneur</h1>
            <img src={logo} alt='goal'></img>
        </div>
    );
};

export default Home;
