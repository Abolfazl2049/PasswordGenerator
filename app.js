let UinputTest;
let LinputTest;
let SinputTest;
let NinputTest;
let Rinput;
let CL;
const submitButton = document.getElementById("rDeal");
setInterval(inputcheck);
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.value;
setInterval(strengthChecker);
slider.oninput = function () {
  output.innerText = this.value;
};
function makeU(str) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charactersLength = characters.length;
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return (str = str + result);
}
function makeS(str) {
  let result = "";
  const characters = "/[`!@#$%^&*()_+-=[]{};':\\|,.<>/?~]/";
  const charactersLength = characters.length;
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return (str = str + result);
}
function makeL(str) {
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return (str = str + result);
}
function makeN(str) {
  let result = "";
  const characters = "1234567890";
  const charactersLength = characters.length;
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
  return (str = str + result);
}

function inputcheck() {
  let input = document.getElementById("myInput").value;
  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  let characterL = document.getElementById("demo").innerText;
  return (
    (UinputTest = /[A-Z]/.test(input)),
    (LinputTest = /[a-z]/.test(input)),
    (NinputTest = /\d/.test(input)),
    (SinputTest = format.test(input)),
    (Rinput = document.getElementById("myInput").value),
    (CL = Number(characterL))
  );
}
function myfunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}
function strengthChecker() {
  if (
    Rinput.length >= 8 &&
    UinputTest === true &&
    LinputTest === true &&
    NinputTest === true &&
    SinputTest === true
  ) {
    document.getElementById("imgrate1").src = "img/yellow.svg";
    document.getElementById("imgrate2").src = "img/yellow.svg";
    document.getElementById("imgrate3").src = "img/yellow.svg";
    document.getElementById("imgrate4").src = "img/yellow.svg";
    document.getElementById("strengthP").innerText = "STRONG";
  } else if (
    (Rinput.length >= 8 &&
      UinputTest === true &&
      LinputTest === true &&
      NinputTest === true) ||
    (UinputTest === true && LinputTest === true && NinputTest === true) ||
    (Rinput.length >= 8 && UinputTest === true && LinputTest === true) ||
    (Rinput.length >= 8 && UinputTest === true && NinputTest === true)
  ) {
    document.getElementById("imgrate1").src = "img/yellow.svg";
    document.getElementById("imgrate2").src = "img/yellow.svg";
    document.getElementById("imgrate3").src = "img/yellow.svg";
    document.getElementById("imgrate4").src =
      "img/crop_9_16_FILL0_wght400_GRAD0_opsz24.svg";
    document.getElementById("strengthP").innerText = "MEDIUM";
  } else if (
    (LinputTest === true && UinputTest === true) ||
    (UinputTest === true && NinputTest === true) ||
    (LinputTest === true && NinputTest === true) ||
    (Rinput.length >= 8 && UinputTest === true) ||
    (Rinput.length >= 8 && LinputTest === true) ||
    (Rinput.length >= 8 && NinputTest === true)
  ) {
    document.getElementById("imgrate1").src = "img/yellow.svg";
    document.getElementById("imgrate2").src = "img/yellow.svg";
    document.getElementById("imgrate3").src =
      "img/crop_9_16_FILL0_wght400_GRAD0_opsz24.svg";
    document.getElementById("imgrate4").src =
      "img/crop_9_16_FILL0_wght400_GRAD0_opsz24.svg";
    document.getElementById("strengthP").innerText = "WEAK";
  } else if (
    UinputTest === true ||
    LinputTest === true ||
    NinputTest === true
  ) {
    document.getElementById("imgrate1").src = "img/yellow.svg";
    document.getElementById("strengthP").innerText = "VERY WEAK";
    document.getElementById("imgrate2").src =
      "img/crop_9_16_FILL0_wght400_GRAD0_opsz24.svg";
    document.getElementById("imgrate3").src =
      "img/crop_9_16_FILL0_wght400_GRAD0_opsz24.svg";
    document.getElementById("imgrate4").src =
      "img/crop_9_16_FILL0_wght400_GRAD0_opsz24.svg";
  } else {
    document.getElementById("strengthP").innerText = "";
    document.getElementById("imgrate1").src =
      "img/crop_9_16_FILL0_wght400_GRAD0_opsz24.svg";
    document.getElementById("imgrate2").src =
      "img/crop_9_16_FILL0_wght400_GRAD0_opsz24.svg";
    document.getElementById("imgrate3").src =
      "img/crop_9_16_FILL0_wght400_GRAD0_opsz24.svg";
    document.getElementById("imgrate4").src =
      "img/crop_9_16_FILL0_wght400_GRAD0_opsz24.svg";
  }
}
submitButton.addEventListener("click", function () {
  document.getElementById("myInput").value = "";
  if (CL < 4) {
    document.getElementById("Error").innerText =
      "*Password Length is too short";
  } else {
    for (let i = 0; i < CL; ) {
      if (document.getElementById("Uppercase").checked && CL >= 4) {
        document.getElementById("Error").innerText = "";
        let result = "";
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const charactersLength = characters.length;
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        let value = document.getElementById("myInput").value;
        document.getElementById("myInput").value = value + result;
        i++;
      }
      if (document.getElementById("Lowercase").checked && CL >= 4) {
        document.getElementById("Error").innerText = "";
        let result = "";
        const characters = "abcdefghijklmnopqrstuvwxyz";
        const charactersLength = characters.length;
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        let value = document.getElementById("myInput").value;
        document.getElementById("myInput").value = value + result;
        i++;
      }
      if (document.getElementById("Numbers").checked && CL >= 4) {
        document.getElementById("Error").innerText = "";
        let result = "";
        const characters = "1234567890";
        const charactersLength = characters.length;
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        let value = document.getElementById("myInput").value;
        document.getElementById("myInput").value = value + result;
        i++;
      }
      if (document.getElementById("Symbols").checked && CL >= 4) {
        document.getElementById("Error").innerText = "";
        let result = "";
        const characters = "/[`!@#$%^&*()_+-=[]{};':\\|,.<>/?~]/";
        const charactersLength = characters.length;
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        let value = document.getElementById("myInput").value;
        document.getElementById("myInput").value = value + result;
        i++;
      }
      if (
        document.getElementById("Symbols").checked === false &&
        document.getElementById("Numbers").checked === false &&
        document.getElementById("Lowercase").checked === false &&
        document.getElementById("Uppercase").checked === false
      ) {
        document.getElementById("Error").innerText =
          "You should at least check one option";
        i = CL;
      }
    }
  }
});
