<template>
    <v-main-title class="main-title" title="Оформление заказа" :breadcrumb="$breadcrumbs.value"></v-main-title>
    <div class="makeOrder">
        <div class="makeOrder__buyer-data">
            <v-buyer-data :buyerData="buyerData"></v-buyer-data>
            <v-order></v-order>
        </div>
        <div class="makeOrder__address-data">
            <v-address :addressData="addressData"></v-address>
            <v-payment :validate="v$"></v-payment>
        </div>
        <div class="makeOrder_comment comment">
            <div class="comment__title">Комментарий</div>
            <v-input
                v-model.trim="comment"
                style-type="input-text"
                class="comment__input"
                placeholder="Комментарий"
            />
        </div>
    </div>
</template>

<script>
import VInput from "@/core/components/UI/v-Input";
import VBuyerData from "@/pages/make-order/components/v-Buyer-data";
import VAddress from "@/pages/make-order/components/v-Address";
import VMainTitle from "@/core/components/UI/v-Main-title";
import { useVuelidate } from '@vuelidate/core'
import VPayment from "@/pages/make-order/components/v-Payment";
import VOrder from "@/pages/make-order/components/v-Order";

export default {
    components: {VOrder, VPayment, VMainTitle, VAddress, VBuyerData, VInput},
    setup () {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            comment: '',
            buyerData: {
                name: '',
                email: '',
                phone: '',
            },
            addressData: {
                country: '',
                city: '',
                street: '',
                house: '',
                flatNumber: '',
            }
        }
    }
}
</script>

<style scoped lang="scss">
.makeOrder {
    font-weight: 500;

    &__buyer-data {
        display: flex;
    }
    &__address-data {
        display: flex;
        align-items: center;
    }
}
.comment {
    margin-top: 5rem;
    margin-bottom: 8.125rem;

    &__title {
        font-size: 1.56rem;
        margin-bottom: 2.9rem;
    }
    &__input {
        max-width: 20rem;
        width: 100%;
    }
}

.main-title {
    margin: 12.5rem 0;
}
</style>