const githubIcon = document.getElementById("github");
const aboutIcon = document.getElementById("about");
const linkedinIcon = document.getElementById("linkedin");

const textAbout = document.querySelector(".text-primary .about");
const textProjects = document.querySelector(".text-primary .projects");
const textContact = document.querySelector(".text-primary .contact");

const audio = document.getElementById("audio");

function playAudio() {
  audio.play();
}

githubIcon.addEventListener("mouseover", () => {
  textAbout.classList.remove("active");
  textProjects.classList.add("active");
  textContact.classList.remove("active");
  playAudio();
});

aboutIcon.addEventListener("mouseover", () => {
  textAbout.classList.add("active");
  textProjects.classList.remove("active");
  textContact.classList.remove("active");
  playAudio();
});

linkedinIcon.addEventListener("mouseover", () => {
  textAbout.classList.remove("active");
  textProjects.classList.remove("active");
  textContact.classList.add("active");
  playAudio();
});
