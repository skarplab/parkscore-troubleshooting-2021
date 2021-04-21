var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,a=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,i=(e,i)=>{for(var o in i||(i={}))t.call(i,o)&&a(e,o,i[o]);if(r)for(var o of r(i))s.call(i,o)&&a(e,o,i[o]);return e};import{e as o,i as n,eb as d,k as l}from"./vendor.1ee57f36.js";import{o as p}from"./heatmapUtils.ed60c52c.js";import{p as c}from"./BaseProcessor.d17d36c2.js";let h=class extends c{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const r=t.schema.processors[0];"heatmap"===r.type&&d(this._schema,r)&&(e.mesh=!0,this._schema=r)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}async onTileData(e,t,r){this._tileKeyToFeatureSets.has(e.key.id)&&"replace"!==t.type||this._tileKeyToFeatureSets.set(e.key.id,new Map);const s=this._tileKeyToFeatureSets.get(e.key.id);l(t.addOrUpdate)&&s.set(t.addOrUpdate.instance,t);let a=t.end;if(s.forEach((e=>a=a||e.end)),!a)return;const o=[];s.forEach((e=>{l(e.addOrUpdate)&&o.push(e.addOrUpdate)}));const n=p(o,this._schema.mesh,512,512),d={tileKey:e.key.id,intensityInfo:n},c=[n.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",d,i(i({},r),{transferList:c}))}onTileError(e,t,r){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},r)}};h=o([n("esri.views.2d.layers.features.processors.HeatmapProcessor")],h);var y=h;export default y;
