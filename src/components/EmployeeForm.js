import React, { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import styled from "styled-components";

// Styled form container
const FormContainer = styled.div`
  background: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const EmployeeForm = ({ addEmployee }) => {
  // Form state
  const [formData, setFormData] = useState({ name: "", position: "" });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.position) {
      addEmployee(formData); // Pass data to App
      setFormData({ name: "", position: "" }); // Reset form
    }
  };

  return (
    <FormContainer>
      <h4>Add Employee</h4>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Employee Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          label="Position"
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
        />
        <Button
          text="Add Employee"
          type="submit"
          bgColor="#28a745"
          hoverColor="#218838"
        />
      </form>
    </FormContainer>
  );
};

export default EmployeeForm;
