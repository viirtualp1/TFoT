<template>
  <component
    :is="component"
    :to="to"
    type="button"
    class="tf-button"
    :class="buttonClasses"
  >
    <slot />
  </component>
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
  to: {
    type: String,
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

const component = computed(() => (props.to ? 'router-link' : 'button'))
</script>

<style lang="scss" src="./TfButton.scss"></style>
