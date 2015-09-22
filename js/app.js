(function(){  
  
  angular.module('myApp', [])
    .controller('myCtrl', function($scope) {
      
      $('textarea').highlightTextarea({
        words: ['mel i love you <3'],
        caseSensitive: false
      });

    });

})();
