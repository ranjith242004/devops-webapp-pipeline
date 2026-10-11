# Dockerized Web Application

## Project Overview
A simple Node.js web application containerized using Docker and hosted on an AWS EC2 Ubuntu instance.

## Technologies Used
- AWS EC2
- Ubuntu Linux
- Node.js
- Express.js
- Docker
- Git and GitHub

## Application Features
- Runs a Node.js web server using Express.js.
- Packaged into a Docker image.
- Runs inside a Docker container.
- Accessible through port 3000.

## Project Structure
```text
dockerized-web-app/
├── index.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
└── README.md
```

## Run Locally with Docker

### 1. Clone the repository
```bash
git clone https://github.com/ranjith242004/devops-webapp-pipeline.git
cd devops-webapp-pipeline
```

### 2. Build the Docker image
```bash
docker build -t dockerized-web-app:1.0 .
```

### 3. Run the container
```bash
docker run -d --name web-app -p 3000:3000 dockerized-web-app:1.0
```

### 4. Test the application
Open the following URL in your browser:

`http://localhost:3000`

Expected output:

`Hello! Dockerized Web Application is running successfully.`

## AWS Deployment
The application was tested on an AWS EC2 Ubuntu instance using Docker. To access it remotely, configure the EC2 Security Group to allow inbound TCP traffic on port 3000 from your intended source.

## Future Enhancements
- Push the Docker image to Docker Hub.
- Configure Jenkins for CI/CD automation.
- Deploy the application to Kubernetes.

## Author
Ranjith V
