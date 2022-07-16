export let controlerListProduct = {
    getInforFromForm: () => {
        let inputName = document.getElementById("input__name").value;
        let inputSrc = document.getElementById("imput__src").value;
        let inputPrice = document.getElementById("input__price").value * 1;
        let inputTitle = document.getElementById("input__title").value;
        let inputDesc = document.getElementById("input__desc").value;
        let prouduct = {
            name: inputName,
            img: inputSrc,
            src: inputSrc,
            price: inputPrice,
            title: inputTitle,
            description: inputDesc
        }
        return prouduct
    },
    showInforProductFromList: (product) => {
        document.getElementById("input__name").value = product.name;
        document.getElementById("imput__src").value = product.img;
        document.getElementById("input__price").value = product.price;
        document.getElementById("input__title").value = product.title;
        document.getElementById("input__desc").value = product.description;
    },
    cleaFormInput: () => {
        document.getElementById("input__name").value = "";
        document.getElementById("imput__src").value = "";
        document.getElementById("input__price").value = "";
        document.getElementById("input__title").value = "";
        document.getElementById("input__desc").value = "";
    }
}