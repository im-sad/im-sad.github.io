const data = [
  {
    about: 'о зарплате',
    text: 'Ну только если хуй в жопу, а бабки через год.'
  },
  {
    about: 'о капитализме',
    text: 'Если у компании нет денег и ничего более, то их нет.'
  },
  {
    about: 'о времени',
    text: 'Все произойдет ровно тогда когда сможет произойти.'
  },
  {
    about: 'о самостоятельности',
    text: 'Научись задавать правильные вопросы самому себе и будешь получать правильные ответы от других.'
  },
  {
    about: 'об утрате ',
    text: 'Потери уже свершились. Больше они уже быть не могут.'
  },
  {
    about: 'о бесмысленности бытия',
    text: 'Все уже написано 10 раз, вопросы заданы. Ответы я не получил.'
  },
  {
    about: 'об ошибках',
    text: 'Не ошибается только тот, кто ничего не делает.'
  },
  {
    about: 'о готовности отдавать',
    text: 'Жду вопросов и дам ответы.'
  },
  {
    about: 'о тупике полемики',
    text: 'Остановите поезд, я сойду.'
  },
  {
    about: 'о зависти',
    text: 'Тебе не понять, что такое обещание и ответсвенность.'
  },
  {
    about: 'о человеческой глупости',
    text: 'Ты самый тупой - это другое'
  },
  {
    about: 'о способности делиться',
    text: 'Все ради тебя, чтобы твою голову ебучую только зря не тревожить.'
  },
  {
    about: 'о самодисциплине',
    text: 'Оправдания, они как задница - найдутся у каждого'
  },
  {
    about: 'о деньгах',
    text: 'Деньги будут завтра, ну край в пятницу!'
  },
  {
    about: 'о неприятелях',
    text: 'Кто же из вас такой трус, такое ничтожное существо, что опускается до такого?'
  },
  {
    about: 'об относительности',
    text: 'Под определенным углом и земля плоская.'
  },
  {
    about: 'о людях',
    text: 'Вы живете в каком-то своем мире, полным предрассудков и заблуждений.'
  },
  {
    about: 'о дедлайнах',
    text: 'Сколько десятков раз я слушал: «будет готово в понедельник», и не было сделано НИКОГДА.'
  },
  {
    about: 'про обязательства',
    text: 'Взялся - тяни'
  },
  {
    about: 'про вопросы',
    text: 'Не всегда открытый вопрос описан предложением со знаком вопроса на конце.'
  },
]


document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('js-reload');
  const about = document.getElementById('js-about');
  const content = document.getElementById('js-content');

  btn.addEventListener('click', () => getCite());

  getCite();

  function getCite() {
    const citeNum = randomInteger(0, data.length - 1);

    about.innerHTML = data[citeNum].about;
    content.innerHTML = data[citeNum].text;
  }
});


function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.round(rand);
}