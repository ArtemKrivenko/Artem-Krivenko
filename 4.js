/*4*/
function isEven (number)
{return number % 2 == 0;}
var arr = [10, 9, 8, 7, 11, 22, 3, 5, 2];
var newArr = [];
for (var i = 0; i < arr.length; i++)
{if (isEven(arr[i]) == true)
    {newArr.push(arr[i]);}
}
console.log(newArr);
