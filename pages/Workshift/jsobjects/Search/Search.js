export default {
	myVar1: [],
	myVar2: {},
	searchstaff: async () => {
		await Search_Staff1.run( () =>{
		showModal('searchstaff');
		let workstaff = Search_Staff1.data;
			storeValue('namestaffwork1',workstaff);
			console.log(Search_Staff1.data.l)
		});
	}
}