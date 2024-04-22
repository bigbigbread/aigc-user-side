<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox, ElDialog } from 'element-plus'

const onSuccess = () => {
  // 处理成功回调
}
</script>

<template>
  <page-container title="文案编辑">
    <div>{{ $route.params.inputData }}</div>
    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
  </page-container>
</template>

<style lang="scss" scoped>
.createArticle {
  display: inline-block;
  font-size: 30px;
  font-weight: bold;
  padding-top: 30px;
  width: 200px;
  height: 150px;
  text-align: center;
  background-color: #cfe2ff;
  position: relative;
}

.createArticle button {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;
}
</style>
