import{h0 as e,h1 as t,h2 as n,h3 as i,h4 as r,du as s}from"./vendor.1ee57f36.js";class o{constructor(){this.code=null,this.description=null}}class l{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function u(e){return new l(e)}class a{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function c(e){return new a(e)}const d=new Set;function f(e,t,n,s,o=!1,l){d.clear();for(const a in s){const t=e.get(a);if(!t)continue;const c=s[a],f=h(t,c);if(f!==c&&l&&l.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:t,originalValue:c,sanitizedValue:f}}),d.add(t.name),t&&(o||t.editable)){const e=i(t,f);if(e)return u(r(e,t,f));n[t.name]=f}}for(const i of t)if(!d.has(i.name))return u(`missing required field "${i.name}"`);return null}function h(i,r){let s=r;return"string"==typeof r&&e(i)?s=parseFloat(r):null!=r&&t(i)&&"string"!=typeof r&&(s=String(r)),n(s)}let m;function g(e,t){if(!e||!s(t))return e;if("rings"in e||"paths"in e){if(!m)throw new TypeError("geometry engine not loaded");return m.simplify(t,e)}return e}async function p(e,t){!s(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return m||(m=await import("./geometryEngineJSON.9284257d.js"),m)}()}export{c,f as d,g as h,u,p as y};
