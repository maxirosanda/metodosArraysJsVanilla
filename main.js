function miLength(arr) {
    let i = 0;
    while(arr[i] !== undefined) {
      i++;
    }
    return i;
  }
  
  function miPush(arr, val) {
    let i = 0;
    while (arr[i] !== undefined) {
      i++;
    }
    arr[i] = val;
    return i + 1;
  }
  
  function miUnshift(arr, val) {
    let i = miLength(arr) - 1;
    while (i >= 0) {
      arr[i + 1] = arr[i];
      i--;
    }
    arr[0] = val;
    return miLength(arr);
  }
  
  function miShift(arr) {
    let firstElement = arr[0];
    for (let i = 0; i < miLength(arr) - 1; i++) {
      arr[i] = arr[i + 1];
    }
    arr.length = miLength(arr) - 1;
    return firstElement;
  }
  
  function miPop(arr) {
    let lastElement = arr[miLength(arr) - 1];
    arr.length = miLength(arr) - 1;
    return lastElement;
  }
  
  function miReverse(arr) {
    let left = 0;
    let right = miLength(arr) - 1;
    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
    return arr;
  }
  
  function miJoin(arr, separator = ',') {
    let str = '';
    for (let i = 0; i < miLength(arr); i++) {
      str += arr[i];
      if (i < miLength(arr) - 1) {
        str += separator;
      }
    }
    return str;
  }
  
  function miConcat(arr1, ...arrs) {
    let result = [];
    for (let i = 0; i < miLength(arr1); i++) {
      miPush(result, arr1[i]);
    }
    for (let arr of arrs) {
      for (let val of arr) {
        miPush(result, val);
      }
    }
    return result;
  }
  
  function miSlice(arr, start = 0, end = miLength(arr)) {
    let result = [];
    for (let i = start; i < end && i < miLength(arr); i++) {
      miPush(result, arr[i]);
    }
    return result;
  }
  
  function miSplice(arr, start, deleteCount, ...items) {
    let deletedItems = miSlice(arr, start, start + deleteCount);
    let tail = miSlice(arr, start + deleteCount);
    arr.length = start;
    
    for (let item of items) {
      miPush(arr, item);
    }
    
    for (let item of tail) {
      miPush(arr, item);
    }
  
    return deletedItems;
  }
  
  function miIndexOf(arr, val) {
    for (let i = 0; i < miLength(arr); i++) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1;
  }
  
  function miIncludes(arr, val) {
    return miIndexOf(arr, val) !== -1;
  }
  
  // Ejemplos de uso
  /*
  let arr = [1, 2, 3, 4, 5];
  
  console.log(miPush(arr, 6)); // [1, 2, 3, 4, 5, 6]
  console.log(miUnshift(arr, 0)); // [0, 1, 2, 3, 4, 5, 6]
  console.log(miShift(arr)); // 0
  console.log(miPop(arr)); // 6
  console.log(miReverse(arr)); // [5, 4, 3, 2, 1]
  console.log(miJoin(arr, '-')); // '5-4-3-2-1'
  console.log(miConcat(arr, [6, 7, 8])); // [5, 4, 3, 2, 1, 6, 7, 8]
  console.log(miSlice(arr, 1, 3)); // [4, 3]
  console.log(miSplice(arr, 1, 2, 99, 100)); // [4, 3]
  console.log(arr); // [5, 99, 100, 2, 1]
  console.log(miIndexOf(arr, 100)); // 2
  console.log(miIncludes(arr, 101)); // false
  */

  function miForEach(arr, callback) {
    for (let i = 0; i < miLength(arr); i++) {
      callback(arr[i], i, arr);
    }
  }
  
  function miFind(arr, callback) {
    for (let i = 0; i < miLength(arr); i++) {
      if (callback(arr[i], i, arr)) {
        return arr[i];
      }
    }
    return undefined;
  }
  
  function miFilter(arr, callback) {
    let result = [];
    for (let i = 0; i < miLength(arr); i++) {
      if (callback(arr[i], i, arr)) {
        miPush(result, arr[i]);
      }
    }
    return result;
  }
  
  function miSome(arr, callback) {
    for (let i = 0; i < miLength(arr); i++) {
      if (callback(arr[i], i, arr)) {
        return true;
      }
    }
    return false;
  }
  
  function miMap(arr, callback) {
    let result = [];
    for (let i = 0; i < miLength(arr); i++) {
      miPush(result, callback(arr[i], i, arr));
    }
    return result;
  }
  
  function miReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    for (let i = initialValue !== undefined ? 0 : 1; i < miLength(arr); i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
    return accumulator;
  }
  
  function miSort(arr, compareFunction = (a, b) => ('' + a).localeCompare('' + b)) {
    for (let i = 0; i < miLength(arr); i++) {
      for (let j = 0; j < miLength(arr) - 1 - i; j++) {
        if (compareFunction(arr[j], arr[j + 1]) > 0) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  
  function miFindIndex(arr, callback) {
    for (let i = 0; i < miLength(arr); i++) {
      if (callback(arr[i], i, arr)) {
        return i;
      }
    }
    return -1;
  }
  /*
// Ejemplos de uso:
let arr = [1, 2, 3, 4, 5];

miForEach(arr, (item, index) => {
  console.log(item, index);
});
// 1 0
// 2 1
// 3 2
// 4 3
// 5 4

console.log(miFind(arr, item => item > 2)); // 3

console.log(miFilter(arr, item => item % 2 === 0)); // [2, 4]

console.log(miSome(arr, item => item > 4)); // true

console.log(miMap(arr, item => item * 2)); // [2, 4, 6, 8, 10]

console.log(miReduce(arr, (acc, item) => acc + item, 0)); // 15

console.log(miSort(arr, (a, b) => b - a)); // [5, 4, 3, 2, 1]  
*/
// Ejemplo de uso con array de objetos
let arr = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
  ];
  
  // miForEach: Imprimir cada objeto y su índice
  miForEach(arr, (item, index) => {
    console.log(item, index);
  });
  
  // miFind: Encontrar el primer objeto donde la edad es mayor que 28
  console.log(miFind(arr, item => item.age > 28));
  
  // miFilter: Crear un nuevo array con objetos donde el nombre tenga más de 4 caracteres
  console.log(miFilter(arr, item => item.name.length > 4));
  
  // miSome: Verificar si hay algún objeto con la edad exacta de 30
  console.log(miSome(arr, item => item.age === 30));
  
  // miMap: Crear un nuevo array con las edades de cada objeto
  console.log(miMap(arr, item => item.age));
  
  // miReduce: Calcular la edad promedio
  console.log(miReduce(arr, (acc, item) => acc + item.age, 0) / miLength(arr));
  
  // miSort: Ordenar el array por edad de forma descendente
  console.log(miSort(arr, (a, b) => b.age - a.age));
  // Encontrar el índice del primer objeto donde la edad es mayor que 28
console.log(miFindIndex(arr, item => item.age > 28)); // Output: 0
  