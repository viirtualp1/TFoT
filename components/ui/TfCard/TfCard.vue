<template>
  <div class="tf-card" :class="{ 'is-block': block }">
    <div class="tf-card__content">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" src="./TfCard.scss"></style>

<script setup lang="ts">
defineProps({
  block: {
    type: Boolean,
    default: false,
  },
})
</script>
