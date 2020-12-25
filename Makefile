build-images:
	docker rmi ms-kafka/ordering || echo "Image does not exist"
	docker rmi ms-kafka/shipping || echo "Image does not exist"
	cd ordering/ && mvn package && docker build -t ms-kafka/ordering .	
	cd ..
	cd shipping/ && mvn package && docker build -t ms-kafka/shipping .	

build-db:
	cd db/ && docker build -t postgres-databases .

clean-build:
	docker-compose rm
	docker rmi microservices-kafka_shipping-service || echo "Image does not exist"
	docker rmi microservices-kafka_ordering-service || echo "Image does not exist"
	docker rmi microservices-kafka_postgres || echo "Image does not exist"
	mvn clean package -Dmaven.test.skip=true
	docker-compose build

provision-cluster-db:
	kubectl create -f kube/postgres/postgres-configmap.yml
	kubectl create -f kube/postgres/postgres-storage.yml
	kubectl create -f kube/postgres/postgres-deployment.yml
	kubectl create -f kube/postgres/postgres-service.yml

clean-cluster-db:
	kubectl delete service postgres
	kubectl delete deployment postgres
	kubectl delete configmap postgres-config
	kubectl delete persistentvolumeclaim postgres-pv-claim
	kubectl delete persistentvolume postgres-pv-volume

clean-kubectl:
	kubectl delete svc ordering-service shipping-service
	kubectl delete deployment ordering-service shipping-service postgres

deploy:
	kubectl create -f kube/postgres-deployment.yaml,kube/ordering-service-deployment.yaml,kube/shipping-service-deployment.yaml,kube/ordering-service-service.yaml,kube/shipping-service-service.yaml
