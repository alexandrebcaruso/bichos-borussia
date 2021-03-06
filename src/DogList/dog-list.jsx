import { Suspense, useEffect, useState } from "react";
import { firebaseApp } from "../App";
import { 
    getDatabase, 
    ref, 
    onValue, 
    update, 
    get, 
    child } from "firebase/database";
import { 
    Box, 
    Checkbox,
    FormControlLabel,
    FormLabel,
    FormGroup,
    FormControl,
    LinearProgress,
    Snackbar } from "@mui/material";

const initialState = {
    date: new Date().toDateString(),
    dogs: {
        bidu: {
            almoco: false,
            janta: false
        },
        dingo: {
            almoco: false,
            janta: false
        },
        feijaozinho: {
            almoco: false,
            janta: false
        },
    }
};

const DogList = () => {
    const dateRef = ref(getDatabase(firebaseApp), "/feed/date");
    const dogsRef = ref(getDatabase(firebaseApp), "/feed/dogs");
    const [date, setDate] = useState(initialState.date);
    const [dogs, setDogs] = useState(initialState.dogs);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    // get and add listener to db dogs object
    onValue(dogsRef, (snapshot) => {
        const dogsData = snapshot.val();
        setDogs(dogsData);
    }, {
        onlyOnce: true
    });

    useEffect(() => {
        get(child(dateRef, "/date"))
            .then((snapshot) => {
                const dbDate = snapshot.val();
                if(dbDate !== date) {
                    update(dateRef, {date: date});
                    setDogs(initialState.dogs);
                    update(dogsRef, initialState.dogs);
                }
            })
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                console.error(err)
            });
    }, []);

    const handleChange = (e) => {
        const { name, checked, dataset } = e.currentTarget;
        const newState = {
            ...dogs,
            [name]: {
                ...dogs[name],
                [dataset.meal]: checked

            }
        }
        setDogs(newState);
        update(dogsRef, newState);
        setSnackbarOpen(true);
    };

    return loading ? <LinearProgress />
    : (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Bidu</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} checked={dogs?.bidu?.almoco || false} inputProps={{"name":"bidu", "data-meal": "almoco"}} />
                        }
                        label="Almo??o"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} checked={dogs?.bidu?.janta || false} inputProps={{"name":"bidu", "data-meal": "janta"}} />
                        }
                        label="Janta"
                    />
                </FormGroup>
            </FormControl>

            <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Dingo</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} checked={dogs?.dingo?.almoco || false} inputProps={{"name":"dingo", "data-meal": "almoco"}} />
                        }
                        label="Almo??o"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} checked={dogs?.dingo?.janta || false} inputProps={{"name":"dingo", "data-meal": "janta"}} />
                        }
                        label="Janta"
                    />
                </FormGroup>
            </FormControl>

            <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Feij??ozinho</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} checked={dogs?.feijaozinho?.almoco || false} inputProps={{"name":"feijaozinho", "data-meal": "almoco"}} />
                        }
                        label="Almo??o"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} checked={dogs?.feijaozinho?.janta || false} inputProps={{"name":"feijaozinho", "data-meal": "janta"}} />
                        }
                        label="Janta"
                    />
                </FormGroup>
            </FormControl>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={snackbarOpen}
                autoHideDuration={3000}
                message={`Status alerado com sucesso!`}
                onClose={() => setSnackbarOpen(false)}
            />
        </Box>
    ); 
}

export default DogList;