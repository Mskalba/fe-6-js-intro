var $peopleList;
var $newHumanName;
var $addHumanButton;

function main() {
    $peopleList = document.getElementById('people-list');
    $newHumanName = document.getElementById('add-people-value');
    $addHumanButton = document.getElementById('add');

    $addHumanButton.addEventListener('click', addHumanButtonClickHandler);
}

function addPeopleElement(list, name) {
    var newElement = document.createElement('li');

    newElement.textContent = name;
    newElement.classList.add('alternativePeople');

    list.appendChild(newElement);
}

function addHumanButtonClickHandler() {
    var newName = $newHumanName.value;

    if(newName) {
        addPeopleElement($peopleList, newName);
        $newHumanName.value = '';
    }
}

document.addEventListener('DOMContentLoaded', main);