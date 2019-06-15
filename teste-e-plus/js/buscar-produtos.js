const data = {
    "cart":{
        "item":[
            { 
                "productId": 100,
                "name": "Notebook Samsung, Intel® Core™ i7, 16GB, 256GB SSD, Tela de 15”, Style S51 Pro - NP900X5T-XW1BR - SGNP900X5TXW1_PRD",
                "salesChannel": "1",
                "available": true,
                "bestPriceFormated": "R$ 7.158,21",
                "bestPrice": 715821,
                "quantity": 1,
                "image": "/images/products/note01-samsung-160-160.jpg"
            },
            {
                "productId": 101,
                "name": "Notebook Gamer Acer, Intel Core i7, 16GB, 1TB, Tela de 15.6”, NVIDIA GeForce GTX 1050 Ti - pire Nitro 5 AN515-51-78D6 - 49953_PRD",
                "salesChannel": "1",
                "available": true,
                "bestPriceFormated": "R$ 4.699,00",
                "bestPrice": 469900,
                "quantity": 1,
                "image": "/images/products/note-gamer-acer-160-160.jpg"
            },
            {
                "productId": 102,
                "name": "Impressora Multifuncional Canon Tanque de Tinta com USB e Wi-Fi - G3111 - N52315C021PTO_PRD",
                "salesChannel": "1",
                "available": true,
                "bestPriceFormated": "R$ 725,80",
                "bestPrice": 72580,
                "quantity": 2,
                "image": "/images/products/impressora-canon-160-160.jpg"
            },
            {
                "productId": 103,
                "name": "Notebook Samsung, Processador Intel® Core™ i7, 8GB, 256GB SSD, Tela de 13,3”, Style S51 Pen - NP930QAA-KW1BR - SGNP930QAAKW1_PRD",
                "salesChannel": "1",
                "available": true,
                "bestPriceFormated": "R$ 7.066,42",
                "bestPrice": 706642,
                "quantity": 1,
                "image": "/images/products/note02-samsung-160-160.jpg"
            }
        ]
    }
}

$(window).ready(function(){

    var total = 0;

    for(var i=0; i < data.cart.item.length; i++){
        adicionaProdutos(data.cart.item[i]);
        total = total + data.cart.item[i].bestPrice;
    }

    function formatReal(int)
    {
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
            tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
    }
        
    document.getElementById("total").textContent = "R$ "+formatReal(total);
    
    /*var xhr = new XMLHttpRequest();

    //xhr.open("GET", "http://www.agenciaeplus.io/challenge/products.json");
    xhr.open("GET", "products.json");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            //erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var data = JSON.parse(resposta);

            var produto = data.cart.item;console.log(resposta);

            produto.forEach(function(produto) {
                adicionaProdutos(produto);
            });
        } else {
            //erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();*/
    
});

function adicionaProdutos(produto) {

    // Cria li
    var linhaProduto = document.createElement("li");

    // Cria imagem
    var imagemCarrinho = document.createElement("div");
    imagemCarrinho.classList.add("imagemCarrinho");
    linhaProduto.appendChild(imagemCarrinho);

    var image = document.createElement("img");
    $(image).attr("src","../teste-e-plus"+produto.image);
    $(image).css({"width":"85px"});
    imagemCarrinho.appendChild(image);

    // Cria as informações
    var textoCarrinho = document.createElement("div");
    textoCarrinho.classList.add("textoCarrinho");
    linhaProduto.appendChild(textoCarrinho);

    var str = produto.name;
    var nomeFormatado = str.substr(0, 29) + "...";

    var nome = document.createElement("h1");
    nome.textContent = nomeFormatado;
    textoCarrinho.appendChild(nome);

    var quantity = document.createElement("h2");
    quantity.textContent = "Qtd.: "+produto.quantity;
    textoCarrinho.appendChild(quantity);

    var bestPriceFormated = document.createElement("h3");
    bestPriceFormated.textContent = produto.bestPriceFormated;
    textoCarrinho.appendChild(bestPriceFormated);

    var container = document.querySelector(".items");
    container.appendChild(linhaProduto);

}