import vue from "vue";
const { SpinalMountExtention  } = require("spinal-env-viewer-panel-manager-service");

import CreateAnalytic from "./createAnalytic.vue";


const dialogs = [
   {
      name: "createAnalyticDialog",
      vueMountComponent: vue.extend(CreateAnalytic),
      parentContainer: document.body
   }
];

for (let index = 0; index < dialogs.length; index++) {
 SpinalMountExtention.mount(dialogs[index]);
}