
const key = "1c5d30c08d79653037676a79d23f7297";

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".city2").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".grau").innerHTML = Math.floor (dados.main.temp) + "°C";
    document.querySelector(".temp").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%" + "Umidade";
    document.querySelector(".imgprev").src = `http://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscaCidade(cidade){
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    colocarDadosNaTela(dados);
}

function cliqueNoBotao(){

    const cidade = document.querySelector(".city").value

    buscaCidade(cidade)
}

