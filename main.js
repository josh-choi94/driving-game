var car = document.querySelector("img");

window.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    car.className = "car direction west";
  } else if (event.key === "ArrowRight") {
    car.className = "car direction east";
  } else if (event.key === "ArrowUp") {
    car.className = "car direction north";
  } else if (event.key === "ArrowDown") {
    car.className = "car direction south";
  }
});
