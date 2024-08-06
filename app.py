from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# In-memory database for demonstration purposes
todos = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add', methods=['POST'])
def add_todo():
    data = request.get_json()
    todos.append(data['todo'])
    return jsonify({'status': 'success', 'todos': todos})

@app.route('/todos', methods=['GET'])
def get_todos():
    return jsonify(todos)

if __name__ == '__main__':
    app.run(debug=True)
