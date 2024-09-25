# app.js file uploaded soon, Cheers

```
// const btn = document.querySelector('.talk');
// const content = document.querySelector('.content');

// function speak(text) {
//     const text_speak = new SpeechSynthesisUtterance(text);
//     text_speak.rate = 1;
//     text_speak.volume = 1;
//     text_speak.pitch = 1;
//     window.speechSynthesis.speak(text_speak);
// }

// function wishMe() {
//     var day = new Date();
//     var hour = day.getHours();

//     if (hour >= 0 && hour < 12) {
//         speak("Good Morning Boss...");
//     } else if (hour >= 12 && hour < 17) {
//         speak("Good Afternoon Master...");
//     } else {
//         speak("Good Evening Sir...");
//     }
// }

// window.addEventListener('load', () => {
//     speak("Initializing JARVIS..");
//     speak("ROTO system activated..");
//     wishMe();
// });

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// const recognition = new SpeechRecognition();

// recognition.onresult = (event) => {
//     const currentIndex = event.resultIndex;
//     const transcript = event.results[currentIndex][0].transcript;
//     content.textContent = transcript;
//     takeCommand(transcript.toLowerCase());
// };

// btn.addEventListener('click', () => {
//     content.textContent = "Listening please wait....";
//     recognition.start();
// });

// function takeCommand(message) {
//     if (message.includes('hey') || message.includes('hello')) {
//         speak("Hello Sir, How May I Help You?");
//     } 
//     // Open Google
//     else if (message.includes("open google")) {
//         window.open("https://google.com", "_blank");
//         speak("Opening Google...");
//     } 
//     else if (message.includes("open youtube")) {
//         let searchQuery = getSearchQuery(message, "open youtube");
//         if (searchQuery) {
//             window.open(`https://www.youtube.com/results?search_query=${searchQuery}`, "_blank");
//             speak(`Opening YouTube and searching for ${searchQuery}...`);
//         } else {
//             window.open("https://youtube.com", "_blank");
//             speak("Opening YouTube...");
//         }
//     }
//     else if (message.includes("open facebook")) {
//         window.open("https://facebook.com", "_blank");
//         speak("Opening Facebook...");
//     }
//     else if (message.includes('wikipedia')) {
//         window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
//         speak(`This is what I found on Wikipedia regarding ${message.replace("wikipedia", "")}.`);
//     }
//     else if (message.includes('time')) {
//         const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
//         speak(`The time is ${time}`);
//     }
//     else if (message.includes('date')) {
//         const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
//         speak(`Today's date is ${date}`);
//     } 
//     else if (message.includes('battery')) {
//         checkBatteryStatus();
//     } 
//     else {
//         window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
//         speak(`I found some information on Google regarding ${message}`);
//     }
// }
// function getSearchQuery(message, command) {
//     let searchQuery = message.replace(command, "").trim();
//     return searchQuery.length > 0 ? searchQuery : null;
// }

// function checkBatteryStatus() {
//     if (navigator.getBattery) {
//         navigator.getBattery().then(function (battery) {
//             const batteryLevel = battery.level * 100;
//             let advice = `Your battery is at ${batteryLevel}%. `;
//             if (batteryLevel > 80) {
//                 advice += "You're good to go!";
//             } else if (batteryLevel > 50) {
//                 advice += "Battery is okay, but you might want to charge soon.";
//             } else if (batteryLevel > 20) {
//                 advice += "Consider charging your device.";
//             } else {
//                 advice += "Battery is low. Please charge now.";
//             }
//             speak(advice);
//         });
//     } else {
//         speak("Sorry, I can't access the battery status on this device.");
//     }
// }  

//no toogle
```