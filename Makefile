# Host local commands: These commands can be used from the host machine
install: npm-install gen-app-key

npm-install:
	@dev run --rm web npm i

gen-app-key:
	@dev run --rm web npx adonis key:generate

# Dockerfile commands, these commands should only be used in the Dockerfile
dev:
	@npx concurrently -k -p '[{name}]' -n 'Adonis,WebPack' \
		-c 'green.bold,cyan.bold' \
		'make server-dev' \
		'make watch-webpack'

prod: webpack-prod server-prod

watch-webpack:
	@npx webpack --mode development --watch

webpack-prod:
	@npx webpack --mode production

server-dev:
	@adonis serve --dev

server-prod:
	@adonis serve
