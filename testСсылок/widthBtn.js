let widthBtnRange = document.querySelector("#width-btn-range");
let widthBtnInput = document.querySelector("#width-btn-input");

let heightBtnRange = document.querySelector("#height-btn-range");
let heightBtnInput = document.querySelector("#height-btn-input");

let bradiusBtnRange = document.querySelector("#bradius-btn-range");
let bradiusBtnInput = document.querySelector("#bradius-btn-input");

let colorBtnInput = document.querySelector("#color-btn-input");

let btn = document.querySelector(".btn");
let outCode = document.querySelector(".out-code");

btnParamWidth();
btnParamHeight();
btnParamRadius();
btnParamColor();

widthBtnRange.addEventListener("input", btnParamWidth);
widthBtnInput.addEventListener("change", btnParamWidth);

heightBtnRange.addEventListener("input", btnParamHeight);
heightBtnInput.addEventListener("change", btnParamHeight);

bradiusBtnRange.addEventListener("input", btnParamRadius);
bradiusBtnInput.addEventListener("change", btnParamRadius);

colorBtnInput.addEventListener("change", btnParamColor);

function btnParamWidth() {
  widthBtnInput.value = this.value || widthBtnRange.value;
  widthBtnRange.value = this.value || widthBtnInput.value;
  btn.style.width = widthBtnRange.value + "px";
  outCode.innerText = outText(widthBtnInput, heightBtnRange, bradiusBtnRange, colorBtnInput);
}
function btnParamHeight() {
  heightBtnInput.value = this.value || heightBtnRange.value;
  heightBtnRange.value = this.value || heightBtnInput.value;
  btn.style.height = heightBtnRange.value + "px";
  btn.style.lineHeight = heightBtnRange.value + "px";
  outCode.innerText = outText(widthBtnInput, heightBtnRange, bradiusBtnRange, colorBtnInput);
}

function btnParamRadius() {
  bradiusBtnInput.value = this.value || bradiusBtnRange.value;
  bradiusBtnRange.value = this.value || bradiusBtnInput.value;
  btn.style.borderRadius = bradiusBtnRange.value + "px";
  outCode.innerText = outText(widthBtnInput, heightBtnRange, bradiusBtnRange, colorBtnInput
  );
}
function btnParamColor() {
  btn.style.background = "#" + colorBtnInput.value;

  outCode.innerText = outText(widthBtnInput, heightBtnRange, bradiusBtnRange, colorBtnInput
  );
}

function outText(widthBtnRange, heightBtnRange, bradiusBtnRange, colorBtnInput) {
  return (
    "<!-- button_" +
    widthBtnRange.value +
    ' ( -->\n <tr>\n <td align="center" height="' +
    heightBtnRange.value +
    '" style="height: ' +
    heightBtnRange.value +
    'px; line-height: 0; font-size: 0;">\n <table cellpadding="0" cellspacing="0" border="0" width="' +
    widthBtnRange.value +
    '" style="width:' +
    widthBtnRange.value +
    "px; border-spacing: 0; text-align: center; height: " +
    heightBtnRange.value +
    'px;">\n<tr>\n<td title="Стать самозанятым" width="' +
    widthBtnRange.value +
    '" style="background-color: #' +
    colorBtnInput.value +
    "; height: " +
    heightBtnRange.value +
    "px; padding: 0; text-align: center; vertical-align: middle; width: " +
    widthBtnRange.value +
    "px; border-radius: " +
    bradiusBtnRange.value +
    'px; ">\n<a class="link" target="_blank" href="1" style="color: #ffffff; display: block; font-family: Arial, Helvetica, sans-serif; font-size: 17px; line-height: ' +
    heightBtnRange.value +
    'px; font-weight: 400; text-decoration: none !important; ">Стать самозанятым</a>\n</td>\n</tr>\n</table>\n</td>\n</tr>\n<!-- button_' +
    widthBtnRange.value +
    ") -->"
  );
}
