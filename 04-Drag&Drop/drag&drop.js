let lists = document.getElementsByClassName("list");
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");

for (let list of lists) {
  list.addEventListener("dragstart", (event) => {
    let selected = event.target;

    // Right Box
    rightBox.addEventListener("dragover", (events) => {
      events.preventDefault();
    });
    rightBox.addEventListener("drop", () => {
      rightBox.appendChild(selected);
      selected = null;
    });

    // left Box
    leftBox.addEventListener("dragover", (events) => {
      events.preventDefault();
    });
    leftBox.addEventListener("drop", () => {
      leftBox.appendChild(selected);
      selected = null;
    });
  });
}
