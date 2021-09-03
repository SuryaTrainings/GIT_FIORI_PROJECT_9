sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("home.controller.View3",{
        onInit: function(){
            debugger;
            this.oRouter = this.getOwnerComponent().getRouter();
            this.oRouter.getRoute("second").attachPatternMatched(this.overview, this);

        },
        onPress: function(){
            this.getView().getParent().to("idAppView1");
        },
        overview: function(oEvent){
            var id = oEvent.getParameter("arguments").id;
            var sPath = '/cars/'+id;
            this.getView().bindElement(sPath);
        }
    });
    
});