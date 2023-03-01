export default {
	checkposition: () => {
		if(appsmith.store.jwt.user_position == 'Senior Staff'){
			navigateTo('Menu_senior', {});
			console.log(appsmith.store.jwt.user_position)
		}else if(appsmith.store.jwt.user_position == 'Junior Staff'){
			navigateTo('Menu_staff', {});
			console.log(appsmith.store.jwt.user_position)
		
		}
	},

}