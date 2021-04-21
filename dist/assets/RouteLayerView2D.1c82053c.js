import{W as e,U as t,aZ as i,e as s,i as r}from"./vendor.1ee57f36.js";import{l as a,p as o}from"./LayerView2D.5b971eca.js";import{Q as p}from"./GraphicsView2D.5ff45ce2.js";import"./Container.c19388ee.js";import"./mat4f32.65c405e6.js";import"./rbush.d43ba1fa.js";import"./json.9d10e1a3.js";import"./quickselect.53c6798b.js";import"./shapingUtils.66b0bc31.js";import"./BidiEngine.39026c84.js";import"./MD5.89293f8b.js";import"./Utils.88967ee0.js";import"./MaterialKey.464cac5a.js";import"./visualVariablesUtils.dc4022b6.js";import"./Rect.8611b8cd.js";import"./WGLMeshFactory.b3d89ebf.js";import"./index.4894e768.js";import"./cimAnalyzer.a961a551.js";import"./quantizationUtils.66d2dc60.js";import"./CIMSymbolHelper.2ecfa4b9.js";import"./VertexBuffer.19222be6.js";import"./CircularArray.1d7faf48.js";import"./TurboLine.6302d753.js";import"./GeometryUtils.4f6b8486.js";import"./FeatureContainer.e42ac772.js";import"./TileContainer.7d423330.js";import"./WGLContainer.df898e6a.js";import"./ShaderCompiler.00c23a07.js";import"./Program.76c009ec.js";import"./earcut.4e65dd4c.js";import"./ComputedAttributeStorage.637c93e6.js";import"./FeatureSetReader.3ec5c3db.js";import"./centroid.b04b550b.js";import"./graphicsUtils.0fbe3e39.js";let c=class extends(a(o)){constructor(){super(...arguments),this._handles=new e,this._popupTemplates=new Map,this.graphicsViews=[]}hitTest(e,s){if(this.suspended||!this.graphicsViews.length)return t();const r=this.graphicsViews.map((t=>t.hitTest(e,s)));return i(r).then((e=>e.filter(((e,t)=>(e&&(e.popupTemplate=this._popupTemplates.get(this.graphicsViews[t]),e.layer=this.layer,e.sourceLayer=this.layer),!!e)))[0]||null))}update(e){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(e)}attach(){this.layer.featureCollections.forEach((e=>{const t=new p({view:this.view,graphics:e.source,requestUpdateCallback:()=>this.requestUpdate()});t.renderer=e.renderer,this._popupTemplates.set(t,e.popupTemplate),this.graphicsViews.push(t),this.container.addChild(t.container)}))}detach(){this.container.removeAllChildren();for(const e of this.graphicsViews)e.destroy(),e.view=null,e.renderer=null;this.graphicsViews.length=0,this._handles.removeAll(),this._popupTemplates=null}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews)e.viewChange()}};c=s([r("esri.views.2d.layers.RouteLayerView2D")],c);var h=c;export default h;
