<template>
    <div class="admin">
        <v-button style-type="btn-success" @click="showAddType = true">Добавить тип</v-button>
        <v-button style-type="btn-success" @click="showAddProduct = true">Добавить продукт</v-button>
        <v-button style-type="btn-success" @click="showAddProductNew = true">Добавить продукт New</v-button>
    </div>
    <v-modal style-type="dialog" v-model:show="showAddType">
        <div class="modal-content">
            <v-add-type></v-add-type>
        </div>
    </v-modal>
    <v-modal style-type="dialog" v-model:show="showAddProduct">
        <div class="modal-content">
            <v-add-product></v-add-product>
        </div>
    </v-modal>
    <v-modal style-type="dialog" v-model:show="showAddProductNew">
        <div class="modal-content">
            <v-add-product-new></v-add-product-new>
        </div>
    </v-modal>
</template>

<script>
import VButton from "@/core/components/UI/v-Button";
import VModal from "@/core/components/UI/v-Modal";
import {useVuelidate} from "@vuelidate/core/dist";
import VAddType from "@/pages/admin/components/v-Add-type";
import VAddProduct from "@/pages/admin/components/v-Add-product";
import VAddProductNew from "@/pages/admin/components/v-Add-product-new";

export default {
    components: {VAddProductNew, VAddProduct, VAddType, VModal, VButton},
    setup() {
        return {v$: useVuelidate()}
    },
    data() {
        return {
            showAddProduct: false,
            showAddProductNew: false,
            showAddType: false,
        }
    }
}
</script>

<style scoped lang="scss">
.admin {
    font-weight: 500;
    margin-top: 5rem;
    margin-bottom: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    & > * {
        width: 25rem;
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }
}

.modal-content {
    width: 40vw;
}

@media screen and (max-width: 430px) {
    .admin {
        & > * {
            width: 15rem;
            font-size: 1.05rem;
        }
    }
}

</style>