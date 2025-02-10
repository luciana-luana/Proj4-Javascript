function mostrarBoasVindas() {
    alert('Bem-vindo ao nosso site!');
    //setTimeout (mostrarBoasVindas,5000);
}

//Validar formulário de orçamento


function validarchave(form) {
    let mensagem = "";
    let valido = "s";

    if (!validarNome()) {
        valido = "n";
        mensagem += "O nome deve conter apenas letras e possuir entre 3 a 15 caracteres\n";
    }

    if (!validarApelido()) {
        valido = "n";
        mensagem += "O apelido deve conter apenas letras e possuir entre 3 a 15 caracteres\n";
    }

    if (!isEmailValid()) {
        valido = "n";
        mensagem += "Email inválido\n";
    }
 
    if(!validarPrazo()){
        valido = "n";
        mensagem += "Por favor, insira apenas números\n";
    }

    if (valido === "n") {
        alert(mensagem);
        return false;
    }

    alert("Formulário enviado com sucesso!");
    return true;
}

function validarNome() {
    const nome = document.getElementById("name").value;
    const nomePattern = /^[a-zA-Z]{3,15}$/;
    return nomePattern.test(nome);
}

function validarApelido() {
    const apelido = document.getElementById("apelido").value;
    const apelidoPattern = /^[a-zA-Z]{3,15}$/;
    return apelidoPattern.test(apelido);
}

function isEmailValid() {
    const email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validarPrazo(){
    const numero = document.getElementById("numero").value;
    const numeroPattern = /^[0-9]+$/;
    return numeroPattern.test(numero);

}


function calcularOrcamento() {
        const orcamento = document.getElementById('orcamento').value;
        const prazo = document.getElementById('numero').value;
        const resultado = document.getElementById('resultado');
        const selecionar = document.querySelectorAll("selecionar")
    
        const precoBase = parseFloat(orcamento);
    
    
        let desconto = 0;
    
        if(prazo <= 4){
            desconto = prazo * 0.05;
        } else {
            desconto = 0.20;
        }
    
        console.log(precoBase +" " +desconto);
    
        const precoFinal = precoBase - (precoBase * desconto);
    
        resultado.textContent = `O orçamento final com desconto é: ${precoFinal.toFixed(2)}€`;
        //console.log(precoFinal);
    
    }



// //Mapa //

function carregarmapa() {
    var ponto = new google.maps.LatLng(41.150023451900765, -8.614162704233308);
    var opcoes = {
        zoom: 12,
        center: ponto,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var m = new google.maps.Map(document.getElementById("mapa"), opcoes);

    var marcador = new google.maps.Marker({
        position: ponto,
        map: m
    });

    var caixa = new google.maps.InfoWindow({
        content: 'Empresa: <b>Agência de Casamentos</b><br/>Visite-nos!'
    });
    google.maps.event.addListener(
        marcador, 'click', function () {
            caixa.open(m, marcador);
        });

}
var m
function geo() {
    var geocoder = new google.maps.Geocoder();
    var direccao = $('#direccao').val();
    geocoder.geocode({ 'address': direccao },
        function (results, status) {
            if (status == 'OK') {
                m.setCenter(results[0].geometry.location);
                var marker = new google.maps.Marker({
                    map: m,
                    position: results[0].geometry.location
                });
            } else {
                alert('Morada não encontrada: ' + status);
            }
        });
}

function inicializar() {
    mostrarBoasVindas();
    carregarmapa();

}

//Portefólio de imagens para lua-de-mel

function carrossel() {
    const carrosel = document.getElementById("carrosel");
    const img = document.querySelectorAll("#carrosel img");
    let idx = 0;

    function carrossel() {
        console.log(`Current index: ${idx}`);
        idx++;
        if (idx > img.length - 1) {
            idx = 0;
        }
        console.log(`Translating to index: ${idx}`);
        carrosel.style.transform = `translateX(${-idx * 888}px)`;
    }

    setInterval(carrossel, 1800);
};




