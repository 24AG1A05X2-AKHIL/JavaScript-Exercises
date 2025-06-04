<!DOCTYPE html>
<html>
  <head>
   <title>Exercise-11</title>

 
</head>

<body>
 

    <script>
    let myArray = ['hello', 'world', 'search', 'good'];
    for(let i = 0; i < myArray.length; i++){
      if(myArray[i] === 'search'){
        console.log(i);
        break;
      } else {
        
        console.log(-1);
      }
    }
    </script>
  </body>
</html>
