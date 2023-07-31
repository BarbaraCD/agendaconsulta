import React, { useState } from "react";

export const AgendamentoConsulta: React.FC = () => {

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

