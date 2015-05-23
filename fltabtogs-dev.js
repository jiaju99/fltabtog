/*
fltabtogs.js
version-20150413-cs
simply app for tabs or vils
/*fltabvils.js-github.com/ftlabs/fastclick-20150415-cs
*/



function fltabtogs(box,a,b,tg){	
$(box).each(function(k, el) {
	
var bx=$(el),as=bx.find(a),bs=bx.find(b),idx=bx.attr('rel'),evt=bx.attr('evt'),sid=bx.attr('sid');

function chg(i){
var a=as.eq(i),b=bs.eq(i),ats=as.not(as[i]),bts=bs.not(bs[i]);
ats.removeClass('now');bts.addClass('hide');
if(tg=='tab'){a.addClass('now');b.removeClass('hide');/*console.log('tab');*/
}else{a.toggleClass('now');b.toggleClass('hide');/*console.log('tog');*/
}
}

if(sid){sidx=$.jStorage.get(sid);idx=sidx!=null?sidx:idx;bx.attr('rel',idx);}

chg(idx);
var chg1=function(){var i=as.index(this);bx.attr('rel',i);$.jStorage.set(sid,i);chg(i);};
if(evt=='hover'){as.hover(chg1);}else{as.click(chg1);}

});


}/*0.5*/



/*edit-20150520-cs*/
