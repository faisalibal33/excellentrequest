import "./personil.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";

const Personil = ({handleClick}) => {
  const { data, loading, error, reFetch } = useFetch("http://localhost:8800/api/request");
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <h1>Personil</h1>
        <Link to={`/user/new`} className="link">
          Add New
        </Link>
      </div>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">WO Number</TableCell>
              <TableCell className="tableCell">Aircraft Reg</TableCell>
              <TableCell className="tableCell">Request by</TableCell>
              <TableCell className="tableCell">Unit</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Equipment</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? ("Loading") : data.sort((a, b) => b.createdAt > a.createdAt? 1 : -1)
              .filter(item=>item.progress.toLowerCase().includes("open") || item.progress.toLowerCase().includes("progress")).map((item) => (
              <TableRow key={item._id}>
                <TableCell className="tableCell">{item._id}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">{item.aircraftReg}</div>
                </TableCell>
                <TableCell className="tableCell">{item.requestBy}</TableCell>
                <TableCell className="tableCell">{item.unit}</TableCell>
                <TableCell className="tableCell">{item.cratedAt}</TableCell>
                <TableCell className="tableCell">{item.equipment}</TableCell>
                <TableCell className="tableCell">
                { item.progress === "OPEN" ? ( 
                  <button className="openButton" onClick={handleClick}>OPEN</button> 
                  ) : item.progress === "CLOSE" ? ( 
                    <button className="closeButton" onClick={handleClick}>CLOSE</button> 
                  ) : (<button className="progressButton" onClick={handleClick}>PROGRESS</button> )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Personil;
