console.log("You can pick your House AND your nose here!");

const students = [
    {
        name: 'Maria',
        house: 'Slytherin'
    },
    {
        name: 'Phillip',
        house: 'Ravenclaw'
    },
    {
        name: 'Laura',
        house: 'Hufflepuff'
    },
    {
        name: 'Kelsey',
        house: 'Gryffindoor'
    },
    {
        name: 'Isis',
        house: 'Ravenclaw'
    }
];

const schoolHouse = ['Gryffindoor', 'Slytherin', 'Hufflepuff', 'Ravenclaw']

const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
};

const getForm = () => {
    let domString = `
        <form id="nameForm">
        <div class="row">
            <div class="col">
            <input type="text" class="form-control" placeholder="Full Name">
            </div>
        <button type="submit" class="btn btn-dark">Sort Me!</button>
    </form>`
    printToDOM(domString, 'getSortedForm')
  };

const buttonClick = (e) =>{
        const buttonType = e.target.id;
        if (buttonType === 'beginButton')
        getForm()
    };

document.getElementById('beginButton').addEventListener('click', buttonClick);

const houseGenerator () => {
    Math.floor(Math.random() * 5);
    for (let i = 0; i < schoolHouse.length; i++) {
        const wholeNumber = Math.floor();
        const giveHouse = schoolHouse[i];
        
    };
};

// const studentSorter = (studArray) => {
//     let domString = '<div class="row">'
//     for (let i = 0; i < studArray.length; i++) {
//         const currentStudent = studArray[i]
//         domString += `
//             <div class="col-3">
//                 <div class="card">
//                     <div class="card-body">
//                         <h5 class="card-title">${currentStudent.name}</h5>
//                         <p class="card-text">${currentStudent.house}</p>
//                     </div>
//                 </div>
//                 <button type="button" class="btn btn-danger">Expel</button>
//             </div>`
//     };
//     domString += '</div>'
//     printToDOM(domString, 'studentCard')
//   };

//   cardBuilder(students)

// const buttonClick = (e) =>{
//     const studentName = e.target.id;
//     const selectedStudent = [];
//     for (let i = 0; i < students.length; i++) {
//         const student = students[i];
//         if (students.house === house) {
//             selectedStudent.push(student);
//         };
//     };
//     cardBuilder(selectedStudent);
// };

// document.getElementById('zoe').addEventListener('click', buttonClickEvent)