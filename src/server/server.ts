const listNames = ["platone", "socrate", "aristotele", "parmenide"];

const listNamesElement = document.querySelector('.names');

function getNameUpperNameCase() {
    listNames.forEach(name => {
        const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);
        const nameElement = document.createElement('div');
        nameElement.textContent = upperCaseName;
        listNamesElement?.appendChild(nameElement);
    });
}

getNameUpperNameCase();
console.log(listNames);
