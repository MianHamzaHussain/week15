const ele = (id) => {
  return document.getElementById(id);
};
const Round = () => {
  const value = ele("rond").value;
  if (value !== "" && Number(value)) {
    const No = Number(value);

    ele("rresult").innerText = No.toFixed(0);
    ele("rond").value = "";
  } else {
    alert("Enter a number");
  }
};
const Ceil = () => {
  const value = ele("cil").value;
  if (value !== "" && Number(value)) {
    const No = value.split(".");

    ele("cresult").innerText = Number(No[0]) + 1;
    ele("cil").value = "";
  } else {
    alert("Enter a number");
  }
};
const Floor = () => {
  const value = ele("flor").value;
  if (value !== "" && Number(value)) {
    const No = value.split(".");

    ele("fresult").innerText = Number(No[0]);
    ele("flor").value = "";
  } else {
    alert("Enter a number");
  }
};
const Naturual = () => {
  const value = ele("nl").value;
  if (value !== "" && Number(value)) {
    let arr = [];
    for (let i = 1; i <= value; i++) {
      arr.push(i);
    }
    ele("nresult").innerText = arr;
    ele("nl").value = "";
  } else {
    alert("Enter a number");
  }
};
const Naturual2 = () => {
  const value = ele("nl2").value;
  if (value !== "" && Number(value) && value > 1) {
    let arr = [];
    for (let i = value; i >= 1; i--) {
      arr.push(i);
    }
    ele("nresult2").innerText = arr;
    ele("nl2").value = "";
  } else {
    alert("Enter a number and number should greater than 1");
  }
};
const printch = () => {
  let arr = `A, B, C, D, E, F, G, H, I, J, K,L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.`.split(
    ","
  );
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += arr[i];
  }
  ele("chresult").innerText = str.toLowerCase();
};
const even = () => {
  let result = `<ul>`;
  for (let i = 1; i < 100; i++) {
    if (i % 2 === 0) {
      result += `<li> ${i} </li>`;
    }
  }
  result += `</ul>`;
  ele("eresult").innerHTML = result;
};
const odd = () => {
  let result = `<ul>`;
  for (let i = 2; i < 100; i++) {
    if (i % 2 !== 0) {
      result += `<li> ${i} </li>`;
    }
  }
  result += `</ul>`;
  ele("oresult").innerHTML = result;
};
