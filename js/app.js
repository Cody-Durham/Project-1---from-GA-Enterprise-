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

    const $section = $('#cards')
    $section.html(finalProjectRender.join(""))

})
/////////////////////////////// CODE ABOVE HERE ///////////////////////////












// feed.entry.gsx$project.$t
// live: feed.entry.gsx$liveurl.$t
// git: feed.entry.gsx$giturl.$t
// image: feed.entry.gsx$image.$t
// description: feed.entry.gsx$description.$t