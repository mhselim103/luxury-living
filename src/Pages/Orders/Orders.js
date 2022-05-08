import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "email", label: "Email Id", minWidth: 100 },
  {
    id: "service",
    label: "Service",
    minWidth: 170,
  },
  {
    id: "pay",
    label: "Pay With",
    minWidth: 170,
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
];

function createData(name, email, service, pay, status) {
  return { name, email, service, pay, status };
}

const rows = [
  createData("India", "selim@saikat.com", 1324171354, 3287263, "Pending"),
  createData("China", "selim@saikat.com", 1403500365, 9596961, "Pending"),
  createData("Italy", "selim@saikat.com", 60483973, 301340, "Pending"),
  createData("United", " selim@saikat.com", 327167434, 9833520, "Pending"),
  createData("Canada", "selim@saikat.com", 37602103, 9984670, "Pending"),
  createData("Australia", "selim@saikat.com", 25475400, 7692024, "Pending"),
  createData("Germany", "selim@saikat.com", 83019200, 357578, "Pending"),
  createData("Ireland", "selim@saikat.com", 4857000, 70273, "Pending"),
  createData("Mexico", "selim@saikat.com", 126577691, 1972550, "Pending"),
  createData("Japan", "selim@saikat.com", 126317000, 377973, "Pending"),
  createData("France", "selim@saikat.com", 67022000, 640679, "Pending"),
  createData("United", " selim@saikat.com", 67545757, 242495, "Pending"),
  createData("Russia", "selim@saikat.com", 146793744, 17098246, "Pending"),
  createData("Nigeria", "selim@saikat.com", 200962417, 923768, "Pending"),
  createData("Brazil", "selim@saikat.com", 210147125, 8515767, "Pending"),
];

export default function Orders() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }} className="table">
      <TableContainer sx={{ maxHeight: 500, maxWidth: "100%" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.email}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 15, 20, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
