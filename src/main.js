import { renderHeader, renderFooter } from "./components/layout.js";
import { regiones, sedes } from "./data/mapData.js";

document.getElementById("site-header").innerHTML = renderHeader("inicio");
document.getElementById("site-footer").innerHTML = renderFooter();

function colorPorCobertura(valor) {
  if (valor >= 80) return "#0f766e";
  if (valor >= 50) return "#14b8a6";
  return "#99f6e4";
}

const map = L.map("mapa", { scrollWheelZoom: false }).setView([23.6, -102.5], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.geoJSON(regiones, {
  style: (feature) => ({
    fillColor: colorPorCobertura(feature.properties.cobertura),
    weight: 1,
    opacity: 1,
    color: "#0f172a",
    fillOpacity: 0.65,
  }),
  onEachFeature: (feature, layer) => {
    const { name, cobertura } = feature.properties;
    layer.bindPopup(`<strong>${name}</strong><br/>Cobertura: ${cobertura}%`);
  },
}).addTo(map);

sedes.forEach((sede) => {
  L.circleMarker(sede.coords, {
    radius: 7,
    color: "#1d4ed8",
    fillColor: "#60a5fa",
    fillOpacity: 0.9,
  })
    .bindTooltip(sede.nombre)
    .addTo(map);
});

const ctx = document.getElementById("grafica");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["2024-T1", "2024-T2", "2024-T3", "2024-T4", "2025-T1"],
    datasets: [
      {
        label: "Índice de confianza (%)",
        data: [46, 49, 54, 57, 61],
        borderColor: "#1d4ed8",
        backgroundColor: "rgba(29, 78, 216, 0.15)",
        tension: 0.3,
        fill: true,
        pointRadius: 4,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#0f172a",
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#334155" },
        grid: { color: "#cbd5e1" },
      },
      x: {
        ticks: { color: "#334155" },
      },
    },
  },
});
