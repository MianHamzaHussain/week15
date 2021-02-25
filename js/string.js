const ele = (id) => {
  return document.getElementById(id);
};
const cls = () => {
  const value = ele("ls").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let result;
    result = value.length;
    ele("lsresult").innerText = result;
    ele("ls").value = "";
  }
};

const copy = () => {
  let value1 = ele("s1").value;
  let value2 = ele("s2").value;
  //   alert(value);
  if (value1 == "" || value2 == "") {
    alert("Please enter both string values");
  } else {
    const bfc = `before copy string 1 = ${value1}
       and string 2 =${value2} `;
    value2 += value1;
    const ac = `after copy string 1 = ${value1}
       and string 2 =${value2} `;

    ele("sresult").innerText = bfc + ac;
    ele("s1").value = "";
    ele("s2").value = "";
  }
};
const conca = () => {
  let value1 = ele("s3").value;
  let value2 = ele("s4").value;

  if (value1 == "" || value2 == "") {
    alert("Please enter both string values");
  } else {
    ele("sresult2").innerText = `${value1} ${value2}`;
    ele("s3").value = "";
    ele("s4").value = "";
  }
};
const compare = () => {
  const value1 = ele("s5").value;
  const value2 = ele("s6").value;
  //   alert(value);
  if (value1 == "" || value2 == "") {
    alert("Please enter both string values");
  } else {
    const com = (v1, v2) => {
      return v1.localeCompare(v2);
    };
    let result;
    if (com(value1, value2)) {
      result = "Both strings are not  equal";
    } else {
      result = "Both strings are equal";
    }
    // alert(result);
    ele("comresult").innerText = ` string 1 = ${value1}
       and string 2 =${value2} and result is ${result}
       `;
    ele("s1").value = "";
    ele("s2").value = "";
  }
};
const lc = () => {
  const value = ele("li").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let result;
    result = value.toLowerCase();
    ele("lcresult").innerText = result;
    ele("li").value = "";
  }
};
const uc = () => {
  const value = ele("ui").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let result;
    result = value.toUpperCase();
    ele("ucresult").innerText = result;
    ele("ui").value = "";
  }
};
const tc = () => {
  const value = ele("ti").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let result = "";
    for (let i = 0; i < value.length; i++) {
      if (value[i] === value[i].toLowerCase()) {
        // console.log(value[i]);
        result += value[i].toUpperCase();
      } else if (value[i] === value[i].toUpperCase()) {
        result += value[i].toLowerCase();

        // console.log(value[i]);
      } else {
        result += value[i];
      }
    }

    ele("tcresult").innerText = result;
    ele("ti").value = "";
  }
};
const stringcount = () => {
  const value = ele("sc").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let d = 0,
      a = 0,
      c = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i].match(/[a-z]/)) {
        a++;
      } else if (value[i].match(/[0-9]/)) {
        d++;
      } else {
        c++;
      }
    }

    ele(
      "scresult"
    ).innerText = `digits= ${d} alphabets= ${a} special character =${c}`;
  }
};
const stringcount2 = () => {
  const value = ele("sc2").value;
  if (value == "") {
    alert("Enter a text  ");
  } else if (value.match(/[a-z]/gi)) {
    let v = 0,
      c = 0;
    for (let i = 0; i < value.length; i++) {
      if (value[i].match(/[aeiou]/)) {
        v++;
      } else if (value[i].match(/[a-z]/)) {
        c++;
      }
    }

    ele("scresult2").innerText = `vowels = ${v} consents = ${c}`;
  } else {
    alert("enter characters only");
  }
  ele("sc2").value = "";
};
const stringcount3 = () => {
  let value = ele("sc3").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let result;
    value = value.replace(/(^\s*)|(\s*$)/gi, "");
    value = value.replace(/[ ]{2,}/gi, " ");
    value = value.replace(/\n /, "\n");
    result = value.split(" ").length;

    ele("scresult3").innerText = `no of words = ${result}`;
  }
  ele("sc3").value == "";
};

const reverse = () => {
  const value = ele("rs").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    const result = rever(value);
    ele("rsresult").innerText = result;
    ele("rs").value = "";
  }
};
const palindrome = () => {
  const value = ele("ps").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let result = "";
    if (value.toLowerCase() === rever(value).toLowerCase()) {
      result = "string is palindrome";
    } else {
      result = "string is not palindrome";
    }
    ele("psresult").innerText = result;
    ele("ps").value = "";
  }
};
const reversewords = () => {
  let value = ele("rw").value;
  if (value == "") {
    alert("Enter a text  ");
  } else {
    let result;
    value = value.replace(/(^\s*)|(\s*$)/gi, "");
    value = value.replace(/[ ]{2,}/gi, " ");
    value = value.replace(/\n /, "\n");
    words = value.split(" ");
    result = rever(words);

    ele("rwresult").innerText = result;
  }
  ele("rw").value == "";
};

const fos = () => {
  let value = ele("sf").value.toLowerCase();
  let svalue = ele("foc").value.toLowerCase();
  if (value == "" || svalue == "") {
    alert("Enter both values  ");
  } else {
    let result;
    for (let i = 0; i < value.length; i++) {
      if (value[i] == svalue) {
        result = i;
        break;
      }
    }
    ele(
      "foresult"
    ).innerText = `First occurance of character is at ${result} index`;
  }
  ele("sf").value == "";
  ele("foc").value == "";
};
const los = () => {
  let value = ele("lf").value.toLowerCase();
  let svalue = ele("loc").value.toLowerCase();
  if (value == "" || svalue == "") {
    alert("Enter both values  ");
  } else {
    let result;
    for (let i = 0; i < value.length; i++) {
      if (value[i] == svalue) {
        result = i;
      }
    }
    ele(
      "loresult"
    ).innerText = `last occurance of character is at ${result} index`;
  }
  ele("lf").value == "";
  ele("loc").value == "";
};
const rever = (v) => {
  let rstr = "";

  for (let i = v.length - 1; i >= 0; i--) {
    rstr += v[i];
    // console.log(v[i]);
  }
  // console.log(rstr);
  return rstr;
};
