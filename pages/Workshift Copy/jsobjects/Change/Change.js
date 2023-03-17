export default {
	DefaultMode: async () => {
		storeValue("mode", "edit");
	},
	EditMode: async () => {
		storeValue("mode", "edit");
	},
	SaveMode: async () => {
			updatework_total.run();
			updatework_detail.run();
			await storeValue("mode","save");
	}
}