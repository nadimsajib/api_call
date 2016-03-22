var app = angular.module('apiCall', []);
app.controller('apiCallController', function($scope,$http) {
    $scope.submit = function(){
        if ($scope.company_id != null && $scope.sm_type_id != null) {
            $scope.url = "http://socialdata.edutechsolutionsbd.com/api/v1/posts/123/2/2";
            //$scope.url = "http://social.etsb.dev/api/v1/posts/123/2/2";
            $http({
                method: 'jsonp',
                url: $scope.url,
                params: {
                    format: 'jsonp',
                    callback: 'JSON_CALLBACK'
                }
            }).then(function (response) {
                $scope.postData = response.data['posts'];
                //alert(response.data);
            });
        }
    }
});
