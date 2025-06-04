<!DOCTYPE html>
<html>
  <head>
   <title>Exercise-11</title>

 
</head>

<body>
 

    <script>
      function minMax(nums){ 
        const value = {
            min:  +9999, 
            max: -9999
          }
        if(nums.length==0){
          value.min=null;
          value.max=null;
        }
        if(nums.length==1){
          value.min=nums[0];
          value.max=nums[0];
        }
        for(i=0;i<nums.length;i++){
          
          if(nums[i]>value.max){
            value.max=nums[i];
          }
          if(nums[i]<value.min){
            value.min=nums[i];
          }
      
        }
        console.log(value);
      }
      console.log(minMax([8, -3, 10]));
      console.log(minMax([-2, 3, -5, 7, 10]));
      console.log(minMax([]));
      console.log(minMax([3]));
    </script>
  </body>
</html>
