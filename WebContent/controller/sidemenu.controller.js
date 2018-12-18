sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/m/Button',
	'sap/ui/model/odata/v2/ODataModel',
	'sap/tnt/NavigationListItem'
], function(Controller, Button, ODataModel, NavigationListItem) {
	"use strict";
	var __oRouter;
	return Controller.extend("uifiveApp.controller.sidemenu", {

		onInit: function () {
			__oRouter = this.getOwnerComponent().getRouter();
			this._sideMenu = [
				'Action Sheet',
				'Add Bookmark Button',
				'Breadcrumbs',
				'Button',
				'Info Label',
				'Link',
				'Menu',
				'Navigation List',
				'Overflow Toolbar Button',
				'Overflow Toolbar Toggle Button',
				'Pull To Refresh',
				'Side Navigation',
				'Toggle Button',
				'Tool Header',
				'Upload Collection',
				'Url Helper'
			];
			this._makeNavigationListItem();
		},

		_makeNavigationListItem: function () {
			var oSideNavigationToolBar = this.getView().byId('sideNavigationList'),
				aSideMenuTitle = this._sideMenu;
			
			for(var i = 0,len = aSideMenuTitle.length;i<len;i++){
				oSideNavigationToolBar.addItem(
						new NavigationListItem({
							text : aSideMenuTitle[i],
							select : this._onPressSideMenu
						})
				);
			}
		},
		_onPressSideMenu : function(oEvent){
			var oRouter = __oRouter;
			var targetText = oEvent.getSource().getText().replace(/(\s*)/g, "");
            oRouter.navTo(targetText);
		}
	});

});
