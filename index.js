import './a.js'

console.log('main file');

if(process.env.BUILD_ENV === 'test'){
	console.log('dev menu');
}

if(process.env.NODE_ENV === 'test'){
	require('react');
}