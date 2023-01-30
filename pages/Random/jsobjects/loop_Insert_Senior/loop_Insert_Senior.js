export default {
	myVar1: [],
	myVar2: {},
	myFun1: async () => {
		await loop_date.myFun2();
		let date = await appsmith.store.dayofmounth
		for(let i=0;i < date.length;i++){
    	const element = date[i];
			storeValue('date',element);
			await insertSenior_work.run()
			console.log(element);
    }
	},
	myFun2: async () => {
		//use async-await or promises
	}
}