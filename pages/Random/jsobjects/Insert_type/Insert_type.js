export default {
	myVar1: [],
	myVar2: {},
	randomadd: async () => {
		showModal('Waitprocess1');
		await loop_Insert_Senior.myFun1();
		await loop_Insert_Junior.myFun1();
		closeModal('Waitprocess1');
	},
	selectadd: async () => {
		showModal('Waitprocess1');
		await loop_Insert_Senior.myFun1();
		await Select_Insert_Junior.myFun1();
		closeModal('Waitprocess1');
	}
}