import { defineStore } from 'pinia'
import { ref } from 'vue'
export const articleStore = defineStore(
  'article',
  () => {
    const id = ref('')
    const title = ref('')
    const content = ref('')
    const createdTime = ref('')
    const setarticle = (newarticle) => {
      id.value = newarticle.id
      title.value = newarticle.title
      content.value = newarticle.content
      createdTime.value = newarticle.createdTime
    }

    return {
      id,
      title,
      content,
      createdTime,
      setarticle
    }
  },
  {
    persist: true
  }
)
