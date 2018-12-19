sap.ui.define([
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast'
], function(Fragment, Controller, MessageToast) {
	"use strict";
	
	return Controller.extend("uifiveApp.controller.Action.ActionSheet", {

		onInit: function () {
			console.log("okok");
		},
		
		handleOpen : function (oEvent) {
			var oButton = oEvent.getSource();

			// create action sheet only once
			if (!this._actionSheet) {
				this._actionSheet = sap.ui.xmlfragment("uifiveApp.view.Action.ActionSheet",this);
				this.getView().addDependent(this._actionSheet);
			}

			this._actionSheet.openBy(oButton);
		},

		actionSelected : function(oEvent){
			MessageToast.show("Selected action is '" + oEvent.getSource().getText() + "'");
		},
		
		onSelectTab : function (oEvent) {
			var sFilterId = oEvent.getParameter("selectedKey");
			var oEditor = this.byId("aCodeEditor");
			var viewValue, controllerValue, fragmentValue;
			oEditor.setValue('// select tabs to see value of CodeEditor changing');
			
			switch (sFilterId) {
				case "V":
					oEditor.setValue(viewValue);
					break;
				case "C":
					oEditor.setValue(controllerValue);
					break;
				case "FV":
					oEditor.setValue(fragmentValue);
					break;
			}
		}
	});	
});