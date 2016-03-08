// JavaScript Document

//Force IE to Edge mode
document.write("<meta http-equiv=\"X-UA-Compatible\" content=\"IE=Edge\"\/>");


$(document).ready(function() {
	$(".one").hover(function() { //Hover over event on list item
		$(".menudd",this).show(); //Show the subnav
		$("dt a",this).addClass("hover");
		
		} , function() { //on hover out...
		$("dd",this).hide(); //Hide the subnav
		$("dt a",this).removeClass("hover");
	});
	$(function(){
		var ddnum = $("#nav .one dd").length;
		for(var i=1;i<=ddnum;i++){
			var ulnum = $("#nav .one:nth-child(" + i + ") ul").length;
			if (ulnum > 6) { ulnum = 6;}
			$("#nav .one:nth-child(" + i + ") dd").css("width",153*ulnum);
		};
	});
});

$(document).ready(function() {
	$(".kerrierlogin").fancybox({
		'width'				: 790,
		'height'			: 528,
		'scrolling'		 : 'no',
		'autoScale'			: false,
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'type'				: 'iframe',
		'padding'           : 0

	});
	
	/*Google Search*/
	$(".ggsearch1").blur(function () {
		var t1 = $(".ggsearch1");
		if($.trim(t1.val())=='') {
			t1.css("background-image","url(/eng/images/ggsearch.jpg)")
		}
		else {
			t1.css("background-image","url(/eng/images/ggsearch2.jpg)")}
	});
	$(".ggsearch1").focus(function () {
		$(".ggsearch1").css("background-image","url(/eng/images/ggsearch2.jpg)");
	});
	
	$(".ggsearch2").blur(function () {
		var t2 = $(".ggsearch2");
		if($.trim(t2.val())=='') {
			t2.css("background-image","url(../images/ggsearch.jpg)"); 
		}
		else {
			t2.css("background-image","url(../images/ggsearch2.jpg)");
		}
	});
	$(".ggsearch2").focus(function () {
		$(".ggsearch2").css("background-image","url(../images/ggsearch2.jpg)");
	});
	
	$(".ggsearch3").blur(function () {
		var t3 = $(".ggsearch3");
		if($.trim(t3.val())=='') {
			t3.css("background-image","url(../images/ggsearch.jpg)"); 
		}
		else {
			t3.css("background-image","url(../images/ggsearch2.jpg)");
		}
	});
	$(".ggsearch3").focus(function () {
		$(".ggsearch3").css("background-image","url(../images/ggsearch2.jpg)");
	});
});

var otherJSa = '/eng/js/jquery.mousewheel-3.0.4.pack.js';
document.write('<scr' + 'ipt type="text/javascript" src="'+otherJSa+'"></scr' + 'ipt>');

var otherJSb = '/eng/js/jquery.fancybox-1.3.4.pack.js';
document.write('<scr' + 'ipt type="text/javascript" src="'+otherJSb+'"></scr' + 'ipt>');

//language
function switchlangeng() {
 var loc = window.location + "";
 if (loc.indexOf("/tch/")>0)
    loc = loc.replace("/tch/","/eng/");
 else if (loc.indexOf("/sch/")>0)
    loc = loc.replace("/sch/","/eng/"); 
 else {
 	var vnum=loc.substring(loc.indexOf(":",loc.indexOf("apex"))+1,loc.indexOf(":",loc.indexOf(":",loc.indexOf("apex"))+1));
  if (vnum.length==4)
  loc = estconvert(loc,vnum,"0","2000");
  else if (vnum.length==3)
 	loc = estconvert(loc,vnum,"0","200");
}
	 if (loc.indexOf("?")>0 && loc.indexOf("langc=true")<0 && loc.indexOf("#")<0)
	 {window.location = loc+"&langc=true";}
	else if(loc.indexOf("langc=true")>0)
		 {window.location = loc;}
	else if(loc.indexOf("langc=true")<0 && loc.indexOf("#")<0)
	 {window.location = loc+"?langc=true";}
	else if(loc.indexOf("#")>0 && loc.indexOf("?")<0){
	 var newloc = loc.replace("#", "");
	 window.location = newloc+"?langc=true";
	} 
	else if(loc.indexOf("#")>0 && loc.indexOf("?")>0){
	 var newloc = loc.replace("#", "");
	 window.location = newloc+"&langc=true";
	}
}


function switchlangtch() {
 var loc = window.location + "";
 if (loc.indexOf("/eng/")>0)
    loc = loc.replace("/eng/","/tch/");
 else if (loc.indexOf("/sch/")>0)
    loc = loc.replace("/sch/","/tch/"); 
 else {
 	var vnum=loc.substring(loc.indexOf(":",loc.indexOf("apex"))+1,loc.indexOf(":",loc.indexOf(":",loc.indexOf("apex"))+1));
  if ((vnum.length==1)||(vnum.length==2))
  loc = estconvert(loc,vnum,"2000","0");
  else if (vnum.length==3){
 	loc = estconvert(loc,vnum,"2000","200");
}
}
	 if (loc.indexOf("?")>0 && loc.indexOf("langc=true")<0 && loc.indexOf("#")<0)
	 {window.location = loc+"&langc=true";}
	else if(loc.indexOf("langc=true")>0)
		 {window.location = loc;}
	else if(loc.indexOf("langc=true")<0 && loc.indexOf("#")<0)
	 {window.location = loc+"?langc=true";}
	else if(loc.indexOf("#")>0 && loc.indexOf("?")<0){
	 var newloc = loc.replace("#", "");
	 window.location = newloc+"?langc=true";
	} 
	else if(loc.indexOf("#")>0 && loc.indexOf("?")>0){
	 var newloc = loc.replace("#", "");
	 window.location = newloc+"&langc=true";
	}
}


