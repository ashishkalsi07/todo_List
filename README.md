# To-Do List Application

A basic full-stack To-Do List application using Flask for the backend and HTML, CSS, and JavaScript for the frontend.


## Backend (Flask)

### `app.py`

The Flask application with two endpoints:
- `GET /todos`: Retrieves the list of todos.
- `POST /add`: Adds a new todo to the list.

### `requirements.txt`

Contains the dependencies for the project:

## Frontend

### `templates/index.html`

The main HTML file that serves the To-Do List UI.

### `static/css/styles.css`

Basic styling for the To-Do List application.

### `static/js/scripts.js`

JavaScript code to handle adding and fetching todos.

## Getting Started

### Prerequisites

Make sure you have Python and pip installed on your machine.

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd todo-app
    ```

2. Create a virtual environment and install dependencies:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

### Running the Application

Start the Flask development server:
```bash
python app.py


