$( function(){
  
  (function(){
    var selectTest       = $( '.wrapper-select-test' ),
        selectedItem     = $( '.selected-item' ),
        selectList       = $( '.select-list' ),
        selectedItemText = selectList
          .find( 'li a' )
          .first()
          .text();
    
    if( selectTest.length ){
      $( document ).on( 'click', function( event ){
          // event.preventDefault();
          
          var target     = event.target,
              targetTest = $( target ).closest( selectTest );
          
          if( targetTest.length && !targetTest.hasClass( 'active-select' ) ){
            selectList.slideUp( 'fast' );
            selectTest.removeClass( 'active-select' );
            
            targetTest
              .addClass( 'active-select' )
              .find( selectList )
              .slideDown( 'fast' );
          }
          
          else if( $( target ).is( 'a' ) ){
            targetTest
              .removeClass( 'active-select' )
              .attr( 'title', $( target ).text() )
              .find( selectedItem )
              .text( $( target ).text() )
              .end()
              .find( selectList )
              .slideUp( 'fast' );
          }
          
          else if( targetTest.length && targetTest.hasClass( 'active-select' ) ){
            targetTest
              .removeClass( 'active-select' )
              .find( selectList )
              .slideUp( 'fast' );
          }
          
          else{
            selectList.slideUp( 'fast' );
            selectTest.removeClass( 'active-select' );
          }
        } );
    }
  })();
  
  // Call new sticky footer
  $( window ).ready( newSticky );
  $( window ).resize( newSticky );
});

// New sticky footer
function newSticky(){
  var _window = $( window ),
      content = $( '.mtests__container' ),
      contentPosition = content.position(),
      footer = $( '#footer' ),
      footerPosition = footer.position();
  
  if( Math.round( contentPosition.top + content.height() ) >= footerPosition.top && Math.round( footerPosition.top + footer.height()) >= _window.height() ){
    footer.css({ 'position': 'relative' });
  }
  else{
    footer.css({ 'position': 'fixed' });
  }
}
// New sticky footer

// Actual year in footer
function getFooterYear( datePlace ){
  var actualYear = new Date().getFullYear();
  datePlace.text( actualYear );
}
getFooterYear( $( '.footer-year' ) );
// Actual year in footer