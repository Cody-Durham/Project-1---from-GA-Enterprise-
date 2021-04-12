$.ajax("https://spreadsheets.google.com/feeds/list/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/1/public/full?alt=json")
.then((data) => {
    // console.log(data);


    const project = data.feed.entry.map((item, index) => {
        return {
            name: item.gsx$project.$t, 
            git: item.gsx$giturl.$t,
            live: item.gsx$liveurl.$t,
            img: item.gsx$image.$t,
        }
    })
   console.log(project);

    const finalProjectRender = project.map((project) => {
        return`
        <my-card name=${project.name} git=${project.git} live=${project.live} img=${project.img} ></project-card>
        `
    })
    console.log(finalProjectRender);

    const $showCards = $('#cards')
    $showCards.html(finalProjectRender.join(''))

  







})
/////////////////////////////// CODE ABOVE HERE ///////////////////////////












// feed.entry.gsx$project.$t
// live: feed.entry.gsx$liveurl.$t
// git: feed.entry.gsx$giturl.$t
// image: feed.entry.gsx$image.$t
// description: feed.entry.gsx$description.$t