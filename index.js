var latitude, longitude, dadosLocalizacao, tempoInfo;
let btnLoc = document.getElementById('btnLoc')
let corpo = document.getElementById('corpo-conteudo')
let gitBtn = document.getElementById('autor-id')
let lofiBtn = document.getElementById('lofi-id')
let classicBtn = document.getElementById('classic-id')
let deepBtn = document.getElementById('deeph-id')
let ambientBtn = document.getElementById('ambient-id')
// Teremos uma playlist de acordo com o tempo na regiao.
// A descricao nos entrega mais detalhes sobre como esta o 
// tempo naquela regiao. Como sendo a primeira versao 
// essa eh uma solucao razoavel antes de pensar em como 
// esta a temperatura na regiao.

const theme = {
   "Clouds": {
      "few clouds": "1J58o8yP11hcw0ZiJ3Q9mQ",
      "scattered clouds": "7LOpKH4CjlNkIRwXr2vcHf",
      "broken clouds": "532Fg95iIa7PF3ulFGrKfv",
      "overcast clouds": "5C1OsolkEdvyrboc25OLG8"
   },
   "Rain": {
      "light rain": "47PtuZO5RI7lLAV2ldBbld",
      "moderate rain": "4QAYAMQrGEG6u8OaopJTxX",
      "shower rain": "4GmPOIOCItFa4TtFmG7Ysz",
      "heavy intensity rain": "5C1OsolkEdvyrboc25OLG8"
   }
}

const bgs = {
   'few clouds': "https://mylivewallpapers.com/wp-content/uploads/Lifestyle/PREVIEW-Chilling-with-My-Cat.mp4",
   'broken clouds': "https://mylivewallpapers.com/wp-content/uploads/Fantasy/PREVIEW-Up-In-the-Clouds.mp4",
   'overcast clouds': "https://mylivewallpapers.com/wp-content/uploads/Fantasy/PREVIEW-Boat-on-Clouds.mp4",
   'mist': "https://mylivewallpapers.com/wp-content/uploads/Nature/PREVIEW-Calm-Lake.mp4",
   'moderate rain': "https://mylivewallpapers.com/wp-content/uploads/Lifestyle/PREVIEW-Living-Room-Chill.mp4",
   'heavy intensity rain': "https://mylivewallpapers.com/wp-content/uploads/City/PREVIEW-Rain-Street-Ghostwire-Tokyo.mp4",
   'very heavy rain': "https://mylivewallpapers.com/wp-content/uploads/City/PREVIEW-Raining-Streets-GTA5.mp4",
   'extreme rain': "https://mylivewallpapers.com/wp-content/uploads/Lifestyle/PREVIEW-Raining-Japanese-Village.mp4",
   'scattered clouds': "https://mylivewallpapers.com/wp-content/uploads/Lifestyle/PREVIEW-Room-with-Candles.mp4",
   'lofi': "https://mylivewallpapers.com/wp-content/uploads/Lifestyle/PREVIEW-Lo-Fi-Coffee-Shop.mp4",
   'deeph': "https://mylivewallpapers.com/wp-content/uploads/Fantasy/PREVIEW-Moon-Pool-Party.mp4",
   'classic': "https://mylivewallpapers.com/wp-content/uploads/Lifestyle/PREVIEW-Study-Session.mp4"

}

function criarPlaylist(playlist_id) {
   const playlistDiv = document.createElement("div")
   var conteudo =
      `
      <iframe style="border-radius:12px" 
         src="https://open.spotify.com/embed/playlist/${playlist_id}?utm_source=generator&theme=0" 
         width="100%" height="380" frameBorder="0" 
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
   aplicarTema()
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
   tempoInfo = httpGet("https://api.openweathermap.org/data/2.5/weather?q=" +
      dadosLocalizacao.address.city + "&appid=2b425334302e4882839efd307f61b3fa")
}

function aplicarTema() {
   pegarDadosLocalizacao()
   pegarTempo()
   var tempoAtual = tempoInfo.weather[0].main
   var descTempo = tempoInfo.weather[0].description
   // Por enquanto acho interessante, quando pegar a localizacao novamente, 
   // "atualizar" a playlist

   if (document.getElementById('bg-id').src.includes("Fisherman") == true) {
      corpo.appendChild(criarPlaylist(theme[tempoAtual][descTempo]))
   }
   else {
      corpo.removeChild(corpo.firstElementChild)
      corpo.appendChild(criarPlaylist(theme[tempoAtual][descTempo]))
   }
   document.getElementById('bg-id').src = bgs[descTempo]
}

gitBtn.onclick = () => {
   window.open("https://github.com/ansattz", "_blank")
}
