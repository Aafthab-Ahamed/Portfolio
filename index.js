// Navigation Bar

window.onscroll = () => {
  let header = document.querySelector("#header");
  console.log(header);
  header.classList.toggle("invisible", window.scrollY > 100);
};

// Links for the projects Button

document.getElementById("login-lnk").onclick = function () {
  window.open("https://aafthab-ahamed.github.io/Login-Screen/", "_blank");
};

document.getElementById("youtube-lnk").onclick = function () {
  window.open("https://aafthab-ahamed.github.io/Youtube-Clone/");
};

// Cursur Hover Effect

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};

// Sending Email to contact me
