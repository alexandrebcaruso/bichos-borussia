import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";
const data = require('../../data.json');

const DogTable = () => {
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
                    {data.rows?.map((row) => (
                        <TableRow
                            key={row.date}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="center"><Checkbox checked={row.bidu[0]} /><Checkbox checked={row.bidu[1]} /></TableCell>
                            <TableCell align="center"><Checkbox checked={row.dingo[0]} /><Checkbox checked={row.dingo[1]} /></TableCell>
                            <TableCell align="center"><Checkbox checked={row.feijaozinho[0]} /><Checkbox checked={row.feijaozinho[1]} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DogTable;
