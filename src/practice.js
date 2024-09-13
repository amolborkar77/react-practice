//closure
function x() {
  for (var i = 1; i <= 5; i++) {
    function close(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    close(i);
  }

  console.log("Namaste JavaScript!");
}

//Convert first & last letter of word of string into capital
const stringCapitalize1 = (str) => {
  let result = "";
  str.split(" ").forEach((el) => {
    const strArr = el.split("");

    strArr[0] = strArr[0].toUpperCase();
    strArr[strArr.length - 1] = strArr[strArr.length - 1].toUpperCase();

    result = result + strArr.join("") + " ";
  });
  return res;
};

const stringCapitalize = (str) => {
  const data = str.split(" ");

  data.map((word, index) => {
    const wordStr = word.split("");

    wordStr[0] = wordStr[0].toUpperCase();
    wordStr[wordStr.length - 1] = wordStr[wordStr.length - 1].toUpperCase();

    data[index] = wordStr.join("");
  });

  return data.join(" ");
};

const inputString = "india is my country";
const result = stringCapitalize(inputString);
console.log(result);

//Reverse string

const str = "encora inc";

const reverseString = str.split("").reduce((acc, char) => char + acc, "");
console.log(reverseString);

const reverseString1 = str.split("").reverse().join("");
console.log(reverseString1);

const reverseString2 = [...str].reverse().join("");
console.log(reverseString2);

let revString = "";

const reverseString3 = () => {
  for (let i = str.length - 1; i >= 0; i--) {
    revString = revString + str[i];
  }
  console.log(revString);
};

reverseString3();

//find occurence of an element in array
const findOccurence = () => {
  const ocurrences = {};
  for (const el of arr) {
    if (ocurrences[el]) {
      ocurrences[el] = ocurrences[el] + 1;
    } else {
      ocurrences[el] = 1;
    }
  }
  return ocurrences;
};
console.log("occurences", findOccurence());

//String are anagram or not --> considering string length same o.w add cond at top
function isAnagram(s, t) {
  const charFreq = {};
  for (const char of s) {
    charFreq[char] = (charFreq[char] || 0) + 1;
  }

  for (const char of t) {
    if (!charFreq[char]) {
      return false;
    }

    charFreq[char]--;
  }

  return true;
}

//remove duplicate element from an array
let arr1 = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  const result = arr.filter((el, index) => arr.indexOf(el) === index);
  return result;
}
console.log(removeDuplicates(arr1));

const removeDuplicate1 = () => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === i) {
      res.push(arr[i]);
    }
  }
  return res;
};
console.log(removeDuplicate());

console.log(
  "rem dup",
  arr.filter((el, index) => arr.indexOf(el) === index)
);

//example 3
const removeDuplicate = () => {
  const count = {};
  const res = [];
  for (const el of arr) {
    if (count[el]) {
      count[el] = count[el] + 1;
    } else {
      count[el] = 1;
      res.push(el);
    }
  }
  return res;
};
console.log("removing duplicate", removeDuplicate());

//sorting
const sorting = () => {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(sorting());

// 5! = 5 * 4 * 3 * 2 * 1
function calculateFact(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * calculateFact(n - 1);
}

console.log(calculateFact(5));

//fibonacci series - 0 1 1 2 3 5 8 13 21 34

function printFibonacci(num) {
  let first = 0;
  let second = 1;
  console.log(first);
  console.log(second);

  for (i = 2; i < num; i++) {
    let temp = second;
    second = first + second;
    first = temp;

    console.log(second);
  }
}

function recursiveFibo(num, first = 0, second = 1) {
  if (num <= 0) {
    return;
  }

  if (first === 0) {
    console.log(first);
    console.log(second);
  }

  console.log(first + second);
  recursiveFibo(num - 2, second, first + second);
}

//Higher order function
const arr = [2, 4, 3, 5];

const area = function (radius) {
  return Math.PI * radius * radius;
};

Array.prototype.calculate = function (logic) {
  const res = [];
  for (i = 0; i < this.length; i++) {
    res.push(logic(this[i]));
  }
  return res;
};

console.log(arr.map(area));
console.log(arr.calculate(area));

//polyfill for filter
Array.prototype.myFilter = function () {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    const val = logic(this[i]);
    val && res.push(val);
  }
  return res;
};

const logic = (el) => {
  if (el > 4) {
    return el;
  }
};

const res = arr.myFilter(logic);

console.log(res);

//polyfill for reduce
Array.prototype.myReduce = function (logic, initialValue) {
  var accu = initialValue;
  for (i = 0; i < this.length; i++) {
    accu = logic(accu, this[i]);
  }
  return accu;
};

console.log(
  arr.myReduce((acc, curr) => {
    acc = acc + curr;
    return acc;
  }, 0)
);

//find max from array
const max = (arr) => {
  let max = arr[0];

  //   for (i = 0; i < arr.length; i++) {
  //     arr[i] > max && (max = arr[i]);
  // arr[i] > max ? (max = arr[i]) : (max = max);
  // if (arr[i] > max) {
  //   max = arr[i];
  // }
  //   }
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    if (arr[start] > arr[end] && arr[start] > max) {
      max = arr[start];
    } else if (arr[end] > max) {
      max = arr[end];
    }
    start++;
    end--;
  }
  return max;
};

console.log(max(arr));

//flatten array
// We can use here map as well and just can push values in array
const flattenArray = (arr) => {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
  }, []);
};

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // Output: [1, 2, 3, 4, 5, 6]

//Promises and promise chaining
const cart = ["pant", "kurta", "shirt"];

const createOrder = (cart) => {
  const promise = new Promise((resolve, reject) => {
    //create order
    !validateOrder(cart) && reject(new Error("Order is not valid"));

    const orderId = 1234;
    orderId && setTimeout(() => resolve(orderId), 5000);
  });
  return promise;
};

const proceedToPayment = (orderId) => {
  return new Promise((resolve, reject) => resolve("Payment successful"));
};

const validateOrder = (cart) => true;

const promise = createOrder(cart);
console.log(promise);

promise
  .then((orderId) => {
    console.log(orderId);
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => console.log(paymentInfo))
  .catch((err) => console.log(err.message));

// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.
// {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
// {"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
// {"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
function myLanguages(results) {
  const res = [];
  const keys = Object.keys(results);

  for (const key of keys) {
    if (results[key] >= 60) {
      res.push(key);
    }
  }
  return res.sort((a, b) => {
    return results[b] - results[a];
  });
}
//we can do above problem in just one line
function myLanguages(results) {
  return Object.keys(results)
    .filter((key) => results[key] >= 60)
    .sort((a, b) => results[b] - results[a]);
}

//closure
function add(arg) {
  return function addNum(num) {
    return num != undefined ? add(arg + num) : arg;
  };
}

add(2)(4)(6)();
