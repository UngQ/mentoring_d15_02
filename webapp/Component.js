sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "mentoringd1502/mentoringd1502/model/models",
    "sap/ui/model/odata/v2/ODataModel",
  ],
  (UIComponent, models, ODataModel) => {
    "use strict";

    return UIComponent.extend("mentoringd1502.mentoringd1502.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();

        //OData 모델 생성 및 설정
        var oModel = new ODataModel("/sap/opu/odata/sap/ZEMPLOYEE_D15_SRV/");
        //View에 모델 설정
        this.setModel(oModel, "data");
      },
    });
  }
);
