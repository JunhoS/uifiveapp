sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/m/Popover',
	'sap/m/Button',
	'sap/ui/model/odata/v2/ODataModel'
], function(jQuery, Controller, Popover, Button, ODataModel) {
	"use strict";
	var __oRouter;
	return Controller.extend("uifiveApp.controller.app", {

		onInit: function () {
			__oRouter = this.getOwnerComponent().getRouter();
			//oRouter.getRoute("master").attachMatched(this._onRouteMatched, this);
			this._menu =[
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
			];
			this._makeMenu();
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
		_makeMenu : function(){
			var oHeaderToolBar = this.getView().byId('mainheader'),
				aMenuTitle = this._menu;
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
		_onPressHeaderMenu : function(oEvent){
			var oRouter = __oRouter;
            oRouter.navTo("orderMasters", {
            	masterName: oEvent.getSource().getText()
            });
		},
		_onRouteMatched : function(oEvent){
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			
			
		}
		
	});

});
