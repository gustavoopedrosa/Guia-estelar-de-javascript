const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Eker'
            },
            {
                title: 'O homem mais rico da Babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai rico, pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ]
    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            }
        ]
    }
]

function doItAll(name) {

    const arrayTitlesAndAuthors = []
    const arrayAuthorsTitles = []
    const arrayAuthors = []
    const titles = []

    let counterAuthors = 0
    let counterCategory = 0
    let counterBooks = 0

    for (const objects of booksByCategory) {
        for (const property in objects) {
            if (property === 'category') {
                counterCategory++
            } else if (property === 'books') {
                for (const object of objects[property]) {
                    counterBooks++
                    for (const property in object) {
                        arrayTitlesAndAuthors.push(object[property])
                        if (property === 'author') {
                            if (arrayAuthors.indexOf(object[property]) === -1) {
                                arrayAuthors.push(object[property])
                                counterAuthors = arrayAuthors.length
                            }
                            if (object[property] === name){
                                const index = arrayTitlesAndAuthors.indexOf(name)
                                arrayAuthorsTitles.push(arrayTitlesAndAuthors.slice(index -1))
                                arrayTitlesAndAuthors.splice(index -1)
                            }
                        }
                    }
                }
            } else {
                throw new Error('Verifique o array booksByCategory!')
            }
        }
    }

    for (const elements of arrayAuthorsTitles) {
        for (const element of elements) {
            if (element === name) {
                titles.push(elements.shift())
            }
        }
    }

    return {
        counterCategory,
        counterBooks,
        counterAuthors,
        titles
    }
}

// function showAuthorTitles(name) {
    
// }

// function findAuthor(name) {
//     for (const objects of booksByCategory) {
//         for (const property in objects) {
//             if (property === 'books') {
//                 for (const object of objects[property]) {
//                     for (const property in object) {
//                         if (property === 'author') {
//                             console.log(object[property])
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

console.log(doItAll('Augusto Cury'))