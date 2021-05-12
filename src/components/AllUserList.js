import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function AllUserList() {
  const [getdata, setgetdata] = useState([]);

  const refresh = () => {
    fetch("https://reqres.in/api/users").then((result) => {
      result.json().then((response) => {
        setgetdata(response.data);
      });
    });
  };
  useEffect(() => {
    refresh();
  }, []);

  const deleted = async (id) => {
    await fetch(`https://reqres.in/api/users/` + id, {
      method: "DELETE",
    }).then((response) => {
      response.json();
      console.log(response);
    });
  };
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>FirstName</TableCell>
            <TableCell>LastName</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>profile</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          -
          {getdata.map((item, index) => (
            <TableRow>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.first_name}</TableCell>
              <TableCell>{item.last_name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.profile}</TableCell>

              <TableCell>
                <Link to={"/update/" + item.id}>
                  <EditIcon />
                </Link>
                <span onClick={() => deleted(item.id)}>
                  <DeleteIcon />
                </span>
              </TableCell>
            </TableRow>
          ))}
          ;
        </TableBody>
      </Table>
    </div>
  );
}

export default AllUserList;
