import React, { useEffect, useState } from "react";
import { SubmitButton } from "./SubmitButton";
import styled from "styled-components";
import { DoctorsProps } from "./Doctors";
import { getDoctors } from "../services/doctor.services";

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

export function InputDoctors() {
  const [doctorData, setDoctorData] = useState<DoctorsProps[]>([]);
  const [newDoctorData, setNewDoctorData] = useState<DoctorsProps>({
    id: 0,
    nome: "",
    crm: "",
    specialization: "",
  });

  useEffect(() => {
    fetchDoctor();
  }, []);

  async function fetchDoctor() {
    try {
      const response: any = await getDoctors();
      const fetchedDoctor = response.data;
      setDoctorData(fetchedDoctor);
    } catch (error) {
      console.error("Erro ao buscar médicos:", error);
    }
  }

  function createNewDoctor() {
    if (
      newDoctorData.name.trim() !== "" &&
      newDoctorData.crm.trim() !== "" &&
      newDoctorData.specialization.trim() !== ""
    ) {
      try {
        createNewDoctor(newDoctorData);
        fetchDoctor();
        setNewDoctorData({
          id: 0,
          name: "",
          crm: "",
          specialization: "",
        });
        console.log("Médico cadastrado com sucesso!");
      } catch (error) {
        console.error("Erro ao cadastrar médico:", error);
      }
    } else {
      console.error("Por favor, preencha todos os campos corretamente.");
    }
  }
  

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { name, value } = event.target;
    setNewDoctorData((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <DoctorContainer>
      <span>Cadastrar Médico</span>
      <form onSubmit={(event) => event.preventDefault()}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={newDoctorData.name}
            onChange={handleInputChange}
            placeholder='Gercina da Silva'
          />
        </label>
        <br />
        <label>
          CRM:
          <input
            type="text"
            name="crm"
            value={newDoctorData.crm}
            onChange={handleInputChange}
            placeholder='número do crm'
          />
        </label>
        <br />
        <label>
          Especialização:
          <input
            type="text"
            name="specialization"
            value={newDoctorData.specialization}
            onChange={handleInputChange}
            placeholder='(99)99999-9999'
          />
        </label>
        <br />
        <SubmitButton onClick={createNewDoctor} />
      </form>

      <span>Médicos Cadastrados</span>
    </DoctorContainer>
  );
}
