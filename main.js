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
]
const printToDOM = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint
};

const studentSorter = (studArray) => {
    let domString = '<div class="row">'
    for (let i = 0; i < studArray.length; i++) {
        const currentStudent = studArray[i]
        domString += `
            <div class="col-3">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${currentStudent.name}</h5>
                        <p class="card-text">${currentStudent.house}</p>
                    </div>
                </div>
                <button type="button" class="btn btn-danger">Expel</button>
            </div>`
    };
    domString += '</div>'
    printToDOM(domString, 'studentCard')
  };

  cardBuilder(students)

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