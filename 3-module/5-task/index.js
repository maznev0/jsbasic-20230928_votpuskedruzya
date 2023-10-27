function getMinMax(str) {
  let result = {};
  
  let arr = str.split(' ');
  arr.map(
  item => isNaN(parseFloat(item)) 
  ? arr.splice(arr.indexOf(item), 1) 
  : item = parseFloat(item)
  );
  

  //   if (str.split(' ').map(item => isNaN(parseFloat(item)))) {
  //     arr.splice(arr.indexOf(item), 1);
  //   } else {
  //     item = parseFloat(item);
  //   } 

  result.min = Math.min(...arr);
  result.max = Math.max(...arr);
  
  return result;
}
/*
1) Почему выдавало ошибку, 
когда была попытка сразу сделать 
все действия с массивом при его объявлении?

```js
let arr = str.split(' ').map(...);
```
*/