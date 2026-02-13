const intro = document.getElementById("intro");
const wish = document.getElementById("wish");

document.getElementById("thinkBtn").addEventListener("click", () => {
  intro.classList.remove("show");
  wish.classList.add("show");
});

const note = document.getElementById("note");
const messages = [
  "You’re my favourite person, always. 💗",
  "Thank you for loving me the way you do, sayang. 🫶",
  "I’d choose you again and again. 🌙✨",
  "Here’s a lotus for you — pure love, forever. 🌸"
];

let i = 0;
document.getElementById("surpriseBtn").addEventListener("click", () => {
  note.textContent = messages[i % messages.length];
  i++;
});
