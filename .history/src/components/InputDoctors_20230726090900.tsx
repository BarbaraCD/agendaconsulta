
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

interface InputDoctorsProps{
  name: string
  crm: number
  specialization: string
  onNameChange: (value: string) => void
  onCrmChange: (value: number) => void
  onSpecializationChange: (value: string) => void
}

export function InputDoctors(props: InputDoctorsProps) {
  return (
    <DoctorContainer>
      <span>Cadastrar Médico</span>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={props.name}
            onChange={(event) => props.onNameChange}
            placeholder='Gercina da Silva'
          />
        </label>
        <br />
        <label>
          CRM:
          <input
            type="text"
            name="crm"
            value={}
            onChange={}
            placeholder='número do crm'
          />
        </label>
        <br />
        <label>
          Especialização:
          <input
            type="text"
            name="specialization"
            value={}
            onChange={}
            placeholder='(99)99999-9999'
          />
        </label>
        <br />
        <SubmitButton onClick={} />
      </form>

      <span>Médicos Cadastrados</span>
    </DoctorContainer>
  );
}
