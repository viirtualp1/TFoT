<template>
  <button type="button" class="tf-button" :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

type TfButtonTheme = 'accent' | 'secondary' | 'dark'

type TfButtonSizes = 'x-large'

const props = defineProps({
  theme: {
    type: String as PropType<TfButtonTheme>,
    default: 'accent',
  },
  rounded: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<TfButtonSizes>,
    default: '',
  },
})

const buttonClasses = computed(() => {
  const { theme, rounded, size } = props

  return [
    size && size,
    theme ? `is-${theme}` : 'is-dark',
    { 'is-rounded': rounded },
  ].filter(Boolean)
})
</script>

<style lang="scss" src="./TfButton.scss"></style>
