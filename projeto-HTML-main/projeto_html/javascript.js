const paginas={
    "inicio": "<h1> Inicio </h1> <p> Seja bem vindo ao nosso site. </p>",
    "sobre": "<h1> Sobre</h1> <p> Somos uma empresa dedicada a fornecer as melhores soluções </p>",
    "contato": " <h1> Contato </h1> <p> Entre em contato conosco para mais informações</p>",
    "servicos": "<h1> Serviços </h1><p> Conheça nossos projetos e iniciativas </p",
};
let conteudo = window.document.getElementById("conteudo");

function navegarpara(pagina){
    conteudo.innerHTML = paginas[pagina];
}

