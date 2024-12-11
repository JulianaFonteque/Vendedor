import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu"; // Importa o menu lateral
import "./Horarios.css";

const Horarios = () => {
  const diasDaSemana = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo",
  ];

  const [horarios, setHorarios] = useState(
    diasDaSemana.map(() => ({
      aberto: true,
      turnos: [{ inicio: "11:00", fim: "15:00" }],
    }))
  );

  const calcularHorasAbertura = (turnos) => {
    return turnos.reduce((totalHoras, turno) => {
      const [inicioHoras, inicioMinutos] = turno.inicio.split(":").map(Number);
      const [fimHoras, fimMinutos] = turno.fim.split(":").map(Number);

      const horasInicio = inicioHoras + inicioMinutos / 60;
      const horasFim = fimHoras + fimMinutos / 60;

      return totalHoras + (horasFim - horasInicio);
    }, 0);
  };

  const handleToggleAberto = (index) => {
    const novosHorarios = [...horarios];
    novosHorarios[index].aberto = !novosHorarios[index].aberto;
    setHorarios(novosHorarios);
  };

  const handleHorarioChange = (index, turnoIndex, campo, valor) => {
    const novosHorarios = [...horarios];
    novosHorarios[index].turnos[turnoIndex][campo] = valor;
    setHorarios(novosHorarios);
  };

  const handleAddTurno = (index) => {
    const novosHorarios = [...horarios];
    novosHorarios[index].turnos.push({ inicio: "09:00", fim: "18:00" });
    setHorarios(novosHorarios);
  };

  const handleRemoveTurno = (index, turnoIndex) => {
    const novosHorarios = [...horarios];
    novosHorarios[index].turnos.splice(turnoIndex, 1);
    setHorarios(novosHorarios);
  };

  return (
    <div className="horarios-container">
      {/* Menu Lateral */}
      <SidebarMenu />

      {/* Conteúdo Principal */}
      <div className="horarios-main">
        <div className="alerta">
          <p>
            Configure os dias e horários que sua loja estará aberta e disponível
            para entregas.
          </p>
        </div>
        <div className="horarios-tabela">
          {diasDaSemana.map((dia, index) => (
            <div key={index} className="dia-container">
              <div className="dia-header">
                <h4>{dia}</h4>
                <button
                  className={`status-button ${
                    horarios[index].aberto ? "aberto" : "fechado"
                  }`}
                  onClick={() => handleToggleAberto(index)}
                >
                  {horarios[index].aberto
                    ? `Aberta por ${Math.floor(
                        calcularHorasAbertura(horarios[index].turnos)
                      )} horas`
                    : "Fechada"}
                </button>
              </div>
              {horarios[index].aberto && (
                <div className="turnos-container">
                  {horarios[index].turnos.map((turno, turnoIndex) => (
                    <div key={turnoIndex} className="turno">
                      <input
                        type="time"
                        value={turno.inicio}
                        onChange={(e) =>
                          handleHorarioChange(
                            index,
                            turnoIndex,
                            "inicio",
                            e.target.value
                          )
                        }
                      />
                      <span>-</span>
                      <input
                        type="time"
                        value={turno.fim}
                        onChange={(e) =>
                          handleHorarioChange(
                            index,
                            turnoIndex,
                            "fim",
                            e.target.value
                          )
                        }
                      />
                      <button
                        className="remove-turno"
                        onClick={() => handleRemoveTurno(index, turnoIndex)}
                      >
                        Remover
                      </button>
                    </div>
                  ))}
                  <button
                    className="add-turno"
                    onClick={() => handleAddTurno(index)}
                  >
                    + Adicionar Turno
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Horarios;
