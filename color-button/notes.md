Section-1 :

npm test -- It will starts running JEST in watch mode

render(<File/>) -- Creates virtual DOM for argument JSX and Access Virtual DOM via Screen Global
screen.getByText -- Find Element by Display Text;
(/learn react/i) -- Its a regular Expression

Assertion ccauses test to succeed or fail
expect().toBeInTheDocument()

Assertions:

expect -- jest global, starts with the Assertion
(linkElement) -- expect argument (Subject of the assertion)
toBeInTheDocument -- Matcher(1.Type of Assertion . 2.this Matcher comes from Jest-DOM)
() -- Matcher argument (refines matcher)
Example :
expect(element.textContent).toBe('hello');
expect(elementsArray).toHaveLength(7)

JEST DOM:-
comes with create-react-app
src/setupTests.js imports it before each test, makes matchers available
DOM - based matchers ()
examples : toBeVisible() or toBeChecked()

React Testing library helps with
Rendering Components into Virtual DOM
Searching Virtual DOM
Interacting with Virtual DOM
Needs a test Runner (JEST recommended)
Find Tests, run them, make assertions
Jest :
Is recommended by Testing library
comes with create-react-app

npm test runs an npm sript that runs Jest in watch mode

How Does JEST work:-
Global Tests method has two arguments
string Description
test functiiion
Test fails if error is thrown when running function
Assertions trow errors when expectation fails
No Error -> test pass
Empty test passes!

Test Driven Development :-

    Write Tests before writiing code.
    Then write code according to "spec" set by Tests
    Red Green Testing :
    Tests fail before code is written

What React Testing Libray Do :
Creates Virtual DOM for testing and uitilities for interaccting with DOM. allows testing without a browser

Unit Tests :
Tests one unit of code in isolation
Integration Tests :
How Multiple units work together
Functional Tests :
Tests a particular function of Software (its kind of testing behaviour of app not code itself)
Acceptance/ End-to-End (E2E) Tests :-
Use actual browser and server (Cypress, Selenium)

Unit Testing vs Functional Testing :
Unit Testing Cant give complete picture of how users interacting with software whereas Functional is close to How user interacts

TDD VS BDD (Testing Driven Development vs Behavioural Driven Development)

Accessibility and Finding Elements:-
https://testing-library.com/docs/queries/about/#priority
https://testing-library.com/docs/dom-testing-library/api-queries
https://testing-library.com/docs/react-testing-library/cheatsheet/
https://www.w3.org/TR/wai-aria/#role_definitions -- which role we should select

Create-react-app's example test uses "getByText"
ok for non-interactive elements
better:"getByRole"

Unit Testing functions
Functions separate from Components:
Used by Several Components or Complex logic
Unit test if
Complex logic difficult to test via functional tests
Too many edge cases

Issue with functional tests?
High level makes them resistant to refactors
high-level makes them difficult to diagnose

ESLint : - Popular Linter for JavaScript
Linter : Analyzes static text and marks syntax that breaks rules

Linting vs Formatting:-
Formatters (like prettier) automatically format code (indents, spacing)
example : spaces around curly braces
import {useEffect} from 'react';
import { useEffect } from 'react'; -- Prettier

Linters address format and style
example : preferred assertion method
expect(checkbox).toHaveAttribute(checked);
expect(checkbox).toBeChecked -- Lint modified this bc the above one is not correct.

ESLint Plugins -- Enforce best practices;
Create-react-app by defaults comes with ESLint. which we can see in package.json

npm install eslint-plugin-testing-library eslint-plugin-jest-dom
VS code File Locations
