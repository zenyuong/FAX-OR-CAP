from flask import Flask, request, jsonify
from clf_model import *
from beautifulsoup import * 


app = Flask(__name__)

@app.route("/web_article/results", methods=["POST"])
def middle():
    print(request.json)
    url = request.json['url']
    [title, text]= wordopt(url)   
    msg = {
        'link': url,
        'title': title, 
        'main_text': text, 
        'label': make_prediction(text)
    }
    print(msg)      
    return jsonify(msg)



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2020, debug=True)