from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)
app.config['MONGO_URI'] = 'mongodb+srv://mareksobkow21:GTy1kIR0X2Qih0aW@cluster0.w4rctmc.mongodb.net/musicHelper'
mongo = PyMongo(app)

@app.route('/recommendation', methods=['POST'])
def recommend_music():
    try:
        data = request.json

        # Check if the required fields are present in the request
        if 'favouriteArtist' not in data or 'favouriteGenre' not in data or 'personalityType' not in data:
            raise ValueError('Incomplete data. Please provide favouriteArtist, favouriteGenre, and personalityType.')

        # Store recommendation in MongoDB
        result = mongo.db.userData.insert_one({
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

def process_data(data):
    return f"{data['favouriteArtist']} - {data['favouriteGenre']} - {data['personalityType']}"

if __name__ == '__main__':
    app.run(debug=True)