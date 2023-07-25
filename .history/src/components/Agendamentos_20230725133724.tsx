import React, { useState } from "react";

interface Patient {
  id: number;
  nome: string;
  telefone: string;
  email: string;
  sintomas: string;
}

export const AgendamentoConsulta: React.FC = () => {
  const [newPatientData, setNewPatientData] = useState<Patient>({
    id: 0,
    nome: "",
    telefone: "",
    email: "",
    sintomas: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewPatientData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleCreatePatient = async () => {
    if (
      newPatientData.nome.trim() !== "" &&
      newPatientData.telefone.trim() !== "" &&
      newPatientData.email.trim() !== "" &&
      newPatientData.sintomas.trim() !== ""
    ) {
      try {
        // Faz a chamada à função createPatient enviando os dados do novo paciente.
        const response = await createPatient(newPatientData);
        if (response.status === "success") {
          console.log("Paciente criado com sucesso!");
          // O servidor retorna o paciente criado com o ID gerado automaticamente.
          // Você pode atualizar o estado com o paciente retornado do servidor para ter o ID atualizado.
          setNewPatientData({ ...newPatientData, id: response.data.id });
        } else {
          console.error("Falha ao criar paciente.");
        }
      } catch (error) {
        console.error("Erro ao criar paciente:", error);
      }
    }
  };

  return (
    <div>
      <h2>Agendar Consulta</h2>
      <label>
        Nome:
        <input
          type="text"
          name="nome"
          value={newPatientData.nome}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Telefone:
        <input
          type="text"
          name="telefone"
          value={newPatientData.telefone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={newPatientData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Sintomas:
        <textarea
          name="sintomas"
          value={newPatientData.sintomas}
          onChange={handleChange}
        />
      </label>
      <br />
      <button onClick={handleCreatePatient}>Criar Paciente</button>
    </div>
  );
};

