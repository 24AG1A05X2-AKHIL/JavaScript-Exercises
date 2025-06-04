<!DOCTYPE html>
<html>
  <head>
   <title>Exercise-11</title>

 
</head>

<body>
 

    <script>
      function addNum(array, num){
     for(i=0;i<array.length;i++){
      array[i] += num;
     }
      }
    
     
     let array = [1, 2, 3];
     addNum((array), 2);
     console.log(array);
    
    </script>
  </body>
</html>
