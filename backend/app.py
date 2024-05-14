from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_pymongo import PyMongo
from flask_basicauth import BasicAuth
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

app.config['BASIC_AUTH_USERNAME'] = 'root' 
app.config['BASIC_AUTH_PASSWORD'] = 'root'
basic_auth = BasicAuth(app)

# Configuration for MongoDB Atlas
app.config['MONGO_URI'] = 'mongodb+srv://akash:q31l0wZbhNwwN5Nm@dumpx.63pnklm.mongodb.net/Data?retryWrites=true&w=majority'

mongo = PyMongo(app)

# Routes q31l0wZbhNwwN5Nm
class GET_API(Resource):
    @basic_auth.required
    def get(self):
        data = mongo.db.Data.find()
        data_list = [{"id": str(item['_id']), "text": item['text']} for item in data]
        return jsonify(data_list)
    
class POST_API(Resource):
    def post(self):
        try:
            data = request.get_json()
            text = data["text"]
            mongo.db.Data.insert_one({'text': text})
            return jsonify({"message": "Data added successfully"}), 201
        except KeyError:
            return jsonify({"error": "Text is missing"}), 400

api.add_resource(GET_API, '/get')
api.add_resource(POST_API, '/post')
