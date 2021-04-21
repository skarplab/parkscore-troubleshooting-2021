import{U as e,fu as n,O as t}from"./vendor.1ee57f36.js";import{C as r,l as a,ak as i,J as s,K as l}from"./arcadeUtils.d58d6223.js";import{y as o,d as c,g as u,x as f,l as p,m as d,S as m}from"./geometryEngineAsync.1940242f.js";import{e as S,y as R}from"./SpatialFilter.99b5bcaa.js";import"./number.adca3a71.js";import"./FeatureSetReader.3ec5c3db.js";import"./centroid.b04b550b.js";import"./WhereClause.4830c95f.js";function h(e){return e instanceof n}function y(s,l,m,y,b){return b(s,l,(function(s,l,b){if(b.length<2)return y(new Error("Missing Parameters"));if(null===(b=r(b))[0]&&null===b[1])return e(!1);if(a(b[0]))return b[1]instanceof n?e(new S({parentfeatureset:b[0],relation:m,relationGeom:b[1]})):null===b[1]?e(new R({parentfeatureset:b[0]})):y("Spatial Relation cannot accept this parameter type");if(h(b[0])){if(h(b[1])){let e=null;switch(m){case"esriSpatialRelEnvelopeIntersects":e=d(i(b[0]),i(b[1]));break;case"esriSpatialRelIntersects":e=d(b[0],b[1]);break;case"esriSpatialRelContains":e=p(b[0],b[1]);break;case"esriSpatialRelOverlaps":e=f(b[0],b[1]);break;case"esriSpatialRelWithin":e=u(b[0],b[1]);break;case"esriSpatialRelTouches":e=c(b[0],b[1]);break;case"esriSpatialRelCrosses":e=o(b[0],b[1])}return null!==e?e:t(new Error("Unrecognised Relationship"))}return a(b[1])?e(new S({parentfeatureset:b[1],relation:m,relationGeom:b[0]})):null===b[1]?e(!1):y("Spatial Relation cannot accept this parameter type")}return null!==b[0]?y("Spatial Relation cannot accept this parameter type"):a(b[1])?e(new R({parentfeatureset:b[1]})):b[1]instanceof n||null===b[1]?e(!1):void 0}))}function b(e){"async"===e.mode&&(e.functions.intersects=function(n,t){return y(n,t,"esriSpatialRelIntersects",e.failDefferred,e.standardFunctionAsync)},e.functions.envelopeintersects=function(n,t){return y(n,t,"esriSpatialRelEnvelopeIntersects",e.failDefferred,e.standardFunctionAsync)},e.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),e.functions.contains=function(n,t){return y(n,t,"esriSpatialRelContains",e.failDefferred,e.standardFunctionAsync)},e.functions.overlaps=function(n,t){return y(n,t,"esriSpatialRelOverlaps",e.failDefferred,e.standardFunctionAsync)},e.functions.within=function(n,t){return y(n,t,"esriSpatialRelWithin",e.failDefferred,e.standardFunctionAsync)},e.functions.touches=function(n,t){return y(n,t,"esriSpatialRelTouches",e.failDefferred,e.standardFunctionAsync)},e.functions.crosses=function(n,t){return y(n,t,"esriSpatialRelCrosses",e.failDefferred,e.standardFunctionAsync)},e.functions.relate=function(t,i){return e.standardFunctionAsync(t,i,(function(e,t,i){if(i=r(i),s(i,3,3),h(i[0])&&h(i[1]))return m(i[0],i[1],l(i[2]));if(i[0]instanceof n&&null===i[1])return!1;if(i[1]instanceof n&&null===i[0])return!1;if(a(i[0])&&null===i[1])return new R({parentfeatureset:i[0]});if(a(i[1])&&null===i[0])return new R({parentfeatureset:i[1]});if(a(i[0])&&i[1]instanceof n)return i[0].relate(i[1],l(i[2]));if(a(i[1])&&i[0]instanceof n)return i[1].relate(i[0],l(i[2]));if(null===i[0]&&null===i[1])return!1;throw new Error("Illegal Argument")}))})}export{b as registerFunctions};
