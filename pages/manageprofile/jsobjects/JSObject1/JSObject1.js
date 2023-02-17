export default {
	myVar1: [],
	myVar2: {},
	close : async () => {
		await closeModal('Modal1')
		resetWidget('password')
		resetWidget('c_password')
	},
	myFun2: async () => {
		//use async-await or promises
	}
}