import React, { useState } from 'react'
import { styled } from 'styled-components'
import { SubmitButton } from './SubmitButton'

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

export function Doctors(){
  const [Doctor, setDoctor] = useState({
    name: "",
    crm: "",
    specialization: "",
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const { name, value } = event.target;
      setDoctor((prevState) => ({ ...prevState, [name]: value }));
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para salvar o cliente no banco de dados
    console.log("Medico a ser salvo: ", Doctor);
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
            value={Doctor.name}
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
            value={Doctor.crm}
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
            value={Doctor.specialization}
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