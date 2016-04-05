/**
 * Created by ebad on 5.4.2016.
 */
function TimetableCtrl($scope, $http){
    $http.get('js/items.json').success(function(data){
        $scope.sessions = data.sessions;
    }).error(function (data) {
        console.log('error');
    });
}