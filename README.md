# BeyondMiles-Personality-Quiz

Final Year Project

The personality quiz is designed to categorise users into one of four tourist personality types: **Cultural**, **Adventure**, **Entertainment**, or **Leisure**. This categorisation helps tailor travel recommendations to each user's interests.

# How it Works
- The quiz is built using **HTML**, **CSS**, and **JavaScript**.
- Users answer a series of questions, each contributing points towards one or more personality types.
- When the quiz is submitted, JavaScript processes the answers, calculates scores for each category, and determines the highest scoring personality type.
- The results page then displays:
  - A personalised message, e.g., “Your tourist type is Leisure!”
  - A relevant image (e.g., the Leisure bear) for visual feedback.
  - A short description explaining the personality type.
- Users can retake the quiz anytime by clicking the **Retake Quiz** button, which resets the form and allows them to try again.

# Key JavaScript Functions
- `handleQuizSubmission()` — Collects and processes user answers on form submission.
- `calculatePersonality()` — Calculates scores and returns the dominant tourist type.
- `displayResults()` — Dynamically updates the results page with text and images based on the personality type.
- `resetQuiz()` — Resets quiz inputs and results for another attempt.

# Personalisation
The quiz combines textual results with themed images (like the "leisure bear") to make the experience engaging and memorable. This visual feedback reinforces the personalised nature of the app and encourages users to explore recommendations tailored specifically for them.
