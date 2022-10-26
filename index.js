const pegarLocalizacao = () => {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(mostrarPosicao);
   } else {
      alert("Geolocation nao suportado.")
   }
}
const mostrarPosicao = (pos) => {
   var latitude = pos.coords.latitude
   var longitude = pos.coords.longitude
   return [latitude, longitude]
}

const httpGet = (url) => {
   var http = new XMLHttpRequest()
   http.open("GET", url, false)
   http.send(null);
   return JSON.parse(http.responseText)
}

// httpGet("https://nominatim.openstreetmap.org/reverse?lat=" + latitude + "&lon=" + longitude + "&format=json")


