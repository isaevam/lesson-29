"use strict";
const ul = document.getElementById("content");
const onClick = (event) => {
  if (event.ctrlKey) {
    ctrlSelect(event.target);
  } else {
    if (event.shiftKey) {
      shiftSelect(event.target);
    } else {
      select(event.target);
    }
  }
};
ul.addEventListener("click", onClick);

const ctrlSelect = (li) => {
  li.classList.toggle("selected");
};

const shiftSelect = (li) => {
  let selected = ul.querySelector(".selected");
  const indexSelected = [...ul.children].indexOf(selected);
  const indexTarget = [...ul.children].indexOf(li);
  if (indexTarget > indexSelected) {
    for (let i = indexSelected; i < indexTarget; i++) {
      selected.nextElementSibling.classList.add("selected");
      selected = selected.nextElementSibling;
      console.log(selected.nextSibling);
    }
  }
  if (indexTarget < indexSelected) {
    console.log(li.nextElementSibling);
    for (let i = indexSelected; i > indexTarget; i--) {
      selected.previousElementSibling.classList.add("selected");
      selected = selected.previousElementSibling;
    }
  }
};
const selectedSelect = (li) => {
  li.classList.remove("selected");
};
const select = (li) => {
  const selected = ul.querySelectorAll(".selected");
  console.log(selected);
  //if(selected.length===1||selected[0]===li.selected){li.classList.toggle('selected');}else{
  if (li.className === "selected" && selected.length === 1) {
    li.classList.remove("selected");
  } else {
    for (let elem of selected) {
      elem.classList.remove("selected");
    }
    li.classList.add("selected");
  }
};
