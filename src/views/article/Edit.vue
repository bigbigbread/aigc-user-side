<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox, ElDialog } from 'element-plus'

const onSuccess = () => {
  // 处理成功回调
}
</script>

<template>
  <page-container title="文案编辑">
    <div class="edit">{{ $route.params.inputData }}</div>
    <div style="justify-content: center;display: flex;"><button class="saveArticle">保存</button>
    </div>
    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
  </page-container>
</template>

<style lang="scss" scoped>
.edit{
  height: 500px;
}
.saveArticle{
  bottom: 0;
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 15px;
}
</style>
