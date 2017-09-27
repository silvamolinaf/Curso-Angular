/** 
 * @memberof moduleName
 * @ngdoc controller
 * @name XxxxController
 */
class SampleController {

    /**
         * Constrctor : inyección de servicios ...
         * @memberof ActividadesController
         * @function constructor
         * @param $scope {service} scope del controller
         */
    constructor($scope) {
      'ngInject';
      this.$scope = $scope;
    }

    /**
     * Inicialización de las propiedades del componente
     */

    $onInit () {
        
		this.name =  "Sample"   
		this.value = parent.value  
 
    } // Fin del $onInit

} // Fin del controller SampleController


angular.module('moduleName')

/** 
 * Componente responsable de los datos de ...
 * @memberof moduleName
 * @ngdoc component
 * @name .....
*/
.component("sample", {
    require: {parent : '^appMain'},
    templateUrl : "components/sample.html",
    // usa controller as por defecto
    controller: SampleController,
    //controllerAs: '$ctrl', valor por defecto
    bindings: {}

}) //Fin del componente y del objeto que lo define