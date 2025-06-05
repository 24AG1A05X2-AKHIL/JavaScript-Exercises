<!DOCTYPE html>
<html>
  <head>
   <title>Exercise-11</title>

 
</head>

<body>
 

    <script>
   function findIndex(array, word){
    for(let i = 0; i <= array.length; i++){
     if(i < array.length)
     { if(array[i] === word){
        console.log(i);
        break;

      }else if(array[i] !== word) {
        continue;
        
        
      } }
      else{
        console.log(-1);
      }

    }
  
   }
   findIndex(['green', 'red', 'blue', 'red'], 'red');
   findIndex(['green', 'red', 'blue', 'red'], 'yellow');
   
    </script>
  </body>
</html>
