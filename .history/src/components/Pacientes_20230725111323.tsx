import React, { useState } from 'react'
import { styled } from 'styled-components'

const PacientContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.size.md};

  > span {
    font-size: ${(props) => props.theme.size.xl};
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

  return(
    <>
      <span>Cadastrar Paciente</span>
      <span>Pacientes Cadastrados</span>
    </>
  )
}