
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)
let dogContent = document.createElement('div')
    dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)
let dogImage = document.createElement('img')
    dogImage.setAttribute('class', 'dog-image')
    dogImage.setAttribute('src', './assets/rizzo.jpg')
    dogImage.style.height = "330px"
    dogImage.style.width = "200px"
dogContent.append(dogImage)
    let dogDetails = document.createElement('div')
        dogDetails.setAttribute('class', 'dog-details')
    let descriptionTitle = document.createElement('h3')
        descriptionTitle.append('Description:')
            dogDetails.append(descriptionTitle)
    let descriptionP = document.createElement('p')
        descriptionP.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.')
            dogDetails.append(descriptionP)
    let feedTitle = document.createElement('h3')
        feedTitle.append('Feeding Times:')
            dogDetails.append(feedTitle)
    let feedUL = document.createElement('ul')
        let times = ['9:00 am','12:00 pm','5:00 pm']
        for (let i = 0; i < times.length; i++){
            let li = document.createElement('li')
            li.textContent = times[i]
            feedUL.append(li)
        }
    dogDetails.append(feedUL)
dogContent.append(dogDetails)



