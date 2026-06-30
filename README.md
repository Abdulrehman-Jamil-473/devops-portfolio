#  DevOps Portfolio - Docker Static Website

This project is my first Docker deployment as part of my DevOps learning journey.

##  Project Overview

I created a responsive portfolio website using HTML, CSS, and JavaScript. The application was containerized with Docker and deployed on an AWS EC2 Linux instance using Apache.

##  Technologies Used

- HTML5
- CSS3
- JavaScript
- Docker
- Apache
- AWS EC2
- Linux

##  Features

- Responsive Portfolio Website
- Docker Container
- Apache Web Server
- Docker Hub Image
- AWS EC2 Deployment

##  Run the Project

Run the container:

```bash
docker run -td  --name devops-portfolio -p 80:80 ubuntu
docker exec -it devops-portfolio /bin/bash
```

Build the Docker container image:

docker commit devops-portfolio portfol_img

install apache inside the container 

apt-get update ubuntu -y
apt-get install apache2 -y 

-->start the service<-- 

service apache2 start

Open in browser:

```
http://localhost:8080
```

## Author

**Abdur Rehman Jameel**

Aspiring DevOps Engineer

Currently learning Docker, AWS, Linux, Jenkins, Kubernetes, and CI/CD.
