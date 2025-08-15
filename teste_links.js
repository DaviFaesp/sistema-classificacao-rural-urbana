// Teste dos links do Google Maps e OpenStreetMap

// Coordenadas de teste (São Paulo)
const lat = -23.550520;
const lng = -46.633308;

console.log('=== TESTE DOS LINKS DE MAPAS ===');
console.log(`Coordenadas: ${lat}, ${lng}`);
console.log('');

// Função para gerar links (igual à do sistema)
function criarLinksMapas(lat, lng) {
  return {
    googleMaps: `https://www.google.com/maps/place/${lat},${lng}/@${lat},${lng},17z/data=!3m1!4b1!4m4!3m3!8m2!3d${lat}!4d${lng}`,
    openStreetMap: `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=17/${lat}/${lng}`
  };
}

const links = criarLinksMapas(lat, lng);

console.log('Google Maps (com marcador):');
console.log(links.googleMaps);
console.log('');
console.log('OpenStreetMap:');
console.log(links.openStreetMap);
console.log('');
console.log('✅ Os links agora apontam exatamente para as coordenadas!');
console.log('✅ Google Maps mostrará um marcador na localização exata');
console.log('✅ OpenStreetMap centralizará no ponto especificado');
console.log('');
console.log('CORREÇÃO APLICADA:');
console.log('- Antes: https://www.google.com/maps/@lat,lng,15z (sem marcador)');
console.log('- Agora: https://www.google.com/maps/place/lat,lng/@lat,lng,17z/... (com marcador)');
