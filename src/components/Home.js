import React from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Card from "./UI/Card/Card";

export default function Home({ users }) {
  return (
    <Container>
      <Card>
        <Table responsive hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {users?.map((ur, index) => (
              <tr key={index}>
                <td>{ur._id}</td>
                <td>{ur.name}</td>
                <td>{ur.email}</td>
                <td>{ur.role}</td>
                <td>
                  <Button variant="outline-primary">Edit</Button>{" "}
                </td>
                <td>
                  <Button variant="outline-danger">Delete</Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}
