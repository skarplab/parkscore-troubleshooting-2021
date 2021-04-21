var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,n=(t,r,i)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,a=(e,a)=>{for(var s in a||(a={}))t.call(a,s)&&n(e,s,a[s]);if(r)for(var s of r(a))i.call(a,s)&&n(e,s,a[s]);return e};import{e as s,y as o,i as l,m as c,l as p,q as d,k as y}from"./vendor.1ee57f36.js";import{d as m}from"./shapingUtils.66b0bc31.js";import u from"./FeatureLayerView2D.1c50350c.js";import"./BidiEngine.39026c84.js";import"./MD5.89293f8b.js";import"./Utils.88967ee0.js";import"./MaterialKey.464cac5a.js";import"./visualVariablesUtils.dc4022b6.js";import"./Rect.8611b8cd.js";import"./LayerView2D.5b971eca.js";import"./Container.c19388ee.js";import"./mat4f32.65c405e6.js";import"./clickToleranceUtils.108d5e26.js";import"./drapedUtils.0dafd493.js";import"./popupUtils.51a8577b.js";import"./CIMSymbolHelper.2ecfa4b9.js";import"./graphicsUtils.0fbe3e39.js";function h(e,t){if(d(e)&&d(t))return null;const r={};return y(t)&&(r.geometry=t.toJSON()),y(e)&&(r.where=e),r}let f=class extends u{constructor(){super(...arguments),this._enabledDataReceived=!1,this.errorString=null,this.connectionStatus="disconnected"}initialize(){this.handles.add([this.layer.watch("purgeOptions",(()=>this._update()))])}destroy(){this.connectionStatus="disconnected"}get connectionError(){if(this.errorString)return new c("stream-controller",this.errorString)}on(e,t){"data-received"===e&&(this._enabledDataReceived=!0,this._proxy.enableEvent("data-received",!0));const r=super.on(e,t),i=this;return{remove(){r.remove(),"data-received"===e&&(i._proxy.closed||i.hasEventListener("data-received")||i._proxy.enableEvent("data-received",!1))}}}queryLatestObservations(e,t){if(!this.layer.timeInfo.endField&&!this.layer.timeInfo.startField)throw new c("streamlayer-no-timeField","queryLatestObservation can only be used with services that define a TrackIdField");return this._proxy.queryLatestObservations(this._cleanUpQuery(e),t).then((e=>{const t=p.fromJSON(e);return t.features.forEach((e=>{e.layer=this.layer,e.sourceLayer=this.layer})),t}))}_createClientOptions(){return a(a({},super._createClientOptions()),{setProperty:e=>{this.set(e.propertyName,e.value)}})}_createTileRendererHash(e){const t=`${JSON.stringify(this.layer.purgeOptions)}.${JSON.stringify(h(this.layer.definitionExpression,this.layer.geometryDefinition))})`;return super._createTileRendererHash(e)+t}async _createServiceOptions(){const e=this.layer,{objectIdField:t}=e,r=e.fields.map((e=>e.toJSON())),i=m(e.geometryType),n=e.timeInfo&&e.timeInfo.toJSON()||null,a=e.spatialReference?e.spatialReference.toJSON():null;return{type:"stream",fields:r,geometryType:i,objectIdField:t,timeInfo:n,source:this.layer.parsedUrl,serviceFilter:h(this.layer.definitionExpression,this.layer.geometryDefinition),purgeOptions:this.layer.purgeOptions.toJSON(),enableDataReceived:this._enabledDataReceived,spatialReference:a,maxReconnectionAttempts:this.layer.maxReconnectionAttempts,maxReconnectionInterval:this.layer.maxReconnectionInterval,updateInterval:this.layer.updateInterval}}};s([o()],f.prototype,"errorString",void 0),s([o({dependsOn:["errorString"],readOnly:!0})],f.prototype,"connectionError",null),s([o()],f.prototype,"connectionStatus",void 0),f=s([l("esri.views.2d.layers.StreamLayerView2D")],f);var v=f;export default v;
