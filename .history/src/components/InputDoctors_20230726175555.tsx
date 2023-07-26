
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

const DocLabel = styled.label`
  label{
    display: flex;
    font-size: ${(props) => props.theme.size.xl};
    color: ${(props) => props.theme.colors.black};
    flex-direction: row;

    p{
      display: flex;
    }
    
  }
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
      <h3>Cadastrar um novo médico</h3>

      <DocForm>
        <div></div>
        <DocLabel>
          Nome: 
          
          <input
            type="text"
            name="nome"
            value={props.name}
            onChange={(event) => props.onNameChange(event.target.value)}
            placeholder='Gercina da Silva'
          />
        </DocLabel>
        <br />
        <DocLabel>
          <p>CRM:</p>
          <input
            type="text"
            name="crm"
            value={props.crm}
            onChange={(event) => props.onCrmChange(Number(event.target.value))}
            placeholder='Número do CRM'
          />
        </DocLabel>
        <br />
        <DocLabel>
          <p>Especialização:</p>
          <input
            type="text"
            name="specialization"
            value={props.specialization}
            onChange={(event) => props.onSpecializationChange(event.target.value)}
            placeholder='Especialização médica'
          />
        </DocLabel>
      </DocForm>
    </DoctorContainer>
  )
}
