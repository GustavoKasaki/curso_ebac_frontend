<script setup>
import { reactive } from 'vue';

  const nome = 'Gustavo';
  const meuObj = {
    nome: 'Gustavo',
    filmeFavorito: 'Interestelar'
  }

  function dizOla(nome) {
    return `${nome} diz oi!`;
  }

  const imagem1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTahq7Z9uS_23YzITkC1_aF2xK90Mq3BmyVhg&s';
  const imagem2 = 'https://media.contentapi.ea.com/content/dam/gin/images/2017/01/crysis-3-keyart.jpg.adapt.crop1x1.767p.jpg';

  const botaoEstaDesabilitado = true;

  const gostaImagem1 = true;
  const gostaImagem2 = true;

  const estaAutorizado = true;

  // let contador = 0;
  const estado = reactive({
    contador: 0,
    email: '',
    saldo: 5000,
    transferindo: 0,
    nomes: ['Gustavo', 'Liliane', 'Renan', 'Cintia'],
    nomeAInserir: '',
  })

  function incrementar() {
    estado.contador++;
  }

  function decrementar() {
    estado.contador--;
  }

  function alteraEmail(evento) {
    estado.email = evento.target.value;
  }

  function mostraSaldoFuturo() {
    const {saldo, transferindo} = estado;
    return saldo - transferindo;
  }

  function validaValorTransferencia() {
    const {saldo, transferindo} = estado;
    return saldo >= transferindo;
  }

  function cadastraNome() {
    if (estado.nomeAInserir.length >= 3) {
      estado.nomes.push(estado.nomeAInserir);
    } else {
      alert('Digite mais caracteres!');
    }
  }

</script>

<template>
  <h1>{{ nome }}</h1> <!-- {{ }} = 'double mustache', para manipulação do DOM -->
  <h1>{{ dizOla('Paula') }}</h1>
  <img v-if="gostaImagem1" v-bind:src="imagem1" alt=""> <!-- 'v-bind:atributo' = vincula o js com o DOM -->
  <img v-else-if="gostaImagem2" :src="imagem2" alt=""> <!-- ':atributo' = atalho para vincular o js sem escrever v-bind-->
  <h2 v-else>Não gosta das imagens!</h2>

  <h1 v-if="estaAutorizado">Bem vindo!</h1> <!-- Deve-se agrupar as condicionais e sempre na sequencia correta -->
  <h1 v-else>Não autorizado</h1>
  
  <button :disabled="botaoEstaDesabilitado">Enviar mensagem</button>

  <br>
  <hr>

  {{ estado.contador }}
  <button @click="incrementar"type="button">+</button>
  <button @click="decrementar" type="button">-</button>

  <br>
  <hr>

  {{ estado.email }}
  <input type="email" @keyup="alteraEmail">

  <br>
  <hr>

  Saldo: {{ estado.saldo }} <br>
  Transferindo: {{ estado.transferindo }} <br>
  Saldo depois da transferência: {{ mostraSaldoFuturo() }}<br>
  <input class="campo" :class="{ invalido: !validaValorTransferencia() }" @keyup="evento => estado.transferindo = evento.target.value" type="number" placeholder="Quantia para transferir">
  <button v-if="validaValorTransferencia()">Transferir</button>
  <span v-else>Saldo insuficiente</span>

  <br>
  <hr>

  <ul>
    <li v-for="nome in estado.nomes"> <!-- 'v-for' = similar ao forEach -->
      {{ nome }}
    </li>
  </ul>
  <input @keyup="evento => estado.nomeAInserir = evento.target.value" type="text" placeholder="Digite um novo nome">
  <button @click="cadastraNome" type="button">Cadastrar nome</button>

  <h3 v-for="nome in estado.nomes">
    {{ nome }}
  </h3>
</template>

<style scoped>
  img {
    max-width: 200px;
  }

  .invalido {
    outline-color: red;
    border-color: red;
  }

  .campo {
    border: 1px solid black;
  }
</style>
