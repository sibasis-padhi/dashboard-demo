import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import UserForm from "../Forms/UserForm";
import { useSelector } from "react-redux";
import { getUserById } from "../../features/User/UserSlice";
import getAllUsers from "../../apis/getAllUsers";
import { toast } from "react-toastify";

const EditUserModal = (props) => {
  const id = props.selectedUser;
  const user = useSelector(getUserById);
  const [values, setValues] = useState({
    name: user.name,
    email: user.email,
    role: user.role,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    getAllUsers
      .patch(`/userupdate/${id}`, values)
      .then((res) => {
        props.close();
        toast.error(res.data.message);
        navigate("/");
        dispatch(fetchAsynUser());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <Modal show={props.show} onHide={props.close}>
      <Modal.Header closeButton onClick={props.close}>
        <Modal.Title>Edit User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UserForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          values={values}
          // user={user}
        />
      </Modal.Body>

      <Modal.Footer></Modal.Footer>
    </Modal>
  );
};

export default EditUserModal;
