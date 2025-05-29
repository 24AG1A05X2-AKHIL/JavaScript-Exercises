<!DOCTYPE html>
<html>
  <head>
   <title>Exercise-8</title>
  </head>
  <body>
    <script>
     const amazonProject = {
      product: 'basketball',
      price:    2095,
      fun: function comparePrice (product1, product2){if (product1 < product2){
        console.log(`product1 is less expensive${   product1}`);
      } else if(product1 > product2){
        console.log(`product2 is less expensive${   product2}`);
      }
      }
     };
     console.log(amazonProject.product);
     amazonProject.price = 2595;
     console.log(amazonProject.price);
     amazonProject['delivery-time'] = '3 days';
     console.log(amazonProject);
     amazonProject.fun(1000, 500)
    </script>
  </body>
</html>
