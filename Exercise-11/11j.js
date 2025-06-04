<!DOCTYPE html>
<html>
  <head>
   <title>Exercise-11</title>

 
</head>

<body>
 

    <script>
      function addArrays(array1, array2){
        const res=[];
     for(let i=0;i<array1.length;i++){
      res.push(array1[i]+ array2[i]);
     }
     return res;
      }
     console.log(addArrays([1, 1, 2], [1, 1, 3])
    );
    
    </script>
  </body>
</html>
