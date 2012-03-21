$estr = function() { return js.Boot.__string_rec(this,''); }
Types = function() { }
Types.__name__ = ["Types"];
Types.className = function(o) {
	return Type.getClassName(Type.getClass(o)).split(".").pop();
}
Types.fullName = function(o) {
	return Type.getClassName(Type.getClass(o));
}
Types.typeName = function(o) {
	return (function($this) {
		var $r;
		var $e = (Type["typeof"](o));
		switch( $e[1] ) {
		case 0:
			$r = "null";
			break;
		case 1:
			$r = "Int";
			break;
		case 2:
			$r = "Float";
			break;
		case 3:
			$r = "Bool";
			break;
		case 5:
			$r = "function";
			break;
		case 6:
			var c = $e[2];
			$r = Type.getClassName(c);
			break;
		case 7:
			var e = $e[2];
			$r = Type.getEnumName(e);
			break;
		case 4:
			$r = "Object";
			break;
		case 8:
			$r = "Unknown";
			break;
		}
		return $r;
	}(this));
}
Types.hasSuperClass = function(type,sup) {
	while(null != type) {
		if(type == sup) return true;
		type = Type.getSuperClass(type);
	}
	return false;
}
Types.isAnonymous = function(v) {
	return Reflect.isObject(v) && null == Type.getClass(v);
}
Types["as"] = function(value,type) {
	return Std["is"](value,type)?value:null;
}
Types.ifIs = function(value,type,handler) {
	if(Std["is"](value,type)) handler(value);
	return value;
}
Types.of = function(type,value) {
	return Std["is"](value,type)?value:null;
}
Types.sameType = function(a,b) {
	if(null == a && b == null) return true;
	if(null == a || b == null) return false;
	var tb = Type["typeof"](b);
	var $e = (tb);
	switch( $e[1] ) {
	case 6:
		var c = $e[2];
		return Std["is"](a,c);
	case 7:
		var e = $e[2];
		return Std["is"](a,e);
	default:
		return Type["typeof"](a) == tb;
	}
}
Types.isPrimitive = function(v) {
	return (function($this) {
		var $r;
		var $e = (Type["typeof"](v));
		switch( $e[1] ) {
		case 0:
		case 1:
		case 2:
		case 3:
			$r = true;
			break;
		case 5:
		case 7:
		case 4:
		case 8:
			$r = false;
			break;
		case 6:
			var c = $e[2];
			$r = Type.getClassName(c) == "String";
			break;
		}
		return $r;
	}(this));
}
Types.prototype.__class__ = Types;
if(typeof thx=='undefined') thx = {}
if(!thx.culture) thx.culture = {}
thx.culture.Info = function() { }
thx.culture.Info.__name__ = ["thx","culture","Info"];
thx.culture.Info.prototype.name = null;
thx.culture.Info.prototype["native"] = null;
thx.culture.Info.prototype.english = null;
thx.culture.Info.prototype.iso2 = null;
thx.culture.Info.prototype.iso3 = null;
thx.culture.Info.prototype.pluralRule = null;
thx.culture.Info.prototype.toString = function() {
	return this["native"] + " (" + this.english + ")";
}
thx.culture.Info.prototype.__class__ = thx.culture.Info;
thx.culture.Culture = function() { }
thx.culture.Culture.__name__ = ["thx","culture","Culture"];
thx.culture.Culture.__super__ = thx.culture.Info;
for(var k in thx.culture.Info.prototype ) thx.culture.Culture.prototype[k] = thx.culture.Info.prototype[k];
thx.culture.Culture.cultures = null;
thx.culture.Culture.getCultures = function() {
	if(null == thx.culture.Culture.cultures) thx.culture.Culture.cultures = new Hash();
	return thx.culture.Culture.cultures;
}
thx.culture.Culture.get = function(name) {
	return thx.culture.Culture.getCultures().get(name.toLowerCase());
}
thx.culture.Culture.names = function() {
	return thx.culture.Culture.getCultures().keys();
}
thx.culture.Culture.exists = function(culture) {
	return thx.culture.Culture.getCultures().exists(culture.toLowerCase());
}
thx.culture.Culture._defaultCulture = null;
thx.culture.Culture.defaultCulture = null;
thx.culture.Culture.getDefaultCulture = function() {
	if(null == thx.culture.Culture._defaultCulture) return thx.cultures.EnUS.getCulture(); else return thx.culture.Culture._defaultCulture;
}
thx.culture.Culture.setDefaultCulture = function(culture) {
	return thx.culture.Culture._defaultCulture = culture;
}
thx.culture.Culture.add = function(culture) {
	if(null == thx.culture.Culture._defaultCulture) thx.culture.Culture._defaultCulture = culture;
	var name = culture.name.toLowerCase();
	if(!thx.culture.Culture.getCultures().exists(name)) thx.culture.Culture.getCultures().set(name,culture);
}
thx.culture.Culture.loadAll = function() {
}
thx.culture.Culture.prototype.language = null;
thx.culture.Culture.prototype.date = null;
thx.culture.Culture.prototype.englishCurrency = null;
thx.culture.Culture.prototype.nativeCurrency = null;
thx.culture.Culture.prototype.currencySymbol = null;
thx.culture.Culture.prototype.currencyIso = null;
thx.culture.Culture.prototype.englishRegion = null;
thx.culture.Culture.prototype.nativeRegion = null;
thx.culture.Culture.prototype.isMetric = null;
thx.culture.Culture.prototype.digits = null;
thx.culture.Culture.prototype.signNeg = null;
thx.culture.Culture.prototype.signPos = null;
thx.culture.Culture.prototype.symbolNaN = null;
thx.culture.Culture.prototype.symbolPercent = null;
thx.culture.Culture.prototype.symbolPermille = null;
thx.culture.Culture.prototype.symbolNegInf = null;
thx.culture.Culture.prototype.symbolPosInf = null;
thx.culture.Culture.prototype.number = null;
thx.culture.Culture.prototype.currency = null;
thx.culture.Culture.prototype.percent = null;
thx.culture.Culture.prototype.__class__ = thx.culture.Culture;
if(!thx.cultures) thx.cultures = {}
thx.cultures.EnUS = function(p) {
	if( p === $_ ) return;
	this.language = thx.languages.En.getLanguage();
	this.name = "en-US";
	this.english = "English (United States)";
	this["native"] = "English (United States)";
	this.date = new thx.culture.core.DateTimeInfo(["January","February","March","April","May","June","July","August","September","October","November","December",""],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Su","Mo","Tu","We","Th","Fr","Sa"],"AM","PM","/",":",0,"%B, %Y","%B %d","%A, %B %d, %Y","%f/%e/%Y","%a, %d %b %Y %H:%M:%S GMT","%A, %B %d, %Y %l:%M:%S %p","%Y-%m-%d %H:%M:%SZ","%Y-%m-%dT%H:%M:%S","%l:%M:%S %p","%l:%M %p");
	this.symbolNaN = "NaN";
	this.symbolPercent = "%";
	this.symbolPermille = "‰";
	this.signNeg = "-";
	this.signPos = "+";
	this.symbolNegInf = "-Infinity";
	this.symbolPosInf = "Infinity";
	this.number = new thx.culture.core.NumberInfo(2,".",[3],",","-n","n");
	this.currency = new thx.culture.core.NumberInfo(2,".",[3],",","($n)","$n");
	this.percent = new thx.culture.core.NumberInfo(2,".",[3],",","-n %","n %");
	this.pluralRule = 1;
	this.englishCurrency = "US Dollar";
	this.nativeCurrency = "US Dollar";
	this.currencySymbol = "$";
	this.currencyIso = "USD";
	this.englishRegion = "United States";
	this.nativeRegion = "United States";
	this.iso2 = "US";
	this.iso3 = "USA";
	this.isMetric = false;
	thx.culture.Culture.add(this);
}
thx.cultures.EnUS.__name__ = ["thx","cultures","EnUS"];
thx.cultures.EnUS.__super__ = thx.culture.Culture;
for(var k in thx.culture.Culture.prototype ) thx.cultures.EnUS.prototype[k] = thx.culture.Culture.prototype[k];
thx.cultures.EnUS.culture = null;
thx.cultures.EnUS.getCulture = function() {
	if(null == thx.cultures.EnUS.culture) thx.cultures.EnUS.culture = new thx.cultures.EnUS();
	return thx.cultures.EnUS.culture;
}
thx.cultures.EnUS.prototype.__class__ = thx.cultures.EnUS;
if(typeof dhx=='undefined') dhx = {}
dhx.Access = function(selection) {
	if( selection === $_ ) return;
	this.selection = selection;
}
dhx.Access.__name__ = ["dhx","Access"];
dhx.Access.getData = function(d) {
	return Reflect.field(d,"__dhx_data__");
}
dhx.Access.setData = function(d,v) {
	d["__dhx_data__"] = v;
}
dhx.Access.emptyHtmlDom = function(v) {
	return { __dhx_data__ : v};
}
dhx.Access.eventName = function(event) {
	return "__dhx_on__" + event;
}
dhx.Access.getEvent = function(d,event) {
	return Reflect.field(d,"__dhx_on__" + event);
}
dhx.Access.hasEvent = function(d,event) {
	return null != Reflect.field(d,"__dhx_on__" + event);
}
dhx.Access.addEvent = function(d,event,listener) {
	d["__dhx_on__" + event] = listener;
}
dhx.Access.removeEvent = function(d,event) {
	Reflect.deleteField(d,"__dhx_on__" + event);
}
dhx.Access.setTransition = function(d,id) {
	if(Reflect.hasField(d,"__dhx_transition__")) Reflect.field(d,"__dhx_transition__").owner = id; else d["__dhx_transition__"] = { owner : id};
}
dhx.Access.getTransition = function(d) {
	return Reflect.field(d,"__dhx_transition__");
}
dhx.Access.resetTransition = function(d) {
	Reflect.deleteField(d,"__dhx_transition__");
}
dhx.Access.prototype.selection = null;
dhx.Access.prototype._that = function() {
	return this.selection;
}
dhx.Access.prototype.__class__ = dhx.Access;
EReg = function(r,opt) {
	if( r === $_ ) return;
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
}
EReg.__name__ = ["EReg"];
EReg.prototype.r = null;
EReg.prototype.match = function(s) {
	this.r.m = this.r.exec(s);
	this.r.s = s;
	return this.r.m != null;
}
EReg.prototype.matched = function(n) {
	return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
		var $r;
		throw "EReg::matched";
		return $r;
	}(this));
}
EReg.prototype.matchedLeft = function() {
	if(this.r.m == null) throw "No string matched";
	return this.r.s.substr(0,this.r.m.index);
}
EReg.prototype.matchedRight = function() {
	if(this.r.m == null) throw "No string matched";
	var sz = this.r.m.index + this.r.m[0].length;
	return this.r.s.substr(sz,this.r.s.length - sz);
}
EReg.prototype.matchedPos = function() {
	if(this.r.m == null) throw "No string matched";
	return { pos : this.r.m.index, len : this.r.m[0].length};
}
EReg.prototype.split = function(s) {
	var d = "#__delim__#";
	return s.replace(this.r,d).split(d);
}
EReg.prototype.replace = function(s,by) {
	return s.replace(this.r,by);
}
EReg.prototype.customReplace = function(s,f) {
	var buf = new StringBuf();
	while(true) {
		if(!this.match(s)) break;
		buf.add(this.matchedLeft());
		buf.add(f(this));
		s = this.matchedRight();
	}
	buf.b[buf.b.length] = s == null?"null":s;
	return buf.b.join("");
}
EReg.prototype.__class__ = EReg;
dhx.AccessAttribute = function(name,selection) {
	if( name === $_ ) return;
	dhx.Access.call(this,selection);
	this.name = name;
	this.qname = dhx.Namespace.qualify(name);
}
dhx.AccessAttribute.__name__ = ["dhx","AccessAttribute"];
dhx.AccessAttribute.__super__ = dhx.Access;
for(var k in dhx.Access.prototype ) dhx.AccessAttribute.prototype[k] = dhx.Access.prototype[k];
dhx.AccessAttribute.prototype.name = null;
dhx.AccessAttribute.prototype.qname = null;
dhx.AccessAttribute.prototype.get = function() {
	var n = this.name, q = this.qname;
	return this.selection.firstNode(function(node) {
		return q == null?node.getAttribute(n):node.getAttributeNS(q.space,q.local);
	});
}
dhx.AccessAttribute.prototype.getFloat = function() {
	var v = this.get();
	if(dhx.AccessAttribute.refloat.match(v)) return Std.parseFloat(dhx.AccessAttribute.refloat.matched(1)); else return Math.NaN;
}
dhx.AccessAttribute.prototype.remove = function() {
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			node.removeAttribute(n);
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			node.removeAttributeNS(q.space,q.local);
		});
	}
	return this.selection;
}
dhx.AccessAttribute.prototype.string = function(v) {
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			node.setAttribute(n,v);
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			node.setAttributeNS(q.space,q.local,v);
		});
	}
	return this.selection;
}
dhx.AccessAttribute.prototype["float"] = function(v) {
	var s = "" + v;
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			node.setAttribute(n,s);
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			node.setAttributeNS(q.space,q.local,s);
		});
	}
	return this.selection;
}
dhx.AccessAttribute.prototype.__class__ = dhx.AccessAttribute;
dhx.AccessDataAttribute = function(name,selection) {
	if( name === $_ ) return;
	dhx.AccessAttribute.call(this,name,selection);
}
dhx.AccessDataAttribute.__name__ = ["dhx","AccessDataAttribute"];
dhx.AccessDataAttribute.__super__ = dhx.AccessAttribute;
for(var k in dhx.AccessAttribute.prototype ) dhx.AccessDataAttribute.prototype[k] = dhx.AccessAttribute.prototype[k];
dhx.AccessDataAttribute.prototype.stringf = function(v) {
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__dhx_data__"),i);
			if(null == s) node.removeAttribute(n); else node.setAttribute(n,s);
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__dhx_data__"),i);
			if(null == s) node.removeAttributeNS(n); else node.setAttributeNS(q.space,q.local,s);
		});
	}
	return this.selection;
}
dhx.AccessDataAttribute.prototype.floatf = function(v) {
	if(null == this.qname) {
		var n = this.name;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__dhx_data__"),i);
			if(null == s) node.removeAttribute(n); else node.setAttribute(n,"" + s);
		});
	} else {
		var q = this.qname;
		this.selection.eachNode(function(node,i) {
			var s = v(Reflect.field(node,"__dhx_data__"),i);
			if(null == s) node.removeAttributeNS(n); else node.setAttributeNS(q.space,q.local,"" + s);
		});
	}
	return this.selection;
}
dhx.AccessDataAttribute.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
dhx.AccessDataAttribute.prototype.__class__ = dhx.AccessDataAttribute;
List = function(p) {
	if( p === $_ ) return;
	this.length = 0;
}
List.__name__ = ["List"];
List.prototype.h = null;
List.prototype.q = null;
List.prototype.length = null;
List.prototype.add = function(item) {
	var x = [item];
	if(this.h == null) this.h = x; else this.q[1] = x;
	this.q = x;
	this.length++;
}
List.prototype.push = function(item) {
	var x = [item,this.h];
	this.h = x;
	if(this.q == null) this.q = x;
	this.length++;
}
List.prototype.first = function() {
	return this.h == null?null:this.h[0];
}
List.prototype.last = function() {
	return this.q == null?null:this.q[0];
}
List.prototype.pop = function() {
	if(this.h == null) return null;
	var x = this.h[0];
	this.h = this.h[1];
	if(this.h == null) this.q = null;
	this.length--;
	return x;
}
List.prototype.isEmpty = function() {
	return this.h == null;
}
List.prototype.clear = function() {
	this.h = null;
	this.q = null;
	this.length = 0;
}
List.prototype.remove = function(v) {
	var prev = null;
	var l = this.h;
	while(l != null) {
		if(l[0] == v) {
			if(prev == null) this.h = l[1]; else prev[1] = l[1];
			if(this.q == l) this.q = prev;
			this.length--;
			return true;
		}
		prev = l;
		l = l[1];
	}
	return false;
}
List.prototype.iterator = function() {
	return { h : this.h, hasNext : function() {
		return this.h != null;
	}, next : function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		return x;
	}};
}
List.prototype.toString = function() {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	s.b[s.b.length] = "{" == null?"null":"{";
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = ", " == null?"null":", ";
		s.add(Std.string(l[0]));
		l = l[1];
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
List.prototype.join = function(sep) {
	var s = new StringBuf();
	var first = true;
	var l = this.h;
	while(l != null) {
		if(first) first = false; else s.b[s.b.length] = sep == null?"null":sep;
		s.add(l[0]);
		l = l[1];
	}
	return s.b.join("");
}
List.prototype.filter = function(f) {
	var l2 = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		if(f(v)) l2.add(v);
	}
	return l2;
}
List.prototype.map = function(f) {
	var b = new List();
	var l = this.h;
	while(l != null) {
		var v = l[0];
		l = l[1];
		b.add(f(v));
	}
	return b;
}
List.prototype.__class__ = List;
dhx.AccessTween = function(transition,tweens) {
	if( transition === $_ ) return;
	this.transition = transition;
	this.tweens = tweens;
}
dhx.AccessTween.__name__ = ["dhx","AccessTween"];
dhx.AccessTween.prototype.transition = null;
dhx.AccessTween.prototype.tweens = null;
dhx.AccessTween.prototype.transitionStringTween = function(value) {
	return function(d,i,a) {
		return dhx.util.Strings.interpolatef(a,value);
	};
}
dhx.AccessTween.prototype.transitionStringTweenf = function(f) {
	return function(d,i,a) {
		return dhx.util.Strings.interpolatef(a,f(d,i));
	};
}
dhx.AccessTween.prototype.transitionCharsTween = function(value) {
	return function(d,i,a) {
		return dhx.util.Strings.interpolateCharsf(a,value);
	};
}
dhx.AccessTween.prototype.transitionCharsTweenf = function(f) {
	return function(d,i,a) {
		return dhx.util.Strings.interpolateCharsf(a,f(d,i));
	};
}
dhx.AccessTween.prototype.transitionFloatTween = function(value) {
	return function(d,i,a) {
		return dhx.util.Floats.interpolatef(a,value);
	};
}
dhx.AccessTween.prototype.transitionFloatTweenf = function(f) {
	return function(d,i,a) {
		return dhx.util.Floats.interpolatef(a,f(d,i));
	};
}
dhx.AccessTween.prototype._that = function() {
	return this.transition;
}
dhx.AccessTween.prototype.__class__ = dhx.AccessTween;
dhx.AccessTweenStyle = function(name,transition,tweens) {
	if( name === $_ ) return;
	dhx.AccessTween.call(this,transition,tweens);
	this.name = name;
}
dhx.AccessTweenStyle.__name__ = ["dhx","AccessTweenStyle"];
dhx.AccessTweenStyle.__super__ = dhx.AccessTween;
for(var k in dhx.AccessTween.prototype ) dhx.AccessTweenStyle.prototype[k] = dhx.AccessTween.prototype[k];
dhx.AccessTweenStyle.prototype.name = null;
dhx.AccessTweenStyle.prototype.floatNodef = function(f,priority) {
	return this.floatTweenNodef(this.transitionFloatTweenf(f),priority);
}
dhx.AccessTweenStyle.prototype["float"] = function(value,priority) {
	return this.floatTweenNodef(this.transitionFloatTween(value),priority);
}
dhx.AccessTweenStyle.prototype.floatTweenNodef = function(tween,priority) {
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(d,i,Std.parseFloat(window.getComputedStyle(d,null).getPropertyValue(name)));
		return function(t) {
			d.style.setProperty(name,"" + f(t),null == priority?"":priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
dhx.AccessTweenStyle.prototype.stringNodef = function(f,priority) {
	return this.stringTweenNodef(this.transitionStringTweenf(f),priority);
}
dhx.AccessTweenStyle.prototype.string = function(value,priority) {
	return this.stringTweenNodef(this.transitionStringTween(value),priority);
}
dhx.AccessTweenStyle.prototype.stringTweenNodef = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(d,i,window.getComputedStyle(d,null).getPropertyValue(name));
		return function(t) {
			d.style.setProperty(name,f(t),null == priority?"":priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
dhx.AccessTweenStyle.prototype.__class__ = dhx.AccessTweenStyle;
dhx.AccessDataTweenStyle = function(name,transition,tweens) {
	if( name === $_ ) return;
	dhx.AccessTweenStyle.call(this,name,transition,tweens);
}
dhx.AccessDataTweenStyle.__name__ = ["dhx","AccessDataTweenStyle"];
dhx.AccessDataTweenStyle.__super__ = dhx.AccessTweenStyle;
for(var k in dhx.AccessTweenStyle.prototype ) dhx.AccessDataTweenStyle.prototype[k] = dhx.AccessTweenStyle.prototype[k];
dhx.AccessDataTweenStyle.prototype.floatf = function(f,priority) {
	return this.floatTweenNodef(this.transitionFloatTweenf(function(n,i) {
		return f(Reflect.field(n,"__dhx_data__"),i);
	}),priority);
}
dhx.AccessDataTweenStyle.prototype.floatTweenf = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(Reflect.field(d,"__dhx_data__"),i,Std.parseFloat(window.getComputedStyle(d,null).getPropertyValue(name)));
		return function(t) {
			d.style.setProperty(name,"" + f(t),null == priority?"":priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
dhx.AccessDataTweenStyle.prototype.stringf = function(f,priority) {
	return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
		return f(Reflect.field(n,"__dhx_data__"),i);
	}),priority);
}
dhx.AccessDataTweenStyle.prototype.stringTweenf = function(tween,priority) {
	if(null == priority) priority = null;
	var name = this.name;
	var styleTween = function(d,i) {
		var f = tween(Reflect.field(d,"__dhx_data__"),i,window.getComputedStyle(d,null).getPropertyValue(name));
		return function(t) {
			d.style.setProperty(name,f(t),null == priority?"":priority);
		};
	};
	this.tweens.set("style." + name,styleTween);
	return this.transition;
}
dhx.AccessDataTweenStyle.prototype.__class__ = dhx.AccessDataTweenStyle;
if(typeof js=='undefined') js = {}
js.Lib = function() { }
js.Lib.__name__ = ["js","Lib"];
js.Lib.isIE = null;
js.Lib.isOpera = null;
js.Lib.document = null;
js.Lib.window = null;
js.Lib.alert = function(v) {
	alert(js.Boot.__string_rec(v,""));
}
js.Lib.eval = function(code) {
	return eval(code);
}
js.Lib.setErrorHandler = function(f) {
	js.Lib.onerror = f;
}
js.Lib.prototype.__class__ = js.Lib;
dhx.Group = function(nodes) {
	if( nodes === $_ ) return;
	this.nodes = nodes;
}
dhx.Group.__name__ = ["dhx","Group"];
dhx.Group.current = null;
dhx.Group.merge = function(source,target) {
	if(target.length != source.length) throw "Group length not equal";
	var _g1 = 0, _g = target.length;
	while(_g1 < _g) {
		var i = _g1++;
		var s = source[i];
		var t = target[i];
		if(s.parentNode != t.parentNode) throw "parentNodes not the same!"; else if(s.nodes.length != t.nodes.length) throw "node length mismatch!"; else {
			var _g3 = 0, _g2 = t.nodes.length;
			while(_g3 < _g2) {
				var i1 = _g3++;
				if(null == t.nodes[i1]) t.nodes[i1] = s.nodes[i1];
			}
		}
	}
	return target;
}
dhx.Group.prototype.parentNode = null;
dhx.Group.prototype.nodes = null;
dhx.Group.prototype.each = function(f) {
	var _g1 = 0, _g = this.nodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(null != this.nodes[i]) f(dhx.Group.current = this.nodes[i],i);
	}
}
dhx.Group.prototype.iterator = function() {
	return this.nodes.iterator();
}
dhx.Group.prototype.get = function(i) {
	return this.nodes[i];
}
dhx.Group.prototype.count = function() {
	return this.nodes.length;
}
dhx.Group.prototype.push = function(node) {
	this.nodes.push(node);
}
dhx.Group.prototype.sort = function(comparator) {
	this.nodes.sort(comparator);
}
dhx.Group.prototype.__class__ = dhx.Group;
dhx.BaseSelection = function(groups) {
	if( groups === $_ ) return;
	this.groups = groups;
}
dhx.BaseSelection.__name__ = ["dhx","BaseSelection"];
dhx.BaseSelection.listenerEnterLeave = function(f,dom,i) {
	var e = dhx.Dom.event, target = e.relatedTarget;
	if(null == target || dhx.BaseSelection.isChild(dom,target)) return;
	f(dom,i);
}
dhx.BaseSelection.isChild = function(parent,child) {
	if(child == parent) return false;
	while(child != null) {
		child = child.parentNode;
		if(child == parent) return true;
	}
	return false;
}
dhx.BaseSelection.addEvent = function(node,typo,handler,capture) {
	node.addEventListener(typo,handler,capture);
}
dhx.BaseSelection.removeEvent = function(node,typo,type,capture) {
	node.removeEventListener(typo,Reflect.field(node,"__dhx_on__" + type),capture);
}
dhx.BaseSelection.bindJoin = function(join,group,groupData,update,enter,exit) {
	var n = group.nodes.length, m = groupData.length, updateHtmlDoms = [], exitHtmlDoms = [], enterHtmlDoms = [], node, nodeData;
	var nodeByKey = new Hash(), keys = [], key, j = groupData.length;
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		node = group.nodes[i];
		key = join(Reflect.field(node,"__dhx_data__"),i);
		if(nodeByKey.exists(key)) exitHtmlDoms[j++] = node; else nodeByKey.set(key,node);
		keys.push(key);
	}
	var _g = 0;
	while(_g < m) {
		var i = _g++;
		node = nodeByKey.get(key = join(nodeData = groupData[i],i));
		if(null != node) {
			node["__dhx_data__"] = nodeData;
			updateHtmlDoms[i] = node;
			enterHtmlDoms[i] = exitHtmlDoms[i] = null;
		} else {
			node = { __dhx_data__ : nodeData};
			enterHtmlDoms[i] = node;
			updateHtmlDoms[i] = exitHtmlDoms[i] = null;
		}
		nodeByKey.remove(key);
	}
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		if(nodeByKey.exists(keys[i])) exitHtmlDoms[i] = group.nodes[i];
	}
	var enterGroup = new dhx.Group(enterHtmlDoms);
	enterGroup.parentNode = group.parentNode;
	enter.push(enterGroup);
	var updateGroup = new dhx.Group(updateHtmlDoms);
	updateGroup.parentNode = group.parentNode;
	update.push(updateGroup);
	var exitGroup = new dhx.Group(exitHtmlDoms);
	exitGroup.parentNode = group.parentNode;
	exit.push(exitGroup);
}
dhx.BaseSelection.bind = function(group,groupData,update,enter,exit) {
	var n0 = group.nodes.length, n1 = group.nodes.length, updateHtmlDoms = [], exitHtmlDoms = [], enterHtmlDoms = [], node, nodeData;
	if(n0 > groupData.length) n0 = groupData.length;
	if(n1 < groupData.length) n1 = groupData.length;
	var _g = 0;
	while(_g < n0) {
		var i = _g++;
		node = group.nodes[i];
		nodeData = groupData[i];
		if(null != node) {
			node["__dhx_data__"] = nodeData;
			updateHtmlDoms[i] = node;
			enterHtmlDoms[i] = exitHtmlDoms[i] = null;
		} else {
			enterHtmlDoms[i] = { __dhx_data__ : nodeData};
			updateHtmlDoms[i] = exitHtmlDoms[i] = null;
		}
	}
	var _g1 = n0, _g = groupData.length;
	while(_g1 < _g) {
		var i = _g1++;
		node = { __dhx_data__ : groupData[i]};
		enterHtmlDoms[i] = node;
		updateHtmlDoms[i] = exitHtmlDoms[i] = null;
	}
	var _g = groupData.length;
	while(_g < n1) {
		var i = _g++;
		exitHtmlDoms[i] = group.nodes[i];
		enterHtmlDoms[i] = updateHtmlDoms[i] = null;
	}
	var enterGroup = new dhx.Group(enterHtmlDoms);
	enterGroup.parentNode = group.parentNode;
	enter.push(enterGroup);
	var updateGroup = new dhx.Group(updateHtmlDoms);
	updateGroup.parentNode = group.parentNode;
	update.push(updateGroup);
	var exitGroup = new dhx.Group(exitHtmlDoms);
	exitGroup.parentNode = group.parentNode;
	exit.push(exitGroup);
}
dhx.BaseSelection.prototype.parentNode = null;
dhx.BaseSelection.prototype.groups = null;
dhx.BaseSelection.prototype.select = function(selector) {
	return this._select(function(el) {
		return dhx.Dom.selectionEngine.select(selector,el);
	});
}
dhx.BaseSelection.prototype.selectAll = function(selector) {
	return this._selectAll(function(el) {
		return dhx.Dom.selectionEngine.selectAll(selector,el);
	});
}
dhx.BaseSelection.prototype._this = function() {
	return this;
}
dhx.BaseSelection.prototype.append = function(name) {
	var qname = dhx.Namespace.qualify(name);
	var append = function(node) {
		var n = js.Lib.document.createElement(name);
		node.appendChild(n);
		return n;
	};
	var appendNS = function(node) {
		var n = js.Lib.document.createElementNS(qname.space,qname.local);
		node.appendChild(n);
		return n;
	};
	return this._select(null == qname?append:appendNS);
}
dhx.BaseSelection.prototype.remove = function() {
	return this.eachNode(function(node,i) {
		var parent = node.parentNode;
		if(null != parent) parent.removeChild(node);
	});
}
dhx.BaseSelection.prototype.eachNode = function(f) {
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		group.each(f);
	}
	return this;
}
dhx.BaseSelection.prototype.insert = function(name,before,beforeSelector) {
	var qname = dhx.Namespace.qualify(name);
	var insertDom = function(node) {
		var n = js.Lib.document.createElement(name);
		node.insertBefore(n,null != before?before:dhx.Dom.select(beforeSelector).node());
		return n;
	};
	var insertNsDom = function(node) {
		var n = js.Lib.document.createElementNS(qname.space,qname.local);
		node.insertBefore(n,null != before?before:dhx.Dom.select(beforeSelector).node());
		return n;
	};
	return this._select(null == qname?insertDom:insertNsDom);
}
dhx.BaseSelection.prototype.sortNode = function(comparator) {
	var m = this.groups.length;
	var _g = 0;
	while(_g < m) {
		var i = _g++;
		var group = this.groups[i];
		group.nodes.sort(comparator);
		var n = group.nodes.length;
		var prev = group.nodes[0];
		var _g1 = 1;
		while(_g1 < n) {
			var j = _g1++;
			var node = group.nodes[j];
			if(null != node) {
				if(null != prev) prev.parentNode.insertBefore(node,prev.nextSibling);
				prev = node;
			}
		}
	}
	return this;
}
dhx.BaseSelection.prototype.firstNode = function(f) {
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(null != node) return f(node);
		}
	}
	return null;
}
dhx.BaseSelection.prototype.node = function() {
	return this.firstNode(function(n) {
		return n;
	});
}
dhx.BaseSelection.prototype.empty = function() {
	return null == this.firstNode(function(n) {
		return n;
	});
}
dhx.BaseSelection.prototype.filterNode = function(f) {
	var subgroups = [], subgroup;
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		var sg = new dhx.Group(subgroup = []);
		sg.parentNode = group.parentNode;
		subgroups.push(sg);
		var i = -1;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(null != node && f(node,++i)) subgroup.push(node);
		}
	}
	return this.createSelection(subgroups);
}
dhx.BaseSelection.prototype.mapNode = function(f) {
	var results = [];
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		var i = -1;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(null != node) results.push(f(node,++i));
		}
	}
	return results;
}
dhx.BaseSelection.prototype.onNode = function(type,listener,capture) {
	if(capture == null) capture = false;
	var i = type.indexOf("."), typo = i < 0?type:type.substr(0,i);
	if((typo == "mouseenter" || typo == "mouseleave") && !dhx.ClientHost.isIE()) {
		listener = (function(f,a1) {
			return function(a2,a3) {
				return f(a1,a2,a3);
			};
		})(dhx.BaseSelection.listenerEnterLeave,listener);
		if(typo == "mouseenter") typo = "mouseover"; else typo = "mouseout";
	}
	return this.eachNode(function(n,i1) {
		var l = function(e) {
			var o = dhx.Dom.event;
			dhx.Dom.event = e;
			try {
				listener(n,i1);
			} catch( e1 ) {
			}
			dhx.Dom.event = o;
		};
		if(null != Reflect.field(n,"__dhx_on__" + type)) {
			n.removeEventListener(typo,Reflect.field(n,"__dhx_on__" + type),capture);
			Reflect.deleteField(n,"__dhx_on__" + type);
		}
		if(null != listener) {
			n["__dhx_on__" + type] = l;
			n.addEventListener(typo,l,capture);
		}
	});
}
dhx.BaseSelection.prototype.createSelection = function(groups) {
	return (function($this) {
		var $r;
		throw "abstract method";
		return $r;
	}(this));
}
dhx.BaseSelection.prototype._select = function(selectf) {
	var subgroups = [], subgroup, subnode, node;
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		subgroups.push(subgroup = new dhx.Group([]));
		subgroup.parentNode = group.parentNode;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node1 = $it0.next();
			if(null != node1) {
				subgroup.parentNode = node1;
				subgroup.nodes.push(subnode = selectf(node1));
				if(null != subnode) subnode["__dhx_data__"] = Reflect.field(node1,"__dhx_data__");
			} else subgroup.nodes.push(null);
		}
	}
	return this.createSelection(subgroups);
}
dhx.BaseSelection.prototype._selectAll = function(selectallf) {
	var subgroups = [], subgroup;
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(null != node) {
				subgroups.push(subgroup = new dhx.Group(selectallf(node)));
				subgroup.parentNode = node;
			}
		}
	}
	return this.createSelection(subgroups);
}
dhx.BaseSelection.prototype.__class__ = dhx.BaseSelection;
dhx.UnboundSelection = function(groups) {
	if( groups === $_ ) return;
	dhx.BaseSelection.call(this,groups);
}
dhx.UnboundSelection.__name__ = ["dhx","UnboundSelection"];
dhx.UnboundSelection.__super__ = dhx.BaseSelection;
for(var k in dhx.BaseSelection.prototype ) dhx.UnboundSelection.prototype[k] = dhx.BaseSelection.prototype[k];
dhx.UnboundSelection.prototype.html = function() {
	return new dhx.AccessHtml(this);
}
dhx.UnboundSelection.prototype.text = function() {
	return new dhx.AccessText(this);
}
dhx.UnboundSelection.prototype.attr = function(name) {
	return new dhx.AccessAttribute(name,this);
}
dhx.UnboundSelection.prototype.classed = function() {
	return new dhx.AccessClassed(this);
}
dhx.UnboundSelection.prototype.property = function(name) {
	return new dhx.AccessProperty(name,this);
}
dhx.UnboundSelection.prototype.style = function(name) {
	return new dhx.AccessStyle(name,this);
}
dhx.UnboundSelection.prototype.transition = function() {
	return new dhx.UnboundTransition(this);
}
dhx.UnboundSelection.prototype.data = function(d,join) {
	var update = [], enter = [], exit = [];
	if(null == join) {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			dhx.BaseSelection.bind(group,d,update,enter,exit);
		}
	} else {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			dhx.BaseSelection.bindJoin(join,group,d,update,enter,exit);
		}
	}
	return new dhx.DataChoice(update,enter,exit);
}
dhx.UnboundSelection.prototype.selectAllData = function(selector) {
	var selection = this.selectAll(selector);
	return new dhx.ResumeSelection(selection.groups);
}
dhx.UnboundSelection.prototype.__class__ = dhx.UnboundSelection;
dhx.Selection = function(groups) {
	if( groups === $_ ) return;
	dhx.UnboundSelection.call(this,groups);
}
dhx.Selection.__name__ = ["dhx","Selection"];
dhx.Selection.__super__ = dhx.UnboundSelection;
for(var k in dhx.UnboundSelection.prototype ) dhx.Selection.prototype[k] = dhx.UnboundSelection.prototype[k];
dhx.Selection.current = null;
dhx.Selection.currentNode = null;
dhx.Selection.create = function(groups) {
	return new dhx.Selection(groups);
}
dhx.Selection.getCurrent = function() {
	return dhx.Dom.selectNode(dhx.Group.current);
}
dhx.Selection.getCurrentNode = function() {
	return dhx.Group.current;
}
dhx.Selection.prototype.createSelection = function(groups) {
	return new dhx.Selection(groups);
}
dhx.Selection.prototype.__class__ = dhx.Selection;
dhx.ISelectorEngine = function() { }
dhx.ISelectorEngine.__name__ = ["dhx","ISelectorEngine"];
dhx.ISelectorEngine.prototype.select = null;
dhx.ISelectorEngine.prototype.selectAll = null;
dhx.ISelectorEngine.prototype.__class__ = dhx.ISelectorEngine;
dhx.SizzleEngine = function(p) {
}
dhx.SizzleEngine.__name__ = ["dhx","SizzleEngine"];
dhx.SizzleEngine.prototype.select = function(selector,node) {
	return dhx.Sizzle.select(selector,node)[0];
}
dhx.SizzleEngine.prototype.selectNode = function(n,p) {
	return dhx.Sizzle.select(n,p)[0];
}
dhx.SizzleEngine.prototype.selectAll = function(selector,node) {
	return dhx.Sizzle.uniqueSort(dhx.Sizzle.select(selector,node));
}
dhx.SizzleEngine.prototype.__class__ = dhx.SizzleEngine;
dhx.SizzleEngine.__interfaces__ = [dhx.ISelectorEngine];
dhx.Dom = function() { }
dhx.Dom.__name__ = ["dhx","Dom"];
dhx.Dom.select = function(selector) {
	return dhx.Dom.doc.select(selector);
}
dhx.Dom.selectAll = function(selector) {
	return dhx.Dom.doc.selectAll(selector);
}
dhx.Dom.selectNode = function(node) {
	return dhx.Selection.create([new dhx.Group([node])]);
}
dhx.Dom.selectNodes = function(nodes) {
	return dhx.Selection.create([new dhx.Group(nodes)]);
}
dhx.Dom.selectNodeData = function(node) {
	return dhx.ResumeSelection.create([new dhx.Group([node])]);
}
dhx.Dom.event = null;
dhx.Dom.prototype.__class__ = dhx.Dom;
dhx.AccessTweenText = function(transition,tweens) {
	if( transition === $_ ) return;
	dhx.AccessTween.call(this,transition,tweens);
}
dhx.AccessTweenText.__name__ = ["dhx","AccessTweenText"];
dhx.AccessTweenText.__super__ = dhx.AccessTween;
for(var k in dhx.AccessTween.prototype ) dhx.AccessTweenText.prototype[k] = dhx.AccessTween.prototype[k];
dhx.AccessTweenText.prototype.stringNodef = function(f) {
	return this.stringTweenNodef(this.transitionStringTweenf(f));
}
dhx.AccessTweenText.prototype.string = function(value) {
	return this.stringTweenNodef(this.transitionStringTween(value));
}
dhx.AccessTweenText.prototype.stringTweenNodef = function(tween) {
	var handler = function(d,i) {
		var f = tween(d,i,d.textContent);
		return function(t) {
			d.textContent = f(t);
		};
	};
	this.tweens.set("text",handler);
	return this.transition;
}
dhx.AccessTweenText.prototype.charsNodef = function(f) {
	return this.stringTweenNodef(this.transitionCharsTweenf(f));
}
dhx.AccessTweenText.prototype.chars = function(value) {
	return this.stringTweenNodef(this.transitionCharsTween(value));
}
dhx.AccessTweenText.prototype.__class__ = dhx.AccessTweenText;
dhx.AccessDataTweenText = function(transition,tweens) {
	if( transition === $_ ) return;
	dhx.AccessTweenText.call(this,transition,tweens);
}
dhx.AccessDataTweenText.__name__ = ["dhx","AccessDataTweenText"];
dhx.AccessDataTweenText.__super__ = dhx.AccessTweenText;
for(var k in dhx.AccessTweenText.prototype ) dhx.AccessDataTweenText.prototype[k] = dhx.AccessTweenText.prototype[k];
dhx.AccessDataTweenText.prototype.stringf = function(f) {
	return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
		return f(Reflect.field(n,"__dhx_data__"),i);
	}));
}
dhx.AccessDataTweenText.prototype.charsf = function(f) {
	return this.stringTweenNodef(this.transitionCharsTweenf(function(n,i) {
		return f(Reflect.field(n,"__dhx_data__"),i);
	}));
}
dhx.AccessDataTweenText.prototype.stringTweenf = function(tween) {
	var handler = function(n,i) {
		var f = tween(Reflect.field(n,"__dhx_data__"),i,d.textContent);
		return function(t) {
			d.textContent = f(t);
		};
	};
	this.tweens.set("text",handler);
	return this.transition;
}
dhx.AccessDataTweenText.prototype.__class__ = dhx.AccessDataTweenText;
Hash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
Hash.__name__ = ["Hash"];
Hash.prototype.h = null;
Hash.prototype.set = function(key,value) {
	this.h["$" + key] = value;
}
Hash.prototype.get = function(key) {
	return this.h["$" + key];
}
Hash.prototype.exists = function(key) {
	try {
		key = "$" + key;
		return this.hasOwnProperty.call(this.h,key);
	} catch( e ) {
		for(var i in this.h) if( i == key ) return true;
		return false;
	}
}
Hash.prototype.remove = function(key) {
	if(!this.exists(key)) return false;
	delete(this.h["$" + key]);
	return true;
}
Hash.prototype.keys = function() {
	var a = new Array();
	for(var i in this.h) a.push(i.substr(1));
	return a.iterator();
}
Hash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref["$" + i];
	}};
}
Hash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{" == null?"null":"{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i == null?"null":i;
		s.b[s.b.length] = " => " == null?"null":" => ";
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.b[s.b.length] = ", " == null?"null":", ";
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
Hash.prototype.__class__ = Hash;
dhx.Namespace = function() { }
dhx.Namespace.__name__ = ["dhx","Namespace"];
dhx.Namespace.qualify = function(name) {
	var i = name.indexOf(":");
	if(i < 0) return null; else {
		var space = dhx.Namespace.prefix.get(name.substr(0,i));
		if(null == space) throw "unable to find a namespace for " + space;
		return new dhx.NSQualifier(space,name.substr(i + 1));
	}
}
dhx.Namespace.prototype.__class__ = dhx.Namespace;
dhx.NSQualifier = function(space,local) {
	if( space === $_ ) return;
	this.space = space;
	this.local = local;
}
dhx.NSQualifier.__name__ = ["dhx","NSQualifier"];
dhx.NSQualifier.prototype.space = null;
dhx.NSQualifier.prototype.local = null;
dhx.NSQualifier.prototype.__class__ = dhx.NSQualifier;
BracketDemo = function() { }
BracketDemo.__name__ = ["BracketDemo"];
BracketDemo.main = function() {
	BracketDemo.draw();
	var update = function(x,i) {
		dhx.Dom.select("#bracket_output").html().clear();
		BracketDemo.draw();
	};
	dhx.Dom.select("#submit_button").onNode("click",update);
}
BracketDemo.draw = function() {
	var values = dhx.Dom.select("#input").property("value").get().split("\n");
	var split = function(arr) {
		var home_remainder = new Array();
		var away_remainder = new Array();
		var _g1 = 0, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(i % 2 == 0) home_remainder.push(arr[i]); else away_remainder.push(arr[i]);
		}
		return [home_remainder,away_remainder];
	};
	var w = Math.log(values.length) / Math.log(2) * 200;
	var h = values.length / 2 * 30;
	var tree_generator = new thx.geom.layout.Tree().children(function(vs,i) {
		if(vs == null) return null; else if(vs.length == 1) return null; else return split(vs);
	}).separation(function(x,i) {
		return 1.0;
	}).size([h,w]);
	var nodes = tree_generator.tree(values);
	nodes.forEach(function(n,i) {
		var nx = n.x;
		n.x = w - n.y;
		n.y = nx;
		if(n.y > h / 2) {
			n.x = w - n.x + w;
			n.y = h - n.y;
		}
	});
	var links = thx.geom.layout.Tree.treeLinks(nodes);
	var divs = dhx.Dom.select("#bracket_output").selectAll("input").data(nodes).enter().append("div").style("top").stringf(function(x,i) {
		return x.y + "px";
	}).style("left").stringf(function(x,i) {
		return x.x + "px";
	}).style("position").string("absolute").append("select").style("width").string("150px").style("float").string("right").onNode("change",function(x,i) {
		var value = dhx.Dom.selectNode(x).property("value").get();
		var x_pos = dhx.Dom.selectNode(x).style("left").get();
		var sel_data = Reflect.field(x,"__dhx_data__");
		var sel_count = sel_data.data.length;
		dhx.Dom.selectAll("select option[value='" + value + "']").eachNode(function(y,i1) {
			var cur_sel_data = Reflect.field(y.parentNode,"__dhx_data__");
			var cur_sel_count = cur_sel_data.data.length;
			if(cur_sel_count > sel_count) return;
			var value1 = dhx.Dom.selectNode(y).attr("value").get();
			dhx.Dom.selectNode(y.parentNode).property("value").string(value1);
		});
	});
	var option_f = function(x,i) {
		return x + "";
	};
	var options = divs.selectAll("option").dataf(function(x,i) {
		if(x.data.length > 1) return [""].concat(x.data); else return x.data;
	}).enter().append("option").attr("value").stringf(option_f).text().stringf(option_f);
	var svg_links = dhx.Dom.select("#bracket_output").append("svg:svg").attr("width")["float"](w * 2).attr("height")["float"](h / 2).selectAll("path").data(links).enter().append("svg:path").attr("d").stringf(function(x,i) {
		var x0 = x.source.x, x1 = x.target.x, y0 = x.source.y, y1 = x.target.y;
		x1 = x.target.x;
		if(x.target.x > w) x0 = x.source.x + 140; else x1 = x.target.x + 140;
		return "M" + x0 + "," + y0 + " L" + x1 + "," + y1;
	}).style("fill").string("none").style("stroke").string("darkgrey").style("stroke-width").string("4px");
}
BracketDemo.prototype.__class__ = BracketDemo;
Iterables = function() { }
Iterables.__name__ = ["Iterables"];
Iterables.count = function(it) {
	return Iterators.count(it.iterator());
}
Iterables.indexOf = function(it,v,f) {
	return Iterators.indexOf(it.iterator(),v,f);
}
Iterables.contains = function(it,v,f) {
	return Iterators.contains(it.iterator(),v,f);
}
Iterables.array = function(it) {
	return Iterators.array(it.iterator());
}
Iterables.join = function(it,glue) {
	if(glue == null) glue = ", ";
	return Iterators.array(it.iterator()).join(glue);
}
Iterables.map = function(it,f) {
	return Iterators.map(it.iterator(),f);
}
Iterables.each = function(it,f) {
	return Iterators.each(it.iterator(),f);
}
Iterables.filter = function(it,f) {
	return Iterators.filter(it.iterator(),f);
}
Iterables.reduce = function(it,f,initialValue) {
	return Iterators.reduce(it.iterator(),f,initialValue);
}
Iterables.random = function(it) {
	return Arrays.random(Iterators.array(it.iterator()));
}
Iterables.any = function(it,f) {
	return Iterators.any(it.iterator(),f);
}
Iterables.all = function(it,f) {
	return Iterators.all(it.iterator(),f);
}
Iterables.last = function(it) {
	return Iterators.last(it.iterator());
}
Iterables.lastf = function(it,f) {
	return Iterators.lastf(it.iterator(),f);
}
Iterables.first = function(it) {
	return it.iterator().next();
}
Iterables.firstf = function(it,f) {
	return Iterators.firstf(it.iterator(),f);
}
Iterables.order = function(it,f) {
	return Arrays.order(Iterators.array(it.iterator()),f);
}
Iterables.isIterable = function(v) {
	var fields = Reflect.isObject(v) && null == Type.getClass(v)?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"iterator")) return false;
	return Reflect.isFunction(Reflect.field(v,"iterator"));
}
Iterables.prototype.__class__ = Iterables;
Ints = function() { }
Ints.__name__ = ["Ints"];
Ints.range = function(start,stop,step) {
	if(step == null) step = 1;
	if(null == stop) {
		stop = start;
		start = 0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw new thx.error.Error("infinite range",null,null,{ fileName : "Ints.hx", lineNumber : 19, className : "Ints", methodName : "range"});
	var range = [], i = -1, j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	return range;
}
Ints.sign = function(v) {
	return v < 0?-1:1;
}
Ints.abs = function(a) {
	return a < 0?-a:a;
}
Ints.min = function(a,b) {
	return a < b?a:b;
}
Ints.max = function(a,b) {
	return a > b?a:b;
}
Ints.wrap = function(v,min,max) {
	return Math.round(Floats.wrap(v,min,max));
}
Ints.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
}
Ints.clampSym = function(v,max) {
	if(v < -max) return -max; else if(v > max) return max; else return v;
}
Ints.interpolate = function(f,min,max,equation) {
	if(max == null) max = 100.0;
	if(min == null) min = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	return Math.round(min + equation(f) * (max - min));
}
Ints.interpolatef = function(min,max,equation) {
	if(max == null) max = 1.0;
	if(min == null) min = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var d = max - min;
	return function(f) {
		return Math.round(min + equation(f) * d);
	};
}
Ints.format = function(v,param,params,culture) {
	return (Ints.formatf(param,params,culture))(v);
}
Ints.formatf = function(param,params,culture) {
	return Floats.formatf(null,thx.culture.FormatParams.params(param,params,"I"),culture);
}
Ints.canParse = function(s) {
	return Ints._reparse.match(s);
}
Ints.parse = function(s) {
	if(s.substr(0,1) == "+") s = s.substr(1);
	return Std.parseInt(s);
}
Ints.compare = function(a,b) {
	return a - b;
}
Ints.prototype.__class__ = Ints;
Dynamics = function() { }
Dynamics.__name__ = ["Dynamics"];
Dynamics.format = function(v,param,params,nullstring,culture) {
	return (Dynamics.formatf(param,params,nullstring,culture))(v);
}
Dynamics.formatf = function(param,params,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	return function(v) {
		var $e = (Type["typeof"](v));
		switch( $e[1] ) {
		case 0:
			return nullstring;
		case 1:
			return Ints.format(v,param,params,culture);
		case 2:
			return Floats.format(v,param,params,culture);
		case 3:
			return Bools.format(v,param,params,culture);
		case 6:
			var c = $e[2];
			if(c == String) return Strings.formatOne(v,param,params,culture); else if(c == Array) return Arrays.format(v,param,params,culture); else if(c == Date) return Dates.format(v,param,params,culture); else return Objects.format(v,param,params,culture);
			break;
		case 4:
			return Objects.format(v,param,params,culture);
		case 5:
			return "function()";
		default:
			return (function($this) {
				var $r;
				throw new thx.error.Error("Unsupported type format: {0}",null,Type["typeof"](v),{ fileName : "Dynamics.hx", lineNumber : 44, className : "Dynamics", methodName : "formatf"});
				return $r;
			}(this));
		}
	};
}
Dynamics.interpolate = function(v,a,b,equation) {
	return (Dynamics.interpolatef(a,b,equation))(v);
}
Dynamics.interpolatef = function(a,b,equation) {
	var ta = Type["typeof"](a);
	var tb = Type["typeof"](b);
	if(!((Std["is"](a,Float) || Std["is"](a,Int)) && (Std["is"](b,Float) || Std["is"](b,Int))) && !Type.enumEq(ta,tb)) throw new thx.error.Error("arguments a ({0}) and b ({0}) have different types",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 59, className : "Dynamics", methodName : "interpolatef"});
	var $e = (ta);
	switch( $e[1] ) {
	case 0:
		return function(_) {
			return null;
		};
	case 1:
		if(Std["is"](b,Int)) return Ints.interpolatef(a,b,equation); else return Floats.interpolatef(a,b,equation);
		break;
	case 2:
		return Floats.interpolatef(a,b,equation);
	case 3:
		return Bools.interpolatef(a,b,equation);
	case 4:
		return Objects.interpolatef(a,b,equation);
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "String":
			return Strings.interpolatef(a,b,equation);
		case "Date":
			return Dates.interpolatef(a,b,equation);
		default:
			throw new thx.error.Error("cannot interpolate on instances of {0}",null,name,{ fileName : "Dynamics.hx", lineNumber : 77, className : "Dynamics", methodName : "interpolatef"});
		}
		break;
	default:
		throw new thx.error.Error("cannot interpolate on functions/enums/unknown",null,null,{ fileName : "Dynamics.hx", lineNumber : 79, className : "Dynamics", methodName : "interpolatef"});
	}
}
Dynamics.string = function(v) {
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		return "null";
	case 1:
		return Ints.format(v);
	case 2:
		return Floats.format(v);
	case 3:
		return Bools.format(v);
	case 4:
		var keys = Reflect.fields(v);
		var result = [];
		var _g = 0;
		while(_g < keys.length) {
			var key = keys[_g];
			++_g;
			result.push(key + " : " + Dynamics.string(Reflect.field(v,key)));
		}
		return "{" + result.join(", ") + "}";
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			return Arrays.string(v);
		case "String":
			var s = v;
			if(s.indexOf("\"") < 0) return "\"" + s + "\""; else if(s.indexOf("'") < 0) return "'" + s + "'"; else return "\"" + StringTools.replace(s,"\"","\\\"") + "\"";
			break;
		case "Date":
			return Dates.format(v);
		default:
			return Std.string(v);
		}
		break;
	case 7:
		var e = $e[2];
		return Enums.string(v);
	case 8:
		return "<unknown>";
	case 5:
		return "<function>";
	}
}
Dynamics.compare = function(a,b) {
	if(!Types.sameType(a,b)) throw new thx.error.Error("cannot compare 2 different types",null,null,{ fileName : "Dynamics.hx", lineNumber : 131, className : "Dynamics", methodName : "compare"});
	if(null == a && null == b) return 0;
	if(null == a) return -1;
	if(null == b) return 1;
	var $e = (Type["typeof"](a));
	switch( $e[1] ) {
	case 1:
		return a - b;
	case 2:
		return a < b?-1:a > b?1:0;
	case 3:
		return a == b?0:a?-1:1;
	case 4:
		return Objects.compare(a,b);
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			return Arrays.compare(a,b);
		case "String":
			return Strings.compare(a,b);
		case "Date":
			return Floats.compare(a.getTime(),b.getTime());
		default:
			return Strings.compare(Std.string(a),Std.string(b));
		}
		break;
	case 7:
		var e = $e[2];
		return Enums.compare(a,b);
	default:
		return 0;
	}
}
Dynamics.comparef = function(sample) {
	var $e = (Type["typeof"](sample));
	switch( $e[1] ) {
	case 1:
		return Ints.compare;
	case 2:
		return Floats.compare;
	case 3:
		return Bools.compare;
	case 4:
		return Objects.compare;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			return Arrays.compare;
		case "String":
			return Strings.compare;
		case "Date":
			return Dates.compare;
		default:
			return function(a,b) {
				return Strings.compare(Std.string(a),Std.string(b));
			};
		}
		break;
	case 7:
		var e = $e[2];
		return Enums.compare;
	default:
		return Dynamics.compare;
	}
}
Dynamics.clone = function(v,cloneInstances) {
	if(cloneInstances == null) cloneInstances = false;
	var $e = (Type["typeof"](v));
	switch( $e[1] ) {
	case 0:
		return null;
	case 1:
	case 2:
	case 3:
	case 7:
	case 8:
	case 5:
		return v;
	case 4:
		var o = { };
		Objects.copyTo(v,o);
		return o;
	case 6:
		var c = $e[2];
		var name = Type.getClassName(c);
		switch(name) {
		case "Array":
			var src = v, a = [];
			var _g = 0;
			while(_g < src.length) {
				var i = src[_g];
				++_g;
				a.push(Dynamics.clone(i));
			}
			return a;
		case "String":case "Date":
			return v;
		default:
			if(cloneInstances) {
				var o = Type.createEmptyInstance(c);
				var _g = 0, _g1 = Reflect.fields(v);
				while(_g < _g1.length) {
					var field = _g1[_g];
					++_g;
					o[field] = Dynamics.clone(Reflect.field(v,field));
				}
				return o;
			} else return v;
		}
		break;
	}
}
Dynamics.same = function(a,b) {
	var ta = Types.typeName(a), tb = Types.typeName(b);
	if(ta != tb) return false;
	var $e = (Type["typeof"](a));
	switch( $e[1] ) {
	case 2:
		return Floats.equals(a,b);
	case 0:
	case 1:
	case 3:
		return a == b;
	case 5:
		return Reflect.compareMethods(a,b);
	case 6:
		var c = $e[2];
		var ca = Type.getClassName(c), cb = Type.getClassName(Type.getClass(b));
		if(ca != cb) return false;
		if(Std["is"](a,String) && a != b) return false;
		if(Std["is"](a,Array)) {
			var aa = a, ab = b;
			if(aa.length != ab.length) return false;
			var _g1 = 0, _g = aa.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(aa[i],ab[i])) return false;
			}
			return true;
		}
		if(Std["is"](a,Date)) return a.getTime() == b.getTime();
		if(Std["is"](a,Hash) || Std["is"](a,IntHash)) {
			var ha = a, hb = b;
			var ka = Iterators.array(ha.keys()), kb = Iterators.array(hb.keys());
			if(ka.length != kb.length) return false;
			var _g = 0;
			while(_g < ka.length) {
				var key = ka[_g];
				++_g;
				if(!hb.exists(key) || !Dynamics.same(ha.get(key),hb.get(key))) return false;
			}
			return true;
		}
		var t = false;
		if((t = Iterators.isIterator(a)) || Iterables.isIterable(a)) {
			var va = t?Iterators.array(a):Iterators.array(a.iterator()), vb = t?Iterators.array(b):Iterators.array(b.iterator());
			if(va.length != vb.length) return false;
			var _g1 = 0, _g = va.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(va[i],vb[i])) return false;
			}
			return true;
		}
		var fields = Type.getInstanceFields(Type.getClass(a));
		var _g = 0;
		while(_g < fields.length) {
			var field = fields[_g];
			++_g;
			var va = Reflect.field(a,field);
			if(Reflect.isFunction(va)) continue;
			var vb = Reflect.field(b,field);
			if(!Dynamics.same(va,vb)) return false;
		}
		return true;
	case 7:
		var e = $e[2];
		var ea = Type.getEnumName(e), eb = Type.getEnumName(Type.getEnum(b));
		if(ea != eb) return false;
		if(a[1] != b[1]) return false;
		var pa = a.slice(2), pb = b.slice(2);
		var _g1 = 0, _g = pa.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Dynamics.same(pa[i],pb[i])) return false;
		}
		return true;
	case 4:
		var fa = Reflect.fields(a), fb = Reflect.fields(b);
		var _g = 0;
		while(_g < fa.length) {
			var field = fa[_g];
			++_g;
			fb.remove(field);
			if(!Reflect.hasField(b,field)) return false;
			var va = Reflect.field(a,field);
			if(Reflect.isFunction(va)) continue;
			var vb = Reflect.field(b,field);
			if(!Dynamics.same(va,vb)) return false;
		}
		if(fb.length > 0) return false;
		var t = false;
		if((t = Iterators.isIterator(a)) || Iterables.isIterable(a)) {
			if(t && !Iterators.isIterator(b)) return false;
			if(!t && !Iterables.isIterable(b)) return false;
			var aa = t?Iterators.array(a):Iterators.array(a.iterator());
			var ab = t?Iterators.array(b):Iterators.array(b.iterator());
			if(aa.length != ab.length) return false;
			var _g1 = 0, _g = aa.length;
			while(_g1 < _g) {
				var i = _g1++;
				if(!Dynamics.same(aa[i],ab[i])) return false;
			}
			return true;
		}
		return true;
	case 8:
		return (function($this) {
			var $r;
			throw "Unable to compare two unknown types";
			return $r;
		}(this));
	}
	return (function($this) {
		var $r;
		throw new thx.error.Error("Unable to compare values: {0} and {1}",[a,b],null,{ fileName : "Dynamics.hx", lineNumber : 371, className : "Dynamics", methodName : "same"});
		return $r;
	}(this));
}
Dynamics.number = function(v) {
	return Number(v);
}
Dynamics.prototype.__class__ = Dynamics;
Iterators = function() { }
Iterators.__name__ = ["Iterators"];
Iterators.count = function(it) {
	var i = 0;
	while( it.hasNext() ) {
		var _ = it.next();
		i++;
	}
	return i;
}
Iterators.indexOf = function(it,v,f) {
	if(null == f) f = function(v2) {
		return v == v2;
	};
	var c = 0;
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) return c; else c++;
	}
	return -1;
}
Iterators.contains = function(it,v,f) {
	if(null == f) f = function(v2) {
		return v == v2;
	};
	var c = 0;
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) return true;
	}
	return false;
}
Iterators.array = function(it) {
	var result = [];
	while( it.hasNext() ) {
		var v = it.next();
		result.push(v);
	}
	return result;
}
Iterators.join = function(it,glue) {
	if(glue == null) glue = ", ";
	return Iterators.array(it).join(glue);
}
Iterators.map = function(it,f) {
	var result = [], i = 0;
	while( it.hasNext() ) {
		var v = it.next();
		result.push(f(v,i++));
	}
	return result;
}
Iterators.each = function(it,f) {
	var i = 0;
	while( it.hasNext() ) {
		var o = it.next();
		f(o,i++);
	}
}
Iterators.filter = function(it,f) {
	var result = [];
	while( it.hasNext() ) {
		var i = it.next();
		if(f(i)) result.push(i);
	}
	return result;
}
Iterators.reduce = function(it,f,initialValue) {
	var accumulator = initialValue, i = 0;
	while( it.hasNext() ) {
		var o = it.next();
		accumulator = f(accumulator,o,i++);
	}
	return accumulator;
}
Iterators.random = function(it) {
	return Arrays.random(Iterators.array(it));
}
Iterators.any = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(f(v)) return true;
	}
	return false;
}
Iterators.all = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(!f(v)) return false;
	}
	return true;
}
Iterators.last = function(it) {
	var o = null;
	while(it.hasNext()) o = it.next();
	return o;
}
Iterators.lastf = function(it,f) {
	var rev = Iterators.array(it);
	rev.reverse();
	return Arrays.lastf(rev,f);
}
Iterators.first = function(it) {
	return it.next();
}
Iterators.firstf = function(it,f) {
	while( it.hasNext() ) {
		var v = it.next();
		if(f(v)) return v;
	}
	return null;
}
Iterators.order = function(it,f) {
	return Arrays.order(Iterators.array(it),f);
}
Iterators.isIterator = function(v) {
	var fields = Reflect.isObject(v) && null == Type.getClass(v)?Reflect.fields(v):Type.getInstanceFields(Type.getClass(v));
	if(!Lambda.has(fields,"next") || !Lambda.has(fields,"hasNext")) return false;
	return Reflect.isFunction(Reflect.field(v,"next")) && Reflect.isFunction(Reflect.field(v,"hasNext"));
}
Iterators.prototype.__class__ = Iterators;
if(!thx.culture.core) thx.culture.core = {}
thx.culture.core.DateTimeInfo = function(months,abbrMonths,days,abbrDays,shortDays,am,pm,separatorDate,separatorTime,firstWeekDay,patternYearMonth,patternMonthDay,patternDate,patternDateShort,patternDateRfc,patternDateTime,patternUniversal,patternSortable,patternTime,patternTimeShort) {
	if( months === $_ ) return;
	this.months = months;
	this.abbrMonths = abbrMonths;
	this.days = days;
	this.abbrDays = abbrDays;
	this.shortDays = shortDays;
	this.am = am;
	this.pm = pm;
	this.separatorDate = separatorDate;
	this.separatorTime = separatorTime;
	this.firstWeekDay = firstWeekDay;
	this.patternYearMonth = patternYearMonth;
	this.patternMonthDay = patternMonthDay;
	this.patternDate = patternDate;
	this.patternDateShort = patternDateShort;
	this.patternDateRfc = patternDateRfc;
	this.patternDateTime = patternDateTime;
	this.patternUniversal = patternUniversal;
	this.patternSortable = patternSortable;
	this.patternTime = patternTime;
	this.patternTimeShort = patternTimeShort;
}
thx.culture.core.DateTimeInfo.__name__ = ["thx","culture","core","DateTimeInfo"];
thx.culture.core.DateTimeInfo.prototype.months = null;
thx.culture.core.DateTimeInfo.prototype.abbrMonths = null;
thx.culture.core.DateTimeInfo.prototype.days = null;
thx.culture.core.DateTimeInfo.prototype.abbrDays = null;
thx.culture.core.DateTimeInfo.prototype.shortDays = null;
thx.culture.core.DateTimeInfo.prototype.am = null;
thx.culture.core.DateTimeInfo.prototype.pm = null;
thx.culture.core.DateTimeInfo.prototype.separatorDate = null;
thx.culture.core.DateTimeInfo.prototype.separatorTime = null;
thx.culture.core.DateTimeInfo.prototype.firstWeekDay = null;
thx.culture.core.DateTimeInfo.prototype.patternYearMonth = null;
thx.culture.core.DateTimeInfo.prototype.patternMonthDay = null;
thx.culture.core.DateTimeInfo.prototype.patternDate = null;
thx.culture.core.DateTimeInfo.prototype.patternDateShort = null;
thx.culture.core.DateTimeInfo.prototype.patternDateRfc = null;
thx.culture.core.DateTimeInfo.prototype.patternDateTime = null;
thx.culture.core.DateTimeInfo.prototype.patternUniversal = null;
thx.culture.core.DateTimeInfo.prototype.patternSortable = null;
thx.culture.core.DateTimeInfo.prototype.patternTime = null;
thx.culture.core.DateTimeInfo.prototype.patternTimeShort = null;
thx.culture.core.DateTimeInfo.prototype.__class__ = thx.culture.core.DateTimeInfo;
thx.culture.FormatParams = function() { }
thx.culture.FormatParams.__name__ = ["thx","culture","FormatParams"];
thx.culture.FormatParams.cleanQuotes = function(p) {
	if(p.length <= 1) return p;
	var f = p.substr(0,1);
	if(("\"" == f || "'" == f) && p.substr(-1) == f) return p.substr(1,p.length - 2); else return p;
}
thx.culture.FormatParams.params = function(p,ps,alt) {
	if(null != ps && null != p) return [p].concat(ps);
	if((null == ps || ps.length == 0) && null == p) return [alt];
	if(null == ps || ps.length == 0) {
		var parts = p.split(":");
		return [parts[0]].concat(parts.length == 1?[]:parts[1].split(",").map(function(s,i) {
			if(0 == i) return s; else return thx.culture.FormatParams.cleanQuotes(s);
		}));
	}
	return ps;
}
thx.culture.FormatParams.prototype.__class__ = thx.culture.FormatParams;
Reflect = function() { }
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	if(o.hasOwnProperty != null) return o.hasOwnProperty(field);
	var arr = Reflect.fields(o);
	var $it0 = arr.iterator();
	while( $it0.hasNext() ) {
		var t = $it0.next();
		if(t == field) return true;
	}
	return false;
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.setField = function(o,field,value) {
	o[field] = value;
}
Reflect.callMethod = function(o,func,args) {
	return func.apply(o,args);
}
Reflect.fields = function(o) {
	if(o == null) return new Array();
	var a = new Array();
	if(o.hasOwnProperty) {
		for(var i in o) if( o.hasOwnProperty(i) ) a.push(i);
	} else {
		var t;
		try {
			t = o.__proto__;
		} catch( e ) {
			t = null;
		}
		if(t != null) o.__proto__ = null;
		for(var i in o) if( i != "__proto__" ) a.push(i);
		if(t != null) o.__proto__ = t;
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && f.__name__ == null;
}
Reflect.compare = function(a,b) {
	return a == b?0:a > b?1:-1;
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && !v.__enum__ || t == "function" && v.__name__ != null;
}
Reflect.deleteField = function(o,f) {
	if(!Reflect.hasField(o,f)) return false;
	delete(o[f]);
	return true;
}
Reflect.copy = function(o) {
	var o2 = { };
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		o2[f] = Reflect.field(o,f);
	}
	return o2;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = new Array();
		var _g1 = 0, _g = arguments.length;
		while(_g1 < _g) {
			var i = _g1++;
			a.push(arguments[i]);
		}
		return f(a);
	};
}
Reflect.prototype.__class__ = Reflect;
dhx.AccessHtml = function(selection) {
	if( selection === $_ ) return;
	dhx.Access.call(this,selection);
}
dhx.AccessHtml.__name__ = ["dhx","AccessHtml"];
dhx.AccessHtml.__super__ = dhx.Access;
for(var k in dhx.Access.prototype ) dhx.AccessHtml.prototype[k] = dhx.Access.prototype[k];
dhx.AccessHtml.prototype.get = function() {
	return this.selection.firstNode(function(node) {
		return node.innerHTML;
	});
}
dhx.AccessHtml.prototype.string = function(v) {
	this.selection.eachNode(function(node,i) {
		node.innerHTML = v;
	});
	return this.selection;
}
dhx.AccessHtml.prototype.clear = function() {
	this.selection.eachNode(function(node,i) {
		node.innerHTML = "";
	});
	return this.selection;
}
dhx.AccessHtml.prototype["float"] = function(v) {
	this.selection.eachNode(function(node,i) {
		node.innerHTML = "" + v;
	});
	return this.selection;
}
dhx.AccessHtml.prototype.__class__ = dhx.AccessHtml;
dhx.AccessDataHtml = function(selection) {
	if( selection === $_ ) return;
	dhx.AccessHtml.call(this,selection);
}
dhx.AccessDataHtml.__name__ = ["dhx","AccessDataHtml"];
dhx.AccessDataHtml.__super__ = dhx.AccessHtml;
for(var k in dhx.AccessHtml.prototype ) dhx.AccessDataHtml.prototype[k] = dhx.AccessHtml.prototype[k];
dhx.AccessDataHtml.prototype.stringf = function(v) {
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__dhx_data__"),i);
		if(null == s) s = "";
		node.innerHTML = s;
	});
	return this.selection;
}
dhx.AccessDataHtml.prototype.floatf = function(v) {
	this.selection.eachNode(function(node,i) {
		var f = v(Reflect.field(node,"__dhx_data__"),i);
		if(null == f) node.innerHTML = ""; else node.innerHTML = "" + f;
	});
	return this.selection;
}
dhx.AccessDataHtml.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
dhx.AccessDataHtml.prototype.__class__ = dhx.AccessDataHtml;
IntIter = function(min,max) {
	if( min === $_ ) return;
	this.min = min;
	this.max = max;
}
IntIter.__name__ = ["IntIter"];
IntIter.prototype.min = null;
IntIter.prototype.max = null;
IntIter.prototype.hasNext = function() {
	return this.min < this.max;
}
IntIter.prototype.next = function() {
	return this.min++;
}
IntIter.prototype.__class__ = IntIter;
Dates = function() { }
Dates.__name__ = ["Dates"];
Dates.format = function(d,param,params,culture) {
	return (Dates.formatf(param,params,culture))(d);
}
Dates.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	switch(format) {
	case "D":
		return function(d) {
			return thx.culture.FormatDate.date(d,culture);
		};
	case "DS":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture);
		};
	case "DST":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.time(d,culture);
		};
	case "DSTS":
		return function(d) {
			return thx.culture.FormatDate.dateShort(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
		};
	case "DTS":
		return function(d) {
			return thx.culture.FormatDate.date(d,culture) + " " + thx.culture.FormatDate.timeShort(d,culture);
		};
	case "Y":
		return function(d) {
			return thx.culture.FormatDate.year(d,culture);
		};
	case "YM":
		return function(d) {
			return thx.culture.FormatDate.yearMonth(d,culture);
		};
	case "M":
		return function(d) {
			return thx.culture.FormatDate.month(d,culture);
		};
	case "MN":
		return function(d) {
			return thx.culture.FormatDate.monthName(d,culture);
		};
	case "MS":
		return function(d) {
			return thx.culture.FormatDate.monthNameShort(d,culture);
		};
	case "MD":
		return function(d) {
			return thx.culture.FormatDate.monthDay(d,culture);
		};
	case "WD":
		return function(d) {
			return thx.culture.FormatDate.weekDay(d,culture);
		};
	case "WDN":
		return function(d) {
			return thx.culture.FormatDate.weekDayName(d,culture);
		};
	case "WDS":
		return function(d) {
			return thx.culture.FormatDate.weekDayNameShort(d,culture);
		};
	case "R":
		return function(d) {
			return thx.culture.FormatDate.dateRfc(d,culture);
		};
	case "DT":
		return function(d) {
			return thx.culture.FormatDate.dateTime(d,culture);
		};
	case "U":
		return function(d) {
			return thx.culture.FormatDate.universal(d,culture);
		};
	case "S":
		return function(d) {
			return thx.culture.FormatDate.sortable(d,culture);
		};
	case "T":
		return function(d) {
			return thx.culture.FormatDate.time(d,culture);
		};
	case "TS":
		return function(d) {
			return thx.culture.FormatDate.timeShort(d,culture);
		};
	case "C":
		var f = params[0];
		if(null == f) return function(d) {
			return thx.culture.FormatDate.date(d,culture);
		}; else return function(d) {
			return thx.culture.FormatDate.format(f,d,culture,params[1] != null?params[1] == "true":true);
		};
		break;
	default:
		throw new thx.error.Error("Unsupported date format: {0}",null,format,{ fileName : "Dates.hx", lineNumber : 71, className : "Dates", methodName : "formatf"});
	}
}
Dates.interpolate = function(f,a,b,equation) {
	return (Dates.interpolatef(a,b,equation))(f);
}
Dates.interpolatef = function(a,b,equation) {
	var f = Floats.interpolatef(a.getTime(),b.getTime(),equation);
	return function(v) {
		return Date.fromTime(f(v));
	};
}
Dates.snap = function(time,period,mode) {
	if(mode == null) mode = 0;
	if(mode < 0) switch(period) {
	case "second":
		return Math.floor(time / 1000.0) * 1000.0;
	case "minute":
		return Math.floor(time / 60000.0) * 60000.0;
	case "hour":
		return Math.floor(time / 3600000.0) * 3600000.0;
	case "day":
		return Math.floor(time / 86400000.) * 86400000.;
	case "week":
		return Math.floor(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),d.getMonth(),1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),0,1,0,0,0).getTime();
	case "eternity":
		return 0;
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 113, className : "Dates", methodName : "snap"});
			return $r;
		}(this));
	} else if(mode > 0) switch(period) {
	case "second":
		return Math.ceil(time / 1000.0) * 1000.0;
	case "minute":
		return Math.ceil(time / 60000.0) * 60000.0;
	case "hour":
		return Math.ceil(time / 3600000.0) * 3600000.0;
	case "day":
		return Math.ceil(time / 86400000.) * 86400000.;
	case "week":
		return Math.ceil(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear(),d.getMonth() + 1,1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time);
		return new Date(d.getFullYear() + 1,0,1,0,0,0).getTime();
	case "eternity":
		return 0;
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 138, className : "Dates", methodName : "snap"});
			return $r;
		}(this));
	} else switch(period) {
	case "second":
		return Math.round(time / 1000.0) * 1000.0;
	case "minute":
		return Math.round(time / 60000.0) * 60000.0;
	case "hour":
		return Math.round(time / 3600000.0) * 3600000.0;
	case "day":
		return Math.round(time / 86400000.) * 86400000.;
	case "week":
		return Math.round(time / 604800000.) * 604800000.;
	case "month":
		var d = Date.fromTime(time), mod = d.getDate() > Math.round(DateTools.getMonthDays(d) / 2)?1:0;
		return new Date(d.getFullYear(),d.getMonth() + mod,1,0,0,0).getTime();
	case "year":
		var d = Date.fromTime(time), mod = time > new Date(d.getFullYear(),6,2,0,0,0).getTime()?1:0;
		return new Date(d.getFullYear() + mod,0,1,0,0,0).getTime();
	case "eternity":
		return 0;
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("unknown period '{0}'",null,period,{ fileName : "Dates.hx", lineNumber : 164, className : "Dates", methodName : "snap"});
			return $r;
		}(this));
	}
}
Dates.snapToWeekDay = function(time,day) {
	var d = Date.fromTime(time).getDay();
	var s = 0;
	switch(day.toLowerCase()) {
	case "sunday":
		s = 0;
		break;
	case "monday":
		s = 1;
		break;
	case "tuesday":
		s = 2;
		break;
	case "wednesday":
		s = 3;
		break;
	case "thursday":
		s = 4;
		break;
	case "friday":
		s = 5;
		break;
	case "saturday":
		s = 6;
		break;
	default:
		throw new thx.error.Error("unknown week day '{0}'",null,day,{ fileName : "Dates.hx", lineNumber : 190, className : "Dates", methodName : "snapToWeekDay"});
	}
	return time - (d - s) % 7 * 24 * 60 * 60 * 1000;
}
Dates.canParse = function(s) {
	return Dates._reparse.match(s);
}
Dates.parse = function(s) {
	var parts = s.split(".");
	var date = Date.fromString(StringTools.replace(parts[0],"T"," "));
	if(parts.length > 1) date = Date.fromTime(date.getTime() + Std.parseInt(parts[1]));
	return date;
}
Dates.compare = function(a,b) {
	return Floats.compare(a.getTime(),b.getTime());
}
Dates.prototype.__class__ = Dates;
thx.culture.Language = function() { }
thx.culture.Language.__name__ = ["thx","culture","Language"];
thx.culture.Language.__super__ = thx.culture.Info;
for(var k in thx.culture.Info.prototype ) thx.culture.Language.prototype[k] = thx.culture.Info.prototype[k];
thx.culture.Language.languages = null;
thx.culture.Language.getLanguages = function() {
	if(null == thx.culture.Language.languages) thx.culture.Language.languages = new Hash();
	return thx.culture.Language.languages;
}
thx.culture.Language.get = function(name) {
	return thx.culture.Language.getLanguages().get(name.toLowerCase());
}
thx.culture.Language.names = function() {
	return thx.culture.Language.getLanguages().keys();
}
thx.culture.Language.add = function(language) {
	if(!thx.culture.Language.getLanguages().exists(language.iso2)) thx.culture.Language.getLanguages().set(language.iso2,language);
}
thx.culture.Language.prototype.__class__ = thx.culture.Language;
if(!thx.languages) thx.languages = {}
thx.languages.En = function(p) {
	if( p === $_ ) return;
	this.name = "en";
	this.english = "English";
	this["native"] = "English";
	this.iso2 = "en";
	this.iso3 = "eng";
	this.pluralRule = 1;
	thx.culture.Language.add(this);
}
thx.languages.En.__name__ = ["thx","languages","En"];
thx.languages.En.__super__ = thx.culture.Language;
for(var k in thx.culture.Language.prototype ) thx.languages.En.prototype[k] = thx.culture.Language.prototype[k];
thx.languages.En.language = null;
thx.languages.En.getLanguage = function() {
	if(null == thx.languages.En.language) thx.languages.En.language = new thx.languages.En();
	return thx.languages.En.language;
}
thx.languages.En.prototype.__class__ = thx.languages.En;
ValueType = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
Type = function() { }
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	if(o.__enum__ != null) return null;
	return o.__class__;
}
Type.getEnum = function(o) {
	if(o == null) return null;
	return o.__enum__;
}
Type.getSuperClass = function(c) {
	return c.__super__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl;
	try {
		cl = eval(name);
	} catch( e ) {
		cl = null;
	}
	if(cl == null || cl.__name__ == null) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e;
	try {
		e = eval(name);
	} catch( err ) {
		e = null;
	}
	if(e == null || e.__ename__ == null) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	if(args.length <= 3) return new cl(args[0],args[1],args[2]);
	if(args.length > 8) throw "Too many arguments";
	return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
}
Type.createEmptyInstance = function(cl) {
	return new cl($_);
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.createEnumIndex = function(e,index,params) {
	var c = e.__constructs__[index];
	if(c == null) throw index + " is not a valid enum constructor index";
	return Type.createEnum(e,c,params);
}
Type.getInstanceFields = function(c) {
	var a = Reflect.fields(c.prototype);
	a.remove("__class__");
	return a;
}
Type.getClassFields = function(c) {
	var a = Reflect.fields(c);
	a.remove("__name__");
	a.remove("__interfaces__");
	a.remove("__super__");
	a.remove("prototype");
	return a;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.copy();
}
Type["typeof"] = function(v) {
	switch(typeof(v)) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ != null) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
Type.enumEq = function(a,b) {
	if(a == b) return true;
	try {
		if(a[0] != b[0]) return false;
		var _g1 = 2, _g = a.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(!Type.enumEq(a[i],b[i])) return false;
		}
		var e = a.__enum__;
		if(e != b.__enum__ || e == null) return false;
	} catch( e ) {
		return false;
	}
	return true;
}
Type.enumConstructor = function(e) {
	return e[0];
}
Type.enumParameters = function(e) {
	return e.slice(2);
}
Type.enumIndex = function(e) {
	return e[1];
}
Type.prototype.__class__ = Type;
if(!thx.util) thx.util = {}
thx.util.Message = function(message,params,param) {
	if( message === $_ ) return;
	this.message = message;
	if(null == params) this.params = []; else this.params = params;
	if(null != param) this.params.push(param);
}
thx.util.Message.__name__ = ["thx","util","Message"];
thx.util.Message.prototype.message = null;
thx.util.Message.prototype.params = null;
thx.util.Message.prototype.toString = function() {
	return Strings.format(this.message,this.params);
}
thx.util.Message.prototype.translatef = function(translator) {
	return Strings.format(translator(this.message),this.params);
}
thx.util.Message.prototype.translate = function(translator,domain) {
	if(null == domain) domain = translator.getDomain();
	var culture = thx.culture.Culture.get(domain);
	if(this.params.length == 1 && Std["is"](this.params[0],Int)) return Strings.format(translator.__(null,this.message,this.params[0],domain),this.params,null,culture); else return Strings.format(translator._(this.message,domain),this.params,null,culture);
}
thx.util.Message.prototype.__class__ = thx.util.Message;
Enums = function() { }
Enums.__name__ = ["Enums"];
Enums.string = function(e) {
	var cons = e[0];
	var params = [];
	var _g = 0, _g1 = e.slice(2);
	while(_g < _g1.length) {
		var param = _g1[_g];
		++_g;
		params.push(Dynamics.string(param));
	}
	return cons + (params.length == 0?"":"(" + params.join(", ") + ")");
}
Enums.compare = function(a,b) {
	var v;
	if((v = a[1] - b[1]) != 0) return v;
	return Arrays.compare(a.slice(2),b.slice(2));
}
Enums.prototype.__class__ = Enums;
dhx.HostType = { __ename__ : ["dhx","HostType"], __constructs__ : ["UnknownServer","NodeJs","IE","Firefox","Safari","Chrome","Opera","Unknown"] }
dhx.HostType.UnknownServer = ["UnknownServer",0];
dhx.HostType.UnknownServer.toString = $estr;
dhx.HostType.UnknownServer.__enum__ = dhx.HostType;
dhx.HostType.NodeJs = ["NodeJs",1];
dhx.HostType.NodeJs.toString = $estr;
dhx.HostType.NodeJs.__enum__ = dhx.HostType;
dhx.HostType.IE = function(version) { var $x = ["IE",2,version]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.HostType.Firefox = function(version) { var $x = ["Firefox",3,version]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.HostType.Safari = function(version) { var $x = ["Safari",4,version]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.HostType.Chrome = function(version) { var $x = ["Chrome",5,version]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.HostType.Opera = function(version) { var $x = ["Opera",6,version]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.HostType.Unknown = function(what) { var $x = ["Unknown",7,what]; $x.__enum__ = dhx.HostType; $x.toString = $estr; return $x; }
dhx.EnvironmentType = { __ename__ : ["dhx","EnvironmentType"], __constructs__ : ["Mobile","Desktop","Server","UnknownEnvironment"] }
dhx.EnvironmentType.Mobile = ["Mobile",0];
dhx.EnvironmentType.Mobile.toString = $estr;
dhx.EnvironmentType.Mobile.__enum__ = dhx.EnvironmentType;
dhx.EnvironmentType.Desktop = ["Desktop",1];
dhx.EnvironmentType.Desktop.toString = $estr;
dhx.EnvironmentType.Desktop.__enum__ = dhx.EnvironmentType;
dhx.EnvironmentType.Server = ["Server",2];
dhx.EnvironmentType.Server.toString = $estr;
dhx.EnvironmentType.Server.__enum__ = dhx.EnvironmentType;
dhx.EnvironmentType.UnknownEnvironment = ["UnknownEnvironment",3];
dhx.EnvironmentType.UnknownEnvironment.toString = $estr;
dhx.EnvironmentType.UnknownEnvironment.__enum__ = dhx.EnvironmentType;
dhx.OSType = { __ename__ : ["dhx","OSType"], __constructs__ : ["Windows","IOs","Android","Mac","Linux","UnknownOs"] }
dhx.OSType.Windows = function(version) { var $x = ["Windows",0,version]; $x.__enum__ = dhx.OSType; $x.toString = $estr; return $x; }
dhx.OSType.IOs = ["IOs",1];
dhx.OSType.IOs.toString = $estr;
dhx.OSType.IOs.__enum__ = dhx.OSType;
dhx.OSType.Android = ["Android",2];
dhx.OSType.Android.toString = $estr;
dhx.OSType.Android.__enum__ = dhx.OSType;
dhx.OSType.Mac = ["Mac",3];
dhx.OSType.Mac.toString = $estr;
dhx.OSType.Mac.__enum__ = dhx.OSType;
dhx.OSType.Linux = ["Linux",4];
dhx.OSType.Linux.toString = $estr;
dhx.OSType.Linux.__enum__ = dhx.OSType;
dhx.OSType.UnknownOs = ["UnknownOs",5];
dhx.OSType.UnknownOs.toString = $estr;
dhx.OSType.UnknownOs.__enum__ = dhx.OSType;
dhx.ClientHost = function() { }
dhx.ClientHost.__name__ = ["dhx","ClientHost"];
dhx.ClientHost.host = null;
dhx.ClientHost.environment = null;
dhx.ClientHost.os = null;
dhx.ClientHost.isIE = function() {
	return (function($this) {
		var $r;
		switch( (dhx.ClientHost.host)[1] ) {
		case 2:
			$r = true;
			break;
		default:
			$r = false;
		}
		return $r;
	}(this));
}
dhx.ClientHost.hostVersion = function() {
	return (function($this) {
		var $r;
		var $e = (dhx.ClientHost.host);
		switch( $e[1] ) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
			var v = $e[2];
			$r = v;
			break;
		default:
			$r = null;
		}
		return $r;
	}(this));
}
dhx.ClientHost.hostString = function() {
	return (function($this) {
		var $r;
		switch( (dhx.ClientHost.host)[1] ) {
		case 0:
			$r = "unknown_server";
			break;
		case 7:
			$r = "unknown";
			break;
		case 1:
			$r = "nodejs";
			break;
		default:
			$r = dhx.ClientHost.host[0];
		}
		return $r;
	}(this));
}
dhx.ClientHost.osString = function() {
	return dhx.ClientHost.os[0];
}
dhx.ClientHost.osVersion = function() {
	return (function($this) {
		var $r;
		var $e = (dhx.ClientHost.os);
		switch( $e[1] ) {
		case 0:
			var v = $e[2];
			$r = v;
			break;
		default:
			$r = null;
		}
		return $r;
	}(this));
}
dhx.ClientHost.environmentString = function() {
	return dhx.ClientHost.environment[0];
}
dhx.ClientHost.userAgent = function() {
	return "" + navigator.userAgent;
}
dhx.ClientHost.hasNavigator = function() {
	return typeof navigator !== 'undefined';
}
dhx.ClientHost.prototype.__class__ = dhx.ClientHost;
js.Boot = function() { }
js.Boot.__name__ = ["js","Boot"];
js.Boot.__unhtml = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
js.Boot.__trace = function(v,i) {
	var msg = i != null?i.fileName + ":" + i.lineNumber + ": ":"";
	msg += js.Boot.__unhtml(js.Boot.__string_rec(v,"")) + "<br/>";
	var d = document.getElementById("haxe:trace");
	if(d == null) alert("No haxe:trace element defined\n" + msg); else d.innerHTML += msg;
}
js.Boot.__clear_trace = function() {
	var d = document.getElementById("haxe:trace");
	if(d != null) d.innerHTML = "";
}
js.Boot.__closure = function(o,f) {
	var m = o[f];
	if(m == null) return null;
	var f1 = function() {
		return m.apply(o,arguments);
	};
	f1.scope = o;
	f1.method = m;
	return f1;
}
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ != null || o.__ename__ != null)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__ != null) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	try {
		if(o instanceof cl) {
			if(cl == Array) return o.__enum__ == null;
			return true;
		}
		if(js.Boot.__interfLoop(o.__class__,cl)) return true;
	} catch( e ) {
		if(cl == null) return false;
	}
	switch(cl) {
	case Int:
		return Math.ceil(o%2147483648.0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return o === true || o === false;
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o == null) return false;
		return o.__enum__ == cl || cl == Class && o.__name__ != null || cl == Enum && o.__ename__ != null;
	}
}
js.Boot.__init = function() {
	js.Lib.isIE = typeof document!='undefined' && document.all != null && typeof window!='undefined' && window.opera == null;
	js.Lib.isOpera = typeof window!='undefined' && window.opera != null;
	Array.prototype.copy = Array.prototype.slice;
	Array.prototype.insert = function(i,x) {
		this.splice(i,0,x);
	};
	Array.prototype.remove = Array.prototype.indexOf?function(obj) {
		var idx = this.indexOf(obj);
		if(idx == -1) return false;
		this.splice(idx,1);
		return true;
	}:function(obj) {
		var i = 0;
		var l = this.length;
		while(i < l) {
			if(this[i] == obj) {
				this.splice(i,1);
				return true;
			}
			i++;
		}
		return false;
	};
	Array.prototype.iterator = function() {
		return { cur : 0, arr : this, hasNext : function() {
			return this.cur < this.arr.length;
		}, next : function() {
			return this.arr[this.cur++];
		}};
	};
	if(String.prototype.cca == null) String.prototype.cca = String.prototype.charCodeAt;
	String.prototype.charCodeAt = function(i) {
		var x = this.cca(i);
		if(x != x) return null;
		return x;
	};
	var oldsub = String.prototype.substr;
	String.prototype.substr = function(pos,len) {
		if(pos != null && pos != 0 && len != null && len < 0) return "";
		if(len == null) len = this.length;
		if(pos < 0) {
			pos = this.length + pos;
			if(pos < 0) pos = 0;
		} else if(len < 0) len = this.length + len - pos;
		return oldsub.apply(this,[pos,len]);
	};
	$closure = js.Boot.__closure;
}
js.Boot.prototype.__class__ = js.Boot;
if(!thx.geom) thx.geom = {}
if(!thx.geom.layout) thx.geom.layout = {}
if(!thx.geom.layout._Hierarchy) thx.geom.layout._Hierarchy = {}
thx.geom.layout._Hierarchy.IThis = function(p) {
}
thx.geom.layout._Hierarchy.IThis.__name__ = ["thx","geom","layout","_Hierarchy","IThis"];
thx.geom.layout._Hierarchy.IThis.prototype.This = function() {
	return this;
}
thx.geom.layout._Hierarchy.IThis.prototype.__class__ = thx.geom.layout._Hierarchy.IThis;
thx.geom.layout.AbstractHierarchy = function(p) {
	if( p === $_ ) return;
	thx.geom.layout._Hierarchy.IThis.call(this);
}
thx.geom.layout.AbstractHierarchy.__name__ = ["thx","geom","layout","AbstractHierarchy"];
thx.geom.layout.AbstractHierarchy.__super__ = thx.geom.layout._Hierarchy.IThis;
for(var k in thx.geom.layout._Hierarchy.IThis.prototype ) thx.geom.layout.AbstractHierarchy.prototype[k] = thx.geom.layout._Hierarchy.IThis.prototype[k];
thx.geom.layout.AbstractHierarchy.prototype._sort = null;
thx.geom.layout.AbstractHierarchy.prototype._children = null;
thx.geom.layout.AbstractHierarchy.prototype._value = null;
thx.geom.layout.AbstractHierarchy.prototype.hierarchy = function(data,i) {
	var nodes = new Array();
	this.recurse(data,0,nodes);
	return nodes;
}
thx.geom.layout.AbstractHierarchy.prototype.recurse = function(data,depth,nodes) {
	var datas = this._children(data,depth);
	var node = { depth : depth, data : data, value : null, children : null, parent : null};
	nodes.push(node);
	if(datas != null) {
		var i = -1;
		var n = datas.length;
		var c = new Array();
		node.children = c;
		var v = 0.0;
		var j = depth + 1;
		while(++i < n) {
			var d = this.recurse(datas[i],j,nodes);
			d.parent = node;
			c.push(d);
			v += d.value;
		}
		var t = this;
		if(this._sort != null) c.sort(function(x,y) {
			return t._sort(x.data,y.data);
		});
		if(this._value != null) node.value = v;
	} else if(this._value != null) node.value = this._value(data,depth);
	return node;
}
thx.geom.layout.AbstractHierarchy.prototype._revalue = function(node,depth) {
	var children = node.children;
	var v = 0.0;
	if(children != null) {
		var i = -1;
		var n = children.length;
		var j = depth + 1;
		while(++i < n) v += this._revalue(children[i],j);
	} else if($closure(this,"value") != null) v = this._value(node.data,depth);
	if(this._value != null) node.value = v;
	return v;
}
thx.geom.layout.AbstractHierarchy.prototype.sort = function(f) {
	this._sort = f;
	return this.This();
}
thx.geom.layout.AbstractHierarchy.prototype.getSort = function() {
	return this._sort;
}
thx.geom.layout.AbstractHierarchy.prototype.children = function(c) {
	this._children = c;
	return this.This();
}
thx.geom.layout.AbstractHierarchy.prototype.getChildren = function() {
	return this._children;
}
thx.geom.layout.AbstractHierarchy.prototype.value = function(v) {
	this._value = v;
	return this.This();
}
thx.geom.layout.AbstractHierarchy.prototype.getValue = function() {
	return this._value;
}
thx.geom.layout.AbstractHierarchy.prototype.revalue = function(root) {
	this._revalue(root,0);
	return root;
}
thx.geom.layout.AbstractHierarchy.prototype.__class__ = thx.geom.layout.AbstractHierarchy;
thx.geom.layout.Hierarchy = function(p) {
	if( p === $_ ) return;
	thx.geom.layout.AbstractHierarchy.call(this);
}
thx.geom.layout.Hierarchy.__name__ = ["thx","geom","layout","Hierarchy"];
thx.geom.layout.Hierarchy.__super__ = thx.geom.layout.AbstractHierarchy;
for(var k in thx.geom.layout.AbstractHierarchy.prototype ) thx.geom.layout.Hierarchy.prototype[k] = thx.geom.layout.AbstractHierarchy.prototype[k];
thx.geom.layout.Hierarchy.nodeChildren = function(d) {
	return d.children;
}
thx.geom.layout.Hierarchy.nodeValue = function(d) {
	return d.value;
}
thx.geom.layout.Hierarchy.nodeSort = function(a,b) {
	return b.value - a.value;
}
thx.geom.layout.Hierarchy.prototype.__class__ = thx.geom.layout.Hierarchy;
if(!thx.translation) thx.translation = {}
thx.translation.ITranslation = function() { }
thx.translation.ITranslation.__name__ = ["thx","translation","ITranslation"];
thx.translation.ITranslation.prototype.domain = null;
thx.translation.ITranslation.prototype._ = null;
thx.translation.ITranslation.prototype.__ = null;
thx.translation.ITranslation.prototype.__class__ = thx.translation.ITranslation;
IntHash = function(p) {
	if( p === $_ ) return;
	this.h = {}
	if(this.h.__proto__ != null) {
		this.h.__proto__ = null;
		delete(this.h.__proto__);
	}
}
IntHash.__name__ = ["IntHash"];
IntHash.prototype.h = null;
IntHash.prototype.set = function(key,value) {
	this.h[key] = value;
}
IntHash.prototype.get = function(key) {
	return this.h[key];
}
IntHash.prototype.exists = function(key) {
	return this.h[key] != null;
}
IntHash.prototype.remove = function(key) {
	if(this.h[key] == null) return false;
	delete(this.h[key]);
	return true;
}
IntHash.prototype.keys = function() {
	var a = new Array();
	for( x in this.h ) a.push(x);
	return a.iterator();
}
IntHash.prototype.iterator = function() {
	return { ref : this.h, it : this.keys(), hasNext : function() {
		return this.it.hasNext();
	}, next : function() {
		var i = this.it.next();
		return this.ref[i];
	}};
}
IntHash.prototype.toString = function() {
	var s = new StringBuf();
	s.b[s.b.length] = "{" == null?"null":"{";
	var it = this.keys();
	while( it.hasNext() ) {
		var i = it.next();
		s.b[s.b.length] = i == null?"null":i;
		s.b[s.b.length] = " => " == null?"null":" => ";
		s.add(Std.string(this.get(i)));
		if(it.hasNext()) s.b[s.b.length] = ", " == null?"null":", ";
	}
	s.b[s.b.length] = "}" == null?"null":"}";
	return s.b.join("");
}
IntHash.prototype.__class__ = IntHash;
dhx.AccessStyle = function(name,selection) {
	if( name === $_ ) return;
	dhx.Access.call(this,selection);
	this.name = name;
}
dhx.AccessStyle.__name__ = ["dhx","AccessStyle"];
dhx.AccessStyle.__super__ = dhx.Access;
for(var k in dhx.Access.prototype ) dhx.AccessStyle.prototype[k] = dhx.Access.prototype[k];
dhx.AccessStyle.getComputedStyleValue = function(node,key) {
	return window.getComputedStyle(node,null).getPropertyValue(key);
}
dhx.AccessStyle.setStyleProperty = function(node,key,value,priority) {
	node.style.setProperty(key,value,null == priority?"":priority);
}
dhx.AccessStyle.removeStyleProperty = function(node,key) {
	node.style.removeProperty(key);
}
dhx.AccessStyle.prototype.name = null;
dhx.AccessStyle.prototype.get = function() {
	var me = this;
	return this.selection.firstNode(function(node) {
		return window.getComputedStyle(node,null).getPropertyValue(me.name);
	});
}
dhx.AccessStyle.prototype.getFloat = function() {
	var v = this.get();
	if(dhx.AccessStyle.refloat.match(v)) return Std.parseFloat(dhx.AccessStyle.refloat.matched(1)); else return Math.NaN;
}
dhx.AccessStyle.prototype.remove = function() {
	var me = this;
	this.selection.eachNode(function(node,i) {
		node.style.removeProperty(me.name);
	});
	return this.selection;
}
dhx.AccessStyle.prototype.string = function(v,priority) {
	var me = this;
	this.selection.eachNode(function(node,i) {
		node.style.setProperty(me.name,v,null == priority?"":priority);
	});
	return this.selection;
}
dhx.AccessStyle.prototype["float"] = function(v,priority) {
	var me = this;
	this.selection.eachNode(function(node,i) {
		node.style.setProperty(me.name,v,null == priority?"":priority);
	});
	return this.selection;
}
dhx.AccessStyle.prototype.__class__ = dhx.AccessStyle;
dhx.AccessDataStyle = function(name,selection) {
	if( name === $_ ) return;
	dhx.AccessStyle.call(this,name,selection);
}
dhx.AccessDataStyle.__name__ = ["dhx","AccessDataStyle"];
dhx.AccessDataStyle.__super__ = dhx.AccessStyle;
for(var k in dhx.AccessStyle.prototype ) dhx.AccessDataStyle.prototype[k] = dhx.AccessStyle.prototype[k];
dhx.AccessDataStyle.prototype.stringf = function(v,priority) {
	var me = this;
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__dhx_data__"),i);
		if(s == null) node.style.removeProperty(me.name); else node.style.setProperty(me.name,s,null == priority?"":priority);
	});
	return this.selection;
}
dhx.AccessDataStyle.prototype.floatf = function(v,priority) {
	var me = this;
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__dhx_data__"),i);
		if(s == null) node.style.removeProperty(me.name); else node.style.setProperty(me.name,"" + s,null == priority?"":priority);
	});
	return this.selection;
}
dhx.AccessDataStyle.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
dhx.AccessDataStyle.prototype.__class__ = dhx.AccessDataStyle;
dhx.AccessText = function(selection) {
	if( selection === $_ ) return;
	dhx.Access.call(this,selection);
}
dhx.AccessText.__name__ = ["dhx","AccessText"];
dhx.AccessText.__super__ = dhx.Access;
for(var k in dhx.Access.prototype ) dhx.AccessText.prototype[k] = dhx.Access.prototype[k];
dhx.AccessText.prototype.get = function() {
	return this.selection.firstNode(function(node) {
		return node.textContent;
	});
}
dhx.AccessText.prototype.string = function(v) {
	this.clear();
	this.selection.eachNode(function(node,_) {
		node.textContent = v;
	});
	return this.selection;
}
dhx.AccessText.prototype.clear = function() {
	this.selection.eachNode(function(node,i) {
		node.textContent = "";
	});
	return this.selection;
}
dhx.AccessText.prototype["float"] = function(v) {
	this.clear();
	this.selection.eachNode(function(node,_) {
		node.textContent = "" + v;
	});
	return this.selection;
}
dhx.AccessText.prototype.stringNodef = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(node,i);
		if(null != x) node.textContent = x;
	});
	return this.selection;
}
dhx.AccessText.prototype.floatNodef = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(node,i);
		if(null != x) node.textContent = "" + x;
	});
	return this.selection;
}
dhx.AccessText.prototype.__class__ = dhx.AccessText;
dhx.AccessDataText = function(selection) {
	if( selection === $_ ) return;
	dhx.AccessText.call(this,selection);
}
dhx.AccessDataText.__name__ = ["dhx","AccessDataText"];
dhx.AccessDataText.__super__ = dhx.AccessText;
for(var k in dhx.AccessText.prototype ) dhx.AccessDataText.prototype[k] = dhx.AccessText.prototype[k];
dhx.AccessDataText.prototype.stringf = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(Reflect.field(node,"__dhx_data__"),i);
		if(null != x) node.textContent = x;
	});
	return this.selection;
}
dhx.AccessDataText.prototype.floatf = function(v) {
	this.clear();
	this.selection.eachNode(function(node,i) {
		var x = v(Reflect.field(node,"__dhx_data__"),i);
		if(null != x) node.textContent = "" + x;
	});
	return this.selection;
}
dhx.AccessDataText.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
dhx.AccessDataText.prototype.__class__ = dhx.AccessDataText;
if(!dhx.util) dhx.util = {}
dhx.util.Ints = function() { }
dhx.util.Ints.__name__ = ["dhx","util","Ints"];
dhx.util.Ints.interpolatef = function(min,max,equation) {
	if(max == null) max = 1.0;
	if(min == null) min = 0.0;
	if(null == equation) equation = function(f) {
		return f;
	};
	var d = max - min;
	return function(f) {
		return Math.round(min + equation(f) * d);
	};
}
dhx.util.Ints.prototype.__class__ = dhx.util.Ints;
StringBuf = function(p) {
	if( p === $_ ) return;
	this.b = new Array();
}
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype.add = function(x) {
	this.b[this.b.length] = x == null?"null":x;
}
StringBuf.prototype.addSub = function(s,pos,len) {
	this.b[this.b.length] = s.substr(pos,len);
}
StringBuf.prototype.addChar = function(c) {
	this.b[this.b.length] = String.fromCharCode(c);
}
StringBuf.prototype.toString = function() {
	return this.b.join("");
}
StringBuf.prototype.b = null;
StringBuf.prototype.__class__ = StringBuf;
Strings = function() { }
Strings.__name__ = ["Strings"];
Strings.format = function(pattern,values,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	if(null == values || 0 == values.length) return pattern;
	return (Strings.formatf(pattern,nullstring,culture))(values);
}
Strings.formatf = function(pattern,nullstring,culture) {
	if(nullstring == null) nullstring = "null";
	var buf = [];
	while(true) {
		if(!Strings._reFormat.match(pattern)) {
			buf.push((function() {
				return function(_) {
					return pattern;
				};
			})());
			break;
		}
		var pos = Std.parseInt(Strings._reFormat.matched(1));
		var format = Strings._reFormat.matched(2);
		if(format == "") format = null;
		var p = null;
		var params = [];
		var _g = 3;
		while(_g < 20) {
			var i = _g++;
			p = Strings._reFormat.matched(i);
			if(p == null || p == "") break;
			params.push(thx.culture.FormatParams.cleanQuotes(p));
		}
		var left = [Strings._reFormat.matchedLeft()];
		buf.push((function(left) {
			return function(_) {
				return left[0];
			};
		})(left));
		var df = [Dynamics.formatf(format,params,nullstring,culture)];
		buf.push(((function() {
			return function(f,a1) {
				return (function() {
					return function(a2) {
						return f(a1,a2);
					};
				})();
			};
		})())((function(df) {
			return function(i,v) {
				return df[0](v[i]);
			};
		})(df),pos));
		pattern = Strings._reFormat.matchedRight();
	}
	return function(values) {
		if(null == values) values = [];
		return buf.map(function(df,_) {
			return df(values);
		}).join("");
	};
}
Strings.formatOne = function(v,param,params,culture) {
	return (Strings.formatOnef(param,params,culture))(v);
}
Strings.formatOnef = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"S");
	var format = params.shift();
	switch(format) {
	case "S":
		return function(v) {
			return v;
		};
	case "T":
		var len = params.length < 1?20:Std.parseInt(params[0]);
		var ellipsis = params.length < 2?"...":params[1];
		return Strings.ellipsisf(len,ellipsis);
	case "PR":
		var len = params.length < 1?10:Std.parseInt(params[0]);
		var pad = params.length < 2?" ":params[1];
		return function(v) {
			return StringTools.rpad(v,pad,len);
		};
	case "PL":
		var len = params.length < 1?10:Std.parseInt(params[0]);
		var pad = params.length < 2?" ":params[1];
		return function(v) {
			return StringTools.lpad(v,pad,len);
		};
	default:
		return (function($this) {
			var $r;
			throw "Unsupported string format: " + format;
			return $r;
		}(this));
	}
}
Strings.upTo = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return value.substr(0,pos);
}
Strings.startFrom = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return value.substr(pos + searchFor.length);
}
Strings.rtrim = function(value,charlist) {
	var len = value.length;
	while(len > 0) {
		var c = value.substr(len - 1,1);
		if(charlist.indexOf(c) < 0) break;
		len--;
	}
	return value.substr(0,len);
}
Strings.ltrim = function(value,charlist) {
	var start = 0;
	while(start < value.length) {
		var c = value.substr(start,1);
		if(charlist.indexOf(c) < 0) break;
		start++;
	}
	return value.substr(start);
}
Strings.trim = function(value,charlist) {
	return Strings.rtrim(Strings.ltrim(value,charlist),charlist);
}
Strings.collapse = function(value) {
	return Strings._reCollapse.replace(StringTools.trim(value)," ");
}
Strings.ucfirst = function(value) {
	return value == null?null:value.charAt(0).toUpperCase() + value.substr(1);
}
Strings.lcfirst = function(value) {
	return value == null?null:value.charAt(0).toLowerCase() + value.substr(1);
}
Strings.empty = function(value) {
	return value == null || value == "";
}
Strings.isAlphaNum = function(value) {
	return value == null?false:Strings.__alphaNumPattern.match(value);
}
Strings.digitsOnly = function(value) {
	return value == null?false:Strings.__digitsPattern.match(value);
}
Strings.ucwords = function(value) {
	return Strings.__ucwordsPattern.customReplace(value == null?null:value.charAt(0).toUpperCase() + value.substr(1),Strings.__upperMatch);
}
Strings.ucwordsws = function(value) {
	return Strings.__ucwordswsPattern.customReplace(value == null?null:value.charAt(0).toUpperCase() + value.substr(1),Strings.__upperMatch);
}
Strings.__upperMatch = function(re) {
	return re.matched(0).toUpperCase();
}
Strings.humanize = function(s) {
	return StringTools.replace(Strings.underscore(s),"_"," ");
}
Strings.capitalize = function(s) {
	return s.substr(0,1).toUpperCase() + s.substr(1);
}
Strings.succ = function(s) {
	return s.substr(0,-1) + String.fromCharCode(s.substr(-1).charCodeAt(0) + 1);
}
Strings.underscore = function(s) {
	s = new EReg("::","g").replace(s,"/");
	s = new EReg("([A-Z]+)([A-Z][a-z])","g").replace(s,"$1_$2");
	s = new EReg("([a-z\\d])([A-Z])","g").replace(s,"$1_$2");
	s = new EReg("-","g").replace(s,"_");
	return s.toLowerCase();
}
Strings.dasherize = function(s) {
	return StringTools.replace(s,"_","-");
}
Strings.repeat = function(s,times) {
	var b = [];
	var _g = 0;
	while(_g < times) {
		var i = _g++;
		b.push(s);
	}
	return b.join("");
}
Strings.wrapColumns = function(s,columns,indent,newline) {
	if(newline == null) newline = "\n";
	if(indent == null) indent = "";
	if(columns == null) columns = 78;
	var parts = Strings._reSplitWC.split(s);
	var result = [];
	var _g = 0;
	while(_g < parts.length) {
		var part = parts[_g];
		++_g;
		result.push(Strings._wrapColumns(StringTools.trim(Strings._reReduceWS.replace(part," ")),columns,indent,newline));
	}
	return result.join(newline);
}
Strings._wrapColumns = function(s,columns,indent,newline) {
	var parts = [];
	var pos = 0;
	var len = s.length;
	var ilen = indent.length;
	columns -= ilen;
	while(true) {
		if(pos + columns >= len - ilen) {
			parts.push(s.substr(pos));
			break;
		}
		var i = 0;
		while(!StringTools.isSpace(s,pos + columns - i) && i < columns) i++;
		if(i == columns) {
			i = 0;
			while(!StringTools.isSpace(s,pos + columns + i) && pos + columns + i < len) i++;
			parts.push(s.substr(pos,columns + i));
			pos += columns + i + 1;
		} else {
			parts.push(s.substr(pos,columns - i));
			pos += columns - i + 1;
		}
	}
	return indent + parts.join(newline + indent);
}
Strings.stripTags = function(s) {
	return Strings._reStripTags.replace(s,"");
}
Strings.interpolate = function(v,a,b,equation) {
	return (Strings.interpolatef(a,b,equation))(v);
}
Strings.interpolatef = function(a,b,equation) {
	var extract = function(value,s,f) {
		while(Strings._reInterpolateNumber.match(value)) {
			var left = Strings._reInterpolateNumber.matchedLeft();
			if(!Strings.empty(left)) {
				s.push(left);
				f.push(null);
			}
			s.push(null);
			f.push(Std.parseFloat(Strings._reInterpolateNumber.matched(0)));
			value = Strings._reInterpolateNumber.matchedRight();
		}
		if(!Strings.empty(value)) {
			s.push(value);
			f.push(null);
		}
	};
	var sa = [], fa = [], sb = [], fb = [];
	extract(a,sa,fa);
	extract(b,sb,fb);
	var functions = [], i = 0;
	var min = Ints.min(sa.length,sb.length);
	while(i < min) {
		if(sa[i] != sb[i]) break;
		if(null == sa[i]) {
			if(fa[i] == fb[i]) {
				var s = ["" + fa[i]];
				functions.push((function(s) {
					return function(_) {
						return s[0];
					};
				})(s));
			} else {
				var f = [Floats.interpolatef(fa[i],fb[i],equation)];
				functions.push((function(f) {
					return function(t) {
						return "" + f[0](t);
					};
				})(f));
			}
		} else {
			var s = [sa[i]];
			functions.push((function(s) {
				return function(_) {
					return s[0];
				};
			})(s));
		}
		i++;
	}
	var rest = "";
	while(i < sb.length) {
		if(null != sb[i]) rest += sb[i]; else rest += fb[i];
		i++;
	}
	if("" != rest) functions.push(function(_) {
		return rest;
	});
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		}).join("");
	};
}
Strings.interpolateChars = function(v,a,b,equation) {
	return (Strings.interpolateCharsf(a,b,equation))(v);
}
Strings.interpolateCharsf = function(a,b,equation) {
	var aa = a.split(""), ab = b.split("");
	while(aa.length > ab.length) ab.insert(0," ");
	while(ab.length > aa.length) aa.insert(0," ");
	var ai = [];
	var _g1 = 0, _g = aa.length;
	while(_g1 < _g) {
		var i = _g1++;
		ai[i] = Strings.interpolateCharf(aa[i],ab[i]);
	}
	return function(v) {
		var r = [];
		var _g1 = 0, _g = ai.length;
		while(_g1 < _g) {
			var i = _g1++;
			r[i] = ai[i](v);
		}
		return StringTools.trim(r.join(""));
	};
}
Strings.interpolateChar = function(v,a,b,equation) {
	return (Strings.interpolateCharf(a,b,equation))(v);
}
Strings.interpolateCharf = function(a,b,equation) {
	if(new EReg("^\\d","").match(b) && a == " ") a = "0";
	var r = new EReg("^[^a-zA-Z0-9]","");
	if(r.match(b) && a == " ") a = r.matched(0);
	var ca = a.charCodeAt(0), cb = b.charCodeAt(0), i = Ints.interpolatef(ca,cb,equation);
	return function(v) {
		return String.fromCharCode(i(v));
	};
}
Strings.ellipsis = function(s,maxlen,symbol) {
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	if(s.length > maxlen) return s.substr(0,Ints.max(symbol.length,maxlen - symbol.length)) + symbol; else return s;
}
Strings.ellipsisf = function(maxlen,symbol) {
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	return function(s) {
		if(s.length > maxlen) return s.substr(0,Ints.max(symbol.length,maxlen - symbol.length)) + symbol; else return s;
	};
}
Strings.compare = function(a,b) {
	return a < b?-1:a > b?1:0;
}
Strings.prototype.__class__ = Strings;
dhx.AccessClassed = function(selection) {
	if( selection === $_ ) return;
	dhx.Access.call(this,selection);
}
dhx.AccessClassed.__name__ = ["dhx","AccessClassed"];
dhx.AccessClassed.__super__ = dhx.Access;
for(var k in dhx.Access.prototype ) dhx.AccessClassed.prototype[k] = dhx.Access.prototype[k];
dhx.AccessClassed.escapeERegChars = function(s) {
	return dhx.AccessClassed._escapePattern.customReplace(s,function(e) {
		return "\\" + e.matched(0);
	});
}
dhx.AccessClassed.getRe = function(name) {
	return new EReg("(^|\\s+)" + dhx.AccessClassed.escapeERegChars(name) + "(\\s+|$)","g");
}
dhx.AccessClassed.prototype.toggle = function(name) {
	if(this.exists(name)) this.remove(name); else this.add(name);
	return this.selection;
}
dhx.AccessClassed.prototype.exists = function(name) {
	return this.selection.firstNode(function(node) {
		var list = node.classList;
		if(null != list) return list.contains(name);
		var cls = node.className;
		var re = new EReg("(^|\\s+)" + dhx.AccessClassed.escapeERegChars(name) + "(\\s+|$)","g");
		var bv = cls.baseVal;
		return re.match(null != bv?bv:cls);
	});
}
dhx.AccessClassed.prototype.remove = function(name) {
	this.selection.eachNode((function(f,a1) {
		return function(a2,a3) {
			return f(a1,a2,a3);
		};
	})($closure(this,"_remove"),name));
	return this.selection;
}
dhx.AccessClassed.prototype._remove = function(name,node,i) {
	var list = node.classList;
	if(null != list) {
		list.remove(name);
		return;
	}
	var cls = node.className, clsb = null != cls.baseVal, clsv = clsb?cls.baseVal:cls;
	var re = new EReg("(^|\\s+)" + dhx.AccessClassed.escapeERegChars(name) + "(\\s+|$)","g");
	clsv = dhx.util.Strings.collapse(re.replace(clsv," "));
	if(clsb) cls.baseVal = clsv; else node.className = clsv;
}
dhx.AccessClassed.prototype.add = function(name) {
	this.selection.eachNode((function(f,a1) {
		return function(a2,a3) {
			return f(a1,a2,a3);
		};
	})($closure(this,"_add"),name));
	return this.selection;
}
dhx.AccessClassed.prototype._add = function(name,node,i) {
	var list = node.classList;
	if(null != list) {
		list.add(name);
		return;
	}
	var cls = node.className, clsb = null != cls.baseVal, clsv = clsb?cls.baseVal:cls;
	var re = new EReg("(^|\\s+)" + dhx.AccessClassed.escapeERegChars(name) + "(\\s+|$)","g");
	if(!re.match(clsv)) {
		clsv = dhx.util.Strings.collapse(clsv + " " + name);
		if(clsb) cls.baseVal = clsv; else node.className = clsv;
	}
}
dhx.AccessClassed.prototype.get = function() {
	var node = this.selection.node(), list = node.classList;
	if(null != list) {
		var result = [];
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			result.push(list.item(i));
		}
		return result.join(" ");
	}
	var cls = node.className, clsb = null != cls.baseVal;
	if(clsb) return cls.baseVal; else return cls;
}
dhx.AccessClassed.prototype.__class__ = dhx.AccessClassed;
dhx.AccessDataClassed = function(selection) {
	if( selection === $_ ) return;
	dhx.AccessClassed.call(this,selection);
}
dhx.AccessDataClassed.__name__ = ["dhx","AccessDataClassed"];
dhx.AccessDataClassed.__super__ = dhx.AccessClassed;
for(var k in dhx.AccessClassed.prototype ) dhx.AccessDataClassed.prototype[k] = dhx.AccessClassed.prototype[k];
dhx.AccessDataClassed.prototype.removef = function(v) {
	var f = $closure(this,"_remove");
	this.selection.eachNode(function(node,i) {
		var c = v(Reflect.field(node,"__dhx_data__"),i);
		if(null != c) f(c,node,i);
	});
	return this.selection;
}
dhx.AccessDataClassed.prototype.addf = function(v) {
	var f = $closure(this,"_add");
	this.selection.eachNode(function(node,i) {
		var c = v(Reflect.field(node,"__dhx_data__"),i);
		if(null != c) f(c,node,i);
	});
	return this.selection;
}
dhx.AccessDataClassed.prototype.__class__ = dhx.AccessDataClassed;
if(!thx.error) thx.error = {}
thx.error.Error = function(message,params,param,pos) {
	if( message === $_ ) return;
	thx.util.Message.call(this,message,params,param);
	this.pos = pos;
}
thx.error.Error.__name__ = ["thx","error","Error"];
thx.error.Error.__super__ = thx.util.Message;
for(var k in thx.util.Message.prototype ) thx.error.Error.prototype[k] = thx.util.Message.prototype[k];
thx.error.Error.prototype.pos = null;
thx.error.Error.prototype.inner = null;
thx.error.Error.prototype.setInner = function(inner) {
	this.inner = inner;
	return this;
}
thx.error.Error.prototype.toStringError = function(pattern) {
	var prefix = Strings.format(null == pattern?thx.error.Error.errorPositionPattern:pattern,[this.pos.className,this.pos.methodName,this.pos.lineNumber,this.pos.fileName,this.pos.customParams]);
	return prefix + this.toString();
}
thx.error.Error.prototype.toString = function() {
	try {
		return Strings.format(this.message,this.params);
	} catch( e ) {
		var ps = this.pos.className + "." + this.pos.methodName + "(" + this.pos.lineNumber + ")";
		haxe.Log.trace("wrong parameters passed for pattern '" + this.message + "' at " + ps,{ fileName : "Error.hx", lineNumber : 42, className : "thx.error.Error", methodName : "toString"});
		return "";
	}
}
thx.error.Error.prototype.__class__ = thx.error.Error;
dhx.AccessProperty = function(name,selection) {
	if( name === $_ ) return;
	dhx.Access.call(this,selection);
	this.name = name;
}
dhx.AccessProperty.__name__ = ["dhx","AccessProperty"];
dhx.AccessProperty.__super__ = dhx.Access;
for(var k in dhx.Access.prototype ) dhx.AccessProperty.prototype[k] = dhx.Access.prototype[k];
dhx.AccessProperty.prototype.name = null;
dhx.AccessProperty.prototype.get = function() {
	var n = this.name;
	return this.selection.firstNode(function(node) {
		return Reflect.field(node,n);
	});
}
dhx.AccessProperty.prototype.remove = function() {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		Reflect.deleteField(node,n);
	});
	return this.selection;
}
dhx.AccessProperty.prototype.string = function(v) {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		node[n] = v;
	});
	return this.selection;
}
dhx.AccessProperty.prototype["float"] = function(v) {
	var s = "" + v;
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		node[n] = s;
	});
	return this.selection;
}
dhx.AccessProperty.prototype.__class__ = dhx.AccessProperty;
dhx.AccessDataProperty = function(name,selection) {
	if( name === $_ ) return;
	dhx.AccessProperty.call(this,name,selection);
}
dhx.AccessDataProperty.__name__ = ["dhx","AccessDataProperty"];
dhx.AccessDataProperty.__super__ = dhx.AccessProperty;
for(var k in dhx.AccessProperty.prototype ) dhx.AccessDataProperty.prototype[k] = dhx.AccessProperty.prototype[k];
dhx.AccessDataProperty.prototype.stringf = function(v) {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__dhx_data__"),i);
		if(null == s) Reflect.deleteField(node,n); else node[n] = s;
	});
	return this.selection;
}
dhx.AccessDataProperty.prototype.floatf = function(v) {
	var n = this.name;
	this.selection.eachNode(function(node,i) {
		var s = v(Reflect.field(node,"__dhx_data__"),i);
		if(null == s) Reflect.deleteField(node,n); else node[n] = "" + s;
	});
	return this.selection;
}
dhx.AccessDataProperty.prototype.data = function() {
	return this.stringf(function(d,_) {
		return "" + d;
	});
}
dhx.AccessDataProperty.prototype.__class__ = dhx.AccessDataProperty;
Lambda = function() { }
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.list = function(it) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		l.add(i);
	}
	return l;
}
Lambda.map = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(x));
	}
	return l;
}
Lambda.mapi = function(it,f) {
	var l = new List();
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(f(i++,x));
	}
	return l;
}
Lambda.has = function(it,elt,cmp) {
	if(cmp == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var x = $it0.next();
			if(x == elt) return true;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(cmp(x,elt)) return true;
		}
	}
	return false;
}
Lambda.exists = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) return true;
	}
	return false;
}
Lambda.foreach = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(!f(x)) return false;
	}
	return true;
}
Lambda.iter = function(it,f) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		f(x);
	}
}
Lambda.filter = function(it,f) {
	var l = new List();
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		if(f(x)) l.add(x);
	}
	return l;
}
Lambda.fold = function(it,f,first) {
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		first = f(x,first);
	}
	return first;
}
Lambda.count = function(it,pred) {
	var n = 0;
	if(pred == null) {
		var $it0 = it.iterator();
		while( $it0.hasNext() ) {
			var _ = $it0.next();
			n++;
		}
	} else {
		var $it1 = it.iterator();
		while( $it1.hasNext() ) {
			var x = $it1.next();
			if(pred(x)) n++;
		}
	}
	return n;
}
Lambda.empty = function(it) {
	return !it.iterator().hasNext();
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = it.iterator();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
}
Lambda.concat = function(a,b) {
	var l = new List();
	var $it0 = a.iterator();
	while( $it0.hasNext() ) {
		var x = $it0.next();
		l.add(x);
	}
	var $it1 = b.iterator();
	while( $it1.hasNext() ) {
		var x = $it1.next();
		l.add(x);
	}
	return l;
}
Lambda.prototype.__class__ = Lambda;
thx.culture.FormatDate = function() { }
thx.culture.FormatDate.__name__ = ["thx","culture","FormatDate"];
thx.culture.FormatDate.format = function(pattern,date,culture,leadingspace) {
	if(leadingspace == null) leadingspace = true;
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	var pos = 0;
	var len = pattern.length;
	var buf = new StringBuf();
	var info = culture.date;
	while(pos < len) {
		var c = pattern.charAt(pos);
		if(c != "%") {
			buf.b[buf.b.length] = c == null?"null":c;
			pos++;
			continue;
		}
		pos++;
		c = pattern.charAt(pos);
		switch(c) {
		case "a":
			buf.add(info.abbrDays[date.getDay()]);
			break;
		case "A":
			buf.add(info.days[date.getDay()]);
			break;
		case "b":case "h":
			buf.add(info.abbrMonths[date.getMonth()]);
			break;
		case "B":
			buf.add(info.months[date.getMonth()]);
			break;
		case "c":
			buf.add(thx.culture.FormatDate.dateTime(date,culture));
			break;
		case "C":
			buf.add(thx.culture.FormatNumber.digits("" + Math.floor(date.getFullYear() / 100),culture));
			break;
		case "d":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getDate(),"0",2),culture));
			break;
		case "D":
			buf.add(thx.culture.FormatDate.format("%m/%d/%y",date,culture));
			break;
		case "e":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getDate()," ",2):"" + date.getDate(),culture));
			break;
		case "f":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + (date.getMonth() + 1)," ",2):"" + (date.getMonth() + 1),culture));
			break;
		case "G":
			throw "Not Implemented Yet";
			break;
		case "g":
			throw "Not Implemented Yet";
			break;
		case "H":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getHours(),"0",2),culture));
			break;
		case "i":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getMinutes()," ",2):"" + date.getMinutes(),culture));
			break;
		case "I":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + thx.culture.FormatDate.getMHours(date),"0",2),culture));
			break;
		case "j":
			throw "Not Implemented Yet";
			break;
		case "k":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getHours()," ",2):"" + date.getHours(),culture));
			break;
		case "l":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + thx.culture.FormatDate.getMHours(date)," ",2):"" + thx.culture.FormatDate.getMHours(date),culture));
			break;
		case "m":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + (date.getMonth() + 1),"0",2),culture));
			break;
		case "M":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getMinutes(),"0",2),culture));
			break;
		case "n":
			buf.b[buf.b.length] = "\n" == null?"null":"\n";
			break;
		case "p":
			buf.add(date.getHours() > 11?info.pm:info.am);
			break;
		case "P":
			buf.add((date.getHours() > 11?info.pm:info.am).toLowerCase());
			break;
		case "q":
			buf.add(thx.culture.FormatNumber.digits(leadingspace?StringTools.lpad("" + date.getSeconds()," ",2):"" + date.getSeconds(),culture));
			break;
		case "r":
			buf.add(thx.culture.FormatDate.format("%I:%M:%S %p",date,culture));
			break;
		case "R":
			buf.add(thx.culture.FormatDate.format("%H:%M",date,culture));
			break;
		case "s":
			buf.add("" + Std["int"](date.getTime() / 1000));
			break;
		case "S":
			buf.add(thx.culture.FormatNumber.digits(StringTools.lpad("" + date.getSeconds(),"0",2),culture));
			break;
		case "t":
			buf.b[buf.b.length] = "\t" == null?"null":"\t";
			break;
		case "T":
			buf.add(thx.culture.FormatDate.format("%H:%M:%S",date,culture));
			break;
		case "u":
			var d = date.getDay();
			buf.add(thx.culture.FormatNumber.digits(d == 0?"7":"" + d,culture));
			break;
		case "U":
			throw "Not Implemented Yet";
			break;
		case "V":
			throw "Not Implemented Yet";
			break;
		case "w":
			buf.add(thx.culture.FormatNumber.digits("" + date.getDay(),culture));
			break;
		case "W":
			throw "Not Implemented Yet";
			break;
		case "x":
			buf.add(thx.culture.FormatDate.date(date,culture));
			break;
		case "X":
			buf.add(thx.culture.FormatDate.time(date,culture));
			break;
		case "y":
			buf.add(thx.culture.FormatNumber.digits(("" + date.getFullYear()).substr(-2),culture));
			break;
		case "Y":
			buf.add(thx.culture.FormatNumber.digits("" + date.getFullYear(),culture));
			break;
		case "z":
			buf.b[buf.b.length] = "+0000" == null?"null":"+0000";
			break;
		case "Z":
			buf.b[buf.b.length] = "GMT" == null?"null":"GMT";
			break;
		case "%":
			buf.b[buf.b.length] = "%" == null?"null":"%";
			break;
		default:
			buf.add("%" + c);
		}
		pos++;
	}
	return buf.b.join("");
}
thx.culture.FormatDate.getMHours = function(date) {
	var v = date.getHours();
	return v > 12?v - 12:v;
}
thx.culture.FormatDate.yearMonth = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternYearMonth,date,culture,false);
}
thx.culture.FormatDate.monthDay = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternMonthDay,date,culture,false);
}
thx.culture.FormatDate.date = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDate,date,culture,false);
}
thx.culture.FormatDate.dateShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDateShort,date,culture,false);
}
thx.culture.FormatDate.dateRfc = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDateRfc,date,culture,false);
}
thx.culture.FormatDate.dateTime = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternDateTime,date,culture,false);
}
thx.culture.FormatDate.universal = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternUniversal,date,culture,false);
}
thx.culture.FormatDate.sortable = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternSortable,date,culture,false);
}
thx.culture.FormatDate.time = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternTime,date,culture,false);
}
thx.culture.FormatDate.timeShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatDate.format(culture.date.patternTimeShort,date,culture,false);
}
thx.culture.FormatDate.hourShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	if(null == culture.date.am) return thx.culture.FormatDate.format("%H",date,culture,false); else return thx.culture.FormatDate.format("%l %p",date,culture,false);
}
thx.culture.FormatDate.year = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.digits("" + date.getFullYear(),culture);
}
thx.culture.FormatDate.month = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.digits("" + (date.getMonth() + 1),culture);
}
thx.culture.FormatDate.monthName = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.abbrMonths[date.getMonth()];
}
thx.culture.FormatDate.monthNameShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.months[date.getMonth()];
}
thx.culture.FormatDate.weekDay = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.digits("" + (date.getDay() + culture.date.firstWeekDay),culture);
}
thx.culture.FormatDate.weekDayName = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.abbrDays[date.getDay()];
}
thx.culture.FormatDate.weekDayNameShort = function(date,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return culture.date.days[date.getDay()];
}
thx.culture.FormatDate.prototype.__class__ = thx.culture.FormatDate;
dhx.Timer = function() { }
dhx.Timer.__name__ = ["dhx","Timer"];
dhx.Timer.timer = function(f,delay) {
	if(delay == null) delay = 0.0;
	var now = Date.now().getTime(), found = false, t0, t1 = dhx.Timer.queue;
	if(!Math.isFinite(delay)) return;
	while(null != t1) {
		if(Reflect.compareMethods(f,t1.f)) {
			t1.then = now;
			t1.delay = delay;
			found = true;
			break;
		}
		t0 = t1;
		t1 = t1.next;
	}
	if(!found) dhx.Timer.queue = { f : f, then : now, delay : delay, next : dhx.Timer.queue, flush : false};
	if(0 == dhx.Timer.interval) {
		dhx.Timer.timeout = clearTimeout(dhx.Timer.timeout);
		dhx.Timer.interval = 1;
		window.requestAnimationFrame(dhx.Timer._step);
	}
}
dhx.Timer.step = function() {
	var elapsed, now = Date.now().getTime(), t1 = dhx.Timer.queue;
	while(null != t1) {
		elapsed = now - t1.then;
		if(elapsed > t1.delay) t1.flush = t1.f(elapsed);
		t1 = t1.next;
	}
	var delay = dhx.Timer._flush() - now;
	if(delay > 24) {
		if(Math.isFinite(delay)) {
			clearTimeout(dhx.Timer.timeout);
			dhx.Timer.timeout = setTimeout(dhx.Timer._step,delay);
		}
		dhx.Timer.interval = 0;
	} else {
		dhx.Timer.interval = 1;
		window.requestAnimationFrame(dhx.Timer._step);
	}
}
dhx.Timer.flush = function() {
	var elapsed, now = Date.now().getTime(), t1 = dhx.Timer.queue;
	while(null != t1) {
		elapsed = now - t1.then;
		if(t1.delay == 0) t1.flush = t1.f(elapsed);
		t1 = t1.next;
	}
	dhx.Timer._flush();
}
dhx.Timer._flush = function() {
	var t0 = null, t1 = dhx.Timer.queue, then = Math.POSITIVE_INFINITY;
	while(null != t1) if(t1.flush) t1 = null != t0?t0.next = t1.next:dhx.Timer.queue = t1.next; else {
		then = Math.min(then,t1.then + t1.delay);
		t1 = (t0 = t1).next;
	}
	return then;
}
dhx.Timer.prototype.__class__ = dhx.Timer;
Bools = function() { }
Bools.__name__ = ["Bools"];
Bools.format = function(v,param,params,culture) {
	return (Bools.formatf(param,params,culture))(v);
}
Bools.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"B");
	var format = params.shift();
	switch(format) {
	case "B":
		return function(v) {
			return v?"true":"false";
		};
	case "N":
		return function(v) {
			return v?"1":"0";
		};
	case "R":
		if(params.length != 2) throw "bool format R requires 2 parameters";
		return function(v) {
			return v?params[0]:params[1];
		};
	default:
		throw "Unsupported bool format: " + format;
	}
}
Bools.interpolate = function(v,a,b,equation) {
	return (Bools.interpolatef(a,b,equation))(v);
}
Bools.interpolatef = function(a,b,equation) {
	if(a == b) return function(_) {
		return a;
	}; else {
		var f = Floats.interpolatef(0,1,equation);
		return function(v) {
			return f(v) < 0.5?a:b;
		};
	}
}
Bools.canParse = function(s) {
	s = s.toLowerCase();
	return s == "true" || s == "false";
}
Bools.parse = function(s) {
	return s.toLowerCase() == "true";
}
Bools.compare = function(a,b) {
	return a == b?0:a?-1:1;
}
Bools.prototype.__class__ = Bools;
dhx.AccessTweenAttribute = function(name,transition,tweens) {
	if( name === $_ ) return;
	dhx.AccessTween.call(this,transition,tweens);
	this.name = name;
	this.qname = dhx.Namespace.qualify(name);
}
dhx.AccessTweenAttribute.__name__ = ["dhx","AccessTweenAttribute"];
dhx.AccessTweenAttribute.__super__ = dhx.AccessTween;
for(var k in dhx.AccessTween.prototype ) dhx.AccessTweenAttribute.prototype[k] = dhx.AccessTween.prototype[k];
dhx.AccessTweenAttribute.prototype.name = null;
dhx.AccessTweenAttribute.prototype.qname = null;
dhx.AccessTweenAttribute.prototype.stringNodef = function(f) {
	return this.stringTweenNodef(this.transitionStringTweenf(f));
}
dhx.AccessTweenAttribute.prototype.string = function(value) {
	return this.stringTweenNodef(this.transitionStringTween(value));
}
dhx.AccessTweenAttribute.prototype.stringTweenNodef = function(tween) {
	var name = this.name;
	var attrTween = function(d,i) {
		var f = tween(d,i,d.getAttribute(name));
		return function(t) {
			d.setAttribute(name,f(t));
		};
	};
	var attrTweenNS = function(d,i) {
		var f = tween(d,i,d.getAttributeNS(name.space,name.local));
		return function(t) {
			d.setAttributeNS(name.space,name.local,f(t));
		};
	};
	this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
	return this.transition;
}
dhx.AccessTweenAttribute.prototype.floatNodef = function(f) {
	return this.floatTweenNodef(this.transitionFloatTweenf(f));
}
dhx.AccessTweenAttribute.prototype["float"] = function(value) {
	return this.floatTweenNodef(this.transitionFloatTween(value));
}
dhx.AccessTweenAttribute.prototype.floatTweenNodef = function(tween) {
	var name = this.name;
	var attrTween = function(d,i) {
		var f = tween(d,i,Std.parseFloat(d.getAttribute(name)));
		return function(t) {
			d.setAttribute(name,"" + f(t));
		};
	};
	var attrTweenNS = function(d,i) {
		var f = tween(d,i,Std.parseFloat(d.getAttributeNS(name.space,name.local)));
		return function(t) {
			d.setAttributeNS(name.space,name.local,"" + f(t));
		};
	};
	this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
	return this.transition;
}
dhx.AccessTweenAttribute.prototype.__class__ = dhx.AccessTweenAttribute;
dhx.AccessDataTweenAttribute = function(name,transition,tweens) {
	if( name === $_ ) return;
	dhx.AccessTweenAttribute.call(this,name,transition,tweens);
}
dhx.AccessDataTweenAttribute.__name__ = ["dhx","AccessDataTweenAttribute"];
dhx.AccessDataTweenAttribute.__super__ = dhx.AccessTweenAttribute;
for(var k in dhx.AccessTweenAttribute.prototype ) dhx.AccessDataTweenAttribute.prototype[k] = dhx.AccessTweenAttribute.prototype[k];
dhx.AccessDataTweenAttribute.prototype.stringf = function(f) {
	return this.stringTweenNodef(this.transitionStringTweenf(function(n,i) {
		return f(Reflect.field(n,"__dhx_data__"),i);
	}));
}
dhx.AccessDataTweenAttribute.prototype.floatf = function(f) {
	return this.floatTweenNodef(this.transitionFloatTweenf(function(n,i) {
		return f(Reflect.field(n,"__dhx_data__"),i);
	}));
}
dhx.AccessDataTweenAttribute.prototype.stringTweenf = function(tween) {
	var name = this.name;
	var attrTween = function(n,i) {
		var f = tween(Reflect.field(n,"__dhx_data__"),i,n.getAttribute(name));
		return function(t) {
			n.setAttribute(name,f(t));
		};
	};
	var attrTweenNS = function(n,i) {
		var f = tween(Reflect.field(n,"__dhx_data__"),i,n.getAttributeNS(name.space,name.local));
		return function(t) {
			n.setAttributeNS(name.space,name.local,f(t));
		};
	};
	this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
	return this.transition;
}
dhx.AccessDataTweenAttribute.prototype.floatTweenf = function(tween) {
	var name = this.name;
	var attrTween = function(n,i) {
		var f = tween(Reflect.field(n,"__dhx_data__"),i,Std.parseFloat(n.getAttribute(name)));
		return function(t) {
			n.setAttribute(name,"" + f(t));
		};
	};
	var attrTweenNS = function(n,i) {
		var f = tween(Reflect.field(n,"__dhx_data__"),i,Std.parseFloat(n.getAttributeNS(name.space,name.local)));
		return function(t) {
			n.setAttributeNS(name.space,name.local,"" + f(t));
		};
	};
	this.tweens.set("attr." + name,null == this.qname?attrTween:attrTweenNS);
	return this.transition;
}
dhx.AccessDataTweenAttribute.prototype.__class__ = dhx.AccessDataTweenAttribute;
thx.culture.FormatNumber = function() { }
thx.culture.FormatNumber.__name__ = ["thx","culture","FormatNumber"];
thx.culture.FormatNumber.decimal = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.number.patternNegative,culture.number.patternPositive,culture,null,null);
}
thx.culture.FormatNumber.percent = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPercent);
}
thx.culture.FormatNumber.permille = function(v,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.percent,culture.percent.patternNegative,culture.percent.patternPositive,culture,"%",culture.symbolPermille);
}
thx.culture.FormatNumber.currency = function(v,symbol,decimals,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.crunch(v,decimals,culture.currency,culture.currency.patternNegative,culture.currency.patternPositive,culture,"$",symbol == null?culture.currencySymbol:symbol);
}
thx.culture.FormatNumber["int"] = function(v,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.decimal(v,0,culture);
}
thx.culture.FormatNumber.digits = function(v,culture) {
	if(null == culture) culture = thx.culture.Culture.getDefaultCulture();
	return thx.culture.FormatNumber.processDigits(v,culture.digits);
}
thx.culture.FormatNumber.crunch = function(v,decimals,info,negative,positive,culture,symbol,replace) {
	if(Math.isNaN(v)) return culture.symbolNaN; else if(!Math.isFinite(v)) return v == Math.NEGATIVE_INFINITY?culture.symbolNegInf:culture.symbolPosInf;
	var fv = thx.culture.FormatNumber.value(v,info,decimals == null?info.decimals:decimals < 0?0:decimals,culture.digits);
	if(symbol != null) return StringTools.replace(StringTools.replace(v < 0?negative:positive,"n",fv),symbol,replace); else return StringTools.replace(v < 0?negative:positive,"n",fv);
}
thx.culture.FormatNumber.processDigits = function(s,digits) {
	if(digits == null) return s;
	var o = [];
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		o.push(digits[Std.parseInt(s.substr(i,1))]);
	}
	return o.join("");
}
thx.culture.FormatNumber.value = function(v,info,decimals,digits) {
	var fv = "" + Math.abs(v);
	var pos = fv.indexOf("E");
	if(pos > 0) {
		var e = Std.parseInt(fv.substr(pos + 1));
		var ispos = true;
		if(e < 0) {
			ispos = false;
			e = -e;
		}
		var s = StringTools.replace(fv.substr(0,pos),".","");
		if(ispos) fv = StringTools.rpad(s,"0",e + 1); else fv = "0" + StringTools.rpad(".","0",e) + s;
	}
	var parts = fv.split(".");
	var temp = parts[0];
	var intparts = [];
	var group = 0;
	while(true) {
		if(temp.length == 0) break;
		var len = info.groups[group];
		if(temp.length <= len) {
			intparts.unshift(thx.culture.FormatNumber.processDigits(temp,digits));
			break;
		}
		intparts.unshift(thx.culture.FormatNumber.processDigits(temp.substr(-len),digits));
		temp = temp.substr(0,-len);
		if(group < info.groups.length - 1) group++;
	}
	var intpart = intparts.join(info.groupsSeparator);
	if(decimals > 0) {
		var decpart = parts.length == 1?StringTools.lpad("","0",decimals):parts[1].length > decimals?parts[1].substr(0,decimals):StringTools.rpad(parts[1],"0",decimals);
		return intpart + info.decimalsSeparator + thx.culture.FormatNumber.processDigits(decpart,digits);
	} else return intpart;
}
thx.culture.FormatNumber.prototype.__class__ = thx.culture.FormatNumber;
dhx.util.Floats = function() { }
dhx.util.Floats.__name__ = ["dhx","util","Floats"];
dhx.util.Floats.interpolatef = function(a,b,equation) {
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == equation) equation = function(f) {
		return f;
	};
	var d = b - a;
	return function(f) {
		return a + equation(f) * d;
	};
}
dhx.util.Floats.prototype.__class__ = dhx.util.Floats;
Arrays = function() { }
Arrays.__name__ = ["Arrays"];
Arrays.addIf = function(arr,condition,value) {
	if(null != condition) {
		if(condition) arr.push(value);
	} else if(null != value) arr.push(value);
	return arr;
}
Arrays.add = function(arr,value) {
	arr.push(value);
	return arr;
}
Arrays["delete"] = function(arr,value) {
	arr.remove(value);
	return arr;
}
Arrays.removef = function(arr,f) {
	var index = -1;
	var _g1 = 0, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(f(arr[i])) {
			index = i;
			break;
		}
	}
	if(index < 0) return false;
	arr.splice(index,1);
	return true;
}
Arrays.deletef = function(arr,f) {
	Arrays.removef(arr,f);
	return arr;
}
Arrays.filter = function(arr,f) {
	var result = [];
	var _g = 0;
	while(_g < arr.length) {
		var i = arr[_g];
		++_g;
		if(f(i)) result.push(i);
	}
	return result;
}
Arrays.min = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0], p = 0;
		var comp = Dynamics.comparef(a);
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(comp(a,arr[i]) > 0) a = arr[p = i];
		}
		return arr[p];
	} else {
		var a = f(arr[0]), p = 0, b;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a > (b = f(arr[i]))) {
				a = b;
				p = i;
			}
		}
		return arr[p];
	}
}
Arrays.floatMin = function(arr,f) {
	if(arr.length == 0) return Math.NaN;
	var a = f(arr[0]), b;
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a > (b = f(arr[i]))) a = b;
	}
	return a;
}
Arrays.bounds = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0], p = 0;
		var b = arr[0], q = 0;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			var comp = Dynamics.comparef(a);
			if(comp(a,arr[i]) > 0) a = arr[p = i];
			if(comp(b,arr[i]) < 0) b = arr[q = i];
		}
		return [arr[p],arr[q]];
	} else {
		var a = f(arr[0]), p = 0, b;
		var c = f(arr[0]), q = 0, d;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a > (b = f(arr[i]))) {
				a = b;
				p = i;
			}
		}
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(c < (d = f(arr[i]))) {
				c = d;
				q = i;
			}
		}
		return [arr[p],arr[q]];
	}
}
Arrays.boundsFloat = function(arr,f) {
	if(arr.length == 0) return null;
	var a = f(arr[0]), b;
	var c = f(arr[0]), d;
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a > (b = f(arr[i]))) a = b;
		if(c < (d = f(arr[i]))) c = d;
	}
	return [a,c];
}
Arrays.max = function(arr,f) {
	if(arr.length == 0) return null;
	if(null == f) {
		var a = arr[0], p = 0;
		var comp = Dynamics.comparef(a);
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(comp(a,arr[i]) < 0) a = arr[p = i];
		}
		return arr[p];
	} else {
		var a = f(arr[0]), p = 0, b;
		var _g1 = 1, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(a < (b = f(arr[i]))) {
				a = b;
				p = i;
			}
		}
		return arr[p];
	}
}
Arrays.floatMax = function(arr,f) {
	if(arr.length == 0) return Math.NaN;
	var a = f(arr[0]), b;
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(a < (b = f(arr[i]))) a = b;
	}
	return a;
}
Arrays.flatten = function(arr) {
	var r = [];
	var _g = 0;
	while(_g < arr.length) {
		var v = arr[_g];
		++_g;
		r = r.concat(v);
	}
	return r;
}
Arrays.map = function(arr,f) {
	return arr.map(f);
}
Arrays.reduce = function(arr,f,initialValue) {
	return arr.reduce(f,initialValue);
}
Arrays.order = function(arr,f) {
	arr.sort(null == f?Dynamics.compare:f);
	return arr;
}
Arrays.orderMultiple = function(arr,f,rest) {
	var swap = true, t;
	rest.remove(arr);
	while(swap) {
		swap = false;
		var _g1 = 0, _g = arr.length - 1;
		while(_g1 < _g) {
			var i = _g1++;
			if(f(arr[i],arr[i + 1]) > 0) {
				swap = true;
				t = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = t;
				var _g2 = 0;
				while(_g2 < rest.length) {
					var a = rest[_g2];
					++_g2;
					t = a[i];
					a[i] = a[i + 1];
					a[i + 1] = t;
				}
			}
		}
	}
}
Arrays.split = function(arr,f) {
	if(null == f) f = function(v,_) {
		return v == null;
	};
	var arrays = [], i = -1, values = [], value;
	var _g1 = 0, _g = arr.length;
	while(_g1 < _g) {
		var i1 = _g1++;
		if(f(value = arr[i1],i1)) values = []; else {
			if(values.length == 0) arrays.push(values);
			values.push(value);
		}
	}
	return arrays;
}
Arrays.exists = function(arr,value,f) {
	if(null != f) {
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			if(f(v)) return true;
		}
	} else {
		var _g = 0;
		while(_g < arr.length) {
			var v = arr[_g];
			++_g;
			if(v == value) return true;
		}
	}
	return false;
}
Arrays.format = function(v,param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"J");
	var format = params.shift();
	switch(format) {
	case "J":
		if(v.length == 0) {
			var empty = null == params[1]?"[]":params[1];
			return empty;
		}
		var sep = null == params[2]?", ":params[2];
		var max = params[3] == null?null:"" == params[3]?null:Std.parseInt(params[3]);
		if(null != max && max < v.length) {
			var elipsis = null == params[4]?" ...":params[4];
			return v.copy().splice(0,max).map(function(d,i) {
				return Dynamics.format(d,params[0],null,null,culture);
			}).join(sep) + elipsis;
		} else return v.map(function(d,i) {
			return Dynamics.format(d,params[0],null,null,culture);
		}).join(sep);
		break;
	case "C":
		return Ints.format(v.length,"I",[],culture);
	default:
		throw "Unsupported array format: " + format;
	}
}
Arrays.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"J");
	var format = params.shift();
	switch(format) {
	case "J":
		return function(v) {
			if(v.length == 0) {
				var empty = null == params[1]?"[]":params[1];
				return empty;
			}
			var sep = null == params[2]?", ":params[2];
			var max = params[3] == null?null:"" == params[3]?null:Std.parseInt(params[3]);
			if(null != max && max < v.length) {
				var elipsis = null == params[4]?" ...":params[4];
				return v.copy().splice(0,max).map(function(d,i) {
					return Dynamics.format(d,params[0],null,null,culture);
				}).join(sep) + elipsis;
			} else return v.map(function(d,i) {
				return Dynamics.format(d,params[0],null,null,culture);
			}).join(sep);
		};
	case "C":
		var f = Ints.formatf("I",[],culture);
		return function(v) {
			return f(v.length);
		};
	default:
		throw "Unsupported array format: " + format;
	}
}
Arrays.interpolate = function(v,a,b,equation) {
	return (Arrays.interpolatef(a,b,equation))(v);
}
Arrays.interpolatef = function(a,b,equation) {
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Floats.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			return function(_) {
				return v[0];
			};
		})(v));
		i++;
	}
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		});
	};
}
Arrays.interpolateStrings = function(v,a,b,equation) {
	return (Arrays.interpolateStringsf(a,b,equation))(v);
}
Arrays.interpolateStringsf = function(a,b,equation) {
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Strings.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			return function(_) {
				return v[0];
			};
		})(v));
		i++;
	}
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		});
	};
}
Arrays.interpolateInts = function(v,a,b,equation) {
	return (Arrays.interpolateIntsf(a,b,equation))(v);
}
Arrays.interpolateIntsf = function(a,b,equation) {
	var functions = [], i = 0, min = Ints.min(a.length,b.length);
	while(i < min) {
		if(a[i] == b[i]) {
			var v = [b[i]];
			functions.push((function(v) {
				return function(_) {
					return v[0];
				};
			})(v));
		} else functions.push(Ints.interpolatef(a[i],b[i],equation));
		i++;
	}
	while(i < b.length) {
		var v = [b[i]];
		functions.push((function(v) {
			return function(_) {
				return v[0];
			};
		})(v));
		i++;
	}
	return function(t) {
		return functions.map(function(f,_) {
			return f(t);
		});
	};
}
Arrays.indexOf = function(arr,el) {
	return arr.indexOf(el);
}
Arrays.every = function(arr,f) {
	return arr.every(f);
}
Arrays.each = function(arr,f) {
	arr.forEach(f);
}
Arrays.any = function(arr,f) {
	return Iterators.any(arr.iterator(),f);
}
Arrays.all = function(arr,f) {
	return Iterators.all(arr.iterator(),f);
}
Arrays.random = function(arr) {
	return arr[Std.random(arr.length)];
}
Arrays.string = function(arr) {
	return "[" + arr.map(function(v,_) {
		return Dynamics.string(v);
	}).join(", ") + "]";
}
Arrays.last = function(arr) {
	return arr[arr.length - 1];
}
Arrays.lastf = function(arr,f) {
	var i = arr.length;
	while(--i >= 0) if(f(arr[i])) return arr[i];
	return null;
}
Arrays.first = function(arr) {
	return arr[0];
}
Arrays.firstf = function(arr,f) {
	var _g = 0;
	while(_g < arr.length) {
		var v = arr[_g];
		++_g;
		if(f(v)) return v;
	}
	return null;
}
Arrays.bisect = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	return Arrays.bisectRight(a,x,lo,hi);
}
Arrays.bisectRight = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	if(null == hi) hi = a.length;
	while(lo < hi) {
		var mid = lo + hi >> 1;
		if(x < a[mid]) hi = mid; else lo = mid + 1;
	}
	return lo;
}
Arrays.bisectLeft = function(a,x,lo,hi) {
	if(lo == null) lo = 0;
	if(null == hi) hi = a.length;
	while(lo < hi) {
		var mid = lo + hi >> 1;
		if(a[mid] < x) lo = mid + 1; else hi = mid;
	}
	return lo;
}
Arrays.nearest = function(a,x,f) {
	var delta = [];
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		delta.push({ i : i, v : Math.abs(f(a[i]) - x)});
	}
	delta.sort(function(a1,b) {
		return Floats.compare(a1.v,b.v);
	});
	return a[delta[0].i];
}
Arrays.compare = function(a,b) {
	var v;
	if((v = a.length - b.length) != 0) return v;
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if((v = Dynamics.compare(a[i],b[i])) != 0) return v;
	}
	return 0;
}
Arrays.product = function(a) {
	if(a.length == 0) return [];
	var arr = a.copy(), result = [], temp;
	var _g = 0, _g1 = arr[0];
	while(_g < _g1.length) {
		var value = _g1[_g];
		++_g;
		result.push([value]);
	}
	var _g1 = 1, _g = arr.length;
	while(_g1 < _g) {
		var i = _g1++;
		temp = [];
		var _g2 = 0;
		while(_g2 < result.length) {
			var acc = result[_g2];
			++_g2;
			var _g3 = 0, _g4 = arr[i];
			while(_g3 < _g4.length) {
				var value = _g4[_g3];
				++_g3;
				temp.push(acc.copy().concat([value]));
			}
		}
		result = temp;
	}
	return result;
}
Arrays.rotate = function(a) {
	if(a.length == 0) return [];
	var result = [];
	var _g1 = 0, _g = a[0].length;
	while(_g1 < _g) {
		var i = _g1++;
		result[i] = [];
	}
	var _g1 = 0, _g = a.length;
	while(_g1 < _g) {
		var j = _g1++;
		var _g3 = 0, _g2 = a[0].length;
		while(_g3 < _g2) {
			var i = _g3++;
			result[i][j] = a[j][i];
		}
	}
	return result;
}
Arrays.shuffle = function(a) {
	var t = Ints.range(a.length), arr = [];
	while(t.length > 0) {
		var pos = Std.random(t.length), index = t[pos];
		t.splice(pos,1);
		arr.push(a[index]);
	}
	return arr;
}
Arrays.scanf = function(arr,weightf,incremental) {
	if(incremental == null) incremental = true;
	var tot = 0.0, weights = [];
	if(incremental) {
		var _g1 = 0, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			weights[i] = tot += weightf(arr[i],i);
		}
	} else {
		var _g1 = 0, _g = arr.length;
		while(_g1 < _g) {
			var i = _g1++;
			weights[i] = weightf(arr[i],i);
		}
		tot = weights[weights.length - 1];
	}
	var scan = (function($this) {
		var $r;
		var scan = null;
		scan = function(v,start,end) {
			if(start == end) return arr[start];
			var mid = Math.floor((end - start) / 2) + start, value = weights[mid];
			if(v < value) return scan(v,start,mid); else return scan(v,mid + 1,end);
		};
		$r = scan;
		return $r;
	}(this));
	return function(v) {
		if(v < 0 || v > tot) return null;
		return scan(v,0,weights.length - 1);
	};
}
Arrays.prototype.__class__ = Arrays;
dhx.BaseTransition = function(selection) {
	if( selection === $_ ) return;
	this.selection = selection;
	var tid = this._transitionId = dhx.BaseTransition._inheritid > 0?dhx.BaseTransition._inheritid:++dhx.BaseTransition._id;
	this._tweens = new Hash();
	this._interpolators = [];
	this._remove = false;
	this._stage = [];
	this._delay = [];
	this._duration = [];
	this._ease = dhx.BaseTransition.DEFAULT_EASE;
	this._step = $closure(this,"step");
	selection.eachNode(function(n,_) {
		if(Reflect.hasField(n,"__dhx_transition__")) Reflect.field(n,"__dhx_transition__").owner = tid; else n["__dhx_transition__"] = { owner : tid};
	});
	this.delay(null,0);
	this.duration(null,250);
}
dhx.BaseTransition.__name__ = ["dhx","BaseTransition"];
dhx.BaseTransition.CUBIC_EQUATION = function(t) {
	return Math.pow(t,3);
}
dhx.BaseTransition.DEFAULT_EASE = function(t) {
	return .5 * (t < .5?dhx.BaseTransition.CUBIC_EQUATION(2 * t):2 - dhx.BaseTransition.CUBIC_EQUATION(2 - 2 * t));
}
dhx.BaseTransition.prototype._transitionId = null;
dhx.BaseTransition.prototype._tweens = null;
dhx.BaseTransition.prototype._interpolators = null;
dhx.BaseTransition.prototype._remove = null;
dhx.BaseTransition.prototype._stage = null;
dhx.BaseTransition.prototype._delay = null;
dhx.BaseTransition.prototype._duration = null;
dhx.BaseTransition.prototype._durationMax = null;
dhx.BaseTransition.prototype._ease = null;
dhx.BaseTransition.prototype._step = null;
dhx.BaseTransition.prototype._start = null;
dhx.BaseTransition.prototype._end = null;
dhx.BaseTransition.prototype.selection = null;
dhx.BaseTransition.prototype.step = function(elapsed) {
	var clear = true, k = -1, me = this;
	this.selection.eachNode(function(n,i) {
		if(2 == me._stage[++k]) return;
		var t = (elapsed - me._delay[k]) / me._duration[k], tx = Reflect.field(n,"__dhx_transition__"), te, tk, ik = me._interpolators[k];
		if(t < 1) {
			clear = false;
			if(t < 0) return;
		} else t = 1;
		if(null != me._stage[k]) {
			if(null == tx || tx.active != me._transitionId) {
				me._stage[k] = 2;
				return;
			}
		} else if(null == tx || tx.active > me._transitionId) {
			me._stage[k] = 2;
			return;
		} else {
			me._stage[k] = 1;
			if(null != me._start) me._start(n,i);
			ik = me._interpolators[k] = new Hash();
			tx.active = me._transitionId;
			var $it0 = me._tweens.keys();
			while( $it0.hasNext() ) {
				var tk1 = $it0.next();
				var f = me._tweens.get(tk1);
				ik.set(tk1,f(n,i));
			}
		}
		te = me._ease(t);
		var $it1 = me._tweens.keys();
		while( $it1.hasNext() ) {
			var tk1 = $it1.next();
			(ik.get(tk1))(te);
		}
		if(1 == t) {
			me._stage[k] = 2;
			if(tx.active == me._transitionId) {
				var owner = tx.owner;
				if(owner == me._transitionId) {
					Reflect.deleteField(n,"__dhx_transition__");
					if(me._remove) n.parentNode.removeChild(n);
				}
				dhx.BaseTransition._inheritid = me._transitionId;
				if(null != me._end) me._end(n,i);
				dhx.BaseTransition._inheritid = 0;
				tx.owner = owner;
			}
		}
	});
	return clear;
}
dhx.BaseTransition.prototype.startNode = function(f) {
	this._start = f;
	return this._this();
}
dhx.BaseTransition.prototype.endNode = function(f) {
	this._end = f;
	return this._this();
}
dhx.BaseTransition.prototype.stop = function() {
	var k = -1, me = this;
	this.selection.eachNode(function(n,i) {
		me._stage[++k] = 2;
		Reflect.deleteField(n,"__dhx_transition__");
	});
	return this._this();
}
dhx.BaseTransition.prototype.delay = function(f,v) {
	if(v == null) v = 0.0;
	var delayMin = Math.POSITIVE_INFINITY, k = -1, me = this;
	if(null != f) this.selection.eachNode(function(n,i) {
		var x = me._delay[++k] = f(n,i);
		if(x < delayMin) delayMin = x;
	}); else {
		delayMin = v;
		this.selection.eachNode(function(n,i) {
			me._delay[++k] = delayMin;
		});
	}
	dhx.Timer.timer(this._step,delayMin);
	return this._this();
}
dhx.BaseTransition.prototype.duration = function(f,v) {
	if(v == null) v = 0.0;
	var k = -1, me = this;
	if(null != f) {
		this._durationMax = 0;
		this.selection.eachNode(function(n,i) {
			var x = me._duration[++k] = f(n,i);
			if(x > me._durationMax) me._durationMax = x;
		});
	} else {
		this._durationMax = v;
		this.selection.eachNode(function(n,i) {
			me._duration[++k] = me._durationMax;
		});
	}
	return this._this();
}
dhx.BaseTransition.prototype.ease = function(f) {
	this._ease = f;
	return this._this();
}
dhx.BaseTransition.prototype.remove = function(v) {
	if(v == null) v = true;
	this._remove = v;
	return this._this();
}
dhx.BaseTransition.prototype.select = function(selector) {
	var k, t = this.createTransition(this.selection.select(selector));
	t._ease = this._ease;
	var delay = this._delay;
	var duration = this._duration;
	k = -1;
	t.delay(function(d,i) {
		return delay[++k];
	});
	k = -1;
	t.delay(function(d,i) {
		return duration[++k];
	});
	return t;
}
dhx.BaseTransition.prototype.selectAll = function(selector) {
	var k, t = this.createTransition(this.selection.selectAll(selector));
	t._ease = this._ease;
	var delay = this._delay;
	var duration = this._duration;
	k = -1;
	t.delay(function(d,i) {
		return delay[i > 0?k:++k];
	});
	k = -1;
	t.delay(function(d,i) {
		return duration[i > 0?k:++k];
	});
	return t;
}
dhx.BaseTransition.prototype.createTransition = function(selection) {
	return (function($this) {
		var $r;
		throw "abstract method";
		return $r;
	}(this));
}
dhx.BaseTransition.prototype._this = function() {
	return this;
}
dhx.BaseTransition.prototype.__class__ = dhx.BaseTransition;
dhx.UnboundTransition = function(selection) {
	if( selection === $_ ) return;
	dhx.BaseTransition.call(this,selection);
}
dhx.UnboundTransition.__name__ = ["dhx","UnboundTransition"];
dhx.UnboundTransition.__super__ = dhx.BaseTransition;
for(var k in dhx.BaseTransition.prototype ) dhx.UnboundTransition.prototype[k] = dhx.BaseTransition.prototype[k];
dhx.UnboundTransition.prototype.text = function() {
	return new dhx.AccessTweenText(this,this._tweens);
}
dhx.UnboundTransition.prototype.style = function(name) {
	return new dhx.AccessTweenStyle(name,this,this._tweens);
}
dhx.UnboundTransition.prototype.attr = function(name) {
	return new dhx.AccessTweenAttribute(name,this,this._tweens);
}
dhx.UnboundTransition.prototype.createTransition = function(selection) {
	return new dhx.UnboundTransition(selection);
}
dhx.UnboundTransition.prototype.__class__ = dhx.UnboundTransition;
dhx.BoundTransition = function(selection) {
	if( selection === $_ ) return;
	dhx.BaseTransition.call(this,selection);
}
dhx.BoundTransition.__name__ = ["dhx","BoundTransition"];
dhx.BoundTransition.__super__ = dhx.BaseTransition;
for(var k in dhx.BaseTransition.prototype ) dhx.BoundTransition.prototype[k] = dhx.BaseTransition.prototype[k];
dhx.BoundTransition.prototype.text = function() {
	return new dhx.AccessDataTweenText(this,this._tweens);
}
dhx.BoundTransition.prototype.style = function(name) {
	return new dhx.AccessDataTweenStyle(name,this,this._tweens);
}
dhx.BoundTransition.prototype.attr = function(name) {
	return new dhx.AccessDataTweenAttribute(name,this,this._tweens);
}
dhx.BoundTransition.prototype.start = function(f) {
	return this.startNode(function(n,i) {
		f(Reflect.field(n,"__dhx_data__"),i);
	});
}
dhx.BoundTransition.prototype.end = function(f) {
	return this.endNode(function(n,i) {
		f(Reflect.field(n,"__dhx_data__"),i);
	});
}
dhx.BoundTransition.prototype.createTransition = function(selection) {
	return new dhx.BoundTransition(selection);
}
dhx.BoundTransition.prototype.__class__ = dhx.BoundTransition;
if(typeof haxe=='undefined') haxe = {}
haxe.Log = function() { }
haxe.Log.__name__ = ["haxe","Log"];
haxe.Log.trace = function(v,infos) {
	js.Boot.__trace(v,infos);
}
haxe.Log.clear = function() {
	js.Boot.__clear_trace();
}
haxe.Log.prototype.__class__ = haxe.Log;
DateTools = function() { }
DateTools.__name__ = ["DateTools"];
DateTools.__format_get = function(d,e) {
	return (function($this) {
		var $r;
		switch(e) {
		case "%":
			$r = "%";
			break;
		case "C":
			$r = StringTools.lpad(Std.string(Std["int"](d.getFullYear() / 100)),"0",2);
			break;
		case "d":
			$r = StringTools.lpad(Std.string(d.getDate()),"0",2);
			break;
		case "D":
			$r = DateTools.__format(d,"%m/%d/%y");
			break;
		case "e":
			$r = Std.string(d.getDate());
			break;
		case "H":case "k":
			$r = StringTools.lpad(Std.string(d.getHours()),e == "H"?"0":" ",2);
			break;
		case "I":case "l":
			$r = (function($this) {
				var $r;
				var hour = d.getHours() % 12;
				$r = StringTools.lpad(Std.string(hour == 0?12:hour),e == "I"?"0":" ",2);
				return $r;
			}($this));
			break;
		case "m":
			$r = StringTools.lpad(Std.string(d.getMonth() + 1),"0",2);
			break;
		case "M":
			$r = StringTools.lpad(Std.string(d.getMinutes()),"0",2);
			break;
		case "n":
			$r = "\n";
			break;
		case "p":
			$r = d.getHours() > 11?"PM":"AM";
			break;
		case "r":
			$r = DateTools.__format(d,"%I:%M:%S %p");
			break;
		case "R":
			$r = DateTools.__format(d,"%H:%M");
			break;
		case "s":
			$r = Std.string(Std["int"](d.getTime() / 1000));
			break;
		case "S":
			$r = StringTools.lpad(Std.string(d.getSeconds()),"0",2);
			break;
		case "t":
			$r = "\t";
			break;
		case "T":
			$r = DateTools.__format(d,"%H:%M:%S");
			break;
		case "u":
			$r = (function($this) {
				var $r;
				var t = d.getDay();
				$r = t == 0?"7":Std.string(t);
				return $r;
			}($this));
			break;
		case "w":
			$r = Std.string(d.getDay());
			break;
		case "y":
			$r = StringTools.lpad(Std.string(d.getFullYear() % 100),"0",2);
			break;
		case "Y":
			$r = Std.string(d.getFullYear());
			break;
		default:
			$r = (function($this) {
				var $r;
				throw "Date.format %" + e + "- not implemented yet.";
				return $r;
			}($this));
		}
		return $r;
	}(this));
}
DateTools.__format = function(d,f) {
	var r = new StringBuf();
	var p = 0;
	while(true) {
		var np = f.indexOf("%",p);
		if(np < 0) break;
		r.b[r.b.length] = f.substr(p,np - p);
		r.add(DateTools.__format_get(d,f.substr(np + 1,1)));
		p = np + 2;
	}
	r.b[r.b.length] = f.substr(p,f.length - p);
	return r.b.join("");
}
DateTools.format = function(d,f) {
	return DateTools.__format(d,f);
}
DateTools.delta = function(d,t) {
	return Date.fromTime(d.getTime() + t);
}
DateTools.getMonthDays = function(d) {
	var month = d.getMonth();
	var year = d.getFullYear();
	if(month != 1) return DateTools.DAYS_OF_MONTH[month];
	var isB = year % 4 == 0 && year % 100 != 0 || year % 400 == 0;
	return isB?29:28;
}
DateTools.seconds = function(n) {
	return n * 1000.0;
}
DateTools.minutes = function(n) {
	return n * 60.0 * 1000.0;
}
DateTools.hours = function(n) {
	return n * 60.0 * 60.0 * 1000.0;
}
DateTools.days = function(n) {
	return n * 24.0 * 60.0 * 60.0 * 1000.0;
}
DateTools.parse = function(t) {
	var s = t / 1000;
	var m = s / 60;
	var h = m / 60;
	return { ms : t % 1000, seconds : Std["int"](s % 60), minutes : Std["int"](m % 60), hours : Std["int"](h % 24), days : Std["int"](h / 24)};
}
DateTools.make = function(o) {
	return o.ms + 1000.0 * (o.seconds + 60.0 * (o.minutes + 60.0 * (o.hours + 24.0 * o.days)));
}
DateTools.prototype.__class__ = DateTools;
if(!thx.svg) thx.svg = {}
thx.svg.Diagonal = function(p) {
	if( p === $_ ) return;
	this._projection = thx.svg.Diagonal.diagonalProjection;
}
thx.svg.Diagonal.__name__ = ["thx","svg","Diagonal"];
thx.svg.Diagonal.diagonalProjection = function(d,_) {
	return d;
}
thx.svg.Diagonal.forObject = function() {
	return new thx.svg.Diagonal().sourcef(function(d,_i) {
		return [d.x0,d.y0];
	}).targetf(function(d,_i) {
		return [d.x1,d.y1];
	});
}
thx.svg.Diagonal.forArray = function() {
	return new thx.svg.Diagonal().sourcef(function(d,_i) {
		return [d[0],d[1]];
	}).targetf(function(d,_i) {
		return [d[2],d[3]];
	});
}
thx.svg.Diagonal.prototype._source = null;
thx.svg.Diagonal.prototype._target = null;
thx.svg.Diagonal.prototype._projection = null;
thx.svg.Diagonal.prototype.diagonal = function(d,i) {
	var p0 = this._source(d,i), p3 = this._target(d,i), m = (p0[1] + p3[1]) / 2, p = [p0,[p0[0],m],[p3[0],m],p3];
	var p2 = p.map(this._projection);
	return "M" + p2[0][0] + "," + p2[0][1] + "C" + p2[1][0] + "," + p2[1][1] + " " + p2[2][0] + "," + p2[2][1] + " " + p2[3][0] + "," + p2[3][1];
}
thx.svg.Diagonal.prototype.getSource = function() {
	return this._source;
}
thx.svg.Diagonal.prototype.sourcef = function(x) {
	this._source = x;
	return this;
}
thx.svg.Diagonal.prototype.getTarget = function() {
	return this._target;
}
thx.svg.Diagonal.prototype.targetf = function(x) {
	this._target = x;
	return this;
}
thx.svg.Diagonal.prototype.getProjection = function() {
	return this._projection;
}
thx.svg.Diagonal.prototype.projection = function(x) {
	this._projection = x;
	return this;
}
thx.svg.Diagonal.prototype.__class__ = thx.svg.Diagonal;
Objects = function() { }
Objects.__name__ = ["Objects"];
Objects.field = function(o,fieldname,alt) {
	return Reflect.hasField(o,fieldname)?Reflect.field(o,fieldname):alt;
}
Objects.keys = function(o) {
	return Reflect.fields(o);
}
Objects.values = function(o) {
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		arr.push(Reflect.field(o,key));
	}
	return arr;
}
Objects.entries = function(o) {
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		arr.push({ key : key, value : Reflect.field(o,key)});
	}
	return arr;
}
Objects.each = function(o,handler) {
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		handler(key,Reflect.field(o,key));
	}
}
Objects.map = function(o,handler) {
	var results = [];
	var _g = 0, _g1 = Reflect.fields(o);
	while(_g < _g1.length) {
		var key = _g1[_g];
		++_g;
		results.push(handler(key,Reflect.field(o,key)));
	}
	return results;
}
Objects["with"] = function(ob,f) {
	f(ob);
	return ob;
}
Objects.toHash = function(ob) {
	var hash = new Hash();
	return Objects.copyToHash(ob,hash);
}
Objects.copyToHash = function(ob,hash) {
	var _g = 0, _g1 = Reflect.fields(ob);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		hash.set(field,Reflect.field(ob,field));
	}
	return hash;
}
Objects.interpolate = function(v,a,b,equation) {
	return (Objects.interpolatef(a,b,equation))(v);
}
Objects.interpolatef = function(a,b,equation) {
	var i = { }, c = { }, keys = Reflect.fields(a);
	var _g = 0;
	while(_g < keys.length) {
		var key = keys[_g];
		++_g;
		if(Reflect.hasField(b,key)) {
			var va = Reflect.field(a,key);
			i[key] = Dynamics.interpolatef(va,Reflect.field(b,key));
		} else c[key] = Reflect.field(a,key);
	}
	keys = Reflect.fields(b);
	var _g = 0;
	while(_g < keys.length) {
		var key = keys[_g];
		++_g;
		if(!Reflect.hasField(a,key)) c[key] = Reflect.field(b,key);
	}
	return function(t) {
		var _g = 0, _g1 = Reflect.fields(i);
		while(_g < _g1.length) {
			var k = _g1[_g];
			++_g;
			c[k] = Reflect.field(i,k).apply(i,[t]);
		}
		return c;
	};
}
Objects.copyTo = function(src,dst) {
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var sv = Dynamics.clone(Reflect.field(src,field));
		var dv = Reflect.field(dst,field);
		if(Reflect.isObject(sv) && null == Type.getClass(sv) && (Reflect.isObject(dv) && null == Type.getClass(dv))) Objects.copyTo(sv,dv); else dst[field] = sv;
	}
	return dst;
}
Objects.clone = function(src) {
	var dst = { };
	return Objects.copyTo(src,dst);
}
Objects.mergef = function(ob,new_ob,f) {
	var _g = 0, _g1 = Reflect.fields(new_ob);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var new_val = Reflect.field(new_ob,field);
		if(Reflect.hasField(ob,field)) {
			var old_val = Reflect.field(ob,field);
			ob[field] = f(field,old_val,new_val);
		} else ob[field] = new_val;
	}
}
Objects.merge = function(ob,new_ob) {
	Objects.mergef(ob,new_ob,function(key,old_v,new_v) {
		return new_v;
	});
}
Objects._flatten = function(src,cum,arr,levels,level) {
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var clone = Objects.clone(cum);
		var v = Reflect.field(src,field);
		clone.fields.push(field);
		if(Reflect.isObject(v) && null == Type.getClass(v) && (levels == 0 || level + 1 < levels)) Objects._flatten(v,clone,arr,levels,level + 1); else {
			clone.value = v;
			arr.push(clone);
		}
	}
}
Objects.flatten = function(src,levels) {
	if(levels == null) levels = 0;
	var arr = [];
	var _g = 0, _g1 = Reflect.fields(src);
	while(_g < _g1.length) {
		var field = _g1[_g];
		++_g;
		var v = Reflect.field(src,field);
		if(Reflect.isObject(v) && null == Type.getClass(v) && levels != 1) {
			var item = { fields : [field], value : null};
			Objects._flatten(v,item,arr,levels,1);
		} else arr.push({ fields : [field], value : v});
	}
	return arr;
}
Objects.compare = function(a,b) {
	var v, fields;
	if((v = Arrays.compare(fields = Reflect.fields(a),Reflect.fields(b))) != 0) return v;
	var _g = 0;
	while(_g < fields.length) {
		var field = fields[_g];
		++_g;
		if((v = Dynamics.compare(Reflect.field(a,field),Reflect.field(b,field))) != 0) return v;
	}
	return 0;
}
Objects.addFields = function(o,fields,values) {
	var _g1 = 0, _g = fields.length;
	while(_g1 < _g) {
		var i = _g1++;
		Objects.addField(o,fields[i],values[i]);
	}
	return o;
}
Objects.addField = function(o,field,value) {
	o[field] = value;
	return o;
}
Objects.format = function(v,param,params,culture) {
	return (Objects.formatf(param,params,culture))(v);
}
Objects.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"R");
	var format = params.shift();
	switch(format) {
	case "O":
		return function(v) {
			return Std.string(v);
		};
	case "R":
		return function(v) {
			var buf = [];
			var _g = 0, _g1 = Reflect.fields(v);
			while(_g < _g1.length) {
				var field = _g1[_g];
				++_g;
				buf.push(field + ":" + Dynamics.format(Reflect.field(v,field),null,null,null,culture));
			}
			return "{" + buf.join(",") + "}";
		};
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Objects.hx", lineNumber : 242, className : "Objects", methodName : "formatf"});
			return $r;
		}(this));
	}
}
Objects.prototype.__class__ = Objects;
Floats = function() { }
Floats.__name__ = ["Floats"];
Floats.normalize = function(v) {
	if(v < 0.0) return 0.0; else if(v > 1.0) return 1.0; else return v;
}
Floats.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
}
Floats.clampSym = function(v,max) {
	if(v < -max) return -max; else if(v > max) return max; else return v;
}
Floats.range = function(start,stop,step) {
	if(step == null) step = 1.0;
	if(null == stop) {
		stop = start;
		start = 0.0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw new thx.error.Error("infinite range",null,null,{ fileName : "Floats.hx", lineNumber : 50, className : "Floats", methodName : "range"});
	var range = [], i = -1.0, j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	return range;
}
Floats.sign = function(v) {
	return v < 0?-1:1;
}
Floats.abs = function(a) {
	return a < 0?-a:a;
}
Floats.min = function(a,b) {
	return a < b?a:b;
}
Floats.max = function(a,b) {
	return a > b?a:b;
}
Floats.wrap = function(v,min,max) {
	var range = max - min + 1;
	if(v < min) v += range * ((min - v) / range + 1);
	return min + (v - min) % range;
}
Floats.circularWrap = function(v,max) {
	v = v % max;
	if(v < 0) v += max;
	return v;
}
Floats.interpolate = function(f,a,b,equation) {
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	return a + equation(f) * (b - a);
}
Floats.interpolatef = function(a,b,equation) {
	if(b == null) b = 1.0;
	if(a == null) a = 0.0;
	if(null == equation) equation = thx.math.Equations.linear;
	var d = b - a;
	return function(f) {
		return a + equation(f) * d;
	};
}
Floats.interpolateClampf = function(min,max,equation) {
	if(null == equation) equation = thx.math.Equations.linear;
	return function(a,b) {
		var d = b - a;
		return function(f) {
			return a + equation(Floats.clamp(f,min,max)) * d;
		};
	};
}
Floats.format = function(v,param,params,culture) {
	return (Floats.formatf(param,params,culture))(v);
}
Floats.formatf = function(param,params,culture) {
	params = thx.culture.FormatParams.params(param,params,"D");
	var format = params.shift();
	var decimals = params.length > 0?Std.parseInt(params[0]):null;
	switch(format) {
	case "D":
		return function(v) {
			return thx.culture.FormatNumber.decimal(v,decimals,culture);
		};
	case "I":
		return function(v) {
			return thx.culture.FormatNumber["int"](v,culture);
		};
	case "C":
		var s = params.length > 1?params[1]:null;
		return function(v) {
			return thx.culture.FormatNumber.currency(v,s,decimals,culture);
		};
	case "P":
		return function(v) {
			return thx.culture.FormatNumber.percent(v,decimals,culture);
		};
	case "M":
		return function(v) {
			return thx.culture.FormatNumber.permille(v,decimals,culture);
		};
	default:
		return (function($this) {
			var $r;
			throw new thx.error.Error("Unsupported number format: {0}",null,format,{ fileName : "Floats.hx", lineNumber : 145, className : "Floats", methodName : "formatf"});
			return $r;
		}(this));
	}
}
Floats.canParse = function(s) {
	return Floats._reparse.match(s);
}
Floats.parse = function(s) {
	if(s.substr(0,1) == "+") s = s.substr(1);
	return Std.parseFloat(s);
}
Floats.compare = function(a,b) {
	return a < b?-1:a > b?1:0;
}
Floats.isNumeric = function(v) {
	return Std["is"](v,Float) || Std["is"](v,Int);
}
Floats.equals = function(a,b,approx) {
	if(approx == null) approx = 1e-5;
	if(Math.isNaN(a)) return Math.isNaN(b); else if(Math.isNaN(b)) return false; else if(!Math.isFinite(a) && !Math.isFinite(b)) return a > 0 == b > 0;
	return Math.abs(b - a) < approx;
}
Floats.uninterpolatef = function(a,b) {
	b = 1 / (b - a);
	return function(x) {
		return (x - a) * b;
	};
}
Floats.uninterpolateClampf = function(a,b) {
	b = 1 / (b - a);
	return function(x) {
		return Floats.clamp((x - a) * b,0.0,1.0);
	};
}
Floats.round = function(number,precision) {
	if(precision == null) precision = 2;
	number *= Math.pow(10,precision);
	return Math.round(number) / Math.pow(10,precision);
}
Floats.prototype.__class__ = Floats;
Std = function() { }
Std.__name__ = ["Std"];
Std["is"] = function(v,t) {
	return js.Boot.__instanceof(v,t);
}
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std["int"] = function(x) {
	if(x < 0) return Math.ceil(x);
	return Math.floor(x);
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && x.charCodeAt(1) == 120) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return Math.floor(Math.random() * x);
}
Std.prototype.__class__ = Std;
thx.culture.core.NumberInfo = function(decimals,decimalsSeparator,groups,groupsSeparator,patternNegative,patternPositive) {
	if( decimals === $_ ) return;
	this.decimals = decimals;
	this.decimalsSeparator = decimalsSeparator;
	this.groups = groups;
	this.groupsSeparator = groupsSeparator;
	this.patternNegative = patternNegative;
	this.patternPositive = patternPositive;
}
thx.culture.core.NumberInfo.__name__ = ["thx","culture","core","NumberInfo"];
thx.culture.core.NumberInfo.prototype.decimals = null;
thx.culture.core.NumberInfo.prototype.decimalsSeparator = null;
thx.culture.core.NumberInfo.prototype.groups = null;
thx.culture.core.NumberInfo.prototype.groupsSeparator = null;
thx.culture.core.NumberInfo.prototype.patternNegative = null;
thx.culture.core.NumberInfo.prototype.patternPositive = null;
thx.culture.core.NumberInfo.prototype.__class__ = thx.culture.core.NumberInfo;
dhx.util.Strings = function() { }
dhx.util.Strings.__name__ = ["dhx","util","Strings"];
dhx.util.Strings.interpolate = function(v,a,b,equation) {
	return (dhx.util.Strings.interpolatef(a,b,equation))(v);
}
dhx.util.Strings.interpolatef = function(a,b,equation) {
	var extract = function(value,s,f) {
		while(dhx.util.Strings._reInterpolateNumber.match(value)) {
			var left = dhx.util.Strings._reInterpolateNumber.matchedLeft();
			if(!dhx.util.Strings.empty(left)) {
				s.push(left);
				f.push(null);
			}
			s.push(null);
			f.push(Std.parseFloat(dhx.util.Strings._reInterpolateNumber.matched(0)));
			value = dhx.util.Strings._reInterpolateNumber.matchedRight();
		}
		if(!dhx.util.Strings.empty(value)) {
			s.push(value);
			f.push(null);
		}
	};
	var sa = [], fa = [], sb = [], fb = [];
	extract(a,sa,fa);
	extract(b,sb,fb);
	var functions = [], i = 0;
	var min = sa.length < sb.length?sa.length:sb.length;
	while(i < min) {
		if(sa[i] != sb[i]) break;
		if(null == sa[i]) {
			if(fa[i] == fb[i]) {
				var s = ["" + fa[i]];
				functions.push((function(s) {
					return function(_) {
						return s[0];
					};
				})(s));
			} else {
				var f = [dhx.util.Floats.interpolatef(fa[i],fb[i],equation)];
				functions.push((function(f) {
					return function(t) {
						return "" + f[0](t);
					};
				})(f));
			}
		} else {
			var s = [sa[i]];
			functions.push((function(s) {
				return function(_) {
					return s[0];
				};
			})(s));
		}
		i++;
	}
	var rest = "";
	while(i < sb.length) {
		if(null != sb[i]) rest += sb[i]; else rest += fb[i];
		i++;
	}
	if("" != rest) functions.push(function(_) {
		return rest;
	});
	return function(t) {
		var result = [];
		var _g = 0;
		while(_g < functions.length) {
			var fun = functions[_g];
			++_g;
			result.push(fun(t));
		}
		return result.join("");
	};
}
dhx.util.Strings.interpolateChars = function(v,a,b,equation) {
	return (dhx.util.Strings.interpolateCharsf(a,b,equation))(v);
}
dhx.util.Strings.interpolateCharsf = function(a,b,equation) {
	var aa = a.split(""), ab = b.split("");
	while(aa.length > ab.length) ab.insert(0," ");
	while(ab.length > aa.length) aa.insert(0," ");
	var ai = [];
	var _g1 = 0, _g = aa.length;
	while(_g1 < _g) {
		var i = _g1++;
		ai[i] = dhx.util.Strings.interpolateCharf(aa[i],ab[i]);
	}
	return function(v) {
		var r = [];
		var _g1 = 0, _g = ai.length;
		while(_g1 < _g) {
			var i = _g1++;
			r[i] = ai[i](v);
		}
		return StringTools.trim(r.join(""));
	};
}
dhx.util.Strings.interpolateChar = function(v,a,b,equation) {
	return (dhx.util.Strings.interpolateCharf(a,b,equation))(v);
}
dhx.util.Strings.interpolateCharf = function(a,b,equation) {
	if(new EReg("^\\d","").match(b) && a == " ") a = "0";
	var r = new EReg("^[^a-zA-Z0-9]","");
	if(r.match(b) && a == " ") a = r.matched(0);
	var ca = a.charCodeAt(0), cb = b.charCodeAt(0), i = dhx.util.Ints.interpolatef(ca,cb,equation);
	return function(v) {
		return String.fromCharCode(i(v));
	};
}
dhx.util.Strings.empty = function(value) {
	return value == null || value == "";
}
dhx.util.Strings.collapse = function(value) {
	return dhx.util.Strings._reCollapse.replace(StringTools.trim(value)," ");
}
dhx.util.Strings.prototype.__class__ = dhx.util.Strings;
thx.geom.layout.AbstractTree = function(p) {
	if( p === $_ ) return;
	thx.geom.layout.AbstractHierarchy.call(this);
	this._treeHierarchy = $closure(this,"hierarchy");
	this._separation = thx.geom.layout.Tree.treeSeparation;
}
thx.geom.layout.AbstractTree.__name__ = ["thx","geom","layout","AbstractTree"];
thx.geom.layout.AbstractTree.__super__ = thx.geom.layout.AbstractHierarchy;
for(var k in thx.geom.layout.AbstractHierarchy.prototype ) thx.geom.layout.AbstractTree.prototype[k] = thx.geom.layout.AbstractHierarchy.prototype[k];
thx.geom.layout.AbstractTree.prototype._separation = null;
thx.geom.layout.AbstractTree.prototype._size = null;
thx.geom.layout.AbstractTree.prototype._links = null;
thx.geom.layout.AbstractTree.prototype._treeHierarchy = null;
thx.geom.layout.AbstractTree.prototype.links = function(x) {
	this._links = x;
	return this;
}
thx.geom.layout.AbstractTree.prototype.getLinks = function(x) {
	return this._links;
}
thx.geom.layout.AbstractTree.prototype.separation = function(x) {
	this._separation = x;
	return this;
}
thx.geom.layout.AbstractTree.prototype.getSeparation = function(x) {
	return this._separation;
}
thx.geom.layout.AbstractTree.prototype.size = function(x) {
	this._size = x;
	return this;
}
thx.geom.layout.AbstractTree.prototype.getSize = function(x) {
	return this._size;
}
thx.geom.layout.AbstractTree.prototype.treeHierarchy = function(x) {
	this._treeHierarchy = x;
	return this;
}
thx.geom.layout.AbstractTree.prototype.getTreeHierarchy = function(x) {
	return this._treeHierarchy;
}
thx.geom.layout.AbstractTree.prototype.apportion = function(node,previousSibling,ancestor) {
	if(previousSibling != null) {
		var vip = node;
		var vop = node;
		var vim = previousSibling;
		var vom = node.parent.children[0];
		var sip = vip._tree.mod;
		var sop = vop._tree.mod;
		var sim = vim._tree.mod;
		var som = vom._tree.mod;
		var shift = null;
		vim = thx.geom.layout.Tree.right(vim);
		vip = thx.geom.layout.Tree.left(vip);
		while(vim != null && vip != null) {
			vom = thx.geom.layout.Tree.left(vom);
			vop = thx.geom.layout.Tree.right(vop);
			vop._tree.ancestor = node;
			shift = vim._tree.prelim + sim - vip._tree.prelim - sip + this._separation(vim,vip);
			if(shift > 0) {
				thx.geom.layout.Tree.move(thx.geom.layout.Tree.ancestor(vim,node,ancestor),node,shift);
				sip += shift;
				sop += shift;
			}
			sim += vim._tree.mod;
			sip += vip._tree.mod;
			som += vom._tree.mod;
			sop += vop._tree.mod;
			vim = thx.geom.layout.Tree.right(vim);
			vip = thx.geom.layout.Tree.left(vip);
		}
		if(vim != null && thx.geom.layout.Tree.right(vop) == null) {
			vop._tree.thread = vim;
			vop._tree.mod += sim - sop;
		}
		if(vip != null && thx.geom.layout.Tree.left(vom) == null) {
			vom._tree.thread = vip;
			vom._tree.mod += sip - som;
			ancestor = node;
		}
	}
	return ancestor;
}
thx.geom.layout.AbstractTree.prototype.firstWalk = function(node,previousSibling) {
	var children = node.children;
	var layout = node._tree;
	if(children != null && children.length > 0) {
		var n = children.length;
		var firstChild = children[0];
		var previousChild = null;
		var ancestor = firstChild;
		var child = null;
		var i = -1;
		while(++i < n) {
			child = children[i];
			this.firstWalk(child,previousChild);
			ancestor = this.apportion(child,previousChild,ancestor);
			previousChild = child;
		}
		thx.geom.layout.Tree.shift(node);
		var midpoint = .5 * (firstChild._tree.prelim + child._tree.prelim);
		if(previousSibling != null) {
			layout.prelim = previousSibling._tree.prelim + this._separation(node,previousSibling);
			layout.mod = layout.prelim - midpoint;
		} else layout.prelim = midpoint;
	} else if(previousSibling != null && previousSibling._tree != null) layout.prelim = previousSibling._tree.prelim + this._separation(node,previousSibling);
}
thx.geom.layout.AbstractTree.prototype.secondWalk = function(node,x) {
	node.x = node._tree.prelim + x;
	var children = node.children;
	if(children != null) {
		var i = -1, n = children.length;
		x += node._tree.mod;
		while(++i < n) this.secondWalk(children[i],x);
	}
}
thx.geom.layout.AbstractTree.prototype.tree = function(d,i) {
	var nodes = this._treeHierarchy(d,i);
	var root = nodes[0];
	thx.geom.layout.Tree.visitAfter(root,function(node,previousSibling) {
		node._tree = { ancestor : node, prelim : 0, mod : 0, change : 0, shift : 0, number : previousSibling != null?previousSibling._tree.number + 1:0};
	});
	this.firstWalk(root,null);
	this.secondWalk(root,-root._tree.prelim);
	var left = thx.geom.layout.Tree.search(root,thx.geom.layout.Tree.leftmost), right = thx.geom.layout.Tree.search(root,thx.geom.layout.Tree.rightmost), deep = thx.geom.layout.Tree.search(root,thx.geom.layout.Tree.deepest), x0 = left.x - this._separation(left,right) / 2, x1 = right.x + this._separation(right,left) / 2, y1 = deep.depth;
	var t = this;
	if(x0 == x1) {
		x0 = -.5;
		x1 = -.5;
	}
	thx.geom.layout.Tree.visitAfter(root,function(node,_) {
		node.x = (node.x - x0) * t._size[0];
		node.y = node.depth * t._size[1];
		if(x1 - x0 != 0) node.x /= x1 - x0;
		if(y1 != 0) node.y /= y1;
		node._tree = null;
	});
	return nodes;
}
thx.geom.layout.AbstractTree.prototype.__class__ = thx.geom.layout.AbstractTree;
thx.geom.layout.Tree = function(p) {
	if( p === $_ ) return;
	thx.geom.layout.AbstractTree.call(this);
}
thx.geom.layout.Tree.__name__ = ["thx","geom","layout","Tree"];
thx.geom.layout.Tree.__super__ = thx.geom.layout.AbstractTree;
for(var k in thx.geom.layout.AbstractTree.prototype ) thx.geom.layout.Tree.prototype[k] = thx.geom.layout.AbstractTree.prototype[k];
thx.geom.layout.Tree.treeLinks = function(nodes) {
	return Arrays.flatten(nodes.map(function(parent,_) {
		var map_arr = parent.children != null?parent.children:new Array();
		return map_arr.map(function(child,_1) {
			return { source : parent, target : child};
		});
	}));
}
thx.geom.layout.Tree.treeLinkDiagonal = function() {
	return new thx.svg.Diagonal().sourcef(function(x,_) {
		return [x.source.x,x.source.y];
	}).targetf(function(x,_) {
		return [x.target.x,x.target.y];
	});
}
thx.geom.layout.Tree.treeSeparation = function(a,b) {
	return a.parent == b.parent?1:2;
}
thx.geom.layout.Tree.left = function(node) {
	return node.children != null?node.children[0]:node._tree.thread;
}
thx.geom.layout.Tree.right = function(node) {
	return node.children != null?node.children[node.children.length - 1]:node._tree.thread;
}
thx.geom.layout.Tree.search = function(node,compare) {
	var children = node.children;
	if(children != null) {
		var child, n = children.length, i = -1;
		while(++i < n) {
			var child1 = thx.geom.layout.Tree.search(children[i],compare);
			if(compare(child1,node) > 0) node = child1;
		}
	}
	return node;
}
thx.geom.layout.Tree.rightmost = function(a,b) {
	return a.x - b.x;
}
thx.geom.layout.Tree.leftmost = function(a,b) {
	return b.x - a.x;
}
thx.geom.layout.Tree.deepest = function(a,b) {
	return a.depth - b.depth;
}
thx.geom.layout.Tree.visit = function(node,previousSibling,callbackf) {
	var children = node.children;
	if(children != null) {
		var child, previousChild = null, i = -1, n = children.length;
		while(++i < n) {
			child = children[i];
			thx.geom.layout.Tree.visit(child,previousChild,callbackf);
			previousChild = child;
		}
	}
	if(callbackf != null) callbackf(node,previousSibling);
}
thx.geom.layout.Tree.visitAfter = function(node,callbackf) {
	thx.geom.layout.Tree.visit(node,null,callbackf);
}
thx.geom.layout.Tree.shift = function(node) {
	var shift = 0.0, change = 0.0, children = node.children, i = children.length, child;
	while(--i >= 0) {
		child = children[i]._tree;
		child.prelim += shift;
		child.mod += shift;
		shift += child.shift + (change += child.change);
	}
}
thx.geom.layout.Tree.move = function(ancestor,node,shift) {
	var ancestor1 = ancestor._tree;
	var node1 = node._tree;
	var change = shift / (node1.number - ancestor1.number);
	ancestor1.change += change;
	node1.change -= change;
	node1.shift += shift;
	node1.prelim += shift;
	node1.mod += shift;
}
thx.geom.layout.Tree.ancestor = function(vim,node,ancestor) {
	return vim._tree.ancestor.parent == node.parent?vim._tree.ancestor:ancestor;
}
thx.geom.layout.Tree.prototype.__class__ = thx.geom.layout.Tree;
dhx.BoundSelection = function(groups) {
	if( groups === $_ ) return;
	dhx.BaseSelection.call(this,groups);
}
dhx.BoundSelection.__name__ = ["dhx","BoundSelection"];
dhx.BoundSelection.__super__ = dhx.BaseSelection;
for(var k in dhx.BaseSelection.prototype ) dhx.BoundSelection.prototype[k] = dhx.BaseSelection.prototype[k];
dhx.BoundSelection.prototype.html = function() {
	return new dhx.AccessDataHtml(this);
}
dhx.BoundSelection.prototype.text = function() {
	return new dhx.AccessDataText(this);
}
dhx.BoundSelection.prototype.attr = function(name) {
	return new dhx.AccessDataAttribute(name,this);
}
dhx.BoundSelection.prototype.classed = function() {
	return new dhx.AccessDataClassed(this);
}
dhx.BoundSelection.prototype.property = function(name) {
	return new dhx.AccessDataProperty(name,this);
}
dhx.BoundSelection.prototype.style = function(name) {
	return new dhx.AccessDataStyle(name,this);
}
dhx.BoundSelection.prototype.transition = function() {
	return new dhx.BoundTransition(this);
}
dhx.BoundSelection.prototype.data = function(d,join) {
	var update = [], enter = [], exit = [];
	if(null == join) {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			dhx.BaseSelection.bind(group,d,update,enter,exit);
		}
	} else {
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			dhx.BaseSelection.bindJoin(join,group,d,update,enter,exit);
		}
	}
	return new dhx.DataChoice(update,enter,exit);
}
dhx.BoundSelection.prototype.dataf = function(fd,join) {
	if(null == join) {
		var update = [], enter = [], exit = [], i = 0;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			dhx.BaseSelection.bind(group,fd(Reflect.field(group.parentNode,"__dhx_data__"),i++),update,enter,exit);
		}
		return new dhx.DataChoice(update,enter,exit);
	} else {
		var update = [], enter = [], exit = [], i = 0;
		var _g = 0, _g1 = this.groups;
		while(_g < _g1.length) {
			var group = _g1[_g];
			++_g;
			dhx.BaseSelection.bindJoin(join,group,fd(Reflect.field(group.parentNode,"__dhx_data__"),i++),update,enter,exit);
		}
		return new dhx.DataChoice(update,enter,exit);
	}
}
dhx.BoundSelection.prototype.selfData = function() {
	return this.dataf(function(d,_) {
		return d;
	});
}
dhx.BoundSelection.prototype.each = function(f) {
	return this.eachNode(function(n,i) {
		f(Reflect.field(n,"__dhx_data__"),i);
	});
}
dhx.BoundSelection.prototype.sort = function(comparator) {
	return this.sortNode(function(a,b) {
		return comparator(Reflect.field(a,"__dhx_data__"),Reflect.field(b,"__dhx_data__"));
	});
}
dhx.BoundSelection.prototype.filter = function(f) {
	return this.filterNode(function(n,i) {
		return f(Reflect.field(n,"__dhx_data__"),i);
	});
}
dhx.BoundSelection.prototype.map = function(f) {
	var ngroups = [];
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		var ngroup = new dhx.Group([]);
		var i = 0;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(null != node) node["__dhx_data__"] = f(Reflect.field(node,"__dhx_data__"),i++);
			ngroup.nodes.push(node);
		}
		ngroups.push(ngroup);
	}
	return this.createSelection(ngroups);
}
dhx.BoundSelection.prototype.first = function(f) {
	return this.firstNode(function(n) {
		return f(Reflect.field(n,"__dhx_data__"));
	});
}
dhx.BoundSelection.prototype.on = function(type,listener,capture) {
	if(capture == null) capture = false;
	return this.onNode(type,null == listener?null:function(n,i) {
		listener(Reflect.field(n,"__dhx_data__"),i);
	},capture);
}
dhx.BoundSelection.prototype.__class__ = dhx.BoundSelection;
dhx.UpdateSelection = function(update,choice) {
	if( update === $_ ) return;
	dhx.BoundSelection.call(this,update);
	this._choice = choice;
}
dhx.UpdateSelection.__name__ = ["dhx","UpdateSelection"];
dhx.UpdateSelection.__super__ = dhx.BoundSelection;
for(var k in dhx.BoundSelection.prototype ) dhx.UpdateSelection.prototype[k] = dhx.BoundSelection.prototype[k];
dhx.UpdateSelection.prototype._choice = null;
dhx.UpdateSelection.prototype.createSelection = function(groups) {
	return new dhx.UpdateSelection(groups,this._choice);
}
dhx.UpdateSelection.prototype.update = function() {
	return this;
}
dhx.UpdateSelection.prototype.enter = function() {
	return this._choice.enter();
}
dhx.UpdateSelection.prototype.exit = function() {
	return this._choice.exit();
}
dhx.UpdateSelection.prototype.__class__ = dhx.UpdateSelection;
dhx.DataChoice = function(update,enter,exit) {
	if( update === $_ ) return;
	this._update = update;
	this._enter = enter;
	this._exit = exit;
	dhx.UpdateSelection.call(this,this._update,this);
}
dhx.DataChoice.__name__ = ["dhx","DataChoice"];
dhx.DataChoice.__super__ = dhx.UpdateSelection;
for(var k in dhx.UpdateSelection.prototype ) dhx.DataChoice.prototype[k] = dhx.UpdateSelection.prototype[k];
dhx.DataChoice.merge = function(groups,dc) {
	dhx.Group.merge(groups,dc._update);
}
dhx.DataChoice.prototype._update = null;
dhx.DataChoice.prototype._enter = null;
dhx.DataChoice.prototype._exit = null;
dhx.DataChoice.prototype.enter = function() {
	return new dhx.PreEnterSelection(this._enter,this);
}
dhx.DataChoice.prototype.exit = function() {
	return new dhx.ExitSelection(this._exit,this);
}
dhx.DataChoice.prototype.__class__ = dhx.DataChoice;
dhx.ResumeSelection = function(groups) {
	if( groups === $_ ) return;
	dhx.BoundSelection.call(this,groups);
}
dhx.ResumeSelection.__name__ = ["dhx","ResumeSelection"];
dhx.ResumeSelection.__super__ = dhx.BoundSelection;
for(var k in dhx.BoundSelection.prototype ) dhx.ResumeSelection.prototype[k] = dhx.BoundSelection.prototype[k];
dhx.ResumeSelection.create = function(groups) {
	return new dhx.ResumeSelection(groups);
}
dhx.ResumeSelection.prototype.createSelection = function(groups) {
	return new dhx.ResumeSelection(groups);
}
dhx.ResumeSelection.prototype.__class__ = dhx.ResumeSelection;
dhx.PreEnterSelection = function(enter,choice) {
	if( enter === $_ ) return;
	this.groups = enter;
	this._choice = choice;
}
dhx.PreEnterSelection.__name__ = ["dhx","PreEnterSelection"];
dhx.PreEnterSelection.prototype.groups = null;
dhx.PreEnterSelection.prototype._choice = null;
dhx.PreEnterSelection.prototype.append = function(name) {
	var qname = dhx.Namespace.qualify(name);
	var append = function(node) {
		var n = js.Lib.document.createElement(name);
		node.appendChild(n);
		return n;
	};
	var appendNS = function(node) {
		var n = js.Lib.document.createElementNS(qname.space,qname.local);
		node.appendChild(n);
		return n;
	};
	return this._select(null == qname?append:appendNS);
}
dhx.PreEnterSelection.prototype.insert = function(name,before,beforeSelector) {
	var qname = dhx.Namespace.qualify(name);
	var insertDom = function(node) {
		var n = js.Lib.document.createElement(name), bf = null != before?before:dhx.Dom.selectNode(node).select(beforeSelector).node();
		node.insertBefore(n,bf);
		return n;
	};
	var insertNsDom = function(node) {
		var n = js.Lib.document.createElementNS(qname.space,qname.local), bf = null != before?before:dhx.Dom.selectNode(node).select(beforeSelector).node();
		node.insertBefore(n,bf);
		return n;
	};
	return this._select(null == qname?insertDom:insertNsDom);
}
dhx.PreEnterSelection.prototype.createSelection = function(groups) {
	return new dhx.EnterSelection(groups,this._choice);
}
dhx.PreEnterSelection.prototype._select = function(selectf) {
	var subgroups = [], subgroup, subnode, node;
	var _g = 0, _g1 = this.groups;
	while(_g < _g1.length) {
		var group = _g1[_g];
		++_g;
		subgroups.push(subgroup = new dhx.Group([]));
		subgroup.parentNode = group.parentNode;
		var $it0 = group.nodes.iterator();
		while( $it0.hasNext() ) {
			var node1 = $it0.next();
			if(null != node1) {
				subgroup.nodes.push(subnode = selectf(group.parentNode));
				subnode["__dhx_data__"] = Reflect.field(node1,"__dhx_data__");
			} else subgroup.nodes.push(null);
		}
	}
	dhx.DataChoice.merge(subgroups,this._choice);
	return this.createSelection(subgroups);
}
dhx.PreEnterSelection.prototype.__class__ = dhx.PreEnterSelection;
dhx.EnterSelection = function(enter,choice) {
	if( enter === $_ ) return;
	dhx.BoundSelection.call(this,enter);
	this._choice = choice;
}
dhx.EnterSelection.__name__ = ["dhx","EnterSelection"];
dhx.EnterSelection.__super__ = dhx.BoundSelection;
for(var k in dhx.BoundSelection.prototype ) dhx.EnterSelection.prototype[k] = dhx.BoundSelection.prototype[k];
dhx.EnterSelection.prototype._choice = null;
dhx.EnterSelection.prototype.createSelection = function(groups) {
	return new dhx.EnterSelection(groups,this._choice);
}
dhx.EnterSelection.prototype.exit = function() {
	return this._choice.exit();
}
dhx.EnterSelection.prototype.update = function() {
	return this._choice;
}
dhx.EnterSelection.prototype.__class__ = dhx.EnterSelection;
dhx.ExitSelection = function(exit,choice) {
	if( exit === $_ ) return;
	dhx.UnboundSelection.call(this,exit);
	this._choice = choice;
}
dhx.ExitSelection.__name__ = ["dhx","ExitSelection"];
dhx.ExitSelection.__super__ = dhx.UnboundSelection;
for(var k in dhx.UnboundSelection.prototype ) dhx.ExitSelection.prototype[k] = dhx.UnboundSelection.prototype[k];
dhx.ExitSelection.prototype._choice = null;
dhx.ExitSelection.prototype.createSelection = function(groups) {
	return new dhx.ExitSelection(groups,this._choice);
}
dhx.ExitSelection.prototype.enter = function() {
	return this._choice.enter();
}
dhx.ExitSelection.prototype.update = function() {
	return this._choice;
}
dhx.ExitSelection.prototype.__class__ = dhx.ExitSelection;
if(!thx.math) thx.math = {}
thx.math.Equations = function() { }
thx.math.Equations.__name__ = ["thx","math","Equations"];
thx.math.Equations.linear = function(v) {
	return v;
}
thx.math.Equations.polynomial = function(t,e) {
	return Math.pow(t,e);
}
thx.math.Equations.quadratic = function(t) {
	return thx.math.Equations.polynomial(t,2);
}
thx.math.Equations.cubic = function(t) {
	return thx.math.Equations.polynomial(t,3);
}
thx.math.Equations.sin = function(t) {
	return 1 - Math.cos(t * Math.PI / 2);
}
thx.math.Equations.exponential = function(t) {
	return t != 0?Math.pow(2,10 * (t - 1)) - 1e-3:0;
}
thx.math.Equations.circle = function(t) {
	return 1 - Math.sqrt(1 - t * t);
}
thx.math.Equations.elastic = function(t,a,p) {
	var s;
	if(null == p) p = 0.45;
	if(null == a) {
		a = 1;
		s = p / 4;
	} else s = p / (2 * Math.PI) / Math.asin(1 / a);
	return 1 + a * Math.pow(2,10 * -t) * Math.sin((t - s) * 2 * Math.PI / p);
}
thx.math.Equations.elasticf = function(a,p) {
	var s;
	if(null == p) p = 0.45;
	if(null == a) {
		a = 1;
		s = p / 4;
	} else s = p / (2 * Math.PI) / Math.asin(1 / a);
	return function(t) {
		return 1 + a * Math.pow(2,10 * -t) * Math.sin((t - s) * 2 * Math.PI / p);
	};
}
thx.math.Equations.back = function(t,s) {
	if(null == s) s = 1.70158;
	return t * t * ((s + 1) * t - s);
}
thx.math.Equations.backf = function(s) {
	if(null == s) s = 1.70158;
	return function(t) {
		return t * t * ((s + 1) * t - s);
	};
}
thx.math.Equations.bounce = function(t) {
	return t < 1 / 2.75?7.5625 * t * t:t < 2 / 2.75?7.5625 * (t -= 1.5 / 2.75) * t + .75:t < 2.5 / 2.75?7.5625 * (t -= 2.25 / 2.75) * t + .9375:7.5625 * (t -= 2.625 / 2.75) * t + .984375;
}
thx.math.Equations.polynomialf = function(e) {
	return function(t) {
		thx.math.Equations.polynomial(t,e);
	};
}
thx.math.Equations.prototype.__class__ = thx.math.Equations;
StringTools = function() { }
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.htmlEscape = function(s) {
	return s.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
}
StringTools.htmlUnescape = function(s) {
	return s.split("&gt;").join(">").split("&lt;").join("<").split("&amp;").join("&");
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && s.substr(0,start.length) == start;
}
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && s.substr(slen - elen,elen) == end;
}
StringTools.isSpace = function(s,pos) {
	var c = s.charCodeAt(pos);
	return c >= 9 && c <= 13 || c == 32;
}
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return s.substr(r,l - r); else return s;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return s.substr(0,l - r); else return s;
}
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
}
StringTools.rpad = function(s,c,l) {
	var sl = s.length;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		s += c.substr(0,l - sl);
		sl = l;
	} else {
		s += c;
		sl += cl;
	}
	return s;
}
StringTools.lpad = function(s,c,l) {
	var ns = "";
	var sl = s.length;
	if(sl >= l) return s;
	var cl = c.length;
	while(sl < l) if(l - sl < cl) {
		ns += c.substr(0,l - sl);
		sl = l;
	} else {
		ns += c;
		sl += cl;
	}
	return ns + s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
StringTools.fastCodeAt = function(s,index) {
	return s.cca(index);
}
StringTools.isEOF = function(c) {
	return c != c;
}
StringTools.prototype.__class__ = StringTools;
$_ = {}
js.Boot.__res = {}
js.Boot.__init();
thx.cultures.EnUS.getCulture();
{
	js.Lib.document = document;
	js.Lib.window = window;
	onerror = function(msg,url,line) {
		var f = js.Lib.onerror;
		if( f == null )
			return false;
		return f(msg,[url+":"+line]);
	}
}
{
	/*!
 * Sizzle CSS Selector Engine
 *  Copyright 2011, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){

var chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
	done = 0,
	toString = Object.prototype.toString,
	hasDuplicate = false,
	baseHasDuplicate = true,
	rBackslash = /\\/g,
	rNonWord = /\W/;

// Here we check if the JavaScript engine is using some sort of
// optimization where it does not always call our comparision
// function. If that is the case, discard the hasDuplicate value.
//   Thus far that includes Google Chrome.
[0, 0].sort(function() {
	baseHasDuplicate = false;
	return 0;
});

var Sizzle = function( selector, context, results, seed ) {
	results = results || [];
	context = context || document;

	var origContext = context;

	if ( context.nodeType !== 1 && context.nodeType !== 9 ) {
		return [];
	}
	
	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	var m, set, checkSet, extra, ret, cur, pop, i,
		prune = true,
		contextXML = Sizzle.isXML( context ),
		parts = [],
		soFar = selector;
	
	// Reset the position of the chunker regexp (start from head)
	do {
		chunker.exec( "" );
		m = chunker.exec( soFar );

		if ( m ) {
			soFar = m[3];
		
			parts.push( m[1] );
		
			if ( m[2] ) {
				extra = m[3];
				break;
			}
		}
	} while ( m );

	if ( parts.length > 1 && origPOS.exec( selector ) ) {

		if ( parts.length === 2 && Expr.relative[ parts[0] ] ) {
			set = posProcess( parts[0] + parts[1], context );

		} else {
			set = Expr.relative[ parts[0] ] ?
				[ context ] :
				Sizzle( parts.shift(), context );

			while ( parts.length ) {
				selector = parts.shift();

				if ( Expr.relative[ selector ] ) {
					selector += parts.shift();
				}
				
				set = posProcess( selector, set );
			}
		}

	} else {
		// Take a shortcut and set the context if the root selector is an ID
		// (but not if it'll be faster if the inner selector is an ID)
		if ( !seed && parts.length > 1 && context.nodeType === 9 && !contextXML &&
				Expr.match.ID.test(parts[0]) && !Expr.match.ID.test(parts[parts.length - 1]) ) {

			ret = Sizzle.find( parts.shift(), context, contextXML );
			context = ret.expr ?
				Sizzle.filter( ret.expr, ret.set )[0] :
				ret.set[0];
		}

		if ( context ) {
			ret = seed ?
				{ expr: parts.pop(), set: makeArray(seed) } :
				Sizzle.find( parts.pop(), parts.length === 1 && (parts[0] === "~" || parts[0] === "+") && context.parentNode ? context.parentNode : context, contextXML );

			set = ret.expr ?
				Sizzle.filter( ret.expr, ret.set ) :
				ret.set;

			if ( parts.length > 0 ) {
				checkSet = makeArray( set );

			} else {
				prune = false;
			}

			while ( parts.length ) {
				cur = parts.pop();
				pop = cur;

				if ( !Expr.relative[ cur ] ) {
					cur = "";
				} else {
					pop = parts.pop();
				}

				if ( pop == null ) {
					pop = context;
				}

				Expr.relative[ cur ]( checkSet, pop, contextXML );
			}

		} else {
			checkSet = parts = [];
		}
	}

	if ( !checkSet ) {
		checkSet = set;
	}

	if ( !checkSet ) {
		Sizzle.error( cur || selector );
	}

	if ( toString.call(checkSet) === "[object Array]" ) {
		if ( !prune ) {
			results.push.apply( results, checkSet );

		} else if ( context && context.nodeType === 1 ) {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && (checkSet[i] === true || checkSet[i].nodeType === 1 && Sizzle.contains(context, checkSet[i])) ) {
					results.push( set[i] );
				}
			}

		} else {
			for ( i = 0; checkSet[i] != null; i++ ) {
				if ( checkSet[i] && checkSet[i].nodeType === 1 ) {
					results.push( set[i] );
				}
			}
		}

	} else {
		makeArray( checkSet, results );
	}

	if ( extra ) {
		Sizzle( extra, origContext, results, seed );
		Sizzle.uniqueSort( results );
	}

	return results;
};

Sizzle.uniqueSort = function( results ) {
	if ( sortOrder ) {
		hasDuplicate = baseHasDuplicate;
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			for ( var i = 1; i < results.length; i++ ) {
				if ( results[i] === results[ i - 1 ] ) {
					results.splice( i--, 1 );
				}
			}
		}
	}

	return results;
};

Sizzle.matches = function( expr, set ) {
	return Sizzle( expr, null, null, set );
};

Sizzle.matchesSelector = function( node, expr ) {
	return Sizzle( expr, null, null, [node] ).length > 0;
};

Sizzle.find = function( expr, context, isXML ) {
	var set;

	if ( !expr ) {
		return [];
	}

	for ( var i = 0, l = Expr.order.length; i < l; i++ ) {
		var match,
			type = Expr.order[i];
		
		if ( (match = Expr.leftMatch[ type ].exec( expr )) ) {
			var left = match[1];
			match.splice( 1, 1 );

			if ( left.substr( left.length - 1 ) !== "\\" ) {
				match[1] = (match[1] || "").replace( rBackslash, "" );
				set = Expr.find[ type ]( match, context, isXML );

				if ( set != null ) {
					expr = expr.replace( Expr.match[ type ], "" );
					break;
				}
			}
		}
	}

	if ( !set ) {
		set = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( "*" ) :
			[];
	}

	return { set: set, expr: expr };
};

Sizzle.filter = function( expr, set, inplace, not ) {
	var match, anyFound,
		old = expr,
		result = [],
		curLoop = set,
		isXMLFilter = set && set[0] && Sizzle.isXML( set[0] );

	while ( expr && set.length ) {
		for ( var type in Expr.filter ) {
			if ( (match = Expr.leftMatch[ type ].exec( expr )) != null && match[2] ) {
				var found, item,
					filter = Expr.filter[ type ],
					left = match[1];

				anyFound = false;

				match.splice(1,1);

				if ( left.substr( left.length - 1 ) === "\\" ) {
					continue;
				}

				if ( curLoop === result ) {
					result = [];
				}

				if ( Expr.preFilter[ type ] ) {
					match = Expr.preFilter[ type ]( match, curLoop, inplace, result, not, isXMLFilter );

					if ( !match ) {
						anyFound = found = true;

					} else if ( match === true ) {
						continue;
					}
				}

				if ( match ) {
					for ( var i = 0; (item = curLoop[i]) != null; i++ ) {
						if ( item ) {
							found = filter( item, match, i, curLoop );
							var pass = not ^ !!found;

							if ( inplace && found != null ) {
								if ( pass ) {
									anyFound = true;

								} else {
									curLoop[i] = false;
								}

							} else if ( pass ) {
								result.push( item );
								anyFound = true;
							}
						}
					}
				}

				if ( found !== undefined ) {
					if ( !inplace ) {
						curLoop = result;
					}

					expr = expr.replace( Expr.match[ type ], "" );

					if ( !anyFound ) {
						return [];
					}

					break;
				}
			}
		}

		// Improper expression
		if ( expr === old ) {
			if ( anyFound == null ) {
				Sizzle.error( expr );

			} else {
				break;
			}
		}

		old = expr;
	}

	return curLoop;
};

Sizzle.error = function( msg ) {
	throw "Syntax error, unrecognized expression: " + msg;
};

var Expr = Sizzle.selectors = {
	order: [ "ID", "NAME", "TAG" ],

	match: {
		ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
		NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
		ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
		TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
		CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
		POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
		PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
	},

	leftMatch: {},

	attrMap: {
		"class": "className",
		"for": "htmlFor"
	},

	attrHandle: {
		href: function( elem ) {
			return elem.getAttribute( "href" );
		},
		type: function( elem ) {
			return elem.getAttribute( "type" );
		}
	},

	relative: {
		"+": function(checkSet, part){
			var isPartStr = typeof part === "string",
				isTag = isPartStr && !rNonWord.test( part ),
				isPartStrNotTag = isPartStr && !isTag;

			if ( isTag ) {
				part = part.toLowerCase();
			}

			for ( var i = 0, l = checkSet.length, elem; i < l; i++ ) {
				if ( (elem = checkSet[i]) ) {
					while ( (elem = elem.previousSibling) && elem.nodeType !== 1 ) {}

					checkSet[i] = isPartStrNotTag || elem && elem.nodeName.toLowerCase() === part ?
						elem || false :
						elem === part;
				}
			}

			if ( isPartStrNotTag ) {
				Sizzle.filter( part, checkSet, true );
			}
		},

		">": function( checkSet, part ) {
			var elem,
				isPartStr = typeof part === "string",
				i = 0,
				l = checkSet.length;

			if ( isPartStr && !rNonWord.test( part ) ) {
				part = part.toLowerCase();

				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						var parent = elem.parentNode;
						checkSet[i] = parent.nodeName.toLowerCase() === part ? parent : false;
					}
				}

			} else {
				for ( ; i < l; i++ ) {
					elem = checkSet[i];

					if ( elem ) {
						checkSet[i] = isPartStr ?
							elem.parentNode :
							elem.parentNode === part;
					}
				}

				if ( isPartStr ) {
					Sizzle.filter( part, checkSet, true );
				}
			}
		},

		"": function(checkSet, part, isXML){
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "parentNode", part, doneName, checkSet, nodeCheck, isXML );
		},

		"~": function( checkSet, part, isXML ) {
			var nodeCheck,
				doneName = done++,
				checkFn = dirCheck;

			if ( typeof part === "string" && !rNonWord.test( part ) ) {
				part = part.toLowerCase();
				nodeCheck = part;
				checkFn = dirNodeCheck;
			}

			checkFn( "previousSibling", part, doneName, checkSet, nodeCheck, isXML );
		}
	},

	find: {
		ID: function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		},

		NAME: function( match, context ) {
			if ( typeof context.getElementsByName !== "undefined" ) {
				var ret = [],
					results = context.getElementsByName( match[1] );

				for ( var i = 0, l = results.length; i < l; i++ ) {
					if ( results[i].getAttribute("name") === match[1] ) {
						ret.push( results[i] );
					}
				}

				return ret.length === 0 ? null : ret;
			}
		},

		TAG: function( match, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( match[1] );
			}
		}
	},
	preFilter: {
		CLASS: function( match, curLoop, inplace, result, not, isXML ) {
			match = " " + match[1].replace( rBackslash, "" ) + " ";

			if ( isXML ) {
				return match;
			}

			for ( var i = 0, elem; (elem = curLoop[i]) != null; i++ ) {
				if ( elem ) {
					if ( not ^ (elem.className && (" " + elem.className + " ").replace(/[\t\n\r]/g, " ").indexOf(match) >= 0) ) {
						if ( !inplace ) {
							result.push( elem );
						}

					} else if ( inplace ) {
						curLoop[i] = false;
					}
				}
			}

			return false;
		},

		ID: function( match ) {
			return match[1].replace( rBackslash, "" );
		},

		TAG: function( match, curLoop ) {
			return match[1].replace( rBackslash, "" ).toLowerCase();
		},

		CHILD: function( match ) {
			if ( match[1] === "nth" ) {
				if ( !match[2] ) {
					Sizzle.error( match[0] );
				}

				match[2] = match[2].replace(/^\+|\s*/g, '');

				// parse equations like 'even', 'odd', '5', '2n', '3n+2', '4n-1', '-n+6'
				var test = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
					match[2] === "even" && "2n" || match[2] === "odd" && "2n+1" ||
					!/\D/.test( match[2] ) && "0n+" + match[2] || match[2]);

				// calculate the numbers (first)n+(last) including if they are negative
				match[2] = (test[1] + (test[2] || 1)) - 0;
				match[3] = test[3] - 0;
			}
			else if ( match[2] ) {
				Sizzle.error( match[0] );
			}

			// TODO: Move to normal caching system
			match[0] = done++;

			return match;
		},

		ATTR: function( match, curLoop, inplace, result, not, isXML ) {
			var name = match[1] = match[1].replace( rBackslash, "" );
			
			if ( !isXML && Expr.attrMap[name] ) {
				match[1] = Expr.attrMap[name];
			}

			// Handle if an un-quoted value was used
			match[4] = ( match[4] || match[5] || "" ).replace( rBackslash, "" );

			if ( match[2] === "~=" ) {
				match[4] = " " + match[4] + " ";
			}

			return match;
		},

		PSEUDO: function( match, curLoop, inplace, result, not ) {
			if ( match[1] === "not" ) {
				// If we're dealing with a complex expression, or a simple one
				if ( ( chunker.exec(match[3]) || "" ).length > 1 || /^\w/.test(match[3]) ) {
					match[3] = Sizzle(match[3], null, null, curLoop);

				} else {
					var ret = Sizzle.filter(match[3], curLoop, inplace, true ^ not);

					if ( !inplace ) {
						result.push.apply( result, ret );
					}

					return false;
				}

			} else if ( Expr.match.POS.test( match[0] ) || Expr.match.CHILD.test( match[0] ) ) {
				return true;
			}
			
			return match;
		},

		POS: function( match ) {
			match.unshift( true );

			return match;
		}
	},
	
	filters: {
		enabled: function( elem ) {
			return elem.disabled === false && elem.type !== "hidden";
		},

		disabled: function( elem ) {
			return elem.disabled === true;
		},

		checked: function( elem ) {
			return elem.checked === true;
		},
		
		selected: function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}
			
			return elem.selected === true;
		},

		parent: function( elem ) {
			return !!elem.firstChild;
		},

		empty: function( elem ) {
			return !elem.firstChild;
		},

		has: function( elem, i, match ) {
			return !!Sizzle( match[3], elem ).length;
		},

		header: function( elem ) {
			return (/h\d/i).test( elem.nodeName );
		},

		text: function( elem ) {
			var attr = elem.getAttribute( "type" ), type = elem.type;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return "text" === type && ( attr === type || attr === null );
		},

		radio: function( elem ) {
			return "radio" === elem.type;
		},

		checkbox: function( elem ) {
			return "checkbox" === elem.type;
		},

		file: function( elem ) {
			return "file" === elem.type;
		},
		password: function( elem ) {
			return "password" === elem.type;
		},

		submit: function( elem ) {
			return "submit" === elem.type;
		},

		image: function( elem ) {
			return "image" === elem.type;
		},

		reset: function( elem ) {
			return "reset" === elem.type;
		},

		button: function( elem ) {
			return "button" === elem.type || elem.nodeName.toLowerCase() === "button";
		},

		input: function( elem ) {
			return (/input|select|textarea|button/i).test( elem.nodeName );
		}
	},
	setFilters: {
		first: function( elem, i ) {
			return i === 0;
		},

		last: function( elem, i, match, array ) {
			return i === array.length - 1;
		},

		even: function( elem, i ) {
			return i % 2 === 0;
		},

		odd: function( elem, i ) {
			return i % 2 === 1;
		},

		lt: function( elem, i, match ) {
			return i < match[3] - 0;
		},

		gt: function( elem, i, match ) {
			return i > match[3] - 0;
		},

		nth: function( elem, i, match ) {
			return match[3] - 0 === i;
		},

		eq: function( elem, i, match ) {
			return match[3] - 0 === i;
		}
	},
	filter: {
		PSEUDO: function( elem, match, i, array ) {
			var name = match[1],
				filter = Expr.filters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );

			} else if ( name === "contains" ) {
				return (elem.textContent || elem.innerText || Sizzle.getText([ elem ]) || "").indexOf(match[3]) >= 0;

			} else if ( name === "not" ) {
				var not = match[3];

				for ( var j = 0, l = not.length; j < l; j++ ) {
					if ( not[j] === elem ) {
						return false;
					}
				}

				return true;

			} else {
				Sizzle.error( name );
			}
		},

		CHILD: function( elem, match ) {
			var type = match[1],
				node = elem;

			switch ( type ) {
				case "only":
				case "first":
					while ( (node = node.previousSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					if ( type === "first" ) {
						return true;
					}

					node = elem;

				case "last":
					while ( (node = node.nextSibling) )	 {
						if ( node.nodeType === 1 ) {
							return false;
						}
					}

					return true;

				case "nth":
					var first = match[2],
						last = match[3];

					if ( first === 1 && last === 0 ) {
						return true;
					}
					
					var doneName = match[0],
						parent = elem.parentNode;
	
					if ( parent && (parent.sizcache !== doneName || !elem.nodeIndex) ) {
						var count = 0;
						
						for ( node = parent.firstChild; node; node = node.nextSibling ) {
							if ( node.nodeType === 1 ) {
								node.nodeIndex = ++count;
							}
						}

						parent.sizcache = doneName;
					}
					
					var diff = elem.nodeIndex - last;

					if ( first === 0 ) {
						return diff === 0;

					} else {
						return ( diff % first === 0 && diff / first >= 0 );
					}
			}
		},

		ID: function( elem, match ) {
			return elem.nodeType === 1 && elem.getAttribute("id") === match;
		},

		TAG: function( elem, match ) {
			return (match === "*" && elem.nodeType === 1) || elem.nodeName.toLowerCase() === match;
		},
		
		CLASS: function( elem, match ) {
			return (" " + (elem.className || elem.getAttribute("class")) + " ")
				.indexOf( match ) > -1;
		},

		ATTR: function( elem, match ) {
			var name = match[1],
				result = Expr.attrHandle[ name ] ?
					Expr.attrHandle[ name ]( elem ) :
					elem[ name ] != null ?
						elem[ name ] :
						elem.getAttribute( name ),
				value = result + "",
				type = match[2],
				check = match[4];

			return result == null ?
				type === "!=" :
				type === "=" ?
				value === check :
				type === "*=" ?
				value.indexOf(check) >= 0 :
				type === "~=" ?
				(" " + value + " ").indexOf(check) >= 0 :
				!check ?
				value && result !== false :
				type === "!=" ?
				value !== check :
				type === "^=" ?
				value.indexOf(check) === 0 :
				type === "$=" ?
				value.substr(value.length - check.length) === check :
				type === "|=" ?
				value === check || value.substr(0, check.length + 1) === check + "-" :
				false;
		},

		POS: function( elem, match, i, array ) {
			var name = match[2],
				filter = Expr.setFilters[ name ];

			if ( filter ) {
				return filter( elem, i, match, array );
			}
		}
	}
};

var origPOS = Expr.match.POS,
	fescape = function(all, num){
		return "\\" + (num - 0 + 1);
	};

for ( var type in Expr.match ) {
	Expr.match[ type ] = new RegExp( Expr.match[ type ].source + (/(?![^\[]*\])(?![^\(]*\))/.source) );
	Expr.leftMatch[ type ] = new RegExp( /(^(?:.|\r|\n)*?)/.source + Expr.match[ type ].source.replace(/\\(\d+)/g, fescape) );
}

var makeArray = function( array, results ) {
	array = Array.prototype.slice.call( array, 0 );

	if ( results ) {
		results.push.apply( results, array );
		return results;
	}
	
	return array;
};

// Perform a simple check to determine if the browser is capable of
// converting a NodeList to an array using builtin methods.
// Also verifies that the returned array holds DOM nodes
// (which is not the case in the Blackberry browser)
try {
	Array.prototype.slice.call( document.documentElement.childNodes, 0 )[0].nodeType;

// Provide a fallback method if it does not work
} catch( e ) {
	makeArray = function( array, results ) {
		var i = 0,
			ret = results || [];

		if ( toString.call(array) === "[object Array]" ) {
			Array.prototype.push.apply( ret, array );

		} else {
			if ( typeof array.length === "number" ) {
				for ( var l = array.length; i < l; i++ ) {
					ret.push( array[i] );
				}

			} else {
				for ( ; array[i]; i++ ) {
					ret.push( array[i] );
				}
			}
		}

		return ret;
	};
}

