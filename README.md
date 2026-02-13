# Playwright Test Framework

A scalable Playwright test framework using the Page Object Model pattern.

This framework validates the core user journey from login through scan selection, focusing on high-impact user workflows.

## Overview

This project implements an automated testing solution for validating critical user flows within the application. The primary goal was to ensure that the core happy-path experience remains stable and reliable.
The framework emphasizes:
Clear separation of concerns via Page Object Model
Maintainable and reusable test architecture
Risk-based test selection
Scalable structure for future expansion
If any of the implemented tests fail, the core user experience is considered broken.

## Tech Stack

Playwright
TypeScript
Node.js
Page Object Model (POM) architecture

## Test Strategy

The following four test scenarios were selected based on user impact, system risk, and coverage of the primary onboarding flow:
- User can log into their account
- User lands on the Home page (validated via the "Book a Scan" button)
- User can navigate to the "Select Your Scan" page
- User can return to the Home page

These scenarios were intentionally chosen because they represent the primary happy-path flow a user would take when interacting with the system. Protecting this flow ensures that the most business-critical functionality remains operational.

## Trade-offs

- Focused mainly on critical happy-path flows rather than edge cases.
- Did not automate negative login scenarios (e.g., invalid credentials)
  to prioritize core validation.
- Limited UI validation to focus on key functionality rather than visual regression
  testing.

  These trade-offs were intentional to ensure high-value coverage within reasonable scope.

## Assumptions

- Test users have valid credentials available for login.
- The "Book a Scan" button uniquely identifies the Home page.
- Navigation between pages reflects successful backend responses.
- The environment used for testing is stable.
- Authentication tokens are valid for the duration of the test session.

## Project Structure

/tests                → Playwright test specifications  
/pages                → Page Object Model classes  
/data                 → Answers for take home questions 1 & 2  
playwright.config.ts  → Framework configuration  
package.json          → Dependencies and scripts  

The structure supports scalability and clean separation between test logic and page interactions.

## Getting Started

Prerequisites
Node.js v16 or higher
npm
Install Dependencies
npm install

Run All Tests
npx playwright test

Run Tests in Headed Mode
npx playwright test --headed

View HTML Report
npx playwright show-report

## Future Improvements

- Add negative login tests (invalid credentials, locked account).
- Add role-based access validation if applicable.
- Add API-level tests for faster feedback.
- Implement visual regression testing.
- Maybe add CI pipeline integration.
