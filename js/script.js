// Draw Products in Homepage

(function drawProducts() {
  let products = JSON.parse(localStorage.getItem("products"));
  let productContainer = document.querySelector("#productContainer");
  let ProductsUi = products.map((item) => {
    return `<div class="col">
                        <div class="card  ">
                            <img src="${item.imgUrl}" class=" mt-2 w-50 mx-auto" alt="photo"
                                style="height:200px; object-fit: contain;">
                            <div class="card-body">
                                <h5 class="card-title fs-4 text-center">${item.title}</h5>
                                <p class="card-text text-center">${item.description}</p>
                                <p class="card-price fs-3 fw-bold text-center">${item.price} L.E</p>
                                <div class="d-flex justify-content-evenly">
                                    <button id="addToCartBtn" onClick="addToCart(${item.id})" class="btn btn-outline-success btn-lg "><i
                                            class="fas fa-cart-plus"></i></button>
                                    
                                </div>
                            </div>
                        </div>
                    </div> <!-- col --> `;
  });
  productContainer.innerHTML = ProductsUi.join("");
})();

// drawProducts();

//  Check if there is items in Localstorage

let addToCartBtn = document.getElementById("addToCartBtn");
addToCartBtn.addEventListener("click", addToCart);

// Add To Cart
function addToCart(id) {
  if (localStorage.getItem("username")) {
    let addedItem = localStorage.getItem("productsInCart")
      ? JSON.parse(localStorage.getItem("productsInCart"))
      : [];

    let products = JSON.parse(localStorage.getItem("products")) || products;
    let product = products.find((item) => item.id === id);

    let isProductInCart = addedItem.some((i) => i.id === product.id);

    if (isProductInCart) {
      addedItem = addedItem.map((p) => {
        if (p.id === product.id) p.qty += 1;
        return p;
      });
    } else {
      addedItem.push(product);
    }

    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
  }
  canvas();
}

// Draw Products in Cart

function canvas() {
  let fullPrice = document.getElementById("offcanvasExampleLabel2");
  let productsInCart = JSON.parse(localStorage.getItem("productsInCart"));
  productsAddedToCart.innerHTML = "";
  let cash = 0;
  productsInCart.forEach((item) => {
    cash += item.qty * item.price;
  });
  fullPrice.innerHTML = `Total Cost ${cash} L.E`;
  productsInCart.map((item) => {
    let productsAddedToCart = document.querySelector("#productsAddedToCart");
    productsAddedToCart.innerHTML += `

  <div class="col mx-auto" style="width: 90%;">
                          <div class="card  ">
                              <img src="${
                                item.imgUrl
                              }" class=" mt-2 w-50 mx-auto" alt="photo"
                                  style="height:200px; object-fit: contain;">
                              <div class="card-body">
                                  <h5 class="card-title fs-4 text-center">${
                                    item.title
                                  }</h5>
                                  <h6 class="card-title fs-6 text-center">Quantity : ${
                                    item.qty
                                  }</h6>
                                  <p class="card-price fs-3 fw-bold text-center">Total : ${
                                    item.price * item.qty
                                  } L.E</p>
                                  <div class="d-flex justify-content-evenly">
                                      <button class="btn btn-outline-danger btn-sm " id="removeBtn" onclick="removeFromCart(${
                                        item.id
                                      })"><i
                                              class="fas fa-trash"></i></button>
                                      
                                      
                                  </div>
                              </div>
                          </div>
                      </div> <!-- col -->
                      <br>
  `;
  });
}
canvas();

// removeProducts from Cart

let removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", removeFromCart);

function removeFromCart(id) {
  let products = JSON.parse(localStorage.getItem("productsInCart"));
  let filteredPros = products.filter((item) => item.id !== id);
  localStorage.setItem("productsInCart", JSON.stringify(filteredPros));
  canvas();
}

// let likeBtn = document.querySelectorAll("#likeBtn");
// let likeIcon = document.querySelectorAll("#likeIcon")

// likeBtn.forEach= function(item){
//   item.onClick = function (){
//     for (let i = 0; i < likeIcon.length; i++) {
//       likeIcon[i].style.color = "Red"

//     }

//   }
// }
