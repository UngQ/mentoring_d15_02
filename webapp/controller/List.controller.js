sap.ui.define(["sap/ui/core/mvc/Controller"], (Controller) => {
  "use strict";

  return Controller.extend("mentoringd1502.mentoringd1502.controller.List", {
    onInit() {},

    async onOpenDialog(oEvent) {
      // 이벤트 객체에서 선택된 항목 가져오기
      var oSelectedItem = oEvent.getParameter("listItem");

      console.log(oSelectedItem);

      // 선택된 항목의 바인딩 컨텍스트 가져오기
      var oBindingContext = oSelectedItem.getBindingContext("data");
      // 다이얼로그가 없으면 프래그먼트 로드
      if (!this.oDialog) {
        this.oDialog = await this.loadFragment({
          name: "mentoringd1502.mentoringd1502.view.Pop",
        });
      }

      // 다이얼로그에 바인딩 컨텍스트 설정
      this.oDialog.setBindingContext(oBindingContext, "data");

      // 다이얼로그 열기
      this.oDialog.open();
    },

    onCloseDialog() {
      this.byId("pop").close();
    },
  });
});
