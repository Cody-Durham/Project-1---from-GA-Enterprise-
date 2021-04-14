$.ajax("https://spreadsheets.google.com/feeds/list/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/1/public/full?alt=json")
.then((data) => {
    // console.log(data);


    const projects = data.feed.entry.map((item, index) => {
        return {
            name: item.gsx$project.$t, 
            git: item.gsx$giturl.$t,
            live: item.gsx$liveurl.$t,
            img: item.gsx$image.$t,
            description: item.gsx$image.$t,
        }
    })
   console.log(projects);

    const finalProjectRender = projects.map((item) => {
        return`
         <my-card name='${item.name}' git='${item.git}' live='${item.live}' img='${item.img}' desctiption='${item.description}'></project-card></my-card>
        `
    })
    console.log(finalProjectRender);

    const $section = $('#card-container')
    $section.html(finalProjectRender.join(""))




const $projectsDrop = $('.dropdown-menu li:nth-of-type(1)')

$projectsDrop.on('click', (event) => {
    $('#card-container').removeClass('hidden')
    
    const $button = $('<button>')
    const $newDiv = $('<div>')

    $('body').append($newDiv)
    $newDiv.attr('class', 'button-housing')

    $button.text('Close').appendTo($newDiv)
    $button.attr('class', 'close-button')

    // $button.text('Close').appendTo('body')
    // $button.attr('class', 'close-button')

    console.log('projects dropdown clicked')
})

// const $contactDrop = $('.dropdown-menu li:nth-of-type(2)')
// $contactDrop.on('click', (event) => {
//     // $('#card-container').removeClass('hidden')
    
//     console.log('contact dropdown clicked')
// })











})
/////////////////////////////// CODE ABOVE HERE ///////////////////////////