import React from "react";
import Button from "./Button";
import styled from "styled-components";

// Styled list container
const ListContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

const EmployeeList = ({ employees, deleteEmployee }) => {
  return (
    <ListContainer>
      <h4>Employee List</h4>
      <ul className="list-group">
        {employees.length > 0 ? (
          employees.map((employee, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {employee.name} - {employee.position}
              <Button
                text="Delete"
                bgColor="#dc3545"
                hoverColor="#c82333"
                onClick={() => deleteEmployee(index)}
              />
            </li>
          ))
        ) : (
          <li className="list-group-item">No employees found.</li>
        )}
      </ul>
    </ListContainer>
  );
};

export default EmployeeList;
