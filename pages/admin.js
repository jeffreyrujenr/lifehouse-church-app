import Navbar from "@/components/Navbar";
import useAuthContext from "@/hooks/useAuthContext";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Admin = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const [data, setData] = useState();

  useEffect(() => {
    if (user) {
      if (user.role) fetchUsers();
      else router.push("/");
    } else router.push("/");
  }, [user]);

  const fetchUsers = () => {
    fetch("http://localhost:4000/api/v1/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((users) => {
        setData(users);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <>
      <Head>
        <title>Lifehouse Church | Admin</title>
        <meta name="description" content="Lifehouse church admin view" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {data && (
        <TableContainer
          component={Paper}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "80%",
            marginX: "auto",
            marginY: 2,
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Wedding Anniversary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.mobile}</TableCell>
                  <TableCell>
                    {new Date(item.dateOfBirth).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {item.weddingAnniversary
                      ? new Date(item.weddingAnniversary).toLocaleDateString()
                      : "NA"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            sx={{ marginY: 2 }}
            variant="outlined"
            onClick={() => fetchUsers()}
          >
            Refresh
          </Button>
        </TableContainer>
      )}
    </>
  );
};

export default Admin;
