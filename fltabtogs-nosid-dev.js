/*
fltabtogs-nosid.js 
version-20150413-cs.
simply app for tabs or togs. but, no sid or jstorage
https://github.com/jiaju99/tabtogs 
*/



function fltabtogs(box,a,b,tg){	
$(box).each(function(k, el) {
	
var bx=$(el),as=bx.find(a),bs=bx.find(b),idx=bx.attr('rel'),evt=bx.attr('evt');

function chg(i){
var a=as.eq(i),b=bs.eq(i),ats=as.not(as[i]),bts=bs.not(bs[i]);
ats.removeClass('now');bts.addClass('hide');
if(tg=='tab'){a.addClass('now');b.removeClass('hide');/*console.log('tab');*/
}else{a.toggleClass('now');b.toggleClass('hide');/*console.log('tog');*/
}
}


chg(idx);
var chg1=function(){var i=as.index(this);bx.attr('rel',i);chg(i);};
if(evt=='hover'){as.hover(chg1);}else{as.click(chg1);}

});

}/*0.5*/



/*edit-20150527-cs*/
