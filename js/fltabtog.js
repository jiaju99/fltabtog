/*
fltabtog.js 
edited-20151112-gz
tabs or togs, no sid & jstorage
https://github.com/jiaju99/fltabtog
*/
function fltabtogs(a,b,c,d,e,f){$(a).each(function(a,g){function h(a){var b=j.eq(a),c=k.eq(a),g=j.not(b),h=k.not(c);g.removeClass(e),h.removeClass(f),"tab"==d?(b.addClass(e),c.addClass(f)):"tog"==d&&(b.toggleClass(e),c.toggleClass(f))}var m,i=$(g),j=i.find(b),k=i.find(c),l=parseFloat(i.attr("idx"));h(l),m=i.attr("evt"),m=m?m:"click",i.on(m,b,function(a){a.stopPropagation(),j=i.find(b),k=i.find(c),nidx=j.index(this),h(nidx),i.attr("idx",nidx)})})}
/*start-20150527-cs*/
