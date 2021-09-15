import { SITE_TYPE, BUILDING_TYPE, FLOOR_TYPE, ZONE_TYPE, ROOM_TYPE, EQUIPMENT_TYPE} from "spinal-env-viewer-context-geographic-service/build/constants";


export const TYPES = Object.freeze([
   {
      title: "Site Group's Analytic",
      type: SITE_TYPE
   },
   {
      title: "Building Group's Analytic",
      type: BUILDING_TYPE
   },
   {
      title: "Floor Group's Analytic",
      type: FLOOR_TYPE
   },
   {
      title: "Zone Group's Analytic",
      type: ZONE_TYPE
   },
   {
      title: "Room Group's Analytic",
      type: ROOM_TYPE
   },
   {
      title: "Equipement Group's Analytic",
      type: EQUIPMENT_TYPE
   }
])