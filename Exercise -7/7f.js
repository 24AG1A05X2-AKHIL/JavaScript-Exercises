<!DOCTYPE html>
<html>
  <head>
    <title>Exercise-7</title>
  </head>
  <body>


    <script>
      let degree = '';
      let unit = '';
      function convertTemperature(degrees,unit){
        if(unit == 'C'){
          let fahrenheit = ((degrees * (9/5)) + 32);
          console.log(`${fahrenheit} F`);

        } else if (unit == 'F'){
          let Celcius = (degrees - 32) * (5/9);
          console.log(`${Celcius} C`);
        }
       }
      convertTemperature(25, 'C');
      convertTemperature(86, 'F');
        
      
      
      
    </script>
  </body>
</html>
