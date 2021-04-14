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
const $clearButton = $('<button>')
const $newDiv = $('<div>')

$projectsDrop.on('click', (event) => {
    $('#card-container').removeClass('hidden')

    $('body').append($newDiv)
    $newDiv.attr('class', 'button-housing')

    $clearButton.text('Close').appendTo($newDiv)
    $clearButton.attr('class', 'close-button')

    $clearButton.attr('class', 'close-button')
})



const $contactDrop = $('.dropdown-menu li:nth-of-type(2)')
$contactDrop.on('click', (event) => {

    // const $contactForm = $('<section>')
    // $contactForm.addClass('form-container').appendTo('body')
    // $contactForm.addClass('hidden')

    const $inputFields = innerHTML = `
    <section class="form-container">
        <form>
        <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Phone Number</label>
            <input type="text" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="" class="submit-button btn-primary">Submit</button>
        </form>
    </section>
    `
    $($inputFields).appendTo('body')

    
    console.log('contact dropdown clicked')
})













// $clearButton.on('click', '$clearProjects')

// const $clearProjects = () => {
//     $('#card-container').attr('class', 'hidden')
// }














})
/////////////////////////////// CODE ABOVE HERE ///////////////////////////