var app = angular.module('Objetivos', []);
        app.controller('ObjetivosController', function() {
            var vm=this;

            vm.filtrar = function filtrar(){
                const queryString = window.location.search;
                const urlParams = new URLSearchParams(queryString);
                vm['id'] = urlParams.get('Id');
            };
        });