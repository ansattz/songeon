var latitude, longitude, dadosLocalizacao, tempo;
let btnLoc = document.getElementById('btnLoc')
let playSec = document.getElementById('playlist-id')

const themes = {
   Clouds: {
      'few clouds': "7LOpKH4CjlNkIRwXr2vcHf",
      'scattered clouds': "",
      'broken clouds': "532Fg95iIa7PF3ulFGrKfv",
      'overcast clouds': "5C1OsolkEdvyrboc25OLG8"
   },
   Rain: {
      'light rain': "47PtuZO5RI7lLAV2ldBbld",
      'moderate rain': "4QAYAMQrGEG6u8OaopJTxX",
      'shower rain': "4GmPOIOCItFa4TtFmG7Ysz"
   }
}

function criarPlaylist(playlist_id) {
   const playlistDiv = document.createElement("div")
   var conteudo =
      `
      <iframe style="border-radius:12px" 
         src="https://open.spotify.com/embed/playlist/${playlist_id}?utm_source=generator" 
         width="35%" height="450" frameBorder="0" allowfullscreen="" 
         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
         loading="lazy">
      </iframe>
   `
   playlistDiv.innerHTML = conteudo
   return playlistDiv
}

btnLoc.onclick = () => {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(mostrarPosicao, erroPosicao)
   } else {
      alert("Geolocation nao suportado.")
   }
}

const mostrarPosicao = (pos) => {
   latitude = pos.coords.latitude
   longitude = pos.coords.longitude
}

const erroPosicao = (erro) => {
   alert("Geolocation nao pegou loc")
}

const httpGet = (url) => {
   var http = new XMLHttpRequest()
   http.open("GET", url, false)
   http.send(null);
   return JSON.parse(http.responseText)
}

const pegarDadosLocalizacao = () => {
   dadosLocalizacao = httpGet("https://nominatim.openstreetmap.org/reverse?lat=" + latitude + "&lon=" + longitude + "&format=json")
}

const pegarTempo = () => {
   tempo = httpGet("https://api.openweathermap.org/data/2.5/weather?q=" +
      dadosLocalizacao.address.city + "&appid=2b425334302e4882839efd307f61b3fa")
}

const matchPlaylist = () => {
   pegarDadosLocalizacao()
   pegarTempo()
   playSec.appendChild(criarPlaylist(themes[tempo.weather[0].main][tempo.weather[0].description]))
}

