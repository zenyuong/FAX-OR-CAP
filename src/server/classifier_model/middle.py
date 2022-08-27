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
        'label': make_prediction(text),
        'markedText': ''
    }

    if msg['label'] == "Unreliable News":
        marked_text = ''

        file = open('unreliable.json', 'r')
        unreliable_words = json.load(file)['words']

        org_word_list = msg['originalText'].split(' ')

        for org_word in org_word_list:
            if org_word in unreliable_words:
                marked_text += " <mark>" + org_word + "</mark>"

            else:
                marked_text += " " + org_word

    else:
        marked_text = ''

        file = open('reliable.json', 'r')
        reliable_words = json.load(file)['words']

        org_word_list = msg['originalText'].split(' ')

        for org_word in org_word_list:
            if org_word in reliable_words:
                marked_text += " <mark>" + org_word + "</mark>"

            else:
                marked_text += " " + org_word


    msg['markedText']  = marked_text

    return jsonify(msg)


@app.route("/twitter/results", methods=["POST"])
def twitter():
    tweetList= request.json['tweetList']
    sentiment= get_sentiment(tweetList)
    print(sentiment)

    return(sentiment)





if __name__ == '__main__':
    app.run(host='0.0.0.0', port=2020, debug=True)