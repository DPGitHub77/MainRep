jQuery.sap.declare("UI5Mob.util.Controller");

sap.ui.core.mvc.Controller.extend("UI5Mob.util.Controller", {
	getEventBus : function () {
		return sap.ui.getCore().getEventBus();
	},

	getRouter : function () {
		return sap.ui.core.UIComponent.getRouterFor(this);
	}
});