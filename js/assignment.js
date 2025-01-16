"use strict";

// Create your references to the HTML elements here
const ageInputEl = document.getElementById("age-input");
const submissionBtn = document.getElementById("submission-btn");
const responseElement = document.getElementById("response");

// Create a mutable variable called age
let age;

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);

    // Check if the age is a valid number
    if (isNaN(age)) {
        responseElement.textContent = "Please enter a valid number for age.";
        return;
    }

    // Conditional logic to respond based on age
    if (age < 18) {
        responseElement.textContent = "You are underage.";
    } else if (age >= 18 && age < 65) {
        responseElement.textContent = "You are an adult.";
    } else {
        responseElement.textContent = "You are a senior citizen.";
    }
}

// Attach the function to the button's click event
submissionBtn.addEventListener("click", checkAgeAndRespond);

function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];

    // Prevent invalid input like letters or symbols
    if (invalidCharacters.includes(event.key) || (event.key === "0" && !ageInputEl.value)) {
        event.preventDefault();
    }
}

// Add an event listener to the age input for validation
ageInputEl.addEventListener("keydown", validateInput);
