import React, { useState } from 'react'
import { styled } from 'styled-components'

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
`

export function Pacients(){
  const [patient, setPatient] = useState({
    name: "",
    age: "",
    telephone: "",
    email: ""
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const { name, value } = event.target;
      setPatient((prevState) => ({ ...prevState, [name]: value }));
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para salvar o cliente no banco de dados
    console.log("Cliente a ser salvo: ", patient);
  }

  return(
    <PatientContainer>
      <span>Cadastrar Paciente</span>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={patient.name}
            onChange={handleInputChange}
            placeholder='Gercina da Silva'
          />
        </label>
        <br />
        <label>
          Idade:
          <input
            type="text"
            name="idade"
            value={patient.age}
            onChange={handleInputChange}
            placeholder='22 anos'
          />
        </label>
        <br />
        <label>
          Telefone:
          <input
            type="text"
            name="telefone"
            value={patient.telephone}
            onChange={handleInputChange}
            placeholder='(99)99999-9999'
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={patient.email}
            onChange={handleInputChange}
            placeholder='paciente@gmail.com'
          />
        </label>
      </form>


      <span>Pacientes Cadastrados</span>
    </PatientContainer>
  )
}