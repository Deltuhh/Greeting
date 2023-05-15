import React, { useState } from "react";
import "./GreetingForm.css";

const GreetingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div className="greeting-form">
      {isEditing ? (
        <div>
          <h2 className="form-title">Edit Your Name</h2>
          <div className="input-container">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleChangeFirstName}
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleChangeLastName}
            />
          </div>
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div>
          <h2 className="welcome-message">
            Welcome, {firstName} {lastName}!
          </h2>
          <button className="edit-button" onClick={handleEdit}>
            Edit Name
          </button>
        </div>
      )}
    </div>
  );
};

export default GreetingForm;
