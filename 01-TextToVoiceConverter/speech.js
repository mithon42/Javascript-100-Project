let speech = new SpeechSynthesisUtterance();
let Button = document.querySelector("button");
let Textarea = document.querySelector("textarea");

let voices = [];
let voicesSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach(
    (voice, i) => (voicesSelect.options[i] = new Option(voice.name, i))
  );
};

voicesSelect.addEventListener("change", () => {
  speech.voice = voices[voicesSelect.value];
});

Button.addEventListener("click", () => {
  speech.text = Textarea.value;
  window.speechSynthesis.speak(speech);
});

// Ends