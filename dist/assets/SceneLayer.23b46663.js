var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,i=(t,s,r)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,o=(e,o)=>{for(var a in o||(o={}))t.call(o,a)&&i(e,a,o[a]);if(s)for(var a of s(o))r.call(o,a)&&i(e,a,o[a]);return e};import{e as a,y as n,i as l,a as p,g as d,Q as y,R as u,S as c,N as h,T as f,aE as g,_ as m,a2 as v,k as b,aZ as I,U as w,af as L,ae as F,q as S,m as O,a1 as j,ai as _,i6 as E,c4 as T,iQ as x,an as P,ao as D,b as A,am as U,as as R,G as q,au as Q,at as N,ay as k,av as G,aw as C,aA as V}from"./vendor.1ee57f36.js";import{t as M,x as K,v as $}from"./index.4894e768.js";import{s as W,c as Z}from"./FetchAssociatedFeatureLayer.84f9d42b.js";import{s as z,a as B,u as J,m as H}from"./I3SLayerDefinitions.d8f83305.js";import{T as X}from"./SceneService.fcfa1e87.js";import"./resourceUtils.004767e5.js";let Y=class extends p{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};a([n({type:String,json:{read:!0,write:!0}})],Y.prototype,"name",void 0),a([n({type:String,json:{read:!0,write:!0}})],Y.prototype,"field",void 0),a([n({type:[Number],json:{read:!0,write:!0}})],Y.prototype,"currentRangeExtent",void 0),a([n({type:[Number],json:{read:!0,write:!0}})],Y.prototype,"fullRangeExtent",void 0),a([n({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],Y.prototype,"type",void 0),Y=a([l("esri.layers.support.RangeInfo")],Y);var ee=Y;const te=["3DObject","Point"],se=d.getLogger("esri.layers.SceneLayer"),re=$();let ie=class extends(X(y(u(c(h(f(g))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.definitionExpression=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.cachedDrawingInfo={color:!1},this.editingEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0}normalizeCtorArgs(e,t){return"string"==typeof e?o({url:e},t):e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){const t=this.getField(e);return t&&t.domain?t.domain:null}get fieldsIndex(){return new m(this.fields)}readNodePages(e,t,s){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:z.fromJSON(e,s)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get geometryType(){return ae[this.profile]||"mesh"}set renderer(e){v(e,this.fields),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){const e=b(this.associatedLayer)&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:W,{query:t,editing:{supportsGlobalId:s,supportsRollbackOnFailure:r,supportsUploadWithItemId:i},data:{supportsZ:o,supportsM:a,isVersioned:n},operations:{supportsEditing:l,supportsUpdate:p}}=e,d=e.operations.supportsChangeTracking;return{query:t,editing:{supportsGlobalId:s,supportsRollbackOnFailure:r,supportsGeometryUpdate:!1,supportsUploadWithItemId:i},data:{supportsZ:o,supportsM:a,isVersioned:n},operations:{supportsEditing:l&&d,supportsAdd:!1,supportsDelete:!1,supportsUpdate:p&&d}}}get defaultPopupTemplate(){return b(this.associatedLayer)||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return b(this.associatedLayer)?this.associatedLayer.displayField:null}readProfile(e,t){const s=t.store.profile;return null!=s&&oe[s]?oe[s]:(se.error("Unknown or missing profile",{profile:s,layer:this}),"mesh-pyramids")}load(e){const t=b(e)?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then((()=>this._fetchService(t)),(()=>this._fetchService(t))).then((()=>I([this._verifyRootNodeAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t)]))).then((()=>this._validateElevationInfo())).then((()=>this._applyAssociatedLayerOverrides())).then((()=>this._populateFieldUsageInfo())).then((()=>M(this,{origin:"service"},t))).then((()=>v(this.renderer,this.fields)));return this.addResolvingPromise(s),w(this)}createQuery(){const e=new L;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e&&e.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryObjectIds(e||this.createQuery(),t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(se.error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return F(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return b(e)&&e.loaded?w(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),S(this.associatedLayer))throw new O("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new O("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){if(await this.load(t),!this.statisticsInfo)throw new O("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const s=this.fieldsIndex.get(e);if(!s)throw new O("scenelayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const r of this.statisticsInfo)if(r.name===s.name){const e=j(this.parsedUrl.path,r.href);return _(e,{query:{f:"json"},responseType:"json",signal:t?t.signal:null}).then((e=>e.data))}throw new O("scenelayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(1,o(o({},t),{getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"}),e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(0,e)}async applyEdits(e,t){const s=await import("./editingSupport.3345c9ad.js");if(await this.load(),S(this.associatedLayer))throw new O(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),s.applyEdits(this,this.associatedLayer.source,e,t)}on(e,t){return super.on(e,t)}validateLayer(e){if(e.layerType&&-1===te.indexOf(e.layerType))throw new O("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new O("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new O("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});!function(e,t){let s=!1,r=!1;if(null==e)s=!0,r=!0;else{const i=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":s=!0,r=i;break;case"vertex-reference-frame":s=!0,r=!i;break;default:s=!1}}if(!s)throw new O("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!r)throw new O("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new O("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!(!this.attributeStorageInfo||!this.attributeStorageInfo.some((t=>t.name===e.name))),s=!!(b(this.associatedLayer)&&this.associatedLayer.fields&&this.associatedLayer.fields.some((t=>t&&e.name===t.name))),r={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||s,supportsLayerQuery:s};this._fieldUsageInfo[e.name]=r}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides()}_applyAssociatedLayerFieldsOverrides(){if(S(this.associatedLayer)||!this.associatedLayer.fields)return;let e=null;for(const t of this.associatedLayer.fields){const s=this.getField(t.name);s?(!s.domain&&t.domain&&(s.domain=t.domain.clone()),s.editable=t.editable,s.nullable=t.nullable):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(S(this.associatedLayer))return;const e=["popupTemplate","popupEnabled"],t=E(this);for(let s=0;s<e.length;s++){const r=e[s];this._buddyIsMoreImportant(r)&&(t.setDefaultOrigin(this.associatedLayer.originOf(r)),t.set(r,this.associatedLayer[r]),t.setDefaultOrigin("user"))}}async _setAssociatedFeatureLayer(e){if(-1===["mesh-pyramids","points"].indexOf(this.profile))return;const t=new Z(this.parsedUrl,this.portalItem,e);try{this.associatedLayer=await t.fetch()}catch(s){T(s)||this._logWarningOnPopupEnabled()}}_logWarningOnPopupEnabled(){x(this,["popupTemplate","popupEnabled"],(()=>this.popupEnabled&&null!=this.popupTemplate)).then((()=>()=>{const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?se.warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):se.info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}))}_buddyIsMoreImportant(e){if(S(this.associatedLayer))return!1;const t=this.originIdOf(e),s=this.associatedLayer.originIdOf(e);return null!=s&&s<=2?null==t||t<2:null!=s&&s<=3&&(null==t||t<3)}_validateElevationInfo(){const e=this.elevationInfo;e&&("mesh-pyramids"===this.profile&&"absolute-height"!==e.mode&&se.warn(".elevationInfo=","Mesh scene layers only support absolute-height elevation mode"),e.featureExpressionInfo&&"0"!==e.featureExpressionInfo.expression&&se.warn(".elevationInfo=","Scene layers do not support featureExpressionInfo"))}};a([n({types:{key:"type",base:P,typeMap:{selection:D}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],ie.prototype,"featureReduction",void 0),a([n({type:[ee],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],ie.prototype,"rangeInfos",void 0),a([n({json:{read:!1}})],ie.prototype,"associatedLayer",void 0),a([n({type:["show","hide"]})],ie.prototype,"listMode",void 0),a([n({type:["ArcGISSceneServiceLayer"]})],ie.prototype,"operationalLayerType",void 0),a([n({json:{read:!1},readOnly:!0})],ie.prototype,"type",void 0),a([n(o(o({},re.fields),{readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}}))],ie.prototype,"fields",void 0),a([n({readOnly:!0,dependsOn:["fields"]})],ie.prototype,"fieldsIndex",null),a([n(re.outFields)],ie.prototype,"outFields",void 0),a([n({type:z,readOnly:!0,json:{read:!1}})],ie.prototype,"nodePages",void 0),a([A("service","nodePages",["nodePages","pointNodePages"])],ie.prototype,"readNodePages",null),a([n({type:[B],readOnly:!0})],ie.prototype,"materialDefinitions",void 0),a([n({type:[J],readOnly:!0})],ie.prototype,"textureSetDefinitions",void 0),a([n({type:[H],readOnly:!0})],ie.prototype,"geometryDefinitions",void 0),a([n({readOnly:!0})],ie.prototype,"serviceUpdateTimeStamp",void 0),a([n({readOnly:!0})],ie.prototype,"attributeStorageInfo",void 0),a([n({readOnly:!0})],ie.prototype,"statisticsInfo",void 0),a([n({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:!0}})],ie.prototype,"definitionExpression",void 0),a([n({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],ie.prototype,"path",void 0),a([n(U)],ie.prototype,"elevationInfo",null),a([n({type:String,dependsOn:["profile"]})],ie.prototype,"geometryType",null),a([n(R)],ie.prototype,"labelsVisible",void 0),a([n({type:[q],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:K},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:K},write:!0}})],ie.prototype,"labelingInfo",void 0),a([n(Q)],ie.prototype,"legendEnabled",void 0),a([n(N)],ie.prototype,"opacity",void 0),a([n({types:k,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],ie.prototype,"renderer",null),a([n({json:{read:!1}})],ie.prototype,"cachedDrawingInfo",void 0),a([A("service","cachedDrawingInfo")],ie.prototype,"readCachedDrawingInfo",null),a([n({readOnly:!0,json:{read:!1},dependsOn:["associatedLayer.capabilities"]})],ie.prototype,"capabilities",null),a([n({type:Boolean,json:{read:!1}})],ie.prototype,"editingEnabled",void 0),a([n(G)],ie.prototype,"popupEnabled",void 0),a([n({type:C,json:{name:"popupInfo",write:!0}})],ie.prototype,"popupTemplate",void 0),a([n({readOnly:!0,json:{read:!1},dependsOn:["fields","title","attributeStorageInfo","associatedLayer"]})],ie.prototype,"defaultPopupTemplate",null),a([n({type:String,json:{read:!1}})],ie.prototype,"objectIdField",void 0),a([A("service","objectIdField",["objectIdField","fields"])],ie.prototype,"readObjectIdField",null),a([n({type:String,json:{read:!1}})],ie.prototype,"globalIdField",void 0),a([A("service","globalIdField",["globalIdField","fields"])],ie.prototype,"readGlobalIdField",null),a([n({readOnly:!0,type:String,json:{read:!1},dependsOn:["associatedLayer.displayField"]})],ie.prototype,"displayField",null),a([n({type:String,json:{read:!1}})],ie.prototype,"profile",void 0),a([A("service","profile",["store.profile"])],ie.prototype,"readProfile",null),a([n({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],ie.prototype,"normalReferenceFrame",void 0),a([n(V)],ie.prototype,"screenSizePerspectiveEnabled",void 0),ie=a([l("esri.layers.SceneLayer")],ie);const oe={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},ae={"mesh-pyramids":"mesh",points:"point",lines:"polyline",polygons:"polygon"};var ne=ie;export default ne;
