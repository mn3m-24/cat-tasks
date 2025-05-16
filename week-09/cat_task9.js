const purchases = {
  1: 3,
  4: 4,
  3: 5,
};

// first solution
// let sum = 0;
// for(let [id, quantity] of Object.entries(purchases)){
//     await fetch(`https://fakestoreapi.com/products/${id}`)
//     .then(response => response.json())
//     .then(products => {
//         sum += products.price * quantity;
//     })
//     .catch(err => console.log(err));
// }
// console.log(sum);

// second solution
// let sum = 0;
// fetch(`https://fakestoreapi.com/products/`)
// .then(response => response.json())
// .then(products => {
//     for(let product of products){
//         if(purchases.hasOwnProperty(product.id))
//             sum += product.price * purchases[product.id];
//     }
// })
// .catch(err => console.log(err))
// .finally(() => console.log(sum));

// third solution
async function calculateTotal() {
  const res = await fetch("https://fakestoreapi.com/products/");
  if (!res.ok) {
    throw new Error(
      `Failed to fetch products: ${res.status} ${res.statusText}`,
    );
  }
  const products = await res.json();

  const wanted = products.filter((p) => Object.hasOwn(purchases, p.id));

  const total = wanted.reduce((sum, p) => sum + p.price * purchases[p.id], 0);
  console.log(total);
}

calculateTotal().catch((err) => console.log(err));
