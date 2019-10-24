if(process.env.BUILD_ENV === 'dev'){
	module.exports = require('./a.dev.js')
}else{
	module.exports = require('./a.default.js')
}