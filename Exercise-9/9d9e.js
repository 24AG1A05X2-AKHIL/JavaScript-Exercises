//My mistake recorrected
<!DOCTYPE html>
<html>
  <head>
    <title>Exercise-9</title>
  </head>
  <body>
  <input class="text" placeholder="Name" onkeydown="nameHello(event);" >
  <button class="submit" onclick="nameHello();
  ">Submit</button>
  <p class="para"></p>
  

    <script>
     function nameHello(){
      const inputValue = document.querySelector('.text').value;    
      document.querySelector('.para').innerHTML = 
      `Your name is ${inputValue}`
     };

      
    </script>
  </body>
</html>
