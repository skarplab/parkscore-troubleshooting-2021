var e=Object.defineProperty,r=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,o=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,i=(e,i)=>{for(var s in i||(i={}))r.call(i,s)&&o(e,s,i[s]);if(t)for(var s of t(i))n.call(i,s)&&o(e,s,i[s]);return e};import{eO as s,eP as l,eQ as a,s as u,r as c}from"./vendor.1ee57f36.js";function p(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s:"esriGeometryPolyline"===e?l:a}}}function y(e,r){if(c("csp-restrictions"))return()=>i({[r]:null},e);try{let t=`this.${r} = null;`;for(const r in e)t+=`this${r.indexOf(".")?`["${r}"]`:`.${r}`} = ${JSON.stringify(e[r])};`;const n=new Function(t);return()=>new n}catch(t){return()=>i({[r]:null},e)}}function f(e={}){return[{name:"New Feature",description:"",prototype:{attributes:u(e)}}]}export{p as i,y as s,f as u};
