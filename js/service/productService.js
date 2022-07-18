const BASE_URL = "https://62bea99ebe8ba3a10d58a27a.mockapi.io/toDoList/AppleStoreProduct";

// <=============================================== AXIOS ====================================>
// export let productService = {
//     getListProduct: () => {
//         return axios({
//             url: BASE_URL,
//             method: "GET"
//         });
//     },
//     deleteProduct: (id) => {
//         return axios({
//             url: `${BASE_URL}/${id}`,
//             method: "DELETE"
//         });
//     },
//     addProduct: (product) => {
//         return axios({
//             url: BASE_URL,
//             method: "POST",
//             data: product
//         })
//     }, getDetailInforProduct: (id) => {
//         return axios({
//             url: `${BASE_URL}/${id}`,
//             method: "GET"
//         })
//     }, updateInforProduct: (product) => {
//         return axios({
//             url: `${BASE_URL}/${product.id}`,
//             method: "PUT",
//             data: product
//         })
//     }
// }


// <================================================= FETCH ===============================>
export let productService = {
    getListProduct: () => {
        return fetch(BASE_URL).then(function (res) {
            return res.json();
        })
    },
    addProduct: (product) => {
        var options = {
            method: "POST",
            // chuyển chuỗi javascript thành định dạng JSON()
            body: JSON.stringify(product)
        }
        return fetch(BASE_URL, options).then((res) => {
            return res.json();
        })
    },
    deleteProduct: (id) => {
        var options = {
            method: "DELETE"
        }
        return fetch(BASE_URL + "/" + id, options).then((res) => {
            return res.json()
        })

    },
    updateInforProduct: (product) => {
        var options = {
            method: "PUT",
            // thong bao voi backend
            headers: { 'Content=Type': 'applecation/json' },
            body: JSON.stringify(product)
        }
        return fetch(BASE_URL + "/" + product.id, options).then((res) => {
            return res.json();
        })
    },
    getDetailInforProduct: (id) => {
        var options = {
            method: "GET"
        }
        return fetch(BASE_URL + "/" + id, options).then((res) => {
            return res.json();
        })
    }

}