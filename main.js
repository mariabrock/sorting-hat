console.log("You can pick your House AND your nose here!");

const schoolHouse = ['Gryffindoor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint
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
        const buttonType = e.target.id;
        if (buttonType === 'beginButton')
        getForm()
    };

document.getElementById('beginButton').addEventListener('click', buttonClick);

const houseGenerator = (studentName) => {
    const randomNumber = Math.floor(Math.random() * 4);
        console.log(randomNumber)
        const house = schoolHouse[randomNumber]
        let domString = ` <div class="col-3">
                         <div class="card">
                             <div class="card-body">
                                <h5 class="card-title">${studentName}</h5>
                                <p class="card-text">${house}</p>
                             </div>
                         </div>
                         <button type="button" class="btn btn-danger">Expel</button>
                     </div>`
    printToDOM(domString, 'studentCard');
};

document.getElementById('getSortedForm').addEventListener('click', function (e) {
    const buttonType = e.target.id;
    if (buttonType === 'sortme') {
        const studentName = document.getElementById('nameInput').value
            console.log(studentName)
            houseGenerator(studentName);
    }
});


document.getElementById('studentCard').addEventListener('click', buttonClick);