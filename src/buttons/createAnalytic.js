import { SpinalContextApp } from "spinal-env-viewer-context-menu-service";
const { spinalPanelManagerService } = require("spinal-env-viewer-panel-manager-service");
import { spinalContextMenuService } from "spinal-env-viewer-context-menu-service";

import { spinalAnalyticService } from "spinal-env-viewer-plugin-analytics-service";

const SIDEBAR = "GraphManagerSideBar";

class CreateAnalytics extends SpinalContextApp {
   constructor() {
      super("Create Analytics",
        "Create Analytics", {
          icon: 'equalizer',
          icon_type: 'in',
          backgroundColor: '#356BAB',
          fontColor: '#FFFFFF'
        })
    }
  
    isShown(option) {  
      const id = option.selectedNode.id.get();
      const isAnalyticGroup = spinalAnalyticService.isAnalyticGroup(id);
      return Promise.resolve(isAnalyticGroup ? true : -1);
    }
  
    action(option) {
      spinalPanelManagerService.openPanel("createAnalyticDialog", option);
    }
}

const createAnalytics = new CreateAnalytics();
spinalContextMenuService.registerApp(SIDEBAR, createAnalytics, [3]);
export default createAnalytics;