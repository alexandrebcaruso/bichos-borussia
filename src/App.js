import React from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebase.config";

import Header from "./Header/header";
import DogList from "./DogList/dog-list";

export const firebaseApp = initializeApp(firebaseConfig);

const App = () => ( 
    <>
        <Header />
        <DogList />
    </>
);

export default App;
