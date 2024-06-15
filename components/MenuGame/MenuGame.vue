<template>
  <div class="menu-game">
    <TfButton class="menu-game__large-button" size="x-large" rounded>
      Новая игра
    </TfButton>

    <TfButton class="menu-game__chapter" theme="secondary" rounded>
      Выбрать главу
    </TfButton>

    <TfButton class="menu-game__large-button" size="x-large" rounded>
      Настройки
    </TfButton>
  </div>
</template>

<script setup lang="ts">
import { TfButton } from '@/components/ui'
</script>

<style lang="scss" src="./MenuGame.scss"></style>
