<template>
  <ion-app>
    <ion-router-outlet v-if="$store.state.tokens!=null" ></ion-router-outlet>
    <!-- <LoginView v-else @loginEmited="connected=true"/> -->
    <login-view v-else></login-view>
  </ion-app>
</template>


<script>
import LoginView from "./components/LoginComponent.vue"
import { IonApp, IonRouterOutlet } from '@ionic/vue';

export default {

  components: {
    IonApp,
    IonRouterOutlet,
    LoginView
  },
  data ()
  {
    return {
      // connected: false,
      // ibije: "nta na kimwe"

    };
  },
    methods: {
      // loginEmited(){
      //   axios.get( "http://127.0.0.1:8000/" )
      //     .then( ( response ) => (
      //       this.ibije = response.data.results
      //     ) )
      // }
  },
  // mounted ()
  // {
  //     this.access = localStorage.getItem("access")
  //   if ( this.access )
  //   {
  //       this.tokens = true
      // }
    // }
  mounted ()
  {
   this.$store.state.tokens = JSON.parse(localStorage.getItem( "tokens" ) )
  }
    
}
</script>
