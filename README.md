# MovieMex x HNGX (Frontend)

MovieMex is a movie app built with Next.js, designed to help users discover and explore movies.

![App Screenshot](/public/images/others/app_screenshot.png)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Technologies Used](#technologies-used)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your local machine.
- An API key for the movie database API (TMDb). You can obtain one by signing up on TMDb website.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/benjaminnkem/moviemex.git
   ```

2. Navigate to the project directory:

   ```bash
   cd moviemex
   ```

3. Install dependencies:

   ```bash
   npm install
   #or
   yarn install
   ```

4. Create a `.env.local` file in the project root and add your movie database API key:

   ```bash
   NEXT_PUBLIC_MOVIE_API_KEY=your_api_key_here
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

## Features

- Browse and search for movies.
- View movie details, genres, and release date.

## Usage

1. On the home page, you can search for movies by title or browse the latest releases.
2. Click on a movie to see more details.

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for building server-rendered React applications.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [TypeScript](https://www.typescriptlang.org/) - A statically typed superset of JavaScript for building scalable and maintainable applications.
- [TMDb](https://www.themoviedb.org/) - The Movie Database (TMDB) is a popular, user editable database for movies and TV shows.
