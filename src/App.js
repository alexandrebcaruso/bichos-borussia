import React from "react";
import Container from "@mui/material/Container";
import Header from "./Header/header";
import DogTable from "./DogTable/dog-table";

const App = () => ( 
    <Container>
        <Header />
        <DogTable />
    </Container>
);

export default App;
