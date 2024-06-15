<template>
  <div class="game-page">
    <TfBackground />

    <TfContent class="game-page__content">
      <div class="game-page__header">
        <TfCard class="game-page__name" block>
          {{ currentCharacter }}
        </TfCard>

        <TfCard block>
          {{ currentDialogueText }}
        </TfCard>
      </div>

      <tf-button @click="nextDialogue">Далее</tf-button>
    </TfContent>
  </div>
</template>

<style lang="scss" src="./GamePage.scss"></style>

<script setup lang="ts">
import { TfCard, TfBackground, TfContent, TfButton } from '@/components/ui'
import chapter_1 from '@/scripts/chapter_1'

const currentIndex = ref(0)

const currentDialogue = computed(() => {
  return chapter_1.scenes[0].dialogue
})

const currentCharacter = computed(() => {
  return currentDialogue.value[currentIndex.value].character
})

const currentDialogueText = computed(() => {
  return currentDialogue.value[currentIndex.value].text
})

function nextDialogue() {
  currentIndex.value++
}
</script>
