<script>
  import ProductCard from '$lib/ProductCard.svelte';
  import { featuredProducts, cart } from '$lib/stores.js';
</script>

<section class="hero">
  <h1>Welcome to ShopEase</h1>
  <p>Your one-stop shop for the latest electronics and gadgets.</p>
  <div class="cart-summary">
    🛒 Cart: {$cart.length} item{($cart.length === 1 ? '' : 's')}
  </div>
</section>


<section class="featured">
  <h2>Featured Products</h2>
  <div class="products">
    {#each $featuredProducts as product}
      <ProductCard {product} />
    {/each}
  </div>
</section>

<style>
.cart-summary {
    margin-top: 1.5rem;
    font-size: 1.1rem;
    color: #333;
    background: #e6f0fa;
    display: inline-block;
    padding: 0.5rem 1.2rem;
    border-radius: 6px;
  }
  .hero {
    text-align: center;
    padding: 3rem 1rem 2rem 1rem;
    background: #f5f7fa;
  }
  .shop-btn {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.75rem 2rem;
    background: #0070f3;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1.1rem;
    text-decoration: none;
    transition: background 0.2s;
  }
  .shop-btn:hover {
    background: #005bb5;
  }
  .featured {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
  }
  .products {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cart-summary {
    margin-top: 1.5rem;
    font-size: 1.1rem;
    color: #333;
    background: #e6f0fa;
    display: inline-block;
    padding: 0.5rem 1.2rem;
    border-radius: 6px;
  }
</style>