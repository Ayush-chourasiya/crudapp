import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

function RestaurentUpdate(props) {
  const [id, setId] = useState("");
  const [first_name, setFirstname] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(props.match.params.id);

    fetch("https://reqres.in/api/users" + props.match.params.id).then(
      (result) => {
        result.json().then((response) => {
          setFirstname(response.first_name);
          setLastName(response.last_name);
          setId(response.id);
          setEmail(response.email);
        });
      }
    );
  }, []);

  const update = () => {
    let data = { id, first_name, last_name, email };
    fetch("http://localhost:3000/restaurent/" + id, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((responce) => {
        alert(`Restaurent update  ${first_name} ${last_name}  ${email}`);
      });
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={(p) => update(p)}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>FirstName</TableCell>
                <TableCell>Lastname</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>---</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <input
                    type="text"
                    placeholder="ID"
                    disabled
                    value={id}
                    onChange={(e) => {
                      setId(e.target.value);
                    }}
                  />
                </TableCell>

                <TableCell>
                  <input
                    type="text"
                    placeholder="FirstName"
                    value={first_name}
                    onChange={(e) => {
                      setFirstname(e.target.value);
                    }}
                  />
                </TableCell>

                <TableCell>
                  <input
                    type="text"
                    placeholder="Lastname"
                    value={last_name}
                    onChange={(e) => {
                      setLastName(e.target.value);
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
                  <Button type="submit">Update</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </form>
      </div>
    </div>
  );
}

export default RestaurentUpdate;
