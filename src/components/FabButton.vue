<template>
   <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-button color="medium" @click=" cancel ">Cancel</ion-button>
                </ion-buttons>
                <ion-title>Ajouter produit</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click=" confirm " :strong=" true ">Confirm</ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-item>
              <ion-input label-placement="stacked" label="Produit" v-model="produit " placeholder="Nom du produit"></ion-input>
            </ion-item>
            <ion-item>
              <ion-input label-placement="stacked" label="Prix" v-model="prix " placeholder="Prix"></ion-input>
            </ion-item>
            <ion-item>
              <ion-input label-placement="stacked" label="" v-model="description" type="text" placeholder="Description"></ion-input>
            </ion-item>
        </ion-content>
</template>

<script >
import { add } from 'ionicons/icons';
import { modalController } from 'vue';

export default ( {
    setup ()
    {
        return { add };
    },
    methods: {
        cancel ()
        {
            return modalController.dismiss( null, 'cancel' );
        },
         confirm ()
         {
            return modalController.dismiss( name.value, 'confirm' );
        }
    }
} );
</script>