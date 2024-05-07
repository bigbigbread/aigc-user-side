<script setup>
import { ref,onMounted } from 'vue'
import { ElMessage, ElMessageBox, ElDialog } from 'element-plus'

import { useRoute } from 'vue-router'
import { artSave } from '@/api/article.js'
const onSuccess = () => {
  // 处理成功回调
}
const route = useRoute()
let article = route.query.articleContent
let title = route.query.articleTitle
let id = route.query.articleId
let time = route.query.time

onMounted(() => {
  const input = document.getElementById("title");
  if (input) {
    input.value = title;
  }
});


const saveArticle = async() => {
    console.log('成功调用方法');
    var title = document.getElementById("title")
    var content = document.getElementById("content")
    // 检查文章是否为空
    if (!title.value.trim()) {
        alert('文章标题不能为空');
        return; // 结束函数
    }
    if (!content.value.trim()) {
        alert('文章不能为空');
        return; // 结束函数
    }

    const data = {
        "title": title.value,
        "content": content.value,
        "createdTime":time,
        "id":id
    }
    const res = await artSave(data)
    if (res.data.code === 200) {
        ElMessage.success('保存成功')
    } else {
        console.log(res)
        ElMessage.error('保存失败: ' + res.data.message) // 显示错误信息
    }
    
}
</script>

<template>
  <page-container title="文案编辑"> 
    <div class="titleEdit">
      <p>
        标题
        <input id="title" type="text" value="" >
      </p>
    </div>
    <textarea class="edit" id="content">{{ article }}</textarea>
    <div style="justify-content: center;display: flex;"><button class="saveArticle" @click="saveArticle">保存</button>
    </div>
    <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
  </page-container>
</template>
<style lang="scss" scoped>
div p{
  margin-top:0;
  
}
.titleEdit{
  display: flex;
}
.edit {
  height: 500px;
  height: 460px;
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
