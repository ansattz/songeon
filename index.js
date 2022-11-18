var latitude, longitude, dadosLocalizacao, tempoInfo;
var playerDeeph, playerLofi, playerClassic, playerAmbient;
let btnLoc = document.getElementById('btnLoc')
let corpo = document.getElementById('corpo-conteudo')
let gitBtn = document.getElementById('autor-id')
let btnList = document.getElementById('btnList')
let video = document.querySelector('video')
let source = document.querySelector('source')
let spotifyDiv = document.getElementById('spotify-player')

btnList.onclick = () => {
   $('.fullscreen.modal').modal('show')
}

const httpGet = (url) => {
   var http = new XMLHttpRequest()
   http.open("GET", url, false)
   http.send(null)
   return JSON.parse(http.responseText)
}

// Teremos uma playlist de acordo com o tempo na regiao.
// A descricao nos entrega mais detalhes sobre como esta o 
// tempo naquela regiao. Como sendo a primeira versao 
// essa eh uma solucao razoavel antes de pensar em como 
// esta a temperatura na regiao.
const temas = {
   "tema":
   {
      "Thunderstorm": {
         "thunderstorm with light rain": "3N6clrC4QySdtJY8hKbsau",
         "thunderstorm with rain": "3N6clrC4QySdtJY8hKbsau",
         "thunderstorm with heavy rain": "3N6clrC4QySdtJY8hKbsau",
         "light thunderstorm": "3N6clrC4QySdtJY8hKbsau",
         "thunderstorm": "5C1OsolkEdvyrboc25OLG8",
         "heavy thunderstorm": "3N6clrC4QySdtJY8hKbsau",
         "ragged thunderstorm": "5C1OsolkEdvyrboc25OLG8",
         "thunderstorm with light drizzle": "5C1OsolkEdvyrboc25OLG8",
         "thunderstorm with drizzle": "5C1OsolkEdvyrboc25OLG8",
         "thunderstorm with heavy drizzle": "28nMQDVHmc24xay4ZDp8GG"
      },
      "Dizzle": {
         "light intensity drizzle": "4GmPOIOCItFa4TtFmG7Ysz",
         "dizzle": "28nMQDVHmc24xay4ZDp8GG",
         "heavy intensity drizzle": "28nMQDVHmc24xay4ZDp8GG",
         "light intensity drizzle rain": "47PtuZO5RI7lLAV2ldBbld",
         "drizzle rain": "47PtuZO5RI7lLAV2ldBbld",
         "heavy intensity drizzle rain": "47PtuZO5RI7lLAV2ldBbld",
         "shower rain and drizzle": "47PtuZO5RI7lLAV2ldBbld",
         "heavy shower rain and drizzle": "47PtuZO5RI7lLAV2ldBbld",
         "shower drizzle": "4GmPOIOCItFa4TtFmG7Ysz"
      },
      "Clouds": {
         "few clouds": "1J58o8yP11hcw0ZiJ3Q9mQ",
         "scattered clouds": "7LOpKH4CjlNkIRwXr2vcHf",
         "broken clouds": "532Fg95iIa7PF3ulFGrKfv",
         "overcast clouds": "5C1OsolkEdvyrboc25OLG8"
      },
      "Rain": {
         "light rain": "47PtuZO5RI7lLAV2ldBbld",
         "moderate rain": "47PtuZO5RI7lLAV2ldBbld",
         "shower rain": "47PtuZO5RI7lLAV2ldBbld",
         "heavy intensity rain": "3N6clrC4QySdtJY8hKbsau",
         "very heavy rain": "3N6clrC4QySdtJY8hKbsau",
         "extreme": "3N6clrC4QySdtJY8hKbsau",
         "freezing rain": "4GmPOIOCItFa4TtFmG7Ysz",
         "light intensity shower rain": "4GmPOIOCItFa4TtFmG7Ysz",
         "heavy intensity shower rain": "3N6clrC4QySdtJY8hKbsau",
         "ragged shower rain": "4GmPOIOCItFa4TtFmG7Ysz"
      },
      "Snow": {
         "light snow": "4GmPOIOCItFa4TtFmG7Ysz",
         "Snow": "4GmPOIOCItFa4TtFmG7Ysz",
         "Heavy snow": "5C1OsolkEdvyrboc25OLG8",
         "Sleet": "5C1OsolkEdvyrboc25OLG8",
         "Light shower sleet": "5C1OsolkEdvyrboc25OLG8",
         "Shower sleet": "5C1OsolkEdvyrboc25OLG8",
         "Light rain and snow": "47PtuZO5RI7lLAV2ldBbld",
         "Rain and snow": "47PtuZO5RI7lLAV2ldBbld",
         "Light shower snow": "5C1OsolkEdvyrboc25OLG8",
         "Shower snow": "5C1OsolkEdvyrboc25OLG8",
         "Heavy shower snow": "5C1OsolkEdvyrboc25OLG8"
      },
      "Mist": {
         "mist": "6CHeafntix4NbfoETn5gE7"
      },
      "Smoke": {
         "Smoke": "1GyHAxUvWoQxvKjpMICwnC"
      },
      "Haze": {
         "Haze": "1GyHAxUvWoQxvKjpMICwnC"
      },
      "Dust": {
         "sand/ dust whirls": "5x1oNsldc8jeawPEbM5FNi",
         "dust": "5x1oNsldc8jeawPEbM5FNi"
      },
      "Fog": {
         "fog": "3N6clrC4QySdtJY8hKbsau"
      },
      "Sand": {
         "sand": "5x1oNsldc8jeawPEbM5FNi"
      },
      "Ash": {
         "volcanic ash": "5x1oNsldc8jeawPEbM5FNi"
      },
      "Squall": {
         "squalls": "5x1oNsldc8jeawPEbM5FNi"
      },
      "Tornado": {
         "tornado": "1J58o8yP11hcw0ZiJ3Q9mQ"
      },
      "Clear": {
         "clear sky": "4kBkZoyoAMxEuMc8X9E75p"
      }
   },
   "bgs": {
      "Clouds": "https://mylivewallpapers.com/wp-content/uploads/Nature/PREVIEW-Lone-Tree-Lake.mp4",
      "Mist": "https://mylivewallpapers.com/wp-content/uploads/Nature/PREVIEW-Calm-Lake.mp4",
      "Rain": "https://mylivewallpapers.com/wp-content/uploads/City/PREVIEW-Rain-Street-Ghostwire-Tokyo.mp4",
      "Drizzle": "https://mylivewallpapers.com/wp-content/uploads/Lifestyle/PREVIEW-King-Wash.mp4",
      "Snow": "https://mylivewallpapers.com/wp-content/uploads/Lifestyle/PREVIEW-Room-with-Candles.mp4",
   }
}


