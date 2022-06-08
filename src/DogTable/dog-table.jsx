import React, { useEffect, useState } from "react";

import { firebaseApp } from "../App";
import { getDatabase, ref, onValue, set, update } from "firebase/database";

import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";

const initialState = {
    date: new Date().toDateString(),
    bidu: [false, false],
    dingo: [false, false],
    feijaozinho: [false, false],
};

const DogTable = () => {
    const feedRef = ref(getDatabase(firebaseApp), "/feed");
    const [feed, setFeed] = useState(initialState);

    // snackbar feeback open state
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    
    useEffect(() => {
        // listen for server data updates <3
        onValue(feedRef, (snapshot) => {
            console.log(snapshot.val(), "<<<<");
            const data = snapshot.val();

            // if its the same day update dog feed data
            if(data.date === new Date().toDateString()) {
                setFeed(data);
            } else {
                // if its a new day lets feed the dogs!
                set(feedRef, initialState);
            }
        });
    }, []);

    const updateFeed = async (dog) => {
        if(confirm("Alterar o status?")) {
            await update(feedRef, dog);
            setSnackbarOpen(true);
        } else {
            return;
        }
    };

    return (
        <>
            <TableContainer component={Paper} style={{ maxHeight: "60vh" }}>
                <Table sx={{ minWidth: 650 }} aria-label="Feed control table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Dia</TableCell>
                            <TableCell align="center">Bidu</TableCell>
                            <TableCell align="center">Dingo</TableCell>
                            <TableCell align="center">Feijãozinho</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(feed && feed.date) ?
                            <TableRow
                                key={feed?.date}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell align="left">{feed?.date}</TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={feed.bidu[0]} onChange={
                                        () => updateFeed({bidu: [!feed.bidu[0], feed.bidu[1]]})
                                    }/>
                                    <Checkbox checked={feed.bidu[1]} onChange={
                                        () => updateFeed({bidu: [feed.bidu[0], !feed.bidu[1]]})
                                    }/>
                                </TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={feed.dingo[0]} onChange={
                                        () => updateFeed({dingo: [!feed.dingo[0], feed.dingo[1]]})
                                    }/>
                                    <Checkbox checked={feed.dingo[1]} onChange={
                                        () => updateFeed({dingo: [feed.dingo[0], !feed.dingo[1]]})
                                    }/>
                                </TableCell>
                                <TableCell align="center">
                                    <Checkbox checked={feed.feijaozinho[0]} onChange={
                                        () => updateFeed({feijaozinho: [!feed.feijaozinho[0], feed.feijaozinho[1]]})
                                    }/>
                                    <Checkbox checked={feed.feijaozinho[1]} onChange={
                                        () => updateFeed({feijaozinho: [feed.feijaozinho[0], !feed.feijaozinho[1]]})
                                    }/>
                                </TableCell>
                            </TableRow>
                        : undefined
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={snackbarOpen}
                autoHideDuration={3000}
                message={`Status alerado com sucesso!`}
                onClose={() => setSnackbarOpen(false)}
            />
        </>
    );
};

export default DogTable;
