var timerId = null; //varivel que armazena a chamda da funcao timeout

function IniciaJogo(){

   var url = window.location.search;

   var nivel_jogo = url.replace("?" , "");

      if(nivel_jogo == 1){ //1 facil -> 120 seg
         tempo_segundos = 120;
      }

      if(nivel_jogo == 2){ //2 normal -> 60 seg
         tempo_segundos = 60;
      }

      if(nivel_jogo == 3){ //3 normal -> 30 seg
         tempo_segundos = 30;
      }

      document.getElementById ('cronometro').innerHTML = tempo_segundos;


      var qtde_baloes = 40;
      cria_baloes(qtde_baloes);
      //imprimir qtde baloes inteiros 
      document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;

      document.getElementById('baloes_estourados').innerHTML = 0;

      contagem_tempo(tempo_segundos + 1)
}

function contagem_tempo(segundos){
  


   segundos = segundos - 1;
   // função que faz o "cronometro" funcionar de formar: maior -> menor 
   // Junto com a variavel (var timerId = null;)

   if( segundos == -1){
      clearTimeout(timerId);
      game_over();
      return false;
   }

      document.getElementById ('cronometro').innerHTML = segundos;
      timerId = setTimeout("contagem_tempo("+segundos+")", 1000);
      
function game_over(){
  
   alert("Fim de jogo, voce nao conseguiu estourar todos os baloes.")
} 
      
}

function cria_baloes(qtde_baloes){
   for ( var i = 1; i <= qtde_baloes; i++){

      var balao = document.createElement("img");
      balao.src = 'imagens/balao_azul_pequeno.png';
      balao.style.margin = '10px';
      balao.id = 'b' + i;
      balao.onclick = function(){estourar(this); };

      document.getElementById ('cenario').appendChild(balao);
   } 

   function estourar(e){
      var id_balao = e.id;
      document.getElementById(id_balao).setAttribute("onclick" , "")
      document.getElementById(id_balao).src = 'imagens/balao_azul_pequeno_estourado.png';

      pontuacao(-1);
   }

   function pontuacao(acao){
      var baloes_inteiros = document.getElementById ('baloes_inteiros').innerHTML;
      var baloes_estourados = document.getElementById ('baloes_estourados').innerHTML;

      baloes_inteiros = parseInt(baloes_inteiros);
      baloes_estourados = parseInt(baloes_estourados);

      baloes_inteiros = baloes_inteiros + acao;
      baloes_estourados = baloes_estourados - acao;

    document.getElementById ('baloes_inteiros').innerHTML = baloes_inteiros;
    document.getElementById ('baloes_estourados').innerHTML = baloes_estourados;

    situacao_jogo(baloes_inteiros, baloes_estourados);

   }

   function situacao_jogo(baloes_inteiros){
      if(baloes_inteiros == 0){
         alert ("Parabens, voce conseguiu estourar todos os baloes a tempo");
         parar_jogo();
      }
   }

   function parar_jogo(){
      clearTimeout(timerId);
   }

}