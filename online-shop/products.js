import { API } from "./js/constants.js"

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id")
console.log(productId)

async function getProductById() {
  try {
    const response = await fetch(`${API}/${productId}`);
    const { data } = await response.json();
    console.log(data)
    displayProductById(data);
  } catch (error) {
    console.error("Error fetching API:", error);
  }
}

getProductById()

function displayProductById(product) {
  const productContainer = document.getElementById("product-container");

  const image = document.createElement("img");
  image.src = product.image.url;

  const title = document.createElement("h1");
  title.textContent = product.title;

  productContainer.appendChild(title)
  productContainer.appendChild(image)
}