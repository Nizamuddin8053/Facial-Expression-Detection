import os
import cv2
import numpy as np
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from skimage.feature import hog
import joblib

DATASET_PATH = "../../dataset"

X = []
y = []

labels = os.listdir(DATASET_PATH)


for label in labels:
    folder_path = os.path.join(DATASET_PATH, label)

    for img_name in os.listdir(folder_path):
        
        img_path = os.path.join(folder_path, img_name)

        img = cv2.imread(img_path, cv2.IMREAD_GRAYSCALE)
        img = cv2.resize(img, (64, 64))
        

        features = hog(img, pixels_per_cell=(8,8),
                       cells_per_block=(2,2),
                       feature_vector=True)

        X.append(features)
        y.append(label)

X = np.array(X)
y = np.array(y)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = SVC(kernel='linear')
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))

joblib.dump(model, "model/svm_model.pkl")