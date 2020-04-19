<template>
  <div class="app">
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive && routerAlive"></router-view>
  </div>
</template>

<script>

var curComponent;
export default {
  components: {
    
  },
  provide() {
    return {
      routerRefresh: this.routerRefresh
    }
  },
  data() {
    return {
      routerAlive:true
    };
  },

  methods: {
    routerRefresh(){
	    this.routerAlive = false;
      this.$nextTick(()=>{
        this.routerAlive = true;
      });
	  }
  },
  created() {},
  mounted() {
    
  }
};
window["receiveMsgFromNative"] = function(msg) {
  curComponent.receiveMsgFromParent(msg);
};
</script>