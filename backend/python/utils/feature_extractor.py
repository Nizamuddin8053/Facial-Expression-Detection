import cv2
from skimage.feature import hog

def extract_features(face_img):
    face_img = cv2.resize(face_img, (64, 64))
    features = hog(face_img,
                   pixels_per_cell=(8,8),
                   cells_per_block=(2,2),
                   feature_vector=True)
    return features