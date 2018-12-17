sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller',
	'sap/m/Popover',
	'sap/m/Button',
	'sap/ui/model/odata/v2/ODataModel'
], function(jQuery, Controller, Popover, Button, ODataModel) {
	"use strict";

	return Controller.extend("uifiveApp.controller.main", {

		onInit: function () {
			var oModel = new ODataModel('/here/goes/your/serviceUrl');
			this.getView().setModel(oModel,'oData');
		},

		onUserNamePress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content:[
					new Button({
						text: 'Feedback',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Help',
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: 'Logout',
						type: sap.m.ButtonType.Transparent
					})
				]
			}).addStyleClass('sapMOTAPopover sapTntToolHeaderPopover');

			popover.openBy(event.getSource());
		}
	});

});
