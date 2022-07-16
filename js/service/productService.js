const BASE_URL = "https://62bea99ebe8ba3a10d58a27a.mockapi.io/toDoList/AppleStoreProduct";
export let productService = {
    getListProduct: () => {
        return axios({
            url: BASE_URL,
            method: "GET"
        });
    },
    deleteProdduct: (id) => {
        return axios({
            url: `${BASE_URL}/${id}`,
            method: "DELETE"
        });
    },
    addProduct: (product) => {
        return axios({
            url: BASE_URL,
            method: "POST",
            data: product
        })
    }, getDetailInforProduct: (id) => {
        return axios({
            url: `${BASE_URL}/${id}`,
            method: "GET"
        })
    }, updateInforProduct: (product) => {
        return axios({
            url: `${BASE_URL}/${product.id}`,
            method: "PUT",
            data: product
        })
    }
}
