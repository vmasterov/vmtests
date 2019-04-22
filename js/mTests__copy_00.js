/**
 * Created by Vlad on 11.07.2017.
 */
$( function(){
  
  var testBlock                   = $( '.test-block' ),
      variantsBlock               = $( '.test-block__variants' ),
      questIndex                  = 0,
      // questText                   = $( '.test-block__header_quest-txt' ),
      buttNext                    = $( '.button.button_next' ),
      arrayAnsweredQuestions      = [],
      arrayRandomOrderOfQuestions = createArrayWithRandomItems( questionsArray.length, 0, questionsArray.length - 1 ),
      arrayRandomOrderOfVariants  = [];
      // variants                    = '';
  
  createVariants();
  createQuestion();
  
  // selectBox.change( chooseTest );
  buttNext.on( 'click', goToNextQuest );
  
  
  /*************/
  /* FUNCTIONS */
  /*************/
  
  //goToNextQuest
  function goToNextQuest( event ){
    event.preventDefault();
    
    handlingAnswer( event );
    questIndex++;
    
    slideEffect();
    
    if( questIndex >= questionsArray.length ){
      showResults();
      return;
    }
    
    /*createQuestion();
    createVariants();*/
    
    heightAnimation();
  }
  
  /////////////////////////
  
  // createQuestion
  function createQuestion(){
    var questionNumbers = arrayRandomOrderOfQuestions.length;
    
    $( '.quest-index' )
      .text( questIndex + 1 );
    
    $( '.quest-all' )
      .text( questionNumbers );
    
    $( '.test-block__header_quest-txt' )
      .text( questionsArray[ arrayRandomOrderOfQuestions[ questIndex ] ].question );
  }
  
  /////////////////////////
  
  // createVariants
  function createVariants(){
    var variants         = $( '<ul/>', { 'class': 'test-block__list' } ),
        variantItem,
        variantInput,
        variantInputName = 'answer',
        variantLabel;
    
    arrayRandomOrderOfVariants = createArrayWithRandomItems(
      questionsArray[ arrayRandomOrderOfQuestions[ questIndex ] ].variants.length,
      0,
      questionsArray[ arrayRandomOrderOfQuestions[ questIndex ] ].variants.length - 1
    );
    
    for( var i = 0, l = questionsArray[ arrayRandomOrderOfQuestions[ questIndex ] ].variants.length; i < l; i++ ){
      variantItem = $( '<li/>', {
        'class': 'variant__list_item'
      } );
      
      if( questionsArray[ arrayRandomOrderOfQuestions[ questIndex ] ].type !== 'radio' ){
        variantInputName = 'variant_' + i;
      }
      
      variantInput = $( '<input/>', {
        'type' : questionsArray[ arrayRandomOrderOfQuestions[ questIndex ] ].type,
        'id'   : 'variant_' + i,
        'value': questionsArray[ arrayRandomOrderOfQuestions[ questIndex ] ].variants[ arrayRandomOrderOfVariants[ i ] ],
        'name' : variantInputName,
        'class': 'variant__list_item_inp variant__list_item_' + questionsArray[ arrayRandomOrderOfQuestions[ questIndex ] ].type
      } );
      
      variantLabel = $( '<label>', {
        'for'  : 'variant_' + i,
        text   : questionsArray[ arrayRandomOrderOfQuestions[ questIndex ] ].variants[ arrayRandomOrderOfVariants[ i ] ],
        'class': 'variant__list_item_label'
      } );
      
      variantItem
        .append( variantInput )
        .append( variantLabel )
        .appendTo( variants );
    }
    
    variantsBlock.html( variants );
  }
  
  /////////////////////////
  
  // handlingAnswer
  function handlingAnswer( event ){
    var questionObject = new QuestionObject( questionsArray[ arrayRandomOrderOfQuestions[ questIndex ] ] ),
        $variants      = $( event.target )
          .closest( '.tests-form' )
          .find( '.variant__list_item' );
    
    questionObject.arrayRandomOrderOfVariants = arrayRandomOrderOfVariants;
    questionObject.variants    = $variants;
    questionObject.userAnswers = $variants.find( 'input:checked' );
    
    var userLength       = questionObject.userAnswers.length,
        rightLength      = questionObject.rightAnswers.length,
        variantsLength   = questionObject.variants.length,
        variantsInputs   = questionObject.variants.find( '.variant__list_item_inp' ),
        rightAnswerCount = 0,
        wrongAnswer,
        i,
        j,
        l,
        le;
    
    arrayAnsweredQuestions.push( questionObject );
    
    // User not answer
    if( !userLength ){
      for( i = 0, l = rightLength; i < l; i++ ){
        for( j = 0, le = variantsLength; j < le; j++ ){
          if( questionObject.rightAnswers[ i ] === variantsInputs[ j ].value ){
            $( questionObject.variants[ j ] ).addClass( 'answer-right' );
            break;
          }
        }
      }
      
      questionObject.right = false;
      return;
    }
    // User not answer
    
    // An array of user answers and an array of correct answers are not equal
    if( userLength !== rightLength ){
      for( i = 0, l = userLength; i < l; i++ ){
        wrongAnswer = true;
        for( j = 0, le = rightLength; j < le; j++ ){
          if( questionObject.userAnswers[ i ].value === questionObject.rightAnswers[ j ] ){
            wrongAnswer = false;
            $( questionObject.userAnswers[ i ] )
              .parent( '.variant__list_item' )
              .addClass( 'answer-notfull' );
            break;
          }
        }
        if( wrongAnswer ){
          $( questionObject.userAnswers[ i ] )
            .parent( '.variant__list_item' )
            .addClass( 'answer-wrong' );
        }
      }
      
      for( i = 0, l = rightLength; i < l; i++ ){
        for( j = 0, le = variantsLength; j < le; j++ ){
          if( !$( questionObject.variants[ j ] ).hasClass( 'answer-notfull' ) && questionObject.rightAnswers[ i ] === variantsInputs[ j ].value ){
            $( questionObject.variants[ j ] )
              .addClass( 'answer-right' );
            break;
          }
        }
      }
      
      questionObject.right = false;
      return;
    }
    // An array of user answers and an array of correct answers are not equal
    
    // An arrays are equal
    for( i = 0, l = userLength; i < l; i++ ){
      wrongAnswer = true;
      for( j = 0, le = rightLength; j < le; j++ ){
        if( questionObject.userAnswers[ i ].value === questionObject.rightAnswers[ j ] ){
          rightAnswerCount++;
          wrongAnswer = false;
          $( questionObject.userAnswers[ i ] )
            .parent( '.variant__list_item' )
            .addClass( 'answer-notfull' );
          break;
        }
      }
      if( wrongAnswer ){
        $( questionObject.userAnswers[ i ] )
          .parent( '.variant__list_item' )
          .addClass( 'answer-wrong' );
      }
    }
    
    // All answers right
    if( rightAnswerCount === rightLength ){
      $( '.answer-notfull' )
        .removeClass( 'answer-notfull' )
        .addClass( 'answer-right' );
      
      questionObject.right = true;
      return;
    }
    // All answers right
    
    for( i = 0, l = rightLength; i < l; i++ ){
      for( j = 0, le = variantsLength; j < le; j++ ){
        if( !$( questionObject.variants[ j ] )
            .hasClass( 'answer-notfull' ) &&
          questionObject.rightAnswers[ i ] === variantsInputs[ j ].value ){
          $( questionObject.variants[ j ] ).addClass( 'answer-right' );
          break;
        }
      }
    }
    
    questionObject.right = false;
    // An arrays are equal
  }

/////////////////////////

// showResults
  function showResults(){
    var testResults  = $( '<div />', {
          'class': 'test-results'
        }),
        rightAnswers = 0,
        wrongAnswers = 0;
    
    for( var i = 0, l = arrayAnsweredQuestions.length; i < l; i++ ){
      if( arrayAnsweredQuestions[ i ].right ){
        rightAnswers++;
      }
      else{
        wrongAnswers++;
      }
  
      var question = $( '<div />', {
            'class': 'question-text test-block__header',
            text   : arrayAnsweredQuestions[ i ].question
          });
      testResults.append( oneAnswerBlock( question, arrayAnsweredQuestions[ i ].variants, arrayAnsweredQuestions[ i ].right ) );
    }
    
    $( '.page-name' ).text( 'Результаты теста: ' + $( '.page-name' ).text() );
    
    $( '.mtests__container' )
      .prepend(
        '<div class="row statistics plate-style">' +
        
          '<div class="col-md-3 statistics__item">' +
            '<div class="statistics__percent">' + (rightAnswers / arrayAnsweredQuestions.length * 100) + '%' + '</div>' +
          '</div>' +
        
          '<div class="col-md-4 statistics__item">' +
            '<div class="statistics__questions">' +
              '<div class="statistics__questions_item statistics__questions_all">Количество вопросов: <strong>'+ arrayAnsweredQuestions.length +'</strong></div>' +
              '<div class="statistics__questions_item statistics__questions_right">Количество верных ответов: <strong>' + rightAnswers + '</strong></div>' +
              '<div class="statistics__questions_item statistics__questions_wrong">Количество неверных ответов: <strong>' + wrongAnswers + '</strong></div>' +
            '</div>' +
          '</div>' +
        
          '<div class="col-md-5 statistics__item">' +
            '<div class="statistics__legend">' +
              '<div class="statistics__legend_item statistics__legend_right"><span class="answer-marker answer-marker_right"></span>Верный ответ</div>' +
              '<div class="statistics__legend_item statistics__legend_wrong"><span class="answer-marker answer-marker_wrong"></span>Неверный ответ</div>' +
              '<div class="statistics__legend_item statistics__legend_nofull"><span class="answer-marker answer-marker_notfull"></span>Частично верный ответ</div>' +
            '</div>' +
          '</div>' +
        
        '</div>'
      );
    
    $( '.mtests__wrapper' )
      .html( '' )
      .append( testResults );
  }

/////////////////////////

// Get answer string
  function oneAnswerBlock( question, $answeredLI, answerRight ){
    var answerBlockClass = '';
    
    if( answerRight ){
      answerBlockClass = ' one-question__right';
    }
    else{
      answerBlockClass = ' one-question__wrong';
    }
    
    var oneQuestion = $( '<div />', {
          'class': 'one-question plate-style' + answerBlockClass
        }),
        
        testResultsList = $( '<ul />', {
          'class': 'test-results__list test-block__list'
        }),
        
        resultClass;
    
    $answeredLI.each( function( index ){
      resultClass = $( this ).attr( 'class' ).replace( /variant__list_item/, '' );
      testResultsList.append( '<li class="test-results__list_item variant__list_item ' + resultClass + '">' + $( this ).find( '.variant__list_item_label' ).text() + '</li>' );
    });
  
    oneQuestion
      .append( question )
      .append( testResultsList );
    
    // return testResultsList;
    return oneQuestion;
  }
// Get answer string


// createArrayWithRandomItems
  function createArrayWithRandomItems( arrLength, min, max ){
    var randomArray = [],
        rand        = null,
        re          = null;
    
    while( randomArray.length !== arrLength ){
      rand = Math.floor( min + Math.random() * ( max + 1 - min ) );
      re   = new RegExp( rand, 'i' );
      
      if( re.test( randomArray.join( ',' ) ) ){
        continue;
      }
      
      randomArray.push( rand );
    }
    return randomArray;
  }

/////////////////////////
  
  // chooseTest
  function chooseTest(){
    selectedTest = $( this )
      .find( 'option:selected' )
      .text();
    
    // console.log( selectedTest );
  }

// QuestionObject
  function QuestionObject( questObj ){
    this.question     = questObj.question;
    this.variants     = questObj.variants;
    this.rightAnswers = questObj.rightAnswers;
    this.userAnswers  = null;
    this.right        = null;
  }
  
  function slideEffect(){
    var coord           = testBlock.offset();
    var questFormMargin = {
      'top'   : parseInt( testBlock.css( 'margin-top' ) ),
      'right' : parseInt( testBlock.css( 'margin-right' ) ),
      'bottom': parseInt( testBlock.css( 'margin-bottom' ) ),
      'left'  : parseInt( testBlock.css( 'margin-left' ) )
    };
    
    testBlock
      .attr( 'data-prev-heigth', testBlock.height() )
      .clone()
      .addClass( 'test-block__clone' )
      .css( {
        'position': 'absolute',
        'top'     : coord.top - questFormMargin.top,
        'left'    : coord.left,
        'width'   : testBlock.width(),
        'height'  : testBlock.height()
      })
      .appendTo( $( 'body' ) )
      .animate( {
        'opacity': '0.4',
        'left'   : '-100%'
      }, 1000, function(){
        $( this )
          .remove();
      } );
    
    testBlock
      .css( {
      'opacity': '0'
    })
      .animate( {
        'opacity': '1'
      }, 1000 );
  }
  
  function heightAnimation(){
    testBlock
      .css({
        'height': ''
      });
    
    var prevHeigth = $( '.test-block' ).attr( 'data-prev-heigth' ),
        currentHeight = testBlock.height();
    
    console.log( prevHeigth, currentHeight );
    
    testBlock
      .css({
        'height': prevHeigth
      })
      .animate({
        'height': currentHeight
      }, 500);
  }
});