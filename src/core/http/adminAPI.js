import {$authHost} from "@/core/http/index";

export const addType = async (type) => {
    await $authHost.post('api/type/create', type)
}

export const addProduct = async (product) => {
    await $authHost.post('api/product', product)
}
