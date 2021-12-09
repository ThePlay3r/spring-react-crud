# Spring React Crud Application
Simple CRUD application written in Spring Boot as RESTful backend and ReactJS as front-end, utilizing Microservices with
Spring Cloud (Eureka).

# Technology used
- Java 11
- Kotlin
- Spring (Boot, Data, Cloud)
- ReactJS
- Gradle

# Repository Content
## /registry
Eureka server for registering the microservices.

## /config
Config server for global configuration located in Git repository at https://github.com/ThePlay3r/spring-react-crud-config

## /api-gateway
API Gateway for the microservices to use.

## /users
RESTful microservice exposing the `/users` EP.

## /frontend
ReactJS frontend communicating with the API Gateway.

## setup_databases.sql
SQL script for creating the databases required to run the application.

# How to run
## Requirements
- Java 11+
- MySQL Server
- Gradle
- Node

## Steps
- Clone the repository
- Fill in the login credentials for MySQL in `/users/src/main/resources/application.yml`
- Start the Spring Boot applications (`registry` > `config` > `api-gateway` > `users`) with `./gradlew bootRun`
- Start the ReactJS application with `npm start`
- You should be able to access the application on `http://localhost:3000`

