# Project Overview

**PROJECT NAME:** 1st Portfolio Build

**PROJECT AUTHOR:** Cody Durham



## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Complete Wireframes for approval / Complete overall html structure | Complete ✔️
|Day 2| Add / styling bootstrap elements | Complete ✔️
|Day 3| Core Application JS/jQuery | Complete ✔️
|Day 4| MVP & Bug Fixes / | Inomplete 
|NOTE: | Was not able to fix small bug (day4) with current skillset |
|Day 5| Present | Complete ✔️


## Project Description
### Project Walkthrough Video
Check out the quick [video](https://res.cloudinary.com/dhad6e9gj/video/upload/v1618593423/Portfolio%20Project/zoom_0_vwmfgs.mp4) walkthrough for this project. 

<!-- <p align = "center">
<img src="https://media.giphy.com/media/POV8jlA1C9f8Ky3EFF/giphy.gif">
</p> -->

This project was created using Bootstrap, Shoelace, Javascript, Animate, HTML and CSS to provide its final output.  The exersise is simple and straight to the point, make a portfolio site from scratch and include any projects that you want to show, then deploy it for the world to see. I had multiple points of inspiration from various sites and wanted to recreate some of those elements for my site. This was a perfect opportunity to really sit down and make something from nothing.  This project was also valuable from the standpoint of having time to learn and struggle with different types of tools and customizing them to fit my personal needs. <br>
NOTE: All projects images, cards and links rendered to the screen are done by calling a Google sheet API. 

## Google Sheet

Here is the link to my [Google Sheet](https://docs.google.com/spreadsheets/d/1j85QSABivRQO2ZJQvY48sfWTUv_2jky5JM7abbd6duo/edit#gid=0) I used to call with the API.

## Project Inspiration

Here are a few sites I used for inspiration on design elements, colors, and overall layout. 

Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [https://codepen.io/jkeohan/full/qBRqWbq] | Layout is simple / small animations are great.
|[jbehance.net](https://www.behance.net/gallery/112690645/Web-design-for-the-photographer?tracking_source=search_projects_recommended%7Cportfolio%20web%20design) |  I like this  color pallet |
| [mattfarley.ca](https://carlynicholson.github.io/portfolio/) |  I like the landing page fonts

---

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.  

- [Mobile p1](https://res.cloudinary.com/dhad6e9gj/image/upload/v1618187892/Portfolio%20Project/Portfolio_Wireframes_1-01_wooeph.jpg)
- [Mobile p2](https://res.cloudinary.com/dhad6e9gj/image/upload/v1618187888/Portfolio%20Project/Portfolio_Wireframes_2-02_q1b6ec.jpg)
- [Mobile p3](https://res.cloudinary.com/dhad6e9gj/image/upload/v1618187883/Portfolio%20Project/Portfolio_Wireframes_3-03_kzhjoo.jpg)

- [Desktop p1](https://res.cloudinary.com/dhad6e9gj/image/upload/v1618187879/Portfolio%20Project/Portfolio_Wireframes_4-04_qt8vgp.jpg)
- [Desktop p2](https://res.cloudinary.com/dhad6e9gj/image/upload/v1618187875/Portfolio%20Project/Portfolio_Wireframes_5-05_yebymt.jpg)
- [Desktop p3](https://res.cloudinary.com/dhad6e9gj/image/upload/v1618187870/Portfolio%20Project/Portfolio_Wireframes_6-06_nwicch.jpg)
- [Desktop p4](https://res.cloudinary.com/dhad6e9gj/image/upload/v1618187865/Portfolio%20Project/Portfolio_Wireframes_7-07_tgijbt.jpg)


Wireframing Resources:
- Adobe Illustrator
<!-- - [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/) -->


## Time/Priority Matrix 

Here is my [time priority matrix](https://res.cloudinary.com/dhad6e9gj/image/upload/v1618188165/Portfolio%20Project/Project1_time_priority_matrix-01_uzsa81.jpg)

The Matrix is used to evaluate how long each item will take as well as taking prioirty into consideration. This line will be used to estimate how much time any one feature will take to complete.  

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP

- Pull data using google JSON api ✔️
- Render data on page ✔️
- Functional home button and click into project examples ✔️
- Create a (non functioning) "contact me form" ✔️

#### PostMVP 

- Id like to be able to display a working nav bar that will link to 'contact me" / 'projects' / 'about me'  pages ✔️

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Dropdown Menu | H | 2hr | 2hr |
| Project Previews | H | 3hr | 2hr |
| Regular Nav | H | 2hr | 2hr |  
| Adding Form | H | 5hr|  10hr | 
| Other sections and flex| H | 3hr | 8hr |
| Working with API | H | 3.5hrs|  2hr | 
| Responsive | H | 4hr | hr | 6hr |
| Social Media Icons | L | 2.5hr |  NA |
| Total | H | 21.5hrs| 26hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Project Hover | L | 3hr | NA |
| Bootstrap | H | 4hr | 2hr |
| Shoelace | H | 3hr | 5hr |
| Make own icon | L | 0hr | NA |
| Total | H | 13hrs| 7hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
```
- jQuery
- Bootstrap
- Shoelace
- Animate
```

## Code Snippet

Below is a small piece of code that I was excited about. Essentially, its showing a contact form via the DOM while hiding other sections of the hardcoded HTML.   

```
// SHOW CONTACT FORM ///
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
```

## Issues and Resolutions
 There were two aspects of the project I struggled with: <br>
 Issue 1:
- Working with the DOM to generate event handlers and click events after the section or element was rendered to the screen. <br>
 Solution: Hardcode the element into the HTML and target it after the event handler was called.<br>

Issue 2:
- Working with Shoelace and trying to add custom CSS to elements of the web component was difficult.  
Solution: Read lots of documentation and trial and error to target the specified elements. 
