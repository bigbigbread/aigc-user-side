<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox, ElDialog } from 'element-plus'

import { useRoute } from 'vue-router'
const onSuccess = () => {
  // 处理成功回调
}
const route = useRoute()
let article = route.query.articleContent
</script>

<template>
  <page-container title="文案编辑">
    <textarea class="edit" v-model="article"></textarea>
    <div style="justify-content: center; display: flex">
      <button class="saveArticle">保存</button>
    </div>
    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>

    @@ -18,17 +20,19 @@
  </page-container>
</template>
<style lang="scss" scoped>
.edit {
  height: 500px;
  height: 480px;
  width: 100%;
  overflow: auto;
}
.saveArticle {
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
