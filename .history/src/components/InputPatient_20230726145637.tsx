
import styled from "styled-components"

const PatientContainer = styled.div`
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

interface InputPatientsProps{
  name: string
  crm: number
  specialization: string
  onNameChange: (value: string) => void
  onCrmChange: (value: number) => void
  onSpecializationChange: (value: string) => void
}

export function InputPatients(props: InputPatientsProps) {
  return (
    <PatientContainer>
      <span>Cadastrar Médico</span>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={props.name}
            onChange={(event) => props.onNameChange(event.target.value)}
            placeholder='Gercina da Silva'
          />
        </label>
        <br />
        <label>
          CRM:
          <input
            type="text"
            name="crm"
            value={props.crm}
            onChange={(event) => props.onCrmChange(Number(event.target.value))}
            placeholder='número do crm'
          />
        </label>
        <br />
        <label>
          Especialização:
          <input
            type="text"
            name="specialization"
            value={props.specialization}
            onChange={(event) => props.onSpecializationChange(event.target.value)}
            placeholder='(99)99999-9999'
          />
        </label>
      </form>
    </PatientContainer>
  );
}
