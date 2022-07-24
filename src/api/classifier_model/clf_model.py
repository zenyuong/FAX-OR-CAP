import pandas as pd
# import numpy as np
# import matplotlib.pyplot as plt
# import seaborn as sns
import re

from sklearn.feature_extraction.text import TfidfVectorizer


# from tensorflow.keras.preprocessing.text import Tokenizer
# from tensorflow.keras.preprocessing.sequence import pad_sequences

# from sklearn.linear_model import LogisticRegression
# from sklearn.svm import SVC
# from sklearn.ensemble import RandomForestClassifier

# from sklearn.metrics import classification_report, plot_confusion_matrix, accuracy_score, confusion_matrix

import nltk 
from nltk.corpus import stopwords
from nltk.stem.porter import PorterStemmer

import pickle

STOPWORDS = stopwords.words('english')


# === HELPER FUNCTION #1: STEMMING FUNCTION === 
def stemming(content):
    port_stem = PorterStemmer()
    review = re.sub('[^a-zA-Z]',' ',content)
    review = review.lower()
    review = review.split()
    review = [port_stem.stem(word) for word in review if not word in stopwords.words('english')]
    review = ' '.join(review)
    return review


# === IMPORTING MODEL ===
def load_model():
    loaded_model = pickle.load(open('./clf_model.sav', 'rb'))

    return loaded_model

# === IMPORT VECTORIZER ===
def load_vectorizer():
    loaded_vec = pickle.load(open('./vectorizer.sav', 'rb'))

    return loaded_vec


# === MAIN FUNCTION: PREDICTION FUNCTION ===
def make_prediction(input_text):

    model = load_model()
    vectorizer= load_vectorizer()
    
    # === Transform to DataFrame === 
    input_text = {'content':[input_text]}
    input_text = pd.DataFrame(input_text)
    
    # === Stem input text ===
    input_text['content'] = input_text['content'].apply(stemming)
    stemmed_text = input_text['content']

    # === Vectorize ===
    vec_text = vectorizer.transform(stemmed_text)

    # === Predict ===
    pred = model.predict(vec_text)

    if pred == 0:
        return 'Reliable News'
    elif pred == 1:
        return 'Unreliable News'