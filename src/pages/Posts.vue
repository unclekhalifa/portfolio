<script setup lang="ts">
import { useRoute } from 'vue-router';
import PostBox from '../components/PostBox.vue';
import { marked } from 'marked';
import { onMounted, ref } from 'vue'

const route = useRoute();
const img = ref<string>("");

const posts = 1;

onMounted(() => {
  if (route.params.id) {
    if (parseInt(route.params.id[0]) <= posts) {
      import(/* @vite-ignore */`.../public/posts/${route.params.id}.md?raw`).then((res) => {
        img.value = res.default;
      }).catch((err) => {
        img.value = err;
      })
    }
  }
})
</script>

<template>
  <div v-if="img">
    <article class="prose" v-html="marked.parse(img)" />
  </div>
  <div v-else>
    <PostBox title="Writing my gambling library in Golang" subTitle="Tahir Murata"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla risus vel velit egestas, eleifend volutpat risus semper."
      url="/posts/1" />
    <PostBox title="Lorem Ipsum"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla risus vel velit egestas, eleifend volutpat risus semper."
      url="/" />
  </div>
</template>