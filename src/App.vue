<template> 
  <div>
    <Header />
    <div id="app">
      <div class="md-layout-item md-size-33" v-for="quadrinho in quadrinhos" :key="quadrinho.id">
        <quadrinho
          :titulo="quadrinho.title"
          :descricao="quadrinho.description"
          :imagem="getImagem(quadrinho)"
        ></quadrinho>
      </div>
    </div>
  </div>
</template>

<script>
import MarvelApi from '@/services/MarvelApi'
import Quadrinho from '@/components/Quadrinhos'
import Header from '@/components/Header'

export default {
  name: 'App',

  components: {
    Quadrinho,
    Header
  },

  data() { 
    return {
      quadrinhos: []
    }
  },

  created() { 
    var self = this;
    MarvelApi.getAllComics(10, comics => {
      self.quadrinhos = comics.data.data.results;
    });
  },

  methods: {
    getImagem: function(quadrinho){
      if(quadrinho.images.length){
        return quadrinho.images[0].path + '/portrait_medium.jpg';
      }
    }
  }
};
</script>

<style>
#app {
  display: flex;
  flex-wrap: wrap;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  justify-content: center;
  color: #2c3e50;
  background-color:whitesmoke;
  margin: 5px;
  border: 1px solid black;
}
</style>
