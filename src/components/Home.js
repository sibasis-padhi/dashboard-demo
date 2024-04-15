import React, { useState, useEffect } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsynUser,
  getUserList,
  fetchAsynUserById,
} from "../features/User/UserSlice";
import { Link } from "react-router-dom";
import Card from "./UI/Card/Card";
import EditUserModal from "./Modal/EditUserModal";
import getAllUsers from "../apis/getAllUsers";
import { toast } from "react-toastify";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchAsynUser());
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
    // eslint-disable-next-line
  }, []);
  const users = useSelector(getUserList);
  const [isAddUserShown, setIsAddUserShown] = useState(false);
  const [selectedUser, setSelectedUser] = useState();

  const deleteuser = (id) => {
    getAllUsers
      .delete(`/removeuser/${id}`)
      .then((res) => {
        toast.error(res.data.message);
        dispatch(fetchAsynUser());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const editUserModal = (id) => {
    setIsAddUserShown(true);
    dispatch(fetchAsynUserById(id));
    setSelectedUser(id);
  };

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
                  <Button
                    variant="outline-primary"
                    onClick={() => editUserModal(ur?._id)}
                  >
                    Edit
                  </Button>{" "}
                </td>
                <td>
                  <Button
                    variant="outline-danger"
                    onClick={(e) => deleteuser(ur?._id)}
                  >
                    Delete
                  </Button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
      <EditUserModal
        show={isAddUserShown}
        close={() => setIsAddUserShown(false)}
        selectedUser={selectedUser}
      />
      <Link to="/adduser">
        <Button variant="outline-primary">Add User</Button>
      </Link>
    </Container>
  );
};
export default Home;
