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
const $closeButtonMobile = $('.close-button-mobile')


/// SHOW PROJECTS ///
const $projectsDrop = $('.dropdown-menu li:nth-of-type(1)')

$projectsDrop.on('click', (event) => {
    $($cardContainer).removeClass('hidden')
    $($closeButtonMobile).removeClass('hidden')
})

/// CLEAR PROJECTS ///
    $closeButtonMobile.on('click', (event) => {
    $cardContainer.addClass('hidden') 

})

/// HIDE CLEAR BUTTON ///
$closeButtonMobile.on('click', (event) => {
    $($closeButtonMobile).addClass('hidden')
})


/// SHOW CONTACT FORM ///
const $contactDrop = $('.dropdown-menu li:nth-of-type(2)')

$contactDrop.on('click', (event) => {

    $('#card-container').addClass('hidden')
    $('.close-button-mobile').addClass('hidden')

    $('#main').html(`
    <section class="form-container">
        <form netlify>
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
    $('.submit-button').on('click', (event) => {
        $('.form-container').addClass('hidden')
    })
});




/// SHOW ABOUT INFO ///
const $aboutDrop = $('.dropdown-menu li:nth-of-type(3)')

$aboutDrop.on('click', (event) => {
    $('#main').html(`
        <section class="display-about">

        <h1 class="about-me-copy">As a developer with a fortitude and passion for being a creator, I set high standards for any project I take on. Leveraging a background in consumer-facing product design and multiple fields, you can count on me to bring reflection, personal growth, dependability and consistency to our work. Never compromising on quality or reliability, I'm able to achieve results while scoping deliverables, collaborating, and managing multiple projects.<br><br>
        </h1>

        <h1 class="about-me-copy">Born and raised in Colorado Ive learned to love the outdoors and everything it has to offer. Fly Fishing, mountain biking and hunting are some of my favorite things to do when I have time. </h1><br>
    </section>
    `)
});



$('.logo-header img').on('click', (event) => {
    $('#main').empty()
    $('#card-container').addClass('hidden')
    $('.close-button-mobile').addClass('hidden')

console.log("You found the secret hide 'eveything button!'")
});
   
    
    
});
/////////////////////////////// CODE ABOVE HERE ///////////////////////////