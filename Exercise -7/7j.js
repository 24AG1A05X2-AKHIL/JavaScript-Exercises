<!DOCTYPE html>
<html>
  <head></head>
  <body>
    <p>
      <button onclick="
      updateCalculation('1')
      print()
      ">1</button>

      <button onclick="
        updateCalculation('2')
        print()
      ">2</button>

      <button onclick="
        updateCalculation('3')
        print()
      ">3</button>

      <button onclick="
        updateCalculation(' + ')
        print()
      ">+</button>
    </p>

    <p>
      <button onclick="
        updateCalculation('4')
        print()
      ">4</button>

      <button onclick="
        updateCalculation('5')
        print()
      ">5</button>

      <button onclick="
        updateCalculation('6')
        print()
      ">6</button>

      <button onclick="
        updateCalculation(' - ')
        print()
      ">-</button>
    </p>

    <p>
      <button onclick="
        updateCalculation('7')
        print()
      ">7</button>

      <button onclick="
        updateCalculation('8')
        print()
      ">8</button>

      <button onclick="
        updateCalculation('9')
        print()
      ">9</button>

      <button onclick="
        updateCalculation(' * ')
        print()
      ">*</button>
    </p>

    <p>
      <button onclick="
        updateCalculation('0')
        print()
      ">0</button>

      <button onclick="
        updateCalculation('.')
        print()
      ">.</button>

      <button onclick="
        output()
      ">=</button>

      <button onclick="
        updateCalculation(' / ')
        print()
      ">/</button>
    </p>

    <p>
      <button onclick="
        calculation = '';
        console.log('Cleared.');
      ">Clear</button>
    </p>

    <script>
      let calculation = '';
      function updateCalculation(ak){
        calculation+=ak;
      }
      function print(){
        console.log(calculation);
      }
      function output(){
        calculation1=eval(calculation);
        console.log(calculation1);
      }
    </script>
  </body>
</html>
