var dropdown = document.getElementById("topics");
var result = document.getElementById("quote");

// Keep track of the last displayed quotes for each topic
var lastQuotes = {
    daily: null,
    refinement: null,
    retrospective: null,
    sprintplanning: null,
    sprintreview: null,
    agilemanifesto: null
};

//randomized Daily quotes
var quotes = {
    daily: [
    "Make it last max 15 minutes.",
    "If proactivity is difficult for the team. Use a name-picking tool.",
    "Make it visual by using a kanban board.",
    "Don't go through the tickets per person. The sprint goal is shared, and so are all the tickets.",
    "Ask: 'What did we do yesterday to reach the sprint goal?' 'What should we do today?' and 'Do we need anything for that?'/'Is anything blocking?'",
    "Don't go in-depth in de stand-up. Plan something afterwards instead.",
    "the Daily stand-up is NOT an update, it is a moment to inspect and adapt together, and make a plan of action to reach the sprint goal.",
    "Only move work to 'Done' if it meets the requirements of the Definition of Done.",
],

    refinement: [
    "Use relative numbers as estimates, because people can't predict time at all!",
    "The goal of refinement is shared understanding and alignment between the team members.",
    "Have multiple short refinements per sprint, instead of one really long (and draining) one.",
    "Make sure you have a template for how you write backlog items as a team.",
    "Write user stories to understand the user perspective and the value added.",
    "Scope the work to be done by adding acceptance criteria within the ticket.",
    "Create a definition of done to know when work is actually DONE (this applies to ALL the work in the sprint!)"
],

    retrospective: [
        "Pick max three improvement actions for the upcoming sprint",
        "Reflect on the team process and try to stay away from individual feedback.",
        "Consider things to start, stop and continue to better reach the sprint goal next time.",
        "Take time to do Retrospectives. Don't skip them. Do them in person if you can.",
        "Spice things up and try different formats (e.g. ask ChatGPT or go to Retromat.org)."
    ],

    sprintplanning: [
        "Only commit to the planning if you feel comfortable enough!",
        "Define a Definition of Ready to have shared requirements for when work is ready to be added to a sprint planning.",
        "First define the sprint goal. Then choose which backlog items add the most value in order to reach the sprint goal.",
        "The Product Owner is responsible for WHAT the team buids, but the development team is always responsible for HOW the sprint goal will be reached.",
        "Do not overcommit. You can make a more realistic planning by tracking velocity every sprint.",
        "Good expectation management is better than overcommitting!"
    ],

    sprintreview: [
        "Invite relevant stakeholders to receive relevant feedback.",
        "A review is a moment to inspect and adapt the work done, and how to iterate in the next sprint to add more value.",
        "Demo your work in the review by actually demonstrating the product. Try to stay away from presentations!!!",
        "Check if all the work actually meets your defined Definiton of Done."
    ],

    agilemanifesto: [
        "Individuals and interactions over processes and tools",
        "Working software over comprehensive documentation",
        "Customer collaboration over contract negotiation",
        "Responding to change over following a plan"
    ]
};

// Function to get a random quote from an array, ensuring it's different from the last one
function getRandomQuote(quoteArray, lastQuote) {
    var randomQuote;
    do {
        var randomIndex = Math.floor(Math.random() * quoteArray.length);
        randomQuote = quoteArray[randomIndex];
    } while (randomQuote === lastQuote); // Ensure it's different from the last quote
    return randomQuote;
}

// Function to generate and display quotes
function displayRandomQuotes() {
    // Get a random daily quote
    var randomDailyQuote = getRandomQuote(quotes.daily, lastQuotes.daily);
    // Get a random refinement quote
    var randomRefinementQuote = getRandomQuote(quotes.refinement, lastQuotes.refinement);
    // Get a random retrospective quote
    var randomRetrospectiveQuote = getRandomQuote(quotes.retrospective, lastQuotes.retrospective);
    // Get a random sprint planning quote
    var randomSprintPlanningQuote = getRandomQuote(quotes.sprintplanning, lastQuotes.sprintplanning);
    // Get a random sprint review quote
    var randomSprintReviewQuote = getRandomQuote(quotes.sprintreview, lastQuotes.sprintreview);
    // Get a random agile manifesto quote
    var randomAgileManifestoQuote = getRandomQuote(quotes.agilemanifesto, lastQuotes.agilemanifesto);
    
        // Update lastQuotes with the newly generated quotes
        lastQuotes.daily = randomDailyQuote;
        lastQuotes.refinement = randomRefinementQuote;
        lastQuotes.retrospective = randomRetrospectiveQuote;
        lastQuotes.sprintplanning = randomSprintPlanningQuote;
        lastQuotes.sprintreview = randomSprintReviewQuote;
        lastQuotes.agilemanifesto = randomAgileManifestoQuote;

    return { randomDailyQuote, randomRefinementQuote, randomRetrospectiveQuote, randomSprintPlanningQuote, randomSprintReviewQuote, randomAgileManifestoQuote }; // Return the quotes
}

   // Getting the selected value
    dropdown.addEventListener("change", function() {
        
        selectedTopic = this.value;

        var knopje = document.querySelector("button");
        knopje.removeAttribute("hidden");

        var { randomDailyQuote, randomRefinementQuote, randomRetrospectiveQuote, randomSprintPlanningQuote, randomSprintReviewQuote, randomAgileManifestoQuote } = displayRandomQuotes(); // Destructure the returned quotes
        handleTopic(selectedTopic, randomDailyQuote, randomRefinementQuote, randomRetrospectiveQuote, randomSprintPlanningQuote, randomSprintReviewQuote, randomAgileManifestoQuote);

        // Add click event to the gimme morebutton
        knopje.addEventListener("click", function () {
        //pressed effect
        knopje.classList.add("pressed");
        
            setTimeout(function() {
                knopje.classList.remove("pressed");
            }, 100);
        // Generate a new random quote within the selected topic on button click
        var newQuotes = displayRandomQuotes();
        handleTopic(selectedTopic, newQuotes.randomDailyQuote, newQuotes.randomRefinementQuote, newQuotes.randomRetrospectiveQuote, newQuotes.randomSprintPlanningQuote, newQuotes.randomSprintReviewQuote, newQuotes.randomAgileManifestoQuote);
        });


        function handleTopic(topic, dailyQuote, refinementQuote, retrospectiveQuote, sprintPlanningQuote, sprintReviewQuote, agileManifestoQuote) {

        switch (topic){

            case "daily":
            result.innerText = dailyQuote;
            break;

            case "refinement":
            result.innerText = refinementQuote;
            break;

            case "retrospective":
            result.innerText = retrospectiveQuote;
            break;

            case "sprintplanning":
            result.innerText = sprintPlanningQuote;
            break;

            case "sprintreview":
            result.innerText = sprintReviewQuote;
            break;

            case "agilemanifesto":
            result.innerText = agileManifestoQuote;
            break;

            default:
            result.innerText = "Please select a topic.";
            break;
         }
    }
    });

