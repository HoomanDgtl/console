(self.webpackChunk_leap_cosmos_extension=self.webpackChunk_leap_cosmos_extension||[]).push([[5069],{536631:(Lt,Tt,at)=>{"use strict";at.d(Tt,{Z:()=>Z});var st=Number.isNaN||function(N){return typeof N=="number"&&N!==N};function H(q,N){return!!(q===N||st(q)&&st(N))}function ut(q,N){if(q.length!==N.length)return!1;for(var j=0;j<q.length;j++)if(!H(q[j],N[j]))return!1;return!0}function et(q,N){N===void 0&&(N=ut);var j,ot=[],ct,ft=!1;function it(){for(var J=[],ht=0;ht<arguments.length;ht++)J[ht]=arguments[ht];return ft&&j===this&&N(J,ot)||(ct=q.apply(this,J),ft=!0,j=this,ot=J),ct}return it}const Z=et},800693:function(Lt,Tt,at){(function(st,H){H(Tt,at(202784))})(this,function(st,H){"use strict";function ut(d){return d*Math.PI/180}function et(d,l,S){return d>S?S:d<l?l:d}function Z(d,l){return l/100*d}function q(d,l){return d+l/2}function N(d,l){var S=ut(d);return{dx:l*Math.cos(S),dy:l*Math.sin(S)}}function j(d){return typeof d=="number"}function ot(d,l){return typeof d=="function"?d(l):d}function ct(d,l){var S=Object.assign({},l,d);for(var M in l)d[M]===void 0&&(S[M]=l[M]);return S}function ft(d){for(var l=0,S=0;S<d.length;S++)l+=d[S].value;return l}function it(d){for(var l=d.data,S=d.lengthAngle,M=d.totalValue,R=d.paddingAngle,A=d.startAngle,B=M||ft(l),U=et(S,-360,360),G=Math.abs(U)===360?l.length:l.length-1,X=Math.abs(R)*Math.sign(S),V=X*G,$=U-V,Q=0,Ct=[],gt=0;gt<l.length;gt++){var mt=l[gt],wt=B===0?0:mt.value/B*100,Mt=Z($,wt),vt=Q+A;Q=Q+Mt+X,Ct.push(Object.assign({percentage:wt,startAngle:vt,degrees:Mt},mt))}return Ct}function J(d,l){if(d==null)return{};var S={},M=Object.keys(d),R,A;for(A=0;A<M.length;A++)R=M[A],!(l.indexOf(R)>=0)&&(S[R]=d[R]);return S}function ht(d){var l=d.renderLabel,S=d.labelProps,M=l(S);if(typeof M=="string"||typeof M=="number"){S.dataEntry,S.dataIndex;var R=J(S,["dataEntry","dataIndex"]);return H.createElement("text",Object.assign({dominantBaseline:"central"},R),M)}return H.isValidElement(M)?M:null}function Et(d){var l=1e14;return Math.round((d+Number.EPSILON)*l)/l}function kt(d){var l=d.labelPosition,S=d.lineWidth,M=d.labelHorizontalShift,R=Et(M);if(R===0)return"middle";if(l>100)return R>0?"start":"end";var A=100-S;return l<A?R>0?"end":"start":"middle"}function Ht(d,l){return d.map(function(S,M){var R,A=(R=ot(l.segmentsShift,M))!=null?R:0,B=Z(l.radius,l.labelPosition)+A,U=N(q(S.startAngle,S.degrees),B),G=U.dx,X=U.dy,V={x:l.center[0],y:l.center[1],dx:G,dy:X,textAnchor:kt({labelPosition:l.labelPosition,lineWidth:l.lineWidth,labelHorizontalShift:G}),dataEntry:S,dataIndex:M,style:ot(l.labelStyle,M)};return V})}function Nt(d,l){var S=l.label;if(S)return Ht(d,l).map(function(M,R){return H.createElement(ht,{key:"label-"+(M.dataEntry.key||R),renderLabel:S,labelProps:M})})}var bt=function(l,S,M,R,A){var B=A-R;if(B===0)return[];var U=M*Math.cos(R)+l,G=M*Math.sin(R)+S,X=M*Math.cos(A)+l,V=M*Math.sin(A)+S,$=Math.abs(B)<=Math.PI?"0":"1",Q=B<0?"0":"1";return[["M",U,G],["A",M,M,0,$,Q,X,V]]},Pt=bt,_t=Pt;function Wt(d,l,S,M,R){var A=et(M,-359.999,359.999);return _t(d,l,R,ut(S),ut(S+A)).map(function(B){return B.join(" ")}).join(" ")}function yt(d){var l=d.cx,S=d.cy,M=d.lengthAngle,R=d.lineWidth,A=d.radius,B=d.shift,U=B===void 0?0:B,G=d.reveal,X=d.rounded,V=d.startAngle,$=d.title,Q=J(d,["cx","cy","lengthAngle","lineWidth","radius","shift","reveal","rounded","startAngle","title"]),Ct=A-R/2,gt=N(q(V,M),U),mt=gt.dx,wt=gt.dy,Mt=Wt(l+mt,S+wt,V,M,Ct),vt,Ft;if(j(G)){var i=ut(Ct)*M;vt=Math.abs(i),Ft=vt-Z(vt,G)}return H.createElement("path",Object.assign({d:Mt,fill:"none",strokeWidth:R,strokeDasharray:vt,strokeDashoffset:Ft,strokeLinecap:X?"round":void 0},Q),$&&H.createElement("title",null,$))}function nt(d,l,S){var M="stroke-dashoffset "+d+"ms "+l;return S&&S.transition&&(M=M+","+S.transition),{transition:M}}function At(d){return d.animate&&!j(d.reveal)?100:d.reveal}function dt(d,l){return d&&function(S){d(S,l)}}function Dt(d,l,S){var M=S??At(l),R=l.radius,A=l.center,B=A[0],U=A[1],G=Z(R,l.lineWidth),X=d.map(function(V,$){var Q=ot(l.segmentsStyle,$);return H.createElement(yt,{cx:B,cy:U,key:V.key||$,lengthAngle:V.degrees,lineWidth:G,radius:R,rounded:l.rounded,reveal:M,shift:ot(l.segmentsShift,$),startAngle:V.startAngle,title:V.title,style:Object.assign({},Q,l.animate&&nt(l.animationDuration,l.animationEasing,Q)),stroke:V.color,tabIndex:l.segmentsTabIndex,onBlur:dt(l.onBlur,$),onClick:dt(l.onClick,$),onFocus:dt(l.onFocus,$),onKeyDown:dt(l.onKeyDown,$),onMouseOver:dt(l.onMouseOver,$),onMouseOut:dt(l.onMouseOut,$)})});return l.background&&X.unshift(H.createElement(yt,{cx:B,cy:U,key:"bg",lengthAngle:l.lengthAngle,lineWidth:G,radius:R,rounded:l.rounded,startAngle:l.startAngle,stroke:l.background})),X}var Ot={animationDuration:500,animationEasing:"ease-out",center:[50,50],data:[],labelPosition:50,lengthAngle:360,lineWidth:100,paddingAngle:0,radius:50,startAngle:0,viewBoxSize:[100,100]};function Ut(d){var l=ct(d,Ot),S=H.useState(l.animate?0:null),M=S[0],R=S[1];H.useEffect(function(){l.animate&&R(null)},[]);var A=it(l);return H.createElement("svg",{viewBox:"0 0 "+l.viewBoxSize[0]+" "+l.viewBoxSize[1],width:"100%",height:"100%",className:l.className,style:l.style},Dt(A,l,M),Nt(A,l),l.children)}st.PieChart=Ut,st.pieChartDefaultProps=Ot})},550166:(Lt,Tt,at)=>{"use strict";at.d(Tt,{S_:()=>Q});var st=at(807896),H=at(580753),ut=at(836981),et=at(536631),Z=at(202784),q=typeof performance=="object"&&typeof performance.now=="function",N=q?function(){return performance.now()}:function(){return Date.now()};function j(i){cancelAnimationFrame(i.id)}function ot(i,t){var e=N();function n(){N()-e>=t?i.call(null):a.id=requestAnimationFrame(n)}var a={id:requestAnimationFrame(n)};return a}var ct=-1;function ft(i){if(i===void 0&&(i=!1),ct===-1||i){var t=document.createElement("div"),e=t.style;e.width="50px",e.height="50px",e.overflow="scroll",document.body.appendChild(t),ct=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return ct}var it=null;function J(i){if(i===void 0&&(i=!1),it===null||i){var t=document.createElement("div"),e=t.style;e.width="50px",e.height="50px",e.overflow="scroll",e.direction="rtl";var n=document.createElement("div"),a=n.style;return a.width="100px",a.height="100px",t.appendChild(n),document.body.appendChild(t),t.scrollLeft>0?it="positive-descending":(t.scrollLeft=1,t.scrollLeft===0?it="negative":it="positive-ascending"),document.body.removeChild(t),it}return it}var ht=150,Et=function(t){var e=t.columnIndex,n=t.data,a=t.rowIndex;return a+":"+e},kt=null,Ht=null,Nt=null;function bt(i){var t,e=i.getColumnOffset,n=i.getColumnStartIndexForOffset,a=i.getColumnStopIndexForStartIndex,u=i.getColumnWidth,s=i.getEstimatedTotalHeight,c=i.getEstimatedTotalWidth,f=i.getOffsetForColumnAndAlignment,p=i.getOffsetForRowAndAlignment,g=i.getRowHeight,x=i.getRowOffset,C=i.getRowStartIndexForOffset,_=i.getRowStopIndexForStartIndex,P=i.initInstanceProps,o=i.shouldResetStyleCacheOnItemSizeChange,v=i.validateProps;return t=function(I){(0,ut.Z)(y,I);function y(b){var r;return r=I.call(this,b)||this,r._instanceProps=P(r.props,(0,H.Z)(r)),r._resetIsScrollingTimeoutId=null,r._outerRef=void 0,r.state={instance:(0,H.Z)(r),isScrolling:!1,horizontalScrollDirection:"forward",scrollLeft:typeof r.props.initialScrollLeft=="number"?r.props.initialScrollLeft:0,scrollTop:typeof r.props.initialScrollTop=="number"?r.props.initialScrollTop:0,scrollUpdateWasRequested:!1,verticalScrollDirection:"forward"},r._callOnItemsRendered=void 0,r._callOnItemsRendered=(0,et.Z)(function(m,h,w,z,T,W,D,k){return r.props.onItemsRendered({overscanColumnStartIndex:m,overscanColumnStopIndex:h,overscanRowStartIndex:w,overscanRowStopIndex:z,visibleColumnStartIndex:T,visibleColumnStopIndex:W,visibleRowStartIndex:D,visibleRowStopIndex:k})}),r._callOnScroll=void 0,r._callOnScroll=(0,et.Z)(function(m,h,w,z,T){return r.props.onScroll({horizontalScrollDirection:w,scrollLeft:m,scrollTop:h,verticalScrollDirection:z,scrollUpdateWasRequested:T})}),r._getItemStyle=void 0,r._getItemStyle=function(m,h){var w=r.props,z=w.columnWidth,T=w.direction,W=w.rowHeight,D=r._getItemStyleCache(o&&z,o&&T,o&&W),k=m+":"+h,F;if(D.hasOwnProperty(k))F=D[k];else{var L=e(r.props,h,r._instanceProps),E=T==="rtl";D[k]=F={position:"absolute",left:E?void 0:L,right:E?L:void 0,top:x(r.props,m,r._instanceProps),height:g(r.props,m,r._instanceProps),width:u(r.props,h,r._instanceProps)}}return F},r._getItemStyleCache=void 0,r._getItemStyleCache=(0,et.Z)(function(m,h,w){return{}}),r._onScroll=function(m){var h=m.currentTarget,w=h.clientHeight,z=h.clientWidth,T=h.scrollLeft,W=h.scrollTop,D=h.scrollHeight,k=h.scrollWidth;r.setState(function(F){if(F.scrollLeft===T&&F.scrollTop===W)return null;var L=r.props.direction,E=T;if(L==="rtl")switch(J()){case"negative":E=-T;break;case"positive-descending":E=k-z-T;break}E=Math.max(0,Math.min(E,k-z));var K=Math.max(0,Math.min(W,D-w));return{isScrolling:!0,horizontalScrollDirection:F.scrollLeft<T?"forward":"backward",scrollLeft:E,scrollTop:K,verticalScrollDirection:F.scrollTop<W?"forward":"backward",scrollUpdateWasRequested:!1}},r._resetIsScrollingDebounced)},r._outerRefSetter=function(m){var h=r.props.outerRef;r._outerRef=m,typeof h=="function"?h(m):h!=null&&typeof h=="object"&&h.hasOwnProperty("current")&&(h.current=m)},r._resetIsScrollingDebounced=function(){r._resetIsScrollingTimeoutId!==null&&j(r._resetIsScrollingTimeoutId),r._resetIsScrollingTimeoutId=ot(r._resetIsScrolling,ht)},r._resetIsScrolling=function(){r._resetIsScrollingTimeoutId=null,r.setState({isScrolling:!1},function(){r._getItemStyleCache(-1)})},r}y.getDerivedStateFromProps=function(r,m){return Pt(r,m),v(r),null};var O=y.prototype;return O.scrollTo=function(r){var m=r.scrollLeft,h=r.scrollTop;m!==void 0&&(m=Math.max(0,m)),h!==void 0&&(h=Math.max(0,h)),this.setState(function(w){return m===void 0&&(m=w.scrollLeft),h===void 0&&(h=w.scrollTop),w.scrollLeft===m&&w.scrollTop===h?null:{horizontalScrollDirection:w.scrollLeft<m?"forward":"backward",scrollLeft:m,scrollTop:h,scrollUpdateWasRequested:!0,verticalScrollDirection:w.scrollTop<h?"forward":"backward"}},this._resetIsScrollingDebounced)},O.scrollToItem=function(r){var m=r.align,h=m===void 0?"auto":m,w=r.columnIndex,z=r.rowIndex,T=this.props,W=T.columnCount,D=T.height,k=T.rowCount,F=T.width,L=this.state,E=L.scrollLeft,K=L.scrollTop,Y=ft();w!==void 0&&(w=Math.max(0,Math.min(w,W-1))),z!==void 0&&(z=Math.max(0,Math.min(z,k-1)));var rt=s(this.props,this._instanceProps),tt=c(this.props,this._instanceProps),St=tt>F?Y:0,It=rt>D?Y:0;this.scrollTo({scrollLeft:w!==void 0?f(this.props,w,h,E,this._instanceProps,It):E,scrollTop:z!==void 0?p(this.props,z,h,K,this._instanceProps,St):K})},O.componentDidMount=function(){var r=this.props,m=r.initialScrollLeft,h=r.initialScrollTop;if(this._outerRef!=null){var w=this._outerRef;typeof m=="number"&&(w.scrollLeft=m),typeof h=="number"&&(w.scrollTop=h)}this._callPropsCallbacks()},O.componentDidUpdate=function(){var r=this.props.direction,m=this.state,h=m.scrollLeft,w=m.scrollTop,z=m.scrollUpdateWasRequested;if(z&&this._outerRef!=null){var T=this._outerRef;if(r==="rtl")switch(J()){case"negative":T.scrollLeft=-h;break;case"positive-ascending":T.scrollLeft=h;break;default:var W=T.clientWidth,D=T.scrollWidth;T.scrollLeft=D-W-h;break}else T.scrollLeft=Math.max(0,h);T.scrollTop=Math.max(0,w)}this._callPropsCallbacks()},O.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&j(this._resetIsScrollingTimeoutId)},O.render=function(){var r=this.props,m=r.children,h=r.className,w=r.columnCount,z=r.direction,T=r.height,W=r.innerRef,D=r.innerElementType,k=r.innerTagName,F=r.itemData,L=r.itemKey,E=L===void 0?Et:L,K=r.outerElementType,Y=r.outerTagName,rt=r.rowCount,tt=r.style,St=r.useIsScrolling,It=r.width,pt=this.state.isScrolling,lt=this._getHorizontalRangeToRender(),xt=lt[0],Kt=lt[1],$t=this._getVerticalRangeToRender(),Vt=$t[0],Zt=$t[1],Bt=[];if(w>0&&rt)for(var Rt=Vt;Rt<=Zt;Rt++)for(var zt=xt;zt<=Kt;zt++)Bt.push((0,Z.createElement)(m,{columnIndex:zt,data:F,isScrolling:St?pt:void 0,key:E({columnIndex:zt,data:F,rowIndex:Rt}),rowIndex:Rt,style:this._getItemStyle(Rt,zt)}));var jt=s(this.props,this._instanceProps),qt=c(this.props,this._instanceProps);return(0,Z.createElement)(K||Y||"div",{className:h,onScroll:this._onScroll,ref:this._outerRefSetter,style:(0,st.Z)({position:"relative",height:T,width:It,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:z},tt)},(0,Z.createElement)(D||k||"div",{children:Bt,ref:W,style:{height:jt,pointerEvents:pt?"none":void 0,width:qt}}))},O._callPropsCallbacks=function(){var r=this.props,m=r.columnCount,h=r.onItemsRendered,w=r.onScroll,z=r.rowCount;if(typeof h=="function"&&m>0&&z>0){var T=this._getHorizontalRangeToRender(),W=T[0],D=T[1],k=T[2],F=T[3],L=this._getVerticalRangeToRender(),E=L[0],K=L[1],Y=L[2],rt=L[3];this._callOnItemsRendered(W,D,E,K,k,F,Y,rt)}if(typeof w=="function"){var tt=this.state,St=tt.horizontalScrollDirection,It=tt.scrollLeft,pt=tt.scrollTop,lt=tt.scrollUpdateWasRequested,xt=tt.verticalScrollDirection;this._callOnScroll(It,pt,St,xt,lt)}},O._getHorizontalRangeToRender=function(){var r=this.props,m=r.columnCount,h=r.overscanColumnCount,w=r.overscanColumnsCount,z=r.overscanCount,T=r.rowCount,W=this.state,D=W.horizontalScrollDirection,k=W.isScrolling,F=W.scrollLeft,L=h||w||z||1;if(m===0||T===0)return[0,0,0,0];var E=n(this.props,F,this._instanceProps),K=a(this.props,E,F,this._instanceProps),Y=!k||D==="backward"?Math.max(1,L):1,rt=!k||D==="forward"?Math.max(1,L):1;return[Math.max(0,E-Y),Math.max(0,Math.min(m-1,K+rt)),E,K]},O._getVerticalRangeToRender=function(){var r=this.props,m=r.columnCount,h=r.overscanCount,w=r.overscanRowCount,z=r.overscanRowsCount,T=r.rowCount,W=this.state,D=W.isScrolling,k=W.verticalScrollDirection,F=W.scrollTop,L=w||z||h||1;if(m===0||T===0)return[0,0,0,0];var E=C(this.props,F,this._instanceProps),K=_(this.props,E,F,this._instanceProps),Y=!D||k==="backward"?Math.max(1,L):1,rt=!D||k==="forward"?Math.max(1,L):1;return[Math.max(0,E-Y),Math.max(0,Math.min(T-1,K+rt)),E,K]},y}(Z.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,useIsScrolling:!1},t}var Pt=function(t,e){var n=t.children,a=t.direction,u=t.height,s=t.innerTagName,c=t.outerTagName,f=t.overscanColumnsCount,p=t.overscanCount,g=t.overscanRowsCount,x=t.width,C=e.instance},_t=50,Wt=function(t,e){var n=t.rowCount,a=e.rowMetadataMap,u=e.estimatedRowHeight,s=e.lastMeasuredRowIndex,c=0;if(s>=n&&(s=n-1),s>=0){var f=a[s];c=f.offset+f.size}var p=n-s-1,g=p*u;return c+g},yt=function(t,e){var n=t.columnCount,a=e.columnMetadataMap,u=e.estimatedColumnWidth,s=e.lastMeasuredColumnIndex,c=0;if(s>=n&&(s=n-1),s>=0){var f=a[s];c=f.offset+f.size}var p=n-s-1,g=p*u;return c+g},nt=function(t,e,n,a){var u,s,c;if(t==="column"?(u=a.columnMetadataMap,s=e.columnWidth,c=a.lastMeasuredColumnIndex):(u=a.rowMetadataMap,s=e.rowHeight,c=a.lastMeasuredRowIndex),n>c){var f=0;if(c>=0){var p=u[c];f=p.offset+p.size}for(var g=c+1;g<=n;g++){var x=s(g);u[g]={offset:f,size:x},f+=x}t==="column"?a.lastMeasuredColumnIndex=n:a.lastMeasuredRowIndex=n}return u[n]},At=function(t,e,n,a){var u,s;t==="column"?(u=n.columnMetadataMap,s=n.lastMeasuredColumnIndex):(u=n.rowMetadataMap,s=n.lastMeasuredRowIndex);var c=s>0?u[s].offset:0;return c>=a?dt(t,e,n,s,0,a):Dt(t,e,n,Math.max(0,s),a)},dt=function(t,e,n,a,u,s){for(;u<=a;){var c=u+Math.floor((a-u)/2),f=nt(t,e,c,n).offset;if(f===s)return c;f<s?u=c+1:f>s&&(a=c-1)}return u>0?u-1:0},Dt=function(t,e,n,a,u){for(var s=t==="column"?e.columnCount:e.rowCount,c=1;a<s&&nt(t,e,a,n).offset<u;)a+=c,c*=2;return dt(t,e,n,Math.min(a,s-1),Math.floor(a/2),u)},Ot=function(t,e,n,a,u,s,c){var f=t==="column"?e.width:e.height,p=nt(t,e,n,s),g=t==="column"?yt(e,s):Wt(e,s),x=Math.max(0,Math.min(g-f,p.offset)),C=Math.max(0,p.offset-f+c+p.size);switch(a==="smart"&&(u>=C-f&&u<=x+f?a="auto":a="center"),a){case"start":return x;case"end":return C;case"center":return Math.round(C+(x-C)/2);case"auto":default:return u>=C&&u<=x?u:C>x||u<C?C:x}},Ut=bt({getColumnOffset:function(t,e,n){return nt("column",t,e,n).offset},getColumnStartIndexForOffset:function(t,e,n){return At("column",t,n,e)},getColumnStopIndexForStartIndex:function(t,e,n,a){for(var u=t.columnCount,s=t.width,c=nt("column",t,e,a),f=n+s,p=c.offset+c.size,g=e;g<u-1&&p<f;)g++,p+=nt("column",t,g,a).size;return g},getColumnWidth:function(t,e,n){return n.columnMetadataMap[e].size},getEstimatedTotalHeight:Wt,getEstimatedTotalWidth:yt,getOffsetForColumnAndAlignment:function(t,e,n,a,u,s){return Ot("column",t,e,n,a,u,s)},getOffsetForRowAndAlignment:function(t,e,n,a,u,s){return Ot("row",t,e,n,a,u,s)},getRowOffset:function(t,e,n){return nt("row",t,e,n).offset},getRowHeight:function(t,e,n){return n.rowMetadataMap[e].size},getRowStartIndexForOffset:function(t,e,n){return At("row",t,n,e)},getRowStopIndexForStartIndex:function(t,e,n,a){for(var u=t.rowCount,s=t.height,c=nt("row",t,e,a),f=n+s,p=c.offset+c.size,g=e;g<u-1&&p<f;)g++,p+=nt("row",t,g,a).size;return g},initInstanceProps:function(t,e){var n=t,a=n.estimatedColumnWidth,u=n.estimatedRowHeight,s={columnMetadataMap:{},estimatedColumnWidth:a||_t,estimatedRowHeight:u||_t,lastMeasuredColumnIndex:-1,lastMeasuredRowIndex:-1,rowMetadataMap:{}};return e.resetAfterColumnIndex=function(c,f){f===void 0&&(f=!0),e.resetAfterIndices({columnIndex:c,shouldForceUpdate:f})},e.resetAfterRowIndex=function(c,f){f===void 0&&(f=!0),e.resetAfterIndices({rowIndex:c,shouldForceUpdate:f})},e.resetAfterIndices=function(c){var f=c.columnIndex,p=c.rowIndex,g=c.shouldForceUpdate,x=g===void 0?!0:g;typeof f=="number"&&(s.lastMeasuredColumnIndex=Math.min(s.lastMeasuredColumnIndex,f-1)),typeof p=="number"&&(s.lastMeasuredRowIndex=Math.min(s.lastMeasuredRowIndex,p-1)),e._getItemStyleCache(-1),x&&e.forceUpdate()},s},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){var e=t.columnWidth,n=t.rowHeight}}),d=150,l=function(t,e){return t},S=null,M=null;function R(i){var t,e=i.getItemOffset,n=i.getEstimatedTotalSize,a=i.getItemSize,u=i.getOffsetForIndexAndAlignment,s=i.getStartIndexForOffset,c=i.getStopIndexForStartIndex,f=i.initInstanceProps,p=i.shouldResetStyleCacheOnItemSizeChange,g=i.validateProps;return t=function(x){(0,ut.Z)(C,x);function C(P){var o;return o=x.call(this,P)||this,o._instanceProps=f(o.props,(0,H.Z)(o)),o._outerRef=void 0,o._resetIsScrollingTimeoutId=null,o.state={instance:(0,H.Z)(o),isScrolling:!1,scrollDirection:"forward",scrollOffset:typeof o.props.initialScrollOffset=="number"?o.props.initialScrollOffset:0,scrollUpdateWasRequested:!1},o._callOnItemsRendered=void 0,o._callOnItemsRendered=(0,et.Z)(function(v,I,y,O){return o.props.onItemsRendered({overscanStartIndex:v,overscanStopIndex:I,visibleStartIndex:y,visibleStopIndex:O})}),o._callOnScroll=void 0,o._callOnScroll=(0,et.Z)(function(v,I,y){return o.props.onScroll({scrollDirection:v,scrollOffset:I,scrollUpdateWasRequested:y})}),o._getItemStyle=void 0,o._getItemStyle=function(v){var I=o.props,y=I.direction,O=I.itemSize,b=I.layout,r=o._getItemStyleCache(p&&O,p&&b,p&&y),m;if(r.hasOwnProperty(v))m=r[v];else{var h=e(o.props,v,o._instanceProps),w=a(o.props,v,o._instanceProps),z=y==="horizontal"||b==="horizontal",T=y==="rtl",W=z?h:0;r[v]=m={position:"absolute",left:T?void 0:W,right:T?W:void 0,top:z?0:h,height:z?"100%":w,width:z?w:"100%"}}return m},o._getItemStyleCache=void 0,o._getItemStyleCache=(0,et.Z)(function(v,I,y){return{}}),o._onScrollHorizontal=function(v){var I=v.currentTarget,y=I.clientWidth,O=I.scrollLeft,b=I.scrollWidth;o.setState(function(r){if(r.scrollOffset===O)return null;var m=o.props.direction,h=O;if(m==="rtl")switch(J()){case"negative":h=-O;break;case"positive-descending":h=b-y-O;break}return h=Math.max(0,Math.min(h,b-y)),{isScrolling:!0,scrollDirection:r.scrollOffset<h?"forward":"backward",scrollOffset:h,scrollUpdateWasRequested:!1}},o._resetIsScrollingDebounced)},o._onScrollVertical=function(v){var I=v.currentTarget,y=I.clientHeight,O=I.scrollHeight,b=I.scrollTop;o.setState(function(r){if(r.scrollOffset===b)return null;var m=Math.max(0,Math.min(b,O-y));return{isScrolling:!0,scrollDirection:r.scrollOffset<m?"forward":"backward",scrollOffset:m,scrollUpdateWasRequested:!1}},o._resetIsScrollingDebounced)},o._outerRefSetter=function(v){var I=o.props.outerRef;o._outerRef=v,typeof I=="function"?I(v):I!=null&&typeof I=="object"&&I.hasOwnProperty("current")&&(I.current=v)},o._resetIsScrollingDebounced=function(){o._resetIsScrollingTimeoutId!==null&&j(o._resetIsScrollingTimeoutId),o._resetIsScrollingTimeoutId=ot(o._resetIsScrolling,d)},o._resetIsScrolling=function(){o._resetIsScrollingTimeoutId=null,o.setState({isScrolling:!1},function(){o._getItemStyleCache(-1,null)})},o}C.getDerivedStateFromProps=function(o,v){return A(o,v),g(o),null};var _=C.prototype;return _.scrollTo=function(o){o=Math.max(0,o),this.setState(function(v){return v.scrollOffset===o?null:{scrollDirection:v.scrollOffset<o?"forward":"backward",scrollOffset:o,scrollUpdateWasRequested:!0}},this._resetIsScrollingDebounced)},_.scrollToItem=function(o,v){v===void 0&&(v="auto");var I=this.props,y=I.itemCount,O=I.layout,b=this.state.scrollOffset;o=Math.max(0,Math.min(o,y-1));var r=0;if(this._outerRef){var m=this._outerRef;O==="vertical"?r=m.scrollWidth>m.clientWidth?ft():0:r=m.scrollHeight>m.clientHeight?ft():0}this.scrollTo(u(this.props,o,v,b,this._instanceProps,r))},_.componentDidMount=function(){var o=this.props,v=o.direction,I=o.initialScrollOffset,y=o.layout;if(typeof I=="number"&&this._outerRef!=null){var O=this._outerRef;v==="horizontal"||y==="horizontal"?O.scrollLeft=I:O.scrollTop=I}this._callPropsCallbacks()},_.componentDidUpdate=function(){var o=this.props,v=o.direction,I=o.layout,y=this.state,O=y.scrollOffset,b=y.scrollUpdateWasRequested;if(b&&this._outerRef!=null){var r=this._outerRef;if(v==="horizontal"||I==="horizontal")if(v==="rtl")switch(J()){case"negative":r.scrollLeft=-O;break;case"positive-ascending":r.scrollLeft=O;break;default:var m=r.clientWidth,h=r.scrollWidth;r.scrollLeft=h-m-O;break}else r.scrollLeft=O;else r.scrollTop=O}this._callPropsCallbacks()},_.componentWillUnmount=function(){this._resetIsScrollingTimeoutId!==null&&j(this._resetIsScrollingTimeoutId)},_.render=function(){var o=this.props,v=o.children,I=o.className,y=o.direction,O=o.height,b=o.innerRef,r=o.innerElementType,m=o.innerTagName,h=o.itemCount,w=o.itemData,z=o.itemKey,T=z===void 0?l:z,W=o.layout,D=o.outerElementType,k=o.outerTagName,F=o.style,L=o.useIsScrolling,E=o.width,K=this.state.isScrolling,Y=y==="horizontal"||W==="horizontal",rt=Y?this._onScrollHorizontal:this._onScrollVertical,tt=this._getRangeToRender(),St=tt[0],It=tt[1],pt=[];if(h>0)for(var lt=St;lt<=It;lt++)pt.push((0,Z.createElement)(v,{data:w,key:T(lt,w),index:lt,isScrolling:L?K:void 0,style:this._getItemStyle(lt)}));var xt=n(this.props,this._instanceProps);return(0,Z.createElement)(D||k||"div",{className:I,onScroll:rt,ref:this._outerRefSetter,style:(0,st.Z)({position:"relative",height:O,width:E,overflow:"auto",WebkitOverflowScrolling:"touch",willChange:"transform",direction:y},F)},(0,Z.createElement)(r||m||"div",{children:pt,ref:b,style:{height:Y?"100%":xt,pointerEvents:K?"none":void 0,width:Y?xt:"100%"}}))},_._callPropsCallbacks=function(){if(typeof this.props.onItemsRendered=="function"){var o=this.props.itemCount;if(o>0){var v=this._getRangeToRender(),I=v[0],y=v[1],O=v[2],b=v[3];this._callOnItemsRendered(I,y,O,b)}}if(typeof this.props.onScroll=="function"){var r=this.state,m=r.scrollDirection,h=r.scrollOffset,w=r.scrollUpdateWasRequested;this._callOnScroll(m,h,w)}},_._getRangeToRender=function(){var o=this.props,v=o.itemCount,I=o.overscanCount,y=this.state,O=y.isScrolling,b=y.scrollDirection,r=y.scrollOffset;if(v===0)return[0,0,0,0];var m=s(this.props,r,this._instanceProps),h=c(this.props,m,r,this._instanceProps),w=!O||b==="backward"?Math.max(1,I):1,z=!O||b==="forward"?Math.max(1,I):1;return[Math.max(0,m-w),Math.max(0,Math.min(v-1,h+z)),m,h]},C}(Z.PureComponent),t.defaultProps={direction:"ltr",itemData:void 0,layout:"vertical",overscanCount:2,useIsScrolling:!1},t}var A=function(t,e){var n=t.children,a=t.direction,u=t.height,s=t.layout,c=t.innerTagName,f=t.outerTagName,p=t.width,g=e.instance;if(!1)var x},B=50,U=function(t,e,n){var a=t,u=a.itemSize,s=n.itemMetadataMap,c=n.lastMeasuredIndex;if(e>c){var f=0;if(c>=0){var p=s[c];f=p.offset+p.size}for(var g=c+1;g<=e;g++){var x=u(g);s[g]={offset:f,size:x},f+=x}n.lastMeasuredIndex=e}return s[e]},G=function(t,e,n){var a=e.itemMetadataMap,u=e.lastMeasuredIndex,s=u>0?a[u].offset:0;return s>=n?X(t,e,u,0,n):V(t,e,Math.max(0,u),n)},X=function(t,e,n,a,u){for(;a<=n;){var s=a+Math.floor((n-a)/2),c=U(t,s,e).offset;if(c===u)return s;c<u?a=s+1:c>u&&(n=s-1)}return a>0?a-1:0},V=function(t,e,n,a){for(var u=t.itemCount,s=1;n<u&&U(t,n,e).offset<a;)n+=s,s*=2;return X(t,e,Math.min(n,u-1),Math.floor(n/2),a)},$=function(t,e){var n=t.itemCount,a=e.itemMetadataMap,u=e.estimatedItemSize,s=e.lastMeasuredIndex,c=0;if(s>=n&&(s=n-1),s>=0){var f=a[s];c=f.offset+f.size}var p=n-s-1,g=p*u;return c+g},Q=R({getItemOffset:function(t,e,n){return U(t,e,n).offset},getItemSize:function(t,e,n){return n.itemMetadataMap[e].size},getEstimatedTotalSize:$,getOffsetForIndexAndAlignment:function(t,e,n,a,u,s){var c=t.direction,f=t.height,p=t.layout,g=t.width,x=c==="horizontal"||p==="horizontal",C=x?g:f,_=U(t,e,u),P=$(t,u),o=Math.max(0,Math.min(P-C,_.offset)),v=Math.max(0,_.offset-C+_.size+s);switch(n==="smart"&&(a>=v-C&&a<=o+C?n="auto":n="center"),n){case"start":return o;case"end":return v;case"center":return Math.round(v+(o-v)/2);case"auto":default:return a>=v&&a<=o?a:a<v?v:o}},getStartIndexForOffset:function(t,e,n){return G(t,n,e)},getStopIndexForStartIndex:function(t,e,n,a){for(var u=t.direction,s=t.height,c=t.itemCount,f=t.layout,p=t.width,g=u==="horizontal"||f==="horizontal",x=g?p:s,C=U(t,e,a),_=n+x,P=C.offset+C.size,o=e;o<c-1&&P<_;)o++,P+=U(t,o,a).size;return o},initInstanceProps:function(t,e){var n=t,a=n.estimatedItemSize,u={itemMetadataMap:{},estimatedItemSize:a||B,lastMeasuredIndex:-1};return e.resetAfterIndex=function(s,c){c===void 0&&(c=!0),u.lastMeasuredIndex=Math.min(u.lastMeasuredIndex,s-1),e._getItemStyleCache(-1),c&&e.forceUpdate()},u},shouldResetStyleCacheOnItemSizeChange:!1,validateProps:function(t){var e=t.itemSize}}),Ct=bt({getColumnOffset:function(t,e){var n=t.columnWidth;return e*n},getColumnWidth:function(t,e){var n=t.columnWidth;return n},getRowOffset:function(t,e){var n=t.rowHeight;return e*n},getRowHeight:function(t,e){var n=t.rowHeight;return n},getEstimatedTotalHeight:function(t){var e=t.rowCount,n=t.rowHeight;return n*e},getEstimatedTotalWidth:function(t){var e=t.columnCount,n=t.columnWidth;return n*e},getOffsetForColumnAndAlignment:function(t,e,n,a,u,s){var c=t.columnCount,f=t.columnWidth,p=t.width,g=Math.max(0,c*f-p),x=Math.min(g,e*f),C=Math.max(0,e*f-p+s+f);switch(n==="smart"&&(a>=C-p&&a<=x+p?n="auto":n="center"),n){case"start":return x;case"end":return C;case"center":var _=Math.round(C+(x-C)/2);return _<Math.ceil(p/2)?0:_>g+Math.floor(p/2)?g:_;case"auto":default:return a>=C&&a<=x?a:C>x||a<C?C:x}},getOffsetForRowAndAlignment:function(t,e,n,a,u,s){var c=t.rowHeight,f=t.height,p=t.rowCount,g=Math.max(0,p*c-f),x=Math.min(g,e*c),C=Math.max(0,e*c-f+s+c);switch(n==="smart"&&(a>=C-f&&a<=x+f?n="auto":n="center"),n){case"start":return x;case"end":return C;case"center":var _=Math.round(C+(x-C)/2);return _<Math.ceil(f/2)?0:_>g+Math.floor(f/2)?g:_;case"auto":default:return a>=C&&a<=x?a:C>x||a<C?C:x}},getColumnStartIndexForOffset:function(t,e){var n=t.columnWidth,a=t.columnCount;return Math.max(0,Math.min(a-1,Math.floor(e/n)))},getColumnStopIndexForStartIndex:function(t,e,n){var a=t.columnWidth,u=t.columnCount,s=t.width,c=e*a,f=Math.ceil((s+n-c)/a);return Math.max(0,Math.min(u-1,e+f-1))},getRowStartIndexForOffset:function(t,e){var n=t.rowHeight,a=t.rowCount;return Math.max(0,Math.min(a-1,Math.floor(e/n)))},getRowStopIndexForStartIndex:function(t,e,n){var a=t.rowHeight,u=t.rowCount,s=t.height,c=e*a,f=Math.ceil((s+n-c)/a);return Math.max(0,Math.min(u-1,e+f-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){var e=t.columnWidth,n=t.rowHeight}}),gt=R({getItemOffset:function(t,e){var n=t.itemSize;return e*n},getItemSize:function(t,e){var n=t.itemSize;return n},getEstimatedTotalSize:function(t){var e=t.itemCount,n=t.itemSize;return n*e},getOffsetForIndexAndAlignment:function(t,e,n,a,u,s){var c=t.direction,f=t.height,p=t.itemCount,g=t.itemSize,x=t.layout,C=t.width,_=c==="horizontal"||x==="horizontal",P=_?C:f,o=Math.max(0,p*g-P),v=Math.min(o,e*g),I=Math.max(0,e*g-P+g+s);switch(n==="smart"&&(a>=I-P&&a<=v+P?n="auto":n="center"),n){case"start":return v;case"end":return I;case"center":{var y=Math.round(I+(v-I)/2);return y<Math.ceil(P/2)?0:y>o+Math.floor(P/2)?o:y}case"auto":default:return a>=I&&a<=v?a:a<I?I:v}},getStartIndexForOffset:function(t,e){var n=t.itemCount,a=t.itemSize;return Math.max(0,Math.min(n-1,Math.floor(e/a)))},getStopIndexForStartIndex:function(t,e,n){var a=t.direction,u=t.height,s=t.itemCount,c=t.itemSize,f=t.layout,p=t.width,g=a==="horizontal"||f==="horizontal",x=e*c,C=g?p:u,_=Math.ceil((C+n-x)/c);return Math.max(0,Math.min(s-1,e+_-1))},initInstanceProps:function(t){},shouldResetStyleCacheOnItemSizeChange:!0,validateProps:function(t){var e=t.itemSize}});function mt(i,t){for(var e in i)if(!(e in t))return!0;for(var n in t)if(i[n]!==t[n])return!0;return!1}var wt=null,Mt=null;function vt(i,t){var e=i.style,n=_objectWithoutPropertiesLoose(i,wt),a=t.style,u=_objectWithoutPropertiesLoose(t,Mt);return!mt(e,a)&&!mt(n,u)}function Ft(i,t){return!vt(this.props,i)||mt(this.state,t)}}}]);
