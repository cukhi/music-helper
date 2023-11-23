from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo
from formChecks import fieldsPresent
import pymongo

app = Flask(__name__)
CORS(app)
app.config['MONGO_URI'] = 'mongodb+srv://MONGO_NAME:MONGO_PASSWORD@MONGO_CLUSTER'
mongo = PyMongo(app)
#create unqiue index for usernames
mongo.db.userData.create_index([('username', pymongo.ASCENDING)], unique=True)

@app.route('/recommendation', methods=['POST'])
@app.route ('user_preferences', methods=['GET'])


def recommend_music():
    try:
        data = request.json

      
        #CHeck if fields are present
        fieldsPresent(data)
        # Store recommendation in MongoDB
      
        result = mongo.db.userData.insert_one({
            'username': data['username'],
            'favouriteArtist': data['favouriteArtist'],
            'favouriteGenre': data['favouriteGenre'],
            'personalityType': data['personalityType'],
        })

        # Check if the insertion was successful
        if result.inserted_id:
            recommendation = {'recommendedMusic': process_data(data)}
            return jsonify(recommendation)
        else:
            raise RuntimeError('Failed to insert data into the database.')
    except Exception as e:
        return jsonify({"error": str(e)}, 500)
    

def get_user_preferences():
    user_preferences = list(mongo.db.userData.fin())
    return jsonify(user_preferences)

def process_data(data):
    return f"{data['username']} - {data['favouriteArtist']} - {data['favouriteGenre']} - {data['personalityType']}"

if __name__ == '__main__':
    app.run(debug=True)