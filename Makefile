docker-push:
	docker push mohzaar/ms-kafka-order:latest
	docker push mohzaar/ms-kafka-shipping:latest

run-app:
	mvn clean package -Dmaven.test.skip=true
	docker-compose up -d
	cd frontend/ && npm install && npm start