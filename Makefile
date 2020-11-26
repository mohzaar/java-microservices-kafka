build-images:
	docker rmi ms-kafka/ordering || echo "Image does not exist"
	docker rmi ms-kafka/shipping || echo "Image does not exist"
	cd ordering/ && mvn package && docker build -t ms-kafka/ordering .	
	cd ..
	cd shipping/ && mvn package && docker build -t ms-kafka/shipping .	