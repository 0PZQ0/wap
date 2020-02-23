<template>
  <div id='tabber'>
      <div 
        class="tabber-main" 
        v-for="item in homeList" 
        :key="item.centent"
        @click="moveRouter(item.site)"
       >
        <img class="tabber-img" src="@/assets/shop.png">
        <div>{{item.centent}}</div>
      </div>
  </div>
</template>

<style scoped>
  #tabber {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .tabber-main {
    flex: 1;
    text-align: center;
    height: 68px;
  }
  .tabber-img {
    height: 40px;
    width: 40px;
  }

</style>

<script>

export default {
  name: 'tabber',
  components: {

  },
  data () {
    return {
      homeList: [
        {centent: '首页', site: '/fuck/home'},
        {centent: '分类', site: '/fuck/sort'},
        {centent: '购物车', site: '/fuck/shop'},
        {centent: '我的', site: '/fuck/my'}
        ],
        route: '/home'
    }
  },
  mounted() {
    console.log(this.$router)
  }, 
  methods: {
    moveRouter (site) {
      this.$router.push(site).catch(err => {console.log(err) })
    }
      
  }
}
</script>
