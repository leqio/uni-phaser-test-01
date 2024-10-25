<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<view class="count">
			count: {{count}}
		</view>
		<button type="default" @click="countStore.increment">incrementCount</button>
		<button type="default" @click="countStore.changeCount(100)" >changeCount</button>
		<button @click="toHomePage">home</button>
	</view>
</template>

<script setup>
import { ref } from 'vue';
import {storeToRefs} from 'pinia';
import useCounterStore from '@/stores/counterStore/counter.js'

const title = ref('Hello');

const countStore = useCounterStore();
const {count} = storeToRefs(countStore);
 
const toHomePage = () => {
	uni.navigateTo({
		url: '/pages/home/home'
	})
	console.log('111');
}



</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
