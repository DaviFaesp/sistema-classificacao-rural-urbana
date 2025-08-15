const XLSX = require('xlsx');

// Dados de teste em ordem específica
const dados = [
  { Latitude: -23.550520, Longitude: -46.633308 }, // São Paulo (1)
  { Latitude: -22.906847, Longitude: -43.172896 }, // Rio de Janeiro (2)
  { Latitude: -15.794229, Longitude: -47.882166 }, // Brasília (3)
  { Latitude: -12.971398, Longitude: -38.501419 }, // Salvador (4)
  { Latitude: -3.731862, Longitude: -38.526669 }   // Fortaleza (5)
];

// Criar planilha
const ws = XLSX.utils.json_to_sheet(dados);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Coordenadas');

// Salvar arquivo
XLSX.writeFile(wb, 'teste_ordem_coordenadas.xlsx');

console.log('✅ Arquivo Excel criado: teste_ordem_coordenadas.xlsx');
console.log('📋 Ordem das coordenadas:');
dados.forEach((coord, index) => {
  console.log(`${index + 1}. ${coord.Latitude}, ${coord.Longitude}`);
});
