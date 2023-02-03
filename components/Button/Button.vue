<template>
  <button class="bg-transparent py-4 px-5 rounded-[50px] text-white border border-orange text-2xl leading-33">
    {{ label }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    label: {
      type: String,
      requried: true,
    },
  },
}
</script>
