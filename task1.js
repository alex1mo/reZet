let arr = [1, 3, 5, 4, 5, 7];
let res;

res = task1(arr);
console.log(res);

function task1(arr = []) {
  if (checkArr(arr) != true) return checkArr(arr) || "что то пошло не так";
  let newArr = [];
  for (let i = 0; i < arr.length - 2; i++) {
    let a = arr[i];
    let b = arr[i + 1];
    let c = arr[i + 2];
    if ((a > b && b < c) || (a < b && b > c)) {
      newArr.push(1);
    } else {
      newArr.push(0);
    }
  }
  return newArr;
}

function checkArr(arr = []) {
  // проверка на массив состоящий из более 2-х элементов и чисел
  if (!Array.isArray(arr)) {
    return "функция принимает массив";
  } else if (arr.length <= 2) {
    return "функция принимает массив из более двух элементов";
  } else {
    for (let i = 0; i < arr.length; i++) {
      let e = arr[i];
      let t = typeof e;
      if (t === "string") return "массив должен состоят только из чисел";
    }
  }
  return true;
}
