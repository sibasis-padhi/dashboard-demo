import React, { useState } from "react";
import UserForm from "../Forms/UserForm";
import { useDispatch } from "react-redux";
import { fetchAsyncUserAdd } from "../../features/User/UserSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  role: "",
};

const addUser = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncUserAdd({ values }))
      .then((res) => {
        window.alert(`"${res.payload.name}" is created successfully!`);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.erro(err.response.data.err);
      });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <UserForm
      values={values}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default addUser;
