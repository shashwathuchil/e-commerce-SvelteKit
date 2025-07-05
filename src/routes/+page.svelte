<script>
  import ProductCard from '$lib/ProductCard.svelte';
  // Example featured products data
  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 99.99, image: '/images/headphones.jpg' },
    { id: 2, name: 'Smart Watch', price: 149.99, image: '/images/smartwatch.jpg' },
    { id: 3, name: 'Bluetooth Speaker', price: 59.99, image: '/images/speaker.jpg' }
  ];
</script>

<section class="hero">
  <h1>Welcome to ShopEase</h1>
  <p>Your one-stop shop for the latest electronics and gadgets.</p>
  <a href="/shop" class="shop-btn">Shop Now</a>
</section>

<section class="featured">
  <h2>Featured Products</h2>
  <div class="products">
    {#each featuredProducts as product}
      <ProductCard {product} />
    {/each}
  </div>
</section>

<style>
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
</style>