sap.ui.define([
	'sap/ui/core/mvc/Controller',
	'sap/ui/model/odata/v2/ODataModel',
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"uifiveApp/customControl/PictureTile"
], function(Controller, ODataModel, Filter, FilterOperator, PictureTile) {
	"use strict";
	var __oRouter,__oView;
	return Controller.extend("uifiveApp.controller.detailPage", {

		onInit: function () {
			__oView = this.getView(),
			__oRouter = this.getOwnerComponent().getRouter();
			__oRouter.getRoute("sideMenu").attachMatched(this._onRouteMatched, this);
		},

		_onRouteMatched : function(oEvent){
			var oArgs = oEvent.getParameter("arguments"),
				oView = this.getView(),
				sideMenu = oArgs.sideMenu;
			
			this._filterTileList(sideMenu);
			/*var aTileModelList = this._tileModel[masterName];
			
			this._makeTileListItem(aTileModelList);*/
		},
		_filterTileList : function(sideMenu){
			var oFilter = new Filter('group', FilterOperator.EQ, sideMenu);
			
			this.getView().getModel('oData').read("/SideMenues",{
				filters : [oFilter],
				success : this._makeTileList
			});
		},
		_makeTileList : function(oReturn){
			var oTilePage = __oView.byId('detailTilePage');
			
			oReturn.results.forEach(function(item,idx){
				oTilePage.addContent(new PictureTile({
					title : item.title,
					imgSrc : item.imgSrc,
					contentText : item.contentText,
					className : item.className,
					availableSince : item.availableSince,
					select : function(oEvent){
						var oRouter = __oRouter;
						var targetText = oEvent.getSource().getTitle().replace(/(\s*)/g, "");
			            oRouter.navTo(targetText);
					}
				}).addStyleClass('blocklayout'));
			})
		}
	});

});
