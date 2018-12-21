sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/odata/v2/ODataModel',
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History"
], function(Controller, ODataModel, UIComponent, History) {
	"use strict";

	return Controller.extend("uifiveApp.controller.baseController", {

		onInit: function () {
		
		},
		getRouter : function () {
			return UIComponent.getRouterFor(this);
		},

		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("appHome", {}, true /*no history*/);
			}
		}
	});

});
