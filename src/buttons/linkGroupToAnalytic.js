import { SpinalContextApp } from "spinal-env-viewer-context-menu-service";
const { spinalPanelManagerService } = require("spinal-env-viewer-panel-manager-service");
import { spinalContextMenuService } from "spinal-env-viewer-context-menu-service";

import { spinalAnalyticService } from "spinal-env-viewer-plugin-analytics-service";

const SIDEBAR = "GraphManagerSideBar";

class LinkGroupToAnalytic extends SpinalContextApp {
   constructor() {
      super("Link Group to Analytics",
        "Link Group to Analytics", {
          icon: 'equalizer',
          icon_type: 'in',
          backgroundColor: '#356BAB',
          fontColor: '#FFFFFF'
        })
    }
  
    isShown(option) {  
      const type = option.selectedNode.type.get();
      const isAnalytic = type === spinalAnalyticService.nodeType;
      return Promise.resolve(isAnalytic ? true : -1);
    }
  
    action(option) {
      spinalPanelManagerService.openPanel("linkGroupToAnalyticsPanel", {
        analyticId: option.selectedNode.id.get(),
        contextId: option.context.id.get(),
        childrenType: option.selectedNode.childrenType.get()
      });
    }
}

const linkGroupToAnalytic = new LinkGroupToAnalytic();
spinalContextMenuService.registerApp(SIDEBAR, linkGroupToAnalytic, [3]);
export default linkGroupToAnalytic;