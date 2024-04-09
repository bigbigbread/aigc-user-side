<script setup>
    import { ref } from 'vue'
    import { ElMessage, ElMessageBox, ElDialog } from 'element-plus'
    import { onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    const input1 = ref('')
    const input2 = ref('')
    const generatedText = ref('')
    const dialogVisible = ref(false)
    const textGenerated = ref(false)

    const openDialog = () => {
        dialogVisible.value = true
    }
    // 添加逻辑
    const onAddArticle = () => {
        articleEditRef.value.open({})
    }
    const generateText = () => {
        generatedText.value = `${input1.value} - ${input2.value}`
        dialogVisible.value = false
        textGenerated.value = true
    }

    const saveText = () => {
        ElMessage.success("文本已保存： " + generatedText.value);
        textGenerated.value = false
    }

    const closeDialogs = () => {
        dialogVisible.value = false
        textGenerated.value = false
    }
    const showSidebar = ref(false);

    const toggleSidebar = () => {
        showSidebar.value = !showSidebar.value;
    };
    const closeSidebar = () => {
        showSidebar.value = false; // 关闭侧边栏
    };
    const onSuccess = () => {
        // 处理成功回调
    }
</script>

<template>
    <page-container title="文案分类">
        <span class="createArticle">
            营销文案
            <button @click="toggleSidebar">生成</button>
        </span>
        <div v-if="showSidebar" class="sidebar">
            <!-- 侧边栏内容 -->
            <el-button @click="closeSidebar" type="text" icon="el-icon-close"></el-button>
            <div>
                <p>
                    文章标题
                </p>
                <p>
                    <input placeholder="请输入标题"></input>
                </p>
            </div>
            <div>
                <p>
                    文案要求
                </p>
                <p>
                    <input placeholder="请输入内容"></input>
                </p>
            </div>
            <p>
                <input id="dag" placeholder="待生成"></input>
            </p>
            <div>
                <p>
                    <el-button @click="" type="primary">生成大纲</el-button>
                </p>
            </div>
            <p>
                <router-link to="/article/edit">进一步生成</router-link>
            </p>
        </div>

        <channel-edit ref="dialog" @success="onSuccess"></channel-edit>
    </page-container>
</template>


<style lang="scss" scoped>
    .sidebar {
        width: 700px;
        background-color: lightgray;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        z-index: 999;
    }
    div p{
        margin-top: 30px;
        text-align: center;
    }
    input{
        width:80%;
        height:30px;
    }
    #dag{
        width: 80%;
        height: 300px;
        text-align:center;
    }
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