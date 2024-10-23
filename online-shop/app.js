import { API } from "./js/constants.js"

async function getAllProducts() {
  try {
    const response = await fetch(API);
    const { data } = await response.json();
    console.log(data);
    displayAllProducts(data);
  } catch (error) {
    console.error("Error fetching API:", error);
  }
}

getAllProducts()


function displayAllProducts(element) {
  const onlineShop = document.getElementById("online-shop")

  element.forEach((element) => {
    const card = document.createElement("a")
    card.href = `products.html?id=${element.id}`


    const image = document.createElement("img")
    image.src = element.image.url
    image.classList = "shop-img"

    card.appendChild(image)
    onlineShop.appendChild(card)
  })

}


