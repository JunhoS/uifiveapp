sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/m/Popover',
	'sap/m/Button',
	'sap/ui/model/odata/v2/ODataModel'
], function(jQuery, Controller, Popover, Button, ODataModel) {
	"use strict";
	var __oRouter, __this;
	return Controller.extend("uifiveApp.controller.app", {

		onInit: function () {
			__this = this;
			__oRouter = this.getOwnerComponent().getRouter();
			/*this._menu =[
				'Action',
				'Container',
				'Data Binding',
				'Data Visualization',
				'Display',
				'Layout',
				'List',
				'Map',
				'Popup',
				'Routing',
				'Testing',
				'Theming',
				'Tile',
				'User Input',
				'Tutorial',
				'Utility',
			];*/
			//this._makeMenu();
		},

		onMenuOpen: function () {
			var oSplitApp = this.getView().byId("mainApp"),
				sAppMode = oSplitApp.getMode();
			
			if(sAppMode === "HideMode"){
				oSplitApp.setMode("ShowHideMode");
			}else{
				oSplitApp.setMode("HideMode");
			}
		},
		_makeMenu : function(){
			var oHeaderToolBar = this.getView().byId('mainheader'),
				aMenuTitle = this._menu;
			
			oHeaderToolBar.addContent(
					new Button({
						text : "Home",
						type : "Transparent",
						press : this.onPressHomeMenu
					})
			);
			for(var i = 0,len = aMenuTitle.length;i<len;i++){
				oHeaderToolBar.addContent(
						new Button({
							text : aMenuTitle[i],
							type : "Transparent",
							press : this._onPressHeaderMenu
						})
				);
			}
			
		},
		onPressHomeMenu : function(oEvent){
			var oRouter = __oRouter;
			
			__this.getView().byId("mainApp").setMode("HideMode");
			
            oRouter.navTo("home");
		},
		onPressHeaderMenu : function(oEvent){
			var oRouter = __oRouter;
			
			__this.getView().byId("mainApp").setMode("ShowHideMode");
			
            oRouter.navTo("headerMenu", {
            	headerMenu : oEvent.getSource().getText()
            });
		}
		
	});

});
