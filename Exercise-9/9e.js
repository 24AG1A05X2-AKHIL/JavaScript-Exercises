<!DOCTYPE html>
<html>
  <head>
    <title>Exercise-9</title>
  </head>
  <body>
  <input class="text" placeholder="Name" onkeydown="nameHello(event);" >
  <button class="submit" onclick="nameHello();
  ">Submit</button>
  

    <script>
     function nameHello(){
      document.querySelector('.text').value =     `Your name is ${placeholder = 'Akhil'}` 
     };
      
    </script>
  </body>
</html>
