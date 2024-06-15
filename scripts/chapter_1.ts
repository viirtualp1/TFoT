// types
import type { ChapterData } from '@/types/script'

// backgrounds
import background1 from '@/assets/chapter1/bg1.jpg'

enum Characters {
  POLINA = 'Полина',
  ALEXANDER = 'Александр',
  BOSS = 'Начальство',
  GAME = 'Игра',
}

const chapter_1: ChapterData = {
  id: 'chapter1',
  title: 'Био Вирус: Фобос',
  scenes: [
    {
      id: 'scene_1_start',
      background: background1,
      dialogue: [
        {
          character: Characters.POLINA,
          text: 'Так, мы на месте',
        },
        {
          character: Characters.BOSS,
          text: 'Отлично, отсюда поступил последний сигнал отряда, найдите все, что сможете, и сообщите нам',
        },
        {
          character: Characters.POLINA,
          text: 'Есть, до связи',
        },
        {
          character: Characters.ALEXANDER,
          text: 'Ну что, видишь что-то?',
        },
        {
          character: Characters.POLINA,
          text: 'Неа, кромешная тьма, прилетели ночью, вот же повезло нам',
        },
        {
          character: Characters.ALEXANDER,
          text: 'Ты слышала?',
        },
        {
          character: Characters.POLINA,
          text: 'Нет, может, ветер?',
        },
        {
          character: Characters.ALEXANDER,
          text: 'Возможно',
        },
        {
          character: Characters.POLINA,
          text: 'Смотри!',
        },
        {
          character: Characters.ALEXANDER,
          text: 'О боже... Кто это так с ними? Они же все...',
        },
        {
          character: Characters.GAME,
          text: 'Выбегают собаки-мутанты, куда побежать?',
          choices: [
            {
              text: 'Налево',
              nextSceneId: '',
            },
            {
              text: 'Направо',
              nextSceneId: '',
            },
          ],
        },
      ],
    },
    {
      id: 'scene_1_1',
      background: '',
      dialogue: [],
    },
    {
      id: 'scene_1_2',
      background: '',
      dialogue: [],
    },
  ],
}

export default chapter_1
