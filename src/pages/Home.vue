<script setup lang="ts">
import { computed } from 'vue';
import Box from '../components/Box.vue';

const years = computed(() => {
  const start = new Date('2022-10-01');
  const now = new Date();
  return now.getFullYear() - start.getFullYear();
});
</script>

<template>
  <div class="flex flex-col gap-20">
    <article class="md:flex-row-reverse md:justify-end md:gap-12">
      <div class="flex flex-col gap-8">
        <h1 class="text-3xl">Hi, I’m Tahir</h1>
        <h2 class="w-auto md:max-w-[80%] leading-6 text-neutral-content">I am a <strong
            class="font-normal text-accent">Japanese backend developer</strong> with over
          <strong class="font-normal text-accent">{{ years }} year</strong> of experience. I am currently working
          with<strong class="font-normal text-accent"> Golang andTypescript</strong>.
          Outside of programming I like to gamble and take photographs.
        </h2>
        <div class="custom-breadcrumbs text-neutral-content">
          <ul>
            <li>
              <a href="https://github.com/pastc" rel="noreferrer" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/paste" rel="noreferrer" target="_blank">
                Gitlab
              </a>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg">Latest posts</h3>
        <router-link to="/posts" class="text-neutral-content text-sm underline decoration-dashed underline-offset-8"
          rel="noreferrer">See all posts
        </router-link>
      </header>
      <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 mx-auto">
        <Box title="Lorem Ipsum" subTitle="Cicero"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla risus vel velit egestas, eleifend volutpat risus semper. Aenean eu nulla ut augue euismod ornare vel a urna."
          url="404" />
        <Box title="Lorem Ipsum" subTitle="Cicero"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla risus vel velit egestas, eleifend volutpat risus semper. Aenean eu nulla ut augue euismod ornare vel a urna."
          url="404" />
        <Box title="Lorem Ipsum" subTitle="Cicero"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla risus vel velit egestas, eleifend volutpat risus semper. Aenean eu nulla ut augue euismod ornare vel a urna."
          url="404" />
        <Box title="Lorem Ipsum" subTitle="Cicero"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla risus vel velit egestas, eleifend volutpat risus semper. Aenean eu nulla ut augue euismod ornare vel a urna."
          url="404" />
      </section>
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg">Featured projects</h3>
        <router-link to="/projects" class="text-neutral-content text-sm underline decoration-dashed underline-offset-8"
          target="_self" rel="noreferrer">See all projects
        </router-link>
      </header>
      <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 justify-center items-stretch">
        <Box title="Vero" url="https://github.com/pastc/vero"
          :tags="['golang', 'algorithm', 'provably-fair', 'hash']" />
        <Box title="Petch" url="https://github.com/pastc/petch" :tags="['golang', 'screenfetch']" />
      </section>
    </article>

    <article class="flex flex-col gap-8">
      <header class="flex w-full flex-row justify-between gap-2">
        <h3 class="text-lg">Get in touch</h3>
      </header>
      <section class="flex flex-col gap-6">
        <h1 class="text-neutral-content">Follow me via my social links.</h1>
        <div class="text-neutral-content custom-breadcrumbs">
          <ul>
            <li>
              <a href="https://twitter.com/_pastc" rel="noreferrer" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </section>
    </article>
  </div>
</template>