function switchlangsch() {
 var loc = window.location + "";
 if (loc.indexOf("/eng/")>0)
    loc = loc.replace("/eng/","/sch/");
 else if (loc.indexOf("/tch/")>0)
    loc = loc.replace("/tch/","/sch/"); 
 else {
 	var vnum=loc.substring(loc.indexOf(":",loc.indexOf("apex"))+1,loc.indexOf(":",loc.indexOf(":",loc.indexOf("apex"))+1));
  if ((vnum.length==1) || (vnum.length==2))
  loc = estconvert(loc,vnum,"200","0");
  else if (vnum.length==4){
 	loc = estconvert(loc,vnum,"200","2000");
}
}    
	 if (loc.indexOf("?")>0 && loc.indexOf("langc=true")<0 && loc.indexOf("#")<0)
	 {window.location = loc+"&langc=true";}
	else if(loc.indexOf("langc=true")>0)
		 {window.location = loc;}
	else if(loc.indexOf("langc=true")<0 && loc.indexOf("#")<0)
	 {window.location = loc+"?langc=true";}
	else if(loc.indexOf("#")>0 && loc.indexOf("?")<0){
	 var newloc = loc.replace("#", "");
	 window.location = newloc+"?langc=true";
	} 
	else if(loc.indexOf("#")>0 && loc.indexOf("?")>0){
	 var newloc = loc.replace("#", "");
	 window.location = newloc+"&langc=true";
	}
}



//sidebar menu
function highlight(parm1,parm2,parm3,parm4){
	$(".panel").hide();
	$("a.flip").removeClass("on");
	$("#panel_"+parm1).show();						   
	$("#flip_"+parm1).toggleClass("on");
	$("#flip_"+parm4).addClass("active");
	$(".panel_"+parm2).addClass("active");
	$("#panel_"+parm1).css({"background":"#FC863E"});
	$(".panelsub_"+parm3).addClass("active");
	$(".mappoint").hide();
	$(".mappoint_"+parm1).show();
};
function panelsub(parm1,parm2){
	$(".panelsubmenu").hide();
	$("#panelsubmenu_"+parm1+parm2).show();							   
};
//End sidebar menu

function MM_goToURL() { //v3.0
  var i, args=MM_goToURL.arguments; document.MM_returnValue = false;
  for (i=0; i<(args.length-1); i+=2) eval(args[i]+".location='"+args[i+1]+"'");
}

// Main menu modification for Investor Relations
$(document).ready(function(){
	for(var i=1;i<5;i++)
	{
		$("#mainmenu .one:eq(3) .menudd").append($("<div class=\"div"+i+"\"></div>"));
	} 
	/*for(var i=0;i<8;i++)
	{
		alert($("#mainmenu .one:eq(3) .menudd ul:eq("+i+")").html()+"this"+i);
	}*/
	$("#mainmenu .one:eq(3) .menudd .div1").append($("#mainmenu .one:eq(3) .menudd ul:eq(0)"));
	$("#mainmenu .one:eq(3) .menudd .div1").append($("#mainmenu .one:eq(3) .menudd ul:eq(0)"));
	$("#mainmenu .one:eq(3) .menudd .div1").append($("#mainmenu .one:eq(3) .menudd ul:eq(0)"));
	$("#mainmenu .one:eq(3) .menudd .div1").append($("#mainmenu .one:eq(3) .menudd ul:eq(0)"));
	$("#mainmenu .one:eq(3) .menudd .div2").append($("#mainmenu .one:eq(3) .menudd ul:eq(0)"));
	$("#mainmenu .one:eq(3) .menudd .div2").append($("#mainmenu .one:eq(3) .menudd ul:eq(0)"));
	$("#mainmenu .one:eq(3) .menudd .div3").append($("#mainmenu .one:eq(3) .menudd ul:eq(0)"));
	$("#mainmenu .one:eq(3) .menudd .div3").append($("#mainmenu .one:eq(3) .menudd ul:eq(0)"));
	$("#mainmenu .one:eq(3) .menudd .div4").append($("#mainmenu .one:eq(3) .menudd ul:eq(0)"));		
	$("#mainmenu .one:eq(3) .menudd .div4").append($("#mainmenu .one:eq(3) .menudd ul:eq(0)"));	
	$("#mainmenu .one:eq(3) .menudd .div4").append($("#mainmenu .one:eq(3) .menudd ul:eq(0)"));	
	
	$("#nav .one").eq(3).addClass("threeone");
});
/**
 * Career Application Alert
 */
$(document).ready(function() {

	var _aass = 'font-size:16px; color:red; ';
	
	var _aagc = 'aagc';
	
	alertAsterisk = function( cn, f ){
		var _aac = _aagc + '_' + cn;
		var _aa = '&nbsp;*';
		var _aas = $( '<span class="' + _aagc + ' ' + _aac + '" style="' + _aass + (f?'float:left; ':'') + '" >' + _aa + '</span>' );
		
		// alert( $( '.' + _aac ).html() + ' : ' + cn + ' : ' + $( "." + cn  ).html() );
		if( $( '.' + _aac ).html()==null ){
			$( "." + cn  ).after( _aas );
			// $( _aas ).appendTo( $( '.' + cn ) );
		}
		else{
			$( '.' + _aac ).html( _aa );
		}
	};
	
	clearAsterisk = function(){
		$( '.' + _aagc ).html( '' );
	};
	
});