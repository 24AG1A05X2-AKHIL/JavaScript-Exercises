<!DOCTYPE html>
<html>
  <head>
    <title>Exercise-6</title>
  </head>
  <body>
    <script>
       const randomNumber =  Math.random();
       
       let result = randomNumber < 0.5? 'heads' : 'tails';

       const guess = 'heads';
       console.log(guess === result? 'You win!' : 'You lose!') ;
        
    </script>
  </body>
</html>
