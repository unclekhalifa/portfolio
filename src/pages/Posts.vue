<script setup lang="ts">
import Post from '../components/Post.vue';
</script>

<template>
  <div>
    <Post title="Lorem Ipsum" content="Lorem ipsum dolor sit amet" url="/404" />
    <Post title="Lorem Ipsum" content="Lorem ipsum dolor sit amet" url="/404" />
  </div>
  {{ $route.params.id }}
</template>