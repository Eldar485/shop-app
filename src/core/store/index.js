import {createStore} from "vuex";
import {shopModule} from "@/core/store/shopModule";
import {buyerModule} from "@/core/store/buyerModule";
import {authModule} from "@/core/store/authModule";
import {notificationModule} from "@/core/store/notificationModule";

export default createStore({
    modules: {
        shop: shopModule, buyerModule,
        auth: authModule,
        notification: notificationModule
    }
})