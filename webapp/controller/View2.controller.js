sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("home.controller.View2",{
        onInit: function(){

        },
        onPress: function(){
            this.getView().getParent().to("idAppView1");
        }
    });
    
});