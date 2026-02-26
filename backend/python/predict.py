import os
import sys
import cv2
import joblib
import numpy as np
from utils.feature_extractor import extract_features
from utils.face_detector import detect_face

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "..","python", "model", "svm_model.pkl")
MODEL_PATH = os.path.abspath(MODEL_PATH)

print("Loading model from:", MODEL_PATH)

model = joblib.load(MODEL_PATH)

image_path= sys.argv[1]
frame = cv2.imread(image_path)

print("frame path:",frame)
gray, faces = detect_face(frame)

if len(faces) == 0:
    print("No Face Detected")
    sys.exit()

(x,y,w,h) = faces[0]
face = gray[y:y+h, x:x+w]

features = extract_features(face)
prediction = model.predict([features])

print(prediction[0])