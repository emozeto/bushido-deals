from flask import Flask
from flask import jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS, cross_origin
from flask import render_template, request

app = Flask(__name__)
app.config['MONGO_DBNAME'] = 'test2'
app.config['MONGO_URI'] = 'mongodb://dockerhost:29017/test2'
cors = CORS(app)
mongo = PyMongo(app)

@app.route('/')
@cross_origin()
def hello_world():
    users = mongo.db.users
    output = []
    for s in users.find():
        output.append({'first': s['first'], 'last': s['last'], 'nationality': s['nationality']})
    return jsonify({'result': output})


if __name__ == "__main__":
    app.run(port=5000, debug=True, host='0.0.0.0')