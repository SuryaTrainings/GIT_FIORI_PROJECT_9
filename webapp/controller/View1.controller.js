sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(Controller, Filter, FilterOperator) {
    'use strict';
    return Controller.extend("home.controller.View1",{
        onInit: function(){
            this.Router = this.getOwnerComponent().getRouter();
        },
        onPress: function(){
            debugger;
            var oAppCon = this.getView().getParent();

            oAppCon.to("idAppView2");
        },
        onSelectionChange: function(oEvent){
            debugger;
            var oSelected = oEvent.getParameter("listItem");
            this.Router.navTo("second",{
                id: oSelected.getBindingContextPath().split("/")[2] 
            });
        },

        onSearch: function(oEvent){
            //Step - 1 : Capture input info
            var oSearch = oEvent.getParameter("query");
            
            //Search data in the list.
            var oFilter1 = new Filter("Car", FilterOperator.EQ, oSearch);
            var oFilter2 = new Filter("model", FilterOperator.EQ, oSearch);

            var aFilter = [oFilter1, oFilter2];
            var oMaster = new Filter({
                filters: aFilter,
                and :  false
            });
            var oList = this.getView().byId("idList");
            oList.getBinding("items").filter(oMaster);
        },
        
        onDelete: function(oEvent){
           //Step -1 : Get selected item(s) 
           var oSelected = oEvent.getParameter("listItem");
           //Step - 2 : Get the list ref
           var oList = oEvent.getSource();
           //Step - 3 : Remove the selected item from the list.
           oList.removeItem(oSelected);    
        },

        onDeleteItems: function(oEvent){
            debugger;
            var oList = this.getView().byId("idList");
            var aSelectedItems = oList.getSelectedItems();
            aSelectedItems.forEach( item => {
                oList.removeItem(item);
            });
        }
    });
    
});