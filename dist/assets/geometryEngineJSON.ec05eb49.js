import{a as e}from"./geometryEngineBase.5264f795.js";import{t as n}from"./json.9d10e1a3.js";function r(n){return e.extendedSpatialReferenceInfo(n)}function t(r,t,i){return e.clip(n,r,t,i)}function i(r,t,i){return e.cut(n,r,t,i)}function u(r,t,i){return e.contains(n,r,t,i)}function o(r,t,i){return e.crosses(n,r,t,i)}function c(r,t,i,u){return e.distance(n,r,t,i,u)}function f(r,t,i){return e.equals(n,r,t,i)}function s(r,t,i){return e.intersects(n,r,t,i)}function l(r,t,i){return e.touches(n,r,t,i)}function a(r,t,i){return e.within(n,r,t,i)}function p(r,t,i){return e.disjoint(n,r,t,i)}function d(r,t,i){return e.overlaps(n,r,t,i)}function g(r,t,i,u){return e.relate(n,r,t,i,u)}function m(r,t){return e.isSimple(n,r,t)}function h(r,t){return e.simplify(n,r,t)}function x(r,t,i=!1){return e.convexHull(n,r,t,i)}function y(r,t,i){return e.difference(n,r,t,i)}function w(r,t,i){return e.symmetricDifference(n,r,t,i)}function A(r,t,i){return e.intersect(n,r,t,i)}function E(r,t,i=null){return e.union(n,r,t,i)}function j(r,t,i,u,o,c,f){return e.offset(n,r,t,i,u,o,c,f)}function V(r,t,i,u,o=!1){return e.buffer(n,r,t,i,u,o)}function v(r,t,i,u,o,c,f){return e.geodesicBuffer(n,r,t,i,u,o,c,f)}function z(r,t,i,u=!0){return e.nearestCoordinate(n,r,t,i,u)}function I(r,t,i){return e.nearestVertex(n,r,t,i)}function R(r,t,i,u,o){return e.nearestVertices(n,r,t,i,u,o)}function D(n,r,t,i){if(null==r||null==i)throw new Error("Illegal Argument Exception");const u=e.rotate(r,t,i);return u.spatialReference=n,u}function H(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=e.flipHorizontal(r,t);return i.spatialReference=n,i}function L(n,r,t){if(null==r||null==t)throw new Error("Illegal Argument Exception");const i=e.flipVertical(r,t);return i.spatialReference=n,i}function S(r,t,i,u,o){return e.generalize(n,r,t,i,u,o)}function _(r,t,i,u){return e.densify(n,r,t,i,u)}function b(r,t,i,u,o=0){return e.geodesicDensify(n,r,t,i,u,o)}function B(r,t,i){return e.planarArea(n,r,t,i)}function q(r,t,i){return e.planarLength(n,r,t,i)}function C(r,t,i,u){return e.geodesicArea(n,r,t,i,u)}function O(r,t,i,u){return e.geodesicLength(n,r,t,i,u)}var k=Object.freeze({__proto__:null,extendedSpatialReferenceInfo:r,clip:t,cut:i,contains:u,crosses:o,distance:c,equals:f,intersects:s,touches:l,within:a,disjoint:p,overlaps:d,relate:g,isSimple:m,simplify:h,convexHull:x,difference:y,symmetricDifference:w,intersect:A,union:E,offset:j,buffer:V,geodesicBuffer:v,nearestCoordinate:z,nearestVertex:I,nearestVertices:R,rotate:D,flipHorizontal:H,flipVertical:L,generalize:S,densify:_,geodesicDensify:b,planarArea:B,planarLength:q,geodesicArea:C,geodesicLength:O});export{A,S as B,C,R as D,E,k as F,D as H,z as I,_ as L,H as R,b as S,I as V,B as _,f as a,L as b,s as c,g as d,l as f,d as g,h,i,j,O as k,a as l,m,c as o,p,q,r,u as s,t,o as u,V as v,w,y as x,x as y,v as z};
