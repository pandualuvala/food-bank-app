'use strict';

// Setting up route
angular.module('customer').config(['$stateProvider',
	function($stateProvider){
		// Customer state routing for admin
		$stateProvider.
		state('root.listCustomers', {
			url: 'admin/customers',
			views: {
				'content@': {
					templateUrl: 'modules/customer/views/admin/list-customers.client.view.html',
					controller: 'CustomerAdminController as customerCtrl'
				}
			}
		}).
		state('root.viewCustomerAdmin', {
			url: 'admin/customers/:customerId',
			views: {
				'content@': {
					templateUrl: 'modules/customer/views/view-customer.client.view.html',
					controller: 'CustomerAdminController as customerCtrl'
				}
			}
		}).
		state('root.editCustomerAdmin', {
			url: 'admin/customers/:customerId/edit',
			views: {
				'content@': {
					templateUrl: 'modules/customer/views/edit-customer.client.view.html',
					controller: 'CustomerAdminController as customerCtrl'
				},
				'food-preferences@root.editCustomerAdmin': {
					templateUrl: 'modules/customer/views/partials/food-preferences.partial.html'
				},
				'household@root.editCustomerAdmin': {
					templateUrl: 'modules/customer/views/partials/household.partial.html'
				}
			}
		});
	}
]);
