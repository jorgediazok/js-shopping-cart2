//show cart
(function () {
  const cartInfo = document.getElementById('cart-info');
  const cart = document.getElementById('cart');

  cartInfo.addEventListener('click', function () {
    cart.classList.toggle('show-cart');
  });
})();

//add items to the car
(function () {
  const cartBtn = document.querySelectorAll('.store-item-icon');

  cartBtn.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (event.target.parentElement.classList('store-item-icon')) {
      }
    });
  });
})();
