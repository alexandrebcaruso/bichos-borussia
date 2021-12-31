import React, { useEffect, useState } from "react";

import { firebaseApp } from "../App";
import { getDatabase, ref, onValue, set } from "firebase/database";

import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const DogTable = () => {    
    const rowsRef = ref(getDatabase(firebaseApp), "/rows");
    const [rows, setRows ] = useState([]);
    
    // If today's row is present set rows datat to ui state
    // If not today's row, create it and initialize all false
    useEffect(() => {
        onValue(rowsRef, (snapshot) => {
            const data = snapshot.val();
            if(data[0].date === new Date().toDateString()) {
                setRows(data);
            } else {
                set(rowsRef, [{
                    date: new Date().toDateString(),
                    bidu: [false, false],
                    dingo: [false, false],
                    feijaozinho: [false, false],
                }]);
            }
        });
    }, []);

    return (
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
                    <TableRow
                        key={rows[0]?.date}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                        <TableCell align="left">{rows[0]?.date}</TableCell>
                        <TableCell align="center"><Checkbox checked={rows[0]?.bidu[0]} /><Checkbox checked={rows[0]?.bidu[1]} /></TableCell>
                        <TableCell align="center"><Checkbox checked={rows[0]?.dingo[0]} /><Checkbox checked={rows[0]?.dingo[1]} /></TableCell>
                        <TableCell align="center"><Checkbox checked={rows[0]?.feijaozinho[0]} /><Checkbox checked={rows[0]?.feijaozinho[1]} /></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DogTable;
