export default {
	checkposition: () => {
		if(appsmith.store.jwt.Positon = 'Senior Staff'){
			navigateTo('Menu_senior', {});
		}else{
			navigateTo('Menu_staff', {});
		}
	},

}