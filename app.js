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
    text_speak.pitch = 1.8;
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
    } ///changes kiya
    else if (message.includes('weather')) {
        let city = getSearchQuery(message, "weather");
        if (city) {
            window.open(`https://www.google.com/search?q=weather+in+${city}`, "_blank");
            speak(`Fetching weather information for ${city}...`);
        } else {
            speak("Please specify a city to get the weather information.");
        }
    }
    else if (message.includes('play music')) {
        let song = getSearchQuery(message, "play music");
        if (song) {
            window.open(`https://www.youtube.com/results?search_query=${song}`, "_blank");
            speak(`Playing ${song} on YouTube...`);
        } else {
            speak("Please specify a song or artist.");
        }
    }
    else if (message.includes('send email')) {
        let emailContent = getSearchQuery(message, "send email");
        if (emailContent) {
            // Assuming you have an email API setup
            sendEmailAPI(emailContent);  
            speak(`Sending your email: ${emailContent}`);
        } else {
            speak("Please provide content to send in the email.");
        }
    }
    else if (message.includes('set reminder')) {
        let reminder = getSearchQuery(message, "set reminder");
        if (reminder) {
            setReminder(reminder);  // Implement a function to set reminders
            speak(`Reminder set: ${reminder}`);
        } else {
            speak("Please specify what reminder to set.");
        }
    }
    else if (message.includes('open github')) {
        window.open("https://github.com", "_blank");
        speak("Opening GitHub...");
    } 
    else if (message.includes('open stackoverflow')) {
        window.open("https://stackoverflow.com", "_blank");
        speak("Opening StackOverflow...");
    }
    else if (message.includes('tell me a joke')) {
        let jokes = [
            "Why don't programmers like nature? It has too many bugs.",
            "Why do Java developers wear glasses? Because they don’t C#.",
            "I would tell you a UDP joke, but you might not get it."
        ];
        let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        speak(randomJoke);
    }
    else if (message.includes('motivate me')) {
        let quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Success is not the key to happiness. Happiness is the key to success.",
            "Your limitation—it's only your imagination."
        ];
        let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        speak(randomQuote);
    }
    else if (message.includes('increase volume')) {
        let video = document.querySelector("video, audio");
        if (video) {
            video.volume = Math.min(video.volume + 0.1, 1);
            speak("Increasing the volume.");
        } else {
            speak("No media found.");
        }
    } 
    else if (message.includes('decrease volume')) {
        let video = document.querySelector("video, audio");
        if (video) {
            video.volume = Math.max(video.volume - 0.1, 0);
            speak("Decreasing the volume.");
        } else {
            speak("No media found.");
        }
    }// this line changes kiya                                 
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
    speak("System Start: Network is online...");
    speak("All systems are operational..");
    wishMe();
});

