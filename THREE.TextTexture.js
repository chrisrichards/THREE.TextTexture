(function(a,b){'object'==typeof exports&&'undefined'!=typeof module?module.exports=b(require('three')):'function'==typeof define&&define.amd?define(['three'],b):(a.THREE=a.THREE||{},a.THREE.TextTexture=b(a.THREE))})(this,function(a){'use strict';function b(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function c(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function d(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}a=a&&a.hasOwnProperty('default')?a['default']:a;var e=document.createElement('canvas').getContext('2d'),f=function(a,b){return e.font=a,e.measureText(b)},g=function(a,b){var c=-Infinity;return a.forEach(function(a){c=Math.max(b(a),c)}),c},h=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),i=function(e){function i(){var d=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=d.autoRedraw,f=d.text,g=void 0===f?'':f,h=d.fontStyle,j=void 0===h?'normal':h,k=d.fontVariant,l=void 0===k?'normal':k,m=d.fontWeight,n=void 0===m?'normal':m,o=d.fontSize,p=void 0===o?16:o,q=d.fontFamily,r=void 0===q?'sans-serif':q,s=d.textAlign,t=void 0===s?'center':s,u=d.lineHeight,v=void 0===u?1:u,w=d.padding,x=void 0===w?1/4:w,y=d.magFilter,z=void 0===y?a.LinearFilter:y,A=d.minFilter,B=void 0===A?a.LinearFilter:A,C=d.mapping,D=d.wrapS,E=d.wrapT,F=d.format,G=d.type,H=d.anisotropy;b(this,i);var I=c(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,document.createElement('canvas'),C,D,E,z,B,F,G,H));return I.autoRedraw=void 0===e||e,I._text=g,I._fontStyle=j,I._fontVariant=l,I._fontWeight=n,I._fontSize=p,I._fontFamily=r,I._textAlign=t,I._lineHeight=v,I._padding=x,I.redraw(),I}return d(i,e),h(i,[{key:'redraw',value:function(){var a=this,b=this.image.getContext('2d');if(b.clearRect(0,0,b.canvas.width,b.canvas.height),this.textBoxWidthInPixels&&this.textBoxHeightInPixels){b.canvas.width=this.paddingBoxWidthInPixels,b.canvas.height=this.paddingBoxHeightInPixels,b.font=this.font,b.textBaseline='middle',b.fillStyle='white';var c;switch(this.textAlign){case'left':b.textAlign='left',c=this.paddingInPixels;break;case'right':b.textAlign='right',c=this.paddingInPixels+this.textBoxWidthInPixels;break;case'center':b.textAlign='center',c=this.paddingInPixels+this.textBoxWidthInPixels/2;}var d=this.paddingInPixels+this.fontSize/2;this.lines.forEach(function(e){b.fillText(e,c,d),d+=a.lineHeightInPixels})}else b.canvas.width=b.canvas.height=1;this.needsUpdate=!0}},{key:'_redrawIfAuto',value:function(){this.autoRedraw&&this.redraw()}},{key:'_computeLines',value:function(){return this.text?this.text.split('\n'):[]}},{key:'_computeFont',value:function(){return[this.fontStyle,this.fontVariant,this.fontWeight,this.fontSize+'px',this.fontFamily].join(' ')}},{key:'_computeTextWidthInPixels',value:function(){var a=this;return this.lines.length?g(this.lines,function(b){return f(a.font,b).width}):0}},{key:'text',get:function(){return this._text},set:function(a){this._text!==a&&(this._text=a,this._lines=void 0,this._textBoxWidth=void 0,this._redrawIfAuto())}},{key:'lines',get:function(){return void 0===this._lines&&(this._lines=this._computeLines()),this._lines}},{key:'linesCount',get:function(){return this.lines.length}},{key:'fontStyle',get:function(){return this._fontStyle},set:function(a){this._fontStyle!==a&&(this._fontStyle=a,this._font=void 0,this._textBoxWidth=void 0,this._redrawIfAuto())}},{key:'fontVariant',get:function(){return this._fontVariant},set:function(a){this._fontVariant!==a&&(this._fontVariant=a,this._font=void 0,this._textBoxWidth=void 0,this._redrawIfAuto())}},{key:'fontWeight',get:function(){return this._fontWeight},set:function(a){this._fontWeight!==a&&(this._fontWeight=a,this._font=void 0,this._textBoxWidth=void 0,this._redrawIfAuto())}},{key:'fontSize',get:function(){return this._fontSize},set:function(a){this._fontSize!==a&&(this._fontSize=a,this._font=void 0,this._textBoxWidth=void 0,this._redrawIfAuto())}},{key:'fontFamily',get:function(){return this._fontFamily},set:function(a){this._fontFamily!==a&&(this._fontFamily=a,this._font=void 0,this._textBoxWidth=void 0,this._redrawIfAuto())}},{key:'font',get:function(){return void 0===this._font&&(this._font=this._computeFont()),this._font}},{key:'textAlign',get:function(){return this._textAlign},set:function(a){this._textAlign!==a&&(this._textAlign=a,this._redrawIfAuto())}},{key:'lineHeight',get:function(){return this._lineHeight},set:function(a){this._lineHeight!==a&&(this._lineHeight=a,this._redrawIfAuto())}},{key:'lineHeightInPixels',get:function(){return this.fontSize*this.lineHeight}},{key:'textBoxWidthInPixels',get:function(){return void 0===this._textBoxWidth&&(this._textBoxWidth=this._computeTextWidthInPixels()),this._textBoxWidth}},{key:'textBoxHeight',get:function(){return this.lineHeight*(this.linesCount-1)+1}},{key:'textBoxHeightInPixels',get:function(){return this.fontSize*this.textBoxHeight}},{key:'padding',get:function(){return this._padding},set:function(a){this._padding!==a&&(this._padding=a,this._redrawIfAuto())}},{key:'paddingInPixels',get:function(){return this.fontSize*this.padding}},{key:'paddingBoxWidthInPixels',get:function(){return this.textBoxWidthInPixels+2*this.paddingInPixels}},{key:'paddingBoxHeight',get:function(){return this.textBoxHeight+2*this.padding}},{key:'paddingBoxHeightInPixels',get:function(){return this.textBoxHeightInPixels+2*this.paddingInPixels}},{key:'aspect',get:function(){return this.image.width&&this.image.height?this.image.width/this.image.height:1}}]),i}(a.Texture);return i});
