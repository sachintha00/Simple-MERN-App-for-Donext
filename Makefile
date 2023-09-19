include .env

up-f:
	docker compose -f docker-compose-dev.yml up --build --remove-orphans
up:
	docker compose -f docker-compose-dev.yml up -d --build --remove-orphans
down:
	docker compose -f docker-compose-dev.yml down --remove-orphans
shell:
	docker exec -it mern_app_dev sh

up-prod-f:
	docker compose -f docker-compose-production.yml up --build --remove-orphans
up-prod:
	docker compose -f docker-compose-production.yml up -d --build --remove-orphans
down-prod:
	docker compose -f docker-compose-production.yml down --remove-orphans
shell-prod:
	docker exec -it mern_app_prod sh
ssh:
	ssh -i $(SSH_PRIVATE_KEY_PATH) ${SSH_STRING}
copy-files:
	scp -r -i $(SSH_PRIVATE_KEY_PATH) \
	docker-compose-production.yml \
	${SSH_STRING}:/root/
build:
	docker build \
	-t mern_app:prod \
	-f ./docker_files/production.Dockerfile .