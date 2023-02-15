export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		let totalstaff = appsmith.store.staffname;
		let dayof = appsmith.store.dayofmounth;
		for(let i=0;i < dayof.length;i++){
			for(let x=0;x < totalstaff.length;x++){
				const element = dayof[i];
      	const elementx = totalstaff[x];
				console.log(element,elementx);
      }
    }
	},
	myFun2: async () => {
		ref
	}
}