import pyttsx3
import speech_recognition as sr
import datetime
import wikipedia
import webbrowser
import os

engine = pyttsx3.init()

def speak(text):
    engine.say(text)
    engine.runAndWait()

def wish_me():
    hour = datetime.datetime.now().hour
    if hour < 12:
        speak("Good morning baby")
    elif hour < 18:
        speak("Good afternoon baby")
    else:
        speak("Good evening baby")
    speak("I am Jarvis. How can I help you")

def take_command():
    r = sr.Recognizer()
    try:
        with sr.Microphone() as source:
            print("Listening...")
            r.pause_threshold = 1
            audio = r.listen(source)

        try:
            print("Recognizing...")
            query = r.recognize_google(audio, language='en-in')
            print(f"You said: {query}")
        except Exception:
            speak("Sorry baby, repeat pannunga")
            return "None"
        return query.lower()
    except AttributeError:
        # Raised by speech_recognition when PyAudio is not installed
        speak("Microphone unavailable. Please type your command.")
        query = input("Type command: ")
        return query.lower()
    except Exception:
        # Generic fallback to typed input for any other microphone errors
        speak("Microphone error. Please type your command.")
        query = input("Type command: ")
        return query.lower()

if __name__ == "__main__":
    wish_me()
    while True:
        query = take_command()

        if 'wikipedia' in query:
            speak("Searching Wikipedia")
            query = query.replace("wikipedia", "")
            result = wikipedia.summary(query, sentences=2)
            speak(result)

        elif 'open google' in query:
            webbrowser.open("https://google.com")

        elif 'open youtube' in query:
            webbrowser.open("https://youtube.com")

        elif 'time' in query:
            time = datetime.datetime.now().strftime("%H:%M:%S")
            speak(f"Time is {time}")

        elif 'exit' in query or 'quit' in query:
            speak("Bye baby, see you")
            break
