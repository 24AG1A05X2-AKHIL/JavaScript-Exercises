<!DOCTYPE html>
<html>
  <head>
   <title>Exercise-8</title>
  </head>
  <body>
    <script>
     const amazonProject = {
      name: 'strawberries',
      price: 600,
    };
    const amazon = {
      name: 'strawberries',
      price: 600,
    }
    
  
    

    function isSameProduct(product1, product2){
      if((product1.name == product2.name && product1.price == product2.price) ){
        console.log(true);
      }else {
        console.log(false);
      }
      
    };
    isSameProduct(amazonProject, amazon);
    </script>
  </body>
</html>
