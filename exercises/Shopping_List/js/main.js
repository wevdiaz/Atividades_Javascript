const btnAdd = document.getElementById("btn-buy");

function addItem() {
    const item = document.getElementById("fieldBuying").value;
    const list = document.querySelector("section #list");

    if (item === "") {
        return alert("Adicione um produto na lista");
    }

    const itemList = createLi(item);

    list.appendChild(itemList);
    
    clearInput();
    updateTotal();
    saveItem(list);

}

function createLi(item) {
    const li = document.createElement("li");
    li.innerHTML = item;
    const button = createButtonDelete(item);
    li.appendChild(button);

    return li;
}

function createButtonDelete(item) {
    const button = document.createElement("button");
    button.setAttribute("onclick", "deleteItem(this)" );
    button.innerHTML = "X";
    return button;
}

function clearInput() {
    document.getElementById("fieldBuying").value = "";
}

function updateTotal() {
    const totalItem = document.getElementById("total");
    const itens = document.querySelectorAll("section #list li");
    totalItem.innerHTML = itens.length;
}

btnAdd.addEventListener("click", addItem );

function saveItem(list) {
    const itens = list.querySelectorAll("li");
    let listBuy = [];

    for ( item of itens) {
        listBuy.push(item.innerHTML);
    }
    
    listBuy = JSON.stringify(listBuy);       
    localStorage.setItem("lista", listBuy ); 
}

function deleteItem(e) {
    e.parentNode.remove();    
    updateTotal();
    localStorage.removeItem("lista");
    updateProductsList();    
}


function getProductsListBuy() {
    const products = JSON.parse(localStorage.getItem("lista"));

    if(products.length > 0) {
        const listBuy = document.querySelector("section #list");
        for(product of products) {

            const li = document.createElement("li");
            li.innerHTML = product;

            listBuy.appendChild(li);
        }
        updateTotal();
    }
    
}

function updateProductsList() {
    const itens = document.querySelectorAll("section #list li");
    let listBuy = [];

    for ( item of itens) {
        listBuy.push(item.innerHTML);
    }
    
    listBuy = JSON.stringify(listBuy);       
    localStorage.setItem("lista", listBuy ); 
}

getProductsListBuy();