var sortOrder, siblingCheck;

if ( document.documentElement.compareDocumentPosition ) {
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		if ( !a.compareDocumentPosition || !b.compareDocumentPosition ) {
			return a.compareDocumentPosition ? -1 : 1;
		}

		return a.compareDocumentPosition(b) & 4 ? -1 : 1;
	};

} else {
	sortOrder = function( a, b ) {
		var al, bl,
			ap = [],
			bp = [],
			aup = a.parentNode,
			bup = b.parentNode,
			cur = aup;

		// The nodes are identical, we can exit early
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// If the nodes are siblings (or identical) we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );

		// If no parents were found then the nodes are disconnected
		} else if ( !aup ) {
			return -1;

		} else if ( !bup ) {
			return 1;
		}

		// Otherwise they're somewhere else in the tree so we need
		// to build up a full list of the parentNodes for comparison
		while ( cur ) {
			ap.unshift( cur );
			cur = cur.parentNode;
		}

		cur = bup;

		while ( cur ) {
			bp.unshift( cur );
			cur = cur.parentNode;
		}

		al = ap.length;
		bl = bp.length;

		// Start walking down the tree looking for a discrepancy
		for ( var i = 0; i < al && i < bl; i++ ) {
			if ( ap[i] !== bp[i] ) {
				return siblingCheck( ap[i], bp[i] );
			}
		}

		// We ended someplace up the tree so do a sibling check
		return i === al ?
			siblingCheck( a, bp[i], -1 ) :
			siblingCheck( ap[i], b, 1 );
	};

	siblingCheck = function( a, b, ret ) {
		if ( a === b ) {
			return ret;
		}

		var cur = a.nextSibling;

		while ( cur ) {
			if ( cur === b ) {
				return -1;
			}

			cur = cur.nextSibling;
		}

		return 1;
	};
}

