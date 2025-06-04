<!DOCTYPE html>
<html>
  <head>
   <title>Exercise-11</title>

 
</head>

<body>
 

    <script>
    function countWords(words){
      let count = 0;
      let aoun = 0;
      const object = {
        apple: count,
        grape: aoun
      }
    for(let i = 0; i < words.length; i++){
      if(words[i] === 'apple'){
        
        count++;
        object.apple = count;
      }
      if(words[i] === 'grape'){

        aoun++;
        object.grape = aoun;
      }

    }
    console.log(object);
     }
     countWords(['apple', 'grape', 'apple', 'apple'])

    </script>
  </body>
</html>
