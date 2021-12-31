import React from "react";
import Container from "@mui/material/Container";
import Header from "./Header/header";
import DogTable from "./DogTable/dog-table";

import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { firebaseConfig } from "../firebase.config";

const app = initializeApp(firebaseConfig);
export const dbRef = ref(getDatabase(app));

const App = () => ( 
    <Container>
        <Header />
        <DogTable />
    </Container>
);

export default App;