function criarPlaylist(playlist_id) {
   const playlistDiv = document.createElement("div")
   var conteudo =
      `
      <iframe style="position: absolute; bottom: 0px; border-radius: 16px; margin: 30px;" id="spotify-player"
         src="https://open.spotify.com/embed/playlist/${playlist_id}?utm_source=generator&theme=0" 
         width="300" height="380" frameBorder="0" 
         allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
         loading="lazy">
      </iframe>
   `
   playlistDiv.innerHTML = conteudo
   return playlistDiv
}

btnLoc.onclick = () => {
   navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(mostrarPosicao, erroPosicao)
      : alert("Geolocation nao suportado.")
}

const mostrarPosicao = (pos) => {
   latitude = pos.coords.latitude
   longitude = pos.coords.longitude
   aplicarTema()
}

const erroPosicao = (erro) => {
   alert("Geolocation nao pegou loc")
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

   if (spotifyDiv == null) {
      corpo.appendChild(criarPlaylist(temas.tema[tempoAtual][descTempo]))
   }
   else {
      spotifyDiv.remove()
      corpo.appendChild(criarPlaylist(temas.tema[tempoAtual][descTempo]))
   }
   source.src = temas.bgs[tempoAtual]
   video.load()
}

gitBtn.onclick = () => {
   window.open("https://github.com/ansattz", "_blank")
}
