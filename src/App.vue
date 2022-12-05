<template>
  <component :is="layout">
    <router-view></router-view>
  </component>
</template>

<script setup lang="ts">
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";

  const route = useRoute();
  const layout = computed(() => {
    return route.meta.layout
  })
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<style scoped>

</style>
