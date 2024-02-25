<script lang="ts" setup>
const backgroundStyles = ref<any[]>([
  { is: 'PageOne', style: { background: '#000' } },
  { is: 'PageTwo', style: { background: '#000' } },
  { is: 'PageThree', style: { background: '#FFF' } },
  { is: 'PageFourth', style: { background: '#000' } }
])
</script>

<template>
  <div class="container">
    <div
      v-for="(bg, index) in backgroundStyles"
      :key="index"
      :class="`section section-${index}`"
      :style="bg.style"
    >
      <page-one v-if="bg.is === 'PageOne'" />
      <page-two v-if="bg.is === 'PageTwo'" />
      <page-three v-if="bg.is === 'PageThree'" />
      <page-fourth v-if="bg.is === 'PageFourth'" />
    </div>
  </div>
</template>

<style scoped>
</style>
