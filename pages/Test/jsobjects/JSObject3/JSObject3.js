export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		let all = [];
const ary = ['three', 'seven', 'eleven'];
		const ary1 = ['seven'];
const aryWithoutSeven = ary.filter(function(value) { return value != ary1 });
		all.push(aryWithoutSeven)
		console.log(all)
	},
	myFun2: async () => {
		//use async-await or promises
	}
}