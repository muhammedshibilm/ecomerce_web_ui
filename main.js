
function createProducts(val){
    return `<div class=" col-3 my-2 mx-2 card "  style="width: 18rem;">
    <img class="card-img-top" height="250px" style="object-fit: contain"  src="${val.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${val.title}</h5>
      <p class="card-text">${val.price}</p>
      <a href="#" class="btn btn-primary">Buy</a>
    </div>
  </div>`;

}

async function getProduct() {
    const response  = await fetch("https://fakestoreapi.com/products")
    const  products = await  response.json()
    console.log(products)
    let productListContainer='';
    for (let vs of products) {
     const  productcontainer = createProducts(vs);
     productListContainer=productListContainer+productcontainer;
    } 
    console.log(productListContainer)
    let product = document.getElementById("product");
    product.innerHTML=productListContainer;
    
}
getProduct()
