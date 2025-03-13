/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"mentoring_d15_02/mentoring_d15_02/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
