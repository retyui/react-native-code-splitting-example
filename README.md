To test code splitting run the next command and check a `index.min.js` file

```sh
export BUILD_ENV=dev;
react-native bundle \
	--entry-file ./index.js \
	--bundle-output index.min.js \
	--minify true \
	--dev false;
npx prettier --write index.min.js;
```