function handleclick(event) {
  console.log("hello world");
}
function handleclick2(event) {
  alert("welcome");
}
document.addEventListener("DOMContentLoaded", function () {
    let date = document.getElementById("date")
    date.addEventListener("click",
        function (params) {
            this.innerHTML = Date()
        })
  let button = document.getElementById("button");
  button.addEventListener("click", handleclick);
  button.addEventListener("mouseover", handleclick2);
  const element = document.getElementById("div");
  element.addEventListener("mouseover", function () {
    element.style.backgroundColor = "blue";
    element.style.borderRadius = "50px";
});
element.addEventListener("mouseout", function (params) {
      element.style.backgroundColor = "black";
      element.style.borderRadius = "50%";
    })
});
