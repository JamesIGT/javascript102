"use strict";

const itemData = {
  item1: {
    name: 'Finalista 01',
    image: 'https://picsum.photos/seed/animal/250/200',
    photographer: 'John Doe',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    score: 42
  },
  item2: {
    name: 'Finalista 2',
    image: 'https://picsum.photos/seed/beach/250/200',
    photographer: 'Jane Smith',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    score: 84
  },
  item3: {
    name: 'Finalista 3',
    image: 'https://picsum.photos/seed/mountain/250/200',
    photographer: 'Alice Johnson',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    score: 36
  }
};

let currentKey = null;

const select = document.getElementById("items");
const img = document.getElementById("displayImage");
const photographer = document.getElementById("photographer");
const description = document.getElementById("description");
const score = document.getElementById("score");
const btnUp = document.getElementById("increaseScore");
const btnDown = document.getElementById("decreaseScore");

// Llenar el select al cargar
window.addEventListener("DOMContentLoaded", () => {
  Object.keys(itemData).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = itemData[key].name;
    select.appendChild(option);
  });
});

// Mostrar info del item seleccionado
select.addEventListener("change", () => {
  const key = select.value;
  if (key in itemData) {
    currentKey = key;
    const item = itemData[key];

    img.src = item.image;
    photographer.value = item.photographer;
    description.value = item.description;
    score.value = item.score;
  }
});

// Aumentar puntaje
btnUp.addEventListener("click", () => {
  if (currentKey) {
    itemData[currentKey].score++;
    score.value = itemData[currentKey].score;
  }
});

// Disminuir puntaje
btnDown.addEventListener("click", () => {
  if (currentKey) {
    itemData[currentKey].score--;
    score.value = itemData[currentKey].score;
  }
});
