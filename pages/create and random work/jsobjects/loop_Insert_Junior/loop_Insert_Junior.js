export default {
	myVar1: [],
	myVar2: {},
	myFun1: async () => {
		await Get_workid.run();
		let totalstaff = appsmith.store.staffname;
		let headwork = Get_workid.data
		for(let i=0;i < headwork.length;i++){
			for(let x=0;x < totalstaff.length;x++){
				const element = headwork[i];
      	const elementx = totalstaff[x];
				storeValue('detailworkid',element.work_id);
				storeValue('detaile_id',elementx.E_id);
				await InsertJunior_work.run();
				console.log(element,elementx);
      }
    }
	},
	myFun2: async () => {
		//use async-await or promises
	}
}