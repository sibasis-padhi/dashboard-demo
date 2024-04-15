import React, { Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home";
const AddUser = React.lazy(() => import("./components/User/AddUser"));
export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <main>
        <Suspense fallback={<div className="centered">Loading..</div>}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/adduser" exact element={<AddUser />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}
