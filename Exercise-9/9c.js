<!DOCTYPE html>
<html>
  <head>
    <title>Exercise-9</title>
  </head>
  <body>
  <button class="head" >heads</button>
  <button class="tail">tails</button>
  <p class="para"></p>

    <script>
      const head=document.querySelector(".head");
      const tail=document.querySelector(".tail");
      const para=document.querySelector(".para");
      head.addEventListener("click",()=>{
        para.innerText="you chose: heads";
      })
      tail.addEventListener("click",()=>{
        para.innerText="you chose: tails";
      })
      
    </script>
  </body>
</html>
