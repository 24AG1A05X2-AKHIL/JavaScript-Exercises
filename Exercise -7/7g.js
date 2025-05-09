<!DOCTYPE html>
<html>
  <head>
    <title>Exercise-7</title>
  </head>
  <body>


    <script>
      let length = '';
      let from = '';
      let to = '';
      function convertLength(length, from, to){
        if (from == 'miles' && to == 'Km'){
          to = length * 1.6;
          console.log(`${to} Km`);
        } else if(from == 'Km' && to == 'miles'){
          from = length / 1.6;
          console.log(`${from} miles`);
        }else {
          
          console.log(`${length} Km`);
        }

      }
      convertLength(50, 'miles', 'Km');
      convertLength(32, 'Km', 'miles');
      convertLength(50, 'Km', 'Km');
      
      
    </script>
  </body>
</html>
