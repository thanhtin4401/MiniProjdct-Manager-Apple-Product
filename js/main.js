import { controlerListProduct } from "../controller/controller.js";
import { productService } from "./service/productService.js";


const add = document.getElementById('btn--add');
add.onclick = () => {
    document.getElementById('input__screen').classList.add("active");
}
const close = document.querySelector(".close");
close.onclick = () => {
    document.getElementById('input__screen').classList.remove("active");
    document.getElementById("update__product").classList.add("disabled");
}


let renderListProduct = (list) => {
    let HTML = ""
    for (var i = 0; i < list.length; i++) {
        let product = list[i];
        let contentTr = `
        <tr>
            <td>${product.id}</td>
            <td>
                <img src="${product.img}" style="max-width: 2rem;" alt="">
            </td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.title}</td>
            <td>${product.description}</td>
            <td class="btn d-flex">
                <button onclick="editProduct('${product.id}')" class="btn btn-primary mr-2">Edit</button>
                <button class="btn btn-warning" onclick="deleteProduct('${product.id}')">Delete</button>
            </td>
        </tr>
        `
        HTML += contentTr;
    }
    document.getElementById('tbody__product').innerHTML = HTML;
    // console.log(HTML);
}
window.renderListProduct = renderListProduct;


// show list prodcut
let showListProduct = () => {
    productService.getListProduct().
        then((res) => {
            renderListProduct(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
}

// delete product item
let deleteProduct = (idProduct) => {
    productService.deleteProdduct(idProduct)
        .then((res) => {
            showListProduct();
        })
        .catch((err) => {
            console.log(err);
        })
}
// add product
let addProduct = () => {
    let product = controlerListProduct.getInforFromForm();

    productService.addProduct(product)
        .then((res) => {
            showListProduct();
            console.log("success");
        })
        .catch((err) => {
            console.log(err);
        })

}
let idProductEdited = null;
// edit product
let editProduct = (id) => {
    idProductEdited = id;

    productService.getDetailInforProduct(idProductEdited)
        .then((res) => {
            controlerListProduct.showInforProductFromList(res.data);
            document.getElementById("update__product").classList.remove("disabled");
        })
        .catch((err) => {
            console.log(err);
        })
    document.getElementById('input__screen').classList.add("active");
}

// update product
let updateProduct = () => {
    let product = controlerListProduct.getInforFromForm();
    let newProduct = { ...product, id: idProductEdited };

    productService.updateInforProduct(newProduct)
        .then((res) => {
            showListProduct();
            document.getElementById("update__product").classList.add("disabled");
            controlerListProduct.cleaFormInput();
        })
        .catch((err) => {
            console.log(err);
        })
}

window.updateProduct = updateProduct
window.editProduct = editProduct;
window.addProduct = addProduct;
window.deleteProduct = deleteProduct;
window.showListProdcut = showListProduct;
showListProduct();
