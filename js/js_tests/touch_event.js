/**
 * Created by Vlad on 11.07.2017.
 */
var questionsArray = [
  {
    question    : 'Когда возникает событие touchcancel?',
    variants    : [
      'Событие возникает тогда, когда точка касания была нарушена в соответствии с реализацией.',
      'Событие возникает, когда точка соприкосновения выходит за рамки элемента.',
      'Событие возникает после разрыва прикосновения к элементу.'
    ],
    type        : 'radio',
    rightAnswers: [ 'Событие возникает тогда, когда точка касания была нарушена в соответствии с реализацией.' ],
    explanations:'Все браузеры также могут запускать событие touchcancel (<a href="http://www.w3.org/TR/touch-events/#the-touchcancel-event">http://www.w3.org/TR/touch-events/#the-touchcancel-event</a>), чтобы указать, что прикосновение прекратилось ненормально. Это может произойти, например, если фокус удаляется со страницы (например, при активированном меню браузера) или для любого количества других определений, связанных с реализацией. Причина, по которой это отдельное событие, заключается в том, что вы можете не запускать какое-либо действие (например, нажатие, которое заканчивается с помощью touchhend, должно активировать что-то, но тот, который заканчивается touchcancel, не должен).'
  },
  
  {
    question    : 'Какое событие возникает если касание происходит в пределах элемента?' ,
    variants    : [ 'touchleave',
                    'touchenter',
                    'touchmove',
                    'touchstart'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ 'touchenter' ],
    explanations:'-'
  },
  
  {
    question    : 'Какое событие возникает после разрыва прикосновения к элементу?',
    variants    : [ 'touchleave',
                    'touchend',
                    'touchcancel'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ 'touchend' ],
    explanations:'-'
  },
  
  {
    question    : 'Какое значение будут содержать свойства клавиш-модификаторов: altkey, ctrlKey, metaKey, shiftKey?',
    variants    : [ 'Булево значение. True — если соответствующая клавиша нажата.',
                    'Булево значение. False — если соответствующая клавиша нажата.',
                    '1 — если соответствующая клавиша нажата. ',
                    '0 — если соответствующая клавиша нажата. '
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ 'Булево значение. True — если соответствующая клавиша нажата.' ],
    explanations:'-'
  },
  
  {
    question    : 'Какие точки касания попадут в TouchList при возникновении события типа touchmove?',
    variants    : [ 'Точки касания, которые изменились с момента последнего события.',
                    'Точки касания, в которых появилось взаимодействие с поверхностью экрана.',
                    'Точки касания, на которых прекратилось взаимодействие с поверхностью экрана ( т. е. набор точек,  где прервалось касание пальцами).'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ 'Точки касания, которые изменились с момента последнего события.' ],
    explanations:'-'
  },
  
  {
    question    : 'Какие из перечисленных свойств содержит объект TouchEvent?',
    variants    : [ 'Touches',
                    'TargetTouches',
                    'ChangedTouches',
                    'TouchesX',
                    'TouchesY',
                    'ChangeTouches',
                    'TargetTouch'
    ],
    type        : 'checkbox', // radio/checkbox
    rightAnswers: [ 'Touches', 'TargetTouches', 'ChangedTouches' ],
    explanations:'<p>Каждое событие включает в себя три списка точек прикосновения (списки пальцев):\n' +
    'touches: список всех точек прикосновения на экране.\n' +
    'targetTouches: список точек на текущем элементе.\n' +
    'changedTouches: список пальцев, участвующих в текущем событии. Например, в событии touchend это тот палец, который был убран.</p>'
  },
  
  {
    question    : 'Какие координаты содержат свойства screenX/screenY объекта Touch?',
    variants    : [
      'Координаты точки касания относительно левого/верхнего края экрана пользователя.',
      'Координаты точки касания относительно левого/верхнего края окна просмотра, не включая смещения прокрутки.',
      'Координаты точки касания относительно левого/верхнего края окна просмотра, в том числе смещения прокрутки.'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ 'Координаты точки касания относительно левого/верхнего края экрана пользователя.' ],
    explanations:    '-'
  },
  
  {
    question    : 'Какие координаты содержат свойства clientX/clientY объекта Touch?',
    variants    : [ 'Координаты точки касания относительно левого/верхнего края окна просмотра, не включая смещения прокрутки.',
                    'Координаты точки касания относительно левого/верхнего края экрана пользователя.',
                    'Координаты точки касания относительно левого/верхнего края документа.'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ 'Координаты точки касания относительно левого/верхнего края окна просмотра, не включая смещения прокрутки.' ],
    explanations:'-'
  },
  
  {
    question    : 'Какие координаты содержат свойства pageX/pageY объекта Touch?',
    variants    : [ 'Координаты точки касания относительно левого/верхнего края документа.',
                    'Координаты точки касания относительно левого/верхнего края экрана пользователя.',
                    'Координаты точки касания относительно левого/верхнего края окна просмотра, не включая смещения прокрутки.'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ 'Координаты точки касания относительно левого/верхнего края документа.' ],
    explanations:'-'
  }
];