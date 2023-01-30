export default {
	myVar1: [],
	myVar2: {},
	encodePassword: (password) => {
		//write code here
		var md = forge.md.md5.create();
		md.update(password);
		console.log(md.digest().toHex());
		return md.digest().toHex();
		// output: 9e107d9d372bb6826bd81d3542a419d6
	},
	myFun2: async () => {
		//use async-await or promises
	
	}
}