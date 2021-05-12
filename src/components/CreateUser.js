import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

function RestaurentCreate() {
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const Create = (p) => {
    p.preventDefault();
    let data = { first_name, last_name, email };
    fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => console.log(response));
  };

  return (
    <div>
      <form onSubmit={(p) => Create(p)}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>FirsrName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>---</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <input
                  type="text"
                  placeholder="Name"
                  value={first_name}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              </TableCell>

              <TableCell>
                <input
                  type="text"
                  placeholder="lastname"
                  value={last_name}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </TableCell>

              <TableCell>
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </TableCell>

              <TableCell>
                <Button type="submit" color="secondary">
                  Create
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </form>
    </div>
  );
}

export default RestaurentCreate;
