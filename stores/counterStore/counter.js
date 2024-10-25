import {defineStore} from 'pinia';

const useCounterStore = defineStore('counter', {
	state: () => {
		return {
			count: 0,
		}
	},
	getters: {
		
	},
	actions: {
		increment() {
			this.count ++;
		},
		changeCount(payload) {
			this.count = payload;
		}
	}
});

export default useCounterStore;