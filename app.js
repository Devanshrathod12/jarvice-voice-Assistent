const content = document.querySelector('.content');
let listening = false;

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Continuous listening for "Jarvis" keyword
recognition.continuous = true;  // Keep listening even after recognizing speech
recognition.interimResults = false;  // Get final result after complete speech

// Function to make JARVIS speak
function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;
    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Master...");
    } else {
        speak("Good Evenning Sir...");
    }
}

// Function to handle commands
function takeCommand(message) {
    if (message.includes('open google')) {
        window.open("https://google.com", "_blank");
        speak("Opening Google...");
    } 
    else if (message.includes("open youtube")) {
        let searchQuery = getSearchQuery(message, "open youtube");
        if (searchQuery) {
            window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, "_blank");
            speak(`Opening YouTube and searching for ${searchQuery}...`);
        } else {
            window.open("https://youtube.com", "_blank");
            speak("Opening YouTube...");
        }
    } 
    else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        speak(`The time is ${time}`);
    }
    else if (message.includes('date')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        speak(`Today's date is ${date}`);
    } 
    else if (message.includes('battery')) {
                checkBatteryStatus();
            } 
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        speak(`I found some information on Google regarding ${message}`);
    }
    listening = false;
}

// Function to extract search query from the user's command
function getSearchQuery(message, command) {
    let searchQuery = message.replace(command, "").trim();
    return searchQuery.length > 0 ? searchQuery : null;
}
recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript.toLowerCase();
    content.textContent = transcript;

    if (!listening && transcript.includes("jarvis")) {
        listening = true;  // Activate JARVIS
        speak("JARVIS is now activated");
    } else if (listening) {
        takeCommand(transcript);  // Process the command
    }
};

recognition.onend = () => {
    recognition.start();
};

recognition.start();

window.addEventListener('load', () => {
    speak("Initializing JARVIS..");
    speak("System Start: Powering up all modules...");
    speak("Checking Network Connection: Network is online..");
    speak("Running Diagnostics: All systems are operational..");
    wishMe();
});

