angular.module('sharkWebsApp', [])
.controller('SharkWebsController', function() {
    var vm = this;
    vm.buyVisible = false;
    vm.sellVisible = false;

    vm.toggleDisplay = function(type) {
        if (type === 'buy') {
            vm.buyVisible = !vm.buyVisible;
        } else if (type === 'sell') {
            vm.sellVisible = !vm.sellVisible;
        }
    };
});
