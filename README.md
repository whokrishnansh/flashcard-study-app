Flashcard Study App
Welcome to the Flashcard Study App! This web app allows users to create flashcards with questions and answers, study them interactively, and toggle between light and dark modes for a personalized experience. Built with React, the app also stores flashcards in localStorage, so they persist between sessions.

Live Demo
You can check out the live demo of this app hosted on GitHub Pages:
Flashcard Study App

Features
Create Flashcards: Add new flashcards with questions and answers.
Interactive Study Mode: Click on a card to reveal its answer.
Dark/Light Mode Toggle: Choose between light or dark mode.
Persistent Flashcards: Flashcards are saved in localStorage.
Dynamic Design: Flashcards are assigned random colors for variety.
Installation
To run the Flashcard Study App locally, follow these steps:

Prerequisites
You need Node.js installed.
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/whokrishnansh/flashcard-study-app.git
Navigate to the project directory:

bash
Copy code
cd flashcard-study-app
Install dependencies:

bash
Copy code
npm install
Run the app in development mode:

bash
Copy code
npm start
This will open the app at http://localhost:3000.

Deployment
To deploy the app on GitHub Pages, follow these steps:

Deploy the app:

bash
Copy code
npm run deploy
This will create a production build and push it to the gh-pages branch.

Check your GitHub Pages link:
Your app will be live at:
https://whokrishnansh.github.io/flashcard-study-app

Tech Stack
React.js: Frontend library for building the interface.
JavaScript (ES6+): For adding dynamic functionalities.
CSS: For styling the app and ensuring a responsive design.
gh-pages: For deployment to GitHub Pages.
localStorage: For storing flashcards persistently.
Project Structure
bash
Copy code
flashcard-study-app/
├── public/
├── src/
│   ├── components/        # Future components (if any)
│   ├── App.js             # Main app logic
│   ├── App.css            # Styles for the app
│   ├── index.js           # Entry point
│   └── ...                # Other files
├── .gitignore
├── README.md
├── package.json
└── ...
Future Improvements
Categories: Organize flashcards by category.
Progress Tracking: Track user progress with flashcards.
Animations: Add animations when flipping flashcards.
Mobile Optimization: Further enhance mobile responsiveness.
Author
Developed by Krishnansh Sharma

GitHub
Portfolio: Coming Soon
License
This project is licensed under the MIT License. Feel free to modify and distribute.

Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests.

How to Use
Add Flashcards: Input a question and answer, then click "Add Flashcard."
Reveal Answers: Click on a flashcard to reveal its answer.
Delete Flashcards: Click the red "X" button to remove a flashcard.
Toggle Dark Mode: Switch between light and dark mode using the button in the top-right corner.
Acknowledgments
Special thanks to all contributors and open-source libraries.
