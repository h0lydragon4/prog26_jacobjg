const students = [
    { name: "Alice", age: 20, grade: "6", workexperience: 2 },
    { name: "Bob", age: 22, grade: "5", workexperience: 1 },
    { name: "Charlie", age: 19, grade: "4", workexperience: 0 },
    { name: "David", age: 21, grade: "5", workexperience: 3 },
    { name: "Eve", age: 23, grade: "6", workexperience: 4 },
    { name: "Frank", age: 20, grade: "3", workexperience: 1 },
    { name: "Grace", age: 22, grade: "2", workexperience: 2 },
    { name: "Hannah", age: 39, grade: "1", workexperience: 5 },
    { name: "Ian", age: 21, grade: "4", workexperience: 1 },
    { name: "Jack", age: 23, grade: "5", workexperience: 3 },
    { name: "Kathy", age: 20, grade: "6", workexperience: 4 },
    { name: "Liam", age: 22, grade: "3", workexperience: 2 },
    { name: "Mia", age: 19, grade: "2", workexperience: 1 },
    { name: "Noah", age: 21, grade: "1", workexperience: 0 },
    { name: "Olivia", age: 23, grade: "4", workexperience: 3 },
    { name: "Paul", age: 40, grade: "5", workexperience: 10 },
    { name: "Quinn", age: 22, grade: "6", workexperience: 0 },
    { name: "Ryan", age: 19, grade: "3", workexperience: 0 },
    { name: "Sophia", age: 21, grade: "2", workexperience: 0 },
    { name: "Tyler", age: 23, grade: "1", workexperience: 0 }
];

const grades = [
    { letter: "A", score: 6 },
    { letter: "B", score: 5 },
    { letter: "C", score: 4 },
    { letter: "D", score: 3 },
    { letter: "E", score: 2 },
    { letter: "F", score: 1}
]

/* Finne antall studenter = antall */
let antall = students.length;
document.getElementById("studentCount").innerHTML = antall;
console.log(studentCount);



/* Finne sum av alle karakterer = sumbGrade */
let sumGrade = 0;
for (const student of students) {
    sumGrade = sumGrade + Number(student.grade);
}
/* Klarte ikke å finne ut hvordan man lagde sum. Fikk hjelp fra en medstudent om hva jeg burde bruke "Number()". */


/* Finne gjennomsnitt av karakterer = gsGrade */
const gsGrade = sumGrade / antall;
const GS = Math.ceil(gsGrade);
/* Fikk "Math.ceil()" fra medstudent. Klarte å finne fram til den samme på w3schools selv */


/* Brukte ny prompt for koden under */

/* Gjøre averageGrade ID om til C */
document.getElementById("averageGrade").innerHTML = "C";



let antallAHTML = ""
    const antallA = students.filter(a => students.grade === 6)
    antallA.map(a => {antallAHTML =
        document.getElementById("gradeA").innerHTML = antallA.length
})

console.log(antallA)
console.log(antallAHTML)




/* Finne sum av all alder = sumAlder */
let sumAlder = 0;
for (const student of students) {
    sumAlder = sumAlder + Number(student.age);
}
/* Finne gjennomsnitt alder = gsAlder
Skrev ut til HTML med document.getElementById("") */
const gsAlder = sumAlder / antall;
document.getElementById("averageAge").innerHTML = gsAlder







/*

students.map(grade => {document.getElementById("gradeA").innerHTML = "students.grade"
} ) 


students.map(karakter => {document.getElementById("gradeA").innerHTML = karakter} )


KI-logg
    Gamle chat:
    https://gemini.google.com/share/d/1bHYxWLJ70FBmxOuHf1fYf7yUyHnOWMAH?usp=sharing

    Ny chat:
    https://gemini.google.com/share/d/1gmhwK4_I2SV4VT8mkFYmNEweXKiIK1U-?usp=sharing

Brukte for ...
*/