angular.module('MyfirstApp', [])
    .filter('removeHtml', function(){
        return function(texto){
            //expresion regular para eliminar el html
            return String(texto).replace(/<[^>]+>/gm,'');
        };
    })
    .controller('filtersController',function($scope){
        $scope.mi_html = '<p>hola mundo</p>';

        $scope.mi_htmlJson = {};
        $scope.mi_htmlJson.title = 'hola';
        $scope.mi_htmlJson.body = 'hola mundo';
        
        $scope.costo = 2;
    });