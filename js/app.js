(function(){  
  
  angular.module('myApp', [])
    .controller('myCtrl', function($scope) {
      
      $('textarea').highlightTextarea({
        words: ['mel i love you <3', 'i love you too, felipedearaujo'],
        caseSensitive: false
      });

    });

})();
