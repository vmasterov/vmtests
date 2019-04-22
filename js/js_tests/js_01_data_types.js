var questionsArray = [
  {
    question    : 'Что вернёт typeof null?',
    variants    : ['"object"',
                   '"number"',
                   '"string"',
                   '"null"',
                   '"NaN"'
                  ],
    type        : 'radio', // radio/checkbox
    rightAnswers: ['"object"'],
    explanations:'<p>Это официально признанная ошибка в языке, которая сохраняется для совместимости.</p><p>На самом деле null – это не объект, а отдельный тип данных.</p>'
  },
  {
    question    : 'Какой синтаксис верный: typeof x или typeof(x)?',
    variants    : ['Оба верны',
                   'Первый',
                   'Второй',
                   'Не один'
                  ],
    type        : 'radio', // radio/checkbox
    rightAnswers: ['Оба верны'],
    explanations:''
  }
];