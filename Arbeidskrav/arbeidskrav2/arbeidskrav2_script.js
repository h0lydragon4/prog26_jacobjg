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


/* DASHBOARD */


/* Finne antall studenter = antall */
    let antall = students.length
    document.getElementById("studentCount").innerHTML = antall


/* KARAKTERFORDELING */


/* Finne sum av alle karakterer = sumbGrade */
    let sumGrade = 0
    for (const student of students) {
        sumGrade = sumGrade + Number(student.grade)
    }
/* Klarte ikke å finne ut hvordan man lagde sum. Fikk hjelp fra en medstudent om hva jeg burde bruke "Number()". */


/* Finne gjennomsnitt av karakterer = gsGrade */
    const gsGrade = sumGrade / antall
    const GS = Math.ceil(gsGrade)
/* Fikk "Math.ceil()" fra medstudent. Klarte å finne fram til den samme på w3schools selv */


//Sjekk Number()



/* Gjøre averageGrade ID om til C */
    document.getElementById("averageGrade").innerHTML = "C"


/* Teller hvor mange A-F karakterer det er blandt studentene */
    let antallAHTML = ""
        const antallA = students.filter(studentA => studentA.grade === "6")
        antallA.map(students => {antallAHTML =
            document.getElementById("gradeA").innerHTML = antallA.length
    })
/* KI fortalte meg at jeg egentlig ikke trengte .map, at det var litt "redundant", men siden jeg ikke kom fram til det på egenhånd så lar jeg det stå. Koden funker fint uansett.  */

        /* Karakter B */
        let antallBHTML = ""
            const antallB = students.filter(studentB => studentB.grade === "5")
            antallB.map(students => {antallBHTML =
                document.getElementById("gradeB").innerHTML = antallB.length
        })

        /* Karakter C */
        let antallCHTML = ""
            const antallC = students.filter(studentC => studentC.grade === "4")
            antallC.map(students => {antallCHTML =
                document.getElementById("gradeC").innerHTML = antallC.length
        })

        /* Karakter D */
        let antallDHTML = ""
            const antallD = students.filter(studentD => studentD.grade === "3")
            antallD.map(students => {antallDHTML =
                document.getElementById("gradeD").innerHTML = antallD.length
        })

        /* Prøver forslaget til KI og fjerner .map. Resultat: gir samme resultat */
                /* Karakter E */
                let antallEHTML = ""
                    const antallE = students.filter(studentE => studentE.grade === "2")
                        document.getElementById("gradeE").innerHTML = antallE.length

                /* Karakter F */
                let antallFHTML = ""
                    const antallF = students.filter(studentF => studentF.grade === "1")
                        document.getElementById("gradeF").innerHTML = antallF.length
        

/* DEMOGRAFI */


/* Finne sum av all alder = sumAlder */
    let sumAlder = 0;
    for (const student of students) {
        sumAlder = sumAlder + Number(student.age);
    }

/* Finne gjennomsnitt alder = gsAlder */
    const gsAlder = sumAlder / antall;
        document.getElementById("averageAge").innerHTML = gsAlder


/* Finne antall rett fra videregående */
    let hsAntallHTML = ""
        const antallHS = students.filter(studentHS => studentHS.age === 19)
            document.getElementById("highSchool").innerHTML = antallHS.length
console.log(highSchool)

/* Finne antall med yrkeserfaring */
    let erfaringAntallHTML = ""
    const erfaringAntall = students.filter(erfaringStudent => erfaringStudent.workexperience > 0)
        document.getElementById("workExperience").innerHTML = erfaringAntall.length
        console.log(workExperience)

/*
Jeg skulle ha vært mer spesifikk, God hjelp med forslaget ditt om Math.ceil, men med tanke på Number(), så har jeg ikke lov til å forandre original javascripten (det som fulgte med oppgaven). Er det en måte å gjøre det på uten å røre original koden? Eller er jeg nødt til å bruke Number()?
KI-logg
    Gamle chat:
    https://gemini.google.com/share/d/1bHYxWLJ70FBmxOuHf1fYf7yUyHnOWMAH?usp=sharing

    Ny chat:
    https://gemini.google.com/share/d/1gmhwK4_I2SV4VT8mkFYmNEweXKiIK1U-?usp=sharing
*/