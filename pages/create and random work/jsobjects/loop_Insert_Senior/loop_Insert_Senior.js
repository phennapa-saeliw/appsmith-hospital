export default {
	myVar1: [],
	myVar2: {},
	loopsenior: async () => {
		await loop_date.myFun2();
		let date = await appsmith.store.dayofmounth
		for(let i=0;i < date.length;i++){
    	const element = date[i];
			storeValue('date',element);
			await insertSenior_work.run()
			console.log(element);
    }
	},
	selectsenior: async () => {
		await loop_date.myFun2();
		let date = await appsmith.store.dayofmounth
		for(let i=0;i < date.length;i++){
    	const element = date[i];
			storeValue('date',element);
			await Insert_Select_Senior.run(()=>{}, ()=>{showAlert("เพิ่มข้อมูลไม่ได้")});
			console.log(element);
    }
	},
}