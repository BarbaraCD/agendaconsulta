import React, { useEffect, useState } from "react";
import { SubmitButton } from "./SubmitButton";
import styled from "styled-components"

const DoctorContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};

  span {
    font-size: ${(props) => props.theme.size.xl};
    background-color: ${(props) => props.theme.colors[100]};
  }
`;

export function InputDoctors() {
  return (
    <DoctorContainer>
      <span>Cadastrar Médico</span>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={newDoctorData.name}
            onChange={handleInputChange}
            placeholder='Gercina da Silva'
          />
        </label>
        <br />
        <label>
          CRM:
          <input
            type="text"
            name="crm"
            value={newDoctorData.crm}
            onChange={handleInputChange}
            placeholder='número do crm'
          />
        </label>
        <br />
        <label>
          Especialização:
          <input
            type="text"
            name="specialization"
            value={newDoctorData.specialization}
            onChange={handleInputChange}
            placeholder='(99)99999-9999'
          />
        </label>
        <br />
        <SubmitButton onClick={createNewDoctor} />
      </form>

      <span>Médicos Cadastrados</span>
    </DoctorContainer>
  );
}
