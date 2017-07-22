var work = {
    "jobs": [
        {
            "employer": "SoulCycle",
            "title": "Developer",
            "location": "NY",
            "dates": "November 2016 - Current",
            "description": "Work as a Web Developer for the company SoulCycle. I was hiered as a Junior Developer in PHP."
        },
        {
            "employer": "Newsoft S.R.L",
            "title": "Developer",
            "location": "DR",
            "dates": "June 2015 - July 31 2016",
            "description": "Work as a developer for desktop apps. I was a PowerBuilder developer for a year there"
        }
    ]
};

var bio = {
    "name" : "Stephannie Hilario",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "829-908-0404",
        "email" : "hilariostephannie@gmail.com",
        "github" : "shilario",
        "twitter" : "@StephanieHT",
        "location" : "Santiago, RD."
    },
    "welcomeMessage" : "I'm a engeneer in telecomunication whose job for the last couple of years have been as a developer in different technologies.",
    "skills": [
        "PHP", "MySql", "Backbone JS", "JavaScript", "Python Django", "PowerBuilder", "Docker"
    ],
    "bioPic" : "images/cool-pic.jpg"
};

var education = {
    "schools" : [
        {
            "name" : "Udacity - Front-End Web Developer Nanodegree",
            "location" : "Santiago",
            "degree" : "Front-End Web Developer",
            "majors" : ["CS"],
            "dates" : "May 2017 - Current",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "name" : "Udacity - Front-End Web Developer Nanodegree",
            "location" : "Santiago",
            "degree" : "Front-End Web Developer",
            "majors" : ["CS"],
            "dates" : "May 2017 - Current",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],
    "onlineCourses" : [
        {
            "title" : "Front-End Web Developer",
            "school" : "Udacity",
            "dates" : "2017",
            "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ]
};

var projects = {
    "project" : [
        {
            "title" : "Sample Project 1",
            "dates" : "2017",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images" : [
                "images/cool-pic.jpg",
                "images/cool-pic.jpg"
            ]
        },
        {
            "title" : "Sample Project 1",
            "dates" : "2017",
            "description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "images" : [
                "images/cool-pic.jpg",
                "images/cool-pic.jpg"
            ]
        }
    ]
};

$(document).ready(function(){
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);
    
    displayBio();
    displayWorkExperience();
    displayProjects();
    displayEducation();

    $('#mapDiv').append(googleMap);

    displayFooter();

});

function displayBio() {   
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $("#topContacts:last").append(formattedMobile);

    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $("#topContacts:last").append(formattedEmail);

    var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
    $("#topContacts:last").append(formattedGitHub);

    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $("#topContacts:last").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $("#topContacts:last").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace('%data%', bio.bioPic);
    $("#header:last").append(formattedBioPic);

    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
    $("#header:last").append(formattedWelcomeMsg);

    if (bio.skills.length > 0 ) {
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $('#skills').append(formattedSkill);
        });
    }
};
   

function displayWorkExperience() {
    work.jobs.forEach(function(job) {
        $('#workExperience').append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);

        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDate = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDate);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

function displayProjects(){
    $('#projects').append(HTMLprojectStart);

    projects.project.forEach(function(project) {
        var formattedProjectsTitle = HTMLprojectTitle.replace('%data%', project.title);
        $(".project-entry:last").append(formattedProjectsTitle);

        var formattedProjectsDate = HTMLprojectDates.replace('%data%', project.dates);
        $(".project-entry:last").append(formattedProjectsDate);

        var formattedProjectsDescription = HTMLprojectDescription.replace('%data%', project.description);
        $(".project-entry:last").append(formattedProjectsDescription);

        for(var index = 0; index < project.images.length; index++) {
            var formattedImage = HTMLprojectImage.replace('%data%', project.images[index]);
            $('.project-entry').append(formattedImage);
        }
    });
};

function displayEducation() {
    $('#education').append(HTMLschoolStart);

    education.schools.forEach(function(school) {
        var formatteSchoolName = HTMLschoolName.replace('%data%', school.name);
        $(".education-entry:last").append(formatteSchoolName);

        var formatteSchoolDates = HTMLschoolDates.replace('%data%', school.dates);
        $(".education-entry:last").append(formatteSchoolDates);

        var formatteSchoolLocation = HTMLschoolLocation.replace('%data%', school.location);
        $(".education-entry:last").append(formatteSchoolLocation);

        for(var index = 0; index < school.majors.length; index++) {
            var formatteSchoolMajor = HTMLschoolMajor.replace('%data%', school.majors);
            $(".education-entry:last").append(formatteSchoolMajor);
        }
    });

    $('#education').append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
        var formatteOnlineCourseTitle = HTMLonlineTitle.replace('%data%', course.title);
        var formatteOnlineCourseSchool = HTMLonlineSchool.replace('%data%', course.school);

        $("#education").append(formatteOnlineCourseTitle + formatteOnlineCourseSchool);

        var formatteOnlineCourseDates = HTMLonlineDates.replace('%data%', course.dates);
        $("#education").append(formatteOnlineCourseDates);

        var formatteOnlineCourseURL = HTMLonlineURL.replace('%data%', course.url);
        $("#education").append(formatteOnlineCourseURL);
    });
};

function displayFooter(){
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    $("#footerContacts:last").append(formattedMobile);

    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    $("#footerContacts:last").append(formattedEmail);

    var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
    $("#footerContacts:last").append(formattedGitHub);

    var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
    $("#footerContacts:last").append(formattedTwitter);

    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
    $("#footerContacts:last").append(formattedLocation);
};