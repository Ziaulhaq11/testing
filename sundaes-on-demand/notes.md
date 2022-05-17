What we learn here;

Backdrop to Test :
More complex user interactions
multiple form entry, moving through order phases
mouseover popup
test that element disappears from DOM
Simulating Server response
Mock Service Worker
Async app updates
awaiting DOM Changes
Global State Via Context

Will not be testing context implementation
only interested in testing behaviour as seen by user!
Tests no different if we used Redux, Mobx , etc;
Only difference is the test setup
make sure component is wrapped in context
ensure functionality
avoid errors

Order Phase State(App-level)

Based on the order phase state we display the page.

In Progress
Review
Completed

npm list @testing-library/user-event -- for checking user event version

Screen Query Methods:-
command[All]ByQueryType :- Means we can combine these three

    command :
        get :- expect element to be in DOM
        query : expect element not to be in DOM
        find : expect element to appear async
    [All]
        (exclude) expect only one match
        (include) expect more than one match
    QueryType:
        Role(most preferred)
        AltText(images)
        Text(display elements)
        Form elements
            PlaceholderText
            LabelText
            DisplayValue

Mock Service Workers :

    Purpose :
        Intercept network Calls
        return specified responses
    Prevents network calls during tests
    Setup test conditions using server response

Setup :
npm install msw
Create handlers
Create test server
Make sure test server listens during all tests
reset after each test

And here in Mock Service Worker we're not using Browser but Node. Because Jest supports nodejs
