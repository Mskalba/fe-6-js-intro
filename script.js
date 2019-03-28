var initialList = ['Maciek', 'Jakub', 'Michal'];
var $peopleList;
var $newHumanName;
var $addHumanButton;

function main() {
    $peopleList = document.getElementById('people-list');
    $newHumanName = document.getElementById('add-people-value');
    $addHumanButton = document.getElementById('add');

    $addHumanButton.addEventListener('click', addHumanButtonClickHandler);
    $peopleList.addEventListener('click', listClickManager);

    // initialList.forEach(function(element) {
    //     addPeopleElement($peopleList, element);
    // })

    initialList.forEach((element) => {
        addPeopleElement($peopleList, element)
    })
}

function listClickManager(event) {
    if(event.target.classList.contains('edit')) {
        editClickHandler(event);
    } else if(event.target.classList.contains('accept')) {
        acceptChangeHandler(event);
    } else {
        if(event.target.tagName === 'LI') {
            event.target.classList.toggle('alternativePeople');
        } else {
            event.target.parentElement.classList.toggle('alternativePeople');
        }
    }
}

function acceptChangeHandler(event) {
    var $changeInput = event.target.parentElement.getElementsByTagName('input')[0];
    var $acceptButton = event.target.parentElement.getElementsByClassName('accept')[0];
    $changeInput.style.display = 'none';
    $acceptButton.style.display = 'none';

    var $textElement = event.target.parentElement.getElementsByTagName('span')[0];
    var $editButton = event.target.parentElement.getElementsByClassName('edit')[0];
    $textElement.textContent = $changeInput.value;
    $textElement.style.display = '';
    $editButton.style.display = 'inline-block';
}

function editClickHandler(event) {
    var $textElement = event.target.parentElement.getElementsByTagName('span')[0];
    var $changeInput = event.target.parentElement.getElementsByTagName('input')[0];
    var $acceptButton = event.target.parentElement.getElementsByClassName('accept')[0];
    var oldName = $textElement.textContent;
    $textElement.style.display = 'none';
    event.target.style.display = 'none';
    $changeInput.value = oldName;
    $changeInput.style.display = 'inline-block';
    $acceptButton.style.display = 'inline-block';
    /*
    1. Pobierz obecny napis
    2. Schowaj ten napis oraz przycisk edycja
    3. Pokaz input z obecną wartości oraz 2 przyciski, anuluj oraz zatwierdź
    4a. Zatwierdz zmiany
    5a. Schowaj input
    6a. Pokaz nowy tekst
    4b. Usun zmiany
    5b. Schowaj input
    6b. Pokaz stary tekst

    */
}

function addPeopleElement(list, name) {
    var newElement = document.createElement('li');
    var textElement = document.createElement('span');

    textElement.textContent = name;

    var editButton = document.createElement('button');

    editButton.textContent = 'Edycja';
    editButton.classList.add('edit');

    var acceptButton = document.createElement('button');

    acceptButton.textContent = 'Zatwierdz';
    acceptButton.classList.add('accept');
    acceptButton.style.display = 'none';

    var changeInput = document.createElement('input');
    changeInput.style.display = 'none';

    newElement.appendChild(textElement);
    newElement.appendChild(changeInput);

    newElement.appendChild(acceptButton);
    newElement.appendChild(editButton);


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