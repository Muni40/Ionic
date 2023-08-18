<template>
  <ion-page>
    <ion-header :translucent=" true ">
      <ion-toolbar color="medium">
        <ion-title slot="center">Produits divers</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen=" true " class="ion-padding">
      <ion-list>
        <ion-item >
          <ion-label>
            <h1> Cartable</h1>
            <p>100$</p>
            <ion-button slot="end" color="primary" @click=" acheter ">
              <ion-icon :icon=" add "></ion-icon>
              Acheter</ion-button>
            </ion-label>
            <ion-label>
              <h2>Savon</h2>
              <p>50$</p>
              <ion-button slot="end" color="primary" @click=" acheter ">
              <ion-icon :icon=" add "></ion-icon>
              Acheter</ion-button>
            </ion-label>
            <ion-label>
            <h3>Chemise</h3>
            <p>200$</p>
              <ion-button slot="end" color="primary" @click=" acheter ">
              <ion-icon :icon=" add "></ion-icon>
              Acheter</ion-button>
            </ion-label>
            <ion-label>
            <h4>pantalon</h4>
            <p>200$</p>
              <ion-button slot="end" color="primary" @click=" acheter ">
              <ion-icon :icon=" add "></ion-icon>
              Acheter</ion-button>
            </ion-label>
            <ion-label>
            <h5>Parfum</h5>
            <p>250$</p>
               <ion-button slot="end" color="primary" @click=" acheter ">
              <ion-icon :icon=" add "></ion-icon>
              Acheter</ion-button>
            </ion-label>
            <ion-label>
            <h6>Chaussures</h6>
            <p>300$</p>
             <ion-button slot="end" color="primary" @click=" acheter ">
              <ion-icon :icon=" add "></ion-icon>
              Acheter</ion-button>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import
  {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonButton,

  } from '@ionic/vue';

 import { add } from "ionicons/icons"

export default {
  data ()
  {
    return {
      add
    }
  },

  components: {
    IonContent, IonHeader, IonIcon, IonButton,
    IonPage, IonTitle, IonToolbar,
    IonList, IonItem, IonLabel,
  },
  // methods: {
  //   async acheter()
  //   {
  //     const modal = await modalController.create( {
  //       component: AcheterProduit,
  //     } );
  //     modal.present();

  //     const { data, role } = await modal.onWillDismiss();

  //     if ( role === 'confirm' )
  //     {
  //       this.message = `Hello, ${ data }!`;
  //     }
  //   },
  // },
}

</script>

<style scoped>

</style>
