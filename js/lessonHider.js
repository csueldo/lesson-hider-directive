angular.module('directivePractice')
  .directive('lessonHider', function(){

    return {
      restrict: "E" ,
      templateUrl: "lessonHtml/lessonHider.html" ,
      link: function( scope, element, attributes ){
        
      }
    };

  });
