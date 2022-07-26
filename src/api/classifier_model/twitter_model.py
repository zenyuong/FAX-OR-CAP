from keras_preprocessing.sequence import pad_sequences
import tensorflow as tf

import nltk 
nltk.download('stopwords')
from nltk.corpus import stopwords
from nltk.stem import SnowballStemmer

import re
import pandas as pd

import pickle



# === For text cleaning: Removes certain characters ===
stop_words = stopwords.words('english')
stemmer = SnowballStemmer('english')
text_cleaning_re = "@\S+|https?:\S+|http?:\S|[^A-Za-z0-9]+"

# === TO PROCESS INPUT TEXT ===
def preprocess(text, stem=False):
    text = re.sub(text_cleaning_re, ' ', str(text).lower()).strip()
    tokens = []
    for token in text.split():
        if token not in stop_words:
            if stem:
                tokens.append(stemmer.stem(token))
            else:
                tokens.append(token)
    return " ".join(tokens)


# === LOAD SENTIMENT ANALYSIS MODEL ===
def load_twitter_model():
    # === COMMENT THIS LINE OUT ===
    loaded_model = pickle.load(open('./twitter_model.sav', 'rb'))
    # === UNCOMMENT THIS LINE OUT ===
    # tf.keras.models.load_model('keras_twitter_model.h5')

    return loaded_model



# === LOAD TOKENIZER ===
def load_tokenizer():
    loaded_tokenizer = pickle.load(open('./twitter_tokenizer.sav', 'rb'))

    return loaded_tokenizer


# === TO PREDICT A SENTIMENT ANALYSIS ON THE INPUT TWEETS ===
# === INPUT: LIST of tweets ===
def get_sentiment(tweets):
    # === Loading model + tokenizer ===
    model = load_twitter_model()
    tokenizer = load_tokenizer()

    # === Preprocessing inpput text ===
    tweet_df = pd.DataFrame(tweets, columns=['text'])
    tweet_df.text = tweet_df.text.apply(lambda x: preprocess(x))
    tweets_padded = pad_sequences(tokenizer.texts_to_sequences(tweet_df.text),
                        maxlen = 30)
    scores = model.predict(tweets_padded, verbose=1, batch_size=10000)

    total_score = 0
    for score in scores:
        total_score += score[0]

    # === Getting label result by averaging out total_scores ===
    final_sentiment = total_score/len(scores)
    final_sentiment_text = ''
    if final_sentiment >= 0.5:
        print(final_sentiment)
        final_sentiment_text = 'Mostly Positive'
    else:
        print(final_sentiment)
        final_sentiment_text = 'Mostly Negative'

    return final_sentiment_text