<!DOCTYPE html>
<html>
  <head>
    <title>Cart Quantity</title>
  </head>
  <body>
    <button onclick="
      console.log(`Cart quantity: ${cartQuantity}`);
    ">Show Quantity</button>

    <button onclick="
     updateCartQuantity(1,1);
    ">Add to Cart</button>

    <button onclick="
     updateCartQuantity(2,2);
    ">+2</button>

    <button onclick="
      updateCartQuantity(3,3);
    ">+3</button>

    <button onclick="
      updateCartQuantity(4,4);
    ">+4</button>

    <button onclick="
     updateCartQuantity(5,5);
    ">+5</button>

    
    <button onclick="
      updateCartQuantity(1,-1);
    ">Remove from cart</button>

    <button onclick="
      updateCartQuantity(2,-2);
    ">-2</button>

    <button onclick="
      updateCartQuantity(3,-3);
    ">-3</button>
   

    <button onclick="
      cartQuantity = 0;
      console.log('Cart was reset.');
      console.log(`Cart quantity: ${cartQuantity}`);
    ">Reset Cart</button>

    <script>
      let cartQuantity = 0;
      function updateCartQuantity(value,value1){
        if (value1 < 0){
          if (cartQuantity - value < 0) {
          alert('Not enough items in the cart');
          }  else {
          cartQuantity -= value;
          console.log(`Cart quantity: ${cartQuantity}`);
          }

        } else if (value1 > 0){
          if (cartQuantity + value >10) {
          alert('The Cart is full');
        } else {
          cartQuantity += value;
          console.log(`Cart quantity: ${cartQuantity}`);
        }
        }
    }
    </script>
  </body>
</html>
