# take-home-assignment

## Setup Steps

# Playwright Test Framework

A scalable Playwright test framework using the Page Object Model pattern.

## Test Strategy

I selected the following four test scenarios based on risk, user impact, and coverage of the initial user experience:

1. User can log into their account
2. User lands on the Home page (validated via the "Book a Scan" button)
3. User can navigate to the "Select Your Scan" page
4. User can return to the Home page

These tests were chosen because they cover the primary happy-path flow
a user would take when interacting with the system. If any of these tests fail,
the core user experience is considered broken.

## Trade-offs

- Focused mainly on critical happy-path flows rather than edge cases.
- Did not automate negative login scenarios (e.g., invalid credentials)
  to prioritize core validation.
- Limited UI validation to focus on key functionality rather than visual regression
  testing.

## Assumptions

- Test users have valid credentials available for login.
- The "Book a Scan" button uniquely identifies the Home page.
- Navigation between pages reflects successful backend responses.
- The environment used for testing is stable.
- Authentication tokens are valid for the duration of the test session.

## Future Improvements

- Add negative login tests (invalid credentials, locked account).
- Add role-based access validation if applicable.
- Add API-level tests for faster feedback.
- Implement visual regression testing.
- Maybe add CI pipeline integration.
