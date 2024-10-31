<template>
	<view class="content">
		<button @click="toHomePage">开始游戏</button>
	</view>
</template>

<script setup>
import { ref } from 'vue';
// import {storeToRefs} from 'pinia';
// import useCounterStore from '@/stores/counterStore/counter.js'


// const countStore = useCounterStore();
// const {count} = storeToRefs(countStore);
 
const toHomePage = () => {
	uni.navigateTo({
		url: '/pages/home/home'
	})
}



</script>

<style scoped lang="less">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 800px;
		height: 600px;
		background: #ffffe5;
		margin: 0 auto;
	}
</style>
