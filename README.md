# Lean React

This project is a lean boilerplate for using React in your project.

You could use React, React-DOM and JSX here.

Your code would run as-is (besides JSX transformation), so ES support depends on your browser.

As of autumn 2017 (e.g. Chrome 60+ / Firefox 55+), you could use all decent ECMAScript features, even spread operator for objects.

# Installation

Once you have NPM installed, run the script:

    ./install.sh

# Compilation

To covert your JSX code to plain Javascript, you need to compile the script:

    ./compile.sh

You could also use a watcher:

    ./compile.sh --watch

# Run

Start web server:

    ./run.sh

You may run on other port:

    ./run.sh -p 8001

Open page in the browser <http://localhost:8080/>

# Cleanup

You may delete all temporary files:

    ./cleanup.sh

# Content

Application files:

* app.js -- application code (may use React, React-DOM and JSX)
* app.css -- application styles
