🎭 Facial Expression Detection System

A Full Stack Facial Expression Recognition (FER) Web Application built using:

🧠 Machine Learning (SVM Model)

🐍 Python (OpenCV, Scikit-Learn)

🌐 Node.js + Express

⚛ React (Create React App)

📷 Real-time Image Processing

🚀 Project Overview

This project detects human facial expressions from images and predicts emotions such as:

😊 Happy

😢 Sad

😠 Angry

😐 Neutral

😮 Surprise

😨 Fear

The system uses:

Face Detection using OpenCV

Feature Extraction

SVM (Support Vector Machine) classifier

REST API integration between Python and Node.js

React frontend for user interaction

🏗 Project Structure
FER-Project/
│
├── backend/
│   ├── python/
│   │   ├── train_model.py
│   │   ├── predict.py
│   │   ├── utils/
│   │   └── model/
│   ├── uploads/
│   └── server.js
│
├── frontend/
│   └── (React App)
│
└── README.md
⚙️ Tech Stack
🔹 Backend

Node.js

Express.js

Python

OpenCV

Scikit-learn

Joblib

🔹 Frontend

React (Create React App)

Axios

🔹 Machine Learning

Support Vector Machine (SVM)

Custom feature extraction

Face detection using Haar Cascade

🧠 How It Works

User uploads an image from frontend.

Image is sent to Node.js backend as Base64.

Backend saves image temporarily.

Node executes Python predict.py.

Python:

Detects face

Extracts features

Loads trained SVM model

Predicts expression

Prediction is returned to frontend.

Result is displayed to user.

🛠 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Nizamuddin8053/Facial-Expression-Detection.git
cd Facial-Expression-Detection
2️⃣ Backend Setup
cd backend
npm install
Setup Python Environment
cd python
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
3️⃣ Train Model (If model not included)

⚠ Model file is not included in repository due to size limitations.

To train model:

python train_model.py

This will generate:

svm_model.pkl
4️⃣ Start Backend Server
cd backend
npm start
5️⃣ Frontend Setup
cd frontend
npm install
npm start
📌 Important Notes

dataset/ folder is not included in GitHub.

svm_model.pkl is not included (exceeds GitHub size limit).

Uploads folder is ignored.

Make sure Python path is correctly configured in backend.

🎯 Features

✔ Face Detection
✔ Expression Classification
✔ Full-stack Integration
✔ REST API communication
✔ Clean project structure
✔ GitHub-ready architecture

📈 Future Improvements

Real-time webcam prediction

Deep Learning (CNN) model

Deploy using Docker

Deploy on AWS/Render

Add confidence score (%)

Multi-face detection

👨‍💻 Author

Nizamuddin Khan
MCA Student – NIT Bhopal
AI & Full Stack Enthusiast

⭐ If You Like This Project

Give it a ⭐ on GitHub!
