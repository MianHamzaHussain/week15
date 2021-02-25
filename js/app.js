const ele = (id) => {
  return document.getElementById(id);
};
const maxi = () => {
  const v1 = ele("v1");
  const v2 = ele("v2");
  let result;
  const in1 = v1.value;
  const in2 = v2.value;
  //   alert(value);
  if (in1 == "" || in2 == "") {
    alert("Please enter both values");
  } else {
    if (in1 > in2) {
      result = `${in1} is greater than  ${in2}`;
    } else if (in2 > in1) {
      result = `${in2} is greater than  ${in1}`;
    } else {
      result = " Both numbers are equal";
    }
    document.getElementById("maxresult").innerText = result;
    v1.value = "";
    v2.value = "";
  }
};
const maxi2 = () => {
  const v1 = ele("n1");
  const v2 = ele("n2");
  const v3 = ele("n3");
  let result;
  const in1 = v1.value;
  const in2 = v2.value;
  const in3 = v3.value;
  //   alert(value);
  if (in1 == "" || in2 == "" || in3 == "") {
    alert("Please enter all three numbers");
  } else {
    // console.log(in1, in2, in3);
    let max = in1;
    if (in2 > max) {
      max = in2;
    }
    if (in3 > max) {
      max = in3;
    }
    ele("maxresult2").innerText = `Maximum no is ${max}`;
    v1.value = "";
    v2.value = "";
    v3.value = "";
  }
};
const chck = () => {
  const value = ele("nu1").value;
  //   alert(value);
  if (value == "") {
    alert("Please enter value ");
  } else {
    let result;
    if (value > 0) {
      result = "Num is positive";
    } else if (value < 0) {
      result = " Num is negative";
    } else {
      result = " Num is zero";
    }
    ele("chresult").innerText = result;
    ele("nu1").value = "";
    return result;
  }
};
const leap = () => {
  const value = document.getElementById("year").value;
  if (value == "") {
    alert("Enter year for checking leap year");
  } else {
    const result = checkleap(value);
    document.getElementById("leapresult").innerText = `${value} is ${result}`;
    document.getElementById("year").value = "";
  }
};
const check = () => {
  const value = Number(ele("no1").value);
  //   alert(value);
  if (value == "") {
    alert("Please enter value ");
  } else {
    let result;
    if (value % 5 === 0 && value % 11 === 0) {
      result = `${value} is divisible by 5 and 11`;
    } else {
      result = "Num is not divisible by 5 and 11";
    }
    ele("chresult2").innerText = result;
    ele("no1").value = "";
    return result;
  }
};
const eo = () => {
  const value = ele("nu2").value;
  if (value == "") {
    alert("Enter number ");
  } else {
    let result;
    if (value % 2 === 0) {
      result = `${value} is even`;
    } else {
      result = `${value} is odd`;
    }
    ele("eoresult").innerText = result;
    ele("nu2").value = "";
    return result;
  }
};
const ca = () => {
  const value = ele("c1").value;
  if (value == "") {
    alert("Enter a charcter ");
  } else {
    let result;
    // console.log(value.match(/[a-z]/gi));
    if (value.match(/[a-z]/i)) {
      result = `${value} is alphabet`;
    } else {
      result = `${value} is not alphabet`;
    }
    ele("aresult").innerText = result;
    ele("c1").value = "";
    return result;
  }
};

const ca2 = () => {
  const value = ele("c2").value;
  if (value == "") {
    alert("Enter a letter ");
  } else if (value.match(/[a-z]/i)) {
    let result;
    // console.log(value.match(/[a-z]/gi));
    // console.log(value.match(/[aeiou]/i));
    if (value.match(/[aeiou]/i)) {
      result = `${value} is vowel`;
    } else {
      result = `${value} is constant`;
    }
    ele("aresult2").innerText = result;
    ele("c2").value = "";
    return result;
  } else {
    alert("Enter a letter ");
  }
};
const cds = () => {
  const value = ele("c3").value;
  if (value == "") {
    alert("Enter a   character ");
  } else {
    let result;
    // console.log(value.match(/[a-z]/gi));
    if (value.match(/[a-z]/i)) {
      result = result = `${value} is alphaphet`;
    } else if (value.match(/[0-9]/i)) {
      result = result = `${value} is number`;
    } else {
      result = `${value} is special character`;
    }
    ele("cdsresult").innerText = result;
    ele("c3").value = "";
    return result;
  }
};
const checkleap = (v) => {
  if (v % 4 === 0) {
    return "leap year";
  } else {
    return "not a leap year";
  }
};
