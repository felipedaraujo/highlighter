(function(){  
  angular.module('myApp', ['ngRoute'])
    .controller('myCtrl', ['$scope', '$http', function($scope, $http) {
      
      $scope.wordCategories = [
        { key: 'adverbs', 
          name: 'Adverbs', 
          source: 'https://raw.githubusercontent.com/dariusk/corpora/master/data/words/adverbs.json' }, 
        { key: 'adjs', 
          name: 'Adjectives', 
          source: 'https://raw.githubusercontent.com/dariusk/corpora/master/data/words/adjs.json' }
      ];

      autosize($('textarea'));
      
      $scope.getSpeechData = function() {
        $http.get($scope.selectedCategory.source).success(function (data) {        
          console.log(data[$scope.selectedCategory.key]);
          
          $('textarea').highlightTextarea({
            words: data[$scope.selectedCategory.key],
            caseSensitive: false
          });
        });
      };

    }]);
})();
