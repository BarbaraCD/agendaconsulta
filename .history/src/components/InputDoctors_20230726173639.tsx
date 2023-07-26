
import styled from "styled-components"

const DoctorContainer = styled.div`
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};

  h3 {
    font-size: ${(props) => props.theme.size.xl};
    background-color: ${(props) => props.theme.colors[100]};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 10px;
  }
`

const DocForm = styled.form`
  box-sizing: border-box;
  padding-top: 20px;
`

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
      <h3>Cadastrar Médico</h3>

      <DocForm>
        <div></div>
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
            placeholder='Número do CRM'
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
            placeholder='Especialização médica'
          />
        </label>
      </DocForm>
    </DoctorContainer>
  )
}
