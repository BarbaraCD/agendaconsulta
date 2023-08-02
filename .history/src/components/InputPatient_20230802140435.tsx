import { useState } from 'react'
import { InputContainer } from '../styles/InputContainer'

interface InputPatientsProps{
  name: string
  age: number
  telephone: number
  email: string
  onNameChange: (value: string) => void
  onAgeChange: (value: number) => void
  onTelephoneChange: (value: number) => void
  onEmailChange: (value: string) => void
}

export function InputPatients(props: InputPatientsProps) {
  const [telephone, setTelephone] = useState<number>(props.telephone);

  const handleTelephoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const numericValue = value.replace(/\D/g, '');
    const limitedValue = numericValue.slice(0, 9);
    setTelephone(limitedValue === '' ? '' : Number(limitedValue));
    props.onTelephoneChange(Number(limitedValue));
  };
  
  return (
    <InputContainer>
        <label>
          <p>Nome:</p>
          <input
            type="text"
            name="nome"
            value={props.name.toUpperCase()}
            onChange={(event) => props.onNameChange(event.target.value)}
            placeholder='Gercina da Silva'
          />
        </label>
        <br />
        <label>
          <p>Idade:</p>
          <input
            type="text"
            name="idade"
            value={props.age}
            onChange={(event) => props.onAgeChange(Number(event.target.value))}
            placeholder='idade'
          />
        </label>
        <br />
        <label>
          <p>Telefone:</p>
          <input 
            type="text"
            name="telefone"
            value={props.telephone}
            onChange={handleTelephoneChange}
          />
        </label>
        <br />
        <label>
          <p>Email:</p>
          <input
            type="text"
            name="email"
            value={props.email.toLowerCase()}
            onChange={(event) => props.onEmailChange(event.target.value)}
            placeholder='digiteseuemail@gmail.com'
          />
        </label>
    </InputContainer>
  );
}
