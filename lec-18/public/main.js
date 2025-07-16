const API_URL = "/api/product";
let currentUpdateId = null;

async function getProducts(search = "") {
  const res = await fetch(`${API_URL}${search ? `?search=${search}` : ""}`);
  const products = await res.json();
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${product.name}</strong> - $${product.price} - ${product.category} - Qty: ${product.quantity}
      <p>${product.description}</p>
      <button class="update-btn" onclick="showUpdateForm('${product._id}')">Update</button>
      <button class="delete-btn" onclick="deleteProduct('${product._id}')">Delete</button>
    `;
    list.appendChild(li);
  });
}

async function addProduct() {
  const name = document.getElementById("name").value.trim();
  const price = Number(document.getElementById("price").value);
  const description = document.getElementById("description").value.trim();
  const category = document.getElementById("category").value.trim();
  const quantity = Number(document.getElementById("quantity").value);

  const res = await fetch(`${API_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price, description, category, quantity }),
  });

  if (res.ok) {
    alert("Product added!");
    getProducts();
  } else {
    const err = await res.json();
    alert("Error: " + err.error);
  }
}

async function deleteProduct(id) {
  if (confirm("Are you sure you want to delete this product?")) {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (res.ok) {
      alert("Product deleted!");
      getProducts();
    } else {
      const err = await res.json();
      alert("Error: " + err.error);
    }
  }
}

function showUpdateForm(id) {
  currentUpdateId = id;
  fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((products) => {
      const product = products.find((p) => p._id === id);
      if (product) {
        document.getElementById("updateName").value = product.name;
        document.getElementById("updatePrice").value = product.price;
        document.getElementById("updateDescription").value = product.description;
        document.getElementById("updateCategory").value = product.category;
        document.getElementById("updateQuantity").value = product.quantity;

        document.getElementById("updateModal").style.display = "block";
      }
    });
}

function closeUpdateModal() {
  document.getElementById("updateModal").style.display = "none";
}

async function submitUpdate() {
  const updatedProduct = {
    name: document.getElementById("updateName").value.trim(),
    price: Number(document.getElementById("updatePrice").value),
    description: document.getElementById("updateDescription").value.trim(),
    category: document.getElementById("updateCategory").value.trim(),
    quantity: Number(document.getElementById("updateQuantity").value),
  };

  const res = await fetch(`${API_URL}/${currentUpdateId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  });

  if (res.ok) {
    alert("Product updated!");
    closeUpdateModal();
    getProducts();
  } else {
    const err = await res.json();
    alert("Error: " + err.error);
  }
}

function searchProducts() {
  const search = document.getElementById("searchInput").value.trim();
  getProducts(search);
}

function resetSearch() {
  document.getElementById("searchInput").value = "";
  getProducts();
}

getProducts();
