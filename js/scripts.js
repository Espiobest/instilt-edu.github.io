/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

// Team Member Object

var data = [
    {
        "id": 0,
        "name": "Nilabh Agrawal",
        "email": "edu@instilt.com",
        "division": "Founder",
        "location": "Mumbai, India",
        "image": "assets/img/team/Nilabh Agrawal.png"
    },
    {
        "id": 1,
        "name": "Amy Park",
        "email": "amypark.huntsville@gmail.com",
        "division": "Head of Academics",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Amy Park.png"
    },
    {
        "id": 2,
        "name": "Haresh Wedanayake",
        "email": "hareshgw@gmail.com",
        "division": "Head of Admin",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Haresh Wedanayake.png"
    },
    {
        "id": 3,
        "name": "Sameekshaa Prabhu",
        "email": "sameekshaap@gmail.com",
        "division": "Head of Outreach",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Sameekshaa Prabhu.png"
    },
    {
        "id": 4,
        "name": "Jeremy Wu",
        "email": "wujeremy999@gmail.com",
        "division": "Admin",
        "location": "San Jose, USA",
        "image": "assets/img/team/Jeremy Wu.png"
    },
    {
        "id": 5,
        "name": "Riya Garg",
        "email": "riyagige@gmail.com",
        "division": "Admin",
        "location": "Bangalore, India",
        "image": "assets/img/team/Riya Garg.png"
    },
    {
        "id": 6,
        "name": "Ayush Ravichandran",
        "email": "ayushravichandran@gmail.com",
        "division": "Admin",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Ayush Ravichandran.png"
    },
    {
        "id": 7,
        "name": "Rachel Wu",
        "email": "rachel.wu.559@gmail.com",
        "division": "Admin",
        "location": "Las Vegas, USA",
        "image": "assets/img/team/Rachel Wu.png"
    },
    {
        "id": 8,
        "name": "Theaswanth Ganesh",
        "email": "theaswanthganesh@gmail.com",
        "division": "Admin",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Theaswanth.png"
    },
    {
        "id": 9,
        "name": "Harinee Balaji",
        "email": "harineebalaji28@gmail.com",
        "division": "Admin",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Harinee Balaji.png"
    },
    {
        "id": 10,
        "name": "Ashaz Hussain",
        "email": "ashazhussain1609@gmail.com",
        "division": "Admin",
        "location": "Vizag, India",
        "image": "assets/img/team/Ashaz Hussain.png"
    },
    {
        "id": 11,
        "name": "Paloosha Sheikh",
        "email": "sheikhpaloosha1@gmail.com",
        "division": "Outreach",
        "location": "Srinagar, India",
        "image": "assets/img/team/Paloosha Sheikh.png"
    },
    {
        "id": 12,
        "name": "Aarush Sachdeva",
        "email": "aarush433@gmail.com",
        "division": "Academics",
        "location": "Mumbai, India",
        "image": "assets/img/team/Aarush Sachdeva.png"
    },
    {
        "id": 13,
        "name": "Nabil Sikder",
        "email": "nabilsikder14@gmail.com",
        "division": "Outreach",
        "location": "New York, USA",
        "image": "assets/img/team/Nabil Sikder.png"
    },
    {
        "id": 14,
        "name": "Vidushi Anand",
        "email": "vidushianand09@gmail.com",
        "division": "Outreach",
        "location": "Gurugram, India",
        "image": "assets/img/team/Vidushi Anand.png"
    },
    {
        "id": 15,
        "name": "Roohee Urs",
        "email": "rohee.urs@gmail.com",
        "division": "Outreach",
        "location": "Mysore, India",
        "image": "assets/img/team/Roohee Urs.png"
    },
    {
        "id": 16,
        "name": "Ben Turner",
        "email": "ben.turner0987@gmail.com",
        "division": "Academics",
        "location": "Oxford, UK",
        "image": "assets/img/team/Ben Turner.png"
    },
    {
        "id": 17,
        "name": "Nandini Joshi",
        "email": "nandini.joshi04@gmail.com",
        "division": "Academics",
        "location": "Muscat, Oman",
        "image": "assets/img/team/Nandini Joshi.png"
    },
    {
        "id": 18,
        "name": "Priyanka Karamchandini",
        "email": "khushikaramchandani@gmail.com",
        "division": "Outreach",
        "location": "Dubai, UAE",
        "image": "assets/img/team/Priyanka Karamchandini.png"
    },
    {
        "id": 19,
        "name": "Mansi Agrawal",
        "email": "agrawamansi@gmail.com",
        "division": "Outreach",
        "location": "Mumbai, India",
        "image": "assets/img/team/Mansi Agrawal.png"
    },
    {
        "id": 20,
        "name": "Yan Xi",
        "email": "chenyx1308@gmail.com",
        "division": "Academics",
        "location": "Wirral, UK",
        "image": "assets/img/team/Yan Xi.png"
    },
    {
        "id": 21,
        "name": "Arshia Singha",
        "email": "sbgs.arshia.singha@gmail.com",
        "division": "Outreach",
        "location": "Kolkata, India",
        "image": "assets/img/team/Arshia Singha.png"
    },
    {
        "id": 22,
        "name": "Abeer Shaikh",
        "email": "shaikhabeer03@gmail.com",
        "division": "Academics",
        "location": "Mumbai, India",
        "image": "assets/img/team/Abeer Shaikh.png"
    },
    {
        "id": 23,
        "name": "Anirudh Agarwal",
        "email": "itsanirudh98@gmail.com",
        "division": "Outreach",
        "location": "Noida, India",
        "image": "assets/img/team/Anirudh Agarwal.png"
    },
    {
        "id": 24,
        "name": "Saanya Gupta",
        "email": "saanyagupta01@gmail.com",
        "division": "Academics",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Saanya Gupta.png"
    },
    {
        "id": 25,
        "name": "Sanjana Mahesh",
        "email": "sanjumahesh2411@gmail.com",
        "division": "Academics",
        "location": "Singapore, Singapore",
        "image": "assets/img/team/Sanjana Mahesh.png"
    },
    {
        "id": 26,
        "name": "Kruthya Ratnayake",
        "email": "kruthya@outlook.com",
        "division": "Outreach",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Kruthya Ratnayake.png"
    },
    {
        "id": 27,
        "name": "Yashasvi Gupta",
        "email": "yashasvi.gupta@outlook.in",
        "division": "Tutor",
        "location": "Lucknow, India",
        "image": "assets/img/team/Yashasvi Gupta.png"
    },
    {
        "id": 28,
        "name": "Aditi Deleep",
        "email": "aditi.srivatsa10@gmail.com",
        "division": "Outreach",
        "location": "India",
        "image": "assets/img/team/Aditi Deleep.png"
    },
    {
        "id": 29,
        "name": "Manal Abdul Jaleel",
        "email": "manalabduljaleel2003@gmail.com",
        "division": "Academics",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Manal Abdul Jaleel.png"
    },
    {
        "id": 30,
        "name": "Renuk Basnayake",
        "email": "renukbas@gmail.com",
        "division": "Outreach",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Renuk Basnayake.png"
    },
    {
        "id": 31,
        "name": "Palakh Khanna",
        "email": "palakhkhanna20@gmail.com",
        "division": "Tutor",
        "location": "New Delhi, India",
        "image": "assets/img/team/Palakh Khanna.png"
    },
    {
        "id": 32,
        "name": "Pushpanjali Achuthan",
        "email": "pushpanjaliachuthan23@gmail.com",
        "division": "Tutor",
        "location": "Bangalore, India",
        "image": "assets/img/team/Pushpanjali Achuthan.png"
    },
    {
        "id": 33,
        "name": "Aarush Panda",
        "email": "aarushp@gmail.com",
        "division": "Outreach",
        "location": "Livemore, USA",
        "image": "assets/img/team/Aarush Panda.png"
    },
    {
        "id": 34,
        "name": "Reet Narula",
        "email": "reetnarula20@gmail.com",
        "division": "Tutor",
        "location": "Bangalore, India",
        "image": "assets/img/team/Reet Narula.png"
    },
    {
        "id": 35,
        "name": "Apoorva Singh",
        "email": "apoorvadevsingh25@gmail.com",
        "division": "Outreach",
        "location": "Lucknow, India",
        "image": "assets/img/team/Apoorva Singh.png"
    },
    {
        "id": 36,
        "name": "Nikita Agrawal",
        "email": "nikitaagrawal62404@gmail.com",
        "division": "Outreach",
        "location": "Jaipur, India",
        "image": "assets/img/team/Nikita Agrawal.png"
    },
    {
        "id": 37,
        "name": "Anamitra Phukon",
        "email": "anamitra.p2@gmail.com",
        "division": "Tutor",
        "location": "Guwahati, India",
        "image": "assets/img/team/Anamitra Phukon.png"
    },
    {
        "id": 38,
        "name": "Valentin Secades Araya",
        "email": "valsecades@gmail.com",
        "division": "Outreach",
        "location": "San José, Costa Rica",
        "image": "assets/img/team/Valentin Secades Araya.png"
    },
    {
        "id": 39,
        "name": "Ranald Lam",
        "email": "ranaldlam@gmail.com",
        "division": "Outreach",
        "location": "New York, United States",
        "image": "assets/img/team/Ranald Lam.png"
    },
    {
        "id": 40,
        "name": "Aarya Kumar",
        "email": "aaryakk1289@gmail.com",
        "division": "Outreach",
        "location": "Pune, India",
        "image": "assets/img/team/Aarya Kumar.png"
    },
    {
        "id": 41,
        "name": "Vishaka Subramaniam",
        "email": "wish032005@gmail.com",
        "division": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Vishaka Subramaniam.png"
    },
    {
        "id": 42,
        "name": "Gargi Arora",
        "email": "gargigargi1816@gmail.com",
        "division": "Outreach",
        "location": "Amritsar, India",
        "image": "assets/img/team/Gargi Arora.png"
    },
    {
        "id": 43,
        "name": "Satya Rai",
        "email": "satyarai.sac@gmail.com",
        "division": "Outreach",
        "location": "Prayagraj, India",
        "image": "assets/img/team/Satya Rai.png"
    },
    {
        "id": 44,
        "name": "Nitya Verma",
        "email": "nityaverma06@gmail.com",
        "division": "Outreach",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Nitya Verma.png"
    },
    {
        "id": 45,
        "name": "Kumudha Triveedhi",
        "email": "ktiriveedhi1@abaoman.org",
        "division": "Academics",
        "location": "Muscat, Oman",
        "image": "assets/img/team/Kumudha Triveedhi.png"
    },
    {
        "id": 46,
        "name": "Vamika Bindra",
        "email": "vamikabindra.13@gmail.com",
        "division": "Outreach",
        "location": "Lucknow, India",
        "image": "assets/img/team/Vamika Bindra.png"
    },
    {
        "id": 47,
        "name": "Manish Nadendia",
        "email": "manishnadendla@gmail.com",
        "division": "Academics",
        "location": "Academics",
        "image": "assets/img/team/Manish Nadendia.png"
    },
    {
        "id": 48,
        "name": "Sanju Malika",
        "email": "sanjubeautyvlogs@gmail.com",
        "division": "Outreach",
        "location": "Coimbatore , India",
        "image": "assets/img/team/Sanju Malika.png"
    },
    {
        "id": 49,
        "name": "Tvadhanya Badruka",
        "email": "tvadhanyabadruka@gmail.com",
        "division": "Academics",
        "location": "Hyderabad, India",
        "image": "assets/img/team/Tvadhanya Badruka.png"
    },
    {
        "id": 50,
        "name": "Reesha Mishra",
        "email": "reeshamishravis@gmail.com",
        "division": "Outreach",
        "location": "Kolkata, India",
        "image": "assets/img/team/Reesha Mishra.png"
    },
    {
        "id": 51,
        "name": "Yaashna",
        "email": "yaashnadhingraa@gmail.com",
        "division": "Tutor",
        "location": "Barcelona, Spain",
        "image": "assets/img/team/Yaashna Dhingra.png"
    },
    {
        "id": 52,
        "name": "Sophia Bagnes",
        "email": "sbtfbagnes@gmail.com",
        "division": "Academics",
        "location": "Iriga, Philippines",
        "image": "assets/img/team/Sophia Bagnes.png"
    },
    {
        "id": 53,
        "name": "Jacqueline Irion",
        "email": "irionjacqueline@gmail.com",
        "division": "Academics",
        "location": "Atlanta, USA",
        "image": "assets/img/team/Jacqueline Irion.png"
    },
    {
        "id": 54,
        "name": "Rithvik Singh",
        "email": "singhrithvik2016@gmail.com",
        "division": "Tutor",
        "location": "Sharjah, UAE",
        "image": "assets/img/team/Rithvik Singh.png"
    },
    {
        "id": 55,
        "name": "Eryk Jakub Chojnacki",
        "email": "erykchojnacki21@gmail.com",
        "division": "Tutor",
        "location": "Trzemeszno, Poland",
        "image": "assets/img/team/Eryk Jakub Chojnacki.png"
    },
    {
        "id": 56,
        "name": "Marwa Fathima",
        "email": "marwafathima2004@gmail.com",
        "division": "Tutor",
        "location": "Ras al Khaimah\r, UAE",
        "image": "assets/img/team/Marwa Fathima.png"
    },
    {
        "id": 57,
        "name": "Shaurya Sarma",
        "email": "shaurya.sarma@gmail.com",
        "division": "Webmaster",
        "location": "New Jersey, USA",
        "image": "assets/img/team/Shaurya Sarma.png"
    },
    {
        "id": 58,
        "name": "Vanya Agarwal",
        "email": "vanya@ajcast.com",
        "division": "Tutor",
        "location": "India",
        "image": "assets/img/team/Vanya Agarwal.png"
    },
    {
        "id": 59,
        "name": "Madhurima Nayak",
        "email": "connectwithmadhurima@gmail.com",
        "division": "Outreach",
        "location": "Navi Mumbai, India",
        "image": "assets/img/team/Madhurima Nayak.png"
    },
    {
        "id": 60,
        "name": "Tanvi Garg",
        "email": "gargselene@gmail.com",
        "division": "Academics",
        "location": "Agra, India",
        "image": "assets/img/team/Tanvi Garg.png"
    },
    {
        "id": 61,
        "name": "Simran Hakim",
        "email": "simran.hakim@gmail.com",
        "division": "Tutor",
        "location": "Mumbai, India",
        "image": "assets/img/team/Simran Hakim.png"
    },
    {
        "id": 62,
        "name": "Devika Jayaraj",
        "email": "jayarajdevika1@gmail.com",
        "division": "Outreach",
        "location": "Kottayam, India",
        "image": "assets/img/team/Devika Jayaraj.png"
    },
    {
        "id": 63,
        "name": "Rucha Shah",
        "email": "ruchas2005@gmail.com",
        "division": "Outreach",
        "location": "Bangalore, India",
        "image": "assets/img/team/Rucha Shah.png"
    },
    {
        "id": 64,
        "name": "Jahnvi Padhiar",
        "email": "padhiarjahnvi@gmail.com",
        "division": "Outreach",
        "location": "Mumbai, India",
        "image": "assets/img/team/Jahnvi Padhiar.png"
    },
    {
        "id": 65,
        "name": "Devmini Wimalasena",
        "email": "devminiqueend@gmail.com",
        "division": "Outreach",
        "location": "Colombo, Sri Lanka",
        "image": "assets/img/team/Devmini Wimalasena.png"
    },
    {
        "id": 66,
        "name": "Teeba Alawi",
        "email": "Teebanaji@gmail.com",
        "division": "Outreach",
        "location": "Sharjah, UAE",
        "image": "assets/img/team/Teeba Alawi.png"
    },
    {
        "id": 67,
        "name": "Diya Malhotra",
        "email": "diyamalhotra8059@gmail.com",
        "division": "Academics",
        "location": "Bath, UK",
        "image": "assets/img/team/Diya Malhotra.png"
    },
    {
        "id": 68,
        "name": "Aisha Zia Shameer",
        "email": "aishameer.me@gmail.com",
        "division": "Academics",
        "location": "Doha, Qatar",
        "image": "assets/img/team/Aisha Zia Shameer.png"
    },
    {
        "id": 69,
        "name": "Pomeshwaree Devi Narain",
        "email": "jyotsur777@gmail.com",
        "division": "Tutor",
        "location": "Mauritius",
        "image": "assets/img/team/Pomeshwaree Devi Narain.png"
    },
    {
        "id": 70,
        "name": "Iram Inamdar",
        "email": "iraminamdar943@gmail.com",
        "division": "Academics",
        "location": "Pune, India",
        "image": "assets/img/team/Iram Inamdar.png"
    },
    {
        "id": 71,
        "name": "Amrita Anbuchezhian",
        "email": "amritaanbu05@gmail.com",
        "division": "Academics",
        "location": "Singapore, Singapore",
        "image": "assets/img/team/Amrita Anbuchezhian.png"
    },
    {
        "id": 72,
        "name": "Prabhmeet Sira",
        "email": "prabhmeetsira21@gmail.com",
        "division": "Tutor",
        "location": "Canada",
        "image": "assets/img/team/Prabhmeet Sira.png"
    }
]

// Display team members by generating html

data.forEach((member) => {
    var div = document.createElement("div");
    div.setAttribute('class', `team-card`);
    div.setAttribute('id', `${member.id}`);
    div.innerHTML = document.getElementById("teams-page-content").innerHTML;

    div.innerHTML = div.innerHTML
        .replace(/{NAME}/g, member.name)
        .replace(/{DIVISION}/g,  member.division)
        .replace(/{LOCATION}/g,  member.location)

    document.getElementById("main-card").appendChild(div);
});

for(var i = 0; i < data.length; i++) {
    document.getElementById(`${data[i].id}`).querySelector("#team-email").href =  `mailto:${data[i].email}`;
    document.getElementById(`${data[i].id}`).querySelector("#team-image").src = `${data[i].image}`;
}



