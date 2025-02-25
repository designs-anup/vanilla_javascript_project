// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: '../../img/dog.jpg',
      text: "Innovative and detail-oriented Web Developer with 6+ years of experience in developing and maintaining responsive, accessible, and visually compelling web properties. Adept at utilizing HTML, CSS, and JavaScript frameworks to deliver high-quality web solutions.",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: '../../img/fox.jpg',
      text: 'Collaborated on designing web components of the company’s main application using CSS and HTML, leading to a hike in website traffic by 10%. Improved website functions and layouts under senior supervision.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: '../../img/horse.jpg',
      text: 'Designed and implemented dynamic front-end features for an application used by 10,000+ users utilizing JavaScript, CSS and HTML5.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'project manager',
      img: '../../img/owl.jpg',
      text: 'With over 5 years in project management focusing on web design and development, my expertise includes leading complex digital projects with top-tier results. I bring strong leadership, technical skills in WordPress and Jira, and a record of budget and scope management success to every endeavor.',
    },
];

// select elements
const profile = document.querySelector('.avatar')
const author = document.querySelector('.author')
const jobProfile = document.querySelector('.job')
const jobDescription = document.querySelector('.jobInfo')

// select buttons
const btns = document.querySelectorAll('.btn')
const btnRandom = document.querySelector('.btnRandom')

let count = 0

window.addEventListener('DOMContentLoaded', function(){
    console.log("content loaded", reviews);
    createReviewCard(count)
})

function createReviewCard(item){
    let currentReview = reviews[item]

    profile.src = currentReview.img
    author.textContent = currentReview.name
    jobProfile.textContent = currentReview.job
    jobDescription.textContent = currentReview.text
}

btns.forEach(function(btn){
    // console.log(btn);
    btn.addEventListener('click', function(e){
        // console.log('button clicked', e.target.classList);
        let selectBtnStyle = e.target.classList

        if(selectBtnStyle.contains('prev')){
            count -= 1
            // console.log("Previous button count is : " , count);
            if(count < 0){
            //    console.log("prev count : ", count);
               count = reviews.length -1 
            }
            createReviewCard(count)
        }

        if(selectBtnStyle.contains('next')){
            // console.log("Next button count is : ", count);
            count += 1
            if(count > (reviews.length - 1)){
                console.log("next count : ", count);
                count = 0     
            }
            createReviewCard(count)
        }
    })

})

btnRandom.addEventListener('click', function(){
    count = Math.floor(Math.random() * reviews.length)
    // console.log("random reviews", count);
    createReviewCard(count)
})