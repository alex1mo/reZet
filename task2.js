let arr = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5],
];

task2(arr);

function task2(arr = []) {
  if (!checkArr(arr)) return;

  let result = [];
  let l = arr[0].length - 2;

  for (let i = 0; i < l; i++) {
    let newArr = [];
    arr.forEach((e) => {
      newArr = newArr.concat(e.slice(i, i + 3));
    });

    newArr = newArr.sort((a, b) => a - b);
    result.push(
      newArr.every((e, i) => {
        return e == i + 1;
      })
    );
  }

  console.log(result);
  return result;
}

function checkArr(arr = []) {
  if (!Array.isArray(arr)) {
    console.log("не массив");
  } else if (arr.length != 3) {
    console.log("принимает массив из 3-х элементов");
  } else {
    if (
      arr.every((e, i, arr) => {
        if (arr[i + 1]) {
          return arr[i].length == arr[i + 1].length;
        } else if (e && e.length > 0) {
          return true;
        }
      })
    ) {
      if (
        arr.every((e) => {
          return e.every((e) => {
            return e > 0 && e < 10;
          });
        })
      ) {
        return true;
      } else {
        console.log("Данная матрица из целых чисел от 1 до 9");
      }
    } else {
      console.log(`разная длина массивов или пустой`);
    }
  }

  return false;
}