// Utility function for retreiving the text value of an array of DOM nodes
Sizzle.getText = function( elems ) {
	var ret = "", elem;

	for ( var i = 0; elems[i]; i++ ) {
		elem = elems[i];

		// Get the text from text nodes and CDATA nodes
		if ( elem.nodeType === 3 || elem.nodeType === 4 ) {
			ret += elem.nodeValue;

		// Traverse everything else, except comment nodes
		} else if ( elem.nodeType !== 8 ) {
			ret += Sizzle.getText( elem.childNodes );
		}
	}

	return ret;
};

// Check to see if the browser returns elements by name when
// querying by getElementById (and provide a workaround)
(function(){
	// We're going to inject a fake input element with a specified name
	var form = document.createElement("div"),
		id = "script" + (new Date()).getTime(),
		root = document.documentElement;

	form.innerHTML = "<a name='" + id + "'/>";

	// Inject it into the root element, check its status, and remove it quickly
	root.insertBefore( form, root.firstChild );

	// The workaround has to do additional checks after a getElementById
	// Which slows things down for other browsers (hence the branching)
	if ( document.getElementById( id ) ) {
		Expr.find.ID = function( match, context, isXML ) {
			if ( typeof context.getElementById !== "undefined" && !isXML ) {
				var m = context.getElementById(match[1]);

				return m ?
					m.id === match[1] || typeof m.getAttributeNode !== "undefined" && m.getAttributeNode("id").nodeValue === match[1] ?
						[m] :
						undefined :
					[];
			}
		};

		Expr.filter.ID = function( elem, match ) {
			var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");

			return elem.nodeType === 1 && node && node.nodeValue === match;
		};
	}

	root.removeChild( form );

	// release memory in IE
	root = form = null;
})();

