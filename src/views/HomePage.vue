<template>
   <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title >Kiosque</ion-title>
          <ion-title slot="end">
            <ion-icon :icon="power"  @click=" logOut"></ion-icon>
          </ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <div class="example-content">Bienvenu sur notre appli</div>
        <ion-fab>
      <ion-fab-button @click=" addProduit ">
        <ion-icon :icon=" add "></ion-icon>
        <p>{{ message }}</p>

      </ion-fab-button>
    </ion-fab>
      </ion-content>

    </ion-page>

  <!-- <ion-page>
    <ion-content :fullscreen="true" class="ion-padding">
    <ion-header> 
      <ion-icon>
        <ion-Label>Vente</ion-Label>
      </ion-icon>
      <ion-icon>
        <ion-Label>Produit</ion-Label>
      </ion-icon>
    </ion-header>
    </ion-content>
  </ion-page>   -->
</template>

<script>
import { add} from 'ionicons/icons';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonIcon,
  IonFabButton,
  modalController,

} from '@ionic/vue';
// import axios from 'axios'    
import FabButton from '../components/FabButton.vue'

// import {} from "ionicons/icons"

export default{
  data ()
  {
    return {
      message,
      add 
    }
  },

  components: {
    IonContent, IonHeader,
    IonPage,
    IonToolbar, IonTitle, IonFab, IonFabButton, IonIcon
  },
  //   setup ()
  //   {
  //     return { add };
  // },
  methods: {
    async addProduit () 
    {
      const modal = await modalController.create( {
        component: FabButton.vue,
      } );

      modal.present();

      const { data, role } = await modal.onWillDismiss();

      if ( role === 'confirm' )
      {
        message.value = `Hello, ${ data }!`;
      }
    },
    logOut ()
    {
        // localStorage.removeItem( "access", JSON.stringify( response.data.access ) ) /* hgxydgxdgxhdg */
        //   console.log( response.data.access )
        // 
        localStorage.removeItem( "tokens" ),
        this.$store.state.tokens = null
        }
      
  }
  }

 
</script>

<style scoped>
.example-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
