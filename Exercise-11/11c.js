<!DOCTYPE html>
<html>
  <head>
   <title>Exercise-11</title>

 
</head>

<body>
 

    <script>
    function arraySwap(array){

      let array1 = array[array.length - array.length];
      let array2 = array[array.length-1];
      array[0] = array2;
      array[array.length-1] = array1;
      console.log(array);
    
    }
    
    let Array = [1, 20, 22, 24, 5];
    arraySwap(Array);
    </script>
  </body>
</html>
