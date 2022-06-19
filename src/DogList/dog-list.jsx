import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box, FormControl, FormGroup, FormLabel } from "@mui/material";

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
    const [state, setState] = useState(initialState);

    const handleChange = (e) => {
        const { name, checked, dataset } = e.currentTarget;
        setState((prev) => ({
            ...prev,    
            dogs: {
                ...prev.dogs,
                [name]: {
                    ...prev.dogs[name],
                    [dataset.meal]: checked
                }
            }
        }));
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                <FormLabel component="legend">Bidu</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} inputProps={{"name":"bidu", "data-meal": "almoco"}} />
                        }
                        label="Almoço"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox onChange={handleChange} inputProps={{"name":"bidu", "data-meal": "janta"}} />
                        }
                        label="Janta"
                    />
                </FormGroup>
            </FormControl>
        </Box>
    );
}

export default DogList;