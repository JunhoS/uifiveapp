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
			__oRouter.getRoute("orderMasters").attachMatched(this._onRouteMatched, this);
			var aAction = [
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
			var aContainer = [
				'Container',
				'Bar',
				'Carousel',
				'Chart Container',
				'Dynamic Page',
				'Filter Bar',
				'Flexible Column Layout',
				'Header Container',
				'Icon Tab Bar',
				'Map container',
				'Message Strip',
				'Message View',
				'Nav Container',
				'Object Page Block Base',
				'Object Page Section',
				'Object Page SubSection',
				'Overflow Container',
				'Overflow Toolbar',
				'Page',
				'Panel',
				'Quick View Card',
				'Scroll Container',
				'Semantic Page',
				'Semantic Page (sap.f)',
				'Slide Tile',
				'Smart Area Micro Chart',
				'Smart Bullet Micro Chart',
				'Smart Chart',
				'Smart Column Micro Chart',
				'Smart Comparison Micro Chart',
				'Smart Filter Bar',
				'Smart Form',
				'Smart Line Micro Chart',
				'Smart Link',
				'Smart List',
				'Smart Micro Chart',
				'Smart Multi Edit',
				'Smart Radial Micro Chart',
				'Smart Stacked Bar Micro Chart',
				'Smart Table',
				'Split App',
				'Split Container',
				'Tab Container',
				'Toolbar',
				'Tree',
				'Unified Shell',
				'Unified Split Container',
				'Visual Tree Mapper',
				'Wizard'
			];
			this._sideMenu = {
				Action : aAction,
				Container : aContainer
			};
			
			
			this._makeNavigationListItem(this._sideMenu.Action);
		},

		_makeNavigationListItem: function (aSideMenuList) {
			var oSideNavigationToolBar = this.getView().byId('sideNavigationList'),
				aSideMenuTitle = aSideMenuList;
			
			oSideNavigationToolBar.removeAllItems();
			
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
		},
		_onRouteMatched : function(oEvent){
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
			
			var aSideMenuList = this._sideMenu[oArgs.masterName.replace(/(\s*)/g, "")];
			
			this._makeNavigationListItem(aSideMenuList);
		}
	});

});
