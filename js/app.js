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
//    console.log(projects);

    const finalProjectRender = projects.map((item) => {
        return`
         <my-card name='${item.name}' git='${item.git}' live='${item.live}' img='${item.img}' desctiption='${item.description}'></project-card></my-card>
        `
    })
    // console.log(finalProjectRender);
    const $section = $('#card-container')
    $section.html(finalProjectRender.join(""))

///////////////////////////////////// GLOBAL VARIABLES //////////////////////////////////////
const $cardContainer = $('#card-container')
const $closeButton = $('.close-button')


/// SHOW PROJECTS ///
const $projectsDrop = $('.dropdown-menu li:nth-of-type(1)')

$projectsDrop.on('click', (event) => {
    $('#main').empty
    $($cardContainer).removeClass('hidden')
    $('.close-button').removeClass('hidden')
})

/// CLEAR PROJECTS ///
$('.close-button').on('click', (event) => {
    $cardContainer.addClass('hidden') 
})

/// HIDE CLEAR BUTTON ///
$closeButton.on('click', (event) => {
    $('.button-housing').addClass('hidden')
})


/// SHOW CONTACT FORM ///
const $contactDrop = $('.dropdown-menu li:nth-of-type(2)')

$contactDrop.on('click', (event) => {
    // $('#main').empty()

    $('#main').html(`
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
            <button type="submit" class="submit-button btn-danger id="submit-button">Submit</button>
        </form>
    </section>
    `)
     
    // $('.button-housing').removeClass('hidden')
})



/// SHOW CONTACT FORM ///
const $aboutDrop = $('.dropdown-menu li:nth-of-type(3)')

$aboutDrop.on('click', (event) => {
    // $('#main').empty()
    $('#main').html(`
    <section class="display-about styling">
        <h1 class="about-me-copy">Born and raised in Colorado Ive learned to love the outdoors and everything it has to
            offer. Fly Fishing, mountain biking and hunting are some of my favorite things to do when I have time. I
            also rock some photography and dog training on the side when I have time. </h1><br>
        <h1 class="about-me-copy">I graduated with a degree in Industrial Design and have worked receintly worked in the
            outdoor space designing/ developing softgoods (backpacks, tents) for a local outdoor company and loved every
            aspect of creating products. </h1>
        
    </section>
    `)
})


////////////////////////////////////// CLEAR CONTACT FORM ////////////////////////////////////////


 
    
    
    
})
/////////////////////////////// CODE ABOVE HERE ///////////////////////////