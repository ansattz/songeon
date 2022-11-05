var latitude, longitude, dadosLocalizacao, tempoInfo;
let btnLoc = document.getElementById('btnLoc')
let playSec = document.getElementById('playlist-id')

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
   'few clouds': "https://wallpaperaccess.com/full/792.jpg",
   'mist': "https://media.tenor.com/B4EqOMlV0-wAAAAC/aesthetic-wallpaper.gif",
   'moderate rain': "https://media.tenor.com/hXJOs4hRlFQAAAAC/kikis-delivery-service-city.gif",
   'heavy intensity rain': "https://media.tenor.com/hXJOs4hRlFQAAAAC/kikis-delivery-service-city.gif",
   'very heavy rain': "https://media.tenor.com/hXJOs4hRlFQAAAAC/kikis-delivery-service-city.gif",
   'extreme rain': "https://acegif.com/wp-content/uploads/rain-25.gif",
   'scattered clouds': "https://i0.wp.com/windowscustomization.com/wp-content/uploads/2018/12/Anime-And-Scape-Watefal.gif?resize=750%2C356&quality=80&strip=all&ssl=1"
}

function configBg() {
   document.body.style["-webkit-background-size"] = "cover"
   document.body.style["-moz-background-size"] = "cover"
   document.body.style["-o-background-size"] = "cover"
   document.body.style["background-size"] = "cover"
}

function criarPlaylist(playlist_id) {
   const playlistDiv = document.createElement("div")
   var conteudo =
      `
      <iframe style="border-radius:12px" 
         src="https://open.spotify.com/embed/playlist/${playlist_id}?utm_source=generator&theme=0" 
         width="100%" height="380" frameBorder="0" allowfullscreen="" 
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

function temaBg(wallpaper) {
   document.body.style.background = `url(${wallpaper}) no-repeat center center fixed`
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
   const bodySel = document.querySelector('body')
   pegarDadosLocalizacao()
   pegarTempo()
   var tempoAtual = tempoInfo.weather[0].main
   var descTempo = tempoInfo.weather[0].description
   // Por enquanto acho interessante, quando pegar a localizacao novamente, 
   // "atualizar" a playlist
   if (getComputedStyle(bodySel).background.includes("bg.jpeg") == true) {
      playSec.appendChild(criarPlaylist(theme[tempoAtual][descTempo]))
   }
   else {
      playSec.removeChild(playSec.firstElementChild)
      playSec.appendChild(criarPlaylist(theme[tempoAtual][descTempo]))
   }
   temaBg(bgs[descTempo])
   configBg()
}