(function(){
	// Check to see if the browser returns only elements
	// when doing getElementsByTagName("*")

	// Create a fake element
	var div = document.createElement("div");
	div.appendChild( document.createComment("") );

	// Make sure no comments are found
	if ( div.getElementsByTagName("*").length > 0 ) {
		Expr.find.TAG = function( match, context ) {
			var results = context.getElementsByTagName( match[1] );

			// Filter out possible comments
			if ( match[1] === "*" ) {
				var tmp = [];

				for ( var i = 0; results[i]; i++ ) {
					if ( results[i].nodeType === 1 ) {
						tmp.push( results[i] );
					}
				}

				results = tmp;
			}

			return results;
		};
	}

	// Check to see if an attribute returns normalized href attributes
	div.innerHTML = "<a href='#'></a>";

	if ( div.firstChild && typeof div.firstChild.getAttribute !== "undefined" &&
			div.firstChild.getAttribute("href") !== "#" ) {

		Expr.attrHandle.href = function( elem ) {
			return elem.getAttribute( "href", 2 );
		};
	}

	// release memory in IE
	div = null;
})();

if ( document.querySelectorAll ) {
	(function(){
		var oldSizzle = Sizzle,
			div = document.createElement("div"),
			id = "__sizzle__";

		div.innerHTML = "<p class='TEST'></p>";

		// Safari can't handle uppercase or unicode characters when
		// in quirks mode.
		if ( div.querySelectorAll && div.querySelectorAll(".TEST").length === 0 ) {
			return;
		}
	
		Sizzle = function( query, context, extra, seed ) {
			context = context || document;

			// Only use querySelectorAll on non-XML documents
			// (ID selectors don't work in non-HTML documents)
			if ( !seed && !Sizzle.isXML(context) ) {
				// See if we find a selector to speed up
				var match = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec( query );
				
				if ( match && (context.nodeType === 1 || context.nodeType === 9) ) {
					// Speed-up: Sizzle("TAG")
					if ( match[1] ) {
						return makeArray( context.getElementsByTagName( query ), extra );
					
					// Speed-up: Sizzle(".CLASS")
					} else if ( match[2] && Expr.find.CLASS && context.getElementsByClassName ) {
						return makeArray( context.getElementsByClassName( match[2] ), extra );
					}
				}
				
				if ( context.nodeType === 9 ) {
					// Speed-up: Sizzle("body")
					// The body element only exists once, optimize finding it
					if ( query === "body" && context.body ) {
						return makeArray( [ context.body ], extra );
						
					// Speed-up: Sizzle("#ID")
					} else if ( match && match[3] ) {
						var elem = context.getElementById( match[3] );

						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id === match[3] ) {
								return makeArray( [ elem ], extra );
							}
							
						} else {
							return makeArray( [], extra );
						}
					}
					
					try {
						return makeArray( context.querySelectorAll(query), extra );
					} catch(qsaError) {}

				// qSA works strangely on Element-rooted queries
				// We can work around this by specifying an extra ID on the root
				// and working up from there (Thanks to Andrew Dupont for the technique)
				// IE 8 doesn't work on object elements
				} else if ( context.nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
					var oldContext = context,
						old = context.getAttribute( "id" ),
						nid = old || id,
						hasParent = context.parentNode,
						relativeHierarchySelector = /^\s*[+~]/.test( query );

					if ( !old ) {
						context.setAttribute( "id", nid );
					} else {
						nid = nid.replace( /'/g, "\\$&" );
					}
					if ( relativeHierarchySelector && hasParent ) {
						context = context.parentNode;
					}

					try {
						if ( !relativeHierarchySelector || hasParent ) {
							return makeArray( context.querySelectorAll( "[id='" + nid + "'] " + query ), extra );
						}

					} catch(pseudoError) {
					} finally {
						if ( !old ) {
							oldContext.removeAttribute( "id" );
						}
					}
				}
			}
		
			return oldSizzle(query, context, extra, seed);
		};

		for ( var prop in oldSizzle ) {
			Sizzle[ prop ] = oldSizzle[ prop ];
		}

		// release memory in IE
		div = null;
	})();
}

