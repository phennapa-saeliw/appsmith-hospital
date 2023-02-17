export default {
	myVar1: [],
	myVar2: {},
	updateprofile: async () => {
		await Update_profile_name.run();
		await Getuser.run();
		storeValue('jwt',Getuser.data[0])
		closeModal('editname')
		console.log(Getuser.data[0])
	},
	change: async () => {
			if(password.text.length <= 7){
			showAlert('Error กรุณาใส่พาสเวิร์ด 8 ตัวขึ้นไป','error')
				} else{
		if ((password.text) === (c_password.text))
			console.log(Update_profile_EmailPassword.run()) ,showAlert(' เปลี่ยนพาสเวิร์ดสำเร็จ.' , 'success') , closeModal('Modal1'),resetWidget('password'),resetWidget('c_password')  ;	
		else (console.log 
    	(showAlert(' กรุณากรอกพาสเวิร์ดให้ตรงกัน.', 'error')))
		}
                                                                            		
	}
}