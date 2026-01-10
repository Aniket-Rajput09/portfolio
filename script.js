const text = "Initializing Web Pentesting environment... OWASP Top 10 | Burp Suite | Ethical Hacking";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("type").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}

typeEffect();
function toggleMode() {
  document.body.classList.toggle("light");
}

