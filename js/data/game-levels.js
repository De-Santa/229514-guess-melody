import audio from './audio';

const gameLevels = [
  {
    type: `artist`,
    audio: audio[1].src,
    answers: [
      {
        artist: audio[0].artist,
        image: audio[0].image,
        correctAnswer: false
      },
      {
        artist: audio[1].artist,
        image: audio[1].image,
        correctAnswer: true
      },
      {
        artist: audio[2].artist,
        image: audio[2].image,
        correctAnswer: false
      }
    ]
  },
  {
    type: `artist`,
    audio: audio[1].src,
    answers: [
      {
        artist: audio[0].artist,
        image: audio[0].image,
        correctAnswer: false
      },
      {
        artist: audio[1].artist,
        image: audio[1].image,
        correctAnswer: true
      },
      {
        artist: audio[2].artist,
        image: audio[2].image,
        correctAnswer: false
      }
    ]
  },
  {
    type: `artist`,
    audio: audio[5].src,
    answers: [
      {
        artist: audio[2].artist,
        image: audio[2].image,
        correctAnswer: false
      },
      {
        artist: audio[5].artist,
        image: audio[5].image,
        correctAnswer: true
      },
      {
        artist: audio[4].artist,
        image: audio[4].image,
        correctAnswer: false
      }
    ]
  },

  {
    type: `artist`,
    audio: audio[2].src,
    answers: [
      {
        artist: audio[2].artist,
        image: audio[2].image,
        correctAnswer: true
      },
      {
        artist: audio[1].artist,
        image: audio[1].image,
        correctAnswer: false
      },
      {
        artist: audio[4].artist,
        image: audio[4].image,
        correctAnswer: false
      }
    ]
  },
/*
  {
    type: `genre`,
    genre: `Jazz`,
    answers: [
      {
        audio: audio[0].src,
        correctAnswer: true
      },
      {
        audio: audio[5].src,
        correctAnswer: false
      },
      {
        audio: audio[3].src,
        correctAnswer: false
      },
      {
        audio: audio[2].src,
        correctAnswer: false
      },
    ]
  },

  {
    type: `artist`,
    audio: audio[4].src,
    answers: [
      {
        artist: audio[1].artist,
        image: audio[1].image,
        correctAnswer: false
      },
      {
        artist: audio[2].artist,
        image: audio[2].image,
        correctAnswer: false
      },
      {
        artist: audio[4].artist,
        image: audio[4].image,
        correctAnswer: true
      }
    ]
  },

  {
    type: `artist`,
    audio: audio[1],
    answers: [
      `Пелагея`,
      audio[1].artist,
      `Краснознаменная дивизия имени моей бабушки`
    ],
    correctAnswer: audio[1].artist
  },

  {
    type: `genre`,
    genreType: `инди-рок`,
    audio: [
      audio[5].src,
      audio[2].src,
      audio[3].src,
      audio[4].src
    ],
    correctAnswer: audio[5].artist
  },
  {
    type: `artist`,
    audio: audio[1],
    answers: [
      `Пелагея`,
      audio[1].artist,
      `Краснознаменная дивизия имени моей бабушки`
    ],
    correctAnswer: audio[1].artist
  },

  {
    type: `genre`,
    genreType: `инди-рок`,
    audio: [
      audio[5].src,
      audio[2].src,
      audio[3].src,
      audio[4].src
    ],
    correctAnswer: audio[5].artist
  },*/
];

export default gameLevels;
