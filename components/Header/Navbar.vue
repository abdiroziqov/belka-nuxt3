<template>
  <div class="flex gap-x-[70px]">
    <nuxt-link
        v-for="(item, idx) in headerLinks"
        :to="item.link"
        :key="idx"
        class="link-underline transition-200 hover:text-orange relative py-2 font-medium text-2xl leading-33 drop-shadow-xs"
    >
      {{ item.title }}
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const headerLinks = [
  {
    id: 0,
    title: 'О нас',
    link: '/about',
  },
  {
    id: 1,
    title: 'Кейсы',
    link: '/about',
  },
  {
    id: 2,
    title: 'Блог',
    link: '/about',
  },
  {
    id: 3,
    title: 'Услуги',
    link: '/about',
  },
]
</script>
<style scoped>
.link-underline:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #fc631b;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.link-underline:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>