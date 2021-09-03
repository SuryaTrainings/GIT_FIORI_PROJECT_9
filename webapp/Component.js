sap.ui.define([
    'sap/ui/core/UIComponent'
], function(UIComponent) {
    'use strict';
    
    return UIComponent.extend("home.Component",{

        metadata: {
            manifest: "json"
        },       //to manifest.json

        init: function(){

            UIComponent.prototype.init.apply(this);
            var oRouter = this.getRouter();
            oRouter.initialize();
        }
        // , //

        // createContent:function(){

        //     var oView = sap.ui.view({
        //         viewName : "home.view.App",
        //         type     : "XML",
        //         id       : "idAppView"
        //     });

            
        //     var oView1 = sap.ui.view({
        //         viewName : "home.view.View1",
        //         type     : "XML",
        //         id       : "idAppView1"
        //     });
            
        //     var oView2 = sap.ui.view({
        //         viewName : "home.view.View2",
        //         type     : "XML",
        //         id       : "idAppView2"
        //     });

        //     var oAppCon = oView.byId("appCon");
        //     // oAppCon.addPage(oView1);
        //     // oAppCon.addPage(oView2);
        //     oAppCon.addMasterPage(oView1).addDetailPage(oView2);
        //     return oView;

        // }

    });


});