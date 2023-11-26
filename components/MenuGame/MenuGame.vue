<template>
  <div class="menu-game">
    <tf-button class="menu-game__new-game" theme="dark" size="x-large" rounded>
      Новая игра
    </tf-button>

    <tf-button class="menu-game__chapter" theme="secondary" rounded>
      Выбрать главу
    </tf-button>

    <tf-button class="menu-game__new-game" theme="dark" size="x-large" rounded>
      Настройки
    </tf-button>
  </div>
</template>

<script setup lang="ts">
import TfButton from '@/components/ui/TfButton/TfButton.vue'
</script>

<style lang="scss" src="./MenuGame.scss"></style>
