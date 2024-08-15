//aula do dia 14/08/2024. terça-feira. primeiro arquivo javascript.

/**
 * O search retorna o indice da primeira
 * ocorrencia do padrão desejado.
 * nesse caso o 10 não é visto como uma coisa só
 *  e sim 1 e o proximo elemento 0
 */

function buscarNumero (dados){
    //let dados = "arroz1, batata9, lasanha10, pastel14";
    let resultado = dados.search(/\d/); //padrão da função search: <nome da variável>.search(/\<elemento a ser procurado>/);.
    return resultado;
    //alert("Quantidade de números = " + resultado); //retorna o índice da primeira ocorrência. retorna -1, caso não ache o elemento sendo procurado. 
}

/**
 * o método match retorna uma lista
 * onde cada elemento possui o valor correspondente 
 * do padrão indicado
 */

function matchNumero(dados) { //usar match para contar as ocorrências. primeiro, usar função match para lista dos elementos. segundo, ver a lenght da lista.
    const exp = /[0-9]/g; //g: para agrupar os elementos.
    let resp = dados.match(exp);
    return resp;
}

//  o resultado do match é um array contendo todos os valores correspondentes do padrão
// encontrado na busca

/* o Uso do parametro g na expresão regular do match
   copia da documentação:
    ** If the g flag is used, all results matching the complete regular expression will be returned, 
        but capturing groups are not included.

    ** If the g flag is not used, only the first complete match and its related capturing groups are returned.

*/

window.addEventListener("load", 
    function (){
        let buscarN = document.querySelector('#btnBuscarN');

        buscarN.addEventListener("click", 
            function(){
                let idade = document.querySelector('#idade').value;
                if (idade != "") {
                    let resp = buscarNumero(idade);
                    alert("índice: " + resp + "\n" +
                        "primeiro número: " + idade[resp]);
                    
                    resp = matchNumero(idade);
                    alert("índice: " + resp + "\n");
                }
                else {
                    alert("O campo idade está vazio...");
                }
            }
        )
    }
)

/**
 * Teste de chamada da função
 * 
 * let d = "arroz, batata, lasanha10, pastel14";
 * alert(d);
 * 
 * let resp = buscarNumero(d);
 * alert("indice: " + resp + "\n" +
 *     "primeiro numero: " + d[resp]);
 */