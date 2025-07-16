LanguageLadder
Overview
LanguageLadder is a language learning platform inspired by Duolingo, built with Next.js, React, and Tailwind CSS. It offers interactive lessons for Spanish, French, and German, with gamified features like hearts, points, and a leaderboard. Lessons use Claude API for dynamic content generation.
Features

Homepage: Welcoming page with links to courses and leaderboard.
Courses: Select from Spanish, French, or German with a card-based UI.
Learn: Interactive lessons with flashcards, hearts (max 5), and points tracking.
Leaderboard: Displays top learners with points (static data).
Styling: Vibrant, Duolingo-inspired UI with Tailwind CSS and animations.
Responsive: Mobile-friendly design.
Claude Integration: Generates lesson content dynamically.

Prerequisites

Node.js (v16 or higher)
npm
Git
Vercel CLI
Anthropic API key (for Claude integration)

Setup Instructions

Clone the Repository:
git clone https://github.com/your-username/languageladder.git
cd languageladder


Set Up Environment Variables:Create a .env.local file:
echo "NEXT_PUBLIC_CLAUDE_API_KEY=your-anthropic-api-key" > .env.local

Replace your-anthropic-api-key with your Anthropic API key.

Install Dependencies:
npm install


Run Locally:
npm run dev

Open http://localhost:3000 in your browser.

Build for Production:
npm run build



Dependencies

next: ^14.2.3 (Next.js framework)
react: ^18.2.0 (React library)
react-dom: ^18.2.0 (React DOM rendering)
lucide-react: ^0.279.0 (Icons)
react-circular-progressbar: ^2.1.0 (Progress indicators)
clsx, tailwind-merge, class-variance-authority: Utility libraries for styling
axios: ^1.4.0 (HTTP requests for Claude API)
tailwindcss: ^3.4.1 (CSS framework)
typescript: ^5 (Type safety)
eslint-config-next: ^14.2.3 (Linting)

Project Structure
languageladder/
├── public/
│   └── index.html        # HTML template
├── app/
│   ├── courses/          # Course selection page
│   ├── learn/            # Lessons page
│   ├── leaderboard/      # Leaderboard page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/
│   ├── Card.tsx          # Course card component
│   ├── Unit.tsx          # Unit component
│   ├── LessonButton.tsx  # Lesson button component
│   └── ui/button.tsx     # Reusable button component
├── data/
│   └── courses.ts        # Static course/unit/lesson data
├── lib/
│   └── utils.ts          # Utility functions
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Ignored files
└── README.md             # Documentation

Deployment to GitHub

Create a Repository:
Go to https://github.com > New Repository.
Name: languageladder.
Set to Public or Private as needed.


Set Up SSH Key:ssh-keygen -t ed25519 -C "your_email@example.com" -f ~/.ssh/languageladder_key
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/languageladder_key
cat ~/.ssh/languageladder_key.pub


Add the public key to GitHub (Settings > SSH and GPG keys > New SSH key).


Push Code:git add .
git commit -m "Initial LanguageLadder codebase"
git remote add origin git@github.com:your-username/languageladder.git
git branch -M main
git push -u origin main



Deployment to Vercel

Install Vercel CLI:
npm install -g vercel
vercel login


Set Environment Variables:In Vercel dashboard, go to Project > Settings > Environment Variables and add:
NEXT_PUBLIC_CLAUDE_API_KEY=your-anthropic-api-key


Deploy:
vercel

Use default settings for a Next.js app.

Access Deployed App:Visit the provided URL (e.g., https://languageladder.vercel.app).


Testing

Manual Testing:
Navigation: Tested routes (/, /courses, /learn, /leaderboard).
Courses: Verified card rendering and click interactions.
Lessons: Tested lesson buttons and progress indicators.
Leaderboard: Confirmed static user rankings display.
Responsive Design: Tested on Chrome, Firefox, and mobile viewports.


Run Linting:npm run lint



Claude API Integration

Usage: Planned for lesson content generation (e.g., flashcards) in /learn (to be implemented in app/learn/page.tsx).
Setup: Add Anthropic API key to .env.local and Vercel.
Note: Claude integration is stubbed; full implementation requires API endpoint in app/api/lessons/route.ts.

Troubleshooting

API Errors: Ensure NEXT_PUBLIC_CLAUDE_API_KEY is valid and network is stable.
Vercel Build Fails: Verify Node.js version (16+), package.json scripts, and TypeScript configuration.
CSS Issues: Confirm tailwind.config.ts includes all paths and globals.css has Tailwind directives.
Navigation Issues: Ensure next and react-router-dom are correctly installed.

Notes

Phase 1: Focuses on frontend with static data. Backend (e.g., Drizzle ORM, NeonDB) can be added in Phase 2.
Submission: Submit as LanguageLadder_Frontend.zip or GitHub repository URL with Vercel URL.
Security: Use a new Anthropic API key and avoid sharing it publicly.
