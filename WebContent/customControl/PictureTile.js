sap.ui.define([
	"sap/ui/core/Control"
], function (Control) {
	"use strict";

	var oPictureTile = Control.extend("uifiveApp.customControl.PictureTile",{
		metadata: {
			properties: {
				title: {type: "string", defaultValue : ""},
				imgSrc: {type: "string", defaultValue : ""},
				contentText: {type: "string", defaultValue : ""},
				className: {type: "string", defaultValue : ""},
				availableSince: {type: "string", defaultValue : ""}
			},
			events : {
				select : { }
			}
		},
		renderer : {
			render : function (oRM, oControl) {
				oRM.write("<div");
				oRM.writeControlData(oControl);
				oRM.writeClasses();
				oRM.write(">");
				oRM.write('<div class="tilelist">');
				oRM.write('		<div class="tile">');
				oRM.write('			<div class="tileContent">');
				oRM.write('				<h2>'+oControl.getTitle()+'</h2>');
				oRM.write('				<div class="img">');
				oRM.write('					<img width="321" height="166" src="'+oControl.getImgSrc()+'">');
				oRM.write('				</div>');
				oRM.write('				<div class="description">');
				oRM.write('					<p>'+oControl.getContentText()+'</p>');
				oRM.write('				</div>');
				oRM.write('				<div class="category">');
				oRM.write('					Class: <strong>'+oControl.getClassName()+'</strong>');
				oRM.write('				</div>');
				oRM.write('				<div class="type">');
				oRM.write('					Available since: <strong>'+oControl.getAvailableSince()+'</strong>');
				oRM.write('				</div>');
				oRM.write('			</div>');
				oRM.write('		</div>');
				oRM.write('	</div>');
				oRM.write("</div>");
			}
		}
	});
	
	oPictureTile.prototype.onBeforeRendering = function(){
		var domNode = this.getDomRef();
		$(domNode).unbind('click')
	}

	oPictureTile.prototype.onAfterRendering = function(){
		var self = this, domNode = this.getDomRef();
		$(domNode).bind('click', function() {
			self.fireSelect();
		});
	}
	
	return oPictureTile;
});