(function(){
	var html = document.documentElement,
		matches = html.matchesSelector || html.mozMatchesSelector || html.webkitMatchesSelector || html.msMatchesSelector;

	if ( matches ) {
		// Check to see if it's possible to do matchesSelector
		// on a disconnected node (IE 9 fails this)
		var disconnectedMatch = !matches.call( document.createElement( "div" ), "div" ),
			pseudoWorks = false;

		try {
			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( document.documentElement, "[test!='']:sizzle" );
	
		} catch( pseudoError ) {
			pseudoWorks = true;
		}

		Sizzle.matchesSelector = function( node, expr ) {
			// Make sure that attribute selectors are quoted
			expr = expr.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");

			if ( !Sizzle.isXML( node ) ) {
				try {
					if ( pseudoWorks || !Expr.match.PSEUDO.test( expr ) && !/!=/.test( expr ) ) {
						var ret = matches.call( node, expr );

						// IE 9's matchesSelector returns false on disconnected nodes
						if ( ret || !disconnectedMatch ||
								// As well, disconnected nodes are said to be in a document
								// fragment in IE 9, so check for that
								node.document && node.document.nodeType !== 11 ) {
							return ret;
						}
					}
				} catch(e) {}
			}

			return Sizzle(expr, null, null, [node]).length > 0;
		};
	}
})();

