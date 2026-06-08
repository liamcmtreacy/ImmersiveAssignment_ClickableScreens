// Stores the difficulty the player picked.
// If they somehow don't pick one, they're getting Easy by default.
let selectedDifficulty = "Easy";

function showScreen(screenId) {

    // Now we will have to hide all the screens
    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {

        // Put every screen into the shadow realm.
        screen.classList.add("hidden");
    });

    // Bring back the screen we actually want to see.
    document.getElementById(screenId).classList.remove("hidden");
}

function goToMainMenu() {

    // Splash screen over
    // Time for the main menu.
    showScreen("mainMenu");
}

function goToDifficulty() {

    // Player clicked Start.
    // Now they make decisions.
    showScreen("difficulty");
}

function selectDifficulty(difficulty) {

    // Remember what difficulty the player chose.
    selectedDifficulty = difficulty;

    // Print it in the console
    console.log("Difficulty:", difficulty);

    // Off to the instructions screen.
    showScreen("explanation");
}

function startLoading() {

    // Show the loading screen.
    // The player now waits 
    showScreen("loading");

    // Start at 0%.
    let progress = 0;

    // Grab the text that displays the loading percentage.
    const loadingText = document.getElementById("loadingText");

    // Fake loading because we're not actually loading anything yet.
    const loadingInterval = setInterval(() => {

        // Increase progress by 10 every cycle.
        progress += 10;

        // Update the text on screen.
        loadingText.textContent = progress + "%";

        // end of progress bar.
        if (progress >= 100) {

            // Stop the loading loop before it escapes containment.
            clearInterval(loadingInterval);

            // Launch the experience.
            startExperience();
        }

    }, 300); // Every 300 milliseconds
}

function startExperience() {

    // Tell us what difficulty we're launching with.
    console.log(
        "Starting VR Experience on",
        selectedDifficulty,
        "difficulty"
    );

    // Goodbye menus.
    // Hello immersive experience.
    showScreen("experience");
}