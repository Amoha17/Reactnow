import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import styled from "styled-components";

// Styled App Container
const AppContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
`;

const App = () => {
  // State to store employees
  const [employees, setEmployees] = useState([
    { name: "John Doe", position: "Software Engineer" },
    { name: "Jane Smith", position: "Project Manager" },
  ]);

  // Function to add employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // Function to delete employee
  const deleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
  };

  return (
    <AppContainer>
      <h2 className="text-center">Employee Management</h2>
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
    </AppContainer>
  );
};

export default App;
