# Flashcard Study App

Welcome to the **Flashcard Study App**! This web app allows users to create flashcards with questions and answers, study them interactively, and toggle between light and dark modes for a personalized experience. Built with React, the app also stores flashcards in `localStorage`, so they persist between sessions.

## Features

- **Create Flashcards**: Add new flashcards with questions and answers.
- **Interactive Study Mode**: Click on a card to reveal its answer.
- **Dark/Light Mode Toggle**: Choose between light or dark mode.
- **Persistent Flashcards**: Flashcards are saved in `localStorage`.
- **Dynamic Design**: Flashcards are assigned random colors for variety.

---

## Installation

To run the **Flashcard Study App** locally, follow these steps:

### Prerequisites

- You need [**Node.js**](https://nodejs.org/) installed.

### Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/whokrishnansh/flashcard-study-app.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd flashcard-study-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the app in development mode:**

   ```bash
   npm start
   ```

   This will open the app at `http://localhost:3000`.

---

## Deployment

To deploy the app on GitHub Pages, follow these steps:

1. **Deploy the app:**

   ```bash
   npm run deploy
   ```

   This will create a production build and push it to the `gh-pages` branch.

2. **Check your GitHub Pages link**:  
   Your app will be live at:  
   `https://whokrishnansh.github.io/flashcard-study-app`

---

## Tech Stack

- **React.js**: Frontend library for building the interface.
- **JavaScript (ES6+)**: For adding dynamic functionalities.
- **CSS**: For styling the app and ensuring a responsive design.
- **gh-pages**: For deployment to GitHub Pages.
- **localStorage**: For storing flashcards persistently.

---

## Project Structure

```bash
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
```

---

## Future Improvements

- **Categories**: Organize flashcards by category.
- **Progress Tracking**: Track user progress with flashcards.
- **Animations**: Add animations when flipping flashcards.
- **Mobile Optimization**: Further enhance mobile responsiveness.

---

## Author

Developed by **Krishnansh Sharma**  
- [GitHub](https://github.com/whokrishnansh)  
- Portfolio: _Coming Soon_

---

## License

This project is licensed under the MIT License. Feel free to modify and distribute.

---

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

---

## How to Use

1. **Add Flashcards**: Input a question and answer, then click "Add Flashcard."
2. **Reveal Answers**: Click on a flashcard to reveal its answer.
3. **Delete Flashcards**: Click the red "X" button to remove a flashcard.
4. **Toggle Dark Mode**: Switch between light and dark mode using the button in the top-right corner.

---
