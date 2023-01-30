export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		Query1.run();
		employee.run();
		Schedules.run();
		randomliststaff.Ramdomstaff();
		randomliststaff.Ramdomworkshift();
		const seniorid = appsmith.store.senior_id;
		const getseniorid = [];
		const workshift = appsmith.store.Schedulesid
		getseniorid.push(seniorid,workshift);
		if(getseniorid[1] == 3){
			const staff1 = [10002];
			const i = [];
			const result = _.without(getseniorid, staff1);
			i.push(result)
			console.log(i);
    }else if(getseniorid[1] == 2){
			
		}else{

		}
	},
	myFun2: async () => {
		//use async-await or promises
	}
}