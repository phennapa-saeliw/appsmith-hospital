export default {
	myVar1: [],
	myVar2: {},
	randomadd: async () => {
		showModal('Waitprocess1');

		await loop_Insert_Senior.loopsenior();
		await loop_Insert_Junior.insert_J_loop();
		await closeModal('Waitprocess1');
		await showModal('Success')
	},
	selectadd: async () => {
		showModal('Waitprocess1');
		await loop_Insert_Senior.selectsenior();
		await Select_Insert_Junior.Select_Junior();
		await closeModal('Waitprocess1');
		await showModal('Success')
	}
}