<template>
	<view>
		<!-- canvas容器 -->
		<view id="game-container"></view>
	</view>
</template>

<script setup>
import startGame from '@/game/index.js';
import {onMounted, onUnmounted, ref } from 'vue';

const game = ref();

onMounted(() => {
    // 加载canvas
   game.value = startGame('game-container');
})

onUnmounted(() => {
    // 销毁游戏实例
    if (game.value) {
        game.value.destroy(true);
        game.value = null;
    }
});

</script>

<style scoped>

</style>