# DateNight Roulette

Stop the "where do you want to go?" debate. DateNight Roulette is a web app that lets couples build a list of their favourite date spots and spin a roulette wheel to randomly pick one for the night.

---

## Features

- **Spinning Roulette Wheel** — A casino-styled wheel with animated spin. Each segment represents one of your saved date spots.
- **Date Spot Management** — Add, view, and remove favourite venues from a settings page.
- **Rich Venue Details** — Store the name, price range, neighbourhood, Google rating, and cuisine type for each spot.
- **Result Card** — After the wheel lands, a card displays all the details of the selected venue.
- **Respin & Reset** — Spin again from the result or reset the wheel to start fresh.
- **Persistent Storage** — All date spots are automatically saved to browser `localStorage`, so your list survives page refreshes.
- **Responsive Design** — Works on both desktop and mobile browsers.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build Tool | Vite (rolldown-vite) |
| Routing | React Router DOM 7 |
| State Management | Zustand 5 (with persistence middleware) |
| Styling | Custom CSS3 with CSS variables |
| Linting | ESLint 9 + TypeScript-ESLint |

No backend or database — the app runs entirely in the browser.

---

## Getting Started

**Prerequisites:** Node.js 18 or later.

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Other Commands

```bash
# Build for production
npm run build

# Preview the production build locally
npm run preview

# Lint the codebase
npm run lint
```

---

## Project Structure

```
datenight-roulette/
├── src/
│   ├── App.tsx                 # Root component and routing
│   ├── pages/
│   │   ├── MainPage.tsx        # Wheel and result display
│   │   └── SettingsPage.tsx    # Add and manage date spots
│   ├── components/
│   │   ├── WheelSpinner.tsx    # Animated roulette wheel
│   │   ├── DateSpotCard.tsx    # Result overlay card
│   │   ├── SettingsForm.tsx    # Form for adding new spots
│   │   └── DateSpotList.tsx    # List of saved spots
│   └── store/
│       └── dateSpotStore.ts    # Zustand store with localStorage persistence
├── public/                     # Static assets
└── index.html
```

---

## How It Works

1. Navigate to the **Settings** page and add your favourite date spots.
2. Return to the main page and hit **Spin**.
3. The wheel animates for 6 seconds and lands on a random spot.
4. A card shows the full details of the selected venue.
5. Choose to **Respin** or **Reset** and spin again.

Date spots are stored under the `date-spot-storage` key in `localStorage`. No account or internet connection is required.
