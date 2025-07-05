import { w as push, J as ensure_array_like, K as store_get, M as unsubscribe_stores, y as pop, F as writable, N as bind_props } from './index2-DopG-4tw.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const featuredProducts = writable([
  { id: 1, name: "Wireless Headphones", price: 99.99, image: "/images/headphones.jpg" },
  { id: 2, name: "Smart Watch", price: 149.99, image: "/images/smartwatch.jpg" },
  { id: 3, name: "Bluetooth Speaker", price: 59.99, image: "/images/speaker.jpg" }
]);
const cart = writable([]);
function ProductCard($$payload, $$props) {
  push();
  let product = $$props["product"];
  $$payload.out += `<div class="product-card svelte-1kkxf3p"><img${attr("src", product.image)}${attr("alt", product.name)} class="svelte-1kkxf3p"/> <h3>${escape_html(product.name)}</h3> <p class="price svelte-1kkxf3p">$${escape_html(product.price)}</p> <button class="svelte-1kkxf3p">Add to Cart</button></div>`;
  bind_props($$props, { product });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$featuredProducts", featuredProducts));
  $$payload.out += `<section class="hero svelte-8d47a"><h1>Welcome to ShopEase</h1> <p>Your one-stop shop for the latest electronics and gadgets.</p> <div class="cart-summary svelte-8d47a">🛒 Cart: ${escape_html(store_get($$store_subs ??= {}, "$cart", cart).length)} item${escape_html(store_get($$store_subs ??= {}, "$cart", cart).length === 1 ? "" : "s")}</div></section> <section class="featured svelte-8d47a"><h2>Featured Products</h2> <div class="products svelte-8d47a"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let product = each_array[$$index];
    ProductCard($$payload, { product });
  }
  $$payload.out += `<!--]--></div></section>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D4DtXlyr.js.map
