import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Checkbox } from "@mui/material";

function createData(date, bidu, dingo, feijaozinho) {
    return { date, bidu, dingo, feijaozinho };
}

const rows = [
    createData(
        new Date().toDateString(),
        <Checkbox checked />, 
        <Checkbox checked />,
        <Checkbox checked />,
    ),
];

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
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                        >
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="center">{row.bidu}</TableCell>
                            <TableCell align="center">{row.dingo}</TableCell>
                            <TableCell align="center">{row.feijaozinho}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default DogTable;
