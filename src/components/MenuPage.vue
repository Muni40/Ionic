<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom" color="medium">
                <!-- <ion-tab-button tab="home" href="/home">
                    <ion-icon :icon=" playCircle " />
                    <ion-label></ion-label>
                </ion-tab-button> -->

                <ion-tab-button tab="produit" href="/produit">
                    <ion-icon :icon="basket"/> 
                    <ion-label>Produit</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="vente" href="/vente">
                   <ion-icon :icon="cart"/>
                    <ion-label>Vente</ion-label>
                </ion-tab-button>

                <!-- <ion-tab-button tab="search" href="/search">
                    <ion-icon :icon=" search " />
                    <ion-label>Search</ion-label>
                </ion-tab-button> -->
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script >
import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';

import { basket,cart} from 'ionicons/icons';

export default {
    components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
    data ()
    {
        return {
            cart,
           basket,
        };
    },
};
</script>