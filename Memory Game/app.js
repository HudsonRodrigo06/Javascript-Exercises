document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cartasArray = [

        {
            nome: 'lapras',
            img: 'images/lapras.png'
        },
        
        {
            nome: 'lapras',
            img: 'images/lapras.png'
        },

        {
            nome: 'lickthung',
            img: 'images/lickthung.png'
        },

        {
            nome: 'lickthung',
            img: 'images/lickthung.png'
        },

        {
            nome: 'pikachu',
            img: 'images/pikachu.png'
        },

        {
            nome: 'pikachu',
            img: 'images/pikachu.png'
        },
        
        {
            nome: 'pinsir',
            img: 'images/pinsir.png'
        },

        {
            nome: 'pinsir',
            img: 'images/pinsir.png'
        },

        {
            nome: 'scyther',
            img: 'images/scyther.png'
        },

        {
            nome: 'scyther',
            img: 'images/scyther.png'
        },

        {
            nome: 'snorlax',
            img: 'images/snorlax.png'
        },

        {
            nome: 'snorlax',
            img: 'images/snorlax.png'
        }


    ];

    cartasArray.sort(() => { return 0.5 - Math.random() })

    //vars
    const grid = document.querySelector('.grid');
    const resultado = document.querySelector('#resultado'); 
    const tentativas = document.querySelector('#tentativas'); 
   
    var total = 0;
    var cartasEscolhidas = [];
    var cartasEscolhidasIds = [];
    var cartasCombinadas = [];

    //create your board 
    function createBoard() {

        

        for (let index = 0; index < cartasArray.length; index++) {
            var carta = document.createElement('img');
            carta.setAttribute('src', 'images/verso.jpg');
            carta.setAttribute('data-id', index);
            carta.addEventListener('click', flipCard);
    
            grid.appendChild(carta);
        }
    }

    //verificar iguais
    function verificarIguais (){
        var cartas = document.querySelectorAll('img');

        const cartaUmId = cartasEscolhidasIds[0];
        const cartaDoisId = cartasEscolhidasIds[1];

        if(cartasEscolhidas[0] == cartasEscolhidas[1])
        {
            alert('Parabéns! Você encontrou o par!');

            cartas[cartaUmId].setAttribute('src', 'images/vazio.png');
            cartas[cartaDoisId].setAttribute('src', 'images/vazio.png');

            cartasCombinadas.push(cartasEscolhidas);
        }
        else {
            cartas[cartaUmId].setAttribute('src', 'images/verso.jpg');
            cartas[cartaDoisId].setAttribute('src', 'images/verso.jpg');

            alert('Oops! Não foi dessa vez!');
        }

        //reinicia arrays de cartas
        cartasEscolhidas = [];
        cartasEscolhidasIds = [];

        //atualiza pontuação igual a quantidade de combinações
        resultado.textContent = cartasCombinadas.length;
        tentativas.textContent = ++total + '';

        if(cartasCombinadas.length == cartasArray.length/2)
        {
            resultado.textContent = 'Parabéns! Você encontrou todas!';
            total = 0;
        }

    }

    //click na carta evento
    function flipCard(){

        if(this.getAttribute('src') == 'images/vazio.png')
            return;

        var cartaId = this.getAttribute('data-id');
        
        cartasEscolhidas.push(cartasArray[cartaId].nome);
        cartasEscolhidasIds.push(cartaId);

        this.setAttribute('src', cartasArray[cartaId].img);

        if(cartasEscolhidas.length === 2){
            setTimeout(verificarIguais, 500);
        }
    }

    createBoard();

})