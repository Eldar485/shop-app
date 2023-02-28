import {$host} from "@/core/http/index";

export const fetchProducts = async ({page, limit, typeId}) => {
    return await $host.get('http://localhost:5000/api/product', {
        params: {
            page,
            limit,
            typeId
        }
    })
}

export const fetchNewCollection = async () => {
    return await $host.get('http://localhost:5000/api/product/new-collection')
}

export const fetchFilters = async () => {
    return await $host.get('http://localhost:5000/api/type')
}