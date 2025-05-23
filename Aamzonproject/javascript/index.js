async function getApiData(value) {
    let apiData = 'https://dummyjson.com/products/category/smartphones'
    const response = await fetch(apiData)
    const json = await response.json()
    return json.products
}
function listData(params) {
    let card = ""
    params.forEach(a => {
        card += `<div class='row boxshadow my-3'>
        <div class="col-4">
                    <div class="my-5 text-center"><img style="width: 100px" src=${a.images[2]} ></div>
                </div>
                <div class="col-8">
                    <div >
                            <div class="fs-5 py-4 text-red"> ${a.description}</div>
                            <div class="fs-4 fw-bold"> ${a.price}</div>
                            <div> Product Available: ${a.availabilityStatus == "In Stock" ? "yes" : (a.availabilityStatus == 'Out of Stock') ? 'No stock' : 'product not available'}</div>
                            <div> ${a.brand}</div>
                            <div>  ${a.category}</div>
                            <div>  ${a.rating}</div>
                            <div> ${a.warrantyInformation}</div>
                        </div>
                    </div>
                </div>
        </div>`
    });
    return card;
}
function filterData(params, params2) {
    return params2.filter(a =>
        a.brand == params
    )
}
async function amazon(value) {
    console.log(value);
    let allData = await getApiData(value)
    console.log(allData);
    let cardData;
    if (value) {
        data = filterData(value, allData)
        cardData = listData(data)
    } else {
        cardData = listData(allData)
    }

    document.getElementById('demo').innerHTML = cardData;
}
amazon()


