//O evento DOM é acionado quando todo o HTML foi completamente carregado
document.addEventListener('DOMContentLoaded', function () {
//tipos de dados
//string: Sequencia de caractere
//nunber: Números inteiros ou pontos flutuantes(10.4)
//boolean:Retorna dois valores, true or false
//object: Estrutura de dados que pode armazenar multiplos valores
//NULL: Quando está vazio;
//array: Objeto especial ordenado
//funtion: bloco de codigo reutilizável


//É usado para declarar uma variável cujo o valor seja permanente 
const teste = 55;

//É usado para declarar variáveis que os valores podem ser retribuidos
let C = 10;
console.log(C)

const notaMedia = 4;
if(notaMedia >= 6){
    //aqui vai o codigo
    //alert("aluno passou")
}
else if (notaMedia >= 4 && notaMedia < 6){
    //alert("bateu na trave")
}
else{
    //aqui codigo
    //alert("reprovou")
}
//-------------OPERADORES---------------
// = Sinal de atribuição
// == Sinal de comparação
// === Verifica se os dois são iguais e tem o mesmo tipo de dados
// != Se é diferente
// !== Se é estritamente diferente
// > Maior
// < Menor

//const travesti = "6"
//if(travesti === 6){
    //alert("pinto")}
//else{
    // alert("oq")}

    const professor = "ygor";
    if(professor == "ygor"){
        console.log("sim e a lenda")
    }
    else{
        console.log("Não e o mito")
    }
    //--------/---------------------------  

    //Funções são blocos de códeigo que podem ser chamados e reutilizados
    //Dentro dos parenteses da função vai os parametros
    function primeiraFuncao(parametro, segundoParametro){

        return parametro + ',' + segundoParametro;//variaveis concatenadas(+)
    }
    const parametro = "Essa é uma função com parâmetro";
    const segundoParametro = "agora é dois parametros"

    console.log (primeiraFuncao(parametro, segundoParametro));
    //--------------//----------------------------------------------------------

    //arrays em javascript sao estruturas de dados que permitem armazenar uma coleção ordenada de elementos.
    //armazenar uma coleção ordenada de elementos

    let primeiroArray = ['lucas', 'ygor', 'paulo', 'miaco']
     console.log(primeiroArray[2]);//Número 2 para percorrer o array
      //-------------------------------/-----------------------------------

      //Os objetos são coleções NÃO ORDENADAS de pares chave-valor,onde cada valor é associado a uma chave única
       
      let pessoa = {
        nome: 'Mario',
        idade: '17',
        profissao:'Desempregado' 
      }
      console.log(pessoa['profissao']);
      //--------------------------------/-------------------------------------  

      const numeros = ["A", "B", "C", "D"]

      numeros.forEach(num => {
        console.log(num)
      })





});