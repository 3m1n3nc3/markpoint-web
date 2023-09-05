<template>
  <section
    class="page-title"
    :style="{ backgroundImage: `url(/images/background/${$route.meta.image || 'image-1'}.jpg)` }"
  >
    <div class="auto-container">
      <h1>{{ $route.meta.title }}</h1>
      <ul class="page-breadcrumb">
        <template v-for="treeItem in tree">
          <li :key="treeItem.name + '-a'" v-if="treeItem.name !== $route.name">
            <a :href="treeItem.href" @click="location.href = treeItem.href">
              {{ treeItem.title }}
            </a>
          </li>
          <li v-else :key="treeItem.name">{{ treeItem.title }}</li>
        </template>
      </ul>
    </div>
  </section>
</template>
<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const router = useRouter()
const location = window.location
const tree = computed(() => {
  let tr = [...(route.meta.tree || []), route.name]
  tr.unshift('home.page')
  return tr.map((name) => {
    const item = router.resolve({ name })
    return {
      name,
      href: item.href,
      title: item.meta.title
    }
  })
})
</script>
