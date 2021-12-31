import React from "react";
import Container from "@mui/material/Container";
import Header from "./Header/header";
import DogTable from "./DogTable/dog-table";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config";
export const firebaseApp = initializeApp(firebaseConfig);

const App = () => ( 
    <Container>
        <Header />
        <DogTable />
    </Container>
);

export default App;
