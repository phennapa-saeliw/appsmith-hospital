export default {
	myVar1: [],
	myVar2: {},
	searchstaff: async () => {
		await Search_Staff1.run( () =>{
		showModal('searchstaff');
		let workstaff = Search_Staff1.data;
		storeValue('namestaffwork1',workstaff);
		//console.log(appsmith.store.namestaff)
		});
		await Search_Staff2.run( () =>{
		let workstaff2 = Search_Staff2.data;
		storeValue('namestaffwork2',workstaff2);
		//console.log(appsmith.store.namestaff)
		});
		await Search_Staff3.run( () =>{
		let workstaff3 = Search_Staff3.data;
		storeValue('namestaffwork3',workstaff3);
		//console.log(appsmith.store.namestaff)
		});
	}
}