const input = document.querySelector("input");
const form = document.querySelector("form");
const h1 = document.querySelector("h1");
const body = document.querySelector("body");
const alertMessage = document.querySelector("#alert-message");
const output = document.querySelector(".output");

const inputValue = input.value;

// Alert Success Message
const alertSuccessMessage = () => {
  alertMessage.classList.add("alert-success");
  alertMessage.classList.remove("d-none");
  alertMessage.textContent = "Text Copied Successfully";
};

// Alert Failure Message
const alertFailureMessage = (message) => {
  alertMessage.classList.add("alert-danger");
  alertMessage.textContent = message;
};

const copyContent = async () => {
  try {
    // Copy To clipboard
    await navigator.clipboard.writeText(input.value);

    alertSuccessMessage();
    if (input.value == "") {
      alertFailureMessage("Please enter some text");
    }
    // Removing alert after 2sec
    setTimeout(() => {
      alertMessage.classList.add("d-none");
    }, 2000);

    // Pasting copied text in the output box automatically
    navigator.clipboard.readText().then((clipText) => {
      if (clipText != "") {
        const li = document.createElement("li");
        li.textContent = clipText;
        output.appendChild(li);
      }
    });
  } catch (err) {
    alertFailureMessage("Failed to copy");
  }

  input.value = "";
};

// Event Listner
form.addEventListener("submit", (e) => {
  e.preventDefault();
  copyContent();
});
