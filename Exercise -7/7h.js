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
        if (from == 'miles' && to == 'km'){
          to = length * 1.6;
          console.log(`${to} km`);
        } else if(from == 'km' && to == 'miles'){
          from = length / 1.6;
          console.log(`${from} miles`);
        }else if (from == 'miles' && to == 'ft'){
          to = length * 5280;
          console.log(`${to} ft`);

        } else if (from == 'km' && to == 'ft'){
          to = length * 3281;
          console.log(`${to} ft`)
        }else {
          console.log(`${length} unit`)
        }
      }
      convertLength(5, 'miles', 'km');
      convertLength(5, 'miles', 'ft');
      convertLength(5, 'km', 'ft');
      
      
    </script>
  </body>
</html>
