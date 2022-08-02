// Imagine that you have been assigned to write a program for a school that needs to determine which test was the hardest for the students. Your program should be able to take an OBJECT as an ARGUMENT that has a LIST of students with their respective LIST of grades. The OUTPUT of the program should be able to clearly tell the user which test was the hardest (lowest class average).

let studentGrades = {
    Ron: [90, 89, 99, 87, 100, 74],
    Leslie: [78, 74, 92, 87, 77, 81],
    Tom: [77, 61, 89, 47, 57, 83],
    Andy: [35, 54, 44, 58, 39, 41]
};

let findHardestTest = function(grades) {
    let numberOfTests = grades[Object.keys(grades)[0]].length
    
    let testAverages = [];
    
    
    for (let i = 0; i < numberOfTests; i++) {
        let totalPeople = 0;
        let testTotal = 0;
        
        for (prop in grades) {
            totalPeople += 1;
            testTotal += grades[prop][i]
        }
        testAverages.push(Math.floor(testTotal / totalPeople));
    }
    
    let hardestTestGrade = Math.min(...testAverages)
    
    let hardestTestNumber = testAverages.indexOf(hardestTestGrade) + 1
    console.log('The hardest test was test #' + hardestTestNumber)
}

findHardestTest(studentGrades)