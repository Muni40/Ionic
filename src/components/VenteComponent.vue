<template>
  <ion-page>
    <ion-header :translucent=" true ">
      <ion-toolbar color="medium">
        <ion-title slot="center">produit</ion-title>
        <ion-title slot="center">quantite</ion-title>
        <ion-title slot="center">prix_de_vente_total</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen=" true " class="ion-padding">
      <ion-list>

        <ion-item>
          <ion-label>
            <h1> Cartable</h1>
            <p>3</p>
            <p>300$</p>
          </ion-label>
          <ion-button slot="end" color="medium" @click=" acheter ">
              <ion-icon :icon=" add "></ion-icon>
              Acheter</ion-button>
              
        </ion-item>
        <ion-item> 
          <ion-label>
            <h2>Savon</h2>
            <p>4</p>
            <p>200$</p>
          </ion-label>
          <ion-button slot="end" color="medium" @click=" acheter ">
              <ion-icon :icon=" add "></ion-icon>
              Acheter</ion-button>

         </ion-item> 
         <ion-item> 
          <ion-label>
            <h3>Chemise</h3>
            <p>2</p>
            <p>400$</p>
          </ion-label>
          <ion-button slot="end" color="medium" @click=" acheter ">
              <ion-icon :icon=" add "></ion-icon>
              Acheter</ion-button>
          </ion-item>
          <ion-item>
          <ion-label>
            <h4>pantalon</h4>
            <p>7</p>
            <p>1400$</p>
          </ion-label>
          <ion-button slot="end" color="medium" @click=" acheter ">
              <ion-icon :icon=" add "></ion-icon>
              Acheter</ion-button>
        </ion-item>
        <ion-item>
          <ion-label>
            <h5>Parfum</h5>
            <p>2</p>
            <p>500$</p>
          </ion-label>
          <ion-button slot="end" color="medium" @click=" acheter ">
              <ion-icon :icon=" add "></ion-icon>
              Acheter</ion-button>
        </ion-item>
        <ion-item>
          <ion-label>
            <h6>Chaussures</h6>
            <p>1</p>
            <p>300$</p>
            <p>
              {{ ibije }}
            </p>
          </ion-label>
         
        </ion-item>
            
        <!-- </ion-item> -->
      </ion-list>
    </ion-content>
     <ion-button slot="end" color="medium" @click=" acheter ">
                <ion-icon :icon=" add "></ion-icon>
                Acheter</ion-button>
                
  </ion-page>
</template>

<script>
import axios from 'axios'
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

// import {  } from "ionicons/icons"

export default {
  data (){
    return {
      ibije :[],
    }
  },
  methods:{
    acheter ()
    {
      axios.get( "http://127.0.0.1:8000/urugendo/ingenzi/" )
        .then( ( response ) => (
          this.ibije = response.data.results
        ) )
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

<style scoped></style>
