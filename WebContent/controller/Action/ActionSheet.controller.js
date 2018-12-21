sap.ui.define([
	'sap/ui/core/Fragment',
	'sap/ui/core/mvc/Controller',
	'sap/m/MessageToast',
	"sap/ui/core/routing/History"
], function(Fragment, Controller, MessageToast, History) {
	"use strict";
	
	return Controller.extend("uifiveApp.controller.Action.ActionSheet", {

		onInit: function () {
			console.log("okok");
		},
		onNavBack: function (oEvent) {
			var oHistory, sPreviousHash;

			oHistory = History.getInstance();
			sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("headerMenu", {headerMenu : "Sample"});
			}
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
			var sFilterId = oEvent.getParameter("selectedKey"),
				oEditor = this.byId("aCodeEditor"),
				viewValue, controllerValue, fragmentValue;
			
			viewValue = 
				'<mvc:View \n'+
				'	controllerName="sap.m.sample.ActionSheet.C "\n'+
				'	xmlns:l="sap.ui.layout" \n'+
				'	xmlns:mvc="sap.ui.core.mvc"  \n'+
				'	xmlns="sap.m"> \n'+
				'	<l:VerticalLayout \n'+
				'		class="sapUiContentPadding" \n'+
				'		width="100%"> \n'+
				'		<l:content> \n'+
				'			<Button text="Open Action Sheet" \n'+
				'				press="handleOpen" \n'+
				'				class="sapUiSmallMarginBottom" /> \n'+
				'		</l:content> \n'+
				'	</l:VerticalLayout> \n'+
				'</mvc:View> \n'
			
			controllerValue = 
				'sap.ui.define(["sap/ui/core/Fragment","sap/ui/core/mvc/Controller", "sap/m/MessageToast"],\n'+
				'	function(Fragment, Controller, MessageToast) {\n'+
				'	"use strict";\n'+
				'\n'+
				'	var CController = Controller.extend("sap.m.sample.ActionSheet.C", {\n'+
				'		handleOpen : function (oEvent) {\n'+
				'			var oButton = oEvent.getSource();\n'+
				'\n'+
				'			// create action sheet only once\n'+
				'			if (!this._actionSheet) {\n'+
				'				this._actionSheet = sap.ui.xmlfragment(\n'+
				'					"sap.m.sample.ActionSheet.ActionSheet",\n'+
				'					this\n'+
				'				);\n'+
				'				this.getView().addDependent(this._actionSheet);\n'+
				'			}\n'+
				'\n'+
				'			this._actionSheet.openBy(oButton);\n'+
				'		},\n'+
				'\n'+
				'		actionSelected : function(oEvent){\n'+
				'			MessageToast.show(oEvent.getSource().getText());\n'+
				'		}\n'+
				'	});\n'+
				'\n'+
				'	return CController;\n'+
				'\n'+
				'});\n'
			
			fragmentValue =
				'<core:FragmentDefinition\n'+
				'	xmlns="sap.m"\n'+
				'	xmlns:core="sap.ui.core">\n'+
				'	<ActionSheet\n'+
				'		title="Choose Your Action"\n'+
				'		showCancelButton="true"\n'+
				'		placement="Bottom">\n'+
				'			<Button text="Accept" icon="sap-icon://accept" press="actionSelected" />\n'+
				'			<Button text="Reject" icon="sap-icon://decline" press="actionSelected" />\n'+
				'			<Button text="Email" icon="sap-icon://email" press="actionSelected" />\n'+
				'			<Button text="Forward" icon="sap-icon://forward" press="actionSelected" />\n'+
				'			<Button text="Delete" icon="sap-icon://delete" press="actionSelected" />\n'+
				'			<Button text="Other" press="actionSelected" />\n'+
				'	</ActionSheet>\n'+
				'</core:FragmentDefinition>\n'
				
			oEditor.setValue(viewValue);
			
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