import{g as e,m as s}from"./vendor.1ee57f36.js";import{P as i,A as l}from"./Utils.88967ee0.js";const r=e.getLogger("esri.views.2d.engine.webgl");function a(e){return i(e.minDataValue)&&i(e.maxDataValue)&&null!=e.minSize&&null!=e.maxSize?l.SIZE_MINMAX_VALUE:(e.expression&&"view.scale"===e.expression||e.valueExpression&&"$view.scale"===e.valueExpression)&&Array.isArray(e.stops)?l.SIZE_SCALE_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&(Array.isArray(e.stops)||"levels"in e&&e.levels)?l.SIZE_FIELD_STOPS:(null!=e.field||e.expression&&"view.scale"!==e.expression||e.valueExpression&&"$view.scale"!==e.valueExpression)&&null!=e.valueUnit?l.SIZE_UNIT_VALUE:(r.error(new s("mapview-bad-type","Found invalid size VisualVariable",e)),l.NONE)}export{a as o};
