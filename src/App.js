import React from "react";
import {initializeApp} from "firebase/app";
import {firebaseConfig} from "../firebase.config";
import DogList from "./DogList/dog-list";
import Header from "./Header/header";

export const firebaseApp = initializeApp(firebaseConfig);

const App = () => (
    <>
        <Header />
        <DogList />
    </>
    );

export default App;
