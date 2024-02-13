document.addEventListener("DOMContentLoaded", function() {
    let storyTextElement = document.getElementById("storyText");
    let decisionInput = document.getElementById("decisionInput");
    let restartButton = document.getElementById("restartButton");
    let storyImage = document.getElementById("storyImage");

    function updateStory(text) {
        storyTextElement.textContent = text;
    }

    function clearInput() {
        decisionInput.value = "";
    }

    function startStory() {
        updateStory("Welp, you did the thing your mom told you not to. You explored. You find yourself at the edge of a dense forest...");
        decisionInput.addEventListener("keydown", handleFirstDecision);
        restartButton.style.display = "none";
        storyImage.style.display = "none";
    }

    function handleFirstDecision(event) {
        if (event.key === "Enter") {
            let decision = decisionInput.value.toLowerCase().trim();
            makeFirstDecision(decision);
            clearInput();
            switch (decision) {
                case "venture deeper":
                    storyImage.src = "cave.jpg"; 
                    break;
                case "climb tree":
                    storyImage.src = "range.jpg"; 
                    break;
                case "search path":
                    storyImage.src = "forestt.jpg"; 
                    break;
                case "gather supplies":
                    storyImage.src = "supsup.jpg"; 
                    break;
                case "turn back":
                    storyImage.src = "exitt.jpg"; 
                    break;
                default:
                    storyImage.src = "defaultt.jpg"; 
                    break;
            }
            storyImage.style.display = "block";
        }
    }

    function handleSecondDecision(event) {
        if (event.key === "Enter") {
            updateStory("A bear shows up and eats you! Shoulda listened to your mom.");
            restartButton.style.display = "block";
            
            storyImage.src = "bearbear.jpg"; 
            
            storyImage.style.display = "block";
        }
    }

    function makeFirstDecision(decision) {
        switch (decision) {
            case "venture deeper":
                updateStory("You venture deeper into the forest and discover a hidden cave.");
                decisionInput.removeEventListener("keydown", handleFirstDecision);
                decisionInput.addEventListener("keydown", handleSecondDecision);
                break;
            case "climb tree":
                updateStory("You climb a nearby tree and spot a distant mountain range.");
                decisionInput.removeEventListener("keydown", handleFirstDecision);
                decisionInput.addEventListener("keydown", handleSecondDecision);
                break;
            case "search path":
                updateStory("You search for a path but find none. The forest seems endless.");
                decisionInput.removeEventListener("keydown", handleFirstDecision);
                decisionInput.addEventListener("keydown", handleSecondDecision);
                break;
            case "gather supplies":
                updateStory("You gather supplies and feel prepared for the journey ahead.");
                decisionInput.removeEventListener("keydown", handleFirstDecision);
                decisionInput.addEventListener("keydown", handleSecondDecision);
                break;
            case "turn back":
                updateStory("You turn back and leave the forest behind, wondering what adventures await elsewhere.");
                restartButton.style.display = "block";
                break;
            default:
                updateStory("Please enter a valid decision. Try, venture deeper, climb tree, search path, gather supplies, or turn back");
                break;
        }
    }

    restartButton.addEventListener("click", startStory);

    startStory();
});
