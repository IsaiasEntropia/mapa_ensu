export const regiones = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Norte", cobertura: 82 },
      geometry: {
        type: "Polygon",
        coordinates: [[[-109, 31], [-104, 31], [-104, 27], [-109, 27], [-109, 31]]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Centro", cobertura: 68 },
      geometry: {
        type: "Polygon",
        coordinates: [[[-103, 24], [-98, 24], [-98, 20], [-103, 20], [-103, 24]]],
      },
    },
    {
      type: "Feature",
      properties: { name: "Sur", cobertura: 44 },
      geometry: {
        type: "Polygon",
        coordinates: [[[-99, 20], [-92, 20], [-92, 16], [-99, 16], [-99, 20]]],
      },
    },
  ],
};

export const sedes = [
  { nombre: "Sede Monterrey", coords: [25.6866, -100.3161] },
  { nombre: "Sede CDMX", coords: [19.4326, -99.1332] },
  { nombre: "Sede Mérida", coords: [20.9674, -89.5926] },
];
