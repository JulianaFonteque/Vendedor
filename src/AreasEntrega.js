import React, { useState } from "react";
import { MapContainer, TileLayer, Polygon, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SidebarMenu from "./SidebarMenu";
import "./AreasEntrega.css";

const AreasEntrega = () => {
  const [areas, setAreas] = useState([]);
  const [currentArea, setCurrentArea] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [taxasEntrega, setTaxasEntrega] = useState({
    "1km": "",
    "2km": "",
    "4km": "",
  });

  // Coordenadas para Londrina e região
  const londrinaCoordinates = [-23.3103, -51.1628];
  const mapBounds = [
    [-23.5, -51.5], // sudoeste
    [-23.1, -50.8], // nordeste
  ];

  const handleMapClick = (e) => {
    if (!isDrawing) return;

    const { lat, lng } = e.latlng;
    setCurrentArea((prev) => [...prev, [lat, lng]]);
  };

  const handleAddArea = () => {
    setAreas((prev) => [...prev, currentArea]);
    setCurrentArea([]);
    setIsDrawing(false);
  };

  const handleCancel = () => {
    setCurrentArea([]);
    setIsDrawing(false);
  };

  const handleTaxaChange = (e, key) => {
    setTaxasEntrega((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const saveTaxas = () => {
    console.log("Taxas de entrega configuradas:", taxasEntrega);
    alert("Taxas de entrega salvas com sucesso!");
  };

  const DrawingTool = () => {
    useMapEvents({
      click: handleMapClick,
    });

    return null;
  };

  return (
    <div className="areas-entrega-container">
      <SidebarMenu />

      <div className="areas-entrega-main">
        <h1>Áreas de Entrega</h1>
        <p>Selecione as áreas de entrega no mapa e configure as taxas de entrega.</p>

        <MapContainer
          center={londrinaCoordinates}
          zoom={13}
          minZoom={12}
          maxZoom={16}
          scrollWheelZoom={true}
          style={{ height: "500px", width: "100%" }}
          maxBounds={mapBounds}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {areas.map((area, index) => (
            <Polygon key={index} positions={area} color="blue" />
          ))}
          {currentArea.length > 0 && <Polygon positions={currentArea} color="red" />}
          <DrawingTool />
        </MapContainer>

        <div className="actions">
          {!isDrawing ? (
            <button onClick={() => setIsDrawing(true)} className="start-draw-button">
              Iniciar Seleção
            </button>
          ) : (
            <>
              <button onClick={handleAddArea} className="save-area-button">
                Salvar Área
              </button>
              <button onClick={handleCancel} className="cancel-area-button">
                Cancelar
              </button>
            </>
          )}
        </div>

        {/* Card para Definição de Taxas */}
        <div className="taxa-entrega-card">
          <h2>Definir Taxas de Entrega</h2>
          <p>Insira os valores para as distâncias correspondentes:</p>
          <div className="taxa-opcoes">
            <div className="taxa-input">
              <label>Até 1 km:</label>
              <input
                type="number"
                value={taxasEntrega["1km"]}
                onChange={(e) => handleTaxaChange(e, "1km")}
                placeholder="Ex: 5.00"
              />
            </div>
            <div className="taxa-input">
              <label>Até 2 km:</label>
              <input
                type="number"
                value={taxasEntrega["2km"]}
                onChange={(e) => handleTaxaChange(e, "2km")}
                placeholder="Ex: 8.00"
              />
            </div>
            <div className="taxa-input">
              <label>Até 4 km:</label>
              <input
                type="number"
                value={taxasEntrega["4km"]}
                onChange={(e) => handleTaxaChange(e, "4km")}
                placeholder="Ex: 12.00"
              />
            </div>
          </div>
          <button className="save-taxa-button" onClick={saveTaxas}>
            Salvar Taxas
          </button>
        </div>
      </div>
    </div>
  );
};

export default AreasEntrega;
