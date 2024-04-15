import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchAsynUser, getUserList } from "./features/User/UserSlice";
import Home from "./components/Home";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsynUser());
    // eslint-disable-next-line
  }, []);
  const users = useSelector(getUserList);

  return <Home users={users} />;
}
