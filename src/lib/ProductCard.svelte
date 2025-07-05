<script>
  export let product;
</script>

<div class="product-card">
  <img src={product.image} alt={product.name} />
  <h3>{product.name}</h3>
  <p class="price">${product.price}</p>
  <button>Add to Cart</button>
</div>

<style>
  .product-card {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 1rem;
    width: 220px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    transition: box-shadow 0.2s;
  }
  .product-card:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  }
  .product-card img {
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 4px;
  }
  .price {
    color: #0070f3;
    font-weight: bold;
    margin: 0.5rem 0 1rem 0;
  }
  button {
    background: #0070f3;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s;
  }
  button:hover {
    background: #005bb5;
  }
</style>
