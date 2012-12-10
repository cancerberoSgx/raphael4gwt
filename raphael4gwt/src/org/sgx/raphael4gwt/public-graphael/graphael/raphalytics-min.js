(function(){var c=/\{([^\}]+)\}/g,a=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,b=function(g,f,h){var e=h;f.replace(a,function(k,j,i,m,l){j=j||m;if(e){if(j in e){e=e[j]}typeof e=="function"&&l&&(e=e())}});e=(e==null||e==h?g:e)+"";return e},d=function(f,e){return String(f).replace(c,function(h,g){return b(h,g,e)})};Raphael.fn.raphalytics_popup=function(f,e,p,j,B){j=String(j||"top-middle").split("-");j[1]=j[1]||"middle";var q=5,g=p.getBBox(),n=Math.round(g.width),A=Math.round(g.height),l=Math.round(g.x)-q,k=Math.round(g.y)-q,s=Math.min(A/2,n/2,10),u={top:"M{x},{y}h{w4},{w4},{w4},{w4}a{r},{r},0,0,1,{r},{r}v{h4},{h4},{h4},{h4}a{r},{r},0,0,1,-{r},{r}l-{right},0-{gap},{gap}-{gap}-{gap}-{left},0a{r},{r},0,0,1-{r}-{r}v-{h4}-{h4}-{h4}-{h4}a{r},{r},0,0,1,{r}-{r}z",bottom:"M{x},{y}l{left},0,{gap}-{gap},{gap},{gap},{right},0a{r},{r},0,0,1,{r},{r}v{h4},{h4},{h4},{h4}a{r},{r},0,0,1,-{r},{r}h-{w4}-{w4}-{w4}-{w4}a{r},{r},0,0,1-{r}-{r}v-{h4}-{h4}-{h4}-{h4}a{r},{r},0,0,1,{r}-{r}z",right:"M{x},{y}h{w4},{w4},{w4},{w4}a{r},{r},0,0,1,{r},{r}v{h4},{h4},{h4},{h4}a{r},{r},0,0,1,-{r},{r}h-{w4}-{w4}-{w4}-{w4}a{r},{r},0,0,1-{r}-{r}l0-{bottom}-{gap}-{gap},{gap}-{gap},0-{top}a{r},{r},0,0,1,{r}-{r}z",left:"M{x},{y}h{w4},{w4},{w4},{w4}a{r},{r},0,0,1,{r},{r}l0,{top},{gap},{gap}-{gap},{gap},0,{bottom}a{r},{r},0,0,1,-{r},{r}h-{w4}-{w4}-{w4}-{w4}a{r},{r},0,0,1-{r}-{r}v-{h4}-{h4}-{h4}-{h4}a{r},{r},0,0,1,{r}-{r}z"},i={hx0:f-(l+q+n-s*2),hx1:f-(l+q+n/2-s),hx2:f-(l+q+s),vhy:e-(k+q+A+q+s),"^hy":e-(k-s)},z=[{x:l+q,y:k,w:n,w4:n/4,h4:A/4,right:0,left:n-s*2,bottom:0,top:A-s*2,r:q,h:A,gap:s},{x:l+q,y:k,w:n,w4:n/4,h4:A/4,left:n/2-s,right:n/2-s,top:A/2-s,bottom:A/2-s,r:q,h:A,gap:s},{x:l+q,y:k,w:n,w4:n/4,h4:A/4,left:0,right:n-s*2,top:0,bottom:A-s*2,r:q,h:A,gap:s}][j[1]=="middle"?1:(j[1]=="top"||j[1]=="left")*2];var o=0,m=0,v=this.path(d(u[j[0]],z)).insertBefore(p);switch(j[0]){case"top":o=f-(l+q+z.left+s);m=e-(k+q+A+q+s);break;case"bottom":o=f-(l+q+z.left+s);m=e-(k-s);break;case"left":o=f-(l+q+n+q+s);m=e-(k+q+z.top+s);break;case"right":o=f-(l-s);m=e-(k+q+z.top+s);break}v.translate(o,m);if(B){B=v.attr("path");v.remove();return{path:B,dx:o,dy:m}}p.translate(o,m);return v}})();Raphael.fn.drawGridBorder=function(a,g,b,e,d,c){if(d=="full"){var f=["M",Math.round(a),Math.round(g),"L",Math.round(a+b),Math.round(g),Math.round(a+b),Math.round(g+e),Math.round(a),Math.round(g+e),Math.round(a),Math.round(g)]}if(d=="xoy"){var f=["M",Math.round(a),Math.round(g+e),"L",Math.round(a+b),Math.round(g+e),"M",Math.round(a),Math.round(g+e),"L",Math.round(a),Math.round(g)]}if(d=="minimalist"){var f=["M",Math.round(a),Math.round(g+e),"L",Math.round(a+b),Math.round(g+e)]}return this.path(f.join(",")).attr({stroke:c,"stroke-width":0.5})};Raphael.fn.drawGrid=function(m,l,n,g,f,k,j,d){var o=[],a=g/k,c=n/f;if(j=="y_grid"||j=="full_grid"||j=="minimalist"){var b=(j=="minimalist"?0:1);for(var e=b;e<k;e++){o=o.concat(["M",Math.round(m),Math.round(l+e*a),"H",Math.round(m+n)])}}if(j=="x_grid"||j=="full_grid"){for(e=1;e<f;e++){o=o.concat(["M",Math.round(m+e*c),Math.round(l),"V",Math.round(l+g)])}}return this.path(o.join(",")).attr({stroke:d,"stroke-width":0.5})};function raphalytics(e,ao,v,ac,H){function ab(j,i,ay,aw,Y,X){var x=(ay-j)/2,p=(Y-ay)/2,az=Math.atan((ay-j)/Math.abs(aw-i)),ax=Math.atan((Y-ay)/Math.abs(aw-X));az=i<aw?Math.PI-az:az;ax=X<aw?Math.PI-ax:ax;var y=Math.PI/2-((az+ax)%(Math.PI*2))/2,aB=x*Math.sin(y+az),av=x*Math.cos(y+az),aA=p*Math.sin(y+ax),au=p*Math.cos(y+ax);return{x1:ay-aB,y1:aw+av,x2:ay+aA,y2:aw+au}}if(typeof ao[0]!=="object"){ao=[ao]}if(typeof ac[0]!=="object"){ac=[ac]}var l=Math.max.apply(Math,ao[0]);for(al=0,R=ao.length;al<R;al++){if(Math.max.apply(Math,ao[al])>l){l=Math.max.apply(Math,ao[al])}}var c=H.width||750,f=H.height||150,am=H.leftgutter||10,an=H.bottomgutter||16,N=H.topgutter||14,k=H.rightgutter||10,ai=H.normalize||true,z=H.smooth||false,B=H.fill||false,o=H.gridtype||"minimalist",u=H.gridcolor||"#ccc",d=H.gridbordertype||(o=="minimalist"?"minimalist":"full"),J=H.gridbordercolor||(o=="minimalist"?"#000":"#ccc"),K=H.color||"#2F69BF",V=H.tooltipcolor||"#000",E=H.tooltipbordercolor||"#666",S=H.tooltiptextcolor||"#fff",aq=H.labelcolor||"#000",w=H.y_labels_number||2,ap=H.y_label_0||false,ag=H.y_labels_position||"inside",r={font:"12px Helvetica, Arial",fill:"#fff"};if(l<w){l=w}if(ai){l=Math.ceil(4*l/3);if(l>10){var M=Math.pow(10,l.toString().length-1);l=Math.ceil(l/M)*M}}if(ag=="outside"&&am<l.toString().length*8){am=l.toString().length*8}var h=(c-am-k)/(v.length-1),g=(f-an-N)/l;e.drawGridBorder(am,N,c-am-k,f-N-an,d,J);e.drawGrid(am,N,c-am-k,f-N-an,v.length-1,w,o,u);if(typeof K!="object"){K=[K]}var ad,ah,af=e.set(),I=0,G=0,m=false,b=e.set(),ae,P,L,s;af.push(e.text(60,12,ac[0][0]).attr(r).attr({fill:S}));af.hide();e.frame=e.raphalytics_popup(100,100,af,"right").attr({fill:V,stroke:E,"stroke-width":2,"fill-opacity":0.7}).hide();for(var ak=0,A=ao.length;ak<A;ak++){if(typeof K[ak]=="undefined"){s=K[K.length-1]}else{s=K[ak]}ad=e.path().attr({stroke:s,"stroke-width":4,"stroke-linejoin":"round"});if(B){ah=e.path().attr({stroke:"none",opacity:0.3,fill:s})}ae=null;P=null;for(var al=0,R=v.length;al<R;al++){var T=Math.round(f-an-g*ao[ak][al]),U=Math.round(am+h*al);if(!al){if(z){ae=["M",U,T,"C",U,T]}else{ae=["M",U,T,"L",U,T]}if(B){if(z){P=["M",am,f-an,"L",U,T,"C",U,T]}else{P=["M",am,f-an,"L",U,T,"L",U,T]}}}if(al&&al<R-1){var F=Math.round(f-an-g*ao[ak][al-1]),aa=Math.round(am+h*al),D=Math.round(f-an-g*ao[ak][al+1]),W=Math.round(am+h*(al+1));var at=ab(aa,F,U,T,W,D);if(z){ae=ae.concat([at.x1,at.y1,U,T,at.x2,at.y2])}else{ae=ae.concat([U,T])}if(B){if(z){P=P.concat([at.x1,at.y1,U,T,at.x2,at.y2])}else{P=P.concat([U,T])}}}var ar=e.circle(U,T,4).attr({fill:s,stroke:s,"stroke-width":2});if(typeof ac[ak]=="object"&&typeof ac[ak][al]!="undefined"&&ac[ak][al]!=false){b.push(e.rect(U-10,T-10,20,20).attr({stroke:"none",fill:"#fff",opacity:0}));var O=b[b.length-1];(function(j,a,aw,au,Y,p){var av,X=0;O.hover(function(){clearTimeout(L);var x="right";if(a+e.frame.getBBox().width>c){x="left"}var i=e.raphalytics_popup(a,aw,af,x,1),y=Raphael.animation({path:i.path,transform:["t",i.dx,i.dy]},200*m);I=af[0].transform()[0][1]+i.dx;G=af[0].transform()[0][2]+i.dy;e.frame.show().stop().animate(y);af[0].attr({text:Y}).show().stop().animateWith(e.frame,y,{transform:["t",I,G]},200*m);p.attr("r",6);m=true},function(){p.attr("r",4);L=setTimeout(function(){e.frame.hide();af[0].hide();m=false},1000)})})(ak,U,T,ao[ak][al],ac[ak][al],ar)}}if(z){ae=ae.concat([U,T,U,T])}else{ae=ae.concat([U,T])}ad.attr({path:ae});if(B){if(z){P=P.concat([U,T,U,T,"L",U,f-an,"z"])}else{P=P.concat([U,T,U,f-an,"z"])}ah.attr({path:P})}}var C=(ap?0:1);var Z=0;var Q=(ag=="outside"?"end":"start");for(al=C;al<=w;al++){Z=Math.round(al*l/w);Z=Z.toString();var q=(ag=="outside"?am-1:am+1);var n=(ag=="outside"?f-an-al*Math.round((f-N-an)/w):(al==0?f-an-al*Math.round((f-N-an)/w)-8:f-an-al*Math.round((f-N-an)/w)+8));e.text(q,n,Z).attr(r).attr({fill:"white",stroke:"#fff","stroke-width":2,"text-anchor":Q}).toFront();e.text(q,n,Z).attr(r).attr({fill:aq,"text-anchor":Q}).toFront()}for(var al=0,R=v.length;al<R;al++){if(v[al]){var U=Math.round(am+h*al),aj=(al==0?"start":(al==R-1?"end":"middle"));t=e.text(U,f-6,v[al]).attr(r).attr({fill:aq,"text-anchor":aj}).toBack()}}e.frame.toFront();af[0].toFront();b.toFront()}Raphael.fn.raphalytics=function(c,d,b,a){return new raphalytics(this,c,d,b,a)};