const secondhand = document.querySelector(".second");
const hourhand = document.querySelector(".hour");
const minutehand = document.querySelector(".minute");

function setDate() {
  const currentDate = new Date();

  const second = currentDate.getSeconds();
  const minute = currentDate.getMinutes();
  const hour = currentDate.getHours();

  const seconddeg = second * 6;
  const minutedeg = minute * 6;
  const hourdeg = hour * 30;

  secondhand.style.transform = `rotate(${seconddeg}deg)`;
  hourhand.style.transform = `rotate(${hourdeg}deg)`;
  minutehand.style.transform = `rotate(${minutedeg}deg)`;
}

setInterval(setDate, 1000);
