export interface ChoiceData {
  text: string
  nextSceneId: string
}

export interface DialogData {
  character: string
  text: string
  choices?: ChoiceData[]
}

export interface SceneData {
  id: string
  background: string
  dialogue: DialogData[]
}

export interface ChapterData {
  id: string
  title: string
  scenes: SceneData[]
}
