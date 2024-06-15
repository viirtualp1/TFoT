<template>
  <div class="menu-page">
    <div class="menu-page__background" />

    <div class="menu-page__content container">
      <h1 class="menu-page__title">The First of Them</h1>

      <MenuGame />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MenuGame } from '@/components/MenuGame'
</script>

<style lang="scss" src="./MenuPage.scss"></style>
