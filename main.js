// 1. Change document background color to silver

document.body.style.backgroundColor = 'silver';



// 2. Change the font color for h1 title tag to green

var title= document.getElementById('title');
title.style.color = 'green';



// 3. Change the font case for h3 title tags touppercase

var h3Font = document.getElementsByTagName('h3');
for (var i = 0; i < h3Font.length; i++) {
  h3Font[i].style.textTransform = 'uppercase';
}


// 4. Add one more fruit to the fruits list

var fruList = document.getElementById('fruList');
var newFruit = document.createElement('li');
newFruit.textContent = 'Strawberry';
fruList.appendChild(newFruit);


// 5. Add one more vegetable to the vegetables list

var vegList = document.getElementById('vegList');
var newVegetable = document.createElement('li');
newVegetable.textContent = 'Spinach';
vegList.appendChild(newVegetable);
