function getMinMax(str) {
  let result = {};
  
  let arr = str.split(' ');
  arr.map(
  item => isNaN(parseFloat(item)) 
  ? arr.splice(arr.indexOf(item), 1) 
  : item = parseFloat(item)
  );

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

2) Почему без проверки на isNan(),
Math.min/max() исключительно возвращает Nan?

3) Можно ли как-нибудь обойти второй пункт?
*/