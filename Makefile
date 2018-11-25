install: npm-install gen-app-key

npm-install
	dev run --rm web npm i

gen-app-key:
	dev run --rm web npx adonis key:generate
