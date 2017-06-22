(function()
{
    angular
        .module("webapp")
        .config(Config);
        function Config($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "views/user/user.view.client.html",
                    controller: "UserController",
                    controllerAs: "model"
                })
            }
})();