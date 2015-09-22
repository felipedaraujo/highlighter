(function(){  
  
  angular.module('myApp', [])
    .controller('myCtrl', function($scope) {
      
      $('textarea').highlightTextarea({
        words: ['i love you', 'mel'],
        caseSensitive: false
      });

    });

})();
