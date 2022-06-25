from flask import Flask, request, jsonify
from functions import * 

app = Flask(__name__)

@app.route("/", methods=["POST"])
def middle():
    print(request.json)
    url = request.json['url']
    response = realorfake(url)
    print(response)
    return jsonify({"msg": response })



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2020, debug=True)