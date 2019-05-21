let createButtonsBtn = document.querySelector("#create-btn");
const label = document.querySelector("#btn-label");
const classes = document.querySelector("#btn-classes");
const buttonId = document.querySelector("#btn-id");
const buttonsContainer = document.querySelector(".buttons");
const form = document.querySelector("#daphnie");

createButtonsBtn.addEventListener("click", createButton);

function createButton(event) {
    // this prevents the default form submit action on HTML. Yay, we have our first
    // DOM manipulation
    event.preventDefault();

    // spec: store button data

    const labelValue = (label.value) ? label.value : '';
    const classesValue = (classes.value) ? classes.value : '';
    const buttonIdValue = (buttonId.value) ? buttonId.value : '';

    const arr = classesValue.split(',');
    let sample = document.createElement("button");
    sample.textContent = labelValue;
    sample.setAttribute("type", "button");

    if (arr[0].length > 0) {
        for (let index = 0; index < arr.length; index++) {
            const className = arr[index];
            sample.classList.add(className);
        }
    }
    // sample.classList.add

    buttonsContainer.append(sample);
    resetForm();
}

function resetForm() {
    form.reset();
}