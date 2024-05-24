document.addEventListener('DOMContentLoaded', function () {

    const baseImagens = {
        todas:['imagem.jpg', 'cidade.jpg', 'animais.jpg', 'natureza.jpeg'],
        natureza: ['natureza.jpeg'],
        cidade: ['cidade.jpg'],
        animais: ['animais.jpg'],
    }
    function carregaImagens(categoria){
        //Selecionar elementos HTML com base em um seletor
            

        const galeria = document.querySelector("#galeria-imagens");
        galeria.innerHTML=''; //limpa o bloco e apaga tudo oq tem dentro

        const imagens = baseImagens[categoria];

        imagens.forEach(img => { 
            galeria.innerHTML +='<div> <img src="imagens/' + img + ' "/> </div>';
        })
    }

    carregaImagens('todas');
    
//evento de click
document.body.addEventListener('click', function(event){
    //acessa a lista de classe de onde clicou e procura pela classe botao-categoria
    if(event.target.classList.contains('botao-categoria')){
        
        const categoria = event.target.dataset.categoria;
        carregaImagens(categoria);
    }

})







})  