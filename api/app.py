from flask import Flask, jsonify
from flask_cors import CORS
import pymongo

app = Flask(__name__)
CORS(app)


@app.route('/')
def wellcome():
    return '<html><body><h1>Hello World</h1></body></html>'


@app.route('/test')
def test_function():
    client = pymongo.MongoClient('mongodb://localhost:27017/')
    db = client['personal_goal']
    col = db['2022']
    data = col.find()
    all_members = {'all_members': []}
    for people in data:
        all_members['all_members'].append(people['name'])
    return jsonify(all_members)


@app.route('/member', methods=['GET'])
def get_all_member():
    client = pymongo.MongoClient('mongodb://localhost:27017/')
    db = client['personal_goal']
    col = db['2022']
    data = col.find()
    all_members = {'all_members': []}
    for people in data:
        all_members['all_members'].append(people['name'])
    return jsonify(all_members)


@app.route('/add_people/<string:name>', methods=['POST'])
def add_people(name):
    print("write to mongoDB")
    client = pymongo.MongoClient('mongodb://localhost:27017/')
    db = client['personal_goal']
    col = db['2022']
    data = col.find()

    all_members = {'all_members': []}
    for people in data:
        all_members['all_members'].append(people['name'])
    print(all_members['all_members'], name)
    try:
        if name in all_members['all_members']:
            return jsonify(all_members)
        else:
            col.insert_one({'name': name})
            all_members['all_members'].append(name)
            print(all_members)
            return jsonify(all_members)
    except TypeError:
        col.insert_one(name)
        return jsonify(all_members)


@app.route('/delete_people/<string:name>', methods=['GET', 'POST'])
def delete_people(name):
    print('delete to mongoDB')
    client = pymongo.MongoClient('mongodb://localhost:27017/')
    db = client['personal_goal']
    col = db['2022']
    data = {'name': name}
    try:
        if col.find_one(data)['name'] == name:
            col.delete_one(data)
            return name + ' 已被刪除。'
    except TypeError:
        return name + " 不存在系統中。"


@app.route('/add/<int:a>/<int:b>')
def add(a, b):
    return str(a + b)


if __name__ == "__main__":
    # app.run('0.0.0.0', debug=True)
    app.run(debug=True)
