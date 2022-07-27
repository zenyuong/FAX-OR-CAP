# FAX or CAP
:shipit: Credits to: @ArthurNiah, @maegancp, @Seanabuklau, @zenyuong :shipit:

## Problem Statement 
Consumption of information on the internet can act as a double-edged sword. On one hand, it is easy to access, low cost, and can be disseminated rapidly to anyone else with access. On the other hand, for the exact same reasons, it enables the wide spread of **Fake News**! The extensive spread of fake news leads to extremely negative effects on individuals and society. Therefore, to protect our friends and families from its effects, the ability to accurately differentiate between reliable and fake news becomes an important topic. 

For the common person, discerning real from fake news comes down solely to their intuition and critical thinking, which unfortunately can be unreliable at times. What if there was a quick and reliable way to check whether a specific news source can be trusted or not. Hence, introducing **FAX or CAP**, a web application that allows users to verify news through the detection of keywords and phrases that suggests a questionable validity of the provided source. 


### Architectural Overview
![Architecture Diagram](https://github.com/zenyuong/HEAP-IS-FAKE-NEWS-/blob/691d63c4dfe365b8ae0cfa9c75385ff1d86fe8ae/User%20Input.jpeg)
### Tech-Stack
1. Languages used
    - **Python**
    - **Javascript**
2. Frontend
    - **ReactJS**  
    ReactJS is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. React also allows us to create reusable UI components. React allowed us to create a large web applications that can change data, without reloading the page thus giving it a sense of versatility. Additionally, the main purpose of React is to be fast, scalable, and simple.
    - **HTML**
    - **CSS**
3. Backend
    - **NodeJS**  
    - **ExpressJS**  
    Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It main benefit comes from it being small and robust enough for HTTP servers hence making it a great solution for single page applications, websites or applications. 
    - **Flask**  
    Flask is a lightweight web development framework for Python. It does not require any particular tools or libraries. We primarily used Flask as a way for our web application to interact with the Machine Learning Models which were written in Flask. 
    - **MongoDB**  
    MongoDB is a source-available, cross-platform, document-oriented database platform. It is classified as a NoSQl database program. For our web applications, MongoDB was uses as our main database to store vital information about news articles.
4. Machine Learning Model
    - **Tensorflow**  
    TensorFlow is a free and open-source software library for machine learning and artificial intelligence. For this project, it was primarily used for its text preprocessing capabilities along with its interfaces for training in deep neural networks.
    - **Scikit-learn**  
    Scikit-learn is a free software machine learning library for the Python programming language. In this project, the classification library provided to determine the validity of a new article. 
    - **Keras**  
    Keras is an open-source software library that provides a Python interface for artificial neural networks. Keras acts as a interface for the TensorFlow library.


## Application Walkthrough
### Installing the appropriate libraries
To begin installing all the requirements that we would need for the web application to work, simply execute the following command in the terminal of your IDE:
```
pip install -r requirements.txt
npm install
```  
### Starting the application
To get the application up and working you'll have to run three files on three separate terminals,   

1. Flask file: middle.py  
``` 
cd src/api/classifier_model/
python3 middle.py 
```

2. React file: App.js  
```
cd src/client_updated/src/
npm start
```

3. Express file: Index.js  
```
cd src/api/
node index.js
```
### User Scenario 1: User wants to check the validity of a news piece
1. User starts from the landing page   
**Insert Landing Page here**  
2. User clicks on the fake news detection icon  
**Insert user clicking on Fake News Icon**  
3. User inserts the HTML link of their choice into the input box  
**Insert picture of user adding in a link into the input box**  
4. The user gets greeted with a results page with whether the new is reliable along with keywords that might contribute to the result  
**Insert result page**  

### User Scenario 2: User checks for the sentiment analysis of a tweet
1. User starts from the landing page and wants to find the general sentiment of a particular hashtag  
**Insert Landing Page here**  
2. User clicks on the Twitter Icon  
**Insert user clicking on Twitter Icon**  
3. User inserts the hashtag of their choice into the input box  
**Insert picture of user adding in a hashtag into the input box**  
4. The user gets greeted with a results page with infomation on whether the sentiment on the tweet  
**Insert result page**  