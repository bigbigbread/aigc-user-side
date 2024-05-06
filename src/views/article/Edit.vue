<script setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox, ElDialog } from 'element-plus'

import { useRoute } from 'vue-router'
import { artSave } from '@/api/article.js'
const onSuccess = () => {
  // 处理成功回调
}
const route = useRoute()
let article = route.query.articleContent

const saveArticle = async() => {
    console.log('成功调用方法');
    // 检查文章大纲是否为空
    if (!outline.value.trim()) {
        alert('文章不能为空');
        return; // 结束函数
    }

    const data = {
        "title": articleTitle.value,
        "outline": outline.value,
    }
    const res = await artSave(data)
    if (res.data.code === 200) {
        ElMessage.success('生成成功')
        const input = res.data.data;
        router.push({ name: 'edit', query: { input } });
    } else {
        console.log(res)
        ElMessage.error('生成失败: ' + res.data.message) // 显示错误信息
    }
    
}
</script>

<template>
  <page-container title="文案编辑"> 
    <textarea class="edit">{{ article }}</textarea>
    <div style="justify-content: center;display: flex;"><button class="saveArticle">保存</button>
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
