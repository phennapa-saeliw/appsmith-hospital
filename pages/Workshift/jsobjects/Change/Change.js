export default {
	DefaultMode: async () => {
		storeValue("mode", "edit");
	},
	EditMode: async () => {
		storeValue("mode", "edit");
	},
	SaveMode: async () => {
			await storeValue("mode","save");
	}
}