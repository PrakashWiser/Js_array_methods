async function getApiData(params) {
    let apiData = "https://dummyjson.com/products/category/smartphones"
    const response = await fetch(apiData)
    const json = await response.json()
    console.log(json);

    let objData = json.products
    console.log(objData);

    return objData
}
function listData(params) {
    console.log(params);
    let alldatas = params
    let card = ''
    alldatas.forEach(a => {
        card += `
        <div class="row my-3">
                    <div class="col-4">
                        <img style="width:150px;" src="${a.images[2]}" alt="">
                        </div>
                        <div class="col-8">
                            <a class="text-decoration-none text-black red-hover" href="./productpage.html?id=${a.id}"><div>${a.brand}</div></a>
                            <div>${a.description}</div>
                            <div class="fs-3 fw-bold">${a.price}</div>
                            <div>${a.title}</div>
                            <div>${a.warrantyInformation}</div>
                            <div>${a.stock}</div>
                            <div>${a.rating}</div>
                            <button class="btn btn-danger my-3 js-buy-button" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight" data-id="${a.id}" data-price="${a.price}" onclick="addToCard()">Add to Cart</button>
                        </div>
                </div>
        `
    });
    document.getElementById("products").innerHTML = card
}

const addToCard = (allDatas) => {

    console.log('add to cart');
    let addButton = document.querySelectorAll('.js-buy-button');
    addButton.forEach(elem => {
        elem.addEventListener('click', function () {
            let itemId = elem.dataset.id;
            let itemPrice = elem.dataset.price;
            console.log(itemId, itemPrice);
            document.getElementById("offcanvas-bodys").innerHTML = itemId
            document.getElementById("offcanvas-bodys").innerHTML = itemPrice
        })
    })
}
function filterData(params1, params2) {
    return params1.filter(a =>
        a.brand == params2
    )
}
function filterDataRange(params1, params2) {
    return params1.filter(a =>
        a.price <= params2
    )
}
async function flibkart(value, range) {
    console.log(value, range);
    let allData = await getApiData(value)
    console.log(allData);
    let allDatas
    if (value) {
        data = filterData(allData, value)
        allDatas = listData(data)
    } else if (range) {
        console.log(range);
        data = filterDataRange(allData, range)
        allDatas = listData(data)
        document.getElementById('textInput').value = range;
    } else {
        allDatas = listData(allData)
    }
}
flibkart()
addToCard()