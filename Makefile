dev:
	docker-compose build && docker-compose up

test:
	docker-compose -f docker-compose.tests.yml build && docker-compose -f docker-compose.tests.yml up