(function(){
	var div = document.createElement("div");

	div.innerHTML = "<div class='test e'></div><div class='test'></div>";

	// Opera can't find a second classname (in 9.6)
	// Also, make sure that getElementsByClassName actually exists
	if ( !div.getElementsByClassName || div.getElementsByClassName("e").length === 0 ) {
		return;
	}

	// Safari caches class attributes, doesn't catch changes (in 3.2)
	div.lastChild.className = "e";

	if ( div.getElementsByClassName("e").length === 1 ) {
		return;
	}
	
	Expr.order.splice(1, 0, "CLASS");
	Expr.find.CLASS = function( match, context, isXML ) {
		if ( typeof context.getElementsByClassName !== "undefined" && !isXML ) {
			return context.getElementsByClassName(match[1]);
		}
	};

	// release memory in IE
	div = null;
})();

function dirNodeCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;

			elem = elem[dir];

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 && !isXML ){
					elem.sizcache = doneName;
					elem.sizset = i;
				}

				if ( elem.nodeName.toLowerCase() === cur ) {
					match = elem;
					break;
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

function dirCheck( dir, cur, doneName, checkSet, nodeCheck, isXML ) {
	for ( var i = 0, l = checkSet.length; i < l; i++ ) {
		var elem = checkSet[i];

		if ( elem ) {
			var match = false;
			
			elem = elem[dir];

			while ( elem ) {
				if ( elem.sizcache === doneName ) {
					match = checkSet[elem.sizset];
					break;
				}

				if ( elem.nodeType === 1 ) {
					if ( !isXML ) {
						elem.sizcache = doneName;
						elem.sizset = i;
					}

					if ( typeof cur !== "string" ) {
						if ( elem === cur ) {
							match = true;
							break;
						}

					} else if ( Sizzle.filter( cur, [elem] ).length > 0 ) {
						match = elem;
						break;
					}
				}

				elem = elem[dir];
			}

			checkSet[i] = match;
		}
	}
}

if ( document.documentElement.contains ) {
	Sizzle.contains = function( a, b ) {
		return a !== b && (a.contains ? a.contains(b) : true);
	};

} else if ( document.documentElement.compareDocumentPosition ) {
	Sizzle.contains = function( a, b ) {
		return !!(a.compareDocumentPosition(b) & 16);
	};

} else {
	Sizzle.contains = function() {
		return false;
	};
}

Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = (elem ? elem.ownerDocument || elem : 0).documentElement;

	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

var posProcess = function( selector, context ) {
	var match,
		tmpSet = [],
		later = "",
		root = context.nodeType ? [context] : context;

	// Position selectors must be done after the filter
	// And so must :not(positional) so we move all PSEUDOs to the end
	while ( (match = Expr.match.PSEUDO.exec( selector )) ) {
		later += match[0];
		selector = selector.replace( Expr.match.PSEUDO, "" );
	}

	selector = Expr.relative[selector] ? selector + "*" : selector;

	for ( var i = 0, l = root.length; i < l; i++ ) {
		Sizzle( selector, root[i], tmpSet );
	}

	return Sizzle.filter( later, tmpSet );
};

// EXPOSE

window.Sizzle = Sizzle;

})();;
	var s = (window.Sizzle || (jQuery && jQuery.find) || ($ && $.find));
	dhx.Sizzle = s;
	dhx.Sizzle.select = s;
}
{
	Math.__name__ = ["Math"];
	Math.NaN = Number["NaN"];
	Math.NEGATIVE_INFINITY = Number["NEGATIVE_INFINITY"];
	Math.POSITIVE_INFINITY = Number["POSITIVE_INFINITY"];
	Math.isFinite = function(i) {
		return isFinite(i);
	};
	Math.isNaN = function(i) {
		return isNaN(i);
	};
}
thx.languages.En.getLanguage();
{
	var useragent = dhx.ClientHost.userAgent(), hasnavigator = dhx.ClientHost.hasNavigator(), pattern;
	dhx.ClientHost.host = !hasnavigator?dhx.HostType.UnknownServer:typeof module !== 'undefined' && module.exports?dhx.HostType.NodeJs:(pattern = new EReg("MSIE(?:/| )(\\S*);","")).match(useragent)?dhx.HostType.IE(pattern.matched(1)):(pattern = new EReg("Firefox(?:/| )(\\S*)","")).match(useragent)?dhx.HostType.Firefox(pattern.matched(1)):(pattern = new EReg("Chrome(?:/| )(\\S*)","")).match(useragent)?dhx.HostType.Chrome(pattern.matched(1)):(pattern = new EReg("Version(?:/| )(\\S*) Safari(?:/| )(\\S*)","")).match(useragent)?dhx.HostType.Safari(pattern.matched(1)):(pattern = new EReg("Opera(?:/| )(\\S*)","")).match(useragent)?dhx.HostType.Opera(pattern.matched(1)):dhx.HostType.Unknown(useragent);
	dhx.ClientHost.os = !hasnavigator?dhx.OSType.UnknownOs:(pattern = new EReg("Windows NT\\s+(\\d+\\.\\d+)","")).match(useragent)?(function($this) {
		var $r;
		var version = (function($this) {
			var $r;
			switch(pattern.matched(1)) {
			case "5.1":
				$r = "XP";
				break;
			case "5.2":
				$r = "2003/XP x64";
				break;
			case "6.0":
				$r = "Vista";
				break;
			case "6.1":
				$r = "7";
				break;
			case "6.2":
				$r = "8";
				break;
			default:
				$r = "unknown";
			}
			return $r;
		}($this));
		$r = dhx.OSType.Windows(version);
		return $r;
	}(this)):new EReg("Mac OS X","").match(useragent)?dhx.OSType.Mac:new EReg("(iPhone|iPad|iPod)","").match(useragent)?dhx.OSType.IOs:new EReg("Linux","").match(useragent)?dhx.OSType.Linux:new EReg("Android","").match(useragent)?dhx.OSType.Android:dhx.OSType.UnknownOs;
	dhx.ClientHost.environment = (function($this) {
		var $r;
		switch( (dhx.ClientHost.host)[1] ) {
		case 0:
			$r = dhx.EnvironmentType.Server;
			break;
		case 1:
			$r = dhx.EnvironmentType.Server;
			break;
		case 2:
		case 6:
		case 3:
			$r = dhx.EnvironmentType.Desktop;
			break;
		case 4:
			$r = (function($this) {
				var $r;
				switch( (dhx.ClientHost.os)[1] ) {
				case 1:
					$r = dhx.EnvironmentType.Mobile;
					break;
				default:
					$r = dhx.EnvironmentType.Desktop;
				}
				return $r;
			}($this));
			break;
		case 5:
			$r = (function($this) {
				var $r;
				switch( (dhx.ClientHost.os)[1] ) {
				case 2:
					$r = dhx.EnvironmentType.Mobile;
					break;
				default:
					$r = dhx.EnvironmentType.Desktop;
				}
				return $r;
			}($this));
			break;
		case 7:
			$r = (function($this) {
				var $r;
				switch( (dhx.ClientHost.os)[1] ) {
				case 5:
					$r = dhx.EnvironmentType.UnknownEnvironment;
					break;
				default:
					$r = dhx.EnvironmentType.Desktop;
				}
				return $r;
			}($this));
			break;
		}
		return $r;
	}(this));
}
window.requestAnimationFrame = window.requestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.oRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(callback) { setTimeout(callback, 1000 / 60); } ;
{
	String.prototype.__class__ = String;
	String.__name__ = ["String"];
	Array.prototype.__class__ = Array;
	Array.__name__ = ["Array"];
	Int = { __name__ : ["Int"]};
	Dynamic = { __name__ : ["Dynamic"]};
	Float = Number;
	Float.__name__ = ["Float"];
	Bool = { __ename__ : ["Bool"]};
	Class = { __name__ : ["Class"]};
	Enum = { };
	Void = { __ename__ : ["Void"]};
}
{
	var d = Date;
	d.now = function() {
		return new Date();
	};
	d.fromTime = function(t) {
		var d1 = new Date();
		d1["setTime"](t);
		return d1;
	};
	d.fromString = function(s) {
		switch(s.length) {
		case 8:
			var k = s.split(":");
			var d1 = new Date();
			d1["setTime"](0);
			d1["setUTCHours"](k[0]);
			d1["setUTCMinutes"](k[1]);
			d1["setUTCSeconds"](k[2]);
			return d1;
		case 10:
			var k = s.split("-");
			return new Date(k[0],k[1] - 1,k[2],0,0,0);
		case 19:
			var k = s.split(" ");
			var y = k[0].split("-");
			var t = k[1].split(":");
			return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
		default:
			throw "Invalid date format : " + s;
		}
	};
	d.prototype["toString"] = function() {
		var date = this;
		var m = date.getMonth() + 1;
		var d1 = date.getDate();
		var h = date.getHours();
		var mi = date.getMinutes();
		var s = date.getSeconds();
		return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d1 < 10?"0" + d1:"" + d1) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
	};
	d.prototype.__class__ = d;
	d.__name__ = ["Date"];
}
dhx.Access.FIELD_DATA = "__dhx_data__";
dhx.Access.FIELD_EVENT = "__dhx_on__";
dhx.Access.FIELD_TRANSITION = "__dhx_transition__";
dhx.AccessAttribute.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
js.Lib.onerror = null;
dhx.Dom.doc = (function() {
	var g = new dhx.Group([js.Lib.document]), gs = dhx.Selection.create([g]);
	g.parentNode = gs.parentNode = js.Lib.document.documentElement;
	return gs;
})();
dhx.Dom.selectionEngine = new dhx.SizzleEngine();
dhx.Namespace.prefix = (function() {
	var h = new Hash();
	h.set("svg","http://www.w3.org/2000/svg");
	h.set("xhtml","http://www.w3.org/1999/xhtml");
	h.set("xlink","http://www.w3.org/1999/xlink");
	h.set("xml","http://www.w3.org/XML/1998/namespace");
	h.set("xmlns","http://www.w3.org/2000/xmlns/");
	return h;
})();
Ints._reparse = new EReg("^([+-])?\\d+$","");
Dates._reparse = new EReg("^\\d{4}-\\d\\d-\\d\\d(( |T)\\d\\d:\\d\\d(:\\d\\d(\\.\\d{1,3})?)?)?Z?$","");
dhx.AccessStyle.refloat = new EReg("(\\d+(?:\\.\\d+)?)","");
Strings._re = new EReg("[{](\\d+)(?::[^}]*)?[}]","m");
Strings._reSplitWC = new EReg("(\r\n|\n\r|\n|\r)","g");
Strings._reReduceWS = new EReg("\\s+","");
Strings._reStripTags = new EReg("(<[a-z]+[^>/]*/?>|</[a-z]+>)","i");
Strings._reFormat = new EReg("{(\\d+)(?::([a-zA-Z]+))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?(?:,([^\"',}]+|'[^']+'|\"[^\"]+\"))?}","m");
Strings._reCollapse = new EReg("\\s+","g");
Strings.__ucwordsPattern = new EReg("[^a-zA-Z]([a-z])","");
Strings.__ucwordswsPattern = new EReg("\\s([a-z])","");
Strings.__alphaNumPattern = new EReg("^[a-z0-9]+$","i");
Strings.__digitsPattern = new EReg("^[0-9]+$","");
Strings._reInterpolateNumber = new EReg("[-+]?(?:\\d+\\.\\d+|\\d+\\.|\\.\\d+|\\d+)(?:[eE][-]?\\d+)?","");
dhx.AccessClassed._escapePattern = new EReg("[*+?|{[()^$.# \\\\]","");
thx.error.Error.errorPositionPattern = "{0}.{1}({2}): ";
dhx.Timer.timeout = 0;
dhx.Timer.queue = null;
dhx.Timer.interval = 0;
dhx.Timer._step = dhx.Timer.step;
dhx.BaseTransition._id = 0;
dhx.BaseTransition._inheritid = 0;
DateTools.DAYS_OF_MONTH = [31,28,31,30,31,30,31,31,30,31,30,31];
Floats._reparse = new EReg("^(\\+|-)?\\d+(\\.\\d+)?(e-?\\d+)?$","");
dhx.util.Strings._reInterpolateNumber = new EReg("[-+]?(?:\\d+\\.\\d+|\\d+\\.|\\.\\d+|\\d+)(?:[eE][-]?\\d+)?","");
dhx.util.Strings._reCollapse = new EReg("\\s+","g");
BracketDemo.main()