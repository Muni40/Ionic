<template>
    <ion-page>
        <ion-content class="ion-padding" >
            <ion-item fill="outline">
                <ion-label position="floating" color="warning">Username</ion-label>
                <ion-input type="text" v-model="username" clearInput ></ion-input>
            </ion-item>
            <br>
            <ion-item fill="outline">
                <ion-label position="floating" color="warning">Password</ion-label>
                <ion-input type="password" v-model="password" clearInput></ion-input>
            </ion-item>
            <br>
            <ion-button expand="block" @click="$emit( 'loginEmited' )" color="medium">Connexion</ion-button>
            <ion-button expand="block" @click="send" > Send </ion-button>
            <!-- {{ ibije }} -->
            <!-- {{ ibije }} -->
        </ion-content>
    </ion-page>
</template>

<script>
 import axios from 'axios'
import {
    IonItem,
    IonLabel,
    IonInput,
    IonPage,
    IonContent,
    IonButton
} from "@ionic/vue";
export default {

  components: {
    IonLabel,
    IonItem,
    IonInput,
    IonPage,
    IonContent,
    IonButton
  },
  // name: 'LoginView',

  data ()
  {
    return {
      // nom: "",
      username: "",
      password: "",
      //  ibije,
    }
  },
    methods: {
      send(){
        let data = {
          'username': this.username,
          'password': this.password
        }
         axios.post( "http://127.0.0.1:8000/urugendo/login/", data )
           .then( ( response ) => (
            // this.username = response.data,
            // this.password = response.data
            //localStorage.setItem( "access", JSON.stringify( response.data.access ) ), /* hgxydgxdgxhdg */
             this.$store.state.tokens = response.data,
             localStorage.setItem( "tokens", JSON.stringify( response.data.access ) )
            // console.log( response.data.access )
          // 
        
          )
          )
          }
      //    ))
      // }
     }
    
  }


</script>

<style lang="css" scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
</style>
