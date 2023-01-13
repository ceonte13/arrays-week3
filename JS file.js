// create an array called ages that contain the following values:[3,9,23,64,2,8,28,93]

 let ages=[3,9,23,64,2,8,28,93]

 //progammatically subtract the value of the frist element in the array from the value in the last element of the array 
 // do not use numbers to refrence the last element in  a array. 
  // do not use ages [0-7  ]

  console.log( ages[ages.length-1] -ages[0]); 

  // add a new age to your array and repeat  the step above to ensure it is dynamic. (works for array of diffrent lenghths.)
    ages.push(13);
    console.log(ages);
    console.log(ages[ages.length-1]-ages[0]);

    ///use a loop to irate throught the array and calucate the average age.
    let total=0;
    let avg=0; 

    for(let i=0; i< ages.length; i++){
        total=total+ages[i];
        avg=total/ages.length;
    }
      console.log(avg);

    //*create an array called names that contains the following values;["Sam", "Tommy", "tim","sally","buck",bob];

    let names=["sam","Tommy","sally","buck","bob"];

    //*Use a loop to iterate through the array and calculate the average number of letters per name. print the result to the console*/
     let namesTotal=0;
     let namesAvg=0;
     for(let i=0 ; i < names.length; i++){
        namesTotal=namesTotal+names[i].length;


     }  namesAvg= namesTotal/ages.length;

        console.log(namesAvg);


    
//*use a loop to iterate through the array again concatentation all the names together ,separated ny spaces,and print the result to the console
    let  result='';

for (let i = 0; i < names.length; i++) {
    
    result=result+names[i] +  '' ;
}

 console.log(result);
 namesAvg = namesTotal/names.length;



 // how do access the last element of any array ?

  [names.length-1]
    
    
    /// how do  you access the first element of any array ?
      let array=[1,2,3,4]
       array[0]

    ///*create a new array called nameLengths.write a loop to iterate over the previously created names array and add of each the length of each name to the nameLengths array*/

    let newNames =['cail', 'taj', 'shrale', 'caronte'];
    let nameLengths=[];


    for(let i = 0; i <newNames.length; i++){
          nameLengths.push(newNames[i].length);
    }
      console.log(nameLengths);


      ////*write a loop to iterate  over the namesLengths array and calculate the sum of all the elements in the array. print the results to the console.

      let sum= 0;
      for(let i= nameLengths.length-1; i>=0;  i--){
        sum +=nameLengths[i];
      }
        console.log(sum);

    ///* write a function thats takes two parameters, word and n, as arguments and return the word concatenated to itself n number of times.(i.e if I pass in 'Hello' and 3, I would expect the function to return 'HELLOHELLOHELLOHELLO')

         function wordRepeat(word,n){
            let count=1;
            let result=","
            while(count<=n){
                result+=word;
                count++;
            }
            return result;
         }
         console.log(wordRepeat("hello",4));

         ///*write a function that takes two parameters.firstName and lastName, and return a full name(the full name should be the frist and last name separated by a space).*/
               
               function fullname(fristname, lastname){

               return fullname `${fristname}${lastname}`;
              }

        ///*write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
              function isSumGreaterthan100(numbers){

             
                 let sum=0;
                for(let i =0; i <numbers.length; i++){
                    sum+=numbers[i];
                }
             
                   return sum>100;
             }


             ////*write function that takes two arrays of numbers and return true if the average of the elements in the frist array is greater than  the average of the elements in the second array.
                   let num1=[1,2,3,4]
                   let num2=[5,6,7,8]
                 
                   function CompareArray(array1,array2){
                    console.log(array1,array2)
                     for(let i= 0; i <array1.length; i++){
                       total=array1+array2[i]
                       average= total/array.length
                     }
                   }    
                     
                    CompareArray(num1,num2)
                    console.log(average)

                    

                    

                  

           
            ///*write a function called willbuyDrink that takes a boolean isHotoutside ,and a number moneyinPocket, and returns true if it is hot outside and if moneyinPocket is greater than 10.50.
                 
             
                function willbuyDrink(isHotoutside,moneyinPocket){
                  if(isHotoutside==true&&moneyinPocket>10.50){

                  } return true;


               } return false;
                   
                   



             ////* create a function of your own that solves a problem     write a function that take two parameter and combine them and get the total sum


             function addNumbers(num1, num2) {
              return num1 + num2;

                                            





