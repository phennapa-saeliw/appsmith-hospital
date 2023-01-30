export default {
	myVar1: [],
	myVar2: {},
	myFun1: async () => {
		let junior = MultiSelect1.selectedOptionValues;
		//console.log(junior.length)
		await Get_workid.run();
		let headwork = Get_workid.data
			for(let i=0;i < headwork.length;i++){
			for(let x=0;x < junior.length;x++){
				const element = headwork[i];
      	const elementx = junior[x];
				storeValue('detailworkid',element.work_id);
				storeValue('detaile_id',elementx);
				await InsertJunior_work.run();
				console.log(element,elementx);
      }
    }
	},
	myFun2: async () => {
		//use async-await or promises
	}
}