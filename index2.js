"use strict";
addEventListener("click", (event) => {
  const div = document.createElement("div");
  div.className = "pointer";
  div.style.left = event.pageX - 4 + "px";
  div.style.top = event.pageY - 4 + "px";
  document.body.append(div);
});
