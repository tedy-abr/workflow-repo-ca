# Workflow CA

This project is a complete setup for a modern JavaScript development workflow, including linting, formatting, pre-commit hooks, and a full suite of unit and end-to-end tests.


## Features

- Code linting with ESLint
- Code formatting with Prettier
- Automated checks before commits using Husky and lint-staged
- Unit testing with Vitest and jsdom
- End-to-end testing with Playwright


## Prerequisites

- Node.js (v20+)
- npm


## Getting Started

### Installation

Clone the repository and install the dependencies:

```bash
npm install
```

## Running the Project

-npm run start
This command will build the CSS files, start a local server at http://127.0.0.1:5500, and watch for changes.


## Running Tests

# Run unit tests
npm run test:unit

# Run end-to-end tests
npm run test:e2e


## Environment Variables

```bash
TEST_USER_EMAIL=your-test-email@example.com
TEST_USER_PASSWORD=your-test-password
```

This project uses environment variables for running the end-to-end (e2e) tests. Create a `.env` file in the root directory. This file should be added to your `.gitignore` to keep your credentials secret.

Create a .env.example file in the root directory to show what variables are needed. This file should be committed to Git:
TEST_USER_EMAIL=test@example.com
TEST_USER_PASSWORD=testpassword123

## Available Scripts

- `npm run start` - Builds CSS, starts a local server at port 5500, and watches for changes.
- `npm run build:css` - Builds the Tailwind CSS file once.
- `npm run test:unit` - Runs all Vitest unit tests.
- `npm run test:e2e` - Runs all Playwright e2e tests in the terminal.
- `npm run test:e2e:ui` - Opens the Playwright UI for visual testing.


## Technologies

- JavaScript
- HTML
- Tailwind CSS
**ESLint** - For code linting
**Prettier** - For code formatting
**Husky** - For Git hooks
**lint-staged** - For running checks on staged files
**Vitest** - For unit testing
**jsdom** - For simulating a browser environment in unit tests
**Playwright** - For end-to-end testing
**npm** - For package management
**Git** - For version control


## Author

tedy-abr
