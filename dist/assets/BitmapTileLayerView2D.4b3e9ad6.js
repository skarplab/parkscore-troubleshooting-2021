import{e as i,i as e}from"./vendor.1ee57f36.js";import{o as t}from"./BitmapTileContainer.407aeb73.js";const a=a=>{let r=class extends a{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new t(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}};return r=i([e("esri.views.2d.layers.BitmapTileLayerView2D")],r),r};export{a as i};
