const wrapper = document.querySelector(".wrapper"),
  qrInput = wrapper.querySelector(".form input"),
  generateBtn = wrapper.querySelector(".form button"),
  qrImg = wrapper.querySelector(".qr-code img");
let preValue;
generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  if (!qrValue || preValue === qrValue) return;
  preValue = qrValue;
  generateBtn.innerText = "Generating QR Code...";
  let upiPay = `upi://pay?pa=amzn0014337857@apl&am=${qrValue}&pn=SHAKEER%20MOHD`;
  qrImg.src = `https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=250x250&chl=${encodeURIComponent(upiPay)}`;
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove("active");
    preValue = "";
  }
});
