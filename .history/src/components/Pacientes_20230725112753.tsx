import React, { useState } from 'react'
import { styled } from 'styled-components'

const PacientContainer = styled.div`
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

export function Pacientes(){
  const [pacient, setPacient] = useState({
    nome: "",
    idade: "",
    telefone: "",
    email: ""
  })

  const handleInputChange = () => {}
  const handleSubmit = () => {}

  return(
    <PacientContainer>
      <span>Cadastrar Paciente</span>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={pacient.nome}
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
            value={pacient.idade}
            onChange={handleInputChange}
            placeholder='digite sua idade'
          />
        </label>
        <br />
        <label>
          Telefone:
          <input
            type="text"
            name="telefone"
            value={pacient.telefone}
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
            value={pacient.email}
            onChange={handleInputChange}
            placeholder='paciente@gmail.com'
          />
        </label>
        <br />
        <button type="submit">Salvar Cliente</button>
      </form>


      <span>Pacientes Cadastrados</span>
    </PacientContainer>
  )
}