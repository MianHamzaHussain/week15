const ele = (id) => {
  return document.getElementById(id);
};
const Read = () => {
  const value = ele("re").value;
  if (value > 0) {
    const array = valuetoarray(value);
    ele("rresult").innerText = "Array = " + array.toString();
    ele("re").value = "";
  } else {
    alert("no of elements should be greater than zero");
  }
};
const valuetoarray = (value, type) => {
  const array = [value];
  for (let i = 0; i < value; i++) {
    const e = i + 1;
    let v;
    if (type) {
      v = prompt(`Enter ${type} value for element ${e}`);
    } else {
      v = prompt(`Enter  value for element ${e}`);
    }
    array[i] = v;
  }
  return array;
};
const neg = () => {
  const element = ele("nue").value;
  if (element > 0) {
    const array = valuetoarray(element, "number");
    let result = [];
    array.map((v, i) => {
      if (Number(v)) {
        if (v < 0) {
          result.push(v);
        }
      }
    });
    let neg;
    if (result.length > 0) {
      neg = `Negative values are ${result}`;
    } else {
      neg = " no negative value in array";
    }
    ele("nuresult").innerText = `input array = ${array} ${neg}`;
    ele("nue").value = "";
  } else {
    alert("no of elements should be greater than zero");
  }
};
const su = () => {
  const element = ele("sue").value;
  if (element > 0) {
    const array = valuetoarray(element, "number");
    let result = 0;
    array.map((v, i) => {
      if (Number(v)) {
        result += Number(v);
      }
    });

    ele("suresult").innerText = `input array = ${array} sum= ${result}`;
    ele("sue").value = "";
  } else {
    alert("no of elements should be greater than zero");
  }
};

const mm = () => {
  const element = ele("mue").value;
  if (element > 1) {
    const array = valuetoarray(element, "number");
    let numbers = [];
    array.map((v, i) => {
      if (Number(v)) {
        numbers.push(v);
      }
    });
    if (numbers.length > 1) {
      let max = numbers[0];
      let min = numbers[0];
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
          max = numbers[i];
        }
        if (numbers[i] < min) {
          min = numbers[i];
        }
      }
      ele("muresult").innerText = `Maximum no = ${max} minimum no= ${min}`;
      ele("mue").value = "";
    } else {
      alert("inputed arrray should have atleast two number elements try again");
    }
  } else {
    alert("no of elements should be greater than one");
  }
};
const sum = () => {
  const element = ele("sue").value;
  if (element > 0) {
    const array = valuetoarray(element, "number");
    let result = 0;
    array.map((v, i) => {
      if (Number(v)) {
        result += Number(v);
      }
    });

    ele("suresult").innerText = `input array = ${array} sum= ${result}`;
    ele("sue").value = "";
  } else {
    alert("no of elements should be greater than zero");
  }
};

const second = () => {
  const element = ele("sl").value;
  if (element > 0) {
    const array = valuetoarray(element, "number");
    let numbers = [];
    array.map((v, i) => {
      if (Number(v)) {
        numbers.push(v);
      }
    });
    if (numbers.length > 1) {
      let max;
      let second;
      if (numbers[0] > numbers[1]) {
        max = numbers[0];
        second = numbers[1];
      } else if (numbers[1] > numbers[0]) {
        max = numbers[1];
        second = numbers[0];
      } else {
        max = numbers[0];
        second = numbers[1];
      }
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
          let temp = max;
          max = numbers[i];
          second = temp;
        }
      }
      ele(
        "slresult"
      ).innerText = `Array = ${numbers}  second largest = ${second}`;
      ele("sl").value = "";
    } else {
      alert("inputed arrray should have atleast two number elements try again");
    }
  } else {
    alert("no of elements should be greater than zero");
  }
};
const ceo = () => {
  const element = ele("eo").value;
  if (element > 0) {
    const array = valuetoarray(element, "number");
    let numbers = [];
    array.map((v, i) => {
      if (Number(v)) {
        numbers.push(v);
      }
    });
    if (numbers.length > 0) {
      let even = 0;
      let odd = 0;

      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
          even++;
        } else {
          odd++;
        }
      }

      ele("eoresult").innerText = `No of evens = ${even} No of odds = ${odd}`;
      ele("eo").value = "";
    } else {
      alert("inputed arrray should have atleast one number elements try again");
    }
  } else {
    alert("no of elements should be greater than zero");
  }
};
const cne = () => {
  const element = ele("cn").value;
  if (element > 0) {
    const array = valuetoarray(element, "number");
    let numbers = [];
    array.map((v, i) => {
      if (Number(v)) {
        numbers.push(v);
      }
    });
    if (numbers.length > 0) {
      let cne = 0;

      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
          cne++;
        }
      }

      ele("cnresult").innerText = `No of negative numbers = ${cne}`;
      ele("cn").value = "";
    } else {
      alert("inputed arrray should have atleast one number elements try again");
    }
  } else {
    alert("no of elements should be greater than zero");
  }
};
const copya = () => {
  const element = ele("a1").value;
  const element2 = ele("a2").value;
  if (element > 0 && element2 > 0) {
    const array1 = valuetoarray(element);
    const array2 = valuetoarray(element2);
    let bfc = `before copy array1 = ${array1} arrayw2 = ${array2}`;

    let cne = 0;

    for (let i = 0; i < array1.length; i++) {
      array2.push(array1[i]);
    }
    let afc = `after copy array1 = 
    ${array1} arrayw2 = ${array2}`;

    ele("aresult").innerText = bfc + afc;
    ele("a1").value = "";
    ele("a2").value = "";
  } else {
    alert("both array no of elements should be greater than zero");
  }
};
let array = ["Hamza", "Ali", 1, 2, 3, 4];
const adde = () => {
  const value = ele("addele").value;
  if (value == "") {
    alert("Enter a value first");
  } else {
    array.push(value);
    araryvalues();
  }
};
const reme = () => {
  const value = ele("eindex").value;
  if (value !== "") {
    if (value < array.length && value >= 0) {
      array.splice(Number(value), 1);
      araryvalues();
    } else {
      alert("invalid index");
    }
  } else {
    alert("index is required");
  }
};
const araryvalues = () => {
  ele("addresult").innerText = `Array = ${array}`;
};
araryvalues();
