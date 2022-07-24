from flask import Flask, request, jsonify
from twitter_model import *
from clf_model import *
from beautifulsoup import * 
import json


app = Flask(__name__)

@app.route("/web_article/results", methods=["POST"])
def web():
    print(request.json)
    url = request.json['url']
    [title, originalText, text]= wordopt(url) 

    msg = {
        'link': url,
        'title': title, 
        'originalText': originalText, 
        'text': text, 
        'label': make_prediction(text)
    }
    return jsonify(msg)


@app.route("/twitter/results", methods=["POST"])
def twitter():
    tweetList= request.json['tweetList']
    sentiment= get_sentiment(tweetList)
    print(sentiment)

    return("yes")





if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2020, debug=True)