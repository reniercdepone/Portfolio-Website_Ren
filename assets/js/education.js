AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Datacamp: Data Science Associate Certification",
    cardImage: "assets/images/education-page/datacamp_dsa_cert.svg",
    moocLink: "https://www.datacamp.com/certificate/DSA0015992096602",
  },
  {
    title: "Datacamp: Data Science Associate Track",
    cardImage: "assets/images/education-page/datacamp_dsa_track.svg",
    moocLink: "https://www.datacamp.com/completed/statement-of-accomplishment/track/6b67cb8416b7d6ce7fa0a6bbb26246e8524fcf10",
  },
  {
    title: "Kaggle: Intermediate Machine Learning",
    cardImage: "assets/images/education-page/kaggle_iml.svg",
    moocLink: "https://www.kaggle.com/learn/certification/renierdepone/intermediate-machine-learning",
  },
  {
    title: "Google: Foundations, Data, Data, Everywhere",
    cardImage: "assets/images/education-page/coursera_google_data.svg",
    moocLink: "https://www.coursera.org/account/accomplishments/verify/8DEJQKJ284X8",
  },
  {
    title: "Udemy: Automate the Boring Stuff w Python",
    cardImage: "assets/images/education-page/udemy_atbsp.svg",
    moocLink: "https://www.udemy.com/certificate/UC-b3ca6a15-07b1-40d1-a5b7-c5e9035dbe8a/",
  },
  {
    title: "Udemy: Data Science Python for Data Analysis Bootcamp",
    cardImage: "assets/images/education-page/udemy_python_ds.svg",
    moocLink: "https://www.udemy.com/certificate/UC-2f68225a-8d8f-4d40-b72f-407288a076d6/",
  },
  {
    title: "Udemy: The Python Programming Definitive Diploma",
    cardImage: "assets/images/education-page/udemy_python_prog.svg",
    moocLink: "https://www.udemy.com/certificate/UC-6de83469-9564-41e7-b1e7-f1f01358a21d/",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Certified Data Scientist Associate",
    image: "assets/images/education-page/badge_dsa.png",
    description: "Earned July 16, 2024",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
