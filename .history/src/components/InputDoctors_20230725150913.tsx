import { useState } from "react";
import { SubmitButton } from "./SubmitButton";
import styled from "styled-components";
import { DoctorsProps, Doctors } from "./Doctors";

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
`

export function InputDoctors(){
  const [doctor, setDoctor] = useState<DoctorsProps[]>([])
  const [newDoctor, setNewDoctor] = useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    
  }

  return(
    <DoctorContainer>
      <span>Cadastrar Médico</span>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={doctor.name}
            onChange={handleInputChange}
            placeholder='Gercina da Silva'
          />
        </label>
        <br />
        <label>
          CRM:
          <input
            type="text"
            name="idade"
            value={doctor.crm}
            onChange={handleInputChange}
            placeholder='número do crm'
          />
        </label>
        <br />
        <label>
          Especialização:
          <input
            type="text"
            name="telefone"
            value={doctor.specialization}
            onChange={handleInputChange}
            placeholder='(99)99999-9999'
          />
        </label>
        <br />
        <SubmitButton onClick={handleSubmit} />
      </form>


      <span>Médicos Cadastrados</span>
    </DoctorContainer>
  )
}