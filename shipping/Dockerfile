FROM openjdk:15.0.1-jdk-buster 
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} shipping.jar
ENTRYPOINT ["java","-jar","/shipping.jar"]
EXPOSE 8080
