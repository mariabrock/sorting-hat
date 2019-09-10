console.log("You can pick your House AND your nose here!");

const schoolHouse = ['Gryffindoor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
};

let hideCard = (e) => {
    const toExpel = e.target.closest('.col-3');
    if (toExpel.style.display = "block") {
        toExpel.style.display = "none";
    }
    console.log(e.target.closest('.col-3'))
};

const getForm = () => {
    let domString = `
        <div id="nameForm">
        <div class="row">
            <div class="col">
            <input id="nameInput" type="text" class="form-control" placeholder="Full Name">
            </div>
        <button id="sortme" type="submit" class="btn btn-dark">Sort Me!</button>
    </div>`
    printToDOM(domString, 'getSortedForm')
  };

const buttonClick = (e) =>{
        if (e.target.classList.contains('expel')) {
            hideCard(e);
        } else if (e.target.id === 'beginButton') {
                getForm()};
    }; 

document.getElementById('beginButton').addEventListener('click', buttonClick);

const houseGenerator = (studentName) => {
    const randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber)
        const house = schoolHouse[randomNumber]
        let domString = `<div class="col-3">
                                <div class="card">
                                <div class="card-body" id="studCard">
                                    <h5 class="card-title">${studentName}</h5>
                                    <p class="card-text">${house}</p>
                                    </div>
                                    <button type="button" class="btn btn-danger expel">Expel</button>
                                </div>
                            </div>`
    printToDOM(domString, 'studentCard');
};

document.getElementById('getSortedForm').addEventListener('click', function (e) {
    const buttonType = e.target.id;
    if (buttonType === 'sortme') {
        const studentName = document.getElementById('nameInput').value
            console.log(studentName)
            houseGenerator(studentName);
    };
});

// (element.validity.valueMissing)
// let validateForm = () => {
//     const needName = document.forms["studentCard"]["nameInput"].value;
//     if (needName !== "nameInput") {
//         alert("Name must be filled out");
//         return false;
//     }
//     validateForm ()


document.getElementById('studentCard').addEventListener('click', buttonClick);


//the init function:
// const init = () => {
//     eventlisteners (the 5 lines of buttonClicks)
//     pieBuilder(pies);
// }
// Init ();