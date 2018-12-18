sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/m/Popover',
	'sap/m/Button',
	'sap/ui/model/odata/v2/ODataModel'
], function(jQuery, Controller, Popover, Button, ODataModel) {
	"use strict";

	return Controller.extend("uifiveApp.controller.app", {

		onInit: function () {
			
		},

		onMenuOpen: function (event) {
			var oSplitApp = this.getView().byId("mainApp"),
				sAppMode = oSplitApp.getMode();
			
			if(sAppMode === "HideMode"){
				oSplitApp.setMode("ShowHideMode");
			}else{
				oSplitApp.setMode("HideMode");
			}
		},
	});

});
