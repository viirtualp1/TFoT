<template>
  <div class="menu-page">
    <TfBackground />

    <TfContent>
      <h1 class="menu-page__title">The First of Them</h1>

      <MenuGame />
    </TfContent>
  </div>
</template>

<script setup lang="ts">
import { MenuGame } from '@/components/MenuGame'
import { TfContent, TfBackground } from '@/components/ui'
</script>

<style lang="scss" src="./MenuPage.scss"></style>
