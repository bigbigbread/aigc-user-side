<script setup>
    import { ref } from 'vue'
    import { ElMessage, ElMessageBox, ElDialog, ElButton } from 'element-plus'
    import * as ElementPlusIconsVue from '@element-plus/icons-vue'
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
        isSidebarOpen.value = !isSidebarOpen.value;
    };
    const closeSidebar = () => {
        showSidebar.value = false; // 关闭侧边栏
        isSidebarOpen.value = false;
    };
    const isSidebarOpen = ref(false);

    
    // 在你的Vue组件中定义一个方法来获取文章标题和文章内容，并调用接口请求
    const generateOutline = () => {
        console.log('成功调用 generateOutline 方法');

        data= ()=> {
    return {
        articleTitle: '',
        articleContent: ''
    };
};
        // 获取文章标题和文章内容
        
      const articleTitle = this.articleTitle;
      const articleContent = this.articleContent;
    

        // 检查文章标题是否为空
        if (articleTitle.trim()) {
            alert('文章标题不能为空');
            return; // 结束函数
        }
        // 整合为JSON数据
        const data = {
            title: articleTitle,
            description: articleContent
        };

        // 调用接口请求
        artOutlineService(data)
            .then(response => {
                // 输出大纲内容到input标签
                const dagInput = document.getElementById('dag');
                dagInput.value = response.outline; // 假设接口返回的大纲内容在response中的outline字段中

                // 处理接口请求成功的逻辑
                console.log('大纲生成成功', response);
            })
            .catch(error => {
                // 处理接口请求失败的逻辑
                console.error('大纲生成失败', error);
            });
    };

    const onSuccess = () => {
        // 处理成功回调
    }
</script>

<template>
    <div class="overlay" v-if="isSidebarOpen" @click="closeSidebar"></div>
    <page-container title="文案分类">
        <span class="createArticle">
            营销文案
            <button @click="toggleSidebar">生成</button>
        </span>
        <div v-if="showSidebar" class="sidebar">
            <!-- 侧边栏内容 -->
            <el-button @click="closeSidebar" type="info" circle="true"><el-icon size="30"><Close /></el-icon></el-button>
            <div>
                <p>
                    文章标题 <input v-model="articleTitle" placeholder="请输入标题"></input>
                </p>
            </div>
            <div>
                <p>
                    文案要求 <input v-model="articleContent" placeholder="请输入内容"></input>
                </p>
            </div>
            <div>
                <p>
                    <el-button @click="generateOutline" type="primary">生成大纲</el-button>
                </p>
            </div>
            <p>
                <input id="dag" placeholder="待生成"></input>
            </p>
            <p>
                <router-link to="/article/edit">
                    <el-button @click="" type="primary">
                        生成文案
                    </el-button>
                </router-link>
            </p>
        </div>

    </page-container>
</template>


<style lang="scss" scoped>
    .sidebar {
        width: 700px;
        background-color: white;
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
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色 */
        z-index: 999; /* 确保遮罩层在最上层 */
    }
    input {
        width: 80%;
        height: 30px;
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
    router-link{
        text-decoration: none; /* 去掉下划线 */
    }
</style>