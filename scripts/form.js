// Product array for select dropdown
document.addEventListener('DOMContentLoaded', function() {
  const products = [
    { id: "prod1", name: "Product 1" },
    { id: "prod2", name: "Product 2" },
    { id: "prod3", name: "Product 3" }
  ];
  const select = document.getElementById('product');
  // Placeholder option
  const placeholder = document.createElement('option');
  placeholder.textContent = 'Select a Product ...';
  placeholder.disabled = true;
  placeholder.selected = true;
  select.appendChild(placeholder);
  // Add products
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
