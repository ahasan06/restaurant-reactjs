
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, mean_absolute_error


# Mount Google Drive
from google.colab import drive
drive.mount('/content/drive')

# Upload your Kaggle API key (kaggle.json)
!mkdir ~/.kaggle
!cp /content/drive/MyDrive/kaggle.json ~/.kaggle/
!chmod 600 ~/.kaggle/kaggle.json

# Download the dataset
!kaggle datasets download -d uom190346a/sleep-health-and-lifestyle-dataset

# Unzip the dataset
!unzip sleep-health-and-lifestyle-dataset.zip -d /content/dataset

# Check the content of the dataset folder
!ls /content/dataset



# Load dataset
data = pd.read_csv('/content/dataset/Sleep_health_and_lifestyle_dataset.csv')

# Select features and target
X = data[['Age', 'Physical Activity Level', 'Stress Level', 'Heart Rate']]  # Example feature selection
y = data['Sleep Duration']

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Standardize the features
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)



class LinearRegressionWithImprovements:
    def __init__(self, learning_rate=0.005, iterations=5000, tolerance=0.01, batch_size=20, regularization=0.01):
        self.learning_rate = learning_rate
        self.iterations = iterations
        self.tolerance = tolerance
        self.batch_size = batch_size
        self.regularization = regularization
        self.weights = None
        self.bias = None
        self.cost_history = []

    def fit(self, X, y):
        n_samples, n_features = X.shape
        self.weights = np.zeros(n_features)
        self.bias = 0

        for i in range(self.iterations):
            indices = np.random.choice(n_samples, self.batch_size, replace=False)
            X_batch = X[indices]
            y_batch = y[indices]

            # Predictions and cost calculation
            y_pred = np.dot(X_batch, self.weights) + self.bias
            cost = (1 / (2 * self.batch_size)) * np.sum((y_pred - y_batch) ** 2) + (self.regularization / 2) * np.sum(self.weights ** 2)
            self.cost_history.append(cost)

            if cost < self.tolerance:
                print(f"Stopping early at iteration {i+1} with cost: {cost}")
                break

            # Gradients
            dw = (1 / self.batch_size) * np.dot(X_batch.T, (y_pred - y_batch)) + self.regularization * self.weights
            db = (1 / self.batch_size) * np.sum(y_pred - y_batch)

            # Parameter updates
            self.weights -= self.learning_rate * dw
            self.bias -= self.learning_rate * db

    def predict(self, X):
        return np.dot(X, self.weights) + self.bias
    




