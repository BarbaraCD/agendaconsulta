import { InputContainer, StyledInput } from '../styles/InputContainer'

interface InputPatientsProps{
  name: string
  age: number
  telephone: number
  email: string
  id: number
  onNameChange: (value: string) => void
  onAgeChange: (value: number) => void
  onTelephoneChange: (value: number) => void
  onEmailChange: (value: string) => void
}

export function InputPatients(props: InputPatientsProps) {

  const handleTelephoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value.replace(/\D/g, '');
    const limitedValue = numericValue.slice(0, 11);
    props.onTelephoneChange(Number(limitedValue));
  }

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value.replace(/\D/g, '');
    const limitedValue = numericValue.slice(0, 2);
    props.onAgeChange(Number(limitedValue));
  }

  return (
    <InputContainer>
        <label>
          <p>Nome:</p>
          <StyledInput
            type="text"
            name="nome"
            value={props.name}
            onChange={(event) => props.onNameChange(event.target.value)}
            placeholder='Gercina da Silva'
          />
        </label>
        <br />
        <label>
          <p>Idade:</p>
          <StyledInput
            type="text"
            name="idade"
            value={props.age}
            onChange={handleAgeChange}
            placeholder='idade'
          />
        </label>
        <br />
        <label>
          <p>Telefone:</p>
          <StyledInput 
            type="text"
            name="telefone"
            value={props.telephone}
            onChange={handleTelephoneChange}
          />
        </label>
        <br />
        <label>
          <p>Email:</p>
          <StyledInput
            type="text"
            name="email"
            value={props.email}
            onChange={(event) => props.onEmailChange(event.target.value)}
            placeholder='digiteseuemail@gmail.com'
          />
        </label>
    </InputContainer>
  );
}
