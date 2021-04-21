var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,i=(t,o,r)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[o]=r,s=(e,s)=>{for(var n in s||(s={}))t.call(s,n)&&i(e,n,s[n]);if(o)for(var n of o(s))r.call(s,n)&&i(e,n,s[n]);return e};import{e as n,y as l,i as a,h as u,k as p,U as d,l as c,z as y,w as h,r as f,b as m,i1 as g,i2 as v,X as b,gw as O,af as w}from"./vendor.1ee57f36.js";import{u as F}from"./index.4894e768.js";let I=class extends u{constructor(e){super(e),this.type="csv"}load(e){const t=p(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),d(this)}destroy(){var e;null==(e=this._connection)||e.close(),this._connection=null}openPorts(){return this.load().then((()=>this._connection.openPorts()))}queryFeatures(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))).then((e=>c.fromJSON(e)))}queryFeaturesJSON(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)))}queryFeatureCount(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)))}queryObjectIds(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)))}queryExtent(e,t={}){return this.load(t).then((()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t))).then((e=>({count:e.count,extent:y.fromJSON(e.extent)})))}async _startWorker(e){this._connection=await h("CSVSourceWorker",{strategy:f("feature-layers-workers")?"dedicated":"local",signal:e});const t=await this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((e=>e.toJSON())),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e});this.locationInfo=t.locationInfo,this.sourceJSON=t.layerDefinition,this.columnDelimiter=t.columnDelimiter}};n([l()],I.prototype,"type",void 0),n([l()],I.prototype,"url",void 0),n([l()],I.prototype,"delimiter",void 0),n([l()],I.prototype,"fields",void 0),n([l()],I.prototype,"latitudeField",void 0),n([l()],I.prototype,"longitudeField",void 0),n([l()],I.prototype,"spatialReference",void 0),n([l()],I.prototype,"timeInfo",void 0),n([l()],I.prototype,"locationInfo",void 0),n([l()],I.prototype,"sourceJSON",void 0),n([l()],I.prototype,"columnDelimiter",void 0),I=n([a("esri.layers.graphics.sources.CSVSource")],I);var S=I;let q=class extends F{constructor(...e){super(...e),this.delimiter=null,this.editingEnabled=!1,this.fields=null,this.latitudeField=null,this.locationType="coordinates",this.longitudeField=null,this.operationalLayerType="CSV",this.outFields=["*"],this.path=null,this.portalItem=null,this.spatialReference=b.WGS84,this.source=null,this.type="csv"}normalizeCtorArgs(e,t){return"string"==typeof e?s({url:e},t):e}get capabilities(){return{data:{supportsAttachment:!1,supportsM:!1,supportsZ:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsQuery:!0,supportsResizeAttachments:!1,supportsUpdate:!1},query:O,queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}get isTable(){return this.loaded&&null==this.geometryType}readWebMapLabelsVisible(e,t){return null!=t.showLabels?t.showLabels:!!(t.layerDefinition&&t.layerDefinition.drawingInfo&&t.layerDefinition.drawingInfo.labelingInfo)}set url(e){this._set("url",e)}async createGraphicsSource(e){const t=new S({delimiter:this.delimiter,fields:this.fields,latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference,timeInfo:this.timeInfo,url:this.url});return this._set("source",t),await t.load({signal:e}),this.read({locationInfo:t.locationInfo,columnDelimiter:t.columnDelimiter},{origin:"service",url:this.parsedUrl}),t}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(w.from(e)||this.createQuery()))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(w.from(e)||this.createQuery())))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(w.from(e)||this.createQuery())))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(w.from(e)||this.createQuery())))}write(e,t){return super.write(e,s(s({},t),{writeLayerSchema:!0}))}_verifyFields(){}_verifySource(){}_hasMemorySource(){return!1}};n([l({readOnly:!0,dependsOn:["loaded"],autoTracked:!1,json:{read:!1,write:!1}})],q.prototype,"capabilities",null),n([l({type:[","," ",";","|","\t"],json:{read:{source:"columnDelimiter"},write:{target:"columnDelimiter",ignoreOrigin:!0}}})],q.prototype,"delimiter",void 0),n([l({readOnly:!0,type:Boolean,json:{origins:{"web-scene":{read:!1,write:!1}}}})],q.prototype,"editingEnabled",void 0),n([l({json:{read:{source:"layerDefinition.fields"},write:{target:"layerDefinition.fields"}}})],q.prototype,"fields",void 0),n([l({type:Boolean,readOnly:!0,dependsOn:["loaded"]})],q.prototype,"isTable",null),n([m("web-map","labelsVisible",["layerDefinition.drawingInfo.labelingInfo","showLabels"])],q.prototype,"readWebMapLabelsVisible",null),n([l({type:String,json:{read:{source:"locationInfo.latitudeFieldName"},write:{target:"locationInfo.latitudeFieldName",ignoreOrigin:!0}}})],q.prototype,"latitudeField",void 0),n([l({type:["show","hide"]})],q.prototype,"listMode",void 0),n([l({type:["coordinates"],json:{read:{source:"locationInfo.locationType"},write:{target:"locationInfo.locationType",ignoreOrigin:!0,isRequired:!0}}})],q.prototype,"locationType",void 0),n([l({type:String,json:{read:{source:"locationInfo.longitudeFieldName"},write:{target:"locationInfo.longitudeFieldName",ignoreOrigin:!0}}})],q.prototype,"longitudeField",void 0),n([l({type:["CSV"]})],q.prototype,"operationalLayerType",void 0),n([l()],q.prototype,"outFields",void 0),n([l({type:String,json:{origins:{"web-scene":{read:!1,write:!1}},read:!1,write:!1}})],q.prototype,"path",void 0),n([l({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],q.prototype,"portalItem",void 0),n([l({json:{read:!1},cast:null,type:S,readOnly:!0})],q.prototype,"source",void 0),n([l({json:{read:!1},value:"csv",readOnly:!0})],q.prototype,"type",void 0),n([l({json:{read:g,write:{isRequired:!0,ignoreOrigin:!0,writer:v}}})],q.prototype,"url",null),q=n([a("esri.layers.CSVLayer")],q);var j=q;export default j;
