// home - indes.js
import React from "react";
import { Container } from "@mui/system";
//import PersistentDrawerLeft from "./components/drawer";
import ResponsiveAppBar from "./components/appbar";
import HomePage from "./components/homepage/homepage";

const Home = () => {
    return (
        <div>
            <Container >
                <ResponsiveAppBar />
                <HomePage />
            </Container>
        </div>
    );
};

export default Home;
