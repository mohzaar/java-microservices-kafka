FROM openjdk:15.0.1-jdk-buster 
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} ordering.jar
ENTRYPOINT ["java","-jar","/ordering.jar"]
EXPOSE 8080
