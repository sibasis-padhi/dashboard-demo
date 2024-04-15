import React from "react";
import { Button, Container } from "react-bootstrap";
import Card from "../UI/Card/Card";

const UserForm = ({ handleSubmit, handleChange, values }) => {
  const { name, email } = values;
  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={name}
              // placeholder={user?.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              value={email}
              // placeholder={user?.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Role</label>
            <select
              name="role"
              className="form-control"
              onChange={handleChange}
            >
              <option>Please select</option>
              {/* <option selected hidden>
                {user?.role}
              </option> */}
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>

          <br />

          <button variant="outline-primary">Save</button>
        </form>
      </Card>
    </Container>
  );
};

export default UserForm;
