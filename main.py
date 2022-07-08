from flask import Flask, request, render_template, current_app
from flask_restful import Resource, Api
import json




app = Flask(__name__)
api = Api(app)

@app.route('/')
def home():
   return render_template('home.html')

f = open('functions.json')
lib_JS_data = json.load(f)

class js(Resource):
    def get(self, str):
        return {'function': lib_JS_data[str]}

api.add_resource(js, '/js/<string:str>')



if __name__ == '__main__':
    app.run(debug=True)



