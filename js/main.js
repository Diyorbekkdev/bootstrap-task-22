const emailInput = document.getElementById("email-input");
const messageIcon = document.querySelector(".message-icon");

emailInput.addEventListener("input", () => {
  if (emailInput.value.length > 0) {
    messageIcon.style.display = "none";
  } else {
    messageIcon.style.display = "block";
  }
});



// const loading = document.getElementById("loading");
// window.addEventListener("load", () => {
//   loading.classList.add('loading-none');
// });
// // or
const loading = document.getElementById("loading");
setTimeout(() => {
  loading.classList.add('loading-none');
}, 4000);

// window.onload = function() {
//   var loader = document.getElementById("loading");
//   loader.style.display = "none";
// };