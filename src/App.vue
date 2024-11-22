<script setup>
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
</script>

<template>
  <h1>{{ nome }}</h1> <!-- {{ }} = 'double mustache', para manipulação do DOM -->
  <h1>{{ dizOla('Paula') }}</h1>
  <img v-bind:src="imagem1" alt=""> <!-- 'v-bind:atributo' = vincula o js com o DOM -->
  <img :src="imagem2" alt=""> <!-- ':atributo' = atalho para vincular o js sem escrever v-bind-->
  <button :disabled="botaoEstaDesabilitado">Enviar mensagem</button>
</template>

<style scoped>

</style>
