function transformGrade(grade) {
    
    const A = grade >= 90 && grade <= 100
    const B = grade >= 80 && grade < 90
    const C = grade >= 70 && grade < 80
    const D = grade >= 60 && grade < 70
    const F = grade < 60 && grade >= 0
    
    let newGrade
    
    if(A) {
        newGrade = 'A'
        console.log('Nota ' + newGrade)
    } else if(B) {
        newGrade = 'B'
        console.log('Nota ' + newGrade)
    } else if(C) {
        newGrade = 'C'
        console.log('Nota ' + newGrade)
    } else if(D) {
        newGrade = 'D'
        console.log('Nota ' + newGrade)
    } else if(F) {
        newGrade = 'F'
        console.log('Nota ' + newGrade)
    } else {
        console.log('Nota inválida')
    }
}

transformGrade(101)
transformGrade(-1)
transformGrade(10)
transformGrade(60)
transformGrade(70)
transformGrade(80)
transformGrade(90)
transformGrade(100)