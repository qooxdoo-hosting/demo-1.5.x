(function(){

if (!window.qx) window.qx = {};

qx.$$start = new Date();
  
if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"qx.application":"feedreader.MobileApplication","qx.debug":false,"qx.mobile.emulatetouch":true,"qx.nativeScrollBars":true,"qx.optimization.basecalls":true,"qx.optimization.comments":true,"qx.optimization.privates":true,"qx.optimization.strings":true,"qx.optimization.variables":true,"qx.optimization.variants":true,"qx.revision":"28155","qx.theme":"qx.theme.Modern","qx.version":"1.5"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

if (!qx.$$libraries) qx.$$libraries = {};
var libinfo = {"__out__":{"sourceUri":"script"},"feedreader":{"resourceUri":"resource","sourceUri":"script","version":"trunk"},"qx":{"resourceUri":"resource","sourceUri":"script","version":"1.5"}};
for (var k in libinfo) qx.$$libraries[k] = libinfo[k];

qx.$$resources = {};
qx.$$translations = {};
qx.$$locales = {};
qx.$$packageData = {};

qx.$$loader = {
  parts : {"boot":[0]},
  packages : {"0":{"uris":["__out__:feedreader.b03662e95eac.js"]}},
  urisBefore : [],
  cssBefore : [],
  boot : "boot",
  closureParts : {},
  bootIsInline : true,
  addNoCacheParam : false,
  
  decodeUris : function(compressedUris)
  {
    var libs = qx.$$libraries;
    var uris = [];
    for (var i=0; i<compressedUris.length; i++)
    {
      var uri = compressedUris[i].split(":");
      var euri;
      if (uri.length==2 && uri[0] in libs) {
        var prefix = libs[uri[0]].sourceUri;
        euri = prefix + "/" + uri[1];
      } else {
        euri = compressedUris[i];
      }
      if (qx.$$loader.addNoCacheParam) {
        euri += "?nocache=" + Math.random();
      }
      
      uris.push(euri);
    }
    return uris;      
  }
};  

function loadScript(uri, callback) {
  var elem = document.createElement("script");
  elem.charset = "utf-8";
  elem.src = uri;
  elem.onreadystatechange = elem.onload = function() {
    if (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
      elem.onreadystatechange = elem.onload = null;
      callback();
    }
  };
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

function loadCss(uri) {
  var elem = document.createElement("link");
  elem.rel = "stylesheet";
  elem.type= "text/css";
  elem.href= uri;
  var head = document.getElementsByTagName("head")[0];
  head.appendChild(elem);
}

var isWebkit = /AppleWebKit\/([^ ]+)/.test(navigator.userAgent);

function loadScriptList(list, callback) {
  if (list.length == 0) {
    callback();
    return;
  }
  var item = list.shift();
  loadScript(item,  function() {
    if (isWebkit) {
      // force async, else Safari fails with a "maximum recursion depth exceeded"
      window.setTimeout(function() {
        loadScriptList(list, callback);
      }, 0);
    } else {
      loadScriptList(list, callback);
    }
  });
}

var fireContentLoadedEvent = function() {
  qx.$$domReady = true;
  document.removeEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', fireContentLoadedEvent, false);
}

qx.$$loader.importPackageData = function (dataMap, callback) {
  if (dataMap["resources"]){
    var resMap = dataMap["resources"];
    for (var k in resMap) qx.$$resources[k] = resMap[k];
  }
  if (dataMap["locales"]){
    var locMap = dataMap["locales"];
    var qxlocs = qx.$$locales;
    for (var lang in locMap){
      if (!qxlocs[lang]) qxlocs[lang] = locMap[lang];
      else 
        for (var k in locMap[lang]) qxlocs[lang][k] = locMap[lang][k];
    }
  }
  if (dataMap["translations"]){
    var trMap   = dataMap["translations"];
    var qxtrans = qx.$$translations;
    for (var lang in trMap){
      if (!qxtrans[lang]) qxtrans[lang] = trMap[lang];
      else 
        for (var k in trMap[lang]) qxtrans[lang][k] = trMap[lang][k];
    }
  }
  if (callback){
    callback(dataMap);
  }
}

qx.$$loader.signalStartup = function () 
{
  qx.$$loader.scriptLoaded = true;
  if (window.qx && qx.event && qx.event.handler && qx.event.handler.Application) {
    qx.event.handler.Application.onScriptLoaded();
    qx.$$loader.applicationHandlerReady = true; 
  } else {
    qx.$$loader.applicationHandlerReady = false;
  }
}

// Load all stuff
qx.$$loader.init = function(){
  var l=qx.$$loader;
  if (l.cssBefore.length>0) {
    for (var i=0, m=l.cssBefore.length; i<m; i++) {
      loadCss(l.cssBefore[i]);
    }
  }
  if (l.urisBefore.length>0){
    loadScriptList(l.urisBefore, function(){
      l.initUris();
    });
  } else {
    l.initUris();
  }
}

// Load qooxdoo boot stuff
qx.$$loader.initUris = function(){
  var l=qx.$$loader;
  var bootPackageHash=l.parts[l.boot][0];
  if (l.bootIsInline){
    l.importPackageData(qx.$$packageData[bootPackageHash]);
    l.signalStartup();
  } else {
    loadScriptList(l.decodeUris(l.packages[l.parts[l.boot][0]].uris), function(){
      // Opera needs this extra time to parse the scripts
      window.setTimeout(function(){
        l.importPackageData(qx.$$packageData[bootPackageHash] || {});
        l.signalStartup();
      }, 0);
    });
  }
}
})();

qx.$$packageData['0']={"locales":{"C":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"de":{"alternateQuotationEnd":"‘","alternateQuotationStart":"‚","cldr_am":"vorm.","cldr_date_format_full":"EEEE, d. MMMM y","cldr_date_format_long":"d. MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yy","cldr_date_time_format_EEEd":"EEE d.","cldr_date_time_format_Ed":"E, d.","cldr_date_time_format_H":"HH 'Uhr'","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d.M.","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, d. MMM","cldr_date_time_format_MMMMEd":"E, d. MMMM","cldr_date_time_format_MMMMdd":"dd. MMMM","cldr_date_time_format_MMMd":"d. MMM","cldr_date_time_format_MMd":"d.MM.","cldr_date_time_format_MMdd":"dd.MM.","cldr_date_time_format_Md":"d.M.","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.y","cldr_date_time_format_yMEd":"EEE, d.M.y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d. MMM y","cldr_date_time_format_yMMMd":"d. MMM y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMdd":"dd.MM.yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyy":"y","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Fr.","cldr_day_format_abbreviated_mon":"Mo.","cldr_day_format_abbreviated_sat":"Sa.","cldr_day_format_abbreviated_sun":"So.","cldr_day_format_abbreviated_thu":"Do.","cldr_day_format_abbreviated_tue":"Di.","cldr_day_format_abbreviated_wed":"Mi.","cldr_day_format_wide_fri":"Freitag","cldr_day_format_wide_mon":"Montag","cldr_day_format_wide_sat":"Samstag","cldr_day_format_wide_sun":"Sonntag","cldr_day_format_wide_thu":"Donnerstag","cldr_day_format_wide_tue":"Dienstag","cldr_day_format_wide_wed":"Mittwoch","cldr_day_stand-alone_abbreviated_fri":"Fr","cldr_day_stand-alone_abbreviated_mon":"Mo","cldr_day_stand-alone_abbreviated_sat":"Sa","cldr_day_stand-alone_abbreviated_sun":"So","cldr_day_stand-alone_abbreviated_thu":"Do","cldr_day_stand-alone_abbreviated_tue":"Di","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Okt","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dez","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mär","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"Mai","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"Januar","cldr_month_format_wide_10":"Oktober","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"Dezember","cldr_month_format_wide_2":"Februar","cldr_month_format_wide_3":"März","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"Mai","cldr_month_format_wide_6":"Juni","cldr_month_format_wide_7":"Juli","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_abbreviated_1":"Jan","cldr_month_stand-alone_abbreviated_10":"Okt","cldr_month_stand-alone_abbreviated_11":"Nov","cldr_month_stand-alone_abbreviated_12":"Dez","cldr_month_stand-alone_abbreviated_2":"Feb","cldr_month_stand-alone_abbreviated_3":"Mär","cldr_month_stand-alone_abbreviated_4":"Apr","cldr_month_stand-alone_abbreviated_5":"Mai","cldr_month_stand-alone_abbreviated_6":"Jun","cldr_month_stand-alone_abbreviated_7":"Jul","cldr_month_stand-alone_abbreviated_8":"Aug","cldr_month_stand-alone_abbreviated_9":"Sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0 %","cldr_pm":"nachm.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Tag","dayperiod":"Tageshälfte","era":"Epoche","hour":"Stunde","minute":"Minute","month":"Monat","quotationEnd":"“","quotationStart":"„","second":"Sekunde","week":"Woche","weekday":"Wochentag","year":"Jahr","zone":"Zone"},"en":{"alternateQuotationEnd":"’","alternateQuotationStart":"‘","cldr_am":"AM","cldr_date_format_full":"EEEE, MMMM d, y","cldr_date_format_long":"MMMM d, y","cldr_date_format_medium":"MMM d, y","cldr_date_format_short":"M/d/yy","cldr_date_time_format_EEEd":"d EEE","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, M/d","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E, MMM d","cldr_date_time_format_MMMd":"MMM d","cldr_date_time_format_Md":"M/d","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, M/d/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, MMM d, y","cldr_date_time_format_yMMMd":"MMM d, y","cldr_date_time_format_yMd":"M/d/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_day_format_abbreviated_fri":"Fri","cldr_day_format_abbreviated_mon":"Mon","cldr_day_format_abbreviated_sat":"Sat","cldr_day_format_abbreviated_sun":"Sun","cldr_day_format_abbreviated_thu":"Thu","cldr_day_format_abbreviated_tue":"Tue","cldr_day_format_abbreviated_wed":"Wed","cldr_day_format_wide_fri":"Friday","cldr_day_format_wide_mon":"Monday","cldr_day_format_wide_sat":"Saturday","cldr_day_format_wide_sun":"Sunday","cldr_day_format_wide_thu":"Thursday","cldr_day_format_wide_tue":"Tuesday","cldr_day_format_wide_wed":"Wednesday","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"Jan","cldr_month_format_abbreviated_10":"Oct","cldr_month_format_abbreviated_11":"Nov","cldr_month_format_abbreviated_12":"Dec","cldr_month_format_abbreviated_2":"Feb","cldr_month_format_abbreviated_3":"Mar","cldr_month_format_abbreviated_4":"Apr","cldr_month_format_abbreviated_5":"May","cldr_month_format_abbreviated_6":"Jun","cldr_month_format_abbreviated_7":"Jul","cldr_month_format_abbreviated_8":"Aug","cldr_month_format_abbreviated_9":"Sep","cldr_month_format_wide_1":"January","cldr_month_format_wide_10":"October","cldr_month_format_wide_11":"November","cldr_month_format_wide_12":"December","cldr_month_format_wide_2":"February","cldr_month_format_wide_3":"March","cldr_month_format_wide_4":"April","cldr_month_format_wide_5":"May","cldr_month_format_wide_6":"June","cldr_month_format_wide_7":"July","cldr_month_format_wide_8":"August","cldr_month_format_wide_9":"September","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":".","cldr_number_group_separator":",","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"h:mm:ss a zzzz","cldr_time_format_long":"h:mm:ss a z","cldr_time_format_medium":"h:mm:ss a","cldr_time_format_short":"h:mm a","day":"Day","dayperiod":"AM/PM","era":"Era","hour":"Hour","minute":"Minute","month":"Month","quotationEnd":"”","quotationStart":"“","second":"Second","week":"Week","weekday":"Day of the Week","year":"Year","zone":"Time Zone"},"es":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"a.m.","cldr_date_format_full":"EEEE d 'de' MMMM 'de' y","cldr_date_format_long":"d 'de' MMMM 'de' y","cldr_date_format_medium":"dd/MM/yyyy","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMd":"d 'de' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd-MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_h":"hh a","cldr_date_time_format_hm":"hh:mm a","cldr_date_time_format_hms":"hh:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE d/M/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d MMM y","cldr_date_time_format_yMMMM":"MMMM 'de' y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/y","cldr_date_time_format_yQ":"Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM-yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ 'de' yy","cldr_date_time_format_yyyyMM":"MM/yyyy","cldr_day_format_abbreviated_fri":"vie","cldr_day_format_abbreviated_mon":"lun","cldr_day_format_abbreviated_sat":"sáb","cldr_day_format_abbreviated_sun":"dom","cldr_day_format_abbreviated_thu":"jue","cldr_day_format_abbreviated_tue":"mar","cldr_day_format_abbreviated_wed":"mié","cldr_day_format_wide_fri":"viernes","cldr_day_format_wide_mon":"lunes","cldr_day_format_wide_sat":"sábado","cldr_day_format_wide_sun":"domingo","cldr_day_format_wide_thu":"jueves","cldr_day_format_wide_tue":"martes","cldr_day_format_wide_wed":"miércoles","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"ene","cldr_month_format_abbreviated_10":"oct","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dic","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"abr","cldr_month_format_abbreviated_5":"may","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"ago","cldr_month_format_abbreviated_9":"sep","cldr_month_format_wide_1":"enero","cldr_month_format_wide_10":"octubre","cldr_month_format_wide_11":"noviembre","cldr_month_format_wide_12":"diciembre","cldr_month_format_wide_2":"febrero","cldr_month_format_wide_3":"marzo","cldr_month_format_wide_4":"abril","cldr_month_format_wide_5":"mayo","cldr_month_format_wide_6":"junio","cldr_month_format_wide_7":"julio","cldr_month_format_wide_8":"agosto","cldr_month_format_wide_9":"septiembre","cldr_month_stand-alone_abbreviated_5":"mayo","cldr_month_stand-alone_narrow_1":"E","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"p.m.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"día","dayperiod":"periodo del día","era":"era","hour":"hora","minute":"minuto","month":"mes","quotationEnd":"’","quotationStart":"‘","second":"segundo","week":"semana","weekday":"día de la semana","year":"año","zone":"zona"},"fr":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEd":"EEE d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMMdd":"dd MMM","cldr_date_time_format_MMd":"d/MM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/yyyy","cldr_date_time_format_yMEd":"EEE d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/yyyy","cldr_date_time_format_yQ":"'T'Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyMMMEEEd":"EEE d MMM yy","cldr_date_time_format_yyMMMd":"d MMM yy","cldr_date_time_format_yyQ":"'T'Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven.","cldr_day_format_abbreviated_mon":"lun.","cldr_day_format_abbreviated_sat":"sam.","cldr_day_format_abbreviated_sun":"dim.","cldr_day_format_abbreviated_thu":"jeu.","cldr_day_format_abbreviated_tue":"mar.","cldr_day_format_abbreviated_wed":"mer.","cldr_day_format_wide_fri":"vendredi","cldr_day_format_wide_mon":"lundi","cldr_day_format_wide_sat":"samedi","cldr_day_format_wide_sun":"dimanche","cldr_day_format_wide_thu":"jeudi","cldr_day_format_wide_tue":"mardi","cldr_day_format_wide_wed":"mercredi","cldr_day_stand-alone_abbreviated_fri":"ven.","cldr_day_stand-alone_abbreviated_mon":"lun.","cldr_day_stand-alone_abbreviated_sat":"sam.","cldr_day_stand-alone_abbreviated_sun":"dim.","cldr_day_stand-alone_abbreviated_thu":"jeu.","cldr_day_stand-alone_abbreviated_tue":"mar.","cldr_day_stand-alone_abbreviated_wed":"mer.","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_month_format_abbreviated_1":"janv.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"déc.","cldr_month_format_abbreviated_2":"févr.","cldr_month_format_abbreviated_3":"mars","cldr_month_format_abbreviated_4":"avr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"juin","cldr_month_format_abbreviated_7":"juil.","cldr_month_format_abbreviated_8":"août","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_wide_1":"janvier","cldr_month_format_wide_10":"octobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"décembre","cldr_month_format_wide_2":"février","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"avril","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"juin","cldr_month_format_wide_7":"juillet","cldr_month_format_wide_8":"août","cldr_month_format_wide_9":"septembre","cldr_month_stand-alone_abbreviated_1":"janv.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"déc.","cldr_month_stand-alone_abbreviated_2":"févr.","cldr_month_stand-alone_abbreviated_3":"mars","cldr_month_stand-alone_abbreviated_4":"avr.","cldr_month_stand-alone_abbreviated_7":"juil.","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"jour","dayperiod":"cadran","era":"ère","hour":"heure","minute":"minute","month":"mois","quotationEnd":"»","quotationStart":"«","second":"seconde","week":"semaine","weekday":"jour de la semaine","year":"année","zone":"fuseau horaire"},"it":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"m.","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"dd MMMM y","cldr_date_format_medium":"dd/MMM/y","cldr_date_format_short":"dd/MM/yy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"EEE d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"EEE d MMM","cldr_date_time_format_MMMMdd":"dd MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_h":"hh a","cldr_date_time_format_hm":"hh:mm a","cldr_date_time_format_hms":"hh:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M/y","cldr_date_time_format_yMEd":"EEE, d/M/y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d/M/y","cldr_date_time_format_yQ":"Q-yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM/yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"ven","cldr_day_format_abbreviated_mon":"lun","cldr_day_format_abbreviated_sat":"sab","cldr_day_format_abbreviated_sun":"dom","cldr_day_format_abbreviated_thu":"gio","cldr_day_format_abbreviated_tue":"mar","cldr_day_format_abbreviated_wed":"mer","cldr_day_format_wide_fri":"venerdì","cldr_day_format_wide_mon":"lunedì","cldr_day_format_wide_sat":"sabato","cldr_day_format_wide_sun":"domenica","cldr_day_format_wide_thu":"giovedì","cldr_day_format_wide_tue":"martedì","cldr_day_format_wide_wed":"mercoledì","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"G","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"Venerdì","cldr_day_stand-alone_wide_mon":"Lunedì","cldr_day_stand-alone_wide_sat":"Sabato","cldr_day_stand-alone_wide_sun":"Domenica","cldr_day_stand-alone_wide_thu":"Giovedì","cldr_day_stand-alone_wide_tue":"Martedì","cldr_day_stand-alone_wide_wed":"Mercoledì","cldr_month_format_abbreviated_1":"gen","cldr_month_format_abbreviated_10":"ott","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dic","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"apr","cldr_month_format_abbreviated_5":"mag","cldr_month_format_abbreviated_6":"giu","cldr_month_format_abbreviated_7":"lug","cldr_month_format_abbreviated_8":"ago","cldr_month_format_abbreviated_9":"set","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"G","cldr_month_format_narrow_7":"L","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"gennaio","cldr_month_format_wide_10":"ottobre","cldr_month_format_wide_11":"novembre","cldr_month_format_wide_12":"dicembre","cldr_month_format_wide_2":"febbraio","cldr_month_format_wide_3":"marzo","cldr_month_format_wide_4":"aprile","cldr_month_format_wide_5":"maggio","cldr_month_format_wide_6":"giugno","cldr_month_format_wide_7":"luglio","cldr_month_format_wide_8":"agosto","cldr_month_format_wide_9":"settembre","cldr_month_stand-alone_abbreviated_10":"ott","cldr_month_stand-alone_abbreviated_11":"nov","cldr_month_stand-alone_abbreviated_12":"dic","cldr_month_stand-alone_abbreviated_2":"feb","cldr_month_stand-alone_abbreviated_3":"mar","cldr_month_stand-alone_abbreviated_4":"apr","cldr_month_stand-alone_abbreviated_5":"mag","cldr_month_stand-alone_abbreviated_6":"giu","cldr_month_stand-alone_abbreviated_7":"lug","cldr_month_stand-alone_abbreviated_8":"ago","cldr_month_stand-alone_abbreviated_9":"set","cldr_month_stand-alone_narrow_1":"G","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"G","cldr_month_stand-alone_narrow_7":"L","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"Gennaio","cldr_month_stand-alone_wide_10":"Ottobre","cldr_month_stand-alone_wide_11":"Novembre","cldr_month_stand-alone_wide_12":"Dicembre","cldr_month_stand-alone_wide_2":"Febbraio","cldr_month_stand-alone_wide_3":"Marzo","cldr_month_stand-alone_wide_4":"Aprile","cldr_month_stand-alone_wide_5":"Maggio","cldr_month_stand-alone_wide_6":"Giugno","cldr_month_stand-alone_wide_7":"Luglio","cldr_month_stand-alone_wide_8":"Agosto","cldr_month_stand-alone_wide_9":"Settembre","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"p.","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"giorno","dayperiod":"periodo del giorno","era":"era","hour":"ora","minute":"minuto","month":"mese","quotationEnd":"’","quotationStart":"‘","second":"secondo","week":"settimana","weekday":"giorno della settimana","year":"anno","zone":"zona"},"nl":{"alternateQuotationEnd":"”","alternateQuotationStart":"“","cldr_am":"AM","cldr_date_format_full":"EEEE d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"dd-MM-yy","cldr_date_time_format_Ed":"E d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d-M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d-MMM","cldr_date_time_format_MMd":"d-MM","cldr_date_time_format_MMdd":"dd-MM","cldr_date_time_format_Md":"d-M","cldr_date_time_format_d":"d","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M-y","cldr_date_time_format_yMEd":"EEE d-M-y","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d-M-y","cldr_date_time_format_yQ":"Q yyyy","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM-yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyQQQQ":"QQQQ yy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"vr","cldr_day_format_abbreviated_mon":"ma","cldr_day_format_abbreviated_sat":"za","cldr_day_format_abbreviated_sun":"zo","cldr_day_format_abbreviated_thu":"do","cldr_day_format_abbreviated_tue":"di","cldr_day_format_abbreviated_wed":"wo","cldr_day_format_wide_fri":"vrijdag","cldr_day_format_wide_mon":"maandag","cldr_day_format_wide_sat":"zaterdag","cldr_day_format_wide_sun":"zondag","cldr_day_format_wide_thu":"donderdag","cldr_day_format_wide_tue":"dinsdag","cldr_day_format_wide_wed":"woensdag","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"Z","cldr_day_stand-alone_narrow_sun":"Z","cldr_day_stand-alone_narrow_thu":"D","cldr_day_stand-alone_narrow_tue":"D","cldr_day_stand-alone_narrow_wed":"W","cldr_month_format_abbreviated_1":"jan.","cldr_month_format_abbreviated_10":"okt.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"dec.","cldr_month_format_abbreviated_2":"feb.","cldr_month_format_abbreviated_3":"mrt.","cldr_month_format_abbreviated_4":"apr.","cldr_month_format_abbreviated_5":"mei","cldr_month_format_abbreviated_6":"jun.","cldr_month_format_abbreviated_7":"jul.","cldr_month_format_abbreviated_8":"aug.","cldr_month_format_abbreviated_9":"sep.","cldr_month_format_wide_1":"januari","cldr_month_format_wide_10":"oktober","cldr_month_format_wide_11":"november","cldr_month_format_wide_12":"december","cldr_month_format_wide_2":"februari","cldr_month_format_wide_3":"maart","cldr_month_format_wide_4":"april","cldr_month_format_wide_5":"mei","cldr_month_format_wide_6":"juni","cldr_month_format_wide_7":"juli","cldr_month_format_wide_8":"augustus","cldr_month_format_wide_9":"september","cldr_month_stand-alone_abbreviated_1":"jan","cldr_month_stand-alone_abbreviated_10":"okt","cldr_month_stand-alone_abbreviated_11":"nov","cldr_month_stand-alone_abbreviated_12":"dec","cldr_month_stand-alone_abbreviated_2":"feb","cldr_month_stand-alone_abbreviated_3":"mrt","cldr_month_stand-alone_abbreviated_4":"apr","cldr_month_stand-alone_abbreviated_6":"jun","cldr_month_stand-alone_abbreviated_7":"jul","cldr_month_stand-alone_abbreviated_8":"aug","cldr_month_stand-alone_abbreviated_9":"sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"Dag","dayperiod":"AM/PM","era":"Tijdperk","hour":"Uur","minute":"Minuut","month":"Maand","quotationEnd":"’","quotationStart":"‘","second":"Seconde","week":"week","weekday":"Dag van de week","year":"Jaar","zone":"Zone"},"ro":{"alternateQuotationEnd":"»","alternateQuotationStart":"«","cldr_am":"AM","cldr_date_format_full":"EEEE, d MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"dd.MM.yyyy","cldr_date_format_short":"dd.MM.yyyy","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E, d MMM","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEEEd":"EEE, d MMM","cldr_date_time_format_MMMEd":"E, d MMM","cldr_date_time_format_MMMMEd":"E, d MMMM","cldr_date_time_format_MMMMd":"d MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMdd":"dd.MM","cldr_date_time_format_Md":"d.M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"M.yyyy","cldr_date_time_format_yMEd":"EEE, d/M/yyyy","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE, d MMM y","cldr_date_time_format_yMMMM":"MMMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"d.M.y","cldr_date_time_format_yQ":"'trimestrul' Q y","cldr_date_time_format_yQQQ":"QQQ y","cldr_date_time_format_yyMM":"MM.yy","cldr_date_time_format_yyMMM":"MMM yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyyyMM":"MM.yyyy","cldr_date_time_format_yyyyMMMM":"MMMM y","cldr_day_format_abbreviated_fri":"Vi","cldr_day_format_abbreviated_mon":"Lu","cldr_day_format_abbreviated_sat":"Sâ","cldr_day_format_abbreviated_sun":"Du","cldr_day_format_abbreviated_thu":"Jo","cldr_day_format_abbreviated_tue":"Ma","cldr_day_format_abbreviated_wed":"Mi","cldr_day_format_narrow_fri":"V","cldr_day_format_narrow_mon":"L","cldr_day_format_narrow_sat":"S","cldr_day_format_narrow_sun":"D","cldr_day_format_narrow_thu":"J","cldr_day_format_narrow_tue":"M","cldr_day_format_narrow_wed":"M","cldr_day_format_wide_fri":"vineri","cldr_day_format_wide_mon":"luni","cldr_day_format_wide_sat":"sâmbătă","cldr_day_format_wide_sun":"duminică","cldr_day_format_wide_thu":"joi","cldr_day_format_wide_tue":"marți","cldr_day_format_wide_wed":"miercuri","cldr_day_stand-alone_abbreviated_fri":"Vi","cldr_day_stand-alone_abbreviated_mon":"Lu","cldr_day_stand-alone_abbreviated_sat":"Sâ","cldr_day_stand-alone_abbreviated_sun":"Du","cldr_day_stand-alone_abbreviated_thu":"Jo","cldr_day_stand-alone_abbreviated_tue":"Ma","cldr_day_stand-alone_abbreviated_wed":"Mi","cldr_day_stand-alone_narrow_fri":"V","cldr_day_stand-alone_narrow_mon":"L","cldr_day_stand-alone_narrow_sat":"S","cldr_day_stand-alone_narrow_sun":"D","cldr_day_stand-alone_narrow_thu":"J","cldr_day_stand-alone_narrow_tue":"M","cldr_day_stand-alone_narrow_wed":"M","cldr_day_stand-alone_wide_fri":"vineri","cldr_day_stand-alone_wide_mon":"luni","cldr_day_stand-alone_wide_sat":"sâmbătă","cldr_day_stand-alone_wide_sun":"duminică","cldr_day_stand-alone_wide_thu":"joi","cldr_day_stand-alone_wide_tue":"marți","cldr_day_stand-alone_wide_wed":"miercuri","cldr_month_format_abbreviated_1":"ian.","cldr_month_format_abbreviated_10":"oct.","cldr_month_format_abbreviated_11":"nov.","cldr_month_format_abbreviated_12":"dec.","cldr_month_format_abbreviated_2":"feb.","cldr_month_format_abbreviated_3":"mar.","cldr_month_format_abbreviated_4":"apr.","cldr_month_format_abbreviated_5":"mai","cldr_month_format_abbreviated_6":"iun.","cldr_month_format_abbreviated_7":"iul.","cldr_month_format_abbreviated_8":"aug.","cldr_month_format_abbreviated_9":"sept.","cldr_month_format_narrow_1":"I","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"I","cldr_month_format_narrow_7":"I","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"ianuarie","cldr_month_format_wide_10":"octombrie","cldr_month_format_wide_11":"noiembrie","cldr_month_format_wide_12":"decembrie","cldr_month_format_wide_2":"februarie","cldr_month_format_wide_3":"martie","cldr_month_format_wide_4":"aprilie","cldr_month_format_wide_5":"mai","cldr_month_format_wide_6":"iunie","cldr_month_format_wide_7":"iulie","cldr_month_format_wide_8":"august","cldr_month_format_wide_9":"septembrie","cldr_month_stand-alone_abbreviated_1":"ian.","cldr_month_stand-alone_abbreviated_10":"oct.","cldr_month_stand-alone_abbreviated_11":"nov.","cldr_month_stand-alone_abbreviated_12":"dec.","cldr_month_stand-alone_abbreviated_2":"feb.","cldr_month_stand-alone_abbreviated_3":"mar.","cldr_month_stand-alone_abbreviated_4":"apr.","cldr_month_stand-alone_abbreviated_5":"mai","cldr_month_stand-alone_abbreviated_6":"iun.","cldr_month_stand-alone_abbreviated_7":"iul.","cldr_month_stand-alone_abbreviated_8":"aug.","cldr_month_stand-alone_abbreviated_9":"sept.","cldr_month_stand-alone_narrow_1":"I","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"I","cldr_month_stand-alone_narrow_7":"I","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"ianuarie","cldr_month_stand-alone_wide_10":"octombrie","cldr_month_stand-alone_wide_11":"noiembrie","cldr_month_stand-alone_wide_12":"decembrie","cldr_month_stand-alone_wide_2":"februarie","cldr_month_stand-alone_wide_3":"martie","cldr_month_stand-alone_wide_4":"aprilie","cldr_month_stand-alone_wide_5":"mai","cldr_month_stand-alone_wide_6":"iunie","cldr_month_stand-alone_wide_7":"iulie","cldr_month_stand-alone_wide_8":"august","cldr_month_stand-alone_wide_9":"septembrie","cldr_number_decimal_separator":",","cldr_number_group_separator":".","cldr_number_percent_format":"#,##0%","cldr_pm":"PM","cldr_time_format_full":"HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"zi","dayperiod":"perioada zilei","era":"eră","hour":"oră","minute":"minut","month":"lună","quotationEnd":"”","quotationStart":"„","second":"secundă","week":"săptămână","weekday":"zi a săptămânii","year":"an","zone":"zonă"},"sv":{"alternateQuotationEnd":"’","alternateQuotationStart":"’","cldr_am":"fm","cldr_date_format_full":"EEEE'en' 'den' d:'e' MMMM y","cldr_date_format_long":"d MMMM y","cldr_date_format_medium":"d MMM y","cldr_date_format_short":"yyyy-MM-dd","cldr_date_time_format_EEEd":"EEE d","cldr_date_time_format_Hm":"HH:mm","cldr_date_time_format_Hms":"HH:mm:ss","cldr_date_time_format_M":"L","cldr_date_time_format_MEd":"E d/M","cldr_date_time_format_MMM":"LLL","cldr_date_time_format_MMMEd":"E d MMM","cldr_date_time_format_MMMMEEEd":"EEE d MMMM","cldr_date_time_format_MMMMEd":"E d:'e' MMMM","cldr_date_time_format_MMMMd":"d:'e' MMMM","cldr_date_time_format_MMMd":"d MMM","cldr_date_time_format_MMd":"d/M","cldr_date_time_format_MMdd":"dd/MM","cldr_date_time_format_Md":"d/M","cldr_date_time_format_d":"d","cldr_date_time_format_hm":"h:mm a","cldr_date_time_format_hms":"h:mm:ss a","cldr_date_time_format_ms":"mm:ss","cldr_date_time_format_y":"y","cldr_date_time_format_yM":"yyyy-MM","cldr_date_time_format_yMEd":"EEE, yyyy-MM-dd","cldr_date_time_format_yMMM":"MMM y","cldr_date_time_format_yMMMEd":"EEE d MMM y","cldr_date_time_format_yMMMd":"d MMM y","cldr_date_time_format_yMd":"yyyy-MM-dd","cldr_date_time_format_yQ":"yyyy Q","cldr_date_time_format_yQQQ":"y QQQ","cldr_date_time_format_yyMM":"yy-MM","cldr_date_time_format_yyMMM":"MMM -yy","cldr_date_time_format_yyQ":"Q yy","cldr_date_time_format_yyyyMM":"yyyy-MM","cldr_date_time_format_yyyyMMM":"MMM y","cldr_date_time_format_yyyyQQQQ":"QQQQ y","cldr_day_format_abbreviated_fri":"fre","cldr_day_format_abbreviated_mon":"mån","cldr_day_format_abbreviated_sat":"lör","cldr_day_format_abbreviated_sun":"sön","cldr_day_format_abbreviated_thu":"tors","cldr_day_format_abbreviated_tue":"tis","cldr_day_format_abbreviated_wed":"ons","cldr_day_format_narrow_fri":"F","cldr_day_format_narrow_mon":"M","cldr_day_format_narrow_sat":"L","cldr_day_format_narrow_sun":"S","cldr_day_format_narrow_thu":"T","cldr_day_format_narrow_tue":"T","cldr_day_format_narrow_wed":"O","cldr_day_format_wide_fri":"fredag","cldr_day_format_wide_mon":"måndag","cldr_day_format_wide_sat":"lördag","cldr_day_format_wide_sun":"söndag","cldr_day_format_wide_thu":"torsdag","cldr_day_format_wide_tue":"tisdag","cldr_day_format_wide_wed":"onsdag","cldr_day_stand-alone_abbreviated_fri":"fre","cldr_day_stand-alone_abbreviated_mon":"mån","cldr_day_stand-alone_abbreviated_sat":"lör","cldr_day_stand-alone_abbreviated_sun":"sön","cldr_day_stand-alone_abbreviated_thu":"tor","cldr_day_stand-alone_abbreviated_tue":"tis","cldr_day_stand-alone_abbreviated_wed":"ons","cldr_day_stand-alone_narrow_fri":"F","cldr_day_stand-alone_narrow_mon":"M","cldr_day_stand-alone_narrow_sat":"L","cldr_day_stand-alone_narrow_sun":"S","cldr_day_stand-alone_narrow_thu":"T","cldr_day_stand-alone_narrow_tue":"T","cldr_day_stand-alone_narrow_wed":"O","cldr_day_stand-alone_wide_fri":"fredag","cldr_day_stand-alone_wide_mon":"måndag","cldr_day_stand-alone_wide_sat":"lördag","cldr_day_stand-alone_wide_sun":"söndag","cldr_day_stand-alone_wide_thu":"torsdag","cldr_day_stand-alone_wide_tue":"tisdag","cldr_day_stand-alone_wide_wed":"onsdag","cldr_month_format_abbreviated_1":"jan","cldr_month_format_abbreviated_10":"okt","cldr_month_format_abbreviated_11":"nov","cldr_month_format_abbreviated_12":"dec","cldr_month_format_abbreviated_2":"feb","cldr_month_format_abbreviated_3":"mar","cldr_month_format_abbreviated_4":"apr","cldr_month_format_abbreviated_5":"maj","cldr_month_format_abbreviated_6":"jun","cldr_month_format_abbreviated_7":"jul","cldr_month_format_abbreviated_8":"aug","cldr_month_format_abbreviated_9":"sep","cldr_month_format_narrow_1":"J","cldr_month_format_narrow_10":"O","cldr_month_format_narrow_11":"N","cldr_month_format_narrow_12":"D","cldr_month_format_narrow_2":"F","cldr_month_format_narrow_3":"M","cldr_month_format_narrow_4":"A","cldr_month_format_narrow_5":"M","cldr_month_format_narrow_6":"J","cldr_month_format_narrow_7":"J","cldr_month_format_narrow_8":"A","cldr_month_format_narrow_9":"S","cldr_month_format_wide_1":"januari","cldr_month_format_wide_10":"oktober","cldr_month_format_wide_11":"november","cldr_month_format_wide_12":"december","cldr_month_format_wide_2":"februari","cldr_month_format_wide_3":"mars","cldr_month_format_wide_4":"april","cldr_month_format_wide_5":"maj","cldr_month_format_wide_6":"juni","cldr_month_format_wide_7":"juli","cldr_month_format_wide_8":"augusti","cldr_month_format_wide_9":"september","cldr_month_stand-alone_abbreviated_1":"jan","cldr_month_stand-alone_abbreviated_10":"okt","cldr_month_stand-alone_abbreviated_11":"nov","cldr_month_stand-alone_abbreviated_2":"feb","cldr_month_stand-alone_abbreviated_3":"mar","cldr_month_stand-alone_abbreviated_4":"apr","cldr_month_stand-alone_abbreviated_5":"maj","cldr_month_stand-alone_abbreviated_6":"jun","cldr_month_stand-alone_abbreviated_7":"jul","cldr_month_stand-alone_abbreviated_8":"aug","cldr_month_stand-alone_abbreviated_9":"sep","cldr_month_stand-alone_narrow_1":"J","cldr_month_stand-alone_narrow_10":"O","cldr_month_stand-alone_narrow_11":"N","cldr_month_stand-alone_narrow_12":"D","cldr_month_stand-alone_narrow_2":"F","cldr_month_stand-alone_narrow_3":"M","cldr_month_stand-alone_narrow_4":"A","cldr_month_stand-alone_narrow_5":"M","cldr_month_stand-alone_narrow_6":"J","cldr_month_stand-alone_narrow_7":"J","cldr_month_stand-alone_narrow_8":"A","cldr_month_stand-alone_narrow_9":"S","cldr_month_stand-alone_wide_1":"januari","cldr_month_stand-alone_wide_10":"oktober","cldr_month_stand-alone_wide_2":"februari","cldr_month_stand-alone_wide_3":"mars","cldr_month_stand-alone_wide_4":"april","cldr_month_stand-alone_wide_5":"maj","cldr_month_stand-alone_wide_6":"juni","cldr_month_stand-alone_wide_7":"juli","cldr_month_stand-alone_wide_8":"augusti","cldr_month_stand-alone_wide_9":"september","cldr_number_decimal_separator":",","cldr_number_group_separator":" ","cldr_number_percent_format":"#,##0 %","cldr_pm":"em","cldr_time_format_full":"'kl'. HH:mm:ss zzzz","cldr_time_format_long":"HH:mm:ss z","cldr_time_format_medium":"HH:mm:ss","cldr_time_format_short":"HH:mm","day":"dag","dayperiod":"fm/em","era":"era","hour":"timme","minute":"minut","month":"månad","quotationEnd":"”","quotationStart":"”","second":"sekund","week":"vecka","weekday":"veckodag","year":"år","zone":"tidszon"}},"resources":{"feedreader/images/combined/icons16.b64.json":[-1,-1,"b64","feedreader",{"qx/icon/Tango/16/actions/dialog-apply.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG/SURBVDjLY/j//z8DJZhohX7LGMSDl/KpkmVAQwMDU/VBy7M9Fz3fFe7UXRo6lYGHJAMS14kXzrwb9qfntsP/ibe8/4ct444n2gCH+QwcXae8bk2+6/W//prm/6YTdtfSZjKwEm1AxmbFnlkPIv7XXlf533nd+k/yJqksosPAdyaDyIQLQU+bbur8r7mu9L/hqN1JnIEIcmrJXsNFSRtF/GBiedu1lsx+GP6/+obi/86rDt8TNoj44jSgar/lhjUviv7Pv532KWuLakv4Ih7NqVcj3nXcMfvfeEvrf+0h69040wEoWqZdiXq58kX2/5Uvcv4vfpj+p+OE9/1FTxP/199U/d91yeVD1FJ+Y7wJKXOzYsqcGwmvlr1I+7/4WfL/BU9i/3feM//fftf0f8V+01VEpcToFUIWwEC7NeOx7//mO7r/G25r/O+84PoiaAmnDNFJOXQ+t0TDEftj/fcd/vfetf1fuENnOtF5AQrY5fQYBIu2GayrO2B3Q96OQREoJgLEgkDMA5IHKcIwAAiYgJgbiIWBWBqIlRnYGHSBtAkQ64D5EHGQPAfMEEwnQQxihSrigWIuqM3MQMyIrB4AJtVknc64C6YAAAAASUVORK5CYII=","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/actions/dialog-cancel.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIYSURBVDjLY/j//z8DJRiFc2oeZ8SBfgYZsgzY3c7A/Ox8yp3bexy3HuhjkL2wSrrpyemog49Phu29tklt4rEZDB54Dbi4Sqny6/PGf58e1/x8d6/sx9eX9f+/PMv4/+Vp+v9vL8r+f3pU+fveocA9+3oY+DEMANrO+upG9aNvr5r/f3vV8P8bUPPnR0H/399S/P/uuhgQ8///eNfk/9cX1f+fX8x9CFTPi2LAlY0GrT/eL///490MsAEfbqn9f3HR6/3DY55HHp3wOfT8vO+L9zfl/r+9wgR0Vf7/e4dCtsMNAJrG8f7+5Bff3/T8//I4+v/ba1z/315l/v/kTOBtoBwbSNHhKQzi9w97nXt/UwYox/b/45POX4cmMeiDDQAyVG9sN1lxZ6/NunuHXLc9POa379HJoKOPjgedAwZcOMymI1MZZF9eCn779grD/89PEv6fXyFegxGNhPDTM+FnQAa8v6X8//HpxM2kG3A24hzYAKBX7h/2XUGSAUCvyr+8EvkGZMDHex7/Ty/gTSXaAGBg8j09m3j3/Q3J/yADXl0J+gwUEybagJPzeJM/3g8Ga/5wx/b/3QNeW7DmBShgB2IeIBYEYhEgFnXQY5B9djH9ycf77v/vHPQ7CEr2GAYAARMQcwOxMBBLA7EyEOsAsQmInlElFndmnd0KRQkGcSCfA6QBqxegBrFCFfFAMRfUZcxAzIisHgDm44a2RTD5KwAAAABJRU5ErkJggg==","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/actions/dialog-ok.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGrSURBVDjLpZM7aBRRFIa/c2Ym2dlkJ9ENq4GNwTwgWqRyFWwsxPgoIggpgrXbaCMSTSEIVqbVRuy3EISgWNqIgoj4goCFFlqIWPrYZOd1r4UTXGbHIuyBrzr3/Pc/l/+KtZZ+Sumz+hZwdzpw6c6z1yOBX3dEoufvvyzvWGAk8OuVylBt2HdRkcP/XaHRbJULd1YRABFQEelxcPTi/dqB/bW7B2f2loAz+b7nqLiO4oqi2iXQaLZ0ql69sXhs7sKesWB84+O3N8evrF/OC5w4MuV6juC5gqMqYq3l1Oqj04fmxm9NT1TnTXaw5DmoCIkxxIkhNhZPldRYosQQ+C4PnmxccwFGh0vL5SF/+vvPEEeEMDF0opQwNpiCoLkq7K54aRgln2Q7iQtXH56d3Ve9ObormO/EhkEx7c0w3tK/D2YtoIIVBLDpj19bL99++HpOuqPcaLbKs5O125MTY0vt35tPX7z7vAQYwHbz6t75f0PW2h4WVtZPLl5/vFbUyyP5zyQiCgwAXoYCkjlJgQSIgKhHQEQ8oFTAANDJ0QY6RQ4AnBxkt29jbDb4B/fwwJ5uNzYyAAAAAElFTkSuQmCC","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/actions/document-new.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGNSURBVDiNjZM/b9NwEIafu9hVbVk0jSJlKH8WJFhSFNHP0LlTPwELExMrn4CPgpgQaxZYWIjaTpEQSkUykILAiYJN7N+x1K6JXSknnXTD3fO+9/sjZsY2sVoeCrALtIA0jM7WAFIARqPReRiGHVXFOSfFoJlhljObXUQ7/tcPR08/v3PuYgY6DKOz3yVgPB7PPc/rqioispELkj+f6HS+s7d3amn67Iu52RtovdJCSUQohlX1v2xpRrcbsN95ibYeSBC+fyh69xTcPa2seStE1GP99yNmPwHI8xXmLu8AmVcFlAPX1osaIjz/EWnyGtUIswUgb0G+1RxU1W/qgNydkCRPSJKMqx/3F6AvwujceU2AqvpNBhjH5O6Y1eoqPTh4ngCUADOrnf4mpClKQP3q6pBqbw3Q5KAJUvQ1ArZxsvn0tQrY3PM2SCNgm2j6eOUKy+Xyl4h4IiJmVshoRd1dq7s4juMaYDgcPgb86XSqk8nEm8/nfhzHPkAQBHm73V73er2s3+9nwHowGADwD3RnnM0c08RlAAAAAElFTkSuQmCC","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/apps/preferences-locale.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAISSURBVDjLpZM9b9NQGIXP/bB9bSdOE5o2oQUJgcSAOiBmBib+BRJCSGwsiD9BR3YQiB/AhBhAjAy0S4uoSlW1hbapQuwktmO7174vC1RFZKl6pHc9enT0PoyIcJ5wnDMSAB48vH/n2G4/Y/O3N2o11UkmRTdKMzeZFPuM2M881/tkqrDZDDozdX/Rknxh7evO89U3j15LALAs6+ZMu32pfnXxlud7OBiMEPci2CK/0r3QgBQSaUFwHRu+a0NJDrG5F5wQAEBgFTocJaHne62FlgeqNPLChhACxDiut32MswqcC+DUbicbSG5MnhU9AqHb9OA5Eu2Gi16UwXck5hoKrZqDblNNH9FUhnSpj0AAAXAsASJCWRns9lPoyoAAMMb+H9EYA0MGknOPAJSVAWcMrbrC5bkKs4EPIsAWDGFcTCcoSwNpWZ3JpMBuP0W74WLjRwQiwkGY4miYgXOGMD6eXhAXTCjbvhgfbmMc51jZ6iPwbAzGOWrKQpxprGwNQNP+AACiQjnOZHKQ9/akXbnfR2lW7iT5PHExPxwXs57nc99mpkiG0fhXsc0MWz8pICLqusNkb/XltWOt771afvzib3Hn7rJfd8ySUN4N0nqNGf1t4+3T+B8CIfhIStnrD8IlV6kvpxF775+kAD7/uekuKKU2gyB4p7VGVer1M7ugXHe9MRMcRnGy/+njhzPpyc6r829GePTTtfegxAAAAABJRU5ErkJggg==","encoding":"base64","height":16,"type":"png","width":16},"qx/icon/Tango/16/apps/preferences-theme.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAEnQAABJ0BfDRroQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJASURBVDiNhZJNaxNRFIaf+zF32iQtaRPaNKkIRtCFCxelRRcqXYhC/4FfqLhQ3Ii/QEr3KrjSlZuKP0EqbrpzIbgQa0tRSmMbY79MMsnMnbkuSoNa2xw4i8PlfXnue45wztGt7s68eohUJ5ME4thWRNSceT59OwTQ3cR3pl+/DGOurX9bIAgTegplhvv7JoBLAPIw8YNn7xptP3+1fOwota0W1Y0mQ7kBQm/g4v0nb1tdCXpTKdOvpfj0PeD02UmiMGK1rShmlJBS6K4GNrLYEBq/6ujPH1CtFubUOLHvEYpd+I7B7OzsvZGRkcfOOZ0kCUmS2H4XyNUdQ9pzZKI2KZkQbK/TlIP09Pt0Mpifn/9aKpWeFotFr1qtilqtJgqFgnfmeEZeGc/QDgIMMb7RqGbjL0oNkM/njyilpJSSsbExoigiiiJGR0vEcQKsobVCeWrfNzVAkiRks1kWFhZ4MzeHkILJ8xcol8ts7+wAoLRC6f0GEiCKItrtNoVCgbXqOouLX/CMIQgCrLX09Rq0b/A8TY/R9KUMSkohhBjSANZagiCg3mggBeRzWRaXlsjncgDOJFvvg5R/woZhWg6nPqpow9Z//tj8awt7J50bHCCd6UUKAYCA5MWj6xP/ogshtHPOyj/FAMYYjGcOOo1OOedsJ4M4jjsPvu/j+35nttYihCgdZCSFEGZlZaVWqVTqmxsb9dDGrl5vkU6nm5VKpb68vFwFRg5DAUixm4e+PDWVvXHz1rm9GcgAyjnH//o3B/f3lEZT1kYAAAAASUVORK5CYII=","encoding":"base64","height":16,"type":"png","width":16}}],"feedreader/images/combined/icons22.b64.json":[-1,-1,"b64","feedreader",{"qx/icon/Tango/22/actions/dialog-cancel.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMqSURBVDjLtZR7SJNRFMCvz/JRamFWJqZBJqlQ9IJKeijZk6ICTYoiwQgMamb/mCWhoWaUltqb1IwsqT8smmnqRK2WsunUTXM2dZube7mnZnE63/wcZs6M1YXf7r7xnd8999xzRwCA/A+m/PHdVeL4z8Wsm2Q9+7FfK8rt/qm4/fWGRp0k+3tDvjOjKossbypeVPTlfdTHPnZ8j6jxKL+tfAPzwz2XjOpssmbGYlYO2aYWpg4bpOdAzr+kVHRe1hsHs8AwkAR6cRzoJafBKE8BgywTlN2pJu7z0DLcmesfxYKKnU0mxTWzyDBwAQzSRIQBBkkC6ET7YUi4EQkH7ddd5kVMirsg+hAnrLtFNlsV1+WSfVpx/jfjYDqYkachV0DXewhU7XNBLVgCar4PKHlkjDZH0HxZBabBTJBwz0swc68pxUJWDG9E8xSGlflIHhhlF0HdGQia7giQcmI1XVWRnO6aHZw+dqxsSBiN4lnmBVQdnmBSFQLv1drK38RY2xiDvHh0WHUHhlUFmOVhDHQyBw52HDPV3iCxE1px9udC7wcKQYKO2gn1jqYrFPSyZ6P1eeSIRUy1FZ8ZxTcpC7GeyXhIJ1F8ALSi3aDticDneOC/DedObr9PD93SNT3xP8ZLY5RdgtZXYW9+yRiLf7w+nyQ1FJB0JPfTg9n3mormF3NK/ctaXwa/bi7xq6nMIAGTLpF9D+sgXy3wN4uHutdBf/PZrmlv3kzhPl9aqhXtoQ/UDpRd1zW4oLPN4o/3Z93W95+wdIpCwDCieKnNYgFza82QcJNFLOWdU1OHa5OY6lspN0mqap8z1nbtriDhMCQ21RilHp0VUTxtb7QlW11fNLSUrSy3SdxSFlKt6z814RY6gFqYMoL9vv2vxfSwoz4EzC0srWivRawXJwKndEX5tH+bdLAz4oZ4IPMQb8RnnJwzJEIlTDNQddWJGSBg7up4kUzcrYpxOCKuiCct80UCkCAkBAmj56DaR8ElAx2ZavaToMrI1WQhHWdvTUwNJ8SdztSHlvsjgcgyeqaefRd4ksU4eyEuE6XT1nhCTe3pnTjTUN8dxuttLf4nym7ZoDK3vXAAAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/dialog-ok.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKFSURBVDjL1ZQ/TBNxFMe/73531z8CpUSKaMWEqrFKCBGQBFFinHTyz9jFBRKJgWjiyuaim4NDY0yMNsFAnIyDiYOLSx2YDGIYStRBSKPi9a69u99zuF+1qS3EAIO/3Df3u8vl87733u89YmbsxtKwS+v/A+vbBZydnh843tv5JBzSDQBYK1pLy4X1y9sGRyLmTH862ffT9gAA7S3RvcuF9YS+I//NgJTB6dKC5NKO5FijP3sioi1zfGZ6frA1GsquFTeu5LOZQtNCCYLQCMyAUFEagocnc7H9idiDC6NHLkbDRij3cjHSDEoEEpoWgAGQrv3teHgyR/G2PbfPj6Sm0r2JQ64PWJZtRyLm7Lmbz781AhuCTgqNIETgWBOBY6q29PjMwtjRno77p/qS/YZpCl9KAICpawjpAgwGM4GIwQz4kqHSiQ3bhedLMAPwKt8ev1hM6wp6fWyg52461dVSdn1UoVIC3y0Xjuug7Eq4vkTFC1QdMQRA0whhUyBsCLQIMACpA0DJLmfz778ctMr+tURne7dd8eD5DNeT4K1PGnzJsBwPBODT52Ihn818pdrpdvrGs3Syq/3hscPdI7bLwpeMtojOdslxADARMYILIGJCkA4KIsjiD2v142rxzqt7l+aofmwOT+YoHovOnkjtm4h3tB4olRz79dsPVwGs1JisFwD4+Wxm9fdpaTaPR6fmUj3d8UfJrtjgm3crQ/lsZunfupF5U43PLNwamngarzFAVUObqaFj1ZaGkg5AKGn1dVPylFxm9ht2HhHpAEwlo25vqABSgSoAXHWvANCJqMzMbqOW9tXHmpKr3ldhpNzKWqdKjnpuXry6tJAKQnVgBiAbMX4BghJAT5xW1B8AAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/help-about.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKZSURBVDjLzdXdS1NhHMDxR51zShMV02wDrSRKkSgZIy17WWPTKPwHoqsKrKtuvAkqiS4CL+rCy8xlWmcyt5woTnPT3qamO7J5nNtqYb7GzluI3eiv3/RkV2qHjDrw4TwczvM9z3mBQwCA/A3kn4eHKLInbsfDTF+RZ8JV6N7R8LA18VosWLUcC1YuD1Pk6o6EAxRRRgZLg3z4GAgRPYTch5j4sT8O+9qVdVzEvMpPHYQ1EdPqaBu5Kzv89ikpHHlBamlHcstkr3ZgbvzcIh8+Aj/DQkQHs74Ti0xvnmfMltQy0kpq43O2DNPO/d55v0ngwkYQo0YQPpYBHyrZiG7AC4lMGYh0OXDvjsOcxyD6rJr3m4ftWv0MXT3Ph4o2IlwwH1gmC9iJVIgFUiBGK4H1KoDtTwCui4DwUg2zfea5oeZ03ZaPYsyWcXnBf5GLx1kmE2J+8ssHAuxrApwLdWDUpoaFHiM3alFd+q2XN25Pv77gNwtsQLUepJEXo26ytkq+HaOUGha7jcJYY0qNrK9i3JlN8eGj66t8g8Fe5MSoFaMWAkuOcvA1qp7L/tyCrgOdHF0ArAeD3Ri0o1aMNhIQGzD8pBiCTXs7ZIfD/bpRzpMOXCcG2zBGZYPYlAniIwLfHmC4Pg8+NZeMyA5H3adDvANXaM8BvuvMStShY6Lt+knh2cmVpftZsHRLCZ+pipDs8HT/+S9fe85+D9lLA66HittaLdFoNETrqlfemWrRM6zl1PK0rXKGEJKybRi3NLQb5Q8+zn11rybxBo7LkQGZUZW0N9RdUdwcaMh14/hw/HxpXtpm4VSUg/ahYqRDFciELqBqaW+Sjuuk8wpQBlJs+yhwS0TJSIV2SRPj1NKdKVESSvg/f01y/QBUi+5mlItMwQAAAABJRU5ErkJggg==","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/process-stop.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARISURBVDjLjZVdTBRXFMf/dz9Z2S8oWHaJW0jEtDVpu2mtqQ1ZGoixr+CLxaTYFmpS00YbavBJowHlwSY2KUkbrRX7Ynww0RorGF8gMUZj0iIWy0dZYcF0F5bvHXZnbs8ZZmC1S9tJTu5k7r2/8z8f946QUiLXc6G4uP2NmppGIQSQvUbTIMmElKLvzp2f94yN1efaL3KBOzdu/Dqye/dnytCQXabTa2Aa9fUMJoeu8nK1p6vrpz2x2If/Cb5YUvJNpK7uU4ZqmczaBK8zjBXrcPqcV1aW6enuvvDBxMTH64I7A4Fv36ur+yTFShnKacgC60BDsamcH2colO7t7j5f//Rpk7ncsqo0EPiuiqGDgytQiwWuVAqCRn5nJ8IY2XiOJankYGl01P5OVVXDj0VFHc+ALwaDP0RqaxuUx49XwqeN+UtLcFRWopDhrC5LvW95Gc5du1BkpEol5YtPntjfjUQ+Ol9YeEZPRSvwYl1Dw6CIRt16eKSKobadOzFXXw9HPA7P4cNIOBzQaN5PUHXfPixFIrCNjMB19CgmVFVPE0cgfL7Z6zdvVrBiAZrQlRrFSREk7+5d2KkjZCCApdOnUWS1ooDmRFMTMjU1sNlsyL9xAzN6+qXuVFupAYdmsWQXxyyMSmH/tbgI37FjsLNDgi+fOgXLwYPIVFfrUM+5c0jeu4cFFsWF5RY329HMsVlhaRi/c73jk5NwnzwJO20WwSC07dt1qKuzE9O9vZhXFH0v7+GINYpQo1TxY3teLRdJGoVi5cr0NBzkQNu8eSUyAojhYUwPDUGZmYG6sIAMO2DFZBtCIW2t3TQKIkutaX5S6di/H9iyBVbKMau1Op2wHDmCEBUvk0zqUM2AakY61sCmWjMdFHpBeTnyGhuBbdt0qPXSJYj2dtj4xBUWwnX8OF4hp5LKZKqVJstMBXepNM4/P55Nm5C3dy/UcBg2ru/lyxhua8N8LIatLhfsBw5A9fvhbGnBywTq6+hYgxunkRXHH92//9BTUSGl0Y+z0Sg0ajcLF+LqVYy0tiJJeU3TYfn1xAkoZ89CcDfcvo2Ra9dWofkeD2YVZZ5eF/S7ok0IZ0UodCtcWroj+eCB4LwJymf5oUOYuHIFMwMDz4RrIdWvNjfjD3IwNz6uf/d4vZhzOMb74/H3v5Tyt9VLiOCOsoKCrjdLSyun+vqECfk/o9vnw6zNFu1PJKqbpRz8x+3G8Jf8/l/CwWBkqr8/J/z5bx7K9ZTVOvR7IlH1lZRj697HYSG8n3u9198OBHYkBgbEv0G91B0x4M8zU1O1PcAgseZygqkrHDS84AVK2tzu798qKXlNTaf1NWRCXfkl6UeV+zWaSsVakskvxoFR2pcgG6cpNadigrtoKN5A9jqwlfrCTT+nfFrtpJVWakiNWkmhPl0cAYaTwCStn+DuIlZ63VRkOeCmtpLZ+SdhGLfnsmEKH3AWn2v/32J2hiTfJjZkAAAAAElFTkSuQmCC","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/actions/view-refresh.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAASVSURBVDjLtZVZbFRVGMf/5869s9zZS9spWwcqTNgKpSRlcWkDIoLyohYkwYSEaIwLUSuGxAcTfYAHA8GgSCAINCBS1xglEHALNAXbQgMCA5a1pbQz7UynM3Pv3OV8PjBTR2Z49CT/p5Pz+77z/77zHUZE+D+W+LCNZzd+v3Z8hecZj8tWKQiCW9X0RDyhDPVEk0cV4vtatzYqD56Z93Lz9I7dL10GAPZgxkvfaameGizdU18TrCnxyVbOCSYnmPz+fjyV4Zeu99/5qzva1tOnvNm5tzECAEuavmsE8aaTW59fUACe/doh/9NzKtuWL5oaMjlgEsHkHKYJcMoFIHAiECdcuj5w+8zFvu26memYPzN4uD+eDO9tWtxQYEXNhNIDTy2YElI0A9d7h9LRmMJcLrtQ4rJLLqdVsEoSDBA4J2QMjopyf+WShY7N0aHksH+Mp2wgngwXeDx1w1Hbuvnls8+F7w2fOHuDDJNkRdO+hJlp1k1R9bltc6om+NdUTxlXS6IoD41kYHCCYZLVJjvLUqoBgQmFxZsoKMuSilZ+/kJECZSV0O27keOtn764Lu9CpwF8tvjtr5+rHOt/b9rkwFyCYNUNA4rG4XKIYAyjvo6GkCQmX74RTVeNL//Z55IPMAEdxbrll20vfLtfObXoj87uS36nCE7I0hgEBl6QcSJpJDwVjna3y9FskVgEokV7WCuuUGp2NNRNmXEvlkGu+IwBgsAKrTBVdMYHU5u2fDDnHABg7eyi0PoNR5pCk8pWJ1PKiMgJImOwWBhEk1gsoRaCuTUzrmZW1Q9bDneSwEAmmMA4oHMTx9u6I/eYZ+G1T5ZnUhlzf1f3rYNd3UWimuKsAjBxZp1RVT5WJ2bJtbZstaArfPfmiCGsvLZzeQYA2netiebO7Pvtpi8U8HkXTffdYgxswauHdwM4UdDHRMSI7vskWRju9MXjbRd6Xzm/s7G3mC13IurE8T59XuvlWPvSTb/7U0nhkYKuAACe97p1k6Oi3O2tmzVhR8Nb32xctarF8iC4J6bVGmQ+rhpGAyPxc8lm6y0+hAgAAxgAgwOqZjKX1xWqmztp81XvwOrH3jjyhaakTrBAZbREdtbXTvZ8dK1nOPPj6e5lsksuTUVix4qCiQDZJtBgPJ12yHZneCAJTSdwIkswGJg3NlBam0wryWRaFUx92Oi6EtcESSzxj/E5E4mRQSOj7imwghsZQRIZO9Z6tWP/Vz+9fqr977DdIpDAACJCUjWhcmKCzeb2+HxOj9/rdfu9ZXan06npuh4b6D94Ztfa24wxcXS6McYsM1d9/EQoNK35dMu2FQPhk6okl3rq1nz47sRg8FFf6ZhxsIiCpnNoJgfnBKL7Ey8WHRqMR/p/Pbtn/UYACoA0gHQOLE1f+X41aUn7lWPb+wA4chJtTndV/fonA1XVDXZZ9omi1cbJIihqelBVlP6eruO77/7ZcjELzSnB/n2SzJ4HtGdly0rK1kPIltgEoGWl5kkBMEJE+n8GPWNMyIIceUAJgCUrlgXzLFzPwtNZcGY00Yd9powxls0wX/ngHJwXY/wDk1w8BWVrllQAAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/apps/internet-feed-reader.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMoSURBVDjL5ZXLa1xVHMc/53HvnUdm0olm0rTGpE0zoTENImKzMKD4oCDqxi5EfOCisX9AQTd1ZxFXCsZKmo0rNwa76EqsNmCphZQmNcHQJE4a0ObRSdp5z9xzj4u0UTtXKEJW/uC3OY8P3/M95/c7wlrLToRkh2LHwPr+gWtviFR8//6pWHt3CikexCfhl8vVYnb2ZO+n6yP/CnaS3pmOF492yPzMg8tz25pWpPgIaAQPHv/6zajrJEfc+EElytjanbtmOYiWfmqbGwRrN7DRJPrhdlRhDgIfrIXKbXQiHQn1WNbVuYFM+sOv9n7WPX9L3R3UBJEDlK7/gvBSuJlBvNYOKJSpFuJYY8D4UK8iHVdNDgunAXzxzNHclbmV6c5DT7rjt1/hu5U+RKqP6vxlYgPPoO06/DEBxWWc9gxeW4ZyXmONwRqD4wopC+wJfRXlauXC7KUJIxO7mUq8zejVR9CdhwlWZwhyi9j8JhaH4NYcIhpH1Srgb6lWrpLa0Z2hYKn90bRZsisLV5GxXcx7Q3zzaxIhExDbg60XobqBiLWAVOCXt3w2Bq0lwlOPhYIvf/7Ozefbfrd3Vpf5+cos6/kq11MvMZ7tRHgJRHwXUgPaxSxeoF4rbFuhZICj5cFQ8OSwcLoTeXls30+cevQ0zbUlgmiKGXeI8ekY1u3CzxsqMz9SurlILBGBexdYzaOTrXtDwW6RjHKUfDyxRJe3ygfpL9lcnMREUky3vMYPC4La5g2k3STWHAHrQ+BvqS5toJseag0tECvpkY5DTfVjgXgUTkQn+Pg3l909A5wvv8uBxLe0RYr42zVpwVqsUJjCcjG88iS9q1OXhHrqLbBie8Xx3iynZ2s0d/XzSfYJThzaaKzr3EKQX1s/GQqWQja1vv4Fzr7Bho2njsDY2fM83XOOSP8wze3P/WM++P59WTClSKjHuUowFmQvFqRfQQX1hjz28hBDR8aIeClU4KPsvTSo7mcpqWSvEEIDiL83eiGEN/oCh/vSvCrCWqqUoCVSqC1N+q8Dm3pQfu9sceRajjVrbfV+MIALBP+hBSvAWGv9BsX/76/pT4rDT4yg/r4PAAAAAElFTkSuQmCC","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/apps/preferences-theme.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAOwSURBVDjLnZRNbFRVFMd/99375r2ZzjBMp9PGtrSATWs1MVFWRkNUVuKCunEHgqALF7gzbjQ27mHFhmqsmmgEP7Z+kPiBLGQhC2JIjSYkTZpSsQMzTOe9+967x0VbmKHly5PcvJzc+373f//33KNEhAeNI+98WATMeq6gMfP+Yde5Rj0oeP/0N4u5nF91aayixLFihQSTDgaNqQ+mD377wOAj05++0Xb5t0tba9u+/+pjbrQiUB6I8OjuFyiE+WS4mH5Cdv3oyfdeX/HuB/rqu58d6x0aP7FzYnzbSuJ45eB+gnI/frHGxONPsmVglOKWsj849shh8g9dotOnu4UyhDrn04ozGisJi1sqHDh0gBs32vwTeywut+jpUbTalsAYfd9gAHFCmmaghKvLLeYvXaQct7i+fZKefIivDVE7IstSNgVPT08Xa7XazvU8SRKnGCCOYtpRikaQNKJ/aR4/iRE/x9XBHSQmIFIZ2slG8MzMzL5du3adLpVKxjmHcw4RoXplKf3tqqW9EhNoQZoNCr6mUCiRNOv0+NuJ2hE5LyBU2S3w8ePHHx4YGDhZqVR2j4+PmwsXLtzczBjDzh3bfW0WmLuScnHRoOvXCM3qvftsXlUewMTExC979+59fmxszPi+z9DQEGmaYq1lcnISEWH3M09x+KWneawWr22ou763hwEIgkBprenr62NpaYnR0VGq1SqFQgFrLe12G2MMWZbBmkJtNC5zdwcDOOcIwxBrLXNzc5w6fZqR0W3seW4PWmustTh369VqY0jiBO2bO1vhnMNaSxzHxHFMEIb8ffkyP/96jn+Xl8nn88RxTJIktxT5q0p9v1uxc5lRSnkbwMPDw3x35gwD/RX6axV+OnuWcrlMkiSICL7xKBTzZChKW4vYOKVcDCkXQ3K+Jo4tQK8BEJGbYIB2e4W+ahWALE27j2iv/dm0rfOLmX22GGeD9VJwvrnwx1+rjyjV53/4/EugYdYVdzYj3/cpFXsREdpR1gXuK+ofvz7x1lGAl188WDl1arZ+250lIpJs6rynPIIgQERIbNw953lOROxaeuULPuqcthuq4raf0dogIng65f+EB2Ct9boVK3xjMEajve7OurCw0KuUKtwTrJQK6vV6bK1FRBARjDGEYZ5CoUi65r+I0Gw2mZ+fj4DyPVutiDAyMvLE1NTUPqWUW6sSrxVFb3qeDvI5/5hSygI0Go3W7OzsOeD3Dp/v0GdXq0Gtb9I5Dh15zXTma9ZtWLfZ+A9Ht91MK/ug9AAAAABJRU5ErkJggg==","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/places/folder-open.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKCSURBVDjLtZU/T1RBFMXPnbfsLiwLCIUaI0YLgzHRGDtDY0P8ABYUxsQKGxP9BGBvp7EwMVqSWJhQSW9jI8ZYSCMhRsTAAsvuvr8z91js27e7LIpImLyTmzeZ+b377pybEZI4jpHrfLl27/WIly+c2m+hWtn9+HJ67b/Aly+eWRw/PXLJOoIkkP4NAcSxbUw+mJ95/3R64dDg0aFiv2+lHCUK1Sa8VapCX65c6i/eAXB4sBKkKpzrBpOEtQ7lodLU7cfvPo2VCzkRgRGBeBABUPOT8Ov3takPz+5WesDWORjnUrBCWxk3H/QX88MCXA0pEAhEBEYFnhFY0YRx7iyAXrAqQMdusBIEsnpDBAJATBNKY0AKVPnnUjinFKNwqlDXBuseS7YyVSMwJDwaOKd/BYt4HRkrew5RpAlWERgKSAMQPRkLSdx8+Hby+sTJFzByHoIiW4vS2maey3ZlVWlPkPQ8s7LyY2fhzdytRzkA8MPQjY6VJyIHOUKzSanYd+FnpTEMAAYAkkRWk9jWjtrG+ZygsuNvZOCl8eX1KE7qhwWRTSe15KwiSJJvGZizs+qHdme/jU6JxBJRoghihR85NEKHWmBRDy0aUVvb9UjjRvS5yxW1MN4asAolUrHnpA8a1XrQCBJZ7QJvVcPK4JDCkd0O2McUnROd89VqUF8aX17PSgEA21V/ebMa0I8UftyrYK+SpsJUQezwa2N3E3Nz+SxjESkAeHJj5tU5ky9cgTpPlR6ohuo8koZUj6pGRAgxToxxIkZbkcr6l8Xn9wGcEJGKtDtKBEAeQBHAAIBSqsE05tqtgQhAo0M+gCCNCUnKv15N6YdTtxy8SY7rzjM4pvEbDQLMgqmYRyAAAAAASUVORK5CYII=","encoding":"base64","height":22,"type":"png","width":22},"qx/icon/Tango/22/places/folder.png":{"data":"iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAGWAAABlgBH4cC6gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAJiSURBVDjLtZW/axRBFMe/7+1e7k5MzMYgQTCNlqbQKv+AKcUqVcTCgGCvdpYGRMFWbEwTAmks7AL2oqBtClFDRMEYL3u7d3vz4z2L3Tt3EyU5jgy8YWZ/fObNd76PIVXFSbSwPCECXbm9NluvMR380IqV989vbh8XTOWMF+6/ejw/d2G5mzkoAB10AEiw9WV34/Wj63eOA+ZK+kFwfqxej1KHKLEaJUaittEoNhLFPUSTE435xcWNYHgpVNU5D+8FogoRhapCUWTOtcudS40Py0/e+DBkYsr1YyKAQFuf91Y2n95YPwT2qnDi4UUgUgIXcGLmqamJOUMEJwARgZnBRGBieJUFAOsDjYlAt1Y2P81Mj88EzM2+rH31qTIrnlD5HUAEqGh3Zzf+vvrg2sWw2KU+fDlJ3Gw0R3EfEZqznJ/b4PAy5zoh82jeZUZmJK2Ae8YnYTAiOGBkxlXBWWaTMKCRwAETOj2bVFzR7pj2UVgR5DZUrYz7bSwMkHRNXAEnmY2ldHCq+Y9eFM4X1jtiYYWinZp2BZxmJu5Zj8yUimNIKZwTZD3XqoBF8GM/tTC+Dyynj0NOrmaad/uphRPZqYCN8V9/JxnCsFbV9QAcUFB/mlfyoFLSjoUxfrsCVuve/fzVNmeno7HhBPi7j929uKfOvC2VNNUBjF9dena3eebckoqwqjJUAlFhqLAqCCp5jkQCIiHiPJgEFPhO69vqx7V7LwC0+mACUAcwUYrTAE4V0QBQK3yvACyADEAXQAogLmIPQKKqlv53NRWLMYCgiLAkuwfgirHqPyB0Unce44TaH+gyYWDgguJkAAAAAElFTkSuQmCC","encoding":"base64","height":22,"type":"png","width":22}}],"qx/decoration/Modern/app-header.png":[110,20,"png","qx"],"qx/decoration/Modern/arrows-combined.png":[87,8,"png","qx"],"qx/decoration/Modern/arrows/down-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-74,0],"qx/decoration/Modern/arrows/down-small-invert.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-69,0],"qx/decoration/Modern/arrows/down-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-49,0],"qx/decoration/Modern/arrows/down.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-20,0],"qx/decoration/Modern/arrows/forward.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-59,0],"qx/decoration/Modern/arrows/left-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",0,0],"qx/decoration/Modern/arrows/left.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-44,0],"qx/decoration/Modern/arrows/rewind.png":[10,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-10,0],"qx/decoration/Modern/arrows/right-invert.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-5,0],"qx/decoration/Modern/arrows/right.png":[5,8,"png","qx","qx/decoration/Modern/arrows-combined.png",-54,0],"qx/decoration/Modern/arrows/up-invert.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-28,0],"qx/decoration/Modern/arrows/up-small.png":[5,3,"png","qx","qx/decoration/Modern/arrows-combined.png",-82,0],"qx/decoration/Modern/arrows/up.png":[8,5,"png","qx","qx/decoration/Modern/arrows-combined.png",-36,0],"qx/decoration/Modern/button-lr-combined.png":[72,52,"png","qx"],"qx/decoration/Modern/button-tb-combined.png":[4,216,"png","qx"],"qx/decoration/Modern/checkradio-combined.png":[504,14,"png","qx"],"qx/decoration/Modern/colorselector-combined.gif":[46,11,"gif","qx"],"qx/decoration/Modern/colorselector/brightness-field.png":[19,256,"png","qx"],"qx/decoration/Modern/colorselector/brightness-handle.gif":[35,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",0,0],"qx/decoration/Modern/colorselector/huesaturation-field.jpg":[256,256,"jpeg","qx"],"qx/decoration/Modern/colorselector/huesaturation-handle.gif":[11,11,"gif","qx","qx/decoration/Modern/colorselector-combined.gif",-35,0],"qx/decoration/Modern/cursors-combined.gif":[71,20,"gif","qx"],"qx/decoration/Modern/cursors/alias.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-52,0],"qx/decoration/Modern/cursors/copy.gif":[19,15,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-33,0],"qx/decoration/Modern/cursors/move.gif":[13,9,"gif","qx","qx/decoration/Modern/cursors-combined.gif",-20,0],"qx/decoration/Modern/cursors/nodrop.gif":[20,20,"gif","qx","qx/decoration/Modern/cursors-combined.gif",0,0],"qx/decoration/Modern/form/button-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-72],"qx/decoration/Modern/form/button-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-204],"qx/decoration/Modern/form/button-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-188],"qx/decoration/Modern/form/button-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-36],"qx/decoration/Modern/form/button-checked-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-84],"qx/decoration/Modern/form/button-checked-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-184],"qx/decoration/Modern/form/button-checked-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-156],"qx/decoration/Modern/form/button-checked-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-208],"qx/decoration/Modern/form/button-checked-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-160],"qx/decoration/Modern/form/button-checked-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-checked-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-40,0],"qx/decoration/Modern/form/button-checked-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-32,0],"qx/decoration/Modern/form/button-checked-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-28],"qx/decoration/Modern/form/button-checked-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-24],"qx/decoration/Modern/form/button-checked-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-48],"qx/decoration/Modern/form/button-checked-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-checked-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-16,0],"qx/decoration/Modern/form/button-checked-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-60,0],"qx/decoration/Modern/form/button-checked-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-140],"qx/decoration/Modern/form/button-checked-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-56],"qx/decoration/Modern/form/button-checked-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-112],"qx/decoration/Modern/form/button-checked.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-disabled-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-40],"qx/decoration/Modern/form/button-disabled-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-136],"qx/decoration/Modern/form/button-disabled-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-16],"qx/decoration/Modern/form/button-disabled-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-disabled-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-68,0],"qx/decoration/Modern/form/button-disabled-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-4,0],"qx/decoration/Modern/form/button-disabled-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-116],"qx/decoration/Modern/form/button-disabled-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-168],"qx/decoration/Modern/form/button-disabled-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-60],"qx/decoration/Modern/form/button-disabled.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-68],"qx/decoration/Modern/form/button-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-144],"qx/decoration/Modern/form/button-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-8],"qx/decoration/Modern/form/button-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-24,0],"qx/decoration/Modern/form/button-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-44,0],"qx/decoration/Modern/form/button-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-192],"qx/decoration/Modern/form/button-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-148],"qx/decoration/Modern/form/button-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-104],"qx/decoration/Modern/form/button-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-hovered-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-108],"qx/decoration/Modern/form/button-hovered-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-32],"qx/decoration/Modern/form/button-hovered-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-128],"qx/decoration/Modern/form/button-hovered-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-hovered-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-20,0],"qx/decoration/Modern/form/button-hovered-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-48,0],"qx/decoration/Modern/form/button-hovered-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-44],"qx/decoration/Modern/form/button-hovered-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-76],"qx/decoration/Modern/form/button-hovered-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-88],"qx/decoration/Modern/form/button-hovered.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-56,0],"qx/decoration/Modern/form/button-preselected-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-124],"qx/decoration/Modern/form/button-preselected-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-176],"qx/decoration/Modern/form/button-preselected-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-200],"qx/decoration/Modern/form/button-preselected-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,0],"qx/decoration/Modern/form/button-preselected-focused-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-4],"qx/decoration/Modern/form/button-preselected-focused-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-152],"qx/decoration/Modern/form/button-preselected-focused-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-preselected-focused-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-28,0],"qx/decoration/Modern/form/button-preselected-focused-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-36,0],"qx/decoration/Modern/form/button-preselected-focused-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-196],"qx/decoration/Modern/form/button-preselected-focused-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-164],"qx/decoration/Modern/form/button-preselected-focused-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-212],"qx/decoration/Modern/form/button-preselected-focused.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-preselected-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-8,0],"qx/decoration/Modern/form/button-preselected-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-64,0],"qx/decoration/Modern/form/button-preselected-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-96],"qx/decoration/Modern/form/button-preselected-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-80],"qx/decoration/Modern/form/button-preselected-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-132],"qx/decoration/Modern/form/button-preselected.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-pressed-b.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-12],"qx/decoration/Modern/form/button-pressed-bl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-52],"qx/decoration/Modern/form/button-pressed-br.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-20],"qx/decoration/Modern/form/button-pressed-c.png":[40,52,"png","qx"],"qx/decoration/Modern/form/button-pressed-l.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-52,0],"qx/decoration/Modern/form/button-pressed-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",-12,0],"qx/decoration/Modern/form/button-pressed-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-100],"qx/decoration/Modern/form/button-pressed-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-172],"qx/decoration/Modern/form/button-pressed-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-64],"qx/decoration/Modern/form/button-pressed.png":[80,60,"png","qx"],"qx/decoration/Modern/form/button-r.png":[4,52,"png","qx","qx/decoration/Modern/button-lr-combined.png",0,0],"qx/decoration/Modern/form/button-t.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-92],"qx/decoration/Modern/form/button-tl.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-120],"qx/decoration/Modern/form/button-tr.png":[4,4,"png","qx","qx/decoration/Modern/button-tb-combined.png",0,-180],"qx/decoration/Modern/form/button.png":[80,60,"png","qx"],"qx/decoration/Modern/form/checkbox-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-126,0],"qx/decoration/Modern/form/checkbox-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-322,0],"qx/decoration/Modern/form/checkbox-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-294,0],"qx/decoration/Modern/form/checkbox-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-364,0],"qx/decoration/Modern/form/checkbox-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-490,0],"qx/decoration/Modern/form/checkbox-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-224,0],"qx/decoration/Modern/form/checkbox-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-378,0],"qx/decoration/Modern/form/checkbox-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-84,0],"qx/decoration/Modern/form/checkbox-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-182,0],"qx/decoration/Modern/form/checkbox-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-42,0],"qx/decoration/Modern/form/checkbox-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-392,0],"qx/decoration/Modern/form/checkbox-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-210,0],"qx/decoration/Modern/form/checkbox-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-14,0],"qx/decoration/Modern/form/checkbox-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-238,0],"qx/decoration/Modern/form/checkbox-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-462,0],"qx/decoration/Modern/form/checkbox-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-112,0],"qx/decoration/Modern/form/checkbox-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-448,0],"qx/decoration/Modern/form/checkbox-undetermined-disabled.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-focused.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-hovered.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined-invalid.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox-undetermined.png":[14,14,"png","qx"],"qx/decoration/Modern/form/checkbox.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-140,0],"qx/decoration/Modern/form/checked-disabled.png":[6,6,"png","qx"],"qx/decoration/Modern/form/checked.png":[6,6,"png","qx"],"qx/decoration/Modern/form/input-focused.png":[40,12,"png","qx"],"qx/decoration/Modern/form/input.png":[84,12,"png","qx"],"qx/decoration/Modern/form/radiobutton-checked-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-196,0],"qx/decoration/Modern/form/radiobutton-checked-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-168,0],"qx/decoration/Modern/form/radiobutton-checked-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-98,0],"qx/decoration/Modern/form/radiobutton-checked-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-308,0],"qx/decoration/Modern/form/radiobutton-checked-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-406,0],"qx/decoration/Modern/form/radiobutton-checked-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-28,0],"qx/decoration/Modern/form/radiobutton-checked-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-350,0],"qx/decoration/Modern/form/radiobutton-checked-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-266,0],"qx/decoration/Modern/form/radiobutton-checked.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-252,0],"qx/decoration/Modern/form/radiobutton-disabled.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-336,0],"qx/decoration/Modern/form/radiobutton-focused-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-476,0],"qx/decoration/Modern/form/radiobutton-focused.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-420,0],"qx/decoration/Modern/form/radiobutton-hovered-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-56,0],"qx/decoration/Modern/form/radiobutton-hovered.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",0,0],"qx/decoration/Modern/form/radiobutton-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-154,0],"qx/decoration/Modern/form/radiobutton-pressed-invalid.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-434,0],"qx/decoration/Modern/form/radiobutton-pressed.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-280,0],"qx/decoration/Modern/form/radiobutton.png":[14,14,"png","qx","qx/decoration/Modern/checkradio-combined.png",-70,0],"qx/decoration/Modern/form/tooltip-error-arrow.png":[11,14,"png","qx"],"qx/decoration/Modern/form/tooltip-error-b.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-30],"qx/decoration/Modern/form/tooltip-error-bl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-24],"qx/decoration/Modern/form/tooltip-error-br.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-c.png":[40,18,"png","qx"],"qx/decoration/Modern/form/tooltip-error-l.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",-6,0],"qx/decoration/Modern/form/tooltip-error-r.png":[6,18,"png","qx","qx/decoration/Modern/tooltip-error-lr-combined.png",0,0],"qx/decoration/Modern/form/tooltip-error-t.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-6],"qx/decoration/Modern/form/tooltip-error-tl.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-18],"qx/decoration/Modern/form/tooltip-error-tr.png":[6,6,"png","qx","qx/decoration/Modern/tooltip-error-tb-combined.png",0,-12],"qx/decoration/Modern/form/tooltip-error.png":[127,30,"png","qx"],"qx/decoration/Modern/form/undetermined-disabled.png":[6,2,"png","qx"],"qx/decoration/Modern/form/undetermined.png":[6,2,"png","qx"],"qx/decoration/Modern/group-item.png":[110,20,"png","qx"],"qx/decoration/Modern/groupbox-lr-combined.png":[8,51,"png","qx"],"qx/decoration/Modern/groupbox-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-b.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-12],"qx/decoration/Modern/groupbox/groupbox-bl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-16],"qx/decoration/Modern/groupbox/groupbox-br.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-8],"qx/decoration/Modern/groupbox/groupbox-c.png":[40,51,"png","qx"],"qx/decoration/Modern/groupbox/groupbox-l.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",-4,0],"qx/decoration/Modern/groupbox/groupbox-r.png":[4,51,"png","qx","qx/decoration/Modern/groupbox-lr-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-t.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-4],"qx/decoration/Modern/groupbox/groupbox-tl.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,0],"qx/decoration/Modern/groupbox/groupbox-tr.png":[4,4,"png","qx","qx/decoration/Modern/groupbox-tb-combined.png",0,-20],"qx/decoration/Modern/groupbox/groupbox.png":[255,59,"png","qx"],"qx/decoration/Modern/menu-background-combined.png":[80,49,"png","qx"],"qx/decoration/Modern/menu-checkradio-combined.gif":[64,7,"gif","qx"],"qx/decoration/Modern/menu/background.png":[40,49,"png","qx","qx/decoration/Modern/menu-background-combined.png",-40,0],"qx/decoration/Modern/menu/bar-background.png":[40,20,"png","qx","qx/decoration/Modern/menu-background-combined.png",0,0],"qx/decoration/Modern/menu/checkbox-invert.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-16,0],"qx/decoration/Modern/menu/checkbox.gif":[16,7,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-48,0],"qx/decoration/Modern/menu/radiobutton-invert.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",-32,0],"qx/decoration/Modern/menu/radiobutton.gif":[16,5,"gif","qx","qx/decoration/Modern/menu-checkradio-combined.gif",0,0],"qx/decoration/Modern/pane-lr-combined.png":[12,238,"png","qx"],"qx/decoration/Modern/pane-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/pane/pane-b.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-30],"qx/decoration/Modern/pane/pane-bl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-18],"qx/decoration/Modern/pane/pane-br.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-12],"qx/decoration/Modern/pane/pane-c.png":[40,238,"png","qx"],"qx/decoration/Modern/pane/pane-l.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",0,0],"qx/decoration/Modern/pane/pane-r.png":[6,238,"png","qx","qx/decoration/Modern/pane-lr-combined.png",-6,0],"qx/decoration/Modern/pane/pane-t.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,0],"qx/decoration/Modern/pane/pane-tl.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-24],"qx/decoration/Modern/pane/pane-tr.png":[6,6,"png","qx","qx/decoration/Modern/pane-tb-combined.png",0,-6],"qx/decoration/Modern/pane/pane.png":[185,250,"png","qx"],"qx/decoration/Modern/scrollbar-combined.png":[54,12,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-horizontal.png":[76,15,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-horizontal.png":[19,10,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-pressed-vertical.png":[10,19,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-bg-vertical.png":[15,76,"png","qx"],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-horizontal.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-34,0],"qx/decoration/Modern/scrollbar/scrollbar-button-bg-vertical.png":[10,12,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-6,0],"qx/decoration/Modern/scrollbar/scrollbar-down.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-28,0],"qx/decoration/Modern/scrollbar/scrollbar-left.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-50,0],"qx/decoration/Modern/scrollbar/scrollbar-right.png":[4,6,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-46,0],"qx/decoration/Modern/scrollbar/scrollbar-up.png":[6,4,"png","qx","qx/decoration/Modern/scrollbar-combined.png",0,0],"qx/decoration/Modern/scrollbar/slider-knob-background.png":[12,10,"png","qx","qx/decoration/Modern/scrollbar-combined.png",-16,0],"qx/decoration/Modern/selection.png":[110,20,"png","qx"],"qx/decoration/Modern/shadow-lr-combined.png":[30,382,"png","qx"],"qx/decoration/Modern/shadow-small-lr-combined.png":[10,136,"png","qx"],"qx/decoration/Modern/shadow-small-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/shadow-tb-combined.png":[15,90,"png","qx"],"qx/decoration/Modern/shadow/shadow-b.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-30],"qx/decoration/Modern/shadow/shadow-bl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-br.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-45],"qx/decoration/Modern/shadow/shadow-c.png":[40,382,"png","qx"],"qx/decoration/Modern/shadow/shadow-l.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-r.png":[15,382,"png","qx","qx/decoration/Modern/shadow-lr-combined.png",-15,0],"qx/decoration/Modern/shadow/shadow-small-b.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-20],"qx/decoration/Modern/shadow/shadow-small-bl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-15],"qx/decoration/Modern/shadow/shadow-small-br.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-10],"qx/decoration/Modern/shadow/shadow-small-c.png":[40,136,"png","qx"],"qx/decoration/Modern/shadow/shadow-small-l.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-r.png":[5,136,"png","qx","qx/decoration/Modern/shadow-small-lr-combined.png",-5,0],"qx/decoration/Modern/shadow/shadow-small-t.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-5],"qx/decoration/Modern/shadow/shadow-small-tl.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow-small-tr.png":[5,5,"png","qx","qx/decoration/Modern/shadow-small-tb-combined.png",0,-25],"qx/decoration/Modern/shadow/shadow-small.png":[114,146,"png","qx"],"qx/decoration/Modern/shadow/shadow-t.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-60],"qx/decoration/Modern/shadow/shadow-tl.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,-75],"qx/decoration/Modern/shadow/shadow-tr.png":[15,15,"png","qx","qx/decoration/Modern/shadow-tb-combined.png",0,0],"qx/decoration/Modern/shadow/shadow.png":[381,412,"png","qx"],"qx/decoration/Modern/splitpane-knobs-combined.png":[8,9,"png","qx"],"qx/decoration/Modern/splitpane/knob-horizontal.png":[1,8,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,-1],"qx/decoration/Modern/splitpane/knob-vertical.png":[8,1,"png","qx","qx/decoration/Modern/splitpane-knobs-combined.png",0,0],"qx/decoration/Modern/table-combined.png":[94,18,"png","qx"],"qx/decoration/Modern/table/ascending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",0,0],"qx/decoration/Modern/table/boolean-false.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-80,0],"qx/decoration/Modern/table/boolean-true.png":[14,14,"png","qx","qx/decoration/Modern/table-combined.png",-26,0],"qx/decoration/Modern/table/descending.png":[8,5,"png","qx","qx/decoration/Modern/table-combined.png",-18,0],"qx/decoration/Modern/table/header-cell.png":[40,18,"png","qx","qx/decoration/Modern/table-combined.png",-40,0],"qx/decoration/Modern/table/select-column-order.png":[10,9,"png","qx","qx/decoration/Modern/table-combined.png",-8,0],"qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png":[10,14,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-left-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-left-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-lr-combined.png":[10,37,"png","qx"],"qx/decoration/Modern/tabview-button-right-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png":[6,39,"png","qx"],"qx/decoration/Modern/tabview-button-right-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-lr-combined.png":[10,12,"png","qx"],"qx/decoration/Modern/tabview-button-top-active-tb-combined.png":[5,30,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-b-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png":[6,15,"png","qx"],"qx/decoration/Modern/tabview-button-top-inactive-t-combined.png":[3,9,"png","qx"],"qx/decoration/Modern/tabview-pane-lr-combined.png":[60,2,"png","qx"],"qx/decoration/Modern/tabview-pane-tb-combined.png":[30,180,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-bottom-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-bottom-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-bottom-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-active-l.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-r.png":[5,14,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-bottom-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-bottom-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-bottom-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-bottom-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-active.png":[49,24,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-bottom-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-bottom-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-bottom-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-left-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-left-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-left-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-left-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-left-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-left-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-left-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-left-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-left-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-left-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-left-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-left-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-left-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-right-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-right-active-c.png":[40,37,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-active-l.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-active-r.png":[5,37,"png","qx","qx/decoration/Modern/tabview-button-right-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-right-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-right-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-right-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-right-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-right-active.png":[22,47,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive-c.png":[40,39,"png","qx"],"qx/decoration/Modern/tabview/tab-button-right-inactive-l.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-r.png":[3,39,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-right-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-right-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-right-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-right-inactive.png":[20,45,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-b.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-20],"qx/decoration/Modern/tabview/tab-button-top-active-bl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-15],"qx/decoration/Modern/tabview/tab-button-top-active-br.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-10],"qx/decoration/Modern/tabview/tab-button-top-active-c.png":[40,14,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-active-l.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-r.png":[5,12,"png","qx","qx/decoration/Modern/tabview-button-top-active-lr-combined.png",-5,0],"qx/decoration/Modern/tabview/tab-button-top-active-t.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-active-tl.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-25],"qx/decoration/Modern/tabview/tab-button-top-active-tr.png":[5,5,"png","qx","qx/decoration/Modern/tabview-button-top-active-tb-combined.png",0,-5],"qx/decoration/Modern/tabview/tab-button-top-active.png":[48,22,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-b.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive-bl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-br.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-b-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-c.png":[40,15,"png","qx"],"qx/decoration/Modern/tabview/tab-button-top-inactive-l.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-r.png":[3,15,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-lr-combined.png",-3,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-t.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-3],"qx/decoration/Modern/tabview/tab-button-top-inactive-tl.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,0],"qx/decoration/Modern/tabview/tab-button-top-inactive-tr.png":[3,3,"png","qx","qx/decoration/Modern/tabview-button-top-inactive-t-combined.png",0,-6],"qx/decoration/Modern/tabview/tab-button-top-inactive.png":[45,21,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-b.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-60],"qx/decoration/Modern/tabview/tabview-pane-bl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-br.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-120],"qx/decoration/Modern/tabview/tabview-pane-c.png":[40,120,"png","qx"],"qx/decoration/Modern/tabview/tabview-pane-l.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",0,0],"qx/decoration/Modern/tabview/tabview-pane-r.png":[30,2,"png","qx","qx/decoration/Modern/tabview-pane-lr-combined.png",-30,0],"qx/decoration/Modern/tabview/tabview-pane-t.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-150],"qx/decoration/Modern/tabview/tabview-pane-tl.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-30],"qx/decoration/Modern/tabview/tabview-pane-tr.png":[30,30,"png","qx","qx/decoration/Modern/tabview-pane-tb-combined.png",0,-90],"qx/decoration/Modern/tabview/tabview-pane.png":[185,250,"png","qx"],"qx/decoration/Modern/toolbar-combined.png":[80,130,"png","qx"],"qx/decoration/Modern/toolbar/toolbar-gradient-blue.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",-40,0],"qx/decoration/Modern/toolbar/toolbar-gradient.png":[40,130,"png","qx","qx/decoration/Modern/toolbar-combined.png",0,0],"qx/decoration/Modern/toolbar/toolbar-handle-knob.gif":[1,8,"gif","qx"],"qx/decoration/Modern/toolbar/toolbar-part.gif":[7,1,"gif","qx"],"qx/decoration/Modern/tooltip-error-lr-combined.png":[12,18,"png","qx"],"qx/decoration/Modern/tooltip-error-tb-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/tree-combined.png":[32,8,"png","qx"],"qx/decoration/Modern/tree/closed-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-24,0],"qx/decoration/Modern/tree/closed.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-16,0],"qx/decoration/Modern/tree/open-selected.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",-8,0],"qx/decoration/Modern/tree/open.png":[8,8,"png","qx","qx/decoration/Modern/tree-combined.png",0,0],"qx/decoration/Modern/window-captionbar-buttons-combined.png":[108,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-active-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-lr-inactive-combined.png":[12,9,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-active-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-captionbar-tb-inactive-combined.png":[6,36,"png","qx"],"qx/decoration/Modern/window-statusbar-lr-combined.png":[8,7,"png","qx"],"qx/decoration/Modern/window-statusbar-tb-combined.png":[4,24,"png","qx"],"qx/decoration/Modern/window/captionbar-active-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-active-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-active-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-active-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-active-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-active-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-active-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,0],"qx/decoration/Modern/window/captionbar-active-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-active-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-active.png":[69,21,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-b.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-24],"qx/decoration/Modern/window/captionbar-inactive-bl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-6],"qx/decoration/Modern/window/captionbar-inactive-br.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-30],"qx/decoration/Modern/window/captionbar-inactive-c.png":[40,9,"png","qx"],"qx/decoration/Modern/window/captionbar-inactive-l.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-r.png":[6,9,"png","qx","qx/decoration/Modern/window-captionbar-lr-inactive-combined.png",-6,0],"qx/decoration/Modern/window/captionbar-inactive-t.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,0],"qx/decoration/Modern/window/captionbar-inactive-tl.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-12],"qx/decoration/Modern/window/captionbar-inactive-tr.png":[6,6,"png","qx","qx/decoration/Modern/window-captionbar-tb-inactive-combined.png",0,-18],"qx/decoration/Modern/window/captionbar-inactive.png":[69,21,"png","qx"],"qx/decoration/Modern/window/close-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-27,0],"qx/decoration/Modern/window/close-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-9,0],"qx/decoration/Modern/window/close-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-90,0],"qx/decoration/Modern/window/maximize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-18,0],"qx/decoration/Modern/window/maximize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-81,0],"qx/decoration/Modern/window/maximize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-54,0],"qx/decoration/Modern/window/minimize-active-hovered.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-63,0],"qx/decoration/Modern/window/minimize-active.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-72,0],"qx/decoration/Modern/window/minimize-inactive.png":[9,9,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-36,0],"qx/decoration/Modern/window/restore-active-hovered.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",0,0],"qx/decoration/Modern/window/restore-active.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-99,0],"qx/decoration/Modern/window/restore-inactive.png":[9,8,"png","qx","qx/decoration/Modern/window-captionbar-buttons-combined.png",-45,0],"qx/decoration/Modern/window/statusbar-b.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-16],"qx/decoration/Modern/window/statusbar-bl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-20],"qx/decoration/Modern/window/statusbar-br.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-4],"qx/decoration/Modern/window/statusbar-c.png":[40,7,"png","qx"],"qx/decoration/Modern/window/statusbar-l.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",-4,0],"qx/decoration/Modern/window/statusbar-r.png":[4,7,"png","qx","qx/decoration/Modern/window-statusbar-lr-combined.png",0,0],"qx/decoration/Modern/window/statusbar-t.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,0],"qx/decoration/Modern/window/statusbar-tl.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-8],"qx/decoration/Modern/window/statusbar-tr.png":[4,4,"png","qx","qx/decoration/Modern/window-statusbar-tb-combined.png",0,-12],"qx/decoration/Modern/window/statusbar.png":[369,15,"png","qx"],"qx/icon/Tango/16/actions/dialog-cancel.png":[16,16,"png","qx","feedreader/images/combined/icons16.b64.json",0,-16],"qx/icon/Tango/16/actions/dialog-ok.png":[16,16,"png","qx","feedreader/images/combined/icons16.b64.json",0,-32],"qx/icon/Tango/16/actions/view-refresh.png":[16,16,"png","qx"],"qx/icon/Tango/16/actions/window-close.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/office-calendar.png":[16,16,"png","qx"],"qx/icon/Tango/16/apps/utilities-color-chooser.png":[16,16,"png","qx"],"qx/icon/Tango/16/mimetypes/office-document.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder-open.png":[16,16,"png","qx"],"qx/icon/Tango/16/places/folder.png":[16,16,"png","qx"],"qx/icon/Tango/22/mimetypes/office-document.png":[22,22,"png","qx"],"qx/icon/Tango/22/places/folder-open.png":[22,22,"png","qx","feedreader/images/combined/icons22.b64.json",0,-154],"qx/icon/Tango/22/places/folder.png":[22,22,"png","qx","feedreader/images/combined/icons22.b64.json",0,-176],"qx/icon/Tango/32/mimetypes/office-document.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder-open.png":[32,32,"png","qx"],"qx/icon/Tango/32/places/folder.png":[32,32,"png","qx"],"qx/mobile/css/LICENSE":"qx","qx/mobile/css/android/android.css":"qx","qx/mobile/css/common/main.css":"qx","qx/mobile/css/ios/ios.css":"qx","qx/mobile/icon/android/arrow.png":[25,20,"png","qx"],"qx/mobile/icon/android/arrow_pressed.png":[25,20,"png","qx"],"qx/mobile/icon/android/cancel.png":[20,20,"png","qx"],"qx/mobile/icon/android/checkbox-gray.png":[22,19,"png","qx"],"qx/mobile/icon/android/checkbox-green.png":[22,19,"png","qx"],"qx/mobile/icon/android/loading.png":[32,32,"png","qx"],"qx/mobile/icon/android/on_off.png":[149,27,"png","qx"],"qx/mobile/icon/android/scrollbar.png":[7,7,"png","qx"],"qx/mobile/icon/ios/arrow.png":[25,20,"png","qx"],"qx/mobile/icon/ios/arrow_pressed.png":[25,20,"png","qx"],"qx/mobile/icon/ios/backButton.png":[43,30,"png","qx"],"qx/mobile/icon/ios/backButton_pressed.png":[43,30,"png","qx"],"qx/mobile/icon/ios/cancel.png":[20,20,"png","qx"],"qx/mobile/icon/ios/checkbox.png":[22,21,"png","qx"],"qx/mobile/icon/ios/loading.png":[32,32,"png","qx"],"qx/mobile/icon/ios/on_off.png":[149,27,"png","qx"],"qx/mobile/icon/ios/pinstripes.png":[7,1,"png","qx"],"qx/mobile/icon/ios/scrollbar.png":[7,7,"png","qx"],"qx/mobile/icon/ios/toolButton.png":[16,30,"png","qx"],"qx/mobile/icon/ios/toolButton_pressed.png":[16,30,"png","qx"],"qx/mobile/js/LICENSE":"qx","qx/mobile/js/iscroll-debug.js":"qx","qx/mobile/js/iscroll.js":"qx","qx/static/blank.gif":[1,1,"gif","qx"]},"translations":{"C":{},"de":{"Static Feeds":"Vordefinierte Quellen","User Feeds":"Eigene Quellen"},"en":{},"es":{"Static Feeds":"Feeds Estáticos","User Feeds":"Feeds del Usuario"},"fr":{"Static Feeds":"Fils statiques","User Feeds":"Fils de l'utilisateur"},"it":{"Static Feeds":"Feed statici","User Feeds":"Feed utente"},"nl":{"Static Feeds":"Statische Feeds","User Feeds":"Gebruiker Feeds"},"ro":{"Static Feeds":"Fluxuri statice","User Feeds":"Fluxuri utilizator"},"sv":{"Static Feeds":"Statiska flöden","User Feeds":"Användarflöden"}}};
(function(){var m="toString",k=".",j="default",h="Object",g='"',f="Array",e="()",d="String",c="Function",b=".prototype",L="function",K="Boolean",J="Error",I="constructor",H="warn",G="hasOwnProperty",F="string",E="toLocaleString",D="RegExp",C='\", "',t="info",u="BROKEN_IE",r="isPrototypeOf",s="Date",p="",q="qx.Bootstrap",n="]",o="Class",v="error",w="[Class ",y="valueOf",x="Number",A="count",z="debug",B="ES5";
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return w+this.classname+n;
},createNamespace:function(name,M){var O=name.split(k);
var parent=window;
var N=O[0];

for(var i=0,P=O.length-1;i<P;i++,N=O[i]){if(!parent[N]){parent=parent[N]={};
}else{parent=parent[N];
}}parent[N]=M;
return N;
},setDisplayName:function(Q,R,name){Q.displayName=R+k+name+e;
},setDisplayNames:function(S,T){for(var name in S){var U=S[name];

if(U instanceof Function){U.displayName=T+k+name+e;
}}},define:function(name,V){if(!V){var V={statics:{}};
}var bb;
var Y=null;
qx.Bootstrap.setDisplayNames(V.statics,name);

if(V.members||V.extend){qx.Bootstrap.setDisplayNames(V.members,name+b);
bb=V.construct||new Function;

if(V.extend){this.extendClass(bb,bb,V.extend,name,ba);
}var W=V.statics||{};
for(var i=0,bc=qx.Bootstrap.getKeys(W),l=bc.length;i<l;i++){var bd=bc[i];
bb[bd]=W[bd];
}Y=bb.prototype;
var X=V.members||{};
for(var i=0,bc=qx.Bootstrap.getKeys(X),l=bc.length;i<l;i++){var bd=bc[i];
Y[bd]=X[bd];
}}else{bb=V.statics||{};
}var ba=this.createNamespace(name,bb);
bb.name=bb.classname=name;
bb.basename=ba;
bb.$$type=o;
if(!bb.hasOwnProperty(m)){bb.toString=this.genericToString;
}if(V.defer){V.defer(bb,Y);
}qx.Bootstrap.$$registry[name]=V.statics;
return bb;
}};
qx.Bootstrap.define(q,{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var be=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){be=false;
}return be;
})(),getEnvironmentSetting:function(bf){if(qx.$$environment){return qx.$$environment[bf];
}},setEnvironmentSetting:function(bg,bh){if(!qx.$$environment){qx.$$environment={};
}
if(qx.$$environment[bg]===undefined){qx.$$environment[bg]=bh;
}},createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(bi,bj,bk,name,bl){var bo=bk.prototype;
var bn=new Function;
bn.prototype=bo;
var bm=new bn;
bi.prototype=bm;
bm.name=bm.classname=name;
bm.basename=bl;
bj.base=bi.superclass=bk;
bj.self=bi.constructor=bm.constructor=bi;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(bp){return bp.__count__;
},"default":function(bq){var length=0;

for(var br in bq){length++;
}return length;
}})[(({}).__count__==0)?A:j],objectMergeWith:function(bs,bt,bu){if(bu===undefined){bu=true;
}
for(var bv in bt){if(bu||bs[bv]===undefined){bs[bv]=bt[bv];
}}return bs;
},__hm:[r,G,E,m,y,I],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(bw){var bx=[];
var bz=Object.prototype.hasOwnProperty;

for(var bA in bw){if(bz.call(bw,bA)){bx.push(bA);
}}var by=qx.Bootstrap.__hm;

for(var i=0,a=by,l=a.length;i<l;i++){if(bz.call(bw,a[i])){bx.push(a[i]);
}}return bx;
},"default":function(bB){var bC=[];
var bD=Object.prototype.hasOwnProperty;

for(var bE in bB){if(bD.call(bB,bE)){bC.push(bE);
}}return bC;
}})[typeof (Object.keys)==L?B:(function(){for(var bF in {toString:1}){return bF;
}})()!==m?u:j],getKeysAsString:function(bG){var bH=qx.Bootstrap.getKeys(bG);

if(bH.length==0){return p;
}return g+bH.join(C)+g;
},__hn:{"[object String]":d,"[object Array]":f,"[object Object]":h,"[object RegExp]":D,"[object Number]":x,"[object Boolean]":K,"[object Date]":s,"[object Function]":c,"[object Error]":J},bind:function(bI,self,bJ){var bK=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var bL=Array.prototype.slice.call(arguments,0,arguments.length);
return bI.apply(self,bK.concat(bL));
};
},firstUp:function(bM){return bM.charAt(0).toUpperCase()+bM.substr(1);
},firstLow:function(bN){return bN.charAt(0).toLowerCase()+bN.substr(1);
},getClass:function(bO){var bP=Object.prototype.toString.call(bO);
return (qx.Bootstrap.__hn[bP]||bP.slice(8,-1));
},isString:function(bQ){return (bQ!==null&&(typeof bQ===F||qx.Bootstrap.getClass(bQ)==d||bQ instanceof String||(!!bQ&&!!bQ.$$isString)));
},isArray:function(bR){return (bR!==null&&(bR instanceof Array||(bR&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(bR.constructor,qx.data.IListData))||qx.Bootstrap.getClass(bR)==f||(!!bR&&!!bR.$$isArray)));
},isObject:function(bS){return (bS!==undefined&&bS!==null&&qx.Bootstrap.getClass(bS)==h);
},isFunction:function(bT){return qx.Bootstrap.getClass(bT)==c;
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(bU,name){while(bU){if(bU.$$properties&&bU.$$properties[name]){return bU.$$properties[name];
}bU=bU.superclass;
}return null;
},hasProperty:function(bV,name){return !!qx.Bootstrap.getPropertyDefinition(bV,name);
},getEventType:function(bW,name){var bW=bW.constructor;

while(bW.superclass){if(bW.$$events&&bW.$$events[name]!==undefined){return bW.$$events[name];
}bW=bW.superclass;
}return null;
},supportsEvent:function(bX,name){return !!qx.Bootstrap.getEventType(bX,name);
},getByInterface:function(bY,ca){var cb,i,l;

while(bY){if(bY.$$implements){cb=bY.$$flatImplements;

for(i=0,l=cb.length;i<l;i++){if(cb[i]===ca){return bY;
}}}bY=bY.superclass;
}return null;
},hasInterface:function(cc,cd){return !!qx.Bootstrap.getByInterface(cc,cd);
},getMixins:function(ce){var cf=[];

while(ce){if(ce.$$includes){cf.push.apply(cf,ce.$$flatIncludes);
}ce=ce.superclass;
}return cf;
},$$logs:[],debug:function(cg,ch){qx.Bootstrap.$$logs.push([z,arguments]);
},info:function(ci,cj){qx.Bootstrap.$$logs.push([t,arguments]);
},warn:function(ck,cl){qx.Bootstrap.$$logs.push([H,arguments]);
},error:function(cm,cn){qx.Bootstrap.$$logs.push([v,arguments]);
},trace:function(co){}}});
})();
(function(){var k="xhr",j="Microsoft.XMLHTTP",i="",h="file:",g="https:",f="webkit",e="gecko",d="activex",c="opera",b=".",a="qx.bom.client.Transport";
qx.Bootstrap.define(a,{statics:{getMaxConcurrentRequestCount:function(){var l;
var o=qx.bom.client.Engine.getVersion().split(b);
var m=0;
var p=0;
var n=0;
if(o[0]){m=o[0];
}if(o[1]){p=o[1];
}if(o[2]){n=o[2];
}if(window.maxConnectionsPerServer){l=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()==c){l=8;
}else if(qx.bom.client.Engine.getName()==f){l=4;
}else if(qx.bom.client.Engine.getName()==e&&((m>1)||((m==1)&&(p>9))||((m==1)&&(p==9)&&(n>=1)))){l=6;
}else{l=2;
}return l;
},getSsl:function(){return window.location.protocol===g;
},getXmlHttpRequest:function(){var q=window.ActiveXObject?(function(){if(window.location.protocol!==h){try{new window.XMLHttpRequest();
return k;
}catch(r){}}
try{new window.ActiveXObject(j);
return d;
}catch(s){}})():(function(){try{new window.XMLHttpRequest();
return k;
}catch(t){}})();
return q||i;
}}});
})();
(function(){var r=".",q="function",p="",o="gecko",n="[object Opera]",m="mshtml",l="8.0",k="AppleWebKit/",j="9.0",i="[^\\.0-9]",c="Gecko",h="webkit",f="4.0",b="1.9.0.0",a="opera",e="Version/",d="5.0",g="qx.bom.client.Engine";
qx.Bootstrap.define(g,{statics:{getVersion:function(){var v=window.navigator.userAgent;
var t=p;

if(qx.bom.client.Engine.__bN()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(v)){if(v.indexOf(e)!=-1){var u=v.match(/Version\/(\d+)\.(\d+)/);
t=u[1]+r+u[2].charAt(0)+r+u[2].substring(1,u[2].length);
}else{t=RegExp.$1+r+RegExp.$2;

if(RegExp.$3!=p){t+=r+RegExp.$3;
}}}}else if(qx.bom.client.Engine.__bO()){if(/AppleWebKit\/([^ ]+)/.test(v)){t=RegExp.$1;
var w=RegExp(i).exec(t);

if(w){t=t.slice(0,w.index);
}}}else if(qx.bom.client.Engine.__bP()){if(/rv\:([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
}}else if(qx.bom.client.Engine.__bQ()){if(/MSIE\s+([^\);]+)(\)|;)/.test(v)){t=RegExp.$1;
if(t<8&&/Trident\/([^\);]+)(\)|;)/.test(v)){if(RegExp.$1==f){t=l;
}else if(RegExp.$1==d){t=j;
}}}}else{var s=window.qxFail;

if(s&&typeof s===q){t=s().FULLVERSION;
}else{t=b;
qx.Bootstrap.warn("Unsupported client: "+v+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return t;
},getName:function(){var name;

if(qx.bom.client.Engine.__bN()){name=a;
}else if(qx.bom.client.Engine.__bO()){name=h;
}else if(qx.bom.client.Engine.__bP()){name=o;
}else if(qx.bom.client.Engine.__bQ()){name=m;
}else{var x=window.qxFail;

if(x&&typeof x===q){name=x().NAME;
}else{name=o;
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__bN:function(){return window.opera&&Object.prototype.toString.call(window.opera)==n;
},__bO:function(){return window.navigator.userAgent.indexOf(k)!=-1;
},__bP:function(){return window.controllers&&window.navigator.product===c;
},__bQ:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}}});
})();
(function(){var j="",i="10.1",h="10.3",g="10.7",f="10.5",e="95",d="10.2",c="98",b="2000",a="10.6",bb="10.0",ba="10.4",Y="rim_tabletos",X="Darwin",W="2003",V=")",U="iPhone",T="android",S="unix",R="ce",q="7",r="SymbianOS",o="|",p="MacPPC",m="iPod",n="\.",k="Win64",l="linux",u="me",v="Macintosh",D="Android",B="Windows",J="ios",F="vista",N="blackberry",L="(",x="win",Q="Linux",P="BSD",O="iPad",w="X11",z="xp",A="symbian",C="qx.bom.client.OperatingSystem",E="g",G="Win32",K="osx",M="webOS",s="RIM Tablet OS",t="BlackBerry",y="nt4",I="MacIntel",H="webos";
qx.Bootstrap.define(C,{statics:{getName:function(){if(!navigator){return j;
}var bc=navigator.platform||j;
var bd=navigator.userAgent||j;

if(bc.indexOf(B)!=-1||bc.indexOf(G)!=-1||bc.indexOf(k)!=-1){return x;
}else if(bc.indexOf(v)!=-1||bc.indexOf(p)!=-1||bc.indexOf(I)!=-1){return K;
}else if(bd.indexOf(s)!=-1){return Y;
}else if(bd.indexOf(M)!=-1){return H;
}else if(bc.indexOf(m)!=-1||bc.indexOf(U)!=-1||bc.indexOf(O)!=-1){return J;
}else if(bc.indexOf(Q)!=-1){return l;
}else if(bc.indexOf(w)!=-1||bc.indexOf(P)!=-1||bc.indexOf(X)!=-1){return S;
}else if(bc.indexOf(D)!=-1){return T;
}else if(bc.indexOf(r)!=-1){return A;
}else if(bc.indexOf(t)!=-1){return N;
}return j;
},__dn:{"Windows NT 6.1":q,"Windows NT 6.0":F,"Windows NT 5.2":W,"Windows NT 5.1":z,"Windows NT 5.0":b,"Windows 2000":b,"Windows NT 4.0":y,"Win 9x 4.90":u,"Windows CE":R,"Windows 98":c,"Win98":c,"Windows 95":e,"Win95":e,"Mac OS X 10_7":g,"Mac OS X 10.7":g,"Mac OS X 10_6":a,"Mac OS X 10.6":a,"Mac OS X 10_5":f,"Mac OS X 10.5":f,"Mac OS X 10_4":ba,"Mac OS X 10.4":ba,"Mac OS X 10_3":h,"Mac OS X 10.3":h,"Mac OS X 10_2":d,"Mac OS X 10.2":d,"Mac OS X 10_1":i,"Mac OS X 10.1":i,"Mac OS X 10_0":bb,"Mac OS X 10.0":bb},getVersion:function(){var bg=[];

for(var bf in qx.bom.client.OperatingSystem.__dn){bg.push(bf);
}var bh=new RegExp(L+bg.join(o).replace(/\./g,n)+V,E);
var be=bh.exec(navigator.userAgent);

if(be&&be[1]){return qx.bom.client.OperatingSystem.__dn[be[1]];
}return j;
}}});
})();
(function(){var k="background",j="div",h="color",g="linear-gradient(0deg, white 0%, red 100%)",f="placeholder",e="content",d="OTextOverflow",c="MozBorderRadius",b="qx.bom.client.Css",a='m11',C="input",B="-ms-linear-gradient(0deg, white 0%, red 100%)",A="-moz-linear-gradient(0deg, white 0%, red 100%)",z="gradient",y="-webkit-linear-gradient(left, white, black)",x="MozBoxShadow",w="rgba(1, 2, 3, 0.5)",v="rgba",u="-o-linear-gradient(0deg, white 0%, red 100%)",t="borderRadius",r='WebKitCSSMatrix',s="WebkitBorderRadius",p="-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))",q="mshtml",n="WebkitBoxShadow",o="textOverflow",l="boxShadow",m="border";
qx.Bootstrap.define(b,{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!==q||!qx.bom.client.Browser.getQuirksMode();
return content?e:m;
},getTextOverflow:function(){return o in document.documentElement.style||d in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement(C);
return f in i;
},getBorderRadius:function(){return t in document.documentElement.style||c in document.documentElement.style||s in document.documentElement.style;
},getBoxShadow:function(){return l in document.documentElement.style||x in document.documentElement.style||n in document.documentElement.style;
},getTranslate3d:function(){return r in window&&a in new WebKitCSSMatrix();
},getGradients:function(){var D;

try{D=document.createElement(j);
}catch(F){D=document.createElement();
}var E=[p,y,A,u,B,g];

for(var i=0;i<E.length;i++){try{D.style[k]=E[i];

if(D.style[k].indexOf(z)!=-1){return true;
}}catch(G){}}return false;
},getRgba:function(){var H;

try{H=document.createElement(j);
}catch(I){H=document.createElement();
}try{H.style[h]=w;

if(H.style[h].indexOf(v)!=-1){return true;
}}catch(J){}return false;
}}});
})();
(function(){var j="mshtml",i="msie",h=")(/| )([0-9]+\.[0-9])",g="",f="(",e="ce",d="CSS1Compat",c="android",b="operamini",a="mobile chrome",z="iemobile",y="prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Namoroka|Firefox",x="opera mobi",w="Mobile Safari",v="operamobile",u="ie",t="mobile safari",s="IEMobile|Maxthon|MSIE",r="qx.bom.client.Browser",q="opera mini",o="opera",p="Opera Mini|Opera Mobi|Opera",m="AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari",n="webkit",k="5.0",l="Mobile/";
qx.Bootstrap.define(r,{statics:{getName:function(){var D=navigator.userAgent;
var C=new RegExp(f+qx.bom.client.Browser.__dx+h);
var B=D.match(C);

if(!B){return g;
}var name=B[1].toLowerCase();
var A=qx.bom.client.Engine.getName();

if(A===n){if(name===c){name=a;
}else if(D.indexOf(w)!==-1||D.indexOf(l)!==-1){name=t;
}}else if(A===j){if(name===i){name=u;
if(qx.bom.client.OperatingSystem.getVersion()===e){name=z;
}}}else if(A===o){if(name===x){name=v;
}else if(name===q){name=b;
}}return name;
},getVersion:function(){var H=navigator.userAgent;
var G=new RegExp(f+qx.bom.client.Browser.__dx+h);
var F=H.match(G);

if(!F){return g;
}var name=F[1].toLowerCase();
var E=F[3];
if(H.match(/Version(\/| )([0-9]+\.[0-9])/)){E=RegExp.$2;
}
if(qx.bom.client.Engine.getName()==j){E=qx.bom.client.Engine.getVersion();

if(name===i&&qx.bom.client.OperatingSystem.getVersion()==e){E=k;
}}return E;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()==j&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!==d;
}},__dx:{"webkit":m,"gecko":y,"mshtml":s,"opera":p}[qx.bom.client.Engine.getName()]}});
})();
(function(){var c="notification",b="PhoneGap",a="qx.bom.client.PhoneGap";
qx.Bootstrap.define(a,{statics:{getPhoneGap:function(){return b in window;
},getNotification:function(){return c in navigator;
}}});
})();
(function(){var d="-",c="",b="qx.bom.client.Locale",a="android";
qx.Bootstrap.define(b,{statics:{getLocale:function(){var e=qx.bom.client.Locale.__lI();
var f=e.indexOf(d);

if(f!=-1){e=e.substr(0,f);
}return e;
},getVariant:function(){var g=qx.bom.client.Locale.__lI();
var i=c;
var h=g.indexOf(d);

if(h!=-1){i=g.substr(h+1);
}return i;
},__lI:function(){var j=(navigator.userLanguage||navigator.language||c);
if(qx.bom.client.OperatingSystem.getName()==a){var k=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(k){j=k[0];
}}return j.toLowerCase();
}}});
})();
(function(){var l="",k="audio",j="video",i='video/ogg; codecs="theora, vorbis"',h="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul",g="http://www.w3.org/TR/SVG11/feature#BasicStructure",f='audio',d='video/mp4; codecs="avc1.42E01E, mp4a.40.2"',c="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",b="audio/mpeg",z="org.w3c.dom.svg",y="DOMTokenList",x="1.1",w="audio/x-wav",u="audio/ogg",t="audio/x-aiff",s="qx.bom.client.Html",r='video',q="mshtml",p="label",n='video/webm; codecs="vp8, vorbis"',o="1.0",m="audio/basic";
qx.Bootstrap.define(s,{statics:{getWebWorker:function(){return window.Worker!=null;
},getFileReader:function(){return window.FileReader!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement(f).canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(u);
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(b);
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(w);
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(m);
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return l;
}var a=document.createElement(k);
return a.canPlayType(t);
},getVideo:function(){return !!document.createElement(r).canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(i);
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(d);
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return l;
}var v=document.createElement(j);
return v.canPlayType(n);
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(A){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(B){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)===y);
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS(h,p);
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature(z,o)||document.implementation.hasFeature(g,x));
},getVml:function(){return qx.bom.client.Engine.getName()==q;
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(C){var D=new Image();
D.onload=D.onerror=function(){window.setTimeout(function(){C.call(null,(D.width==1&&D.height==1));
},0);
};
D.src=c;
},getDataset:function(){return !!document.documentElement.dataset;
}}});
})();
(function(){var e="qx.bom.client.Event",d="ontouchstart",c="mshtml",b="opera",a="pointerEvents";
qx.Bootstrap.define(e,{statics:{getTouch:function(){return (d in window);
},getPointer:function(){if(a in document.documentElement.style){var f=qx.bom.client.Engine.getName();
return f!=b&&f!=c;
}return false;
}}});
})();
(function(){var a="qx.bom.client.EcmaScript";
qx.Bootstrap.define(a,{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
})();
(function(){var k="os.name",j="os.version",h="css.borderradius",g="default",f="browser.quirksmode",e="browser.name",d="phonegap",c="qx.allowUrlSettings",b="io.ssl",a="css.translate3d",W="locale.variant",V="html.classlist",U="css.boxshadow",T="event.touch",S="io.maxrequests",R="css.gradients",Q="browser.documentmode",P="ecmascript.objectcount",O="locale",N="engine.version",r="engine.name",s="css.rgba",p="css.boxmodel",q="|",n="browser.version",o="io.xhr",l="qx.core.Environment",m="qx.debug.databinding",t="qx.optimization.basecalls",u="qx.debug.dispose",B="qx.optimization.variables",z="true",F="qx.optimization.privates",D="qx.aspects",J="qx.debug",H="qx.dynamicmousewheel",w=":",M="qxenv",L="qx.optimization.strings",K="qx.optimization.comments",v="qx.optimization.variants",x="qx.mobile.emulatetouch",y="qx.dynlocale",A="false",C="&",E="qx.mobile.nativescroll",G="qx.allowUrlVariants",I="qx.propertyDebugLevel";
qx.Bootstrap.define(l,{statics:{_checks:{},_asyncChecks:{},__cJ:{},get:function(X){if(this.__cJ[X]!=undefined){return this.__cJ[X];
}var Y=this._checks[X];

if(Y){var ba=Y();
this.__cJ[X]=ba;
return ba;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(X+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(bb,bc,self){var be=this;

if(this.__cJ[bb]!=undefined){window.setTimeout(function(){bc.call(self,be.__cJ[bb]);
},0);
return;
}var bd=this._asyncChecks[bb];

if(bd){bd(function(bf){be.__cJ[bb]=bf;
bc.call(self,bf);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(bb+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(bg,bh){return this.__cK(this.get(bg),bh);
},selectAsync:function(bi,bj,self){this.getAsync(bi,function(bk){var bl=this.__cK(bi,bj);
bl.call(self,bk);
},this);
},__cK:function(bm,bn){var bp=bn[bm];

if(bn.hasOwnProperty(bm)){return bp;
}for(var bo in bn){if(bo.indexOf(q)!=-1){var bq=bo.split(q);

for(var i=0;i<bq.length;i++){if(bq[i]==bm){return bn[bo];
}}}}
if(bn[g]!==undefined){return bn[g];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+bm+'" ('+(typeof bm)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(bn)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(br){delete this.__cJ[br];
},add:function(bs,bt){if(this._checks[bs]==undefined){if(bt instanceof Function){this._checks[bs]=bt;
}else{this._checks[bs]=this.__cN(bt);
}}},addAsync:function(bu,bv){if(this._checks[bu]==undefined){this._asyncChecks[bu]=bv;
}},_initDefaultQxValues:function(){this.add(c,function(){return false;
});
this.add(G,function(){return false;
});
this.add(I,function(){return 0;
});
this.add(J,function(){return true;
});
this.add(D,function(){return false;
});
this.add(y,function(){return true;
});
this.add(x,function(){return false;
});
this.add(E,function(){return false;
});
this.add(H,function(){return true;
});
this.add(m,function(){return false;
});
this.add(u,function(){return false;
});
this.add(t,function(){return false;
});
this.add(K,function(){return false;
});
this.add(F,function(){return false;
});
this.add(L,function(){return false;
});
this.add(B,function(){return false;
});
this.add(v,function(){return false;
});
},__cL:function(){if(qx&&qx.$$environment){for(var bx in qx.$$environment){var bw=qx.$$environment[bx];
this._checks[bx]=this.__cN(bw);
}}},__cM:function(){if(window.document&&window.document.location){var by=window.document.location.search.slice(1).split(C);

for(var i=0;i<by.length;i++){var bA=by[i].split(w);

if(bA.length!=3||bA[0]!=M){continue;
}var bB=bA[1];
var bz=decodeURIComponent(bA[2]);
if(bz==z){bz=true;
}else if(bz==A){bz=false;
}else if(/^(\d|\.)+$/.test(bz)){bz=parseFloat(bz);
}this._checks[bB]=this.__cN(bz);
}}},__cN:function(bC){return qx.Bootstrap.bind(function(bD){return bD;
},null,bC);
},useCheck:function(bE){return true;
},_initChecksMap:function(){if(this.useCheck(N)){this._checks[N]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck(r)){this._checks[r]=qx.bom.client.Engine.getName;
}if(this.useCheck(e)){this._checks[e]=qx.bom.client.Browser.getName;
}
if(this.useCheck(n)){this._checks[n]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck(Q)){this._checks[Q]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck(f)){this._checks[f]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck(O)){this._checks[O]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck(W)){this._checks[W]=qx.bom.client.Locale.getVariant;
}if(this.useCheck(k)){this._checks[k]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck(j)){this._checks[j]=qx.bom.client.OperatingSystem.getVersion;
}if(this.useCheck(S)){this._checks[S]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck(b)){this._checks[b]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck(o)){this._checks[o]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck(T)){this._checks[T]=qx.bom.client.Event.getTouch;
}if(this.useCheck(P)){this._checks[P]=qx.bom.client.EcmaScript.getObjectCount;
}
if(this.useCheck(V)){this._checks[V]=qx.bom.client.Html.getClassList;
}
if(this.useCheck(h)){this._checks[h]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck(U)){this._checks[U]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck(R)){this._checks[R]=qx.bom.client.Css.getGradients;
}
if(this.useCheck(p)){this._checks[p]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck(a)){this._checks[a]=qx.bom.client.Css.getTranslate3d;
}
if(this.useCheck(s)){this._checks[s]=qx.bom.client.Css.getRgba;
}if(this.useCheck(d)){this._checks[d]=qx.bom.client.PhoneGap.getPhoneGap;
}}},defer:function(bF){bF._initDefaultQxValues();
bF._initChecksMap();
bF.__cL();
if(bF.get(c)===true){bF.__cM();
}}});
})();
(function(){var h="qx.Mixin",g=".prototype",f="constructor",e="Array",d="[Mixin ",c="]",b="destruct",a="Mixin";
qx.Bootstrap.define(h,{statics:{define:function(name,j){if(j){if(j.include&&!(qx.Bootstrap.getClass(j.include)===e)){j.include=[j.include];
}var m=j.statics?j.statics:{};
qx.Bootstrap.setDisplayNames(m,name);

for(var k in m){if(m[k] instanceof Function){m[k].$$mixin=m;
}}if(j.construct){m.$$constructor=j.construct;
qx.Bootstrap.setDisplayName(j.construct,name,f);
}
if(j.include){m.$$includes=j.include;
}
if(j.properties){m.$$properties=j.properties;
}
if(j.members){m.$$members=j.members;
qx.Bootstrap.setDisplayNames(j.members,name+g);
}
for(var k in m.$$members){if(m.$$members[k] instanceof Function){m.$$members[k].$$mixin=m;
}}
if(j.events){m.$$events=j.events;
}
if(j.destruct){m.$$destructor=j.destruct;
qx.Bootstrap.setDisplayName(j.destruct,name,b);
}}else{var m={};
}m.$$type=a;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
this.$$registry[name]=m;
return m;
},checkCompatibility:function(n){var q=this.flatten(n);
var r=q.length;

if(r<2){return true;
}var u={};
var t={};
var s={};
var p;

for(var i=0;i<r;i++){p=q[i];

for(var o in p.events){if(s[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+s[o]+'" in member "'+o+'"!');
}s[o]=p.name;
}
for(var o in p.properties){if(u[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+u[o]+'" in property "'+o+'"!');
}u[o]=p.name;
}
for(var o in p.members){if(t[o]){throw new Error('Conflict between mixin "'+p.name+'" and "'+t[o]+'" in member "'+o+'"!');
}t[o]=p.name;
}}return true;
},isCompatible:function(v,w){var x=qx.Bootstrap.getMixins(w);
x.push(v);
return qx.Mixin.checkCompatibility(x);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(y){if(!y){return [];
}var z=y.concat();

for(var i=0,l=y.length;i<l;i++){if(y[i].$$includes){z.push.apply(z,this.flatten(y[i].$$includes));
}}return z;
},genericToString:function(){return d+this.name+c;
},$$registry:{},__ge:null,__gg:function(){}}});
})();
(function(){var j="function",h="Boolean",g="qx.Interface",f="Array",e="]",d="toggle",c="Interface",b="is",a="[Interface ";
qx.Bootstrap.define(g,{statics:{define:function(name,k){if(k){if(k.extend&&!(qx.Bootstrap.getClass(k.extend)===f)){k.extend=[k.extend];
}var m=k.statics?k.statics:{};
if(k.extend){m.$$extends=k.extend;
}
if(k.properties){m.$$properties=k.properties;
}
if(k.members){m.$$members=k.members;
}
if(k.events){m.$$events=k.events;
}}else{var m={};
}m.$$type=c;
m.name=name;
m.toString=this.genericToString;
m.basename=qx.Bootstrap.createNamespace(name,m);
qx.Interface.$$registry[name]=m;
return m;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(n){if(!n){return [];
}var o=n.concat();

for(var i=0,l=n.length;i<l;i++){if(n[i].$$extends){o.push.apply(o,this.flatten(n[i].$$extends));
}}return o;
},__jX:function(p,q,r,s){var w=r.$$members;

if(w){for(var v in w){if(qx.Bootstrap.isFunction(w[v])){var u=this.__jY(q,v);
var t=u||qx.Bootstrap.isFunction(p[v]);

if(!t){throw new Error('Implementation of method "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}var x=s===true&&!u&&!qx.Bootstrap.hasInterface(q,r);

if(x){p[v]=this.__kc(r,p[v],v,w[v]);
}}else{if(typeof p[v]===undefined){if(typeof p[v]!==j){throw new Error('Implementation of member "'+v+'" is missing in class "'+q.classname+'" required by interface "'+r.name+'"');
}}}}}},__jY:function(y,z){var D=z.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!D){return false;
}var A=qx.Bootstrap.firstLow(D[2]);
var B=qx.Bootstrap.getPropertyDefinition(y,A);

if(!B){return false;
}var C=D[0]==b||D[0]==d;

if(C){return qx.Bootstrap.getPropertyDefinition(y,A).check==h;
}return true;
},__ka:function(E,F){if(F.$$properties){for(var G in F.$$properties){if(!qx.Bootstrap.getPropertyDefinition(E,G)){throw new Error('The property "'+G+'" is not supported by Class "'+E.classname+'"!');
}}}},__kb:function(H,I){if(I.$$events){for(var J in I.$$events){if(!qx.Bootstrap.supportsEvent(H,J)){throw new Error('The event "'+J+'" is not supported by Class "'+H.classname+'"!');
}}}},assertObject:function(K,L){var N=K.constructor;
this.__jX(K,N,L,false);
this.__ka(N,L);
this.__kb(N,L);
var M=L.$$extends;

if(M){for(var i=0,l=M.length;i<l;i++){this.assertObject(K,M[i]);
}}},assert:function(O,P,Q){this.__jX(O.prototype,O,P,Q);
this.__ka(O,P);
this.__kb(O,P);
var R=P.$$extends;

if(R){for(var i=0,l=R.length;i<l;i++){this.assert(O,R[i],Q);
}}},genericToString:function(){return a+this.name+e;
},$$registry:{},__kc:function(){},__ge:null,__gg:function(){}}});
})();
(function(){var d="qx.core.Aspect",c="before",b="*",a="static";
qx.Bootstrap.define(d,{statics:{__ho:[],wrap:function(e,f,g){var m=[];
var h=[];
var l=this.__ho;
var k;

for(var i=0;i<l.length;i++){k=l[i];

if((k.type==null||g==k.type||k.type==b)&&(k.name==null||e.match(k.name))){k.pos==-1?m.push(k.fcn):h.push(k.fcn);
}}
if(m.length===0&&h.length===0){return f;
}var j=function(){for(var i=0;i<m.length;i++){m[i].call(this,e,f,g,arguments);
}var n=f.apply(this,arguments);

for(var i=0;i<h.length;i++){h[i].call(this,e,f,g,arguments,n);
}return n;
};

if(g!==a){j.self=f.self;
j.base=f.base;
}f.wrapper=j;
j.original=f;
return j;
},addAdvice:function(o,p,q,name){this.__ho.push({fcn:o,pos:p===c?-1:1,type:q,name:name});
}}});
})();
(function(){var g="emulated",f="native",e='"',d="qx.lang.Core",c="\\\\",b="\\\"",a="[object Error]";
qx.Bootstrap.define(d,{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()==a)?g:f],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(h,j){if(j==null){j=0;
}else if(j<0){j=Math.max(0,this.length+j);
}
for(var i=j;i<this.length;i++){if(this[i]===h){return i;
}}return -1;
}}[Array.prototype.indexOf?f:g],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(k,m){if(m==null){m=this.length-1;
}else if(m<0){m=Math.max(0,this.length+m);
}
for(var i=m;i>=0;i--){if(this[i]===k){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?f:g],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(n,o){var l=this.length;

for(var i=0;i<l;i++){var p=this[i];

if(p!==undefined){n.call(o||window,p,i,this);
}}}}[Array.prototype.forEach?f:g],arrayFilter:{"native":Array.prototype.filter,"emulated":function(q,r){var s=[];
var l=this.length;

for(var i=0;i<l;i++){var t=this[i];

if(t!==undefined){if(q.call(r||window,t,i,this)){s.push(this[i]);
}}}return s;
}}[Array.prototype.filter?f:g],arrayMap:{"native":Array.prototype.map,"emulated":function(u,v){var w=[];
var l=this.length;

for(var i=0;i<l;i++){var x=this[i];

if(x!==undefined){w[i]=u.call(v||window,x,i,this);
}}return w;
}}[Array.prototype.map?f:g],arraySome:{"native":Array.prototype.some,"emulated":function(y,z){var l=this.length;

for(var i=0;i<l;i++){var A=this[i];

if(A!==undefined){if(y.call(z||window,A,i,this)){return true;
}}}return false;
}}[Array.prototype.some?f:g],arrayEvery:{"native":Array.prototype.every,"emulated":function(B,C){var l=this.length;

for(var i=0;i<l;i++){var D=this[i];

if(D!==undefined){if(!B.call(C||window,D,i,this)){return false;
}}}return true;
}}[Array.prototype.every?f:g],stringQuote:{"native":String.prototype.quote,"emulated":function(){return e+this.replace(/\\/g,c).replace(/\"/g,b)+e;
}}[String.prototype.quote?f:g]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
})();
(function(){var cy=';',cx='computed=this.',cw='=value;',cv='this.',cu="set",ct="setThemed",cs="setRuntime",cr="init",cq='if(this.',cp='delete this.',bz='!==undefined)',by='}',bx="resetThemed",bw='else if(this.',bv="string",bu='return this.',bt="reset",bs="boolean",br="resetRuntime",bq='!==undefined){',cF="",cG="refresh",cD='=true;',cE="this.",cB=";",cC='old=this.',cz="();",cA='else ',cH='if(old===undefined)old=this.',cI='old=computed=this.',bX="return this.",bW="get",ca='(value);',bY="(a[",cc='if(old===computed)return value;',cb='if(old===undefined)old=null;',ce=' of an instance of ',cd=' is not (yet) ready!");',bV="]);",bU='!==inherit){',f='qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',g='value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)',h='value !== null && value.nodeType === 9 && value.documentElement',j='===value)return value;',k='value !== null && value.$$type === "Mixin"',m='return init;',n='var init=this.',o='value !== null && value.nodeType === 1 && value.attributes',p="var parent = this.getLayoutParent();",q="Error in property ",cW='var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){',cV="property",cU='.validate.call(this, value);',cT='qx.core.Assert.assertInstance(value, Date, msg) || true',db='else{',da="if (!parent) return;",cY=" in method ",cX='qx.core.Assert.assertInstance(value, Error, msg) || true',dd='=computed;',dc='Undefined value is not allowed!',P='(backup);',Q="MSIE 6.0",N='if(computed===inherit){',O="inherit",T='Is invalid!',U='if(value===undefined)prop.error(this,2,"',R='var computed, old=this.',S='else if(computed===undefined)',L="': ",M=" of class ",y='value !== null && value.nodeType !== undefined',x='===undefined)return;',A='value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',z="')){",u='qx.core.Assert.assertPositiveInteger(value, msg) || true',t='else this.',w='value=this.',v='","',s='if(init==qx.core.Property.$$inherit)init=null;',r='value !== null && value.$$type === "Interface"',ba='var inherit=prop.$$inherit;',bb="', qx.event.type.Data, [computed, old]",bc="var value = parent.",bd="$$useinit_",V='computed=undefined;delete this.',W="(value);",X='Requires exactly one argument!',Y='",value);',be='computed=value;',bf='}else{',I="$$runtime_",H=';}',G="$$user_",F='){',E='qx.core.Assert.assertArray(value, msg) || true',D='if(computed===undefined||computed===inherit){',C='qx.core.Assert.assertPositiveNumber(value, msg) || true',B=".prototype",K="Boolean",J=")}",bg='(computed, old, "',bh='return value;',bi='if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',bj="if(reg.hasListener(this, '",bk='Does not allow any arguments!',bl=')a[i].',bm="()",bn="var a=arguments[0] instanceof Array?arguments[0]:arguments;",bo='.$$properties.',bp='value !== null && value.$$type === "Theme"',bD="var reg=qx.event.Registration;",bC="())",bB='return null;',bA='qx.core.Assert.assertObject(value, msg) || true',bH='");',bG='qx.core.Assert.assertString(value, msg) || true',bF='var pa=this.getLayoutParent();if(pa)computed=pa.',bE="if (value===undefined) value = parent.",bJ='value !== null && value.$$type === "Class"',bI='qx.core.Assert.assertFunction(value, msg) || true',bQ='!==undefined&&',bR='var computed, old;',bO='var backup=computed;',bP=".",bM="object",bN="$$init_",bK="$$theme_",bL='if(computed===undefined)computed=null;',bS='qx.core.Assert.assertMap(value, msg) || true',bT="qx.aspects",ci='qx.core.Assert.assertNumber(value, msg) || true',ch='if((computed===undefined||computed===inherit)&&',ck="reg.fireEvent(this, '",cj='Null value is not allowed!',cm='qx.core.Assert.assertInteger(value, msg) || true',cl="value",co="rv:1.8.1",cn="shorthand",cg='qx.core.Assert.assertInstance(value, RegExp, msg) || true',cf='value !== null && value.type !== undefined',cP='value !== null && value.document',cQ='throw new Error("Property ',cR="(!this.",cS='qx.core.Assert.assertBoolean(value, msg) || true',cL='if(a[i].',cM="toggle",cN="$$inherit_",cO='var prop=qx.core.Property;',cJ=" with incoming value '",cK="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));",e='if(computed===undefined||computed==inherit)computed=null;',d="qx.core.Property",c="is",b='Could not change or apply init value after constructing phase!';
qx.Bootstrap.define(d,{statics:{__fH:{"Boolean":cS,"String":bG,"Number":ci,"Integer":cm,"PositiveNumber":C,"PositiveInteger":u,"Error":cX,"RegExp":cg,"Object":bA,"Array":E,"Map":bS,"Function":bI,"Date":cT,"Node":y,"Element":o,"Document":h,"Window":cP,"Event":cf,"Class":bJ,"Mixin":k,"Interface":r,"Theme":bp,"Color":f,"Decorator":A,"Font":g},__fI:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:O,$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:bv,dereference:bs,inheritable:bs,nullable:bs,themeable:bs,refine:bs,init:null,apply:bv,event:bv,check:null,transform:bv,deferredInit:bs,validate:null},$$allowedGroupKeys:{name:bv,group:bM,mode:bv,themeable:bs},$$inheritable:{},__fJ:function(de){var df=this.__fK(de);

if(!df.length){var dg=function(){};
}else{dg=this.__fL(df);
}de.prototype.$$refreshInheritables=dg;
},__fK:function(dh){var dj=[];

while(dh){var di=dh.$$properties;

if(di){for(var name in this.$$inheritable){if(di[name]&&di[name].inheritable){dj.push(name);
}}}dh=dh.superclass;
}return dj;
},__fL:function(dk){var dp=this.$$store.inherit;
var dn=this.$$store.init;
var dm=this.$$method.refresh;
var dl=[p,da];

for(var i=0,l=dk.length;i<l;i++){var name=dk[i];
dl.push(bc,dp[name],cB,bE,dn[name],cB,cE,dm[name],W);
}return new Function(dl.join(cF));
},attachRefreshInheritables:function(dq){dq.prototype.$$refreshInheritables=function(){qx.core.Property.__fJ(dq);
return this.$$refreshInheritables();
};
},attachMethods:function(dr,name,ds){ds.group?this.__fM(dr,ds,name):this.__fN(dr,ds,name);
},__fM:function(dt,du,name){var dB=qx.Bootstrap.firstUp(name);
var dA=dt.prototype;
var dC=du.themeable===true;
var dD=[];
var dx=[];

if(dC){var dv=[];
var dz=[];
}var dy=bn;
dD.push(dy);

if(dC){dv.push(dy);
}
if(du.mode==cn){var dw=cK;
dD.push(dw);

if(dC){dv.push(dw);
}}
for(var i=0,a=du.group,l=a.length;i<l;i++){dD.push(cE,this.$$method.set[a[i]],bY,i,bV);
dx.push(cE,this.$$method.reset[a[i]],cz);

if(dC){dv.push(cE,this.$$method.setThemed[a[i]],bY,i,bV);
dz.push(cE,this.$$method.resetThemed[a[i]],cz);
}}this.$$method.set[name]=cu+dB;
dA[this.$$method.set[name]]=new Function(dD.join(cF));
this.$$method.reset[name]=bt+dB;
dA[this.$$method.reset[name]]=new Function(dx.join(cF));

if(dC){this.$$method.setThemed[name]=ct+dB;
dA[this.$$method.setThemed[name]]=new Function(dv.join(cF));
this.$$method.resetThemed[name]=bx+dB;
dA[this.$$method.resetThemed[name]]=new Function(dz.join(cF));
}},__fN:function(dE,dF,name){var dH=qx.Bootstrap.firstUp(name);
var dJ=dE.prototype;
if(dF.dereference===undefined&&typeof dF.check===bv){dF.dereference=this.__fO(dF.check);
}var dI=this.$$method;
var dG=this.$$store;
dG.runtime[name]=I+name;
dG.user[name]=G+name;
dG.theme[name]=bK+name;
dG.init[name]=bN+name;
dG.inherit[name]=cN+name;
dG.useinit[name]=bd+name;
dI.get[name]=bW+dH;
dJ[dI.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,dE,name,bW);
};
dI.set[name]=cu+dH;
dJ[dI.set[name]]=function(dK){return qx.core.Property.executeOptimizedSetter(this,dE,name,cu,arguments);
};
dI.reset[name]=bt+dH;
dJ[dI.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dE,name,bt);
};

if(dF.inheritable||dF.apply||dF.event||dF.deferredInit){dI.init[name]=cr+dH;
dJ[dI.init[name]]=function(dL){return qx.core.Property.executeOptimizedSetter(this,dE,name,cr,arguments);
};
}
if(dF.inheritable){dI.refresh[name]=cG+dH;
dJ[dI.refresh[name]]=function(dM){return qx.core.Property.executeOptimizedSetter(this,dE,name,cG,arguments);
};
}dI.setRuntime[name]=cs+dH;
dJ[dI.setRuntime[name]]=function(dN){return qx.core.Property.executeOptimizedSetter(this,dE,name,cs,arguments);
};
dI.resetRuntime[name]=br+dH;
dJ[dI.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dE,name,br);
};

if(dF.themeable){dI.setThemed[name]=ct+dH;
dJ[dI.setThemed[name]]=function(dO){return qx.core.Property.executeOptimizedSetter(this,dE,name,ct,arguments);
};
dI.resetThemed[name]=bx+dH;
dJ[dI.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,dE,name,bx);
};
}
if(dF.check===K){dJ[cM+dH]=new Function(bX+dI.set[name]+cR+dI.get[name]+bC);
dJ[c+dH]=new Function(bX+dI.get[name]+bm);
}},__fO:function(dP){return !!this.__fI[dP];
},__fP:function(dQ){return this.__fI[dQ]||qx.Bootstrap.classIsDefined(dQ)||(qx.Interface&&qx.Interface.isDefined(dQ));
},__fQ:{0:b,1:X,2:dc,3:bk,4:cj,5:T},error:function(dR,dS,dT,dU,dV){var dW=dR.constructor.classname;
var dX=q+dT+M+dW+cY+this.$$method[dU][dT]+cJ+dV+L;
throw new Error(dX+(this.__fQ[dS]||"Unknown reason: "+dS));
},__fR:function(dY,ea,name,eb,ec,ed){var ee=this.$$method[eb][name];
{ea[ee]=new Function(cl,ec.join(cF));
};
if(qx.core.Environment.get(bT)){ea[ee]=qx.core.Aspect.wrap(dY.classname+bP+ee,ea[ee],cV);
}qx.Bootstrap.setDisplayName(ea[ee],dY.classname+B,ee);
if(ed===undefined){return dY[ee]();
}else{return dY[ee](ed[0]);
}},executeOptimizedGetter:function(ef,eg,name,eh){var ej=eg.$$properties[name];
var el=eg.prototype;
var ei=[];
var ek=this.$$store;
ei.push(cq,ek.runtime[name],bz);
ei.push(bu,ek.runtime[name],cy);

if(ej.inheritable){ei.push(bw,ek.inherit[name],bz);
ei.push(bu,ek.inherit[name],cy);
ei.push(cA);
}ei.push(cq,ek.user[name],bz);
ei.push(bu,ek.user[name],cy);

if(ej.themeable){ei.push(bw,ek.theme[name],bz);
ei.push(bu,ek.theme[name],cy);
}
if(ej.deferredInit&&ej.init===undefined){ei.push(bw,ek.init[name],bz);
ei.push(bu,ek.init[name],cy);
}ei.push(cA);

if(ej.init!==undefined){if(ej.inheritable){ei.push(n,ek.init[name],cy);

if(ej.nullable){ei.push(s);
}else if(ej.init!==undefined){ei.push(bu,ek.init[name],cy);
}else{ei.push(bi,name,ce,eg.classname,cd);
}ei.push(m);
}else{ei.push(bu,ek.init[name],cy);
}}else if(ej.inheritable||ej.nullable){ei.push(bB);
}else{ei.push(cQ,name,ce,eg.classname,cd);
}return this.__fR(ef,el,name,eh,ei);
},executeOptimizedSetter:function(em,en,name,eo,ep){var eu=en.$$properties[name];
var et=en.prototype;
var er=[];
var eq=eo===cu||eo===ct||eo===cs||(eo===cr&&eu.init===undefined);
var es=eu.apply||eu.event||eu.inheritable;
var ev=this.__fS(eo,name);
this.__fT(er,eu,name,eo,eq);

if(eq){this.__fU(er,en,eu,name);
}
if(es){this.__fV(er,eq,ev,eo);
}
if(eu.inheritable){er.push(ba);
}
if(!es){this.__fX(er,name,eo,eq);
}else{this.__fY(er,eu,name,eo,eq);
}
if(eu.inheritable){this.__ga(er,eu,name,eo);
}else if(es){this.__gb(er,eu,name,eo);
}
if(es){this.__gc(er,eu,name);
if(eu.inheritable&&et._getChildren){this.__gd(er,name);
}}if(eq){er.push(bh);
}return this.__fR(em,et,name,eo,er,ep);
},__fS:function(ew,name){if(ew===cs||ew===br){var ex=this.$$store.runtime[name];
}else if(ew===ct||ew===bx){ex=this.$$store.theme[name];
}else if(ew===cr){ex=this.$$store.init[name];
}else{ex=this.$$store.user[name];
}return ex;
},__fT:function(ey,ez,name,eA,eB){{if(!ez.nullable||ez.check||ez.inheritable){ey.push(cO);
}if(eA===cu){ey.push(U,name,v,eA,Y);
}};
},__fU:function(eC,eD,eE,name){if(eE.transform){eC.push(w,eE.transform,ca);
}if(eE.validate){if(typeof eE.validate===bv){eC.push(cv,eE.validate,ca);
}else if(eE.validate instanceof Function){eC.push(eD.classname,bo,name);
eC.push(cU);
}}},__fV:function(eF,eG,eH,eI){var eJ=(eI===bt||eI===bx||eI===br);

if(eG){eF.push(cq,eH,j);
}else if(eJ){eF.push(cq,eH,x);
}},__fW:undefined,__fX:function(eK,name,eL,eM){if(eL===cs){eK.push(cv,this.$$store.runtime[name],cw);
}else if(eL===br){eK.push(cq,this.$$store.runtime[name],bz);
eK.push(cp,this.$$store.runtime[name],cy);
}else if(eL===cu){eK.push(cv,this.$$store.user[name],cw);
}else if(eL===bt){eK.push(cq,this.$$store.user[name],bz);
eK.push(cp,this.$$store.user[name],cy);
}else if(eL===ct){eK.push(cv,this.$$store.theme[name],cw);
}else if(eL===bx){eK.push(cq,this.$$store.theme[name],bz);
eK.push(cp,this.$$store.theme[name],cy);
}else if(eL===cr&&eM){eK.push(cv,this.$$store.init[name],cw);
}},__fY:function(eN,eO,name,eP,eQ){if(eO.inheritable){eN.push(R,this.$$store.inherit[name],cy);
}else{eN.push(bR);
}eN.push(cq,this.$$store.runtime[name],bq);

if(eP===cs){eN.push(cx,this.$$store.runtime[name],cw);
}else if(eP===br){eN.push(cp,this.$$store.runtime[name],cy);
eN.push(cq,this.$$store.user[name],bz);
eN.push(cx,this.$$store.user[name],cy);
eN.push(bw,this.$$store.theme[name],bz);
eN.push(cx,this.$$store.theme[name],cy);
eN.push(bw,this.$$store.init[name],bq);
eN.push(cx,this.$$store.init[name],cy);
eN.push(cv,this.$$store.useinit[name],cD);
eN.push(by);
}else{eN.push(cI,this.$$store.runtime[name],cy);
if(eP===cu){eN.push(cv,this.$$store.user[name],cw);
}else if(eP===bt){eN.push(cp,this.$$store.user[name],cy);
}else if(eP===ct){eN.push(cv,this.$$store.theme[name],cw);
}else if(eP===bx){eN.push(cp,this.$$store.theme[name],cy);
}else if(eP===cr&&eQ){eN.push(cv,this.$$store.init[name],cw);
}}eN.push(by);
eN.push(bw,this.$$store.user[name],bq);

if(eP===cu){if(!eO.inheritable){eN.push(cC,this.$$store.user[name],cy);
}eN.push(cx,this.$$store.user[name],cw);
}else if(eP===bt){if(!eO.inheritable){eN.push(cC,this.$$store.user[name],cy);
}eN.push(cp,this.$$store.user[name],cy);
eN.push(cq,this.$$store.runtime[name],bz);
eN.push(cx,this.$$store.runtime[name],cy);
eN.push(cq,this.$$store.theme[name],bz);
eN.push(cx,this.$$store.theme[name],cy);
eN.push(bw,this.$$store.init[name],bq);
eN.push(cx,this.$$store.init[name],cy);
eN.push(cv,this.$$store.useinit[name],cD);
eN.push(by);
}else{if(eP===cs){eN.push(cx,this.$$store.runtime[name],cw);
}else if(eO.inheritable){eN.push(cx,this.$$store.user[name],cy);
}else{eN.push(cI,this.$$store.user[name],cy);
}if(eP===ct){eN.push(cv,this.$$store.theme[name],cw);
}else if(eP===bx){eN.push(cp,this.$$store.theme[name],cy);
}else if(eP===cr&&eQ){eN.push(cv,this.$$store.init[name],cw);
}}eN.push(by);
if(eO.themeable){eN.push(bw,this.$$store.theme[name],bq);

if(!eO.inheritable){eN.push(cC,this.$$store.theme[name],cy);
}
if(eP===cs){eN.push(cx,this.$$store.runtime[name],cw);
}else if(eP===cu){eN.push(cx,this.$$store.user[name],cw);
}else if(eP===ct){eN.push(cx,this.$$store.theme[name],cw);
}else if(eP===bx){eN.push(cp,this.$$store.theme[name],cy);
eN.push(cq,this.$$store.init[name],bq);
eN.push(cx,this.$$store.init[name],cy);
eN.push(cv,this.$$store.useinit[name],cD);
eN.push(by);
}else if(eP===cr){if(eQ){eN.push(cv,this.$$store.init[name],cw);
}eN.push(cx,this.$$store.theme[name],cy);
}else if(eP===cG){eN.push(cx,this.$$store.theme[name],cy);
}eN.push(by);
}eN.push(bw,this.$$store.useinit[name],F);

if(!eO.inheritable){eN.push(cC,this.$$store.init[name],cy);
}
if(eP===cr){if(eQ){eN.push(cx,this.$$store.init[name],cw);
}else{eN.push(cx,this.$$store.init[name],cy);
}}else if(eP===cu||eP===cs||eP===ct||eP===cG){eN.push(cp,this.$$store.useinit[name],cy);

if(eP===cs){eN.push(cx,this.$$store.runtime[name],cw);
}else if(eP===cu){eN.push(cx,this.$$store.user[name],cw);
}else if(eP===ct){eN.push(cx,this.$$store.theme[name],cw);
}else if(eP===cG){eN.push(cx,this.$$store.init[name],cy);
}}eN.push(by);
if(eP===cu||eP===cs||eP===ct||eP===cr){eN.push(db);

if(eP===cs){eN.push(cx,this.$$store.runtime[name],cw);
}else if(eP===cu){eN.push(cx,this.$$store.user[name],cw);
}else if(eP===ct){eN.push(cx,this.$$store.theme[name],cw);
}else if(eP===cr){if(eQ){eN.push(cx,this.$$store.init[name],cw);
}else{eN.push(cx,this.$$store.init[name],cy);
}eN.push(cv,this.$$store.useinit[name],cD);
}eN.push(by);
}},__ga:function(eR,eS,name,eT){eR.push(D);

if(eT===cG){eR.push(be);
}else{eR.push(bF,this.$$store.inherit[name],cy);
}eR.push(ch);
eR.push(cv,this.$$store.init[name],bQ);
eR.push(cv,this.$$store.init[name],bU);
eR.push(cx,this.$$store.init[name],cy);
eR.push(cv,this.$$store.useinit[name],cD);
eR.push(bf);
eR.push(cp,this.$$store.useinit[name],H);
eR.push(by);
eR.push(cc);
eR.push(N);
eR.push(V,this.$$store.inherit[name],cy);
eR.push(by);
eR.push(S);
eR.push(cp,this.$$store.inherit[name],cy);
eR.push(t,this.$$store.inherit[name],dd);
eR.push(bO);
if(eS.init!==undefined&&eT!==cr){eR.push(cH,this.$$store.init[name],cB);
}else{eR.push(cb);
}eR.push(e);
},__gb:function(eU,eV,name,eW){if(eW!==cu&&eW!==cs&&eW!==ct){eU.push(bL);
}eU.push(cc);
if(eV.init!==undefined&&eW!==cr){eU.push(cH,this.$$store.init[name],cB);
}else{eU.push(cb);
}},__gc:function(eX,eY,name){if(eY.apply){eX.push(cv,eY.apply,bg,name,bH);
}if(eY.event){eX.push(bD,bj,eY.event,z,ck,eY.event,bb,J);
}},__gd:function(fa,name){fa.push(cW);
fa.push(cL,this.$$method.refresh[name],bl,this.$$method.refresh[name],P);
fa.push(by);
}},defer:function(fb){var fd=navigator.userAgent.indexOf(Q)!=-1;
var fc=navigator.userAgent.indexOf(co)!=-1;
if(fd||fc){fb.__fO=fb.__fP;
}}});
})();
(function(){var u="qx.aspects",t=".",s="static",r="constructor",q="Array",p="[Class ",o="]",n="toString",m="$$init_",k=".prototype",d="destructor",j="extend",g="Class",c="destruct",b="qx.Class",f="singleton",e="member",h="qx.event.type.Data";
qx.Bootstrap.define(b,{statics:{define:function(name,v){if(!v){var v={};
}if(v.include&&!(qx.Bootstrap.getClass(v.include)===q)){v.include=[v.include];
}if(v.implement&&!(qx.Bootstrap.getClass(v.implement)===q)){v.implement=[v.implement];
}var w=false;

if(!v.hasOwnProperty(j)&&!v.type){v.type=s;
w=true;
}var x=this.__gi(name,v.type,v.extend,v.statics,v.construct,v.destruct,v.include);
if(v.extend){if(v.properties){this.__gk(x,v.properties,true);
}if(v.members){this.__gm(x,v.members,true,true,false);
}if(v.events){this.__gj(x,v.events,true);
}if(v.include){for(var i=0,l=v.include.length;i<l;i++){this.__gq(x,v.include[i],false);
}}}if(v.environment){for(var y in v.environment){qx.core.Environment.add(y,v.environment[y]);
}}if(v.implement){for(var i=0,l=v.implement.length;i<l;i++){this.__go(x,v.implement[i]);
}}if(v.defer){v.defer.self=x;
v.defer(x,x.prototype,{add:function(name,z){var A={};
A[name]=z;
qx.Class.__gk(x,A,true);
}});
}return x;
},undefine:function(name){delete this.$$registry[name];
var B=name.split(t);
var D=[window];

for(var i=0;i<B.length;i++){D.push(D[i][B[i]]);
}for(var i=D.length-1;i>=1;i--){var C=D[i];
var parent=D[i-1];

if(qx.Bootstrap.isFunction(C)||qx.Bootstrap.objectGetLength(C)===0){delete parent[B[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(E,F){qx.Class.__gq(E,F,false);
},patch:function(G,H){qx.Class.__gq(G,H,true);
},isSubClassOf:function(I,J){if(!I){return false;
}
if(I==J){return true;
}
if(I.prototype instanceof J){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(K){var L=[];

while(K){if(K.$$properties){L.push.apply(L,qx.Bootstrap.getKeys(K.$$properties));
}K=K.superclass;
}return L;
},getByProperty:function(M,name){while(M){if(M.$$properties&&M.$$properties[name]){return M;
}M=M.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(N,O){return N.$$includes&&N.$$includes.indexOf(O)!==-1;
},getByMixin:function(P,Q){var R,i,l;

while(P){if(P.$$includes){R=P.$$flatIncludes;

for(i=0,l=R.length;i<l;i++){if(R[i]===Q){return P;
}}}P=P.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(S,T){return !!this.getByMixin(S,T);
},hasOwnInterface:function(U,V){return U.$$implements&&U.$$implements.indexOf(V)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(W){var X=[];

while(W){if(W.$$implements){X.push.apply(X,W.$$flatImplements);
}W=W.superclass;
}return X;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(Y,ba){var bb=Y.constructor;

if(this.hasInterface(bb,ba)){return true;
}
try{qx.Interface.assertObject(Y,ba);
return true;
}catch(bc){}
try{qx.Interface.assert(bb,ba,false);
return true;
}catch(bd){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return p+this.classname+o;
},$$registry:qx.Bootstrap.$$registry,__ge:null,__gf:null,__gg:function(){},__gh:function(){},__gi:function(name,be,bf,bg,bh,bi,bj){var bm;

if(!bf&&qx.core.Environment.get(u)==false){bm=bg||{};
qx.Bootstrap.setDisplayNames(bm,name);
}else{var bm={};

if(bf){if(!bh){bh=this.__gr();
}
if(this.__gt(bf,bj)){bm=this.__gu(bh,name,be);
}else{bm=bh;
}if(be===f){bm.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(bh,name,r);
}if(bg){qx.Bootstrap.setDisplayNames(bg,name);
var bn;

for(var i=0,a=qx.Bootstrap.getKeys(bg),l=a.length;i<l;i++){bn=a[i];
var bk=bg[bn];

if(qx.core.Environment.get(u)){if(bk instanceof Function){bk=qx.core.Aspect.wrap(name+t+bn,bk,s);
}bm[bn]=bk;
}else{bm[bn]=bk;
}}}}var bl=qx.Bootstrap.createNamespace(name,bm);
bm.name=bm.classname=name;
bm.basename=bl;
bm.$$type=g;

if(be){bm.$$classtype=be;
}if(!bm.hasOwnProperty(n)){bm.toString=this.genericToString;
}
if(bf){qx.Bootstrap.extendClass(bm,bh,bf,name,bl);
if(bi){if(qx.core.Environment.get(u)){bi=qx.core.Aspect.wrap(name,bi,d);
}bm.$$destructor=bi;
qx.Bootstrap.setDisplayName(bi,name,c);
}}this.$$registry[name]=bm;
return bm;
},__gj:function(bo,bp,bq){var br,br;

if(bo.$$events){for(var br in bp){bo.$$events[br]=bp[br];
}}else{bo.$$events=bp;
}},__gk:function(bs,bt,bu){var bv;

if(bu===undefined){bu=false;
}var bw=bs.prototype;

for(var name in bt){bv=bt[name];
bv.name=name;
if(!bv.refine){if(bs.$$properties===undefined){bs.$$properties={};
}bs.$$properties[name]=bv;
}if(bv.init!==undefined){bs.prototype[m+name]=bv.init;
}if(bv.event!==undefined){var event={};
event[bv.event]=h;
this.__gj(bs,event,bu);
}if(bv.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!bw.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(bs);
}}
if(!bv.refine){qx.core.Property.attachMethods(bs,name,bv);
}}},__gl:null,__gm:function(bx,by,bz,bA,bB){var bC=bx.prototype;
var bE,bD;
qx.Bootstrap.setDisplayNames(by,bx.classname+k);

for(var i=0,a=qx.Bootstrap.getKeys(by),l=a.length;i<l;i++){bE=a[i];
bD=by[bE];
if(bA!==false&&bD instanceof Function&&bD.$$type==null){if(bB==true){bD=this.__gn(bD,bC[bE]);
}else{if(bC[bE]){bD.base=bC[bE];
}bD.self=bx;
}
if(qx.core.Environment.get(u)){bD=qx.core.Aspect.wrap(bx.classname+t+bE,bD,e);
}}bC[bE]=bD;
}},__gn:function(bF,bG){if(bG){return function(){var bI=bF.base;
bF.base=bG;
var bH=bF.apply(this,arguments);
bF.base=bI;
return bH;
};
}else{return bF;
}},__go:function(bJ,bK){var bL=qx.Interface.flatten([bK]);

if(bJ.$$implements){bJ.$$implements.push(bK);
bJ.$$flatImplements.push.apply(bJ.$$flatImplements,bL);
}else{bJ.$$implements=[bK];
bJ.$$flatImplements=bL;
}},__gp:function(bM){var name=bM.classname;
var bN=this.__gu(bM,name,bM.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(bM),l=a.length;i<l;i++){bO=a[i];
bN[bO]=bM[bO];
}bN.prototype=bM.prototype;
var bQ=bM.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(bQ),l=a.length;i<l;i++){bO=a[i];
var bR=bQ[bO];
if(bR&&bR.self==bM){bR.self=bN;
}}for(var bO in this.$$registry){var bP=this.$$registry[bO];

if(!bP){continue;
}
if(bP.base==bM){bP.base=bN;
}
if(bP.superclass==bM){bP.superclass=bN;
}
if(bP.$$original){if(bP.$$original.base==bM){bP.$$original.base=bN;
}
if(bP.$$original.superclass==bM){bP.$$original.superclass=bN;
}}}qx.Bootstrap.createNamespace(name,bN);
this.$$registry[name]=bN;
return bN;
},__gq:function(bS,bT,bU){if(this.hasMixin(bS,bT)){return;
}var bX=bS.$$original;

if(bT.$$constructor&&!bX){bS=this.__gp(bS);
}var bW=qx.Mixin.flatten([bT]);
var bV;

for(var i=0,l=bW.length;i<l;i++){bV=bW[i];
if(bV.$$events){this.__gj(bS,bV.$$events,bU);
}if(bV.$$properties){this.__gk(bS,bV.$$properties,bU);
}if(bV.$$members){this.__gm(bS,bV.$$members,bU,bU,bU);
}}if(bS.$$includes){bS.$$includes.push(bT);
bS.$$flatIncludes.push.apply(bS.$$flatIncludes,bW);
}else{bS.$$includes=[bT];
bS.$$flatIncludes=bW;
}},__gr:function(){function bY(){bY.base.apply(this,arguments);
}return bY;
},__gs:function(){return function(){};
},__gt:function(ca,cb){if(ca&&ca.$$includes){var cc=ca.$$flatIncludes;

for(var i=0,l=cc.length;i<l;i++){if(cc[i].$$constructor){return true;
}}}if(cb){var cd=qx.Mixin.flatten(cb);

for(var i=0,l=cd.length;i<l;i++){if(cd[i].$$constructor){return true;
}}}return false;
},__gu:function(ce,name,cf){var ch=function(){var ck=ch;
var cj=ck.$$original.apply(this,arguments);
if(ck.$$includes){var ci=ck.$$flatIncludes;

for(var i=0,l=ci.length;i<l;i++){if(ci[i].$$constructor){ci[i].$$constructor.apply(this,arguments);
}}}return cj;
};

if(qx.core.Environment.get(u)){var cg=qx.core.Aspect.wrap(name,ch,r);
ch.$$original=ce;
ch.constructor=cg;
ch=cg;
}ch.$$original=ce;
ce.wrapper=ch;
return ch;
}},defer:function(){if(qx.core.Environment.get(u)){for(var cl in qx.Bootstrap.$$registry){var cm=qx.Bootstrap.$$registry[cl];

for(var cn in cm){if(cm[cn] instanceof Function){cm[cn]=qx.core.Aspect.wrap(cl+t+cn,cm[cn],s);
}}}}}});
})();
(function(){var k="indexOf",j="lastIndexOf",h="slice",g="concat",f="join",e="toLocaleUpperCase",d="shift",c="substr",b="filter",a="unshift",I="match",H="quote",G="qx.lang.Generics",F="localeCompare",E="sort",D="some",C="charAt",B="split",A="substring",z="pop",t="toUpperCase",u="replace",q="push",r="charCodeAt",o="every",p="reverse",m="search",n="forEach",v="map",w="toLowerCase",y="splice",x="toLocaleLowerCase";
qx.Class.define(G,{statics:{__hh:{"Array":[f,p,E,q,z,d,a,y,g,h,k,j,n,v,b,D,o],"String":[H,A,w,t,C,r,k,j,x,e,F,I,m,u,B,c,g,h]},__hi:function(J,K){return function(s){return J.prototype[K].apply(s,Array.prototype.slice.call(arguments,1));
};
},__dl:function(){var L=qx.lang.Generics.__hh;

for(var P in L){var N=window[P];
var M=L[P];

for(var i=0,l=M.length;i<l;i++){var O=M[i];

if(!N[O]){N[O]=qx.lang.Generics.__hi(N,O);
}}}}},defer:function(Q){Q.__dl();
}});
})();
(function(){var a="qx.data.MBinding";
qx.Mixin.define(a,{members:{bind:function(b,c,d,e){return qx.data.SingleValueBinding.bind(this,b,c,d,e);
},removeBinding:function(f){qx.data.SingleValueBinding.removeBindingFromObject(this,f);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
})();
(function(){var m="get",l="",k="[",h="last",g="change",f="]",d=".",c="Number",b="String",a="qx.debug.databinding",F="set",E="deepBinding",D="item",C="reset",B="' (",A="Boolean",z=") to the object '",y="Integer",x=" of object ",w="qx.data.SingleValueBinding",u="Binding property ",v="Binding from '",s="PositiveNumber",t="PositiveInteger",q="Binding does not exist!",r=").",n="Date",p=" not possible: No event available. ";
qx.Class.define(w,{statics:{__kd:{},bind:function(G,H,I,J,K){var V=this.__kf(G,H,I,J,K);
var Q=H.split(d);
var M=this.__kl(Q);
var U=[];
var R=[];
var S=[];
var O=[];
var P=G;
try{for(var i=0;i<Q.length;i++){if(M[i]!==l){O.push(g);
}else{O.push(this.__kg(P,Q[i]));
}U[i]=P;
if(i==Q.length-1){if(M[i]!==l){var ba=M[i]===h?P.length-1:M[i];
var L=P.getItem(ba);
this.__kk(L,I,J,K,G);
S[i]=this.__km(P,O[i],I,J,K,M[i]);
}else{if(Q[i]!=null&&P[m+qx.lang.String.firstUp(Q[i])]!=null){var L=P[m+qx.lang.String.firstUp(Q[i])]();
this.__kk(L,I,J,K,G);
}S[i]=this.__km(P,O[i],I,J,K);
}}else{var W={index:i,propertyNames:Q,sources:U,listenerIds:S,arrayIndexValues:M,targetObject:I,targetPropertyChain:J,options:K,listeners:R};
var T=qx.lang.Function.bind(this.__ke,this,W);
R.push(T);
S[i]=P.addListener(O[i],T);
}if(P[m+qx.lang.String.firstUp(Q[i])]==null){P=null;
}else if(M[i]!==l){P=P[m+qx.lang.String.firstUp(Q[i])](M[i]);
}else{P=P[m+qx.lang.String.firstUp(Q[i])]();
}
if(!P){break;
}}}catch(bb){for(var i=0;i<U.length;i++){if(U[i]&&S[i]){U[i].removeListenerById(S[i]);
}}var Y=V.targets;
var N=V.listenerIds[i];
for(var i=0;i<Y.length;i++){if(Y[i]&&N[i]){Y[i].removeListenerById(N[i]);
}}throw bb;
}var X={type:E,listenerIds:S,sources:U,targetListenerIds:V.listenerIds,targets:V.targets};
this.__kn(X,G,H,I,J);
return X;
},__ke:function(bc){if(bc.options&&bc.options.onUpdate){bc.options.onUpdate(bc.sources[bc.index],bc.targetObject);
}for(var j=bc.index+1;j<bc.propertyNames.length;j++){var bg=bc.sources[j];
bc.sources[j]=null;

if(!bg){continue;
}bg.removeListenerById(bc.listenerIds[j]);
}var bg=bc.sources[bc.index];
for(var j=bc.index+1;j<bc.propertyNames.length;j++){if(bc.arrayIndexValues[j-1]!==l){bg=bg[m+qx.lang.String.firstUp(bc.propertyNames[j-1])](bc.arrayIndexValues[j-1]);
}else{bg=bg[m+qx.lang.String.firstUp(bc.propertyNames[j-1])]();
}bc.sources[j]=bg;
if(!bg){this.__kh(bc.targetObject,bc.targetPropertyChain);
break;
}if(j==bc.propertyNames.length-1){if(qx.Class.implementsInterface(bg,qx.data.IListData)){var bh=bc.arrayIndexValues[j]===h?bg.length-1:bc.arrayIndexValues[j];
var be=bg.getItem(bh);
this.__kk(be,bc.targetObject,bc.targetPropertyChain,bc.options,bc.sources[bc.index]);
bc.listenerIds[j]=this.__km(bg,g,bc.targetObject,bc.targetPropertyChain,bc.options,bc.arrayIndexValues[j]);
}else{if(bc.propertyNames[j]!=null&&bg[m+qx.lang.String.firstUp(bc.propertyNames[j])]!=null){var be=bg[m+qx.lang.String.firstUp(bc.propertyNames[j])]();
this.__kk(be,bc.targetObject,bc.targetPropertyChain,bc.options,bc.sources[bc.index]);
}var bf=this.__kg(bg,bc.propertyNames[j]);
bc.listenerIds[j]=this.__km(bg,bf,bc.targetObject,bc.targetPropertyChain,bc.options);
}}else{if(bc.listeners[j]==null){var bd=qx.lang.Function.bind(this.__ke,this,bc);
bc.listeners.push(bd);
}if(qx.Class.implementsInterface(bg,qx.data.IListData)){var bf=g;
}else{var bf=this.__kg(bg,bc.propertyNames[j]);
}bc.listenerIds[j]=bg.addListener(bf,bc.listeners[j]);
}}},__kf:function(bi,bj,bk,bl,bm){var bq=bl.split(d);
var bo=this.__kl(bq);
var bv=[];
var bu=[];
var bs=[];
var br=[];
var bp=bk;
for(var i=0;i<bq.length-1;i++){if(bo[i]!==l){br.push(g);
}else{try{br.push(this.__kg(bp,bq[i]));
}catch(e){break;
}}bv[i]=bp;
var bt=function(){for(var j=i+1;j<bq.length-1;j++){var by=bv[j];
bv[j]=null;

if(!by){continue;
}by.removeListenerById(bs[j]);
}var by=bv[i];
for(var j=i+1;j<bq.length-1;j++){var bw=qx.lang.String.firstUp(bq[j-1]);
if(bo[j-1]!==l){var bz=bo[j-1]===h?by.getLength()-1:bo[j-1];
by=by[m+bw](bz);
}else{by=by[m+bw]();
}bv[j]=by;
if(bu[j]==null){bu.push(bt);
}if(qx.Class.implementsInterface(by,qx.data.IListData)){var bx=g;
}else{try{var bx=qx.data.SingleValueBinding.__kg(by,bq[j]);
}catch(e){break;
}}bs[j]=by.addListener(bx,bu[j]);
}qx.data.SingleValueBinding.updateTarget(bi,bj,bk,bl,bm);
};
bu.push(bt);
bs[i]=bp.addListener(br[i],bt);
var bn=qx.lang.String.firstUp(bq[i]);
if(bp[m+bn]==null){bp=null;
}else if(bo[i]!==l){bp=bp[m+bn](bo[i]);
}else{bp=bp[m+bn]();
}
if(!bp){break;
}}return {listenerIds:bs,targets:bv};
},updateTarget:function(bA,bB,bC,bD,bE){var bF=this.getValueFromObject(bA,bB);
bF=qx.data.SingleValueBinding.__ko(bF,bC,bD,bE,bA);
this.__ki(bC,bD,bF);
},getValueFromObject:function(o,bG){var bK=this.__kj(o,bG);
var bI;

if(bK!=null){var bM=bG.substring(bG.lastIndexOf(d)+1,bG.length);
if(bM.charAt(bM.length-1)==f){var bH=bM.substring(bM.lastIndexOf(k)+1,bM.length-1);
var bJ=bM.substring(0,bM.lastIndexOf(k));
var bL=bK[m+qx.lang.String.firstUp(bJ)]();

if(bH==h){bH=bL.length-1;
}
if(bL!=null){bI=bL.getItem(bH);
}}else{bI=bK[m+qx.lang.String.firstUp(bM)]();
}}return bI;
},__kg:function(bN,bO){var bP=this.__kp(bN,bO);
if(bP==null){if(qx.Class.supportsEvent(bN.constructor,bO)){bP=bO;
}else if(qx.Class.supportsEvent(bN.constructor,g+qx.lang.String.firstUp(bO))){bP=g+qx.lang.String.firstUp(bO);
}else{throw new qx.core.AssertionError(u+bO+x+bN+p);
}}return bP;
},__kh:function(bQ,bR){var bS=this.__kj(bQ,bR);

if(bS!=null){var bT=bR.substring(bR.lastIndexOf(d)+1,bR.length);
if(bT.charAt(bT.length-1)==f){this.__ki(bQ,bR,null);
return;
}if(bS[C+qx.lang.String.firstUp(bT)]!=undefined){bS[C+qx.lang.String.firstUp(bT)]();
}else{bS[F+qx.lang.String.firstUp(bT)](null);
}}},__ki:function(bU,bV,bW){var cb=this.__kj(bU,bV);

if(cb!=null){var cc=bV.substring(bV.lastIndexOf(d)+1,bV.length);
if(cc.charAt(cc.length-1)==f){var bX=cc.substring(cc.lastIndexOf(k)+1,cc.length-1);
var ca=cc.substring(0,cc.lastIndexOf(k));
var bY=bU;

if(!qx.Class.implementsInterface(bY,qx.data.IListData)){bY=cb[m+qx.lang.String.firstUp(ca)]();
}
if(bX==h){bX=bY.length-1;
}
if(bY!=null){bY.setItem(bX,bW);
}}else{cb[F+qx.lang.String.firstUp(cc)](bW);
}}},__kj:function(cd,ce){var ch=ce.split(d);
var ci=cd;
for(var i=0;i<ch.length-1;i++){try{var cg=ch[i];
if(cg.indexOf(f)==cg.length-1){var cf=cg.substring(cg.indexOf(k)+1,cg.length-1);
cg=cg.substring(0,cg.indexOf(k));
}if(cg!=l){ci=ci[m+qx.lang.String.firstUp(cg)]();
}if(cf!=null){if(cf==h){cf=ci.length-1;
}ci=ci.getItem(cf);
cf=null;
}}catch(cj){return null;
}}return ci;
},__kk:function(ck,cl,cm,cn,co){ck=this.__ko(ck,cl,cm,cn,co);
if(ck===undefined){this.__kh(cl,cm);
}if(ck!==undefined){try{this.__ki(cl,cm,ck);
if(cn&&cn.onUpdate){cn.onUpdate(co,cl,ck);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cn&&cn.onSetFail){cn.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+ck+" on "+cl+". Error message: "+e);
}}}},__kl:function(cp){var cq=[];
for(var i=0;i<cp.length;i++){var name=cp[i];
if(qx.lang.String.endsWith(name,f)){var cr=name.substring(name.indexOf(k)+1,name.indexOf(f));
if(name.indexOf(f)!=name.length-1){throw new Error("Please use only one array at a time: "+name+" does not work.");
}
if(cr!==h){if(cr==l||isNaN(parseInt(cr,10))){throw new Error("No number or 'last' value hast been given"+" in an array binding: "+name+" does not work.");
}}if(name.indexOf(k)!=0){cp[i]=name.substring(0,name.indexOf(k));
cq[i]=l;
cq[i+1]=cr;
cp.splice(i+1,0,D);
i++;
}else{cq[i]=cr;
cp.splice(i,1,D);
}}else{cq[i]=l;
}}return cq;
},__km:function(cs,ct,cu,cv,cw,cx){var cy;
var cA=function(cB,e){if(cB!==l){if(cB===h){cB=cs.length-1;
}var cE=cs.getItem(cB);
if(cE===undefined){qx.data.SingleValueBinding.__kh(cu,cv);
}var cC=e.getData().start;
var cD=e.getData().end;

if(cB<cC||cB>cD){return;
}}else{var cE=e.getData();
}if(qx.core.Environment.get(a)){qx.log.Logger.debug("Binding executed from "+cs+" by "+ct+" to "+cu+" ("+cv+")");
qx.log.Logger.debug("Data before conversion: "+cE);
}cE=qx.data.SingleValueBinding.__ko(cE,cu,cv,cw,cs);
if(qx.core.Environment.get(a)){qx.log.Logger.debug("Data after conversion: "+cE);
}try{if(cE!==undefined){qx.data.SingleValueBinding.__ki(cu,cv,cE);
}else{qx.data.SingleValueBinding.__kh(cu,cv);
}if(cw&&cw.onUpdate){cw.onUpdate(cs,cu,cE);
}}catch(e){if(!(e instanceof qx.core.ValidationError)){throw e;
}
if(cw&&cw.onSetFail){cw.onSetFail(e);
}else{qx.log.Logger.warn("Failed so set value "+cE+" on "+cu+". Error message: "+e);
}}};
if(!cx){cx=l;
}cA=qx.lang.Function.bind(cA,cs,cx);
var cz=cs.addListener(ct,cA);
return cz;
},__kn:function(cF,cG,cH,cI,cJ){if(this.__kd[cG.toHashCode()]===undefined){this.__kd[cG.toHashCode()]=[];
}this.__kd[cG.toHashCode()].push([cF,cG,cH,cI,cJ]);
},__ko:function(cK,cL,cM,cN,cO){if(cN&&cN.converter){var cQ;

if(cL.getModel){cQ=cL.getModel();
}return cN.converter(cK,cQ,cO,cL);
}else{var cS=this.__kj(cL,cM);
var cT=cM.substring(cM.lastIndexOf(d)+1,cM.length);
if(cS==null){return cK;
}var cR=qx.Class.getPropertyDefinition(cS.constructor,cT);
var cP=cR==null?l:cR.check;
return this.__kq(cK,cP);
}},__kp:function(cU,cV){var cW=qx.Class.getPropertyDefinition(cU.constructor,cV);

if(cW==null){return null;
}return cW.event;
},__kq:function(cX,cY){var da=qx.lang.Type.getClass(cX);
if((da==c||da==b)&&(cY==y||cY==t)){cX=parseInt(cX,10);
}if((da==A||da==c||da==n)&&cY==b){cX=cX+l;
}if((da==c||da==b)&&(cY==c||cY==s)){cX=parseFloat(cX);
}return cX;
},removeBindingFromObject:function(db,dc){if(dc.type==E){for(var i=0;i<dc.sources.length;i++){if(dc.sources[i]){dc.sources[i].removeListenerById(dc.listenerIds[i]);
}}for(var i=0;i<dc.targets.length;i++){if(dc.targets[i]){dc.targets[i].removeListenerById(dc.targetListenerIds[i]);
}}}else{db.removeListenerById(dc);
}var dd=this.__kd[db.toHashCode()];
if(dd!=undefined){for(var i=0;i<dd.length;i++){if(dd[i][0]==dc){qx.lang.Array.remove(dd,dd[i]);
return;
}}}throw new Error("Binding could not be found!");
},removeAllBindingsForObject:function(de){var df=this.__kd[de.toHashCode()];

if(df!=undefined){for(var i=df.length-1;i>=0;i--){this.removeBindingFromObject(de,df[i][0]);
}}},getAllBindingsForObject:function(dg){if(this.__kd[dg.toHashCode()]===undefined){this.__kd[dg.toHashCode()]=[];
}return this.__kd[dg.toHashCode()];
},removeAllBindings:function(){for(var di in this.__kd){var dh=qx.core.ObjectRegistry.fromHashCode(di);
if(dh==null){delete this.__kd[di];
continue;
}this.removeAllBindingsForObject(dh);
}this.__kd={};
},getAllBindings:function(){return this.__kd;
},showBindingInLog:function(dj,dk){var dm;
for(var i=0;i<this.__kd[dj.toHashCode()].length;i++){if(this.__kd[dj.toHashCode()][i][0]==dk){dm=this.__kd[dj.toHashCode()][i];
break;
}}
if(dm===undefined){var dl=q;
}else{var dl=v+dm[1]+B+dm[2]+z+dm[3]+B+dm[4]+r;
}qx.log.Logger.debug(dl);
},showAllBindingsInLog:function(){for(var dp in this.__kd){var dn=qx.core.ObjectRegistry.fromHashCode(dp);

for(var i=0;i<this.__kd[dp].length;i++){this.showBindingInLog(dn,this.__kd[dp][i][0]);
}}}}});
})();
(function(){var p="",o="g",n="]",m='\\u',l="undefined",k='\\$1',j="0041-005A0061-007A00AA00B500BA00C0-00D600D8-00F600F8-02C102C6-02D102E0-02E402EC02EE0370-037403760377037A-037D03860388-038A038C038E-03A103A3-03F503F7-0481048A-05250531-055605590561-058705D0-05EA05F0-05F20621-064A066E066F0671-06D306D506E506E606EE06EF06FA-06FC06FF07100712-072F074D-07A507B107CA-07EA07F407F507FA0800-0815081A082408280904-0939093D09500958-0961097109720979-097F0985-098C098F09900993-09A809AA-09B009B209B6-09B909BD09CE09DC09DD09DF-09E109F009F10A05-0A0A0A0F0A100A13-0A280A2A-0A300A320A330A350A360A380A390A59-0A5C0A5E0A72-0A740A85-0A8D0A8F-0A910A93-0AA80AAA-0AB00AB20AB30AB5-0AB90ABD0AD00AE00AE10B05-0B0C0B0F0B100B13-0B280B2A-0B300B320B330B35-0B390B3D0B5C0B5D0B5F-0B610B710B830B85-0B8A0B8E-0B900B92-0B950B990B9A0B9C0B9E0B9F0BA30BA40BA8-0BAA0BAE-0BB90BD00C05-0C0C0C0E-0C100C12-0C280C2A-0C330C35-0C390C3D0C580C590C600C610C85-0C8C0C8E-0C900C92-0CA80CAA-0CB30CB5-0CB90CBD0CDE0CE00CE10D05-0D0C0D0E-0D100D12-0D280D2A-0D390D3D0D600D610D7A-0D7F0D85-0D960D9A-0DB10DB3-0DBB0DBD0DC0-0DC60E01-0E300E320E330E40-0E460E810E820E840E870E880E8A0E8D0E94-0E970E99-0E9F0EA1-0EA30EA50EA70EAA0EAB0EAD-0EB00EB20EB30EBD0EC0-0EC40EC60EDC0EDD0F000F40-0F470F49-0F6C0F88-0F8B1000-102A103F1050-1055105A-105D106110651066106E-10701075-1081108E10A0-10C510D0-10FA10FC1100-1248124A-124D1250-12561258125A-125D1260-1288128A-128D1290-12B012B2-12B512B8-12BE12C012C2-12C512C8-12D612D8-13101312-13151318-135A1380-138F13A0-13F41401-166C166F-167F1681-169A16A0-16EA1700-170C170E-17111720-17311740-17511760-176C176E-17701780-17B317D717DC1820-18771880-18A818AA18B0-18F51900-191C1950-196D1970-19741980-19AB19C1-19C71A00-1A161A20-1A541AA71B05-1B331B45-1B4B1B83-1BA01BAE1BAF1C00-1C231C4D-1C4F1C5A-1C7D1CE9-1CEC1CEE-1CF11D00-1DBF1E00-1F151F18-1F1D1F20-1F451F48-1F4D1F50-1F571F591F5B1F5D1F5F-1F7D1F80-1FB41FB6-1FBC1FBE1FC2-1FC41FC6-1FCC1FD0-1FD31FD6-1FDB1FE0-1FEC1FF2-1FF41FF6-1FFC2071207F2090-209421022107210A-211321152119-211D212421262128212A-212D212F-2139213C-213F2145-2149214E218321842C00-2C2E2C30-2C5E2C60-2CE42CEB-2CEE2D00-2D252D30-2D652D6F2D80-2D962DA0-2DA62DA8-2DAE2DB0-2DB62DB8-2DBE2DC0-2DC62DC8-2DCE2DD0-2DD62DD8-2DDE2E2F300530063031-3035303B303C3041-3096309D-309F30A1-30FA30FC-30FF3105-312D3131-318E31A0-31B731F0-31FF3400-4DB54E00-9FCBA000-A48CA4D0-A4FDA500-A60CA610-A61FA62AA62BA640-A65FA662-A66EA67F-A697A6A0-A6E5A717-A71FA722-A788A78BA78CA7FB-A801A803-A805A807-A80AA80C-A822A840-A873A882-A8B3A8F2-A8F7A8FBA90A-A925A930-A946A960-A97CA984-A9B2A9CFAA00-AA28AA40-AA42AA44-AA4BAA60-AA76AA7AAA80-AAAFAAB1AAB5AAB6AAB9-AABDAAC0AAC2AADB-AADDABC0-ABE2AC00-D7A3D7B0-D7C6D7CB-D7FBF900-FA2DFA30-FA6DFA70-FAD9FB00-FB06FB13-FB17FB1DFB1F-FB28FB2A-FB36FB38-FB3CFB3EFB40FB41FB43FB44FB46-FBB1FBD3-FD3DFD50-FD8FFD92-FDC7FDF0-FDFBFE70-FE74FE76-FEFCFF21-FF3AFF41-FF5AFF66-FFBEFFC2-FFC7FFCA-FFCFFFD2-FFD7FFDA-FFDC",h='-',g="qx.lang.String",f="(^|[^",c="0",e="%",d=' ',b='\n',a="])[";
qx.Class.define(g,{statics:{__cO:j,__cP:null,__cQ:{},camelCase:function(q){var r=this.__cQ[q];

if(!r){r=q.replace(/\-([a-z])/g,function(s,t){return t.toUpperCase();
});
}return r;
},hyphenate:function(u){var v=this.__cQ[u];

if(!v){v=u.replace(/[A-Z]/g,function(w){return (h+w.charAt(0).toLowerCase());
});
}return v;
},capitalize:function(x){if(this.__cP===null){var y=m;
this.__cP=new RegExp(f+this.__cO.replace(/[0-9A-F]{4}/g,function(z){return y+z;
})+a+this.__cO.replace(/[0-9A-F]{4}/g,function(A){return y+A;
})+n,o);
}return x.replace(this.__cP,function(B){return B.toUpperCase();
});
},clean:function(C){return this.trim(C.replace(/\s+/g,d));
},trimLeft:function(D){return D.replace(/^\s+/,p);
},trimRight:function(E){return E.replace(/\s+$/,p);
},trim:function(F){return F.replace(/^\s+|\s+$/g,p);
},startsWith:function(G,H){return G.indexOf(H)===0;
},endsWith:function(I,J){return I.substring(I.length-J.length,I.length)===J;
},repeat:function(K,L){return K.length>0?new Array(L+1).join(K):p;
},pad:function(M,length,N){var O=length-M.length;

if(O>0){if(typeof N===l){N=c;
}return this.repeat(N,O)+M;
}else{return M;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(P,Q){return P.indexOf(Q)!=-1;
},format:function(R,S){var T=R;
var i=S.length;

while(i--){T=T.replace(new RegExp(e+(i+1),o),S[i]+p);
}return T;
},escapeRegexpChars:function(U){return U.replace(/([.*+?^${}()|[\]\/\\])/g,k);
},toArray:function(V){return V.split(/\B|\b/g);
},stripTags:function(W){return W.replace(/<\/?[^>]+>/gi,p);
},stripScripts:function(X,Y){var bb=p;
var ba=X.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){bb+=arguments[1]+b;
return p;
});

if(Y===true){qx.lang.Function.globalEval(bb);
}return ba;
}}});
})();
(function(){var g="mshtml",f="engine.name",e="[object Array]",d="qx.lang.Array",c="qx",b="number",a="string";
qx.Class.define(d,{statics:{toArray:function(h,j){return this.cast(h,Array,j);
},cast:function(k,m,n){if(k.constructor===m){return k;
}
if(qx.Class.hasInterface(k,qx.data.IListData)){var k=k.toArray();
}var o=new m;
if((qx.core.Environment.get(f)==g)){if(k.item){for(var i=n||0,l=k.length;i<l;i++){o.push(k[i]);
}return o;
}}if(Object.prototype.toString.call(k)===e&&n==null){o.push.apply(o,k);
}else{o.push.apply(o,Array.prototype.slice.call(k,n||0));
}return o;
},fromArguments:function(p,q){return Array.prototype.slice.call(p,q||0);
},fromCollection:function(r){if((qx.core.Environment.get(f)==g)){if(r.item){var s=[];

for(var i=0,l=r.length;i<l;i++){s[i]=r[i];
}return s;
}}return Array.prototype.slice.call(r,0);
},fromShortHand:function(t){var v=t.length;
var u=qx.lang.Array.clone(t);
switch(v){case 1:u[1]=u[2]=u[3]=u[0];
break;
case 2:u[2]=u[0];
case 3:u[3]=u[1];
}return u;
},clone:function(w){return w.concat();
},insertAt:function(x,y,i){x.splice(i,0,y);
return x;
},insertBefore:function(z,A,B){var i=z.indexOf(B);

if(i==-1){z.push(A);
}else{z.splice(i,0,A);
}return z;
},insertAfter:function(C,D,E){var i=C.indexOf(E);

if(i==-1||i==(C.length-1)){C.push(D);
}else{C.splice(i+1,0,D);
}return C;
},removeAt:function(F,i){return F.splice(i,1)[0];
},removeAll:function(G){G.length=0;
return this;
},append:function(H,I){Array.prototype.push.apply(H,I);
return H;
},exclude:function(J,K){for(var i=0,M=K.length,L;i<M;i++){L=J.indexOf(K[i]);

if(L!=-1){J.splice(L,1);
}}return J;
},remove:function(N,O){var i=N.indexOf(O);

if(i!=-1){N.splice(i,1);
return O;
}},contains:function(P,Q){return P.indexOf(Q)!==-1;
},equals:function(R,S){var length=R.length;

if(length!==S.length){return false;
}
for(var i=0;i<length;i++){if(R[i]!==S[i]){return false;
}}return true;
},sum:function(T){var U=0;

for(var i=0,l=T.length;i<l;i++){U+=T[i];
}return U;
},max:function(V){var i,X=V.length,W=V[0];

for(i=1;i<X;i++){if(V[i]>W){W=V[i];
}}return W===undefined?null:W;
},min:function(Y){var i,bb=Y.length,ba=Y[0];

for(i=1;i<bb;i++){if(Y[i]<ba){ba=Y[i];
}}return ba===undefined?null:ba;
},unique:function(bc){var bm=[],be={},bh={},bj={};
var bi,bd=0;
var bn=c+qx.lang.Date.now();
var bf=false,bl=false,bo=false;
for(var i=0,bk=bc.length;i<bk;i++){bi=bc[i];
if(bi===null){if(!bf){bf=true;
bm.push(bi);
}}else if(bi===undefined){}else if(bi===false){if(!bl){bl=true;
bm.push(bi);
}}else if(bi===true){if(!bo){bo=true;
bm.push(bi);
}}else if(typeof bi===a){if(!be[bi]){be[bi]=1;
bm.push(bi);
}}else if(typeof bi===b){if(!bh[bi]){bh[bi]=1;
bm.push(bi);
}}else{bg=bi[bn];

if(bg==null){bg=bi[bn]=bd++;
}
if(!bj[bg]){bj[bg]=bi;
bm.push(bi);
}}}for(var bg in bj){try{delete bj[bg][bn];
}catch(bp){try{bj[bg][bn]=null;
}catch(bq){throw new Error("Cannot clean-up map entry doneObjects["+bg+"]["+bn+"]");
}}}return bm;
}}});
})();
(function(){var c="qx.event.type.Data",b="qx.event.type.Event",a="qx.data.IListData";
qx.Interface.define(a,{events:{"change":c,"changeLength":b},members:{getItem:function(d){},setItem:function(e,f){},splice:function(g,h,i){},contains:function(j){},getLength:function(){},toArray:function(){}}});
})();
(function(){var a="qx.lang.Date";
qx.Class.define(a,{statics:{now:function(){return +new Date;
}}});
})();
(function(){var f="()",e=".",d=".prototype.",c='anonymous()',b="qx.lang.Function",a=".constructor()";
qx.Class.define(b,{statics:{getCaller:function(g){return g.caller?g.caller.callee:g.callee.caller;
},getName:function(h){if(h.displayName){return h.displayName;
}
if(h.$$original||h.wrapper||h.classname){return h.classname+a;
}
if(h.$$mixin){for(var j in h.$$mixin.$$members){if(h.$$mixin.$$members[j]==h){return h.$$mixin.name+d+j+f;
}}for(var j in h.$$mixin){if(h.$$mixin[j]==h){return h.$$mixin.name+e+j+f;
}}}
if(h.self){var k=h.self.constructor;

if(k){for(var j in k.prototype){if(k.prototype[j]==h){return k.classname+d+j+f;
}}for(var j in k){if(k[j]==h){return k.classname+e+j+f;
}}}}var i=h.toString().match(/function\s*(\w*)\s*\(.*/);

if(i&&i.length>=1&&i[1]){return i[1]+f;
}return c;
},globalEval:function(l){if(window.execScript){return window.execScript(l);
}else{return eval.call(window,l);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(m,n){if(!n){return m;
}if(!(n.self||n.args||n.delay!=null||n.periodical!=null||n.attempt)){return m;
}return function(event){var p=qx.lang.Array.fromArguments(arguments);
if(n.args){p=n.args.concat(p);
}
if(n.delay||n.periodical){var o=qx.event.GlobalError.observeMethod(function(){return m.apply(n.self||this,p);
});

if(n.delay){return window.setTimeout(o,n.delay);
}
if(n.periodical){return window.setInterval(o,n.periodical);
}}else if(n.attempt){var q=false;

try{q=m.apply(n.self||this,p);
}catch(r){}return q;
}else{return m.apply(n.self||this,p);
}};
},bind:function(s,self,t){return this.create(s,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(u,v){return this.create(u,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(w,self,x){if(arguments.length<3){return function(event){return w.call(self||this,event||window.event);
};
}else{var y=qx.lang.Array.fromArguments(arguments,2);
return function(event){var z=[event||window.event];
z.push.apply(z,y);
w.apply(self||this,z);
};
}},attempt:function(A,self,B){return this.create(A,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(C,D,self,E){return this.create(C,{delay:D,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(F,G,self,H){return this.create(F,{periodical:G,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
})();
(function(){var b="qx.globalErrorHandling",a="qx.event.GlobalError";
qx.Bootstrap.define(a,{statics:{__ie:function(){if(qx.core&&qx.core.Environment){return qx.core.Environment.get(b);
}else{return !!qx.Bootstrap.getEnvironmentSetting(b);
}},setErrorHandler:function(c,d){this.__eB=c||null;
this.__eC=d||window;

if(this.__ie()){if(c&&window.onerror){var e=qx.Bootstrap.bind(this.__ig,this);

if(this.__if==null){this.__if=window.onerror;
}var self=this;
window.onerror=function(f,g,h){self.__if(f,g,h);
e(f,g,h);
};
}
if(c&&!window.onerror){window.onerror=qx.Bootstrap.bind(this.__ig,this);
}if(this.__eB==null){if(this.__if!=null){window.onerror=this.__if;
this.__if=null;
}else{window.onerror=null;
}}}},__ig:function(i,j,k){if(this.__eB){this.handleError(new qx.core.WindowError(i,j,k));
return true;
}},observeMethod:function(l){if(this.__ie()){var self=this;
return function(){if(!self.__eB){return l.apply(this,arguments);
}
try{return l.apply(this,arguments);
}catch(m){self.handleError(new qx.core.GlobalError(m,arguments));
}};
}else{return l;
}},handleError:function(n){if(this.__eB){this.__eB.call(this.__eC,n);
}}},defer:function(o){if(qx.core&&qx.core.Environment){qx.core.Environment.add(b,true);
}else{qx.Bootstrap.setEnvironmentSetting(b,true);
}o.setErrorHandler(null,null);
}});
})();
(function(){var b="",a="qx.core.WindowError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d,e){Error.call(this,c);
this.__bR=c;
this.__bS=d||b;
this.__bT=e===undefined?-1:e;
},members:{__bR:null,__bS:null,__bT:null,toString:function(){return this.__bR;
},getUri:function(){return this.__bS;
},getLineNumber:function(){return this.__bT;
}}});
})();
(function(){var b="GlobalError: ",a="qx.core.GlobalError";
qx.Bootstrap.define(a,{extend:Error,construct:function(c,d){if(qx.Bootstrap.DEBUG){qx.core.Assert.assertNotUndefined(c);
}this.__bR=b+(c&&c.message?c.message:c);
Error.call(this,this.__bR);
this.__kF=d;
this.__kG=c;
},members:{__kG:null,__kF:null,__bR:null,toString:function(){return this.__bR;
},getArguments:function(){return this.__kF;
},getSourceException:function(){return this.__kG;
}},destruct:function(){this.__kG=null;
this.__kF=null;
this.__bR=null;
}});
})();
(function(){var f="qx.lang.Type",e="Error",d="RegExp",c="Date",b="Number",a="Boolean";
qx.Class.define(f,{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(g){return this.getClass(g)==d;
},isNumber:function(h){return (h!==null&&(this.getClass(h)==b||h instanceof Number));
},isBoolean:function(i){return (i!==null&&(this.getClass(i)==a||i instanceof Boolean));
},isDate:function(j){return (j!==null&&(this.getClass(j)==c||j instanceof Date));
},isError:function(k){return (k!==null&&(this.getClass(k)==e||k instanceof Error));
}}});
})();
(function(){var p="",o="!",n="'!",m="'",k="Expected '",j="' (rgb(",h=",",g=")), but found value '",f="Event (",d="Expected value to be the CSS color '",bz="' but found ",by="]",bx=", ",bw="The value '",bv=" != ",bu="qx.core.Object",bt="Expected value to be an array but found ",bs=") was fired.",br="Expected value to be an integer >= 0 but found ",bq="' to be not equal with '",w="' to '",x="Expected object '",u="Called assertTrue with '",v="Expected value to be a map but found ",s="The function did not raise an exception!",t="Expected value to be undefined but found ",q="Expected value to be a DOM element but found  '",r="Expected value to be a regular expression but found ",E="' to implement the interface '",F="Expected value to be null but found ",S="Invalid argument 'type'",O="Called assert with 'false'",bb="Assertion error! ",V="null",bm="' but found '",bg="' must must be a key of the map '",J="The String '",bp="Expected value to be a string but found ",bo="Expected value not to be undefined but found undefined!",bn="qx.util.ColorUtil",I=": ",L="The raised exception does not have the expected type! ",N=") not fired.",Q="qx.core.Assert",T="Expected value to be typeof object but found ",W="' (identical) but found '",bd="' must have any of the values defined in the array '",bi="Expected value to be a number but found ",y="Called assertFalse with '",z="qx.ui.core.Widget",K="Expected value to be a qooxdoo object but found ",ba="' arguments.",Y="Expected value '%1' to be in the range '%2'..'%3'!",X="Array[",bf="' does not match the regular expression '",be="' to be not identical with '",U="Expected [",bc="' arguments but found '",a="', which cannot be converted to a CSS color!",bh="qx.core.AssertionError",A="Expected value to be a boolean but found ",B="Expected value not to be null but found null!",P="))!",b="Expected value to be a qooxdoo widget but found ",c="Expected value to be typeof '",H="Expected value to be typeof function but found ",C="Expected value to be an integer but found ",D="Called fail().",G="The parameter 're' must be a string or a regular expression.",R="Expected value to be a number >= 0 but found ",bk="Expected value to be instanceof '",bj="], but found [",M="Wrong number of arguments given. Expected '",bl="object";
qx.Class.define(Q,{statics:{__ek:true,__el:function(bA,bB){var bF=p;

for(var i=1,l=arguments.length;i<l;i++){bF=bF+this.__em(arguments[i]);
}var bE=p;

if(bF){bE=bA+I+bF;
}else{bE=bA;
}var bD=bb+bE;

if(this.__ek){qx.Bootstrap.error(bD);
}
if(qx.Class.isDefined(bh)){var bC=new qx.core.AssertionError(bA,bF);

if(this.__ek){qx.Bootstrap.error("Stack trace: \n"+bC.getStackTrace());
}throw bC;
}else{throw new Error(bD);
}},__em:function(bG){var bH;

if(bG===null){bH=V;
}else if(qx.lang.Type.isArray(bG)&&bG.length>10){bH=X+bG.length+by;
}else if((bG instanceof Object)&&(bG.toString==null)){bH=qx.lang.Json.stringify(bG,null,2);
}else{try{bH=bG.toString();
}catch(e){bH=p;
}}return bH;
},assert:function(bI,bJ){bI==true||this.__el(bJ||p,O);
},fail:function(bK,bL){var bM=bL?p:D;
this.__el(bK||p,bM);
},assertTrue:function(bN,bO){(bN===true)||this.__el(bO||p,u,bN,m);
},assertFalse:function(bP,bQ){(bP===false)||this.__el(bQ||p,y,bP,m);
},assertEquals:function(bR,bS,bT){bR==bS||this.__el(bT||p,k,bR,bm,bS,n);
},assertNotEquals:function(bU,bV,bW){bU!=bV||this.__el(bW||p,k,bU,bq,bV,n);
},assertIdentical:function(bX,bY,ca){bX===bY||this.__el(ca||p,k,bX,W,bY,n);
},assertNotIdentical:function(cb,cc,cd){cb!==cc||this.__el(cd||p,k,cb,be,cc,n);
},assertNotUndefined:function(ce,cf){ce!==undefined||this.__el(cf||p,bo);
},assertUndefined:function(cg,ch){cg===undefined||this.__el(ch||p,t,cg,o);
},assertNotNull:function(ci,cj){ci!==null||this.__el(cj||p,B);
},assertNull:function(ck,cl){ck===null||this.__el(cl||p,F,ck,o);
},assertJsonEquals:function(cm,cn,co){this.assertEquals(qx.lang.Json.stringify(cm),qx.lang.Json.stringify(cn),co);
},assertMatch:function(cp,cq,cr){this.assertString(cp);
this.assert(qx.lang.Type.isRegExp(cq)||qx.lang.Type.isString(cq),G);
cp.search(cq)>=0||this.__el(cr||p,J,cp,bf,cq.toString(),n);
},assertArgumentsCount:function(cs,ct,cu,cv){var cw=cs.length;
(cw>=ct&&cw<=cu)||this.__el(cv||p,M,ct,w,cu,bc,arguments.length,ba);
},assertEventFired:function(cx,event,cy,cz,cA){var cC=false;
var cB=function(e){if(cz){cz.call(cx,e);
}cC=true;
};
var cD;

try{cD=cx.addListener(event,cB,cx);
cy.call();
}catch(cE){throw cE;
}finally{try{cx.removeListenerById(cD);
}catch(cF){}}cC===true||this.__el(cA||p,f,event,N);
},assertEventNotFired:function(cG,event,cH,cI){var cK=false;
var cJ=function(e){cK=true;
};
var cL=cG.addListener(event,cJ,cG);
cH.call();
cK===false||this.__el(cI||p,f,event,bs);
cG.removeListenerById(cL);
},assertException:function(cM,cN,cO,cP){var cN=cN||Error;
var cQ;

try{this.__ek=false;
cM();
}catch(cR){cQ=cR;
}finally{this.__ek=true;
}
if(cQ==null){this.__el(cP||p,s);
}cQ instanceof cN||this.__el(cP||p,L,cN,bv,cQ);

if(cO){this.assertMatch(cQ.toString(),cO,cP);
}},assertInArray:function(cS,cT,cU){cT.indexOf(cS)!==-1||this.__el(cU||p,bw,cS,bd,cT,m);
},assertArrayEquals:function(cV,cW,cX){this.assertArray(cV,cX);
this.assertArray(cW,cX);
cX=cX||U+cV.join(bx)+bj+cW.join(bx)+by;

if(cV.length!==cW.length){this.fail(cX,true);
}
for(var i=0;i<cV.length;i++){if(cV[i]!==cW[i]){this.fail(cX,true);
}}},assertKeyInMap:function(cY,da,db){da[cY]!==undefined||this.__el(db||p,bw,cY,bg,da,m);
},assertFunction:function(dc,dd){qx.lang.Type.isFunction(dc)||this.__el(dd||p,H,dc,o);
},assertString:function(de,df){qx.lang.Type.isString(de)||this.__el(df||p,bp,de,o);
},assertBoolean:function(dg,dh){qx.lang.Type.isBoolean(dg)||this.__el(dh||p,A,dg,o);
},assertNumber:function(di,dj){(qx.lang.Type.isNumber(di)&&isFinite(di))||this.__el(dj||p,bi,di,o);
},assertPositiveNumber:function(dk,dl){(qx.lang.Type.isNumber(dk)&&isFinite(dk)&&dk>=0)||this.__el(dl||p,R,dk,o);
},assertInteger:function(dm,dn){(qx.lang.Type.isNumber(dm)&&isFinite(dm)&&dm%1===0)||this.__el(dn||p,C,dm,o);
},assertPositiveInteger:function(dp,dq){var dr=(qx.lang.Type.isNumber(dp)&&isFinite(dp)&&dp%1===0&&dp>=0);
dr||this.__el(dq||p,br,dp,o);
},assertInRange:function(ds,dt,du,dv){(ds>=dt&&ds<=du)||this.__el(dv||p,qx.lang.String.format(Y,[ds,dt,du]));
},assertObject:function(dw,dx){var dy=dw!==null&&(qx.lang.Type.isObject(dw)||typeof dw===bl);
dy||this.__el(dx||p,T,(dw),o);
},assertArray:function(dz,dA){qx.lang.Type.isArray(dz)||this.__el(dA||p,bt,dz,o);
},assertMap:function(dB,dC){qx.lang.Type.isObject(dB)||this.__el(dC||p,v,dB,o);
},assertRegExp:function(dD,dE){qx.lang.Type.isRegExp(dD)||this.__el(dE||p,r,dD,o);
},assertType:function(dF,dG,dH){this.assertString(dG,S);
typeof (dF)===dG||this.__el(dH||p,c,dG,bz,dF,o);
},assertInstance:function(dI,dJ,dK){var dL=dJ.classname||dJ+p;
dI instanceof dJ||this.__el(dK||p,bk,dL,bz,dI,o);
},assertInterface:function(dM,dN,dO){qx.Class.implementsInterface(dM,dN)||this.__el(dO||p,x,dM,E,dN,n);
},assertCssColor:function(dP,dQ,dR){var dS=qx.Class.getByName(bn);

if(!dS){throw new Error("qx.util.ColorUtil not available! Your code must have a dependency on 'qx.util.ColorUtil'");
}var dU=dS.stringToRgb(dP);

try{var dT=dS.stringToRgb(dQ);
}catch(dW){this.__el(dR||p,d,dP,j,dU.join(h),g,dQ,a);
}var dV=dU[0]==dT[0]&&dU[1]==dT[1]&&dU[2]==dT[2];
dV||this.__el(dR||p,d,dU,j,dU.join(h),g,dQ,j,dT.join(h),P);
},assertElement:function(dX,dY){!!(dX&&dX.nodeType===1)||this.__el(dY||p,q,dX,n);
},assertQxObject:function(ea,eb){this.__en(ea,bu)||this.__el(eb||p,K,ea,o);
},assertQxWidget:function(ec,ed){this.__en(ec,z)||this.__el(ed||p,b,ec,o);
},__en:function(ee,ef){if(!ee){return false;
}var eg=ee.constructor;

while(eg){if(eg.classname===ef){return true;
}eg=eg.superclass;
}return false;
}}});
})();
(function(){var c="",b=": ",a="qx.type.BaseError";
qx.Class.define(a,{extend:Error,construct:function(d,e){Error.call(this,e);
this.__bE=d||c;
this.message=e||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__bE:null,message:null,getComment:function(){return this.__bE;
},toString:function(){return this.__bE+(this.message?b+this.message:c);
}}});
})();
(function(){var a="qx.core.AssertionError";
qx.Class.define(a,{extend:qx.type.BaseError,construct:function(b,c){qx.type.BaseError.call(this,b,c);
this.__dw=qx.dev.StackTrace.getStackTrace();
},members:{__dw:null,getStackTrace:function(){return this.__dw;
}}});
})();
(function(){var m=":",l="engine.name",k="Error created at",j="...",h="qx.dev.StackTrace",g="",f="\n",e="?",d="/source/class/",c="anonymous",a="of linked script",b=".";
qx.Bootstrap.define(h,{statics:{getStackTrace:qx.core.Environment.select(l,{"gecko":function(){try{throw new Error();
}catch(A){var u=this.getStackTraceFromError(A);
qx.lang.Array.removeAt(u,0);
var s=this.getStackTraceFromCaller(arguments);
var q=s.length>u.length?s:u;

for(var i=0;i<Math.min(s.length,u.length);i++){var r=s[i];

if(r.indexOf(c)>=0){continue;
}var y=r.split(m);

if(y.length!=2){continue;
}var w=y[0];
var p=y[1];
var o=u[i];
var z=o.split(m);
var v=z[0];
var n=z[1];

if(qx.Class.getByName(v)){var t=v;
}else{t=w;
}var x=t+m;

if(p){x+=p+m;
}x+=n;
q[i]=x;
}return q;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var B;

try{B.bar();
}catch(D){var C=this.getStackTraceFromError(D);
qx.lang.Array.removeAt(C,0);
return C;
}return [];
}}),getStackTraceFromCaller:qx.core.Environment.select(l,{"opera":function(E){return [];
},"default":function(F){var K=[];
var J=qx.lang.Function.getCaller(F);
var G={};

while(J){var H=qx.lang.Function.getName(J);
K.push(H);

try{J=J.caller;
}catch(L){break;
}
if(!J){break;
}var I=qx.core.ObjectRegistry.toHashCode(J);

if(G[I]){K.push(j);
break;
}G[I]=J;
}return K;
}}),getStackTraceFromError:qx.core.Environment.select(l,{"gecko":function(M){if(!M.stack){return [];
}var S=/@(.+):(\d+)$/gm;
var N;
var O=[];

while((N=S.exec(M.stack))!=null){var P=N[1];
var R=N[2];
var Q=this.__dp(P);
O.push(Q+m+R);
}return O;
},"webkit":function(T){if(T.stack){var bb=/at (.*)/gm;
var ba=/\((.*?)(:[^\/].*)\)/;
var X=/(.*?)(:[^\/].*)/;
var U;
var V=[];

while((U=bb.exec(T.stack))!=null){var W=ba.exec(U[1]);

if(!W){W=X.exec(U[1]);
}
if(W){var Y=this.__dp(W[1]);
V.push(Y+W[2]);
}else{V.push(U[1]);
}}return V;
}else if(T.sourceURL&&T.line){return [this.__dp(T.sourceURL)+m+T.line];
}else{return [];
}},"opera":function(bc){if(bc.stacktrace){var be=bc.stacktrace;

if(be.indexOf(k)>=0){be=be.split(k)[0];
}if(be.indexOf(a)>=0){var bo=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bi=bf[2];
var bm=this.__dp(bi);
bg.push(bm+m+bn);
}}else{var bo=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var bf;
var bg=[];

while((bf=bo.exec(be))!=null){var bn=bf[1];
var bh=bf[2];
var bi=bf[3];
var bm=this.__dp(bi);
bg.push(bm+m+bn+m+bh);
}}return bg;
}else if(bc.message&&bc.message.indexOf("Backtrace:")>=0){var bg=[];
var bj=qx.lang.String.trim(bc.message.split("Backtrace:")[1]);
var bk=bj.split(f);

for(var i=0;i<bk.length;i++){var bd=bk[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(bd&&bd.length>=2){var bn=bd[1];
var bl=this.__dp(bd[2]);
bg.push(bl+m+bn);
}}return bg;
}else{return [];
}},"default":function(){return [];
}}),__dp:function(bp){var bt=d;
var bq=bp.indexOf(bt);
var bs=bp.indexOf(e);

if(bs>=0){bp=bp.substring(0,bs);
}var br=(bq==-1)?bp:bp.substring(bq+bt.length).replace(/\//g,b).replace(/\.js$/,g);
return br;
}}});
})();
(function(){var h="qx.debug.dispose",g="$$hash",f="-",e="",d="qx.core.ObjectRegistry",c="-0";
qx.Class.define(d,{statics:{inShutDown:false,__ho:{},__hp:0,__hq:[],__hr:e,__hs:{},register:function(j){var n=this.__ho;

if(!n){return;
}var m=j.$$hash;

if(m==null){var k=this.__hq;

if(k.length>0&&!qx.core.Environment.get(h)){m=k.pop();
}else{m=(this.__hp++)+this.__hr;
}j.$$hash=m;

if(qx.core.Environment.get(h)&&qx.dev&&qx.dev.Debug&&qx.dev.Debug.disposeProfilingActive){this.__hs[m]=qx.dev.StackTrace.getStackTrace();
}}n[m]=j;
},unregister:function(o){var p=o.$$hash;

if(p==null){return;
}var q=this.__ho;

if(q&&q[p]){delete q[p];
this.__hq.push(p);
}try{delete o.$$hash;
}catch(r){if(o.removeAttribute){o.removeAttribute(g);
}}},toHashCode:function(s){var u=s.$$hash;

if(u!=null){return u;
}var t=this.__hq;

if(t.length>0){u=t.pop();
}else{u=(this.__hp++)+this.__hr;
}return s.$$hash=u;
},clearHashCode:function(v){var w=v.$$hash;

if(w!=null){this.__hq.push(w);
try{delete v.$$hash;
}catch(x){if(v.removeAttribute){v.removeAttribute(g);
}}}},fromHashCode:function(y){return this.__ho[y]||null;
},shutdown:function(){this.inShutDown=true;
var A=this.__ho;
var C=[];

for(var B in A){C.push(B);
}C.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var z,i=0,l=C.length;

while(true){try{for(;i<l;i++){B=C[i];
z=A[B];

if(z&&z.dispose){z.dispose();
}}}catch(D){qx.Bootstrap.error(this,"Could not dispose object "+z.toString()+": "+D);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__ho;
},getRegistry:function(){return this.__ho;
},getNextHash:function(){return this.__hp;
},getPostId:function(){return this.__hr;
},getStackTraces:function(){return this.__hs;
}},defer:function(E){if(window&&window.top){var frames=window.top.frames;

for(var i=0;i<frames.length;i++){if(frames[i]===window){E.__hr=f+(i+1);
return;
}}}E.__hr=c;
}});
})();
(function(){var p='',o='"',m=':',l=']',h='null',g=': ',f='object',e='function',d=',',b='\n',ba='\\u',Y=',\n',X='0000',W='string',V="Cannot stringify a recursive object.",U='0',T='-',S='}',R='String',Q='Boolean',x='\\\\',y='\\f',u='\\t',w='{\n',s='[]',t="qx.lang.JsonImpl",q='Z',r='\\n',z='Object',A='{}',H='@',F='.',K='(',J='Array',M='T',L='\\r',C='{',P='JSON.parse',O=' ',N='[',B='Number',D=')',E='[\n',G='\\"',I='\\b';
qx.Class.define(t,{extend:Object,construct:function(){this.stringify=qx.lang.Function.bind(this.stringify,this);
this.parse=qx.lang.Function.bind(this.parse,this);
},members:{__fA:null,__fB:null,__fC:null,__fD:null,stringify:function(bb,bc,bd){this.__fA=p;
this.__fB=p;
this.__fD=[];

if(qx.lang.Type.isNumber(bd)){var bd=Math.min(10,Math.floor(bd));

for(var i=0;i<bd;i+=1){this.__fB+=O;
}}else if(qx.lang.Type.isString(bd)){if(bd.length>10){bd=bd.slice(0,10);
}this.__fB=bd;
}if(bc&&(qx.lang.Type.isFunction(bc)||qx.lang.Type.isArray(bc))){this.__fC=bc;
}else{this.__fC=null;
}return this.__fE(p,{'':bb});
},__fE:function(be,bf){var bi=this.__fA,bg,bj=bf[be];
if(bj&&qx.lang.Type.isFunction(bj.toJSON)){bj=bj.toJSON(be);
}else if(qx.lang.Type.isDate(bj)){bj=this.dateToJSON(bj);
}if(typeof this.__fC===e){bj=this.__fC.call(bf,be,bj);
}
if(bj===null){return h;
}
if(bj===undefined){return undefined;
}switch(qx.lang.Type.getClass(bj)){case R:return this.__fF(bj);
case B:return isFinite(bj)?String(bj):h;
case Q:return String(bj);
case J:this.__fA+=this.__fB;
bg=[];

if(this.__fD.indexOf(bj)!==-1){throw new TypeError(V);
}this.__fD.push(bj);
var length=bj.length;

for(var i=0;i<length;i+=1){bg[i]=this.__fE(i,bj)||h;
}this.__fD.pop();
if(bg.length===0){var bh=s;
}else if(this.__fA){bh=E+this.__fA+bg.join(Y+this.__fA)+b+bi+l;
}else{bh=N+bg.join(d)+l;
}this.__fA=bi;
return bh;
case z:this.__fA+=this.__fB;
bg=[];

if(this.__fD.indexOf(bj)!==-1){throw new TypeError(V);
}this.__fD.push(bj);
if(this.__fC&&typeof this.__fC===f){var length=this.__fC.length;

for(var i=0;i<length;i+=1){var k=this.__fC[i];

if(typeof k===W){var v=this.__fE(k,bj);

if(v){bg.push(this.__fF(k)+(this.__fA?g:m)+v);
}}}}else{for(var k in bj){if(Object.hasOwnProperty.call(bj,k)){var v=this.__fE(k,bj);

if(v){bg.push(this.__fF(k)+(this.__fA?g:m)+v);
}}}}this.__fD.pop();
if(bg.length===0){var bh=A;
}else if(this.__fA){bh=w+this.__fA+bg.join(Y+this.__fA)+b+bi+S;
}else{bh=C+bg.join(d)+S;
}this.__fA=bi;
return bh;
}},dateToJSON:function(bk){var bl=function(n){return n<10?U+n:n;
};
var bm=function(n){var bn=bl(n);
return n<100?U+bn:bn;
};
return isFinite(bk.valueOf())?bk.getUTCFullYear()+T+bl(bk.getUTCMonth()+1)+T+bl(bk.getUTCDate())+M+bl(bk.getUTCHours())+m+bl(bk.getUTCMinutes())+m+bl(bk.getUTCSeconds())+F+bm(bk.getUTCMilliseconds())+q:null;
},__fF:function(bo){var bp={'\b':I,'\t':u,'\n':r,'\f':y,'\r':L,'"':G,'\\':x};
var bq=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bq.lastIndex=0;

if(bq.test(bo)){return o+bo.replace(bq,function(a){var c=bp[a];
return typeof c===W?c:ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
})+o;
}else{return o+bo+o;
}},parse:function(br,bs){var bt=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
bt.lastIndex=0;
if(bt.test(br)){br=br.replace(bt,function(a){return ba+(X+a.charCodeAt(0).toString(16)).slice(-4);
});
}if(/^[\],:{}\s]*$/.test(br.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,H).replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,l).replace(/(?:^|:|,)(?:\s*\[)+/g,p))){var j=eval(K+br+D);
return typeof bs===e?this.__fG({'':j},p,bs):j;
}throw new SyntaxError(P);
},__fG:function(bu,bv,bw){var bx=bu[bv];

if(bx&&typeof bx===f){for(var k in bx){if(Object.hasOwnProperty.call(bx,k)){var v=this.__fG(bx,k,bw);

if(v!==undefined){bx[k]=v;
}else{delete bx[k];
}}}}return bw.call(bu,bv,bx);
}}});
})();
(function(){var a="qx.lang.Json";
qx.Class.define(a,{statics:{JSON:(qx.lang.Type.getClass(window.JSON)=="JSON"&&JSON.parse('{"x":1}').x===1&&JSON.stringify({"prop":"val"},function(k,v){return k==="prop"?"repl":v;
}).indexOf("repl")>0)?window.JSON:new qx.lang.JsonImpl(),stringify:null,parse:null},defer:function(b){b.stringify=b.JSON.stringify;
b.parse=b.JSON.parse;
}});
})();
(function(){var a="qx.core.ValidationError";
qx.Class.define(a,{extend:qx.type.BaseError});
})();
(function(){var a="qx.lang.RingBuffer";
qx.Class.define(a,{extend:Object,construct:function(b){this.setMaxEntries(b||50);
},members:{__eD:0,__eE:0,__eF:false,__eG:0,__eH:null,__eI:null,setMaxEntries:function(c){this.__eI=c;
this.clear();
},getMaxEntries:function(){return this.__eI;
},addEntry:function(d){this.__eH[this.__eD]=d;
this.__eD=this.__eJ(this.__eD,1);
var e=this.getMaxEntries();

if(this.__eE<e){this.__eE++;
}if(this.__eF&&(this.__eG<e)){this.__eG++;
}},mark:function(){this.__eF=true;
this.__eG=0;
},clearMark:function(){this.__eF=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(f,g){if(f>this.__eE){f=this.__eE;
}if(g&&this.__eF&&(f>this.__eG)){f=this.__eG;
}
if(f>0){var i=this.__eJ(this.__eD,-1);
var h=this.__eJ(i,-f+1);
var j;

if(h<=i){j=this.__eH.slice(h,i+1);
}else{j=this.__eH.slice(h,this.__eE).concat(this.__eH.slice(0,i+1));
}}else{j=[];
}return j;
},clear:function(){this.__eH=new Array(this.getMaxEntries());
this.__eE=0;
this.__eG=0;
this.__eD=0;
},__eJ:function(k,l){var m=this.getMaxEntries();
var n=(k+l)%m;
if(n<0){n+=m;
}return n;
}}});
})();
(function(){var a="qx.log.appender.RingBuffer";
qx.Class.define(a,{extend:qx.lang.RingBuffer,construct:function(b){this.setMaxMessages(b||50);
},members:{setMaxMessages:function(c){this.setMaxEntries(c);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(d){this.addEntry(d);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(e,f){return this.getEntries(e,f);
},clearHistory:function(){this.clear();
}}});
})();
(function(){var k="node",j="error",h="...(+",g="array",f=")",e="info",d="instance",c="string",b="null",a="class",H="number",G="stringify",F="]",E="date",D="unknown",C="function",B="boolean",A="debug",z="map",y="undefined",s="qx.log.Logger",t="[",q="#",r="warn",o="document",p="{...(",m="text[",n="[...(",u="\n",v=")}",x=")]",w="object";
qx.Class.define(s,{statics:{__jJ:A,setLevel:function(I){this.__jJ=I;
},getLevel:function(){return this.__jJ;
},setTreshold:function(J){this.__jL.setMaxMessages(J);
},getTreshold:function(){return this.__jL.getMaxMessages();
},__jK:{},__df:0,register:function(K){if(K.$$id){return;
}var M=this.__df++;
this.__jK[M]=K;
K.$$id=M;
var L=this.__jM;
var N=this.__jL.getAllLogEvents();

for(var i=0,l=N.length;i<l;i++){if(L[N[i].level]>=L[this.__jJ]){K.process(N[i]);
}}},unregister:function(O){var P=O.$$id;

if(P==null){return;
}delete this.__jK[P];
delete O.$$id;
},debug:function(Q,R){qx.log.Logger.__jN(A,arguments);
},info:function(S,T){qx.log.Logger.__jN(e,arguments);
},warn:function(U,V){qx.log.Logger.__jN(r,arguments);
},error:function(W,X){qx.log.Logger.__jN(j,arguments);
},trace:function(Y){qx.log.Logger.__jN(e,[Y,qx.dev.StackTrace.getStackTrace().join(u)]);
},deprecatedMethodWarning:function(ba,bb){var bc;
},deprecatedClassWarning:function(bd,be){var bf;
},deprecatedEventWarning:function(bg,event,bh){var bi;
},deprecatedMixinWarning:function(bj,bk){var bl;
},deprecatedConstantWarning:function(bm,bn,bo){var self,bp;
},deprecateMethodOverriding:function(bq,br,bs,bt){var bu;
},clear:function(){this.__jL.clearHistory();
},__jL:new qx.log.appender.RingBuffer(50),__jM:{debug:0,info:1,warn:2,error:3},__jN:function(bv,bw){var bB=this.__jM;

if(bB[bv]<bB[this.__jJ]){return;
}var by=bw.length<2?null:bw[0];
var bA=by?1:0;
var bx=[];

for(var i=bA,l=bw.length;i<l;i++){bx.push(this.__jP(bw[i],true));
}var bC=new Date;
var bD={time:bC,offset:bC-qx.Bootstrap.LOADSTART,level:bv,items:bx,win:window};
if(by){if(by.$$hash!==undefined){bD.object=by.$$hash;
}else if(by.$$type){bD.clazz=by;
}}this.__jL.process(bD);
var bE=this.__jK;

for(var bz in bE){bE[bz].process(bD);
}},__jO:function(bF){if(bF===undefined){return y;
}else if(bF===null){return b;
}
if(bF.$$type){return a;
}var bG=typeof bF;

if(bG===C||bG==c||bG===H||bG===B){return bG;
}else if(bG===w){if(bF.nodeType){return k;
}else if(bF.classname){return d;
}else if(bF instanceof Array){return g;
}else if(bF instanceof Error){return j;
}else if(bF instanceof Date){return E;
}else{return z;
}}
if(bF.toString){return G;
}return D;
},__jP:function(bH,bI){var bP=this.__jO(bH);
var bL=D;
var bK=[];

switch(bP){case b:case y:bL=bP;
break;
case c:case H:case B:case E:bL=bH;
break;
case k:if(bH.nodeType===9){bL=o;
}else if(bH.nodeType===3){bL=m+bH.nodeValue+F;
}else if(bH.nodeType===1){bL=bH.nodeName.toLowerCase();

if(bH.id){bL+=q+bH.id;
}}else{bL=k;
}break;
case C:bL=qx.lang.Function.getName(bH)||bP;
break;
case d:bL=bH.basename+t+bH.$$hash+F;
break;
case a:case G:bL=bH.toString();
break;
case j:bK=qx.dev.StackTrace.getStackTraceFromError(bH);
bL=bH.toString();
break;
case g:if(bI){bL=[];

for(var i=0,l=bH.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bL.push(this.__jP(bH[i],false));
}}else{bL=n+bH.length+x;
}break;
case z:if(bI){var bJ;
var bO=[];

for(var bN in bH){bO.push(bN);
}bO.sort();
bL=[];

for(var i=0,l=bO.length;i<l;i++){if(bL.length>20){bL.push(h+(l-i)+f);
break;
}bN=bO[i];
bJ=this.__jP(bH[bN],false);
bJ.key=bN;
bL.push(bJ);
}}else{var bM=0;

for(var bN in bH){bM++;
}bL=p+bM+v;
}break;
}return {type:bP,text:bL,trace:bK};
}},defer:function(bQ){var bR=qx.Bootstrap.$$logs;

for(var i=0;i<bR.length;i++){bQ.__jN(bR[i][0],bR[i][1]);
}qx.Bootstrap.debug=bQ.debug;
qx.Bootstrap.info=bQ.info;
qx.Bootstrap.warn=bQ.warn;
qx.Bootstrap.error=bQ.error;
qx.Bootstrap.trace=bQ.trace;
}});
})();
(function(){var d="qx.dom.Node",c="engine.name",b="";
qx.Class.define(d,{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(e){return e.nodeType===this.DOCUMENT?e:e.ownerDocument||e.document;
},getWindow:qx.core.Environment.select(c,{"mshtml":function(f){if(f.nodeType==null){return f;
}if(f.nodeType!==this.DOCUMENT){f=f.ownerDocument;
}return f.parentWindow;
},"default":function(g){if(g.nodeType==null){return g;
}if(g.nodeType!==this.DOCUMENT){g=g.ownerDocument;
}return g.defaultView;
}}),getDocumentElement:function(h){return this.getDocument(h).documentElement;
},getBodyElement:function(j){return this.getDocument(j).body;
},isNode:function(k){return !!(k&&k.nodeType!=null);
},isElement:function(l){return !!(l&&l.nodeType===this.ELEMENT);
},isDocument:function(m){return !!(m&&m.nodeType===this.DOCUMENT);
},isText:function(n){return !!(n&&n.nodeType===this.TEXT);
},isWindow:function(o){return !!(o&&o.history&&o.location&&o.document);
},isNodeName:function(p,q){if(!q||!p||!p.nodeName){return false;
}return q.toLowerCase()==qx.dom.Node.getName(p);
},getName:function(r){if(!r||!r.nodeName){return null;
}return r.nodeName.toLowerCase();
},getText:function(s){if(!s||!s.nodeType){return null;
}
switch(s.nodeType){case 1:var i,a=[],t=s.childNodes,length=t.length;

for(i=0;i<length;i++){a[i]=this.getText(t[i]);
}return a.join(b);
case 2:case 3:case 4:return s.nodeValue;
}return null;
},isBlockNode:function(u){if(!qx.dom.Node.isElement(u)){return false;
}u=qx.dom.Node.getName(u);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(u);
}}});
})();
(function(){var l="on",k="engine.name",j="gecko",i="engine.version",h="function",g="undefined",f="mousedown",d="qx.bom.Event",c="return;",b="mouseover",a="HTMLEvents";
qx.Class.define(d,{statics:{addNativeListener:function(m,n,o,p){if(m.addEventListener){m.addEventListener(n,o,!!p);
}else if(m.attachEvent){m.attachEvent(l+n,o);
}else if(typeof m[l+n]!=g){m[l+n]=o;
}else{}},removeNativeListener:function(q,r,s,t){if(q.removeEventListener){q.removeEventListener(r,s,!!t);
}else if(q.detachEvent){try{q.detachEvent(l+r,s);
}catch(e){if(e.number!==-2146828218){throw e;
}}}else if(typeof q[l+r]!=g){q[l+r]=null;
}else{}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get(k)==j)){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type===b){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))>=1.9&&e.type==f&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get(k)==j)&&parseFloat(qx.core.Environment.get(i))<1.9){try{e.keyCode=0;
}catch(u){}}}else{try{e.keyCode=0;
}catch(v){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(w,x){if(document.createEvent){var y=document.createEvent(a);
y.initEvent(x,true,true);
return !w.dispatchEvent(y);
}else{var y=document.createEventObject();
return w.fireEvent(l+x,y);
}},supportsEvent:qx.core.Environment.select(k,{"webkit":function(z,A){return z.hasOwnProperty(l+A);
},"default":function(B,C){var D=l+C;
var E=(D in B);

if(!E){E=typeof B[D]==h;

if(!E&&B.setAttribute){B.setAttribute(D,c);
E=typeof B[D]==h;
B.removeAttribute(D);
}}return E;
}})}});
})();
(function(){var r="|bubble",q="|capture",p="|",o="",n="_",m="unload",k="UNKNOWN_",j="__jI",h="c",g="DOM_",c="WIN_",f="__jH",e="QX_",b="qx.event.Manager",a="capture",d="DOCUMENT_";
qx.Class.define(b,{extend:Object,construct:function(s,t){this.__cp=s;
this.__jQ=qx.core.ObjectRegistry.toHashCode(s);
this.__cW=t;
if(s.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(s,m,qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(s,m,arguments.callee);
self.dispose();
}));
}this.__jR={};
this.__jH={};
this.__jI={};
this.__jS={};
},statics:{__jT:0,getNextUniqueId:function(){return (this.__jT++)+o;
}},members:{__cW:null,__jR:null,__jI:null,__jU:null,__jH:null,__jS:null,__cp:null,__jQ:null,getWindow:function(){return this.__cp;
},getWindowId:function(){return this.__jQ;
},getHandler:function(u){var v=this.__jH[u.classname];

if(v){return v;
}return this.__jH[u.classname]=new u(this);
},getDispatcher:function(w){var x=this.__jI[w.classname];

if(x){return x;
}return this.__jI[w.classname]=new w(this,this.__cW);
},getListeners:function(y,z,A){var B=y.$$hash||qx.core.ObjectRegistry.toHashCode(y);
var D=this.__jR[B];

if(!D){return null;
}var E=z+(A?q:r);
var C=D[E];
return C?C.concat():null;
},getAllListeners:function(){return this.__jR;
},serializeListeners:function(F){var M=F.$$hash||qx.core.ObjectRegistry.toHashCode(F);
var O=this.__jR[M];
var K=[];

if(O){var I,N,G,J,L;

for(var H in O){I=H.indexOf(p);
N=H.substring(0,I);
G=H.charAt(I+1)==h;
J=O[H];

for(var i=0,l=J.length;i<l;i++){L=J[i];
K.push({self:L.context,handler:L.handler,type:N,capture:G});
}}}return K;
},toggleAttachedEvents:function(P,Q){var V=P.$$hash||qx.core.ObjectRegistry.toHashCode(P);
var X=this.__jR[V];

if(X){var S,W,R,T;

for(var U in X){S=U.indexOf(p);
W=U.substring(0,S);
R=U.charCodeAt(S+1)===99;
T=X[U];

if(Q){this.__jV(P,W,R);
}else{this.__jW(P,W,R);
}}}},hasListener:function(Y,ba,bb){var bc=Y.$$hash||qx.core.ObjectRegistry.toHashCode(Y);
var be=this.__jR[bc];

if(!be){return false;
}var bf=ba+(bb?q:r);
var bd=be[bf];
return !!(bd&&bd.length>0);
},importListeners:function(bg,bh){var bn=bg.$$hash||qx.core.ObjectRegistry.toHashCode(bg);
var bo=this.__jR[bn]={};
var bk=qx.event.Manager;

for(var bi in bh){var bl=bh[bi];
var bm=bl.type+(bl.capture?q:r);
var bj=bo[bm];

if(!bj){bj=bo[bm]=[];
this.__jV(bg,bl.type,bl.capture);
}bj.push({handler:bl.listener,context:bl.self,unique:bl.unique||(bk.__jT++)+o});
}},addListener:function(bp,bq,br,self,bs){var bw;
var bx=bp.$$hash||qx.core.ObjectRegistry.toHashCode(bp);
var bz=this.__jR[bx];

if(!bz){bz=this.__jR[bx]={};
}var bv=bq+(bs?q:r);
var bu=bz[bv];

if(!bu){bu=bz[bv]=[];
}if(bu.length===0){this.__jV(bp,bq,bs);
}var by=(qx.event.Manager.__jT++)+o;
var bt={handler:br,context:self,unique:by};
bu.push(bt);
return bv+p+by;
},findHandler:function(bA,bB){var bN=false,bF=false,bO=false,bC=false;
var bL;

if(bA.nodeType===1){bN=true;
bL=g+bA.tagName.toLowerCase()+n+bB;
}else if(bA.nodeType===9){bC=true;
bL=d+bB;
}else if(bA==this.__cp){bF=true;
bL=c+bB;
}else if(bA.classname){bO=true;
bL=e+bA.classname+n+bB;
}else{bL=k+bA+n+bB;
}var bH=this.__jS;

if(bH[bL]){return bH[bL];
}var bK=this.__cW.getHandlers();
var bG=qx.event.IEventHandler;
var bI,bJ,bE,bD;

for(var i=0,l=bK.length;i<l;i++){bI=bK[i];
bE=bI.SUPPORTED_TYPES;

if(bE&&!bE[bB]){continue;
}bD=bI.TARGET_CHECK;

if(bD){var bM=false;

if(bN&&((bD&bG.TARGET_DOMNODE)!=0)){bM=true;
}else if(bF&&((bD&bG.TARGET_WINDOW)!=0)){bM=true;
}else if(bO&&((bD&bG.TARGET_OBJECT)!=0)){bM=true;
}else if(bC&&((bD&bG.TARGET_DOCUMENT)!=0)){bM=true;
}
if(!bM){continue;
}}bJ=this.getHandler(bK[i]);

if(bI.IGNORE_CAN_HANDLE||bJ.canHandleEvent(bA,bB)){bH[bL]=bJ;
return bJ;
}}return null;
},__jV:function(bP,bQ,bR){var bS=this.findHandler(bP,bQ);

if(bS){bS.registerEvent(bP,bQ,bR);
return;
}},removeListener:function(bT,bU,bV,self,bW){var cb;
var cc=bT.$$hash||qx.core.ObjectRegistry.toHashCode(bT);
var cd=this.__jR[cc];

if(!cd){return false;
}var bX=bU+(bW?q:r);
var bY=cd[bX];

if(!bY){return false;
}var ca;

for(var i=0,l=bY.length;i<l;i++){ca=bY[i];

if(ca.handler===bV&&ca.context===self){qx.lang.Array.removeAt(bY,i);

if(bY.length==0){this.__jW(bT,bU,bW);
}return true;
}}return false;
},removeListenerById:function(ce,cf){var cl;
var cj=cf.split(p);
var co=cj[0];
var cg=cj[1].charCodeAt(0)==99;
var cn=cj[2];
var cm=ce.$$hash||qx.core.ObjectRegistry.toHashCode(ce);
var cp=this.__jR[cm];

if(!cp){return false;
}var ck=co+(cg?q:r);
var ci=cp[ck];

if(!ci){return false;
}var ch;

for(var i=0,l=ci.length;i<l;i++){ch=ci[i];

if(ch.unique===cn){qx.lang.Array.removeAt(ci,i);

if(ci.length==0){this.__jW(ce,co,cg);
}return true;
}}return false;
},removeAllListeners:function(cq){var cu=cq.$$hash||qx.core.ObjectRegistry.toHashCode(cq);
var cw=this.__jR[cu];

if(!cw){return false;
}var cs,cv,cr;

for(var ct in cw){if(cw[ct].length>0){cs=ct.split(p);
cv=cs[0];
cr=cs[1]===a;
this.__jW(cq,cv,cr);
}}delete this.__jR[cu];
return true;
},deleteAllListeners:function(cx){delete this.__jR[cx];
},__jW:function(cy,cz,cA){var cB=this.findHandler(cy,cz);

if(cB){cB.unregisterEvent(cy,cz,cA);
return;
}},dispatchEvent:function(cC,event){var cH;
var cI=event.getType();

if(!event.getBubbles()&&!this.hasListener(cC,cI)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(cC);
}var cG=this.__cW.getDispatchers();
var cF;
var cE=false;

for(var i=0,l=cG.length;i<l;i++){cF=this.getDispatcher(cG[i]);
if(cF.canDispatchEvent(cC,event,cI)){cF.dispatchEvent(cC,event,cI);
cE=true;
break;
}}
if(!cE){return true;
}var cD=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !cD;
},dispose:function(){this.__cW.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,f);
qx.util.DisposeUtil.disposeMap(this,j);
this.__jR=this.__cp=this.__jU=null;
this.__cW=this.__jS=null;
}}});
})();
(function(){var a="qx.event.IEventHandler";
qx.Interface.define(a,{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}}});
})();
(function(){var c="qx.event.Registration";
qx.Class.define(c,{statics:{__jG:{},getManager:function(d){if(d==null){d=window;
}else if(d.nodeType){d=qx.dom.Node.getWindow(d);
}else if(!qx.dom.Node.isWindow(d)){d=window;
}var f=d.$$hash||qx.core.ObjectRegistry.toHashCode(d);
var e=this.__jG[f];

if(!e){e=new qx.event.Manager(d,this);
this.__jG[f]=e;
}return e;
},removeManager:function(g){var h=g.getWindowId();
delete this.__jG[h];
},addListener:function(i,j,k,self,l){return this.getManager(i).addListener(i,j,k,self,l);
},removeListener:function(m,n,o,self,p){return this.getManager(m).removeListener(m,n,o,self,p);
},removeListenerById:function(q,r){return this.getManager(q).removeListenerById(q,r);
},removeAllListeners:function(s){return this.getManager(s).removeAllListeners(s);
},deleteAllListeners:function(t){var u=t.$$hash;

if(u){this.getManager(t).deleteAllListeners(u);
}},hasListener:function(v,w,x){return this.getManager(v).hasListener(v,w,x);
},serializeListeners:function(y){return this.getManager(y).serializeListeners(y);
},createEvent:function(z,A,B){if(A==null){A=qx.event.type.Event;
}var C=qx.event.Pool.getInstance().getObject(A);
B?C.init.apply(C,B):C.init();
if(z){C.setType(z);
}return C;
},dispatchEvent:function(D,event){return this.getManager(D).dispatchEvent(D,event);
},fireEvent:function(E,F,G,H){var I;
var J=this.createEvent(F,G||null,H);
return this.getManager(E).dispatchEvent(E,J);
},fireNonBubblingEvent:function(K,L,M,N){var O=this.getManager(K);

if(!O.hasListener(K,L,false)){return true;
}var P=this.createEvent(L,M||null,N);
return O.dispatchEvent(K,P);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__jH:[],addHandler:function(Q){this.__jH.push(Q);
this.__jH.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__jH;
},__jI:[],addDispatcher:function(R,S){this.__jI.push(R);
this.__jI.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__jI;
}}});
})();
(function(){var q="set",p="get",o="reset",n="MSIE 6.0",m="info",k="qx.core.Object",j="error",h="warn",g="]",f="debug",b="[",d="$$user_",c="rv:1.8.1",a="Object";
qx.Class.define(k,{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:a},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+b+this.$$hash+g;
},base:function(r,s){if(arguments.length===1){return r.callee.base.call(this);
}else{return r.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(t){return t.callee.self;
},clone:function(){var v=this.constructor;
var u=new v;
var x=qx.Class.getProperties(v);
var w=qx.core.Property.$$store.user;
var y=qx.core.Property.$$method.set;
var name;
for(var i=0,l=x.length;i<l;i++){name=x[i];

if(this.hasOwnProperty(w[name])){u[y[name]](this[w[name]]);
}}return u;
},set:function(z,A){var C=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(z)){if(!this[C[z]]){if(this[q+qx.Bootstrap.firstUp(z)]!=undefined){this[q+qx.Bootstrap.firstUp(z)](A);
return this;
}}return this[C[z]](A);
}else{for(var B in z){if(!this[C[B]]){if(this[q+qx.Bootstrap.firstUp(B)]!=undefined){this[q+qx.Bootstrap.firstUp(B)](z[B]);
continue;
}}this[C[B]](z[B]);
}return this;
}},get:function(D){var E=qx.core.Property.$$method.get;

if(!this[E[D]]){if(this[p+qx.Bootstrap.firstUp(D)]!=undefined){return this[p+qx.Bootstrap.firstUp(D)]();
}}return this[E[D]]();
},reset:function(F){var G=qx.core.Property.$$method.reset;

if(!this[G[F]]){if(this[o+qx.Bootstrap.firstUp(F)]!=undefined){this[o+qx.Bootstrap.firstUp(F)]();
return;
}}this[G[F]]();
},__dq:qx.event.Registration,addListener:function(H,I,self,J){if(!this.$$disposed){return this.__dq.addListener(this,H,I,self,J);
}return null;
},addListenerOnce:function(K,L,self,M){var N=function(e){this.removeListener(K,N,this,M);
L.call(self||this,e);
};
return this.addListener(K,N,this,M);
},removeListener:function(O,P,self,Q){if(!this.$$disposed){return this.__dq.removeListener(this,O,P,self,Q);
}return false;
},removeListenerById:function(R){if(!this.$$disposed){return this.__dq.removeListenerById(this,R);
}return false;
},hasListener:function(S,T){return this.__dq.hasListener(this,S,T);
},dispatchEvent:function(U){if(!this.$$disposed){return this.__dq.dispatchEvent(this,U);
}return true;
},fireEvent:function(V,W,X){if(!this.$$disposed){return this.__dq.fireEvent(this,V,W,X);
}return true;
},fireNonBubblingEvent:function(Y,ba,bb){if(!this.$$disposed){return this.__dq.fireNonBubblingEvent(this,Y,ba,bb);
}return true;
},fireDataEvent:function(bc,bd,be,bf){if(!this.$$disposed){if(be===undefined){be=null;
}return this.__dq.fireNonBubblingEvent(this,bc,qx.event.type.Data,[bd,be,!!bf]);
}return true;
},__dr:null,setUserData:function(bg,bh){if(!this.__dr){this.__dr={};
}this.__dr[bg]=bh;
},getUserData:function(bi){if(!this.__dr){return null;
}var bj=this.__dr[bi];
return bj===undefined?null:bj;
},__ds:qx.log.Logger,debug:function(bk){this.__dt(f,arguments);
},info:function(bl){this.__dt(m,arguments);
},warn:function(bm){this.__dt(h,arguments);
},error:function(bn){this.__dt(j,arguments);
},trace:function(){this.__ds.trace(this);
},__dt:function(bo,bp){var bq=qx.lang.Array.fromArguments(bp);
bq.unshift(this);
this.__ds[bo].apply(this.__ds,bq);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var bv,bt,bs,bw;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var bu=this.constructor;
var br;

while(bu.superclass){if(bu.$$destructor){bu.$$destructor.call(this);
}if(bu.$$includes){br=bu.$$flatIncludes;

for(var i=0,l=br.length;i<l;i++){if(br[i].$$destructor){br[i].$$destructor.call(this);
}}}bu=bu.superclass;
}if(this.__du){this.__du();
}},__du:null,__dv:function(){var bx=qx.Class.getProperties(this.constructor);

for(var i=0,l=bx.length;i<l;i++){delete this[d+bx[i]];
}},_disposeObjects:function(by){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(bz){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(bA){qx.util.DisposeUtil.disposeArray(this,bA);
},_disposeMap:function(bB){qx.util.DisposeUtil.disposeMap(this,bB);
}},environment:{"qx.disposerDebugLevel":0},defer:function(bC,bD){var bF=navigator.userAgent.indexOf(n)!=-1;
var bE=navigator.userAgent.indexOf(c)!=-1;
if(bF||bE){bD.__du=bD.__dv;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__dr=null;
var bI=this.constructor;
var bM;
var bN=qx.core.Property.$$store;
var bK=bN.user;
var bL=bN.theme;
var bG=bN.inherit;
var bJ=bN.useinit;
var bH=bN.init;

while(bI){bM=bI.$$properties;

if(bM){for(var name in bM){if(bM[name].dereference){this[bK[name]]=this[bL[name]]=this[bG[name]]=this[bJ[name]]=this[bH[name]]=undefined;
}}}bI=bI.superclass;
}}});
})();
(function(){var a="qx.event.IEventDispatcher";
qx.Interface.define(a,{members:{canDispatchEvent:function(b,event,c){this.assertInstance(event,qx.event.type.Event);
this.assertString(c);
},dispatchEvent:function(d,event,e){this.assertInstance(event,qx.event.type.Event);
this.assertString(e);
}}});
})();
(function(){var a="qx.event.type.Event";
qx.Class.define(a,{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(b,c){this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!b;
this._cancelable=!!c;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(d){if(d){var e=d;
}else{var e=qx.event.Pool.getInstance().getObject(this.constructor);
}e._type=this._type;
e._target=this._target;
e._currentTarget=this._currentTarget;
e._relatedTarget=this._relatedTarget;
e._originalTarget=this._originalTarget;
e._stopPropagation=this._stopPropagation;
e._bubbles=this._bubbles;
e._preventDefault=this._preventDefault;
e._cancelable=this._cancelable;
return e;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(f){this._type=f;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(g){this._eventPhase=g;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(h){this._target=h;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(i){this._currentTarget=i;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(j){this._relatedTarget=j;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(k){this._originalTarget=k;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(l){this._bubbles=l;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(m){this._cancelable=m;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
})();
(function(){var b="qx.util.ObjectPool",a="Integer";
qx.Class.define(b,{extend:qx.core.Object,construct:function(c){qx.core.Object.call(this);
this.__bL={};

if(c!=null){this.setSize(c);
}},properties:{size:{check:a,init:Infinity}},members:{__bL:null,getObject:function(d){if(this.$$disposed){return new d;
}
if(!d){throw new Error("Class needs to be defined!");
}var e=null;
var f=this.__bL[d.classname];

if(f){e=f.pop();
}
if(e){e.$$pooled=false;
}else{e=new d;
}return e;
},poolObject:function(g){if(!this.__bL){return;
}var h=g.classname;
var j=this.__bL[h];

if(g.$$pooled){throw new Error("Object is already pooled: "+g);
}
if(!j){this.__bL[h]=j=[];
}if(j.length>this.getSize()){if(g.destroy){g.destroy();
}else{g.dispose();
}return;
}g.$$pooled=true;
j.push(g);
}},destruct:function(){var n=this.__bL;
var k,m,i,l;

for(k in n){m=n[k];

for(i=0,l=m.length;i<l;i++){m[i].dispose();
}}delete this.__bL;
}});
})();
(function(){var b="singleton",a="qx.event.Pool";
qx.Class.define(a,{extend:qx.util.ObjectPool,type:b,construct:function(){qx.util.ObjectPool.call(this,30);
}});
})();
(function(){var a="qx.event.dispatch.Direct";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(b){this._manager=b;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(c,event,d){return !event.getBubbles();
},dispatchEvent:function(e,event,f){var j,g;
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var k=this._manager.getListeners(e,f,false);

if(k){for(var i=0,l=k.length;i<l;i++){var h=k[i].context||e;
k[i].handler.call(h,event);
}}}},defer:function(m){qx.event.Registration.addDispatcher(m);
}});
})();
(function(){var a="qx.event.handler.Object";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(b,c){return qx.Class.supportsEvent(b.constructor,c);
},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var a="qx.event.type.Data";
qx.Class.define(a,{extend:qx.event.type.Event,members:{__dc:null,__id:null,init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,false,d);
this.__dc=b;
this.__id=c;
return this;
},clone:function(e){var f=qx.event.type.Event.prototype.clone.call(this,e);
f.__dc=this.__dc;
f.__id=this.__id;
return f;
},getData:function(){return this.__dc;
},getOldData:function(){return this.__id;
}},destruct:function(){this.__dc=this.__id=null;
}});
})();
(function(){var a="qx.util.DisposeUtil";
qx.Class.define(a,{statics:{disposeObjects:function(b,c,d){var name;

for(var i=0,l=c.length;i<l;i++){name=c[i];

if(b[name]==null||!b.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(b[name].dispose){if(!d&&b[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{b[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}b[name]=null;
}},disposeArray:function(e,f){var h=e[f];

if(!h){return;
}if(qx.core.ObjectRegistry.inShutDown){e[f]=null;
return;
}try{var g;

for(var i=h.length-1;i>=0;i--){g=h[i];

if(g){g.dispose();
}}}catch(j){throw new Error("The array field: "+f+" of object: "+e+" has non disposable entries: "+j);
}h.length=0;
e[f]=null;
},disposeMap:function(k,m){var o=k[m];

if(!o){return;
}if(qx.core.ObjectRegistry.inShutDown){k[m]=null;
return;
}try{var n;

for(var p in o){n=o[p];

if(o.hasOwnProperty(p)&&n){n.dispose();
}}}catch(q){throw new Error("The map field: "+m+" of object: "+k+" has non disposable entries: "+q);
}k[m]=null;
},disposeTriggeredBy:function(r,s){var t=s.dispose;
s.dispose=function(){t.call(s);
r.dispose();
};
}}});
})();
(function(){var a="qx.application.IApplication";
qx.Interface.define(a,{members:{main:function(){},finalize:function(){},close:function(){},terminate:function(){}}});
})();
(function(){var a="qx.locale.MTranslation";
qx.Mixin.define(a,{members:{tr:function(b,c){var d=qx.locale.Manager;

if(d){return d.tr.apply(d,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trn:function(e,f,g,h){var i=qx.locale.Manager;

if(i){return i.trn.apply(i,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},trc:function(j,k,l){var m=qx.locale.Manager;

if(m){return m.trc.apply(m,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
},marktr:function(n){var o=qx.locale.Manager;

if(o){return o.marktr.apply(o,arguments);
}throw new Error("To enable localization please include qx.locale.Manager into your build!");
}}});
})();
(function(){var b="qx.application.Mobile",a="qx.mobile.nativescroll";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.application.IApplication],include:qx.locale.MTranslation,construct:function(){qx.core.Object.call(this);
},members:{__cq:null,main:function(){this.__cq=this._createRootWidget();

if(qx.core.Environment.get(a)==false){this.__cq.setShowScrollbarY(false);
}},getRoot:function(){return this.__cq;
},_createRootWidget:function(){return new qx.ui.mobile.core.Root();
},finalize:function(){},close:function(){},terminate:function(){}},destruct:function(){this.__cq=null;
}});
})();
(function(){var a="qx.ui.mobile.core.MChildrenHandling";
qx.Mixin.define(a,{members:{getChildren:function(){return this._getChildren();
},hasChildren:function(){return this._hasChildren();
},indexOf:function(b){return this._indexOf(b);
},add:function(c,d){this._add(c,d);
},addBefore:function(e,f,g){this._addBefore(e,f,g);
},addAfter:function(h,i,j){this._addAfter(h,i,j);
},remove:function(k){this._remove(k);
},removeAt:function(l){return this._removeAt(l);
},removeAll:function(){this._removeAll();
}},statics:{remap:function(m){m.getChildren=m._getChildren;
m.hasChildren=m._hasChildren;
m.indexOf=m._indexOf;
m.add=m._add;
m.addBefore=m._addBefore;
m.addAfter=m._addAfter;
m.remove=m._remove;
m.removeAt=m._removeAt;
m.removeAll=m._removeAll;
}}});
})();
(function(){var n="engine.name",m="ready",l="mshtml",k="load",j="unload",i="qx.event.handler.Application",h="complete",g="webkit",f="gecko",d="opera",a="left",c="DOMContentLoaded",b="shutdown";
qx.Class.define(i,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(o){qx.core.Object.call(this);
this._window=o.getWindow();
this.__cR=false;
this.__cS=false;
this.__cT=false;
this.__cU=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var p=qx.event.handler.Application.$$instance;

if(p){p.__cV();
}}},members:{canHandleEvent:function(q,r){},registerEvent:function(s,t,u){},unregisterEvent:function(v,w,x){},__cT:null,__cR:null,__cS:null,__cU:null,__cV:function(){if(!this.__cT&&this.__cR&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get(n)==l)){if(qx.event.Registration.hasListener(this._window,m)){this.__cT=true;
qx.event.Registration.fireEvent(this._window,m);
}}else{this.__cT=true;
qx.event.Registration.fireEvent(this._window,m);
}}},isApplicationReady:function(){return this.__cT;
},_initObserver:function(){if(qx.$$domReady||document.readyState==h||document.readyState==m){this.__cR=true;
this.__cV();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Environment.get(n)==f||qx.core.Environment.get(n)==d||qx.core.Environment.get(n)==g){qx.bom.Event.addNativeListener(this._window,c,this._onNativeLoadWrapped);
}else if((qx.core.Environment.get(n)==l)){var self=this;
var y=function(){try{document.documentElement.doScroll(a);

if(document.body){self._onNativeLoadWrapped();
}}catch(z){window.setTimeout(y,100);
}};
y();
}qx.bom.Event.addNativeListener(this._window,k,this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,j,this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,k,this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,j,this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__cR=true;
this.__cV();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__cU){this.__cU=true;

try{qx.event.Registration.fireEvent(this._window,b);
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(A){qx.event.Registration.addHandler(A);
}});
})();
(function(){var c="ready",b="qx.bom.Lifecycle",a="shutdown";
qx.Class.define(b,{statics:{onReady:function(d,e){var g=qx.event.Registration;
var f=g.getManager(window).getHandler(qx.event.handler.Application);
if(f&&f.isApplicationReady()){d.call(e);
}else{g.addListener(window,c,d,e);
}},onShutdown:function(h,i){qx.event.Registration.addListener(window,a,h,i);
}}});
})();
(function(){var k="qx.event.type.Mouse",j="visible",h="qx.event.type.Focus",g="qx.event.type.Touch",f="excluded",e="hidden",d="qx.event.type.KeySequence",c="String",b="qx.event.type.Event",a="_applyAttribute",D="Boolean",C="visibility",B="display",A="div",z="changeId",y="qx.event.type.KeyInput",x="_transformId",w="qx.event.type.MouseWheel",v="_applyDefaultCssClass",u="_applyId",s="",t="changeVisibility",q="undefined",r="block",o="none",p="qx.ui.mobile.core.Widget",m="_applyStyle",n="_applyVisibility";
qx.Class.define(p,{extend:qx.core.Object,include:[qx.locale.MTranslation],construct:function(){qx.core.Object.call(this);
this._setContainerElement(this._createContainerElement());
this.__iU=[];
this.setId(this.getId());
this.initDefaultCssClass();
this.initName();
this.initAnonymous();
this.initActivatable();
},events:{mousemove:k,mouseover:k,mouseout:k,mousedown:k,mouseup:k,click:k,dblclick:k,contextmenu:k,beforeContextmenuOpen:k,mousewheel:w,touchstart:g,touchend:g,touchmove:g,touchcancel:g,tap:g,swipe:g,keyup:d,keydown:d,keypress:d,keyinput:y,domupdated:b,appear:b,disappear:b,focus:h,blur:h,focusin:h,focusout:h,activate:h,deactivate:h},properties:{defaultCssClass:{check:c,init:null,nullable:true,apply:v},name:{check:c,init:null,nullable:true,apply:a},anonymous:{check:D,init:null,nullable:true,apply:m},id:{check:c,init:null,nullable:true,apply:u,transform:x,event:z},visibility:{check:[j,e,f],init:j,apply:n,event:t},activatable:{check:D,init:false,apply:a}},statics:{ID_PREFIX:"qx_id_",__ho:{},__rE:0,__rF:null,onShutdown:function(){window.clearTimeout(qx.ui.mobile.core.Widget.__rF);
delete qx.ui.mobile.core.Widget.__ho;
},getCurrentId:function(){return qx.ui.mobile.core.Widget.__rE;
},registerWidget:function(E){var F=E.getId();
var G=qx.ui.mobile.core.Widget.__ho;
G[F]=E;
},unregisterWidget:function(H){delete qx.ui.mobile.core.Widget.__ho[H];
},getWidgetById:function(I){return qx.ui.mobile.core.Widget.__ho[I];
},scheduleDomUpdated:function(){if(qx.ui.mobile.core.Widget.__rF==null){qx.ui.mobile.core.Widget.__rF=window.setTimeout(qx.ui.mobile.core.Widget.domUpdated,0);
}},domUpdated:qx.event.GlobalError.observeMethod(function(){var J=qx.ui.mobile.core.Widget;
window.clearTimeout(J.__rF);
J.__rF=null;
qx.event.handler.Appear.refresh();
qx.ui.mobile.core.DomUpdatedHandler.refresh();
}),addAttributeMapping:function(K,L,M){var N;
qx.ui.mobile.core.Widget.ATTRIBUTE_MAPPING[K]={attribute:L,values:M};
},addStyleMapping:function(O,P,Q){var R;
qx.ui.mobile.core.Widget.STYLE_MAPPING[O]={style:P,values:Q};
},ATTRIBUTE_MAPPING:{"selectable":{attribute:"data-selectable",values:{"true":null,"false":"false"}},"activatable":{attribute:"data-activatable",values:{"true":"true","false":null}},"readOnly":{attribute:"readonly"}},STYLE_MAPPING:{"anonymous":{style:"pointer-events",values:{"true":"none","false":null}}}},members:{__jg:null,__jh:null,__rG:null,__iU:null,__jp:null,_getTagName:function(){return A;
},_createContainerElement:function(){return qx.bom.Element.create(this._getTagName());
},_domUpdated:function(){qx.ui.mobile.core.Widget.scheduleDomUpdated();
},_transformId:function(S){if(S==null){var T=qx.ui.mobile.core.Widget;
S=T.ID_PREFIX+T.__rE++;
}return S;
},_applyId:function(U,V){if(V!=null){qx.ui.mobile.core.Widget.unregisterWidget(V);
}var W=this.getContainerElement();
W.id=U;
qx.ui.mobile.core.Widget.registerWidget(this);
},_add:function(X,Y){X.setLayoutParent(this);
X.setLayoutProperties(Y);
this.getContentElement().appendChild(X.getContainerElement());
this.__iU.push(X);
this._domUpdated();
},_addBefore:function(ba,bb,bc){if(ba==bb){return;
}ba.setLayoutParent(this);
ba.setLayoutProperties(bc);
this.getContentElement().insertBefore(ba.getContainerElement(),bb.getContainerElement());
qx.lang.Array.insertBefore(this.__iU,ba,bb);
this._domUpdated();
},_addAfter:function(bd,be,bf){if(bd==be){return;
}bd.setLayoutParent(this);
bd.setLayoutProperties(bf);
var length=this._getChildren().length;
var bg=this._indexOf(be);

if(bg==length-1){this.getContentElement().appendChild(bd.getContainerElement());
}else{var bh=this._getChildren()[bg+1];
this.getContentElement().insertBefore(bd.getContainerElement(),bh.getContainerElement());
}qx.lang.Array.insertAfter(this.__iU,bd,be);
this._domUpdated();
},_remove:function(bi){bi.setLayoutParent(null);
this._domUpdated();
},_removeAt:function(bj){if(!this.__iU){throw new Error("This widget has no children!");
}var bk=this.__iU[bj];
this._remove(bk);
},_removeAll:function(){var bl=this.__iU.concat();

for(var i=0,l=bl.length;i<l;i++){this._remove(bl[i]);
}},_indexOf:function(bm){var bn=this.__iU;

if(!bn){return -1;
}return bn.indexOf(bm);
},setLayoutParent:function(parent){if(this.__rG===parent){return;
}var bo=this.__rG;

if(bo&&!bo.$$disposed){this.__rG.removeChild(this);
}this.__rG=parent||null;
},removeChild:function(bp){qx.lang.Array.remove(this.__iU,bp);
this.getContentElement().removeChild(bp.getContainerElement());
},getLayoutParent:function(){return this.__rG;
},_getChildren:function(){return this.__iU;
},_hasChildren:function(){return this.__iU&&this.__iU.length>0;
},_setLayout:function(bq){if(this.__jp){this.__jp.connectToWidget(null);
}
if(bq){bq.connectToWidget(this);
}this.__jp=bq;
},_getLayout:function(){return this.__jp;
},setLayoutProperties:function(br){if(br==null){return;
}var parent=this.getLayoutParent();

if(parent){parent.updateLayoutProperties(this,br);
}},updateLayoutProperties:function(bs,bt){var bu=this._getLayout();

if(bu){bu.setLayoutProperties(bs,bt);
}},_setHtml:function(bv){this.getContentElement().innerHTML=bv||s;
this._domUpdated();
},_applyAttribute:function(bw,bx,by){this._setAttribute(by,bw);
},_setAttribute:function(bz,bA){var bC=qx.ui.mobile.core.Widget.ATTRIBUTE_MAPPING[bz];

if(bC){bz=bC.attribute||bz;
var bB=bC.values;
bA=bB&&typeof bB[bA]!==q?bB[bA]:bA;
}var bD=this.getContainerElement();

if(bA!=null){qx.bom.element.Attribute.set(bD,bz,bA);
}else{qx.bom.element.Attribute.reset(bD,bz);
}this._domUpdated();
},_getAttribute:function(bE){var bF=this.getContainerElement();
return qx.bom.element.Attribute.get(bF,bE);
},_applyStyle:function(bG,bH,bI){this._setStyle(bI,bG);
},_setStyle:function(bJ,bK){var bL=qx.ui.mobile.core.Widget.STYLE_MAPPING[bJ];

if(bL){bJ=bL.style||bJ;
bK=bL.values[bK];
}var bM=this.getContainerElement();

if(bK!=null){qx.bom.element.Style.set(bM,bJ,bK);
}else{qx.bom.element.Style.reset(bM,bJ);
}this._domUpdated();
},_getStyle:function(bN){var bO=this.getContainerElement();
return qx.bom.element.Style.get(bO,bN);
},_applyDefaultCssClass:function(bP,bQ){if(bQ){this.removeCssClass(bQ);
}
if(bP){this.addCssClass(bP);
}},addCssClass:function(bR){var bS=this.getContainerElement();
qx.bom.element.Class.add(bS,bR);
this._domUpdated();
},removeCssClass:function(bT){var bU=this.getContainerElement();
qx.bom.element.Class.remove(bU,bT);
this._domUpdated();
},_applyVisibility:function(bV,bW){if(bV==f){this._setStyle(B,o);
}else if(bV==j){this._setStyle(B,r);
this._setStyle(C,j);
}else if(bV==e){this._setStyle(C,e);
}},show:function(){this.setVisibility(j);
},hide:function(){this.setVisibility(e);
},exclude:function(){this.setVisibility(f);
},isVisible:function(){return this.getVisibility()===j;
},isHidden:function(){return this.getVisibility()!==j;
},isExcluded:function(){return this.getVisibility()===f;
},isSeeable:function(){return this.getContainerElement().offsetWidth>0;
},_setContainerElement:function(bX){this.__jg=bX;
},getContainerElement:function(){return this.__jg;
},getContentElement:function(){if(!this.__jh){this.__jh=this._getContentElement();
}return this.__jh;
},_getContentElement:function(){return this.getContainerElement();
},destroy:function(){if(this.$$disposed){return;
}var parent=this.__rG;

if(parent){parent._remove(this);
}this.dispose();
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);

if(this.getId()){qx.ui.mobile.core.Widget.unregisterWidget(this.getId());
}}this.__rG=this.__jg=this.__jh=null;
this.__jp=null;
},defer:function(bY){qx.bom.Lifecycle.onShutdown(bY.onShutdown,bY);
}});
})();
(function(){var k="active",j="touchmove",h="qx.ui.mobile.core.EventHandler",g="touchend",f="touchcancel",e="data-selectable",d="true",c="data-activatable",b="touchstart",a="false";
qx.Class.define(h,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){qx.core.Object.call(this);
this.__x=qx.event.Registration.getManager(window);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1,keyup:1,keydown:1,keypress:1,keyinput:1,capture:1,losecapture:1,focusin:1,focusout:1,focus:1,blur:1,activate:1,deactivate:1,appear:1,disappear:1,resize:1,dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1,touchstart:1,touchend:1,touchmove:1,touchcancel:1,tap:1,swipe:1},IGNORE_CAN_HANDLE:false,__rH:null,__rI:null,__rJ:null,__rK:null,__kr:null,__rL:function(m){var n=qx.ui.mobile.core.EventHandler;
n.__rI=qx.bom.Viewport.getScrollLeft();
n.__rJ=qx.bom.Viewport.getScrollTop();
var o=m.getChangedTargetTouches()[0];
n.__rK=o.screenY;
n.__rP();
var p=m.getTarget();

while(p&&p.parentNode&&p.parentNode.nodeType==1&&qx.bom.element.Attribute.get(p,c)!=d){p=p.parentNode;
}n.__rH=p;
n.__rM=window.setTimeout(function(){n.__rM=null;
var q=n.__rH;

if(q&&(qx.bom.element.Attribute.get(q,e)!=a)){qx.bom.element.Class.add(q,k);
}},100);
},__rN:function(r){qx.ui.mobile.core.EventHandler.__rQ();
},__rO:function(s){var t=qx.ui.mobile.core.EventHandler;
var u=s.getChangedTargetTouches()[0];
var v=u.screenY-t.__rK;

if(t.__rH&&Math.abs(v)>=qx.event.handler.Touch.TAP_MAX_DISTANCE){t.__rQ();
}
if(t.__rH&&(t.__rI!=qx.bom.Viewport.getScrollLeft()||t.__rJ!=qx.bom.Viewport.getScrollTop())){t.__rQ();
}},__rP:function(){var w=qx.ui.mobile.core.EventHandler;

if(w.__rM){window.clearTimeout(w.__rM);
w.__rM=null;
}},__rQ:function(){var x=qx.ui.mobile.core.EventHandler;
x.__rP();
var y=x.__rH;

if(y){qx.bom.element.Class.remove(y,k);
}x.__rH=null;
}},members:{__x:null,canHandleEvent:function(z,A){return z instanceof qx.ui.mobile.core.Widget;
},registerEvent:function(B,C,D){var E=B.getContainerElement();
qx.event.Registration.addListener(E,C,this._dispatchEvent,this,D);
},unregisterEvent:function(F,G,H){var I=F.getContainerElement();
qx.event.Registration.removeListener(I,G,this._dispatchEvent,this,H);
},_dispatchEvent:function(J){var O=J.getTarget();

if(!O||O.id==null){return;
}var N=qx.ui.mobile.core.Widget.getWidgetById(O.id);
if(J.getRelatedTarget){var V=J.getRelatedTarget();

if(V&&V.id){var U=qx.ui.mobile.core.Widget.getWidgetById(V.id);
}}var Q=J.getCurrentTarget();
var S=qx.ui.mobile.core.Widget.getWidgetById(Q.id);

if(!S){return;
}var K=J.getEventPhase()==qx.event.type.Event.CAPTURING_PHASE;
var T=J.getType();
var P=this.__x.getListeners(S,T,K);

if(!P||P.length===0){return;
}var L=qx.event.Pool.getInstance().getObject(J.constructor);
J.clone(L);
L.setTarget(N);
L.setRelatedTarget(U||null);
L.setCurrentTarget(S);
var W=J.getOriginalTarget();

if(W&&W.id){var M=qx.ui.mobile.core.Widget.getWidgetById(W.id);
L.setOriginalTarget(M);
}else{L.setOriginalTarget(O);
}for(var i=0,l=P.length;i<l;i++){var R=P[i].context||S;
P[i].handler.call(R,L);
}if(L.getPropagationStopped()){J.stopPropagation();
}
if(L.getDefaultPrevented()){J.preventDefault();
}qx.event.Pool.getInstance().poolObject(L);
}},destruct:function(){this.__x=null;
},defer:function(X){qx.event.Registration.addHandler(X);
qx.event.Registration.addListener(document,b,X.__rL);
qx.event.Registration.addListener(document,g,X.__rN);
qx.event.Registration.addListener(document,f,X.__rN);
qx.event.Registration.addListener(document,j,X.__rO);
}});
})();
(function(){var g="CSS1Compat",f="engine.name",e="position:absolute;width:0;height:0;width:1",d="engine.version",c="qx.bom.Document",b="1px",a="div";
qx.Class.define(c,{statics:{isQuirksMode:qx.core.Environment.select(f,{"mshtml":function(h){if(qx.core.Environment.get(d)>=8){return (h||window).document.documentMode===5;
}else{return (h||window).document.compatMode!==g;
}},"webkit":function(i){if(document.compatMode===undefined){var j=(i||window).document.createElement(a);
j.style.cssText=e;
return j.style.width===b?true:false;
}else{return (i||window).document.compatMode!==g;
}},"default":function(k){return (k||window).document.compatMode!==g;
}}),isStandardMode:function(l){return !this.isQuirksMode(l);
},getWidth:function(m){var n=(m||window).document;
var o=qx.bom.Viewport.getWidth(m);
var scroll=this.isStandardMode(m)?n.documentElement.scrollWidth:n.body.scrollWidth;
return Math.max(scroll,o);
},getHeight:function(p){var q=(p||window).document;
var r=qx.bom.Viewport.getHeight(p);
var scroll=this.isStandardMode(p)?q.documentElement.scrollHeight:q.body.scrollHeight;
return Math.max(scroll,r);
}}});
})();
(function(){var c="engine.version",b="engine.name",a="qx.bom.Viewport";
qx.Class.define(a,{statics:{getWidth:qx.core.Environment.select(b,{"opera":function(d){if(parseFloat(qx.core.Environment.get(c))<9.5){return (d||window).document.body.clientWidth;
}else{var e=(d||window).document;
return qx.bom.Document.isStandardMode(d)?e.documentElement.clientWidth:e.body.clientWidth;
}},"webkit":function(f){if(parseFloat(qx.core.Environment.get(c))<523.15){return (f||window).innerWidth;
}else{var g=(f||window).document;
return qx.bom.Document.isStandardMode(f)?g.documentElement.clientWidth:g.body.clientWidth;
}},"default":function(h){var i=(h||window).document;
return qx.bom.Document.isStandardMode(h)?i.documentElement.clientWidth:i.body.clientWidth;
}}),getHeight:qx.core.Environment.select(b,{"opera":function(j){if(parseFloat(qx.core.Environment.get(c))<9.5){return (j||window).document.body.clientHeight;
}else{var k=(j||window).document;
return qx.bom.Document.isStandardMode(j)?k.documentElement.clientHeight:k.body.clientHeight;
}},"webkit":function(l){if(parseFloat(qx.core.Environment.get(c))<523.15){return (l||window).innerHeight;
}else{var m=(l||window).document;
return qx.bom.Document.isStandardMode(l)?m.documentElement.clientHeight:m.body.clientHeight;
}},"default":function(n){var o=(n||window).document;
return qx.bom.Document.isStandardMode(n)?o.documentElement.clientHeight:o.body.clientHeight;
}}),getScrollLeft:qx.core.Environment.select(b,{"mshtml":function(p){var q=(p||window).document;
return q.documentElement.scrollLeft||q.body.scrollLeft;
},"default":function(r){return (r||window).pageXOffset;
}}),getScrollTop:qx.core.Environment.select(b,{"mshtml":function(s){var t=(s||window).document;
return t.documentElement.scrollTop||t.body.scrollTop;
},"default":function(u){return (u||window).pageYOffset;
}}),__ey:function(){var v=this.getWidth()>this.getHeight()?90:0;
var w=window.orientation;

if(w==null||Math.abs(w%180)==v){return {"-270":90,"-180":180,"-90":-90,"0":0,"90":90,"180":180,"270":-90};
}else{return {"-270":180,"-180":-90,"-90":0,"0":90,"90":180,"180":-90,"270":0};
}},__ez:null,getOrientation:function(x){var y=(x||window).orientation;

if(y==null){y=this.getWidth(x)>this.getHeight(x)?90:0;
}else{y=this.__ez[y];
}return y;
},isLandscape:function(z){return Math.abs(this.getOrientation(z))==90;
},isPortrait:function(A){return Math.abs(this.getOrientation(A))!==90;
}},defer:function(B){B.__ez=B.__ey();
}});
})();
(function(){var j="",i="undefined",h="engine.name",g="readOnly",f="accessKey",e="qx.bom.element.Attribute",d="rowSpan",c="vAlign",b="className",a="textContent",y="'",x="htmlFor",w="longDesc",v="cellSpacing",u="frameBorder",t="='",s="useMap",r="innerText",q="innerHTML",p="tabIndex",n="dateTime",o="maxLength",l="mshtml",m="cellPadding",k="colSpan";
qx.Class.define(e,{statics:{__eA:{names:{"class":b,"for":x,html:q,text:(qx.core.Environment.get(h)==l)?r:a,colspan:k,rowspan:d,valign:c,datetime:n,accesskey:f,tabindex:p,maxlength:o,readonly:g,longdesc:w,cellpadding:m,cellspacing:v,frameborder:u,usemap:s},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:j,className:j,innerHTML:j,innerText:j,textContent:j,htmlFor:j,tabIndex:0,maxLength:qx.core.Environment.select(h,{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(z){var A=[];
var C=this.__eA.runtime;

for(var B in z){if(!C[B]){A.push(B,t,z[B],y);
}}return A.join(j);
},get:qx.core.Environment.select(h,{"mshtml":function(D,name){var F=this.__eA;
var E;
name=F.names[name]||name;
if(F.original[name]){E=D.getAttribute(name,2);
}else if(F.property[name]){E=D[name];

if(typeof F.propertyDefault[name]!==i&&E==F.propertyDefault[name]){if(typeof F.bools[name]===i){return null;
}else{return E;
}}}else{E=D.getAttribute(name);
}if(F.bools[name]){return !!E;
}return E;
},"default":function(G,name){var I=this.__eA;
var H;
name=I.names[name]||name;
if(I.property[name]){H=G[name];

if(typeof I.propertyDefault[name]!==i&&H==I.propertyDefault[name]){if(typeof I.bools[name]===i){return null;
}else{return H;
}}}else{H=G.getAttribute(name);
}if(I.bools[name]){return !!H;
}return H;
}}),set:function(J,name,K){if(typeof K===i){return;
}var L=this.__eA;
name=L.names[name]||name;
if(L.bools[name]){K=!!K;
}if(L.property[name]&&(!(J[name]===undefined)||L.qxProperties[name])){if(K==null){if(L.removeableProperties[name]){J.removeAttribute(name);
return;
}else if(typeof L.propertyDefault[name]!==i){K=L.propertyDefault[name];
}}J[name]=K;
}else{if(K===true){J.setAttribute(name,name);
}else if(K===false||K===null){J.removeAttribute(name);
}else{J.setAttribute(name,K);
}}},reset:function(M,name){this.set(M,name,null);
}}});
})();
(function(){var e="=",d="ecmascript.objectcount",c="+",b="qx.lang.Object",a="&";
qx.Class.define(b,{statics:{empty:function(f){for(var g in f){if(f.hasOwnProperty(g)){delete f[g];
}}},isEmpty:(qx.core.Environment.get(d))?function(h){return h.__count__===0;
}:function(j){for(var k in j){return false;
}return true;
},hasMinLength:(qx.core.Environment.get(d))?function(m,n){return m.__count__>=n;
}:function(o,p){if(p<=0){return true;
}var length=0;

for(var q in o){if((++length)>=p){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(r){var t=[];
var s=this.getKeys(r);

for(var i=0,l=s.length;i<l;i++){t.push(r[s[i]]);
}return t;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(u,v){return qx.lang.Object.mergeWith(u,v,false);
},merge:function(w,x){var y=arguments.length;

for(var i=1;i<y;i++){qx.lang.Object.mergeWith(w,arguments[i]);
}return w;
},clone:function(z){var A={};

for(var B in z){A[B]=z[B];
}return A;
},invert:function(C){var D={};

for(var E in C){D[C[E].toString()]=E;
}return D;
},getKeyFromValue:function(F,G){for(var H in F){if(F.hasOwnProperty(H)&&F[H]===G){return H;
}}return null;
},contains:function(I,J){return this.getKeyFromValue(I,J)!==null;
},select:function(K,L){return L[K];
},fromArray:function(M){var N={};

for(var i=0,l=M.length;i<l;i++){N[M[i].toString()]=true;
}return N;
},toUriParameter:function(O,P){var S,R=[],Q=window.encodeURIComponent;

for(S in O){if(O.hasOwnProperty(S)){if(P){R.push(Q(S).replace(/%20/g,c)+e+Q(O[S]).replace(/%20/g,c));
}else{R.push(Q(S)+e+Q(O[S]));
}}}return R.join(a);
}}});
})();
(function(){var s="html.classlist",r="default",q="native",p="",o=" ",n='',m="(^|\\s)",k="(\\s|$)",j="\\b",h="g",c='function',g="\\b|\\b",f="qx.bom.element.Class",b='SVGAnimatedString',a='object',e="$2",d='undefined';
qx.Class.define(f,{statics:{__rR:/\s+/g,__rS:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(t,name){t.classList.add(name);
return name;
},"default":function(u,name){if(!this.has(u,name)){u.className+=(u.className?o:p)+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(v,w){for(var i=0;i<w.length;i++){v.classList.add(w[i]);
}return v.className;
},"default":function(x,y){var z={};
var B;
var A=x.className;

if(A){B=A.split(this.__rR);

for(var i=0,l=B.length;i<l;i++){z[B[i]]=true;
}
for(var i=0,l=y.length;i<l;i++){if(!z[y[i]]){B.push(y[i]);
}}}else{B=y;
}return x.className=B.join(o);
}}),get:function(C){var D=C.className;

if(typeof D.split!==c){if(typeof D===a){if(qx.Bootstrap.getClass(D)==b){D=D.baseVal;
}else{D=n;
}}
if(typeof D===d){D=n;
}}return D;
},has:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(E,name){return E.classList.contains(name);
},"default":function(F,name){var G=new RegExp(m+name+k);
return G.test(F.className);
}}),remove:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(H,name){H.classList.remove(name);
return name;
},"default":function(I,name){var J=new RegExp(m+name+k);
I.className=I.className.replace(J,e);
return name;
}}),removeClasses:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(K,L){for(var i=0;i<L.length;i++){K.classList.remove(L[i]);
}return K.className;
},"default":function(M,N){var O=new RegExp(j+N.join(g)+j,h);
return M.className=M.className.replace(O,p).replace(this.__rS,p).replace(this.__rR,o);
}}),replace:function(P,Q,R){this.remove(P,Q);
return this.add(P,R);
},toggle:qx.lang.Object.select(qx.core.Environment.get(s)?q:r,{"native":function(S,name,T){if(T===undefined){S.classList.toggle(name);
}else{T?this.add(S,name):this.remove(S,name);
}return name;
},"default":function(U,name,V){if(V==null){V=!this.has(U,name);
}V?this.add(U,name):this.remove(U,name);
return name;
}})}});
})();
(function(){var e="orientationchange",d="resize",c="landscape",b="portrait",a="qx.event.handler.Orientation";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(f){qx.core.Object.call(this);
this.__x=f;
this.__cp=f.getWindow();
this._initObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{orientationchange:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__x:null,__cp:null,__kH:null,__kI:null,__kJ:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){},_initObserver:function(){this.__kJ=qx.lang.Function.listener(this._onNative,this);
this.__kH=qx.bom.Event.supportsEvent(this.__cp,e)?e:d;
var Event=qx.bom.Event;
Event.addNativeListener(this.__cp,this.__kH,this.__kJ);
},_stopObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cp,this.__kH,this.__kJ);
},_onNative:qx.event.GlobalError.observeMethod(function(o){var q=qx.bom.Viewport;
var p=q.getOrientation();

if(this.__kI!=p){this.__kI=p;
var r=q.isLandscape()?c:b;
qx.event.Registration.fireEvent(this.__cp,e,qx.event.type.Orientation,[p,r]);
}})},destruct:function(){this._stopObserver();
this.__x=this.__cp=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var c="landscape",b="qx.event.type.Orientation",a="portrait";
qx.Class.define(b,{extend:qx.event.type.Event,members:{__ef:null,__eg:null,init:function(d,e){qx.event.type.Event.prototype.init.call(this,false,false);
this.__ef=d;
this.__eg=e;
return this;
},clone:function(f){var g=qx.event.type.Event.prototype.clone.call(this,f);
g.__ef=this.__ef;
g.__eg=this.__eg;
return g;
},getOrientation:function(){return this.__ef;
},isLandscape:function(){return this.__eg==c;
},isPortrait:function(){return this.__eg==a;
}}});
})();
(function(){var a="qx.event.handler.UserAction";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this.__x=b;
this.__cp=b.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__x:null,__cp:null,canHandleEvent:function(c,d){},registerEvent:function(e,f,g){},unregisterEvent:function(h,i,j){}},destruct:function(){this.__x=this.__cp=null;
},defer:function(k){qx.event.Registration.addHandler(k);
}});
})();
(function(){var s="touchend",r="touchstart",q="touchmove",p="event.touch",o="mousemove",n="engine.name",m="touchcancel",l="mouseup",k="mousedown",j="mshtml",c="qx.event.handler.Touch",i="useraction",g="swipe",b="qx.mobile.nativescroll",a="webkit",f="tap",d="x",h="y";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(t){qx.core.Object.call(this);
this.__x=t;
this.__cp=t.getWindow();
this.__cq=this.__cp.document;
this._initTouchObserver();
this._initMouseObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{touchstart:1,touchmove:1,touchend:1,touchcancel:1,tap:1,swipe:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT,IGNORE_CAN_HANDLE:true,MOUSE_TO_TOUCH_MAPPING:{"mousedown":"touchstart","mousemove":"touchmove","mouseup":"touchend"},SWIPE_DIRECTION:{x:["left","right"],y:["up","down"]},TAP_MAX_DISTANCE:qx.core.Environment.get("os.name")!="android"?10:40,SWIPE_MIN_DISTANCE:qx.core.Environment.get("os.name")!="android"?11:41,SWIPE_MIN_VELOCITY:0},members:{__cr:null,__cs:null,__x:null,__cp:null,__cq:null,__ct:null,__cu:null,__cv:null,__cw:null,__cx:false,__cy:null,canHandleEvent:function(u,v){},registerEvent:function(w,x,y){},unregisterEvent:function(z,A,B){},__cz:function(C){var D=qx.bom.Event.getTarget(C);
if((qx.core.Environment.get(n)==a)){if(D&&D.nodeType==3){D=D.parentNode;
}}return D;
},__cA:function(E,F,G,H){if(!G){G=this.__cz(E);
}var F=F||E.type;

if(G&&G.nodeType){qx.event.Registration.fireEvent(G,F,H||qx.event.type.Touch,[E,G,null,true,true]);
}qx.event.Registration.fireEvent(this.__cp,i,qx.event.type.Data,[F]);
},__cB:function(I,J,K){if(!K){K=this.__cz(I);
}var J=J||I.type;

if(J==r){this.__cC(I,K);
}else if(J==q){this.__cD(I,K);
}else if(J==s){this.__cE(I,K);
}},__cC:function(L,M){var N=L.changedTouches[0];
this.__ct=N.screenX;
this.__cu=N.screenY;
this.__cv=new Date().getTime();
this.__cw=L.changedTouches.length===1;
},__cD:function(O,P){if(this.__cw&&O.changedTouches.length>1){this.__cw=false;
}},__cE:function(Q,R){if(this.__cw){var S=Q.changedTouches[0];
var U={x:S.screenX-this.__ct,y:S.screenY-this.__cu};
var V=qx.event.handler.Touch;

if(this.__cy==R&&Math.abs(U.x)<=V.TAP_MAX_DISTANCE&&Math.abs(U.y)<=V.TAP_MAX_DISTANCE){this.__cA(Q,f,R,qx.event.type.Tap);
}else{var T=this.__cF(Q,R,U);

if(T){Q.swipe=T;
this.__cA(Q,g,R,qx.event.type.Swipe);
}}}},__cF:function(W,X,Y){var bd=qx.event.handler.Touch;
var be=new Date().getTime()-this.__cv;
var bg=(Math.abs(Y.x)>=Math.abs(Y.y))?d:h;
var ba=Y[bg];
var bb=bd.SWIPE_DIRECTION[bg][ba<0?0:1];
var bf=(be!==0)?ba/be:0;
var bc=null;

if(Math.abs(bf)>=bd.SWIPE_MIN_VELOCITY&&Math.abs(ba)>=bd.SWIPE_MIN_DISTANCE){bc={startTime:this.__cv,duration:be,axis:bg,direction:bb,distance:ba,velocity:bf};
}return bc;
},__cG:function(bh){var bi=bh.type;
var bk=qx.event.handler.Touch.MOUSE_TO_TOUCH_MAPPING;

if(bk[bi]){bi=bk[bi];
if(bi==r&&this.__cH(bh)){this.__cx=true;
}else if(bi==s){this.__cx=false;
}var bl=this.__cI(bh);
var bj=(bi==s?[]:[bl]);
bh.touches=bj;
bh.targetTouches=bj;
bh.changedTouches=[bl];
}return bi;
},__cH:function(bm){if((qx.core.Environment.get(n)==j)){var bn=1;
}else{var bn=0;
}return bm.button==bn;
},__cI:function(bo){var bp=this.__cz(bo);
return {clientX:bo.clientX,clientY:bo.clientY,screenX:bo.screenX,screenY:bo.screenY,pageX:bo.pageX,pageY:bo.pageY,identifier:1,target:bp};
},_initTouchObserver:function(){this.__cr=qx.lang.Function.listener(this._onTouchEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,r,this.__cr);
Event.addNativeListener(this.__cq,q,this.__cr);
Event.addNativeListener(this.__cq,s,this.__cr);
Event.addNativeListener(this.__cq,m,this.__cr);
},_initMouseObserver:function(){if(!qx.core.Environment.get(p)){this.__cs=qx.lang.Function.listener(this._onMouseEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,k,this.__cs);
Event.addNativeListener(this.__cq,o,this.__cs);
Event.addNativeListener(this.__cq,l,this.__cs);
}},_stopTouchObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,r,this.__cr);
Event.removeNativeListener(this.__cq,q,this.__cr);
Event.removeNativeListener(this.__cq,s,this.__cr);
Event.removeNativeListener(this.__cq,m,this.__cr);
},_stopMouseObserver:function(){if(!qx.core.Environment.get(p)){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,k,this.__cs);
Event.removeNativeListener(this.__cq,o,this.__cs);
Event.removeNativeListener(this.__cq,l,this.__cs);
}},_onTouchEvent:qx.event.GlobalError.observeMethod(function(bq){this._commonTouchEventHandler(bq);
}),_onMouseEvent:qx.event.GlobalError.observeMethod(function(br){if(!qx.core.Environment.get(p)){if(br.type==o&&!this.__cx){return;
}var bs=this.__cG(br);
this._commonTouchEventHandler(br,bs);
}}),_commonTouchEventHandler:function(bt,bu){var bu=bu||bt.type;

if(bu==r){this.__cy=this.__cz(bt);
}this.__cA(bt,bu);
this.__cB(bt,bu);
}},destruct:function(){this._stopTouchObserver();
this._stopMouseObserver();
this.__x=this.__cp=this.__cq=this.__cy=null;
},defer:function(bv){qx.event.Registration.addHandler(bv);
if(qx.core.Environment.get(p)){if(qx.core.Environment.get(b)==false){document.addEventListener(q,function(e){e.preventDefault();
});
}qx.event.Registration.getManager(document).getHandler(bv);
}}});
})();
(function(){var a="qx.event.type.Native";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d,e,f){qx.event.type.Event.prototype.init.call(this,e,f);
this._target=c||qx.bom.Event.getTarget(b);
this._relatedTarget=d||qx.bom.Event.getRelatedTarget(b);

if(b.timeStamp){this._timeStamp=b.timeStamp;
}this._native=b;
this._returnValue=null;
return this;
},clone:function(g){var h=qx.event.type.Event.prototype.clone.call(this,g);
var i={};
h._native=this._cloneNativeEvent(this._native,i);
h._returnValue=this._returnValue;
return h;
},_cloneNativeEvent:function(j,k){k.preventDefault=qx.lang.Function.empty;
return k;
},preventDefault:function(){qx.event.type.Event.prototype.preventDefault.call(this);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(l){this._returnValue=l;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
})();
(function(){var c="os.name",b="qx.event.type.Dom",a="osx";
qx.Class.define(b,{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Native.prototype._cloneNativeEvent.call(this,d,e);
e.shiftKey=d.shiftKey;
e.ctrlKey=d.ctrlKey;
e.altKey=d.altKey;
e.metaKey=d.metaKey;
return e;
},getModifiers:function(){var g=0;
var f=this._native;

if(f.shiftKey){g|=qx.event.type.Dom.SHIFT_MASK;
}
if(f.ctrlKey){g|=qx.event.type.Dom.CTRL_MASK;
}
if(f.altKey){g|=qx.event.type.Dom.ALT_MASK;
}
if(f.metaKey){g|=qx.event.type.Dom.META_MASK;
}return g;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get(c)==a){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
})();
(function(){var c="touchcancel",b="qx.event.type.Touch",a="touchend";
qx.Class.define(b,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(d,e){var e=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,d,e);
e.pageX=d.pageX;
e.pageY=d.pageY;
e.layerX=d.layerX;
e.layerY=d.layerY;
e.scale=d.scale;
e.rotation=d.rotation;
e.srcElement=d.srcElement;
e.targetTouches=[];

for(var i=0;i<d.targetTouches.length;i++){e.targetTouches[i]=d.targetTouches[i];
}e.changedTouches=[];

for(var i=0;i<d.changedTouches.length;i++){e.changedTouches[i]=d.changedTouches[i];
}e.touches=[];

for(var i=0;i<d.touches.length;i++){e.touches[i]=d.touches[i];
}return e;
},stop:function(){this.stopPropagation();
},getAllTouches:function(){return this._native.touches;
},getTargetTouches:function(){return this._native.targetTouches;
},getChangedTargetTouches:function(){return this._native.changedTouches;
},isMultiTouch:function(){return this.__gL().length>1;
},getScale:function(){return this._native.scale;
},getRotation:function(){return this._native.rotation;
},getDocumentLeft:function(f){return this.__gK(f).pageX;
},getDocumentTop:function(g){return this.__gK(g).pageY;
},getScreenLeft:function(h){return this.__gK(h).screenX;
},getScreenTop:function(j){return this.__gK(j).screenY;
},getViewportLeft:function(k){return this.__gK(k).clientX;
},getViewportTop:function(l){return this.__gK(l).clientY;
},getIdentifier:function(m){return this.__gK(m).identifier;
},__gK:function(n){n=n==null?0:n;
return this.__gL()[n];
},__gL:function(){var o=(this._isTouchEnd()?this.getChangedTargetTouches():this.getTargetTouches());
return o;
},_isTouchEnd:function(){return (this.getType()==a||this.getType()==c);
}}});
})();
(function(){var a="qx.event.type.Tap";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_isTouchEnd:function(){return true;
}}});
})();
(function(){var a="qx.event.type.Swipe";
qx.Class.define(a,{extend:qx.event.type.Touch,members:{_cloneNativeEvent:function(b,c){var c=qx.event.type.Touch.prototype._cloneNativeEvent.call(this,b,c);
c.swipe=b.swipe;
return c;
},_isTouchEnd:function(){return true;
},getStartTime:function(){return this._native.swipe.startTime;
},getDuration:function(){return this._native.swipe.duration;
},getAxis:function(){return this._native.swipe.axis;
},getDirection:function(){return this._native.swipe.direction;
},getVelocity:function(){return this._native.swipe.velocity;
},getDistance:function(){return this._native.swipe.distance;
}}});
})();
(function(){var c="qx.event.handler.Appear",b="disappear",a="appear";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(d){qx.core.Object.call(this);
this.__x=d;
this.__gv={};
qx.event.handler.Appear.__gw[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__gw:{},refresh:function(){var e=this.__gw;

for(var f in e){e[f].refresh();
}}},members:{__x:null,__gv:null,canHandleEvent:function(g,h){},registerEvent:function(i,j,k){var l=qx.core.ObjectRegistry.toHashCode(i)+j;
var m=this.__gv;

if(m&&!m[l]){m[l]=i;
i.$$displayed=i.offsetWidth>0;
}},unregisterEvent:function(n,o,p){var q=qx.core.ObjectRegistry.toHashCode(n)+o;
var r=this.__gv;

if(!r){return;
}
if(r[q]){delete r[q];
}},refresh:function(){var v=this.__gv;
var w;

for(var u in v){w=v[u];
var s=w.offsetWidth>0;

if((!!w.$$displayed)!==s){w.$$displayed=s;
var t=qx.event.Registration.createEvent(s?a:b);
this.__x.dispatchEvent(w,t);
}}}},destruct:function(){this.__x=this.__gv=null;
delete qx.event.handler.Appear.__gw[this.$$hash];
},defer:function(x){qx.event.Registration.addHandler(x);
}});
})();
(function(){var b="qx.ui.mobile.core.DomUpdatedHandler",a="domupdated";
qx.Class.define(b,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){qx.core.Object.call(this);
this.__x=c;
this.__gv={};
qx.ui.mobile.core.DomUpdatedHandler.__gw[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{domupdated:1},IGNORE_CAN_HANDLE:false,__gw:{},refresh:function(){var d=this.__gw;

for(var e in d){d[e].refresh();
}}},members:{__x:null,__gv:null,canHandleEvent:function(f,g){return f instanceof qx.ui.mobile.core.Widget;
},registerEvent:function(h,i,j){var k=h.$$hash;
var l=this.__gv;

if(l&&!l[k]){l[k]=h;
}},unregisterEvent:function(m,n,o){var p=m.$$hash;
var q=this.__gv;

if(!q){return;
}
if(q[p]){delete q[p];
}},refresh:function(){var t=this.__gv;
var u;

for(var s in t){u=t[s];

if(u&&!u.$$disposed&&u.isSeeable()){var r=qx.event.Registration.createEvent(a);
this.__x.dispatchEvent(u,r);
}}}},destruct:function(){this.__x=this.__gv=null;
delete qx.ui.mobile.core.DomUpdatedHandler.__gw[this.$$hash];
},defer:function(v){qx.event.Registration.addHandler(v);
}});
})();
(function(){var b="abstract",a="qx.event.dispatch.AbstractBubbling";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:b,construct:function(c){this._manager=c;
},members:{_getParent:function(d){throw new Error("Missing implementation");
},canDispatchEvent:function(e,event,f){return event.getBubbles();
},dispatchEvent:function(g,event,h){var parent=g;
var s=this._manager;
var p,w;
var n;
var r,u;
var t;
var v=[];
p=s.getListeners(g,h,true);
w=s.getListeners(g,h,false);

if(p){v.push(p);
}
if(w){v.push(w);
}var parent=this._getParent(g);
var l=[];
var k=[];
var m=[];
var q=[];
while(parent!=null){p=s.getListeners(parent,h,true);

if(p){m.push(p);
q.push(parent);
}w=s.getListeners(parent,h,false);

if(w){l.push(w);
k.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=m.length-1;i>=0;i--){t=q[i];
event.setCurrentTarget(t);
n=m[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(g);

for(var i=0,x=v.length;i<x;i++){n=v[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||g;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,x=l.length;i<x;i++){t=k[i];
event.setCurrentTarget(t);
n=l[i];

for(var j=0,o=n.length;j<o;j++){r=n[j];
u=r.context||t;
r.handler.call(u,event);
}
if(event.getPropagationStopped()){return;
}}}}});
})();
(function(){var a="qx.event.dispatch.DomBubbling";
qx.Class.define(a,{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(b){return b.parentNode;
},canDispatchEvent:function(c,event,d){return c.nodeType!==undefined&&event.getBubbles();
}},defer:function(e){qx.event.Registration.addDispatcher(e);
}});
})();
(function(){var d="-",c="qx.event.handler.Element",b="load",a="iframe";
qx.Class.define(c,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(e){qx.core.Object.call(this);
this._manager=e;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(f,g){if(g===b){return f.tagName.toLowerCase()!==a;
}else{return true;
}},registerEvent:function(h,i,j){var m=qx.core.ObjectRegistry.toHashCode(h);
var k=m+d+i;
var l=qx.lang.Function.listener(this._onNative,this,k);
qx.bom.Event.addNativeListener(h,i,l);
this._registeredEvents[k]={element:h,type:i,listener:l};
},unregisterEvent:function(n,o,p){var s=this._registeredEvents;

if(!s){return;
}var t=qx.core.ObjectRegistry.toHashCode(n);
var q=t+d+o;
var r=this._registeredEvents[q];

if(r){qx.bom.Event.removeNativeListener(n,o,r.listener);
}delete this._registeredEvents[q];
},_onNative:qx.event.GlobalError.observeMethod(function(u,v){var x=this._registeredEvents;

if(!x){return;
}var w=x[v];
var y=this.constructor.CANCELABLE[w.type];
qx.event.Registration.fireNonBubblingEvent(w.element,w.type,qx.event.type.Native,[u,undefined,undefined,undefined,y]);
})},destruct:function(){var z;
var A=this._registeredEvents;

for(var B in A){z=A[B];
qx.bom.Event.removeNativeListener(z.element,z.type,z.listener);
}this._manager=this._registeredEvents=null;
},defer:function(C){qx.event.Registration.addHandler(C);
}});
})();
(function(){var a="qx.event.handler.Capture";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(b,c){},registerEvent:function(d,e,f){},unregisterEvent:function(g,h,i){}},defer:function(j){qx.event.Registration.addHandler(j);
}});
})();
(function(){var t="mouseup",s="engine.name",r="click",q="mousedown",p="contextmenu",o="mousewheel",n="dblclick",m="os.name",l="mouseover",k="mouseout",d="ios",j="mousemove",g="on",c="engine.version",b="useraction",f="webkit",e="gecko",h="DOMMouseScroll",a="qx.event.handler.Mouse";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(u){qx.core.Object.call(this);
this.__x=u;
this.__cp=u.getWindow();
this.__cq=this.__cp.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__eo:null,__ep:null,__eq:null,__er:null,__es:null,__x:null,__cp:null,__cq:null,canHandleEvent:function(v,w){},registerEvent:qx.core.Environment.get(m)===d?function(x,y,z){x[g+y]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get(m)===d?function(A,B,C){A[g+B]=undefined;
}:qx.lang.Function.returnNull,__cA:function(D,E,F){if(!F){F=qx.bom.Event.getTarget(D);
}if(F&&F.nodeType){qx.event.Registration.fireEvent(F,E||D.type,E==o?qx.event.type.MouseWheel:qx.event.type.Mouse,[D,F,null,true,true]);
}qx.event.Registration.fireEvent(this.__cp,b,qx.event.type.Data,[E||D.type]);
},__et:function(){var H=[this.__cp,this.__cq,this.__cq.body];
var I=this.__cp;
var G=h;

for(var i=0;i<H.length;i++){if(qx.bom.Event.supportsEvent(H[i],o)){G=o;
I=H[i];
break;
}}return {type:G,target:I};
},_initButtonObserver:function(){this.__eo=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,q,this.__eo);
Event.addNativeListener(this.__cq,t,this.__eo);
Event.addNativeListener(this.__cq,r,this.__eo);
Event.addNativeListener(this.__cq,n,this.__eo);
Event.addNativeListener(this.__cq,p,this.__eo);
},_initMoveObserver:function(){this.__ep=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,j,this.__ep);
Event.addNativeListener(this.__cq,l,this.__ep);
Event.addNativeListener(this.__cq,k,this.__ep);
},_initWheelObserver:function(){this.__eq=qx.lang.Function.listener(this._onWheelEvent,this);
var J=this.__et();
qx.bom.Event.addNativeListener(J.target,J.type,this.__eq);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,q,this.__eo);
Event.removeNativeListener(this.__cq,t,this.__eo);
Event.removeNativeListener(this.__cq,r,this.__eo);
Event.removeNativeListener(this.__cq,n,this.__eo);
Event.removeNativeListener(this.__cq,p,this.__eo);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,j,this.__ep);
Event.removeNativeListener(this.__cq,l,this.__ep);
Event.removeNativeListener(this.__cq,k,this.__ep);
},_stopWheelObserver:function(){var K=this.__et();
qx.bom.Event.removeNativeListener(K.target,K.type,this.__eq);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(L){this.__cA(L);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(M){var N=M.type;
var O=qx.bom.Event.getTarget(M);
if(qx.core.Environment.get(s)==e||qx.core.Environment.get(s)==f){if(O&&O.nodeType==3){O=O.parentNode;
}}
if(this.__eu){this.__eu(M,N,O);
}
if(this.__ew){this.__ew(M,N,O);
}this.__cA(M,N,O);

if(this.__ev){this.__ev(M,N,O);
}
if(this.__ex){this.__ex(M,N,O);
}this.__er=N;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(P){this.__cA(P,o);
}),__eu:qx.core.Environment.select(s,{"webkit":function(Q,R,S){if(parseFloat(qx.core.Environment.get(c))<530){if(R==p){this.__cA(Q,t,S);
}}},"default":null}),__ev:qx.core.Environment.select(s,{"opera":function(T,U,V){if(U==t&&T.button==2){this.__cA(T,p,V);
}},"default":null}),__ew:qx.core.Environment.select(s,{"mshtml":function(W,X,Y){if(W.target!==undefined){return;
}
if(X==t&&this.__er==r){this.__cA(W,q,Y);
}else if(X==n){this.__cA(W,r,Y);
}},"default":null}),__ex:qx.core.Environment.select(s,{"mshtml":null,"default":function(ba,bb,bc){switch(bb){case q:this.__es=bc;
break;
case t:if(bc!==this.__es){var bd=qx.dom.Hierarchy.getCommonParent(bc,this.__es);
this.__cA(ba,r,bd);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__x=this.__cp=this.__cq=this.__es=null;
},defer:function(be){qx.event.Registration.addHandler(be);
}});
})();
(function(){var j="left",i="right",h="middle",g="none",f="click",e="contextmenu",d="qx.event.type.Mouse",c="browser.documentmode",b="browser.name",a="ie";
qx.Class.define(d,{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(k,l){var l=qx.event.type.Dom.prototype._cloneNativeEvent.call(this,k,l);
l.button=k.button;
l.clientX=k.clientX;
l.clientY=k.clientY;
l.pageX=k.pageX;
l.pageY=k.pageY;
l.screenX=k.screenX;
l.screenY=k.screenY;
l.wheelDelta=k.wheelDelta;
l.wheelDeltaX=k.wheelDeltaX;
l.wheelDeltaY=k.wheelDeltaY;
l.detail=k.detail;
l.axis=k.axis;
l.wheelX=k.wheelX;
l.wheelY=k.wheelY;
l.HORIZONTAL_AXIS=k.HORIZONTAL_AXIS;
l.srcElement=k.srcElement;
l.target=k.target;
return l;
},__in:{0:j,2:i,1:h},__io:{1:j,2:i,4:h},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case e:return i;
case f:if(qx.core.Environment.get(b)===a&&qx.core.Environment.get(c)<9){return j;
}default:if(this._native.target!==undefined){return this.__in[this._native.button]||g;
}else{return this.__io[this._native.button]||g;
}}},isLeftPressed:function(){return this.getButton()===j;
},isMiddlePressed:function(){return this.getButton()===h;
},isRightPressed:function(){return this.getButton()===i;
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var m=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(m);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var n=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(n);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
})();
(function(){var l="engine.version",k="os.name",j="engine.name",i="x",h="osx",g="win",f="qx.dynamicmousewheel",d="chrome",c="qx.event.type.MouseWheel",b="browser.name",a="y";
qx.Class.define(c,{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__bG:function(m){var n=Math.abs(m);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>n){qx.event.type.MouseWheel.MINSCROLL=n;
this.__bH();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<n){qx.event.type.MouseWheel.MAXSCROLL=n;
this.__bH();
}if(qx.event.type.MouseWheel.MAXSCROLL===n&&qx.event.type.MouseWheel.MINSCROLL===n){return 2*(m/n);
}var o=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var p=(m/o)*Math.log(o)*qx.event.type.MouseWheel.FACTOR;
return p<0?Math.min(p,-1):Math.max(p,1);
},__bH:function(){var q=qx.event.type.MouseWheel.MAXSCROLL||0;
var t=qx.event.type.MouseWheel.MINSCROLL||q;

if(q<=t){return;
}var r=q-t;
var s=(q/r)*Math.log(r);

if(s==0){s=1;
}qx.event.type.MouseWheel.FACTOR=6/s;
},getWheelDelta:function(u){var e=this._native;
if(u===undefined){if(v===undefined){var v=-e.wheelDelta;

if(e.wheelDelta===undefined){v=e.detail;
}}return this.__bI(v);
}if(u===i){var x=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaX!==undefined){x=e.wheelDeltaX?this.__bI(-e.wheelDeltaX):0;
}}else{if(e.axis&&e.axis==e.HORIZONTAL_AXIS){x=this.__bI(e.detail);
}}return x;
}if(u===a){var y=0;

if(e.wheelDelta!==undefined){if(e.wheelDeltaY!==undefined){y=e.wheelDeltaY?this.__bI(-e.wheelDeltaY):0;
}else{y=this.__bI(-e.wheelDelta);
}}else{if(!(e.axis&&e.axis==e.HORIZONTAL_AXIS)){y=this.__bI(e.detail);
}}return y;
}return 0;
},__bI:function(w){if(qx.core.Environment.get(f)){return this.__bG(w);
}else{var z=qx.core.Environment.select(j,{"default":function(){return w/40;
},"gecko":function(){return w;
},"webkit":function(){if(qx.core.Environment.get(b)==d){if(qx.core.Environment.get(k)==h){return w/60;
}else{return w/120;
}}else{if(qx.core.Environment.get(k)==g){var A=120;
if(parseFloat(qx.core.Environment.get(l))==533.16){A=1200;
}}else{A=40;
if(parseFloat(qx.core.Environment.get(l))==533.16||parseFloat(qx.core.Environment.get(l))==533.17||parseFloat(qx.core.Environment.get(l))==533.18){A=1200;
}}return w/A;
}}});
return z.call(this);
}}}});
})();
(function(){var f="engine.name",e="qx.dom.Hierarchy",d="previousSibling",c="*",b="nextSibling",a="parentNode";
qx.Class.define(e,{statics:{getNodeIndex:function(g){var h=0;

while(g&&(g=g.previousSibling)){h++;
}return h;
},getElementIndex:function(i){var j=0;
var k=qx.dom.Node.ELEMENT;

while(i&&(i=i.previousSibling)){if(i.nodeType==k){j++;
}}return j;
},getNextElementSibling:function(l){while(l&&(l=l.nextSibling)&&!qx.dom.Node.isElement(l)){continue;
}return l||null;
},getPreviousElementSibling:function(m){while(m&&(m=m.previousSibling)&&!qx.dom.Node.isElement(m)){continue;
}return m||null;
},contains:qx.core.Environment.select(f,{"webkit|mshtml|opera":function(n,o){if(qx.dom.Node.isDocument(n)){var p=qx.dom.Node.getDocument(o);
return n&&p==n;
}else if(qx.dom.Node.isDocument(o)){return false;
}else{return n.contains(o);
}},"gecko":function(q,r){return !!(q.compareDocumentPosition(r)&16);
},"default":function(s,t){while(t){if(s==t){return true;
}t=t.parentNode;
}return false;
}}),isRendered:qx.core.Environment.select(f,{"mshtml":function(u){if(!u.parentNode||!u.offsetParent){return false;
}var v=u.ownerDocument||u.document;
return v.body.contains(u);
},"gecko":function(w){var x=w.ownerDocument||w.document;
return !!(x.compareDocumentPosition(w)&16);
},"default":function(y){if(!y.parentNode||!y.offsetParent){return false;
}var z=y.ownerDocument||y.document;
return z.body.contains(y);
}}),isDescendantOf:function(A,B){return this.contains(B,A);
},getCommonParent:qx.core.Environment.select(f,{"mshtml|opera":function(C,D){if(C===D){return C;
}
while(C&&qx.dom.Node.isElement(C)){if(C.contains(D)){return C;
}C=C.parentNode;
}return null;
},"default":function(E,F){if(E===F){return E;
}var G={};
var J=qx.core.ObjectRegistry;
var I,H;

while(E||F){if(E){I=J.toHashCode(E);

if(G[I]){return G[I];
}G[I]=E;
E=E.parentNode;
}
if(F){H=J.toHashCode(F);

if(G[H]){return G[H];
}G[H]=F;
F=F.parentNode;
}}return null;
}}),getAncestors:function(K){return this._recursivelyCollect(K,a);
},getChildElements:function(L){L=L.firstChild;

if(!L){return [];
}var M=this.getNextSiblings(L);

if(L.nodeType===1){M.unshift(L);
}return M;
},getDescendants:function(N){return qx.lang.Array.fromCollection(N.getElementsByTagName(c));
},getFirstDescendant:function(O){O=O.firstChild;

while(O&&O.nodeType!=1){O=O.nextSibling;
}return O;
},getLastDescendant:function(P){P=P.lastChild;

while(P&&P.nodeType!=1){P=P.previousSibling;
}return P;
},getPreviousSiblings:function(Q){return this._recursivelyCollect(Q,d);
},getNextSiblings:function(R){return this._recursivelyCollect(R,b);
},_recursivelyCollect:function(S,T){var U=[];

while(S=S[T]){if(S.nodeType==1){U.push(S);
}}return U;
},getSiblings:function(V){return this.getPreviousSiblings(V).reverse().concat(this.getNextSiblings(V));
},isEmpty:function(W){W=W.firstChild;

while(W){if(W.nodeType===qx.dom.Node.ELEMENT||W.nodeType===qx.dom.Node.TEXT){return false;
}W=W.nextSibling;
}return true;
},cleanWhitespace:function(X){var Y=X.firstChild;

while(Y){var ba=Y.nextSibling;

if(Y.nodeType==3&&!/\S/.test(Y.nodeValue)){X.removeChild(Y);
}Y=ba;
}}}});
})();
(function(){var m="keydown",l="engine.name",k="keypress",j="NumLock",i="keyup",h="os.name",g="Enter",f="0",e="engine.version",d="9",bx="-",bw="+",bv="PrintScreen",bu="PageUp",bt="gecko",bs="A",br="Space",bq="Left",bp="F5",bo="Down",t="Up",u="F11",r="F6",s="useraction",p="F3",q="keyinput",n="Insert",o="F8",B="End",C="/",Q="Delete",M="*",Y="F1",T="F4",bk="Home",be="F2",H="F12",bn="PageDown",bm="mshtml",bl="F7",F="Win",J="osx",L="F9",O="webkit",R="cmd",U="F10",bb="Right",bg="Z",v="text",w="Escape",I="5",X="3",W="Meta",V="7",bd="Scroll",bc="CapsLock",S="input",ba="Control",a="Tab",bf="Shift",x="Pause",y="Unidentified",N="qx.event.handler.Keyboard",b="win",c="1",E="Apps",z="6",A="off",D="4",P="Alt",bi="2",bh="8",K="Backspace",bj="autoComplete",G=",";
qx.Class.define(N,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(by){qx.core.Object.call(this);
this.__x=by;
this.__cp=by.getWindow();
if((qx.core.Environment.get(l)==bt)){this.__cq=this.__cp;
}else{this.__cq=this.__cp.document.documentElement;
}this.__kx={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(bz){if(this._identifierToKeyCodeMap[bz]){return true;
}
if(bz.length!=1){return false;
}
if(bz>=f&&bz<=d){return true;
}
if(bz>=bs&&bz<=bg){return true;
}
switch(bz){case bw:case bx:case M:case C:return true;
default:return false;
}},isPrintableKeyIdentifier:function(bA){if(bA===br){return true;
}else{return this._identifierToKeyCodeMap[bA]?false:true;
}}},members:{__ky:null,__x:null,__cp:null,__cq:null,__kx:null,__kz:null,__kA:null,__kB:null,canHandleEvent:function(bB,bC){},registerEvent:function(bD,bE,bF){},unregisterEvent:function(bG,bH,bI){},_fireInputEvent:function(bJ,bK){var bL=this.__kC();
if(bL&&bL.offsetWidth!=0){var event=qx.event.Registration.createEvent(q,qx.event.type.KeyInput,[bJ,bL,bK]);
this.__x.dispatchEvent(bL,event);
}if(this.__cp){qx.event.Registration.fireEvent(this.__cp,s,qx.event.type.Data,[q]);
}},_fireSequenceEvent:function(bM,bN,bO){var bP=this.__kC();
var bQ=bM.keyCode;
var event=qx.event.Registration.createEvent(bN,qx.event.type.KeySequence,[bM,bP,bO]);
this.__x.dispatchEvent(bP,event);
if(qx.core.Environment.get(l)==bm||qx.core.Environment.get(l)==O){if(bN==m&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(bQ)&&!this._emulateKeyPress[bQ]){this._fireSequenceEvent(bM,k,bO);
}}}if(this.__cp){qx.event.Registration.fireEvent(this.__cp,s,qx.event.type.Data,[bN]);
}},__kC:function(){var bR=this.__x.getHandler(qx.event.handler.Focus);
var bS=bR.getActive();
if(!bS||bS.offsetWidth==0){bS=bR.getFocus();
}if(!bS||bS.offsetWidth==0){bS=this.__x.getWindow().document.body;
}return bS;
},_initKeyObserver:function(){this.__ky=qx.lang.Function.listener(this.__kD,this);
this.__kB=qx.lang.Function.listener(this.__dD,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__cq,i,this.__ky);
Event.addNativeListener(this.__cq,m,this.__ky);
Event.addNativeListener(this.__cq,k,this.__kB);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__cq,i,this.__ky);
Event.removeNativeListener(this.__cq,m,this.__ky);
Event.removeNativeListener(this.__cq,k,this.__kB);

for(var bU in (this.__kA||{})){var bT=this.__kA[bU];
Event.removeNativeListener(bT.target,k,bT.callback);
}delete (this.__kA);
},__kD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(bV){bV=window.event||bV;
var bY=bV.keyCode;
var bW=0;
var bX=bV.type;
if(!(this.__kx[bY]==m&&bX==m)){this._idealKeyHandler(bY,bW,bX,bV);
}if(bX==m){if(this._isNonPrintableKeyCode(bY)||this._emulateKeyPress[bY]){this._idealKeyHandler(bY,bW,k,bV);
}}this.__kx[bY]=bX;
},"gecko":function(ca){var ce=this._keyCodeFix[ca.keyCode]||ca.keyCode;
var cc=0;
var cd=ca.type;
if(qx.core.Environment.get(h)==b){var cb=ce?this._keyCodeToIdentifier(ce):this._charCodeToIdentifier(cc);

if(!(this.__kx[cb]==m&&cd==m)){this._idealKeyHandler(ce,cc,cd,ca);
}this.__kx[cb]=cd;
}else{this._idealKeyHandler(ce,cc,cd,ca);
}this.__kE(ca.target,cd,ce);
},"webkit":function(cf){var ci=0;
var cg=0;
var ch=cf.type;
if(parseFloat(qx.core.Environment.get(e))<525.13){if(ch==i||ch==m){ci=this._charCode2KeyCode[cf.charCode]||cf.keyCode;
}else{if(this._charCode2KeyCode[cf.charCode]){ci=this._charCode2KeyCode[cf.charCode];
}else{cg=cf.charCode;
}}this._idealKeyHandler(ci,cg,ch,cf);
}else{ci=cf.keyCode;
this._idealKeyHandler(ci,cg,ch,cf);
if(ch==m){if(this._isNonPrintableKeyCode(ci)||this._emulateKeyPress[ci]){this._idealKeyHandler(ci,cg,k,cf);
}}this.__kx[ci]=ch;
}},"opera":function(cj){this.__kz=cj.keyCode;
this._idealKeyHandler(cj.keyCode,0,cj.type,cj);
}})),__kE:qx.core.Environment.select(l,{"gecko":function(ck,cl,cm){if(cl===m&&(cm==33||cm==34||cm==38||cm==40)&&ck.type==v&&ck.tagName.toLowerCase()===S&&ck.getAttribute(bj)!==A){if(!this.__kA){this.__kA={};
}var co=qx.core.ObjectRegistry.toHashCode(ck);

if(this.__kA[co]){return;
}var self=this;
this.__kA[co]={target:ck,callback:function(cp){qx.bom.Event.stopPropagation(cp);
self.__dD(cp);
}};
var cn=qx.event.GlobalError.observeMethod(this.__kA[co].callback);
qx.bom.Event.addNativeListener(ck,k,cn);
}},"default":null}),__dD:qx.event.GlobalError.observeMethod(qx.core.Environment.select(l,{"mshtml":function(cq){cq=window.event||cq;

if(this._charCode2KeyCode[cq.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cq.keyCode],0,cq.type,cq);
}else{this._idealKeyHandler(0,cq.keyCode,cq.type,cq);
}},"gecko":function(cr){var cu=this._keyCodeFix[cr.keyCode]||cr.keyCode;
var cs=cr.charCode;
var ct=cr.type;
this._idealKeyHandler(cu,cs,ct,cr);
},"webkit":function(cv){if(parseFloat(qx.core.Environment.get(e))<525.13){var cy=0;
var cw=0;
var cx=cv.type;

if(cx==i||cx==m){cy=this._charCode2KeyCode[cv.charCode]||cv.keyCode;
}else{if(this._charCode2KeyCode[cv.charCode]){cy=this._charCode2KeyCode[cv.charCode];
}else{cw=cv.charCode;
}}this._idealKeyHandler(cy,cw,cx,cv);
}else{if(this._charCode2KeyCode[cv.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[cv.keyCode],0,cv.type,cv);
}else{this._idealKeyHandler(0,cv.keyCode,cv.type,cv);
}}},"opera":function(cz){var cB=cz.keyCode;
var cA=cz.type;
if(cB!=this.__kz){this._idealKeyHandler(0,this.__kz,cA,cz);
}else{if(this._keyCodeToIdentifierMap[cz.keyCode]){this._idealKeyHandler(cz.keyCode,0,cz.type,cz);
}else{this._idealKeyHandler(0,cz.keyCode,cz.type,cz);
}}}})),_idealKeyHandler:function(cC,cD,cE,cF){var cG;
if(cC||(!cC&&!cD)){cG=this._keyCodeToIdentifier(cC);
this._fireSequenceEvent(cF,cE,cG);
}else{cG=this._charCodeToIdentifier(cD);
this._fireSequenceEvent(cF,k,cG);
this._fireInputEvent(cF,cD);
}},_specialCharCodeMap:{8:K,9:a,13:g,27:w,32:br},_emulateKeyPress:qx.core.Environment.select(l,{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:bf,17:ba,18:P,20:bc,224:W,37:bq,38:t,39:bb,40:bo,33:bu,34:bn,35:B,36:bk,45:n,46:Q,112:Y,113:be,114:p,115:T,116:bp,117:r,118:bl,119:o,120:L,121:U,122:u,123:H,144:j,44:bv,145:bd,19:x,91:qx.core.Environment.get(h)==J?R:F,92:F,93:qx.core.Environment.get(h)==J?R:E},_numpadToCharCode:{96:f.charCodeAt(0),97:c.charCodeAt(0),98:bi.charCodeAt(0),99:X.charCodeAt(0),100:D.charCodeAt(0),101:I.charCodeAt(0),102:z.charCodeAt(0),103:V.charCodeAt(0),104:bh.charCodeAt(0),105:d.charCodeAt(0),106:M.charCodeAt(0),107:bw.charCodeAt(0),109:bx.charCodeAt(0),110:G.charCodeAt(0),111:C.charCodeAt(0)},_charCodeA:bs.charCodeAt(0),_charCodeZ:bg.charCodeAt(0),_charCode0:f.charCodeAt(0),_charCode9:d.charCodeAt(0),_isNonPrintableKeyCode:function(cH){return this._keyCodeToIdentifierMap[cH]?true:false;
},_isIdentifiableKeyCode:function(cI){if(cI>=this._charCodeA&&cI<=this._charCodeZ){return true;
}if(cI>=this._charCode0&&cI<=this._charCode9){return true;
}if(this._specialCharCodeMap[cI]){return true;
}if(this._numpadToCharCode[cI]){return true;
}if(this._isNonPrintableKeyCode(cI)){return true;
}return false;
},_keyCodeToIdentifier:function(cJ){if(this._isIdentifiableKeyCode(cJ)){var cK=this._numpadToCharCode[cJ];

if(cK){return String.fromCharCode(cK);
}return (this._keyCodeToIdentifierMap[cJ]||this._specialCharCodeMap[cJ]||String.fromCharCode(cJ));
}else{return y;
}},_charCodeToIdentifier:function(cL){return this._specialCharCodeMap[cL]||String.fromCharCode(cL).toUpperCase();
},_identifierToKeyCode:function(cM){return qx.event.handler.Keyboard._identifierToKeyCodeMap[cM]||cM.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__kz=this.__x=this.__cp=this.__cq=this.__kx=null;
},defer:function(cN,cO){qx.event.Registration.addHandler(cN);
if(!cN._identifierToKeyCodeMap){cN._identifierToKeyCodeMap={};

for(var cP in cO._keyCodeToIdentifierMap){cN._identifierToKeyCodeMap[cO._keyCodeToIdentifierMap[cP]]=parseInt(cP,10);
}
for(var cP in cO._specialCharCodeMap){cN._identifierToKeyCodeMap[cO._specialCharCodeMap[cP]]=parseInt(cP,10);
}}
if((qx.core.Environment.get(l)==bm)){cO._charCode2KeyCode={13:13,27:27};
}else if((qx.core.Environment.get(l)==bt)){cO._keyCodeFix={12:cO._identifierToKeyCode(j)};
}else if((qx.core.Environment.get(l)==O)){if(parseFloat(qx.core.Environment.get(e))<525.13){cO._charCode2KeyCode={63289:cO._identifierToKeyCode(j),63276:cO._identifierToKeyCode(bu),63277:cO._identifierToKeyCode(bn),63275:cO._identifierToKeyCode(B),63273:cO._identifierToKeyCode(bk),63234:cO._identifierToKeyCode(bq),63232:cO._identifierToKeyCode(t),63235:cO._identifierToKeyCode(bb),63233:cO._identifierToKeyCode(bo),63272:cO._identifierToKeyCode(Q),63302:cO._identifierToKeyCode(n),63236:cO._identifierToKeyCode(Y),63237:cO._identifierToKeyCode(be),63238:cO._identifierToKeyCode(p),63239:cO._identifierToKeyCode(T),63240:cO._identifierToKeyCode(bp),63241:cO._identifierToKeyCode(r),63242:cO._identifierToKeyCode(bl),63243:cO._identifierToKeyCode(o),63244:cO._identifierToKeyCode(L),63245:cO._identifierToKeyCode(U),63246:cO._identifierToKeyCode(u),63247:cO._identifierToKeyCode(H),63248:cO._identifierToKeyCode(bv),3:cO._identifierToKeyCode(g),12:cO._identifierToKeyCode(j),13:cO._identifierToKeyCode(g)};
}else{cO._charCode2KeyCode={13:13,27:27};
}}}});
})();
(function(){var a="qx.event.type.KeyInput";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._charCode=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._charCode=this._charCode;
return f;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
})();
(function(){var a="qx.event.type.KeySequence";
qx.Class.define(a,{extend:qx.event.type.Dom,members:{init:function(b,c,d){qx.event.type.Dom.prototype.init.call(this,b,c,null,true,true);
this._keyCode=b.keyCode;
this._identifier=d;
return this;
},clone:function(e){var f=qx.event.type.Dom.prototype.clone.call(this,e);
f._keyCode=this._keyCode;
f._identifier=this._identifier;
return f;
},getKeyIdentifier:function(){return this._identifier;
},getKeyCode:function(){return this._keyCode;
},isPrintable:function(){return qx.event.handler.Keyboard.isPrintableKeyIdentifier(this._identifier);
}}});
})();
(function(){var j="engine.name",i="mousedown",h="mouseup",g="blur",f="focus",e="on",d="selectstart",c="DOMFocusOut",b="focusin",a="focusout",z="DOMFocusIn",y="draggesture",x="qx.event.handler.Focus",w="_applyFocus",v="deactivate",u="textarea",t="_applyActive",s='character',r="input",q="qxSelectable",o="tabIndex",p="off",m="activate",n="mshtml",k="qxKeepFocus",l="qxKeepActive";
qx.Class.define(x,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(A){qx.core.Object.call(this);
this._manager=A;
this._window=A.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:t,nullable:true},focus:{apply:w,nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__eY:null,__fa:null,__fb:null,__fc:null,__fd:null,__fe:null,__ff:null,__fg:null,__fh:null,__fi:null,canHandleEvent:function(B,C){},registerEvent:function(D,E,F){},unregisterEvent:function(G,H,I){},focus:function(J){if((qx.core.Environment.get(j)==n)){window.setTimeout(function(){try{J.focus();
var K=qx.bom.Selection.get(J);

if(K.length==0){var L=J.createTextRange();
L.moveStart(s,J.value.length);
L.collapse();
L.select();
}}catch(M){}},0);
}else{try{J.focus();
}catch(N){}}this.setFocus(J);
this.setActive(J);
},activate:function(O){this.setActive(O);
},blur:function(P){try{P.blur();
}catch(Q){}
if(this.getActive()===P){this.resetActive();
}
if(this.getFocus()===P){this.resetFocus();
}},deactivate:function(R){if(this.getActive()===R){this.resetActive();
}},tryActivate:function(S){var T=this.__fw(S);

if(T){this.setActive(T);
}},__cA:function(U,V,W,X){var ba=qx.event.Registration;
var Y=ba.createEvent(W,qx.event.type.Focus,[U,V,X]);
ba.dispatchEvent(U,Y);
},_windowFocused:true,__fj:function(){if(this._windowFocused){this._windowFocused=false;
this.__cA(this._window,null,g,false);
}},__fk:function(){if(!this._windowFocused){this._windowFocused=true;
this.__cA(this._window,null,f,false);
}},_initObserver:qx.core.Environment.select(j,{"gecko":function(){this.__eY=qx.lang.Function.listener(this.__fq,this);
this.__fa=qx.lang.Function.listener(this.__fr,this);
this.__fb=qx.lang.Function.listener(this.__fp,this);
this.__fc=qx.lang.Function.listener(this.__fo,this);
this.__fd=qx.lang.Function.listener(this.__fl,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.addNativeListener(this._window,f,this.__fb,true);
qx.bom.Event.addNativeListener(this._window,g,this.__fc,true);
qx.bom.Event.addNativeListener(this._window,y,this.__fd,true);
},"mshtml":function(){this.__eY=qx.lang.Function.listener(this.__fq,this);
this.__fa=qx.lang.Function.listener(this.__fr,this);
this.__ff=qx.lang.Function.listener(this.__fm,this);
this.__fg=qx.lang.Function.listener(this.__fn,this);
this.__fe=qx.lang.Function.listener(this.__ft,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eY);
qx.bom.Event.addNativeListener(this._document,h,this.__fa);
qx.bom.Event.addNativeListener(this._document,b,this.__ff);
qx.bom.Event.addNativeListener(this._document,a,this.__fg);
qx.bom.Event.addNativeListener(this._document,d,this.__fe);
},"webkit":function(){this.__eY=qx.lang.Function.listener(this.__fq,this);
this.__fa=qx.lang.Function.listener(this.__fr,this);
this.__fg=qx.lang.Function.listener(this.__fn,this);
this.__fb=qx.lang.Function.listener(this.__fp,this);
this.__fc=qx.lang.Function.listener(this.__fo,this);
this.__fe=qx.lang.Function.listener(this.__ft,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.addNativeListener(this._document,d,this.__fe,false);
qx.bom.Event.addNativeListener(this._window,c,this.__fg,true);
qx.bom.Event.addNativeListener(this._window,f,this.__fb,true);
qx.bom.Event.addNativeListener(this._window,g,this.__fc,true);
},"opera":function(){this.__eY=qx.lang.Function.listener(this.__fq,this);
this.__fa=qx.lang.Function.listener(this.__fr,this);
this.__ff=qx.lang.Function.listener(this.__fm,this);
this.__fg=qx.lang.Function.listener(this.__fn,this);
qx.bom.Event.addNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.addNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.addNativeListener(this._window,z,this.__ff,true);
qx.bom.Event.addNativeListener(this._window,c,this.__fg,true);
}}),_stopObserver:qx.core.Environment.select(j,{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__fb,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__fc,true);
qx.bom.Event.removeNativeListener(this._window,y,this.__fd,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eY);
qx.bom.Event.removeNativeListener(this._document,h,this.__fa);
qx.bom.Event.removeNativeListener(this._document,b,this.__ff);
qx.bom.Event.removeNativeListener(this._document,a,this.__fg);
qx.bom.Event.removeNativeListener(this._document,d,this.__fe);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.removeNativeListener(this._document,d,this.__fe,false);
qx.bom.Event.removeNativeListener(this._window,c,this.__fg,true);
qx.bom.Event.removeNativeListener(this._window,f,this.__fb,true);
qx.bom.Event.removeNativeListener(this._window,g,this.__fc,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,i,this.__eY,true);
qx.bom.Event.removeNativeListener(this._document,h,this.__fa,true);
qx.bom.Event.removeNativeListener(this._window,z,this.__ff,true);
qx.bom.Event.removeNativeListener(this._window,c,this.__fg,true);
}}),__fl:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bb){var bc=qx.bom.Event.getTarget(bb);

if(!this.__fx(bc)){qx.bom.Event.preventDefault(bb);
}},"default":null})),__fm:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bd){this.__fk();
var bf=qx.bom.Event.getTarget(bd);
var be=this.__fv(bf);

if(be){this.setFocus(be);
}this.tryActivate(bf);
},"opera":function(bg){var bh=qx.bom.Event.getTarget(bg);

if(bh==this._document||bh==this._window){this.__fk();

if(this.__fh){this.setFocus(this.__fh);
delete this.__fh;
}
if(this.__fi){this.setActive(this.__fi);
delete this.__fi;
}}else{this.setFocus(bh);
this.tryActivate(bh);
if(!this.__fx(bh)){bh.selectionStart=0;
bh.selectionEnd=0;
}}},"default":null})),__fn:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bi){var bj=qx.bom.Event.getRelatedTarget(bi);
if(bj==null){this.__fj();
this.resetFocus();
this.resetActive();
}},"webkit":function(bk){var bl=qx.bom.Event.getTarget(bk);

if(bl===this.getFocus()){this.resetFocus();
}
if(bl===this.getActive()){this.resetActive();
}},"opera":function(bm){var bn=qx.bom.Event.getTarget(bm);

if(bn==this._document){this.__fj();
this.__fh=this.getFocus();
this.__fi=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(bn===this.getFocus()){this.resetFocus();
}
if(bn===this.getActive()){this.resetActive();
}}},"default":null})),__fo:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bo){var bp=qx.bom.Event.getTarget(bo);

if(bp===this._window||bp===this._document){this.__fj();
this.resetActive();
this.resetFocus();
}},"webkit":function(bq){var br=qx.bom.Event.getTarget(bq);

if(br===this._window||br===this._document){this.__fj();
this.__fh=this.getFocus();
this.__fi=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__fp:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bs){var bt=qx.bom.Event.getTarget(bs);

if(bt===this._window||bt===this._document){this.__fk();
bt=this._body;
}this.setFocus(bt);
this.tryActivate(bt);
},"webkit":function(bu){var bv=qx.bom.Event.getTarget(bu);

if(bv===this._window||bv===this._document){this.__fk();

if(this.__fh){this.setFocus(this.__fh);
delete this.__fh;
}
if(this.__fi){this.setActive(this.__fi);
delete this.__fi;
}}else{this.setFocus(bv);
this.tryActivate(bv);
}},"default":null})),__fq:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"gecko":function(bw){var by=qx.bom.Event.getTarget(bw);
var bx=this.__fv(by);

if(!bx){qx.bom.Event.preventDefault(bw);
}else if(bx===this._body){this.setFocus(bx);
}},"mshtml":function(bz){var bB=qx.bom.Event.getTarget(bz);
var bA=this.__fv(bB);

if(bA){if(!this.__fx(bB)){bB.unselectable=e;
try{document.selection.empty();
}catch(bC){}try{bA.focus();
}catch(bD){}}}else{qx.bom.Event.preventDefault(bz);
if(!this.__fx(bB)){bB.unselectable=e;
}}},"webkit":function(bE){var bG=qx.bom.Event.getTarget(bE);
var bF=this.__fv(bG);

if(bF){this.setFocus(bF);
}else{qx.bom.Event.preventDefault(bE);
}},"opera":function(bH){var bK=qx.bom.Event.getTarget(bH);
var bI=this.__fv(bK);

if(!this.__fx(bK)){qx.bom.Event.preventDefault(bH);
if(bI){var bJ=this.getFocus();

if(bJ&&bJ.selectionEnd){bJ.selectionStart=0;
bJ.selectionEnd=0;
bJ.blur();
}if(bI){this.setFocus(bI);
}}}else if(bI){this.setFocus(bI);
}},"default":null})),__fr:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml":function(bL){var bM=qx.bom.Event.getTarget(bL);

if(bM.unselectable){bM.unselectable=p;
}this.tryActivate(this.__fs(bM));
},"gecko":function(bN){var bO=qx.bom.Event.getTarget(bN);

while(bO&&bO.offsetWidth===undefined){bO=bO.parentNode;
}
if(bO){this.tryActivate(bO);
}},"webkit|opera":function(bP){var bQ=qx.bom.Event.getTarget(bP);
this.tryActivate(this.__fs(bQ));
},"default":null})),__fs:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bR){var bS=this.getFocus();

if(bS&&bR!=bS&&(bS.nodeName.toLowerCase()===r||bS.nodeName.toLowerCase()===u)){bR=bS;
}return bR;
},"default":function(bT){return bT;
}})),__ft:qx.event.GlobalError.observeMethod(qx.core.Environment.select(j,{"mshtml|webkit":function(bU){var bV=qx.bom.Event.getTarget(bU);

if(!this.__fx(bV)){qx.bom.Event.preventDefault(bU);
}},"default":null})),__fu:function(bW){var bX=qx.bom.element.Attribute.get(bW,o);

if(bX>=1){return true;
}var bY=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(bX>=0&&bY[bW.tagName]){return true;
}return false;
},__fv:function(ca){while(ca&&ca.nodeType===1){if(ca.getAttribute(k)==e){return null;
}
if(this.__fu(ca)){return ca;
}ca=ca.parentNode;
}return this._body;
},__fw:function(cb){var cc=cb;

while(cb&&cb.nodeType===1){if(cb.getAttribute(l)==e){return null;
}cb=cb.parentNode;
}return cc;
},__fx:function(cd){while(cd&&cd.nodeType===1){var ce=cd.getAttribute(q);

if(ce!=null){return ce===e;
}cd=cd.parentNode;
}return true;
},_applyActive:function(cf,cg){if(cg){this.__cA(cg,cf,v,true);
}
if(cf){this.__cA(cf,cg,m,true);
}},_applyFocus:function(ch,ci){if(ci){this.__cA(ci,ch,a,true);
}
if(ch){this.__cA(ch,ci,b,true);
}if(ci){this.__cA(ci,ch,g,false);
}
if(ch){this.__cA(ch,ci,f,false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__fy=null;
},defer:function(cj){qx.event.Registration.addHandler(cj);
var ck=cj.FOCUSABLE_ELEMENTS;

for(var cl in ck){ck[cl.toUpperCase()]=1;
}}});
})();
(function(){var k="engine.name",j="character",i="EndToEnd",h="input",g="StartToStart",f="textarea",e='character',d="qx.bom.Selection",c="button",b="#text",a="body";
qx.Class.define(d,{statics:{getSelectionObject:qx.core.Environment.select(k,{"mshtml":function(l){return l.selection;
},"default":function(m){return qx.dom.Node.getWindow(m).getSelection();
}}),get:qx.core.Environment.select(k,{"mshtml":function(n){var o=qx.bom.Range.get(qx.dom.Node.getDocument(n));
return o.text;
},"default":function(p){if(this.__fz(p)){return p.value.substring(p.selectionStart,p.selectionEnd);
}else{return this.getSelectionObject(qx.dom.Node.getDocument(p)).toString();
}}}),getLength:qx.core.Environment.select(k,{"mshtml":function(q){var s=this.get(q);
var r=qx.util.StringSplit.split(s,/\r\n/);
return s.length-(r.length-1);
},"opera":function(t){var y,w,u;

if(this.__fz(t)){var x=t.selectionStart;
var v=t.selectionEnd;
y=t.value.substring(x,v);
w=v-x;
}else{y=qx.bom.Selection.get(t);
w=y.length;
}u=qx.util.StringSplit.split(y,/\r\n/);
return w-(u.length-1);
},"default":function(z){if(this.__fz(z)){return z.selectionEnd-z.selectionStart;
}else{return this.get(z).length;
}}}),getStart:qx.core.Environment.select(k,{"mshtml":function(A){if(this.__fz(A)){var F=qx.bom.Range.get();
if(!A.contains(F.parentElement())){return -1;
}var G=qx.bom.Range.get(A);
var E=A.value.length;
G.moveToBookmark(F.getBookmark());
G.moveEnd(e,E);
return E-G.text.length;
}else{var G=qx.bom.Range.get(A);
var C=G.parentElement();
var H=qx.bom.Range.get();

try{H.moveToElementText(C);
}catch(J){return 0;
}var B=qx.bom.Range.get(qx.dom.Node.getBodyElement(A));
B.setEndPoint(g,G);
B.setEndPoint(i,H);
if(H.compareEndPoints(g,B)==0){return 0;
}var D;
var I=0;

while(true){D=B.moveStart(j,-1);
if(H.compareEndPoints(g,B)==0){break;
}if(D==0){break;
}else{I++;
}}return ++I;
}},"gecko|webkit":function(K){if(this.__fz(K)){return K.selectionStart;
}else{var M=qx.dom.Node.getDocument(K);
var L=this.getSelectionObject(M);
if(L.anchorOffset<L.focusOffset){return L.anchorOffset;
}else{return L.focusOffset;
}}},"default":function(N){if(this.__fz(N)){return N.selectionStart;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(N)).anchorOffset;
}}}),getEnd:qx.core.Environment.select(k,{"mshtml":function(O){if(this.__fz(O)){var T=qx.bom.Range.get();
if(!O.contains(T.parentElement())){return -1;
}var U=qx.bom.Range.get(O);
var S=O.value.length;
U.moveToBookmark(T.getBookmark());
U.moveStart(e,-S);
return U.text.length;
}else{var U=qx.bom.Range.get(O);
var Q=U.parentElement();
var V=qx.bom.Range.get();

try{V.moveToElementText(Q);
}catch(X){return 0;
}var S=V.text.length;
var P=qx.bom.Range.get(qx.dom.Node.getBodyElement(O));
P.setEndPoint(i,U);
P.setEndPoint(g,V);
if(V.compareEndPoints(i,P)==0){return S-1;
}var R;
var W=0;

while(true){R=P.moveEnd(j,1);
if(V.compareEndPoints(i,P)==0){break;
}if(R==0){break;
}else{W++;
}}return S-(++W);
}},"gecko|webkit":function(Y){if(this.__fz(Y)){return Y.selectionEnd;
}else{var bb=qx.dom.Node.getDocument(Y);
var ba=this.getSelectionObject(bb);
if(ba.focusOffset>ba.anchorOffset){return ba.focusOffset;
}else{return ba.anchorOffset;
}}},"default":function(bc){if(this.__fz(bc)){return bc.selectionEnd;
}else{return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bc)).focusOffset;
}}}),__fz:function(bd){return qx.dom.Node.isElement(bd)&&(bd.nodeName.toLowerCase()==h||bd.nodeName.toLowerCase()==f);
},set:qx.core.Environment.select(k,{"mshtml":function(be,bf,bg){var bh;
if(qx.dom.Node.isDocument(be)){be=be.body;
}
if(qx.dom.Node.isElement(be)||qx.dom.Node.isText(be)){switch(be.nodeName.toLowerCase()){case h:case f:case c:if(bg===undefined){bg=be.value.length;
}
if(bf>=0&&bf<=be.value.length&&bg>=0&&bg<=be.value.length){bh=qx.bom.Range.get(be);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
case b:if(bg===undefined){bg=be.nodeValue.length;
}
if(bf>=0&&bf<=be.nodeValue.length&&bg>=0&&bg<=be.nodeValue.length){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.parentNode);
bh.collapse(true);
bh.moveStart(j,bf);
bh.moveEnd(j,bg-bf);
bh.select();
return true;
}break;
default:if(bg===undefined){bg=be.childNodes.length-1;
}if(be.childNodes[bf]&&be.childNodes[bg]){bh=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bh.moveToElementText(be.childNodes[bf]);
bh.collapse(true);
var bi=qx.bom.Range.get(qx.dom.Node.getBodyElement(be));
bi.moveToElementText(be.childNodes[bg]);
bh.setEndPoint(i,bi);
bh.select();
return true;
}}}return false;
},"default":function(bj,bk,bl){var bp=bj.nodeName.toLowerCase();

if(qx.dom.Node.isElement(bj)&&(bp==h||bp==f)){if(bl===undefined){bl=bj.value.length;
}if(bk>=0&&bk<=bj.value.length&&bl>=0&&bl<=bj.value.length){bj.focus();
bj.select();
bj.setSelectionRange(bk,bl);
return true;
}}else{var bn=false;
var bo=qx.dom.Node.getWindow(bj).getSelection();
var bm=qx.bom.Range.get(bj);
if(qx.dom.Node.isText(bj)){if(bl===undefined){bl=bj.length;
}
if(bk>=0&&bk<bj.length&&bl>=0&&bl<=bj.length){bn=true;
}}else if(qx.dom.Node.isElement(bj)){if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}else if(qx.dom.Node.isDocument(bj)){bj=bj.body;

if(bl===undefined){bl=bj.childNodes.length-1;
}
if(bk>=0&&bj.childNodes[bk]&&bl>=0&&bj.childNodes[bl]){bn=true;
}}
if(bn){if(!bo.isCollapsed){bo.collapseToStart();
}bm.setStart(bj,bk);
if(qx.dom.Node.isText(bj)){bm.setEnd(bj,bl);
}else{bm.setEndAfter(bj.childNodes[bl]);
}if(bo.rangeCount>0){bo.removeAllRanges();
}bo.addRange(bm);
return true;
}}return false;
}}),setAll:function(bq){return qx.bom.Selection.set(bq,0);
},clear:qx.core.Environment.select(k,{"mshtml":function(br){var bs=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(br));
var bt=qx.bom.Range.get(br);
var parent=bt.parentElement();
var bu=qx.bom.Range.get(qx.dom.Node.getDocument(br));
if(parent==bu.parentElement()&&parent==br){bs.empty();
}},"default":function(bv){var bx=qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(bv));
var bz=bv.nodeName.toLowerCase();
if(qx.dom.Node.isElement(bv)&&(bz==h||bz==f)){bv.setSelectionRange(0,0);
qx.bom.Element.blur(bv);
}else if(qx.dom.Node.isDocument(bv)||bz==a){bx.collapse(bv.body?bv.body:bv,0);
}else{var by=qx.bom.Range.get(bv);

if(!by.collapsed){var bA;
var bw=by.commonAncestorContainer;
if(qx.dom.Node.isElement(bv)&&qx.dom.Node.isText(bw)){bA=bw.parentNode;
}else{bA=bw;
}
if(bA==bv){bx.collapse(bv,0);
}}}}})}});
})();
(function(){var l="button",k="qx.bom.Range",j="text",i="engine.name",h="password",g="file",f="submit",e="reset",d="textarea",c="input",a="hidden",b="body";
qx.Class.define(k,{statics:{get:qx.core.Environment.select(i,{"mshtml":function(m){if(qx.dom.Node.isElement(m)){switch(m.nodeName.toLowerCase()){case c:switch(m.type){case j:case h:case a:case l:case e:case g:case f:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}break;
case d:case b:case l:return m.createTextRange();
break;
default:return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}}else{if(m==null){m=window;
}return qx.bom.Selection.getSelectionObject(qx.dom.Node.getDocument(m)).createRange();
}},"default":function(n){var o=qx.dom.Node.getDocument(n);
var p=qx.bom.Selection.getSelectionObject(o);

if(p.rangeCount>0){return p.getRangeAt(0);
}else{return o.createRange();
}}})}});
})();
(function(){var j="",h="m",g="g",f="^",e="qx.util.StringSplit",d="i",c="$(?!\\s)",b="[object RegExp]",a="y";
qx.Class.define(e,{statics:{split:function(k,l,m){if(Object.prototype.toString.call(l)!==b){return String.prototype.split.call(k,l,m);
}var t=[],n=0,r=(l.ignoreCase?d:j)+(l.multiline?h:j)+(l.sticky?a:j),l=RegExp(l.source,r+g),q,u,o,p,s=/()??/.exec(j)[1]===undefined;
k=k+j;

if(!s){q=RegExp(f+l.source+c,r);
}if(m===undefined||+m<0){m=Infinity;
}else{m=Math.floor(+m);

if(!m){return [];
}}
while(u=l.exec(k)){o=u.index+u[0].length;

if(o>n){t.push(k.slice(n,u.index));
if(!s&&u.length>1){u[0].replace(q,function(){for(var i=1;i<arguments.length-2;i++){if(arguments[i]===undefined){u[i]=undefined;
}}});
}
if(u.length>1&&u.index<k.length){Array.prototype.push.apply(t,u.slice(1));
}p=u[0].length;
n=o;

if(t.length>=m){break;
}}
if(l.lastIndex===u.index){l.lastIndex++;
}}
if(n===k.length){if(p||!l.test(j)){t.push(j);
}}else{t.push(k.slice(n));
}return t.length>m?t.slice(0,m):t;
}}});
})();
(function(){var k="alias",j="copy",i="blur",h="mouseout",g="keydown",f="Control",d="Shift",c="mousemove",b="move",a="mouseover",C="Alt",B="keyup",A="mouseup",z="keypress",y="dragend",x="on",w="mousedown",v="qxDraggable",u="Escape",t="drag",r="drop",s="qxDroppable",p="qx.event.handler.DragDrop",q="droprequest",n="dragstart",o="dragchange",l="dragleave",m="dragover";
qx.Class.define(p,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(D){qx.core.Object.call(this);
this.__x=D;
this.__cq=D.getWindow().document.documentElement;
this.__x.addListener(this.__cq,w,this._onMouseDown,this);
this.__hV();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{dragstart:1,dragend:1,dragover:1,dragleave:1,drop:1,drag:1,dragchange:1,droprequest:1},IGNORE_CAN_HANDLE:true},members:{__x:null,__cq:null,__hM:null,__hN:null,__C:null,__hO:null,__hP:null,__cJ:null,__hQ:null,__hR:null,__hS:false,__hT:0,__hU:0,canHandleEvent:function(E,F){},registerEvent:function(G,H,I){},unregisterEvent:function(J,K,L){},addType:function(M){this.__C[M]=true;
},addAction:function(N){this.__hO[N]=true;
},supportsType:function(O){return !!this.__C[O];
},supportsAction:function(P){return !!this.__hO[P];
},getData:function(Q){if(!this.__ic||!this.__hM){throw new Error("This method must not be used outside the drop event listener!");
}
if(!this.__C[Q]){throw new Error("Unsupported data type: "+Q+"!");
}
if(!this.__cJ[Q]){this.__hQ=Q;
this.__cA(q,this.__hN,this.__hM,false);
}
if(!this.__cJ[Q]){throw new Error("Please use a droprequest listener to the drag source to fill the manager with data!");
}return this.__cJ[Q]||null;
},getCurrentAction:function(){return this.__hR;
},addData:function(R,S){this.__cJ[R]=S;
},getCurrentType:function(){return this.__hQ;
},isSessionActive:function(){return this.__hS;
},__hV:function(){this.__C={};
this.__hO={};
this.__hP={};
this.__cJ={};
},__hW:function(){if(this.__hN==null){return;
}var V=this.__hO;
var T=this.__hP;
var U=null;

if(this.__ic){if(T.Shift&&T.Control&&V.alias){U=k;
}else if(T.Shift&&T.Alt&&V.copy){U=j;
}else if(T.Shift&&V.move){U=b;
}else if(T.Alt&&V.alias){U=k;
}else if(T.Control&&V.copy){U=j;
}else if(V.move){U=b;
}else if(V.copy){U=j;
}else if(V.alias){U=k;
}}
if(U!=this.__hR){this.__hR=U;
this.__cA(o,this.__hN,this.__hM,false);
}},__cA:function(W,X,Y,ba,bb){var bd=qx.event.Registration;
var bc=bd.createEvent(W,qx.event.type.Drag,[ba,bb]);

if(X!==Y){bc.setRelatedTarget(Y);
}return bd.dispatchEvent(X,bc);
},__hX:function(be){while(be&&be.nodeType==1){if(be.getAttribute(v)==x){return be;
}be=be.parentNode;
}return null;
},__hY:function(bf){while(bf&&bf.nodeType==1){if(bf.getAttribute(s)==x){return bf;
}bf=bf.parentNode;
}return null;
},__ia:function(){this.__hN=null;
this.__x.removeListener(this.__cq,c,this._onMouseMove,this,true);
this.__x.removeListener(this.__cq,A,this._onMouseUp,this,true);
qx.event.Registration.removeListener(window,i,this._onWindowBlur,this);
this.__hV();
},__ib:function(){if(this.__hS){this.__x.removeListener(this.__cq,a,this._onMouseOver,this,true);
this.__x.removeListener(this.__cq,h,this._onMouseOut,this,true);
this.__x.removeListener(this.__cq,g,this._onKeyDown,this,true);
this.__x.removeListener(this.__cq,B,this._onKeyUp,this,true);
this.__x.removeListener(this.__cq,z,this._onKeyPress,this,true);
this.__cA(y,this.__hN,this.__hM,false);
this.__hS=false;
}this.__ic=false;
this.__hM=null;
this.__ia();
},__ic:false,_onWindowBlur:function(e){this.__ib();
},_onKeyDown:function(e){var bg=e.getKeyIdentifier();

switch(bg){case C:case f:case d:if(!this.__hP[bg]){this.__hP[bg]=true;
this.__hW();
}}},_onKeyUp:function(e){var bh=e.getKeyIdentifier();

switch(bh){case C:case f:case d:if(this.__hP[bh]){this.__hP[bh]=false;
this.__hW();
}}},_onKeyPress:function(e){var bi=e.getKeyIdentifier();

switch(bi){case u:this.__ib();
}},_onMouseDown:function(e){if(this.__hS){return;
}var bj=this.__hX(e.getTarget());

if(bj){this.__hT=e.getDocumentLeft();
this.__hU=e.getDocumentTop();
this.__hN=bj;
this.__x.addListener(this.__cq,c,this._onMouseMove,this,true);
this.__x.addListener(this.__cq,A,this._onMouseUp,this,true);
qx.event.Registration.addListener(window,i,this._onWindowBlur,this);
}},_onMouseUp:function(e){if(this.__ic){this.__cA(r,this.__hM,this.__hN,false,e);
}if(this.__hS){e.stopPropagation();
}this.__ib();
},_onMouseMove:function(e){if(this.__hS){if(!this.__cA(t,this.__hN,this.__hM,true,e)){this.__ib();
}}else{if(Math.abs(e.getDocumentLeft()-this.__hT)>3||Math.abs(e.getDocumentTop()-this.__hU)>3){if(this.__cA(n,this.__hN,this.__hM,true,e)){this.__hS=true;
this.__x.addListener(this.__cq,a,this._onMouseOver,this,true);
this.__x.addListener(this.__cq,h,this._onMouseOut,this,true);
this.__x.addListener(this.__cq,g,this._onKeyDown,this,true);
this.__x.addListener(this.__cq,B,this._onKeyUp,this,true);
this.__x.addListener(this.__cq,z,this._onKeyPress,this,true);
var bk=this.__hP;
bk.Control=e.isCtrlPressed();
bk.Shift=e.isShiftPressed();
bk.Alt=e.isAltPressed();
this.__hW();
}else{this.__cA(y,this.__hN,this.__hM,false);
this.__ia();
}}}},_onMouseOver:function(e){var bl=e.getTarget();
var bm=this.__hY(bl);

if(bm&&bm!=this.__hM){this.__ic=this.__cA(m,bm,this.__hN,true,e);
this.__hM=bm;
this.__hW();
}},_onMouseOut:function(e){var bo=this.__hY(e.getTarget());
var bn=this.__hY(e.getRelatedTarget());

if(bo&&bo!==bn&&bo==this.__hM){this.__cA(l,this.__hM,bn,false,e);
this.__hM=null;
this.__ic=false;
qx.event.Timer.once(this.__hW,this,0);
}}},destruct:function(){this.__hN=this.__hM=this.__x=this.__cq=this.__C=this.__hO=this.__hP=this.__cJ=null;
},defer:function(bp){qx.event.Registration.addHandler(bp);
}});
})();
(function(){var a="qx.event.type.Drag";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c){qx.event.type.Event.prototype.init.call(this,true,b);

if(c){this._native=c.getNativeEvent()||null;
this._originalTarget=c.getTarget()||null;
}else{this._native=null;
this._originalTarget=null;
}return this;
},clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e._native=this._native;
return e;
},getDocumentLeft:function(){if(this._native==null){return 0;
}
if(this._native.pageX!==undefined){return this._native.pageX;
}else{var f=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(f);
}},getDocumentTop:function(){if(this._native==null){return 0;
}
if(this._native.pageY!==undefined){return this._native.pageY;
}else{var g=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(g);
}},getManager:function(){return qx.event.Registration.getManager(this.getTarget()).getHandler(qx.event.handler.DragDrop);
},addType:function(h){this.getManager().addType(h);
},addAction:function(i){this.getManager().addAction(i);
},supportsType:function(j){return this.getManager().supportsType(j);
},supportsAction:function(k){return this.getManager().supportsAction(k);
},addData:function(l,m){this.getManager().addData(l,m);
},getData:function(n){return this.getManager().getData(n);
},getCurrentType:function(){return this.getManager().getCurrentType();
},getCurrentAction:function(){return this.getManager().getCurrentAction();
}}});
})();
(function(){var h="interval",g="qx.event.Timer",f="_applyInterval",d="_applyEnabled",c="Boolean",b="qx.event.type.Event",a="Integer";
qx.Class.define(g,{extend:qx.core.Object,construct:function(i){qx.core.Object.call(this);
this.setEnabled(false);

if(i!=null){this.setInterval(i);
}var self=this;
this.__eh=function(){self._oninterval.call(self);
};
},events:{"interval":b},statics:{once:function(j,k,l){var m=new qx.event.Timer(l);
m.__ei=j;
m.addListener(h,function(e){m.stop();
j.call(k,e);
m.dispose();
k=null;
},k);
m.start();
return m;
}},properties:{enabled:{init:true,check:c,apply:d},interval:{check:a,init:1000,apply:f}},members:{__ej:null,__eh:null,_applyInterval:function(n,o){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(p,q){if(q){window.clearInterval(this.__ej);
this.__ej=null;
}else if(p){this.__ej=window.setInterval(this.__eh,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(r){this.setInterval(r);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(s){this.stop();
this.startWith(s);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent(h);
}})},destruct:function(){if(this.__ej){window.clearInterval(this.__ej);
}this.__ej=this.__eh=null;
}});
})();
(function(){var r="engine.name",q="mshtml",p="",o=" ",n=">",m="<",k="='",h="none",g="<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>",f="qx.bom.Element",b="webkit",d="' ",c="div",a="></";
qx.Class.define(f,{statics:{__lp:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__lq:{},__lr:{},allowCreationWithMarkup:function(s){if(!s){s=window;
}var t=s.location.href;

if(qx.bom.Element.__lr[t]==undefined){try{s.document.createElement(g);
qx.bom.Element.__lr[t]=true;
}catch(e){qx.bom.Element.__lr[t]=false;
}}return qx.bom.Element.__lr[t];
},getHelperElement:function(u){if(!u){u=window;
}var w=u.location.href;

if(!qx.bom.Element.__lq[w]){var v=qx.bom.Element.__lq[w]=u.document.createElement(c);
if(qx.core.Environment.get(r)==b){v.style.display=h;
u.document.body.appendChild(v);
}}return qx.bom.Element.__lq[w];
},create:function(name,x,y){if(!y){y=window;
}
if(!name){throw new Error("The tag name is missing!");
}var A=this.__lp;
var z=p;

for(var C in x){if(A[C]){z+=C+k+x[C]+d;
}}var D;
if(z!=p){if(qx.bom.Element.allowCreationWithMarkup(y)){D=y.document.createElement(m+name+o+z+n);
}else{var B=qx.bom.Element.getHelperElement(y);
B.innerHTML=m+name+o+z+a+name+n;
D=B.firstChild;
}}else{D=y.document.createElement(name);
}
for(var C in x){if(!A[C]){qx.bom.element.Attribute.set(D,C,x[C]);
}}return D;
},empty:function(E){return E.innerHTML=p;
},addListener:function(F,G,H,self,I){return qx.event.Registration.addListener(F,G,H,self,I);
},removeListener:function(J,K,L,self,M){return qx.event.Registration.removeListener(J,K,L,self,M);
},removeListenerById:function(N,O){return qx.event.Registration.removeListenerById(N,O);
},hasListener:function(P,Q,R){return qx.event.Registration.hasListener(P,Q,R);
},focus:function(S){qx.event.Registration.getManager(S).getHandler(qx.event.handler.Focus).focus(S);
},blur:function(T){qx.event.Registration.getManager(T).getHandler(qx.event.handler.Focus).blur(T);
},activate:function(U){qx.event.Registration.getManager(U).getHandler(qx.event.handler.Focus).activate(U);
},deactivate:function(V){qx.event.Registration.getManager(V).getHandler(qx.event.handler.Focus).deactivate(V);
},capture:function(W,X){qx.event.Registration.getManager(W).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(W,X);
},releaseCapture:function(Y){qx.event.Registration.getManager(Y).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(Y);
},matchesSelector:function(ba,bb){if(bb){return qx.bom.Selector.query(bb,ba.parentNode).length>0;
}else{return false;
}},clone:function(bc,bd){var bg;

if(bd||((qx.core.Environment.get(r)==q)&&!qx.xml.Document.isXmlDocument(bc))){var bk=qx.event.Registration.getManager(bc);
var be=qx.dom.Hierarchy.getDescendants(bc);
be.push(bc);
}if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],false);
}}var bg=bc.cloneNode(true);
if((qx.core.Environment.get(r)==q)){for(var i=0,l=be.length;i<l;i++){bk.toggleAttachedEvents(be[i],true);
}}if(bd===true){var bn=qx.dom.Hierarchy.getDescendants(bg);
bn.push(bg);
var bf,bi,bm,bh;

for(var i=0,bl=be.length;i<bl;i++){bm=be[i];
bf=bk.serializeListeners(bm);

if(bf.length>0){bi=bn[i];

for(var j=0,bj=bf.length;j<bj;j++){bh=bf[j];
bk.addListener(bi,bh.type,bh.handler,bh.self,bh.capture);
}}}}return bg;
}}});
})();
(function(){var i="engine.name",h="losecapture",g="mshtml",f="blur",e="focus",d="click",c="qx.event.dispatch.MouseCapture",b="capture",a="scroll";
qx.Class.define(c,{extend:qx.event.dispatch.AbstractBubbling,construct:function(j,k){qx.event.dispatch.AbstractBubbling.call(this,j);
this.__cp=j.getWindow();
this.__cW=k;
j.addListener(this.__cp,f,this.releaseCapture,this);
j.addListener(this.__cp,e,this.releaseCapture,this);
j.addListener(this.__cp,a,this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__cW:null,__cX:null,__cY:true,__cp:null,_getParent:function(l){return l.parentNode;
},canDispatchEvent:function(m,event,n){return !!(this.__cX&&this.__da[n]);
},dispatchEvent:function(o,event,p){if(p==d){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__cY||!qx.dom.Hierarchy.contains(this.__cX,o)){o=this.__cX;
}qx.event.dispatch.AbstractBubbling.prototype.dispatchEvent.call(this,o,event,p);
},__da:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(q,r){var r=r!==false;

if(this.__cX===q&&this.__cY==r){return;
}
if(this.__cX){this.releaseCapture();
}this.nativeSetCapture(q,r);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(q,h,function(){qx.bom.Event.removeNativeListener(q,h,arguments.callee);
self.releaseCapture();
});
}this.__cY=r;
this.__cX=q;
this.__cW.fireEvent(q,b,qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__cX;
},releaseCapture:function(){var s=this.__cX;

if(!s){return;
}this.__cX=null;
this.__cW.fireEvent(s,h,qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(s);
},hasNativeCapture:qx.core.Environment.get(i)==g,nativeSetCapture:qx.core.Environment.select(i,{"mshtml":function(t,u){t.setCapture(u!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select(i,{"mshtml":function(v){v.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__cX=this.__cp=this.__cW=null;
},defer:function(w){qx.event.Registration.addDispatcher(w);
}});
})();
(function(){var a="qx.event.handler.Window";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(b){qx.core.Object.call(this);
this._manager=b;
this._window=b.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(c,d){},registerEvent:function(f,g,h){},unregisterEvent:function(i,j,k){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var m=qx.event.handler.Window.SUPPORTED_TYPES;

for(var l in m){qx.bom.Event.addNativeListener(this._window,l,this._onNativeWrapper);
}},_stopWindowObserver:function(){var o=qx.event.handler.Window.SUPPORTED_TYPES;

for(var n in o){qx.bom.Event.removeNativeListener(this._window,n,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var q=this._window;

try{var t=q.document;
}catch(e){return ;
}var r=t.documentElement;
var p=qx.bom.Event.getTarget(e);

if(p==null||p===q||p===t||p===r){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,q]);
qx.event.Registration.dispatchEvent(q,event);
var s=event.getReturnValue();

if(s!=null){e.returnValue=s;
return s;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(u){qx.event.Registration.addHandler(u);
}});
})();
(function(){var c="qx.bom.Selector";
qx.Class.define(c,{statics:{query:null,matches:null}});
(function(){var o=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,v=0,x=Object.prototype.toString,p=false,z=true,t=/\\/g,g=/\W/;
[0,0].sort(function(){z=false;
return 0;
});
var s=function(B,C,D,E){D=D||[];
C=C||document;
var N=C;

if(C.nodeType!==1&&C.nodeType!==9){return [];
}
if(!B||typeof B!=="string"){return D;
}var m,H,F,J,L,I,O,i,P=true,G=s.isXML(C),K=[],M=B;
do{o.exec("");
m=o.exec(M);

if(m){M=m[3];
K.push(m[1]);

if(m[2]){J=m[3];
break;
}}}while(m);

if(K.length>1&&q.exec(B)){if(K.length===2&&k.relative[K[0]]){H=h(K[0]+K[1],C);
}else{H=k.relative[K[0]]?[C]:s(K.shift(),C);

while(K.length){B=K.shift();

if(k.relative[B]){B+=K.shift();
}H=h(B,H);
}}}else{if(!E&&K.length>1&&C.nodeType===9&&!G&&k.match.ID.test(K[0])&&!k.match.ID.test(K[K.length-1])){L=s.find(K.shift(),C,G);
C=L.expr?s.filter(L.expr,L.set)[0]:L.set[0];
}
if(C){L=E?{expr:K.pop(),set:f(E)}:s.find(K.pop(),K.length===1&&(K[0]==="~"||K[0]==="+")&&C.parentNode?C.parentNode:C,G);
H=L.expr?s.filter(L.expr,L.set):L.set;

if(K.length>0){F=f(H);
}else{P=false;
}
while(K.length){I=K.pop();
O=I;

if(!k.relative[I]){I="";
}else{O=K.pop();
}
if(O==null){O=C;
}k.relative[I](F,O,G);
}}else{F=K=[];
}}
if(!F){F=H;
}
if(!F){s.error(I||B);
}
if(x.call(F)==="[object Array]"){if(!P){D.push.apply(D,F);
}else if(C&&C.nodeType===1){for(i=0;F[i]!=null;i++){if(F[i]&&(F[i]===true||F[i].nodeType===1&&s.contains(C,F[i]))){D.push(H[i]);
}}}else{for(i=0;F[i]!=null;i++){if(F[i]&&F[i].nodeType===1){D.push(H[i]);
}}}}else{f(F,D);
}
if(J){s(J,N,D,E);
s.uniqueSort(D);
}return D;
};
s.uniqueSort=function(Q){if(u){p=z;
Q.sort(u);

if(p){for(var i=1;i<Q.length;i++){if(Q[i]===Q[i-1]){Q.splice(i--,1);
}}}}return Q;
};
s.matches=function(R,S){return s(R,null,null,S);
};
s.matchesSelector=function(T,U){return s(U,null,null,[T]).length>0;
};
s.find=function(V,W,X){var Y;

if(!V){return [];
}
for(var i=0,l=k.order.length;i<l;i++){var bb,ba=k.order[i];

if((bb=k.leftMatch[ba].exec(V))){var bc=bb[1];
bb.splice(1,1);

if(bc.substr(bc.length-1)!=="\\"){bb[1]=(bb[1]||"").replace(t,"");
Y=k.find[ba](bb,W,X);

if(Y!=null){V=V.replace(k.match[ba],"");
break;
}}}}
if(!Y){Y=typeof W.getElementsByTagName!=="undefined"?W.getElementsByTagName("*"):[];
}return {set:Y,expr:V};
};
s.filter=function(bd,be,bf,bg){var bt,bs,bh=bd,bn=[],bi=be,bj=be&&be[0]&&s.isXML(be[0]);

while(bd&&be.length){for(var br in k.filter){if((bt=k.leftMatch[br].exec(bd))!=null&&bt[2]){var bq,bm,bk=k.filter[br],bu=bt[1];
bs=false;
bt.splice(1,1);

if(bu.substr(bu.length-1)==="\\"){continue;
}
if(bi===bn){bn=[];
}
if(k.preFilter[br]){bt=k.preFilter[br](bt,bi,bf,bn,bg,bj);

if(!bt){bs=bq=true;
}else if(bt===true){continue;
}}
if(bt){for(var i=0;(bm=bi[i])!=null;i++){if(bm){bq=bk(bm,bt,i,bi);
var bo=bg^!!bq;

if(bf&&bq!=null){if(bo){bs=true;
}else{bi[i]=false;
}}else if(bo){bn.push(bm);
bs=true;
}}}}
if(bq!==undefined){if(!bf){bi=bn;
}bd=bd.replace(k.match[br],"");

if(!bs){return [];
}break;
}}}if(bd===bh){if(bs==null){s.error(bd);
}else{break;
}}bh=bd;
}return bi;
};
s.error=function(bv){throw "Syntax error, unrecognized expression: "+bv;
};
var k=s.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(bw){return bw.getAttribute("href");
},type:function(bx){return bx.getAttribute("type");
}},relative:{"+":function(by,bz){var bA=typeof bz==="string",bC=bA&&!g.test(bz),bD=bA&&!bC;

if(bC){bz=bz.toLowerCase();
}
for(var i=0,l=by.length,bB;i<l;i++){if((bB=by[i])){while((bB=bB.previousSibling)&&bB.nodeType!==1){}by[i]=bD||bB&&bB.nodeName.toLowerCase()===bz?bB||false:bB===bz;
}}
if(bD){s.filter(bz,by,true);
}},">":function(bE,bF){var bH,bG=typeof bF==="string",i=0,l=bE.length;

if(bG&&!g.test(bF)){bF=bF.toLowerCase();

for(;i<l;i++){bH=bE[i];

if(bH){var parent=bH.parentNode;
bE[i]=parent.nodeName.toLowerCase()===bF?parent:false;
}}}else{for(;i<l;i++){bH=bE[i];

if(bH){bE[i]=bG?bH.parentNode:bH.parentNode===bF;
}}
if(bG){s.filter(bF,bE,true);
}}},"":function(bI,bJ,bK){var bN,bL=v++,bM=y;

if(typeof bJ==="string"&&!g.test(bJ)){bJ=bJ.toLowerCase();
bN=bJ;
bM=A;
}bM("parentNode",bJ,bL,bI,bN,bK);
},"~":function(bO,bP,bQ){var bT,bR=v++,bS=y;

if(typeof bP==="string"&&!g.test(bP)){bP=bP.toLowerCase();
bT=bP;
bS=A;
}bS("previousSibling",bP,bR,bO,bT,bQ);
}},find:{ID:function(bU,bV,bW){if(typeof bV.getElementById!=="undefined"&&!bW){var m=bV.getElementById(bU[1]);
return m&&m.parentNode?[m]:[];
}},NAME:function(bX,bY){if(typeof bY.getElementsByName!=="undefined"){var cb=[],ca=bY.getElementsByName(bX[1]);

for(var i=0,l=ca.length;i<l;i++){if(ca[i].getAttribute("name")===bX[1]){cb.push(ca[i]);
}}return cb.length===0?null:cb;
}},TAG:function(cc,cd){if(typeof cd.getElementsByTagName!=="undefined"){return cd.getElementsByTagName(cc[1]);
}}},preFilter:{CLASS:function(ce,cf,cg,ch,ci,cj){ce=" "+ce[1].replace(t,"")+" ";

if(cj){return ce;
}
for(var i=0,ck;(ck=cf[i])!=null;i++){if(ck){if(ci^(ck.className&&(" "+ck.className+" ").replace(/[\t\n\r]/g," ").indexOf(ce)>=0)){if(!cg){ch.push(ck);
}}else if(cg){cf[i]=false;
}}}return false;
},ID:function(cl){return cl[1].replace(t,"");
},TAG:function(cm,cn){return cm[1].replace(t,"").toLowerCase();
},CHILD:function(co){if(co[1]==="nth"){if(!co[2]){s.error(co[0]);
}co[2]=co[2].replace(/^\+|\s*/g,'');
var cp=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(co[2]==="even"&&"2n"||co[2]==="odd"&&"2n+1"||!/\D/.test(co[2])&&"0n+"+co[2]||co[2]);
co[2]=(cp[1]+(cp[2]||1))-0;
co[3]=cp[3]-0;
}else if(co[2]){s.error(co[0]);
}co[0]=v++;
return co;
},ATTR:function(cq,cr,cs,ct,cu,cv){var name=cq[1]=cq[1].replace(t,"");

if(!cv&&k.attrMap[name]){cq[1]=k.attrMap[name];
}cq[4]=(cq[4]||cq[5]||"").replace(t,"");

if(cq[2]==="~="){cq[4]=" "+cq[4]+" ";
}return cq;
},PSEUDO:function(cw,cx,cy,cz,cA){if(cw[1]==="not"){if((o.exec(cw[3])||"").length>1||/^\w/.test(cw[3])){cw[3]=s(cw[3],null,null,cx);
}else{var cB=s.filter(cw[3],cx,cy,true^cA);

if(!cy){cz.push.apply(cz,cB);
}return false;
}}else if(k.match.POS.test(cw[0])||k.match.CHILD.test(cw[0])){return true;
}return cw;
},POS:function(cC){cC.unshift(true);
return cC;
}},filters:{enabled:function(cD){return cD.disabled===false&&cD.type!=="hidden";
},disabled:function(cE){return cE.disabled===true;
},checked:function(cF){return cF.checked===true;
},selected:function(cG){if(cG.parentNode){cG.parentNode.selectedIndex;
}return cG.selected===true;
},parent:function(cH){return !!cH.firstChild;
},empty:function(cI){return !cI.firstChild;
},has:function(cJ,i,cK){return !!s(cK[3],cJ).length;
},header:function(cL){return (/h\d/i).test(cL.nodeName);
},text:function(cM){return "text"===cM.getAttribute('type');
},radio:function(cN){return "radio"===cN.type;
},checkbox:function(cO){return "checkbox"===cO.type;
},file:function(cP){return "file"===cP.type;
},password:function(cQ){return "password"===cQ.type;
},submit:function(cR){return "submit"===cR.type;
},image:function(cS){return "image"===cS.type;
},reset:function(cT){return "reset"===cT.type;
},button:function(cU){return "button"===cU.type||cU.nodeName.toLowerCase()==="button";
},input:function(cV){return (/input|select|textarea|button/i).test(cV.nodeName);
}},setFilters:{first:function(cW,i){return i===0;
},last:function(cX,i,cY,da){return i===da.length-1;
},even:function(db,i){return i%2===0;
},odd:function(dc,i){return i%2===1;
},lt:function(dd,i,de){return i<de[3]-0;
},gt:function(df,i,dg){return i>dg[3]-0;
},nth:function(dh,i,di){return di[3]-0===i;
},eq:function(dj,i,dk){return dk[3]-0===i;
}},filter:{PSEUDO:function(dl,dm,i,dn){var name=dm[1],dp=k.filters[name];

if(dp){return dp(dl,i,dm,dn);
}else if(name==="contains"){return (dl.textContent||dl.innerText||s.getText([dl])||"").indexOf(dm[3])>=0;
}else if(name==="not"){var dq=dm[3];

for(var j=0,l=dq.length;j<l;j++){if(dq[j]===dl){return false;
}}return true;
}else{s.error(name);
}},CHILD:function(dr,ds){var dy=ds[1],dt=dr;

switch(dy){case "only":case "first":while((dt=dt.previousSibling)){if(dt.nodeType===1){return false;
}}
if(dy==="first"){return true;
}dt=dr;
case "last":while((dt=dt.nextSibling)){if(dt.nodeType===1){return false;
}}return true;
case "nth":var dz=ds[2],dv=ds[3];

if(dz===1&&dv===0){return true;
}var dx=ds[0],parent=dr.parentNode;

if(parent&&(parent.sizcache!==dx||!dr.nodeIndex)){var du=0;

for(dt=parent.firstChild;dt;dt=dt.nextSibling){if(dt.nodeType===1){dt.nodeIndex=++du;
}}parent.sizcache=dx;
}var dw=dr.nodeIndex-dv;

if(dz===0){return dw===0;
}else{return (dw%dz===0&&dw/dz>=0);
}}},ID:function(dA,dB){return dA.nodeType===1&&dA.getAttribute("id")===dB;
},TAG:function(dC,dD){return (dD==="*"&&dC.nodeType===1)||dC.nodeName.toLowerCase()===dD;
},CLASS:function(dE,dF){return (" "+(dE.className||dE.getAttribute("class"))+" ").indexOf(dF)>-1;
},ATTR:function(dG,dH){var name=dH[1],dL=k.attrHandle[name]?k.attrHandle[name](dG):dG[name]!=null?dG[name]:dG.getAttribute(name),dK=dL+"",dJ=dH[2],dI=dH[4];
return dL==null?dJ==="!=":dJ==="="?dK===dI:dJ==="*="?dK.indexOf(dI)>=0:dJ==="~="?(" "+dK+" ").indexOf(dI)>=0:!dI?dK&&dL!==false:dJ==="!="?dK!==dI:dJ==="^="?dK.indexOf(dI)===0:dJ==="$="?dK.substr(dK.length-dI.length)===dI:dJ==="|="?dK===dI||dK.substr(0,dI.length+1)===dI+"-":false;
},POS:function(dM,dN,i,dO){var name=dN[2],dP=k.setFilters[name];

if(dP){return dP(dM,i,dN,dO);
}}}};
var q=k.match.POS,d=function(dQ,dR){return "\\"+(dR-0+1);
};

for(var w in k.match){k.match[w]=new RegExp(k.match[w].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
k.leftMatch[w]=new RegExp(/(^(?:.|\r|\n)*?)/.source+k.match[w].source.replace(/\\(\d+)/g,d));
}var f=function(dS,dT){dS=Array.prototype.slice.call(dS,0);

if(dT){dT.push.apply(dT,dS);
return dT;
}return dS;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){f=function(dU,dV){var i=0,dW=dV||[];

if(x.call(dU)==="[object Array]"){Array.prototype.push.apply(dW,dU);
}else{if(typeof dU.length==="number"){for(var l=dU.length;i<l;i++){dW.push(dU[i]);
}}else{for(;dU[i];i++){dW.push(dU[i]);
}}}return dW;
};
}var u,n;

if(document.documentElement.compareDocumentPosition){u=function(a,b){if(a===b){p=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;
}return a.compareDocumentPosition(b)&4?-1:1;
};
}else{u=function(a,b){var ec,ea,ed=[],ee=[],dY=a.parentNode,eb=b.parentNode,dX=dY;
if(a===b){p=true;
return 0;
}else if(dY===eb){return n(a,b);
}else if(!dY){return -1;
}else if(!eb){return 1;
}while(dX){ed.unshift(dX);
dX=dX.parentNode;
}dX=eb;

while(dX){ee.unshift(dX);
dX=dX.parentNode;
}ec=ed.length;
ea=ee.length;
for(var i=0;i<ec&&i<ea;i++){if(ed[i]!==ee[i]){return n(ed[i],ee[i]);
}}return i===ec?n(a,ee[i],-1):n(ed[i],b,1);
};
n=function(a,b,ef){if(a===b){return ef;
}var eg=a.nextSibling;

while(eg){if(eg===b){return -1;
}eg=eg.nextSibling;
}return 1;
};
}s.getText=function(eh){var ej="",ei;

for(var i=0;eh[i];i++){ei=eh[i];
if(ei.nodeType===3||ei.nodeType===4){ej+=ei.nodeValue;
}else if(ei.nodeType!==8){ej+=s.getText(ei.childNodes);
}}return ej;
};
(function(){var em=document.createElement("div"),el="script"+(new Date()).getTime(),ek=document.documentElement;
em.innerHTML="<a name='"+el+"'/>";
ek.insertBefore(em,ek.firstChild);
if(document.getElementById(el)){k.find.ID=function(en,eo,ep){if(typeof eo.getElementById!=="undefined"&&!ep){var m=eo.getElementById(en[1]);
return m?m.id===en[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===en[1]?[m]:undefined:[];
}};
k.filter.ID=function(eq,er){var es=typeof eq.getAttributeNode!=="undefined"&&eq.getAttributeNode("id");
return eq.nodeType===1&&es&&es.nodeValue===er;
};
}ek.removeChild(em);
ek=em=null;
})();
(function(){var et=document.createElement("div");
et.appendChild(document.createComment(""));
if(et.getElementsByTagName("*").length>0){k.find.TAG=function(eu,ev){var ex=ev.getElementsByTagName(eu[1]);
if(eu[1]==="*"){var ew=[];

for(var i=0;ex[i];i++){if(ex[i].nodeType===1){ew.push(ex[i]);
}}ex=ew;
}return ex;
};
}et.innerHTML="<a href='#'></a>";

if(et.firstChild&&typeof et.firstChild.getAttribute!=="undefined"&&et.firstChild.getAttribute("href")!=="#"){k.attrHandle.href=function(ey){return ey.getAttribute("href",2);
};
}et=null;
})();

if(document.querySelectorAll){(function(){var eA=s,ez=document.createElement("div"),eB="__sizzle__";
ez.innerHTML="<p class='TEST'></p>";
if(ez.querySelectorAll&&ez.querySelectorAll(".TEST").length===0){return;
}s=function(eD,eE,eF,eG){eE=eE||document;
if(!eG&&!s.isXML(eE)){var eL=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(eD);

if(eL&&(eE.nodeType===1||eE.nodeType===9)){if(eL[1]){return f(eE.getElementsByTagName(eD),eF);
}else if(eL[2]&&k.find.CLASS&&eE.getElementsByClassName){return f(eE.getElementsByClassName(eL[2]),eF);
}}
if(eE.nodeType===9){if(eD==="body"&&eE.body){return f([eE.body],eF);
}else if(eL&&eL[3]){var eJ=eE.getElementById(eL[3]);
if(eJ&&eJ.parentNode){if(eJ.id===eL[3]){return f([eJ],eF);
}}else{return f([],eF);
}}
try{return f(eE.querySelectorAll(eD),eF);
}catch(eO){}}else if(eE.nodeType===1&&eE.nodeName.toLowerCase()!=="object"){var eN=eE,eI=eE.getAttribute("id"),eK=eI||eB,eH=eE.parentNode,eM=/^\s*[+~]/.test(eD);

if(!eI){eE.setAttribute("id",eK);
}else{eK=eK.replace(/'/g,"\\$&");
}
if(eM&&eH){eE=eE.parentNode;
}
try{if(!eM||eH){return f(eE.querySelectorAll("[id='"+eK+"'] "+eD),eF);
}}catch(eP){}finally{if(!eI){eN.removeAttribute("id");
}}}}return eA(eD,eE,eF,eG);
};

for(var eC in eA){s[eC]=eA[eC];
}ez=null;
})();
}(function(){var eS=document.documentElement,eQ=eS.matchesSelector||eS.mozMatchesSelector||eS.webkitMatchesSelector||eS.msMatchesSelector,eR=false;

try{eQ.call(document.documentElement,"[test!='']:sizzle");
}catch(eT){eR=true;
}
if(eQ){s.matchesSelector=function(eU,eV){eV=eV.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");

if(!s.isXML(eU)){try{if(eR||!k.match.PSEUDO.test(eV)&&!/!=/.test(eV)){return eQ.call(eU,eV);
}}catch(e){}}return s(eV,null,null,[eU]).length>0;
};
}})();
(function(){var eW=document.createElement("div");
eW.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!eW.getElementsByClassName||eW.getElementsByClassName("e").length===0){return;
}eW.lastChild.className="e";

if(eW.getElementsByClassName("e").length===1){return;
}k.order.splice(1,0,"CLASS");
k.find.CLASS=function(eX,eY,fa){if(typeof eY.getElementsByClassName!=="undefined"&&!fa){return eY.getElementsByClassName(eX[1]);
}};
eW=null;
})();
function A(fb,fc,fd,fe,ff,fg){for(var i=0,l=fe.length;i<l;i++){var fi=fe[i];

if(fi){var fh=false;
fi=fi[fb];

while(fi){if(fi.sizcache===fd){fh=fe[fi.sizset];
break;
}
if(fi.nodeType===1&&!fg){fi.sizcache=fd;
fi.sizset=i;
}
if(fi.nodeName.toLowerCase()===fc){fh=fi;
break;
}fi=fi[fb];
}fe[i]=fh;
}}}function y(fj,fk,fl,fm,fn,fo){for(var i=0,l=fm.length;i<l;i++){var fq=fm[i];

if(fq){var fp=false;
fq=fq[fj];

while(fq){if(fq.sizcache===fl){fp=fm[fq.sizset];
break;
}
if(fq.nodeType===1){if(!fo){fq.sizcache=fl;
fq.sizset=i;
}
if(typeof fk!=="string"){if(fq===fk){fp=true;
break;
}}else if(s.filter(fk,[fq]).length>0){fp=fq;
break;
}}fq=fq[fj];
}fm[i]=fp;
}}}
if(document.documentElement.contains){s.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
}else if(document.documentElement.compareDocumentPosition){s.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);
};
}else{s.contains=function(){return false;
};
}s.isXML=function(fr){var fs=(fr?fr.ownerDocument||fr:0).documentElement;
return fs?fs.nodeName!=="HTML":false;
};
var h=function(ft,fu){var fy,fw=[],fv="",fx=fu.nodeType?[fu]:fu;
while((fy=k.match.PSEUDO.exec(ft))){fv+=fy[0];
ft=ft.replace(k.match.PSEUDO,"");
}ft=k.relative[ft]?ft+"*":ft;

for(var i=0,l=fx.length;i<l;i++){s(ft,fx[i],fw);
}return s.filter(fv,fw);
};
var r=qx.bom.Selector;
r.query=function(fz,fA){return s(fz,fA);
};
r.matches=function(fB,fC){return s(fB,null,null,fC);
};
})();
})();
(function(){var r="engine.name",q="",p="MSXML2.DOMDocument.3.0",o="mshtml",n="SelectionLanguage",m="qx.xml.Document",k=" />",j="'",h="MSXML2.XMLHTTP.3.0",g="MSXML2.XMLHTTP.6.0",c=" xmlns='",f='<\?xml version="1.0" encoding="utf-8"?>\n<',e="text/xml",b="XPath",a="MSXML2.DOMDocument.6.0",d="HTML";
qx.Class.define(m,{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(s){if(s.nodeType===9){return s.documentElement.nodeName!==d;
}else if(s.ownerDocument){return this.isXmlDocument(s.ownerDocument);
}else{return false;
}},create:qx.core.Environment.select(r,{"mshtml":function(t,u){var v=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC==p){v.setProperty(n,b);
}
if(u){var w=f;
w+=u;

if(t){w+=c+t+j;
}w+=k;
v.loadXML(w);
}return v;
},"default":function(x,y){return document.implementation.createDocument(x||q,y||q,null);
}}),fromString:qx.core.Environment.select(r,{"mshtml":function(z){var A=qx.xml.Document.create();
A.loadXML(z);
return A;
},"default":function(B){var C=new DOMParser();
return C.parseFromString(B,e);
}})},defer:function(D){if((qx.core.Environment.get(r)==o)){var E=[a,p];
var F=[g,h];

for(var i=0,l=E.length;i<l;i++){try{new ActiveXObject(E[i]);
new ActiveXObject(F[i]);
}catch(G){continue;
}D.DOMDOC=E[i];
D.XMLHTTP=F[i];
break;
}}}});
})();
(function(){var a="qx.event.type.Focus";
qx.Class.define(a,{extend:qx.event.type.Event,members:{init:function(b,c,d){qx.event.type.Event.prototype.init.call(this,d,false);
this._target=b;
this._relatedTarget=c;
return this;
}}});
})();
(function(){var k="n-resize",j="e-resize",i="nw-resize",h="ne-resize",g="engine.name",f="",e="cursor:",d=";",c="qx.bom.element.Cursor",b="cursor",a="hand";
qx.Class.define(c,{statics:{__hh:qx.core.Environment.select(g,{"mshtml":{"cursor":a,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"opera":{"col-resize":j,"row-resize":k,"ew-resize":j,"ns-resize":k,"nesw-resize":h,"nwse-resize":i},"default":{}}),compile:function(l){return e+(this.__hh[l]||l)+d;
},get:function(m,n){return qx.bom.element.Style.get(m,b,n,false);
},set:function(o,p){o.style.cursor=this.__hh[p]||p;
},reset:function(q){q.style.cursor=f;
}}});
})();
(function(){var k="engine.version",j="",i="engine.name",h="hidden",g="-moz-scrollbars-none",f="overflow",e=";",d="overflowY",b=":",a="overflowX",z="overflow:",y="none",x="scroll",w="borderLeftStyle",v="borderRightStyle",u="div",r="borderRightWidth",q="overflow-y",p="borderLeftWidth",o="-moz-scrollbars-vertical",m="100px",n="qx.bom.element.Overflow",l="overflow-x";
qx.Class.define(n,{statics:{__do:null,getScrollbarWidth:function(){if(this.__do!==null){return this.__do;
}var A=qx.bom.element.Style;
var C=function(G,H){return parseInt(A.get(G,H),10)||0;
};
var D=function(I){return (A.get(I,v)==y?0:C(I,r));
};
var B=function(J){return (A.get(J,w)==y?0:C(J,p));
};
var F=qx.core.Environment.select(i,{"mshtml":function(K){if(A.get(K,d)==h||K.clientWidth==0){return D(K);
}return Math.max(0,K.offsetWidth-K.clientLeft-K.clientWidth);
},"default":function(L){if(L.clientWidth==0){var M=A.get(L,f);
var N=(M==x||M==o?16:0);
return Math.max(0,D(L)+N);
}return Math.max(0,(L.offsetWidth-L.clientWidth-B(L)));
}});
var E=function(O){return F(O)-D(O);
};
var t=document.createElement(u);
var s=t.style;
s.height=s.width=m;
s.overflow=x;
document.body.appendChild(t);
var c=E(t);
this.__do=c?c:16;
document.body.removeChild(t);
return this.__do;
},_compile:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(P,Q){if(Q==h){Q=g;
}return z+Q+e;
}:function(R,S){return R+b+S+e;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(T,U){return z+U+e;
}:function(V,W){return V+b+W+e;
},"default":function(X,Y){return X+b+Y+e;
}}),compileX:function(ba){return this._compile(l,ba);
},compileY:function(bb){return this._compile(q,bb);
},getX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bc,bd){var be=qx.bom.element.Style.get(bc,f,bd,false);

if(be===g){be=h;
}return be;
}:function(bf,bg){return qx.bom.element.Style.get(bf,a,bg,false);
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bh,bi){return qx.bom.element.Style.get(bh,f,bi,false);
}:function(bj,bk){return qx.bom.element.Style.get(bj,a,bk,false);
},"default":function(bl,bm){return qx.bom.element.Style.get(bl,a,bm,false);
}}),setX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bn,bo){if(bo==h){bo=g;
}bn.style.overflow=bo;
}:function(bp,bq){bp.style.overflowX=bq;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(br,bs){br.style.overflow=bs;
}:function(bt,bu){bt.style.overflowX=bu;
},"default":function(bv,bw){bv.style.overflowX=bw;
}}),resetX:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bx){bx.style.overflow=j;
}:function(by){by.style.overflowX=j;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bz,bA){bz.style.overflow=j;
}:function(bB,bC){bB.style.overflowX=j;
},"default":function(bD){bD.style.overflowX=j;
}}),getY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bE,bF){var bG=qx.bom.element.Style.get(bE,f,bF,false);

if(bG===g){bG=h;
}return bG;
}:function(bH,bI){return qx.bom.element.Style.get(bH,d,bI,false);
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bJ,bK){return qx.bom.element.Style.get(bJ,f,bK,false);
}:function(bL,bM){return qx.bom.element.Style.get(bL,d,bM,false);
},"default":function(bN,bO){return qx.bom.element.Style.get(bN,d,bO,false);
}}),setY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(bP,bQ){if(bQ===h){bQ=g;
}bP.style.overflow=bQ;
}:function(bR,bS){bR.style.overflowY=bS;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(bT,bU){bT.style.overflow=bU;
}:function(bV,bW){bV.style.overflowY=bW;
},"default":function(bX,bY){bX.style.overflowY=bY;
}}),resetY:qx.core.Environment.select(i,{"gecko":parseFloat(qx.core.Environment.get(k))<1.8?function(ca){ca.style.overflow=j;
}:function(cb){cb.style.overflowY=j;
},"opera":parseFloat(qx.core.Environment.get(k))<9.5?function(cc,cd){cc.style.overflow=j;
}:function(ce,cf){ce.style.overflowY=j;
},"default":function(cg){cg.style.overflowY=j;
}})}});
})();
(function(){var q="engine.name",p="",o="boxSizing",n="box-sizing",m="qx.bom.element.BoxSizing",k="KhtmlBoxSizing",j="border-box",h="-moz-box-sizing",g="WebkitBoxSizing",f=":",c=";",e="-khtml-box-sizing",d="content-box",b="-webkit-box-sizing",a="MozBoxSizing";
qx.Class.define(m,{statics:{__ir:qx.core.Environment.select(q,{"mshtml":null,"webkit":[o,k,g],"gecko":[a],"opera":[o]}),__is:qx.core.Environment.select(q,{"mshtml":null,"webkit":[n,e,b],"gecko":[h],"opera":[n]}),__it:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__iu:function(r){var s=this.__it;
return s.tags[r.tagName.toLowerCase()]||s.types[r.type];
},compile:qx.core.Environment.select(q,{"mshtml":function(t){},"default":function(u){var w=this.__is;
var v=p;

if(w){for(var i=0,l=w.length;i<l;i++){v+=w[i]+f+u+c;
}}return v;
}}),get:qx.core.Environment.select(q,{"mshtml":function(x){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(x))){if(!this.__iu(x)){return d;
}}return j;
},"default":function(y){var A=this.__ir;
var z;

if(A){for(var i=0,l=A.length;i<l;i++){z=qx.bom.element.Style.get(y,A[i],null,false);

if(z!=null&&z!==p){return z;
}}}return p;
}}),set:qx.core.Environment.select(q,{"mshtml":function(B,C){},"default":function(D,E){var F=this.__ir;

if(F){for(var i=0,l=F.length;i<l;i++){D.style[F[i]]=E;
}}}}),reset:function(G){this.set(G,p);
}}});
})();
(function(){var o="auto",n="px",m=",",l="clip:auto;",k="rect(",j=");",i="",h=")",g="qx.bom.element.Clip",f="string",c="clip:rect(",e=" ",d="clip",b="rect(auto,auto,auto,auto)",a="rect(auto, auto, auto, auto)";
qx.Class.define(g,{statics:{compile:function(p){if(!p){return l;
}var u=p.left;
var top=p.top;
var t=p.width;
var s=p.height;
var q,r;

if(u==null){q=(t==null?o:t+n);
u=o;
}else{q=(t==null?o:u+t+n);
u=u+n;
}
if(top==null){r=(s==null?o:s+n);
top=o;
}else{r=(s==null?o:top+s+n);
top=top+n;
}return c+top+m+q+m+r+m+u+j;
},get:function(v,w){var y=qx.bom.element.Style.get(v,d,w,false);
var E,top,C,B;
var x,z;

if(typeof y===f&&y!==o&&y!==i){y=qx.lang.String.trim(y);
if(/\((.*)\)/.test(y)){var D=RegExp.$1;
if(/,/.test(D)){var A=D.split(m);
}else{var A=D.split(e);
}top=qx.lang.String.trim(A[0]);
x=qx.lang.String.trim(A[1]);
z=qx.lang.String.trim(A[2]);
E=qx.lang.String.trim(A[3]);
if(E===o){E=null;
}
if(top===o){top=null;
}
if(x===o){x=null;
}
if(z===o){z=null;
}if(top!=null){top=parseInt(top,10);
}
if(x!=null){x=parseInt(x,10);
}
if(z!=null){z=parseInt(z,10);
}
if(E!=null){E=parseInt(E,10);
}if(x!=null&&E!=null){C=x-E;
}else if(x!=null){C=x;
}
if(z!=null&&top!=null){B=z-top;
}else if(z!=null){B=z;
}}else{throw new Error("Could not parse clip string: "+y);
}}return {left:E||null,top:top||null,width:C||null,height:B||null};
},set:function(F,G){if(!G){F.style.clip=b;
return;
}var L=G.left;
var top=G.top;
var K=G.width;
var J=G.height;
var H,I;

if(L==null){H=(K==null?o:K+n);
L=o;
}else{H=(K==null?o:L+K+n);
L=L+n;
}
if(top==null){I=(J==null?o:J+n);
top=o;
}else{I=(J==null?o:top+J+n);
top=top+n;
}F.style.clip=k+top+m+H+m+I+m+L+h;
},reset:function(M){M.style.clip=a;
}}});
})();
(function(){var m="",l="engine.name",k=";",j="opacity:",i="opacity",h="filter",g="MozOpacity",f=");",e=")",d="zoom:1;filter:alpha(opacity=",a="qx.bom.element.Opacity",c="alpha(opacity=",b="-moz-opacity:";
qx.Class.define(a,{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select(l,{"mshtml":function(n){if(n>=1){n=1;
}
if(n<0.00001){n=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return j+n+k;
}else{return d+(n*100)+f;
}},"gecko":function(o){if(o>=1){o=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return b+o+k;
}else{return j+o+k;
}},"default":function(p){if(p>=1){return m;
}return j+p+k;
}}),set:qx.core.Environment.select(l,{"mshtml":function(q,r){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(r>=1){r=m;
}q.style.opacity=r;
}else{var s=qx.bom.element.Style.get(q,h,qx.bom.element.Style.COMPUTED_MODE,false);

if(r>=1){r=1;
}
if(r<0.00001){r=0;
}if(!q.currentStyle||!q.currentStyle.hasLayout){q.style.zoom=1;
}q.style.filter=s.replace(/alpha\([^\)]*\)/gi,m)+c+r*100+e;
}},"gecko":function(t,u){if(u>=1){u=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){t.style.MozOpacity=u;
}else{t.style.opacity=u;
}},"default":function(v,w){if(w>=1){w=m;
}v.style.opacity=w;
}}),reset:qx.core.Environment.select(l,{"mshtml":function(x){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){x.style.opacity=m;
}else{var y=qx.bom.element.Style.get(x,h,qx.bom.element.Style.COMPUTED_MODE,false);
x.style.filter=y.replace(/alpha\([^\)]*\)/gi,m);
}},"gecko":function(z){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){z.style.MozOpacity=m;
}else{z.style.opacity=m;
}},"default":function(A){A.style.opacity=m;
}}),get:qx.core.Environment.select(l,{"mshtml":function(B,C){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var D=qx.bom.element.Style.get(B,i,C,false);

if(D!=null){return parseFloat(D);
}return 1.0;
}else{var E=qx.bom.element.Style.get(B,h,C,false);

if(E){var D=E.match(/alpha\(opacity=(.*)\)/);

if(D&&D[1]){return parseFloat(D[1])/100;
}}return 1.0;
}},"gecko":function(F,G){var H=qx.bom.element.Style.get(F,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?g:i,G,false);

if(H==0.999999){H=1.0;
}
if(H!=null){return parseFloat(H);
}return 1.0;
},"default":function(I,J){var K=qx.bom.element.Style.get(I,i,J,false);

if(K!=null){return parseFloat(K);
}return 1.0;
}})},defer:function(L){L.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
})();
(function(){var m="",k="engine.name",h="userSelect",g="style",f="MozUserModify",e="px",d="pixelBottom",c="float",b="borderImage",a="styleFloat",F="appearance",E="pixelHeight",D='Ms',C=":",B="cssFloat",A="pixelTop",z="pixelLeft",y='O',x="qx.bom.element.Style",w='Khtml',t='string',u="pixelRight",r='Moz',s="pixelWidth",p=";",q="textOverflow",n="userModify",o='Webkit',v="WebkitUserModify";
qx.Class.define(x,{statics:{__gx:function(){var G=[F,h,q,b];
var K={};
var H=document.documentElement.style;
var L=[r,o,w,y,D];

for(var i=0,l=G.length;i<l;i++){var M=G[i];
var I=M;

if(H[M]){K[I]=M;
continue;
}M=qx.lang.String.firstUp(M);

for(var j=0,N=L.length;j<N;j++){var J=L[j]+M;

if(typeof H[J]==t){K[I]=J;
break;
}}}this.__gy=K;
this.__gy[n]=qx.core.Environment.select(k,{"gecko":f,"webkit":v,"default":h});
this.__gz={};

for(var I in K){this.__gz[I]=qx.lang.String.hyphenate(K[I]);
}this.__gy[c]=qx.core.Environment.select(k,{"mshtml":a,"default":B});
},__gA:{width:s,height:E,left:z,right:u,top:A,bottom:d},__gB:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(O){var Q=[];
var S=this.__gB;
var R=this.__gz;
var name,P;

for(name in O){P=O[name];

if(P==null){continue;
}name=R[name]||name;
if(S[name]){Q.push(S[name].compile(P));
}else{Q.push(qx.lang.String.hyphenate(name),C,P,p);
}}return Q.join(m);
},setCss:qx.core.Environment.select(k,{"mshtml":function(T,U){T.style.cssText=U;
},"default":function(V,W){V.setAttribute(g,W);
}}),getCss:qx.core.Environment.select(k,{"mshtml":function(X){return X.style.cssText.toLowerCase();
},"default":function(Y){return Y.getAttribute(g);
}}),isPropertySupported:function(ba){return (this.__gB[ba]||this.__gy[ba]||ba in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(bb,name,bc,bd){name=this.__gy[name]||name;
if(bd!==false&&this.__gB[name]){return this.__gB[name].set(bb,bc);
}else{bb.style[name]=bc!==null?bc:m;
}},setStyles:function(be,bf,bg){var bj=this.__gy;
var bl=this.__gB;
var bh=be.style;

for(var bk in bf){var bi=bf[bk];
var name=bj[bk]||bk;

if(bi===undefined){if(bg!==false&&bl[name]){bl[name].reset(be);
}else{bh[name]=m;
}}else{if(bg!==false&&bl[name]){bl[name].set(be,bi);
}else{bh[name]=bi!==null?bi:m;
}}}},reset:function(bm,name,bn){name=this.__gy[name]||name;
if(bn!==false&&this.__gB[name]){return this.__gB[name].reset(bm);
}else{bm.style[name]=m;
}},get:qx.core.Environment.select(k,{"mshtml":function(bo,name,bp,bq){name=this.__gy[name]||name;
if(bq!==false&&this.__gB[name]){return this.__gB[name].get(bo,bp);
}if(!bo.currentStyle){return bo.style[name]||m;
}switch(bp){case this.LOCAL_MODE:return bo.style[name]||m;
case this.CASCADED_MODE:return bo.currentStyle[name]||m;
default:var bu=bo.currentStyle[name]||m;
if(/^-?[\.\d]+(px)?$/i.test(bu)){return bu;
}var bt=this.__gA[name];

if(bt){var br=bo.style[name];
bo.style[name]=bu||0;
var bs=bo.style[bt]+e;
bo.style[name]=br;
return bs;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(bu)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return bu;
}},"default":function(bv,name,bw,bx){name=this.__gy[name]||name;
if(bx!==false&&this.__gB[name]){return this.__gB[name].get(bv,bw);
}switch(bw){case this.LOCAL_MODE:return bv.style[name]||m;
case this.CASCADED_MODE:if(bv.currentStyle){return bv.currentStyle[name]||m;
}throw new Error("Cascaded styles are not supported in this browser!");
default:var by=qx.dom.Node.getDocument(bv);
var bz=by.defaultView.getComputedStyle(bv,null);
return bz?bz[name]:m;
}}})},defer:function(bA){bA.__gx();
}});
})();
(function(){var g="qx.ui.mobile.core.Root",f="Boolean",e="root",d="overflow-y",c="hidden",b="auto",a="_applyShowScrollbarY";
qx.Class.define(g,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling],properties:{defaultCssClass:{refine:true,init:e},showScrollbarY:{check:f,init:true,apply:a}},members:{_createContainerElement:function(){return document.body;
},_applyShowScrollbarY:function(h,i){this._setStyle(d,h?b:c);
}},defer:function(j,k){qx.ui.mobile.core.MChildrenHandling.remap(k);
}});
})();
(function(){var i="back",h="changeSelectedFeed",g="feed",f="feedreader.MobileApplication",d="article",c="selectedFeed",b="selectedArticle",a="changeSelectedArticle";
qx.Class.define(f,{extend:qx.application.Mobile,members:{__pA:null,main:function(){qx.application.Mobile.prototype.main.call(this);
var j=new feedreader.model.Model();
var k=feedreader.io.FeedLoader.getInstance();
this.__pA=j.getFeedFolder();
k.loadAll(this.__pA);
this.buildUpGui();
},buildUpGui:function(){var m=new feedreader.mobile.OverviewPage();
var n=new feedreader.mobile.FeedPage();
var l=new feedreader.mobile.ArticlePage();
m.show();
m.setFeeds(this.__pA);
n.addListener(i,function(){m.show({reverse:true});
m.setSelectedFeed(null);
});
l.addListener(i,function(){n.show({reverse:true});
n.setSelectedArticle(null);
});
n.addListener(a,function(e){l.show();
});
m.addListener(h,function(e){n.show();
});
m.bind(c,n,g);
n.bind(b,l,d);
}}});
})();
(function(){var j="static",i="user",h="Surfin' Safari",g="Heise",f="http://blogs.msdn.com/ie/rss.xml",e="changeStaticFeedFolder",d="http://blogs.msdn.com/jscript/rss.xml",c="The Mozilla Blog",b="http://webkit.org/blog/feed/",a="http://feeds2.feedburner.com/qooxdoo/news/content",A="http://blog.mozilla.com/feed/",z="changeFeedFolder",y="http://www.heise.de/newsticker/heise-atom.xml",x="http://my.opera.com/desktopteam/xml/rss/blog/",w="JScript Team Blog",v="Feeds",u="http://feeds2.feedburner.com/ajaxian",t="feedreader.model.Model",s="IEBlog",r="Ajaxian",p="User Feeds",q="http://daringfireball.net/index.xml",n="Static Feeds",o="qooxdoo News",l="Opera Desktop Blog",m="Daring Fireball",k="changeUserFeedFolder";
qx.Class.define(t,{extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._initializeModel();
},properties:{feedFolder:{init:null,event:z,nullable:true},staticFeedFolder:{init:null,event:e,nullable:true},userFeedFolder:{init:null,event:k,nullable:true}},members:{_initializeModel:function(){var B=new feedreader.model.FeedFolder(v);
var C=new feedreader.model.FeedFolder(qx.locale.Manager.tr(n));
B.getFeeds().push(C);
C.getFeeds().push(new feedreader.model.Feed(o,a,j));
C.getFeeds().push(new feedreader.model.Feed(w,d,j));
C.getFeeds().push(new feedreader.model.Feed(m,q,j));
C.getFeeds().push(new feedreader.model.Feed(h,b,j));
C.getFeeds().push(new feedreader.model.Feed(r,u,j));
var D=new feedreader.model.FeedFolder(qx.locale.Manager.tr(p));
B.getFeeds().push(D);
D.getFeeds().push(new feedreader.model.Feed(g,y,i));
D.getFeeds().push(new feedreader.model.Feed(s,f,i));
D.getFeeds().push(new feedreader.model.Feed(c,A,i));
D.getFeeds().push(new feedreader.model.Feed(l,x,i));
this.setFeedFolder(B);
this.setStaticFeedFolder(C);
this.setUserFeedFolder(D);
}}});
})();
(function(){var h="[",g="]",f=".",d="idBubble",c="changeBubble",b="qx.data.marshal.MEventBubbling",a="qx.event.type.Data";
qx.Mixin.define(b,{events:{"changeBubble":a},members:{_applyEventPropagation:function(i,j,name){this.fireDataEvent(c,{value:i,name:name,old:j});
this._registerEventChaining(i,j,name);
},_registerEventChaining:function(k,l,name){if((k instanceof qx.core.Object)&&qx.Class.hasMixin(k.constructor,qx.data.marshal.MEventBubbling)){var m=qx.lang.Function.bind(this.__lT,this,name);
var n=k.addListener(c,m,this);
k.setUserData(d,n);
}if(l!=null&&l.getUserData&&l.getUserData(d)!=null){l.removeListenerById(l.getUserData(d));
}},__lT:function(name,e){var v=e.getData();
var r=v.value;
var p=v.old;
if(qx.Class.hasInterface(e.getTarget().constructor,qx.data.IListData)){if(v.name.indexOf){var u=v.name.indexOf(f)!=-1?v.name.indexOf(f):v.name.length;
var s=v.name.indexOf(h)!=-1?v.name.indexOf(h):v.name.length;

if(u<s){var o=v.name.substring(0,u);
var t=v.name.substring(u+1,v.name.length);

if(t[0]!=h){t=f+t;
}var q=name+h+o+g+t;
}else if(s<u){var o=v.name.substring(0,s);
var t=v.name.substring(s,v.name.length);
var q=name+h+o+g+t;
}else{var q=name+h+v.name+g;
}}else{var q=name+h+v.name+g;
}}else{var q=name+f+v.name;
}this.fireDataEvent(c,{value:r,name:q,old:p});
}}});
})();
(function(){var o="change",n="changeBubble",m="add",l="remove",k="0-",j="order",h="-",g="0",f="qx.event.type.Data",e="Boolean",b="",d="qx.data.Array",c="number",a="changeLength";
qx.Class.define(d,{extend:qx.core.Object,include:qx.data.marshal.MEventBubbling,implement:[qx.data.IListData],construct:function(p){qx.core.Object.call(this);
if(p==undefined){this.__mo=[];
}else if(arguments.length>1){this.__mo=[];

for(var i=0;i<arguments.length;i++){this.__mo.push(arguments[i]);
}}else if(typeof p==c){this.__mo=new Array(p);
}else if(p instanceof Array){this.__mo=qx.lang.Array.clone(p);
}else{this.__mo=[];
throw new Error("Type of the parameter not supported!");
}for(var i=0;i<this.__mo.length;i++){this._applyEventPropagation(this.__mo[i],null,i);
}this.__mp();
},properties:{autoDisposeItems:{check:e,init:false}},events:{"change":f,"changeLength":f},members:{__mo:null,concat:function(q){if(q){var r=this.__mo.concat(q);
}else{var r=this.__mo.concat();
}return new qx.data.Array(r);
},join:function(s){return this.__mo.join(s);
},pop:function(){var t=this.__mo.pop();
this.__mp();
this._registerEventChaining(null,t,this.length-1);
this.fireDataEvent(n,{value:[],name:this.length,old:[t]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:l,items:[t]},null);
return t;
},push:function(u){for(var i=0;i<arguments.length;i++){this.__mo.push(arguments[i]);
this.__mp();
this._registerEventChaining(arguments[i],null,this.length-1);
this.fireDataEvent(n,{value:[arguments[i]],name:this.length-1,old:[]});
this.fireDataEvent(o,{start:this.length-1,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},reverse:function(){if(this.length==0){return;
}var v=this.__mo.concat();
this.__mo.reverse();
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__mo,name:k+(this.__mo.length-1),old:v});
},shift:function(){if(this.length==0){return;
}var w=this.__mo.shift();
this.__mp();
this._registerEventChaining(null,w,this.length-1);
this.fireDataEvent(n,{value:[],name:g,old:[w]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:l,items:[w]},null);
return w;
},slice:function(x,y){return new qx.data.Array(this.__mo.slice(x,y));
},splice:function(z,A,B){var J=this.__mo.length;
var F=this.__mo.splice.apply(this.__mo,arguments);
if(this.__mo.length!=J){this.__mp();
}var H=A>0;
var D=arguments.length>2;
var E=null;

if(H||D){if(this.__mo.length>J){var I=m;
}else if(this.__mo.length<J){var I=l;
E=F;
}else{var I=j;
}this.fireDataEvent(o,{start:z,end:this.length-1,type:I,items:E},null);
}for(var i=2;i<arguments.length;i++){this._registerEventChaining(arguments[i],null,z+i);
}var G=[];

for(var i=2;i<arguments.length;i++){G[i-2]=arguments[i];
}var C=(z+Math.max(arguments.length-3,A-1));
var name=z==C?C:z+h+C;
this.fireDataEvent(n,{value:G,name:name,old:F});
for(var i=0;i<F.length;i++){this._registerEventChaining(null,F[i],i);
}return (new qx.data.Array(F));
},sort:function(K){if(this.length==0){return;
}var L=this.__mo.concat();
this.__mo.sort.apply(this.__mo,arguments);
this.fireDataEvent(o,{start:0,end:this.length-1,type:j,items:null},null);
this.fireDataEvent(n,{value:this.__mo,name:k+(this.length-1),old:L});
},unshift:function(M){for(var i=arguments.length-1;i>=0;i--){this.__mo.unshift(arguments[i]);
this.__mp();
this._registerEventChaining(arguments[i],null,0);
this.fireDataEvent(n,{value:[this.__mo[0]],name:g,old:[this.__mo[1]]});
this.fireDataEvent(o,{start:0,end:this.length-1,type:m,items:[arguments[i]]},null);
}return this.length;
},toArray:function(){return this.__mo;
},getItem:function(N){return this.__mo[N];
},setItem:function(O,P){var Q=this.__mo[O];
if(Q===P){return;
}this.__mo[O]=P;
this._registerEventChaining(P,Q,O);
if(this.length!=this.__mo.length){this.__mp();
}this.fireDataEvent(n,{value:[P],name:O,old:[Q]});
this.fireDataEvent(o,{start:O,end:O,type:m,items:[P]},null);
},getLength:function(){return this.length;
},indexOf:function(R){return this.__mo.indexOf(R);
},toString:function(){if(this.__mo!=null){return this.__mo.toString();
}return b;
},contains:function(S){return this.__mo.indexOf(S)!==-1;
},copy:function(){return this.concat();
},insertAt:function(T,U){this.splice(T,0,U);
},insertBefore:function(V,W){var X=this.indexOf(V);

if(X==-1){this.push(W);
}else{this.splice(X,0,W);
}},insertAfter:function(Y,ba){var bb=this.indexOf(Y);

if(bb==-1||bb==(this.length-1)){this.push(ba);
}else{this.splice(bb+1,0,ba);
}},removeAt:function(bc){var be=this.splice(bc,1);
var bd=be.getItem(0);
be.dispose();
return bd;
},removeAll:function(){for(var i=0;i<this.__mo.length;i++){this._registerEventChaining(null,this.__mo[i],i);
}if(this.getLength()==0){return;
}var bg=this.getLength();
var bf=this.__mo.concat();
this.__mo.length=0;
this.__mp();
this.fireDataEvent(n,{value:[],name:k+(bg-1),old:bf});
this.fireDataEvent(o,{start:0,end:bg-1,type:l,items:bf},null);
return bf;
},append:function(bh){if(bh instanceof qx.data.Array){bh=bh.toArray();
}Array.prototype.push.apply(this.__mo,bh);
for(var i=0;i<bh.length;i++){this._registerEventChaining(bh[i],null,this.__mo.length+i);
}var bi=this.length;
this.__mp();
this.fireDataEvent(n,{value:bh,name:bi==(this.length-1)?bi:bi+h+(this.length-1),old:[]});
this.fireDataEvent(o,{start:bi,end:this.length-1,type:m,items:bh},null);
},remove:function(bj){var bk=this.indexOf(bj);

if(bk!=-1){this.splice(bk,1);
return bj;
}},equals:function(bl){if(this.length!==bl.length){return false;
}
for(var i=0;i<this.length;i++){if(this.getItem(i)!==bl.getItem(i)){return false;
}}return true;
},sum:function(){var bm=0;

for(var i=0;i<this.length;i++){bm+=this.getItem(i);
}return bm;
},max:function(){var bn=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)>bn){bn=this.getItem(i);
}}return bn===undefined?null:bn;
},min:function(){var bo=this.getItem(0);

for(var i=1;i<this.length;i++){if(this.getItem(i)<bo){bo=this.getItem(i);
}}return bo===undefined?null:bo;
},forEach:function(bp,bq){for(var i=0;i<this.__mo.length;i++){bp.call(bq,this.__mo[i],i,this);
}},__mp:function(){var br=this.length;
this.length=this.__mo.length;
this.fireDataEvent(a,this.length,br);
}},destruct:function(){for(var i=0;i<this.__mo.length;i++){var bs=this.__mo[i];
this._applyEventPropagation(null,bs,i);
if(this.isAutoDisposeItems()&&bs&&bs instanceof qx.core.Object){bs.dispose();
}}this.__mo=null;
}});
})();
(function(){var p="qx.data.Array",o="String",n="changeArticles",m="loading",l="",k="new",j="feedreader.model.FeedFolder",i="Folder",h="loaded",g="dataModified",c="null",f="changeFeeds",e="stateModified",b="_applyState",a="changeTitle",d="error";
qx.Class.define(j,{extend:qx.core.Object,construct:function(q){qx.core.Object.call(this);
this.setTitle(q);
this.setFeeds(new qx.data.Array());
},properties:{title:{check:o,event:a,init:i},category:{check:o,init:l,event:g},feeds:{check:p,event:f},articles:{check:p,event:n,init:new qx.data.Array()},state:{check:[k,m,h,d],init:c,event:e,apply:b}}});
})();
(function(){var t="",s='indexOf',r='slice',q='concat',p='toLocaleLowerCase',o="qx.type.BaseString",n='match',m='toLocaleUpperCase',k='search',j='replace',c='toLowerCase',h='charCodeAt',f='split',b='substring',a='lastIndexOf',e='substr',d='toUpperCase',g='charAt';
qx.Class.define(o,{extend:Object,construct:function(u){var u=u||t;
this.__dy=u;
this.length=u.length;
},members:{$$isString:true,length:0,__dy:null,toString:function(){return this.__dy;
},charAt:null,valueOf:null,charCodeAt:null,concat:null,indexOf:null,lastIndexOf:null,match:null,replace:null,search:null,slice:null,split:null,substr:null,substring:null,toLowerCase:null,toUpperCase:null,toHashCode:function(){return qx.core.ObjectRegistry.toHashCode(this);
},toLocaleLowerCase:null,toLocaleUpperCase:null,base:function(v,w){return qx.core.Object.prototype.base.apply(this,arguments);
}},defer:function(x,y){var z=[g,h,q,s,a,n,j,k,r,f,e,b,c,d,p,m];
y.valueOf=y.toString;

if(new x(t).valueOf()==null){delete y.valueOf;
}
for(var i=0,l=z.length;i<l;i++){y[z[i]]=String.prototype[z[i]];
}}});
})();
(function(){var a="qx.locale.LocalizedString";
qx.Class.define(a,{extend:qx.type.BaseString,construct:function(b,c,d){qx.type.BaseString.call(this,b);
this.__hf=c;
this.__hg=d;
},members:{__hf:null,__hg:null,translate:function(){return qx.locale.Manager.getInstance().translate(this.__hf,this.__hg);
}}});
})();
(function(){var l="_",k="",j="locale",h="_applyLocale",g="changeLocale",f="C",e="locale.variant",d="qx.dynlocale",c="qx.locale.Manager",b="String",a="singleton";
qx.Class.define(c,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__hE=qx.$$translations||{};
this.__hF=qx.$$locales||{};
var m=qx.core.Environment.get(j);
var n=qx.core.Environment.get(e);

if(n!==k){m+=l+n;
}this.__hG=m;
this.setLocale(m||this.__hH);
},statics:{tr:function(o,p){var q=qx.lang.Array.fromArguments(arguments);
q.splice(0,1);
return qx.locale.Manager.getInstance().translate(o,q);
},trn:function(r,s,t,u){var v=qx.lang.Array.fromArguments(arguments);
v.splice(0,3);
if(t!=1){return qx.locale.Manager.getInstance().translate(s,v);
}else{return qx.locale.Manager.getInstance().translate(r,v);
}},trc:function(w,x,y){var z=qx.lang.Array.fromArguments(arguments);
z.splice(0,2);
return qx.locale.Manager.getInstance().translate(x,z);
},marktr:function(A){return A;
}},properties:{locale:{check:b,nullable:true,apply:h,event:g}},members:{__hH:f,__hI:null,__hJ:null,__hE:null,__hF:null,__hG:null,getLanguage:function(){return this.__hJ;
},getTerritory:function(){return this.getLocale().split(l)[1]||k;
},getAvailableLocales:function(){var C=[];

for(var B in this.__hF){if(B!=this.__hH){C.push(B);
}}return C;
},__hK:function(D){var F;

if(D==null){return null;
}var E=D.indexOf(l);

if(E==-1){F=D;
}else{F=D.substring(0,E);
}return F;
},_applyLocale:function(G,H){this.__hI=G;
this.__hJ=this.__hK(G);
},addTranslation:function(I,J){var K=this.__hE;

if(K[I]){for(var L in J){K[I][L]=J[L];
}}else{K[I]=J;
}},addLocale:function(M,N){var O=this.__hF;

if(O[M]){for(var P in N){O[M][P]=N[P];
}}else{O[M]=N;
}},translate:function(Q,R,S){var T=this.__hE;
return this.__hL(T,Q,R,S);
},localize:function(U,V,W){var X=this.__hF;
return this.__hL(X,U,V,W);
},__hL:function(Y,ba,bb,bc){var bd;

if(!Y){return ba;
}
if(bc){var bf=this.__hK(bc);
}else{bc=this.__hI;
bf=this.__hJ;
}if(!bd&&Y[bc]){bd=Y[bc][ba];
}if(!bd&&Y[bf]){bd=Y[bf][ba];
}if(!bd&&Y[this.__hH]){bd=Y[this.__hH][ba];
}
if(!bd){bd=ba;
}
if(bb.length>0){var be=[];

for(var i=0;i<bb.length;i++){var bg=bb[i];

if(bg&&bg.translate){be[i]=bg.translate();
}else{be[i]=bg;
}}bd=qx.lang.String.format(bd,be);
}
if(qx.core.Environment.get(d)){bd=new qx.locale.LocalizedString(bd,ba,bb);
}return bd;
}},destruct:function(){this.__hE=this.__hF=null;
}});
})();
(function(){var m="String",l="",k="new",j="stateModified",i="changeArticles",h="loading",g="qx.data.Array",f="loaded",e="dataModified",d="changeUrl",a="feedreader.model.Feed",c="changeTitle",b="error";
qx.Class.define(a,{extend:qx.core.Object,construct:function(n,o,p){qx.core.Object.call(this);
this.set({url:o,title:n,category:p||l});
this.setArticles(new qx.data.Array());
},properties:{articles:{check:g,event:i},selectedArticle:{nullable:true},url:{check:m,event:d},title:{check:m,event:c},category:{check:m,init:l,event:e},state:{check:[k,h,f,b],init:k,event:j}}});
})();
(function(){var n="failed",m="error",l="loaded",k="select * from feed where url='",j="'",h="io.ssl",g="timeout",f="feedreader.io.FeedLoader",d="loading",c="changeState",a="aborted",b="singleton";
qx.Class.define(f,{extend:qx.core.Object,type:b,members:{loadAll:function(o){var q=o.getFeeds().getItem(0).getFeeds();

for(var i=0;i<q.length;i++){this.load(q.getItem(i));
}var p=o.getFeeds().getItem(1).getFeeds();

for(i=0;i<p.length;i++){this.load(p.getItem(i));
}},load:function(r){r.setState(d);
var s=k+r.getUrl()+j;
var t=new qx.data.store.Yql(s,{manipulateData:function(u){try{u=u.query.results.item||u.query.results.entry;
for(var i=0;i<u.length;i++){if(!qx.lang.Type.isString(u[i].title)){u[i].title=u[i].title.content;
}}return u;
}catch(e){return n;
}}},qx.core.Environment.get(h));
t.addListener(l,this.__oI(r),this);
t.addListener(c,qx.lang.Function.bind(this.__oH,this,r),this);
},__oH:function(v,e){if(e.getData()==a||e.getData()==g||e.getData()==n){v.setState(m);
}},__oI:function(w){return function(e){var x=e.getData();
if(x==n){w.setState(m);
return;
}w.setArticles(x);
w.setState(l);
};
}}});
})();
(function(){var j="aborted",i="completed",h="failed",g="configured",f="timeout",e="application/json",d="loaded",c="qx.event.type.Data",b="error",a="receiving",y="changeState",x="sending",w="changeModel",v="json",u="GET",t="fail",s="queued",r="success",q="String",p="changePhase",n="_marshaler",o="__no",l="qx.data.store.Json",m="changeUrl",k="_applyUrl";
qx.Class.define(l,{extend:qx.core.Object,construct:function(z,A){qx.core.Object.call(this);
this._marshaler=new qx.data.marshal.Json(A);
this._delegate=A;
this.__qO=false;

if(z!=null){this.setUrl(z);
}},events:{"loaded":c,"error":c},properties:{model:{nullable:true,event:w},state:{check:[g,s,x,a,i,j,f,h],init:g,event:y},url:{check:q,apply:k,event:m,nullable:true}},members:{_marshaler:null,_delegate:null,__no:null,__qO:null,_applyUrl:function(B,C){if(B!=null){B=qx.util.AliasManager.getInstance().resolve(B);
B=qx.util.ResourceManager.getInstance().toUri(B);
this._createRequest(B);
}},_getRequest:function(){return this.__no;
},_setRequest:function(D){this.__no=D;
},setDeprecatedTransport:function(E){qx.core.Assert.assertBoolean(E);

if(E){qx.log.Logger.deprecatedMethodWarning(arguments.callee);
}this.__qO=E;
},isDeprecatedTransport:function(){return !!this.__qO;
},_createRequest:function(F){if(this.isDeprecatedTransport()){this._warnDeprecated();
return this.__qP(F);
}var G=new qx.io.request.Xhr(F);
this._setRequest(G);
G.setAccept(e);
G.setParser(v);
G.addListener(r,this._onSuccess,this);
var H=this._delegate;

if(H&&qx.lang.Type.isFunction(H.configureRequest)){this._delegate.configureRequest(G);
}G.addListener(p,this._onChangePhase,this);
G.addListener(t,this._onFail,this);
G.send();
},__qP:function(I){var J=new qx.io.remote.Request(I,u,e);
this._setRequest(J);
J.addListener(i,this.__qR,this);
var K=this._delegate;

if(K&&qx.lang.Type.isFunction(K.configureRequest)){this._delegate.configureRequest(J);
}J.addListener(y,function(L){var M=L.getData();
this.setState(M);
},this);
J.addListener(h,this.__qQ,this);
J.addListener(j,this.__qQ,this);
J.addListener(f,this.__qQ,this);
J.send();
},_onChangePhase:function(N){var O=N.getData(),Q={},P;
Q={"opened":g,"sent":x,"loading":a,"success":i,"abort":j,"timeout":f,"statusError":h};
P=Q[O];

if(P){this.setState(P);
}},_onFail:function(R){var S=R.getTarget();
this.fireDataEvent(b,S);
},__qQ:function(T){this.fireDataEvent(b,T);
},_onSuccess:function(U){var W=U.getTarget(),X=W.getResponse();
var V=this._delegate;

if(V&&qx.lang.Type.isFunction(V.manipulateData)){X=this._delegate.manipulateData(X);
}this._marshaler.toClass(X,true);
var Y=this.getModel();
this.setModel(this._marshaler.toModel(X));
if(Y&&Y.dispose){Y.dispose();
}this.fireDataEvent(d,this.getModel());
},__qR:function(ba){var bc=ba.getContent();
var bb=this._delegate;

if(bb&&qx.lang.Type.isFunction(bb.manipulateData)){bc=this._delegate.manipulateData(bc);
}this._marshaler.toClass(bc,true);
var bd=this.getModel();
this.setModel(this._marshaler.toModel(bc));
if(bd&&bd.dispose){bd.dispose();
}this.fireDataEvent(d,this.getModel());
},reload:function(){var be=this.getUrl();

if(be!=null){this._createRequest(be);
}},_warnDeprecated:function(){qx.log.Logger.warn("Using qx.io.remote.Request in qx.data.store.Json "+"is deprecated. Please consult the API documentation.");
}},destruct:function(){this._disposeObjects(o);
this._disposeSingletonObjects(n);
this._delegate=null;
}});
})();
(function(){var a="qx.data.marshal.IMarshaler";
qx.Interface.define(a,{members:{toClass:function(b,c){},toModel:function(d){}}});
})();
(function(){var k="qx.data.model.",j="",h="Array",g="_validate",f='"',e="qx.debug.databinding",d="change",c="qx.data.marshal.Json",b="set",a="_applyEventPropagation";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.data.marshal.IMarshaler],construct:function(l){qx.core.Object.call(this);
this.__nc=l;
},statics:{$$instance:null,createModel:function(m,n){if(this.$$instance===null){this.$$instance=new qx.data.marshal.Json();
}this.$$instance.toClass(m,n);
return this.$$instance.toModel(m);
}},members:{__nc:null,__nd:function(o){return qx.Bootstrap.getKeys(o).sort().join(f);
},toClass:function(p,q){if(!qx.lang.Type.isObject(p)||p instanceof qx.core.Object){if(p instanceof Array||qx.Bootstrap.getClass(p)==h){for(var i=0;i<p.length;i++){this.toClass(p[i],q);
}}return ;
}var s=this.__nd(p);
for(var t in p){this.toClass(p[t],q);
}if(qx.Class.isDefined(k+s)){return;
}if(this.__nc&&this.__nc.getModelClass&&this.__nc.getModelClass(s)!=null){return;
}var z={};
var y={__ne:this.__ne};

for(var t in p){t=t.replace(/-/g,j);
z[t]={};
z[t].nullable=true;
z[t].event=d+qx.lang.String.firstUp(t);
if(q){z[t].apply=a;
}if(this.__nc&&this.__nc.getValidationRule){var v=this.__nc.getValidationRule(s,t);

if(v){z[t].validate=g+t;
y[g+t]=v;
}}}if(this.__nc&&this.__nc.getModelSuperClass){var x=this.__nc.getModelSuperClass(s)||qx.core.Object;
}else{var x=qx.core.Object;
}var u=[];

if(this.__nc&&this.__nc.getModelMixins){var w=this.__nc.getModelMixins(s);
if(!qx.lang.Type.isArray(w)){if(w!=null){u=[w];
}}}if(q){u.push(qx.data.marshal.MEventBubbling);
}var r={extend:x,include:u,properties:z,members:y,destruct:this.__nf};
qx.Class.define(k+s,r);
},__nf:function(){var A=qx.util.PropertyUtil.getAllProperties(this.constructor);

for(var B in A){this.__ne(this.get(A[B].name));
}},__ne:function(C){if(!(C instanceof qx.core.Object)){return ;
}if(C.isDisposed()){return;
}C.dispose();
},__ng:function(D){var E;
if(this.__nc&&this.__nc.getModelClass){E=this.__nc.getModelClass(D);
}
if(E!=null){return (new E());
}else{var F=qx.Class.getByName(k+D);
return (new F());
}},toModel:function(G){var K=qx.lang.Type.isObject(G);
var H=G instanceof Array||qx.Bootstrap.getClass(G)==h;

if((!K&&!H)||G instanceof qx.core.Object){return G;
}else if(H){var M=new qx.data.Array();
M.setAutoDisposeItems(true);

for(var i=0;i<G.length;i++){M.push(this.toModel(G[i]));
}return M;
}else if(K){var I=this.__nd(G);
var N=this.__ng(I);
for(var L in G){var J=L.replace(/-/g,j);
if((false)&&qx.core.Environment.get(e)){if(L!=J){this.warn("The model contained an illegal name: '"+L+"'. Replaced it with '"+J+"'.");
}}N[b+qx.lang.String.firstUp(J)](this.toModel(G[L]));
}return N;
}throw new Error("Unsupported type!");
}},destruct:function(){this.__nc=null;
}});
})();
(function(){var d="$$theme_",c="$$user_",b="$$init_",a="qx.util.PropertyUtil";
qx.Class.define(a,{statics:{getProperties:function(e){return e.$$properties;
},getAllProperties:function(f){var i={};
var j=f;
while(j!=qx.core.Object){var h=this.getProperties(j);

for(var g in h){i[g]=h[g];
}j=j.superclass;
}return i;
},getUserValue:function(k,l){return k[c+l];
},setUserValue:function(m,n,o){m[c+n]=o;
},deleteUserValue:function(p,q){delete (p[c+q]);
},getInitValue:function(r,s){return r[b+s];
},setInitValue:function(t,u,v){t[b+u]=v;
},deleteInitValue:function(w,x){delete (w[b+x]);
},getThemeValue:function(y,z){return y[d+z];
},setThemeValue:function(A,B,C){A[d+B]=C;
},deleteThemeValue:function(D,E){delete (D[d+E]);
},setThemed:function(F,G,H){var I=qx.core.Property.$$method.setThemed;
F[I[G]](H);
},resetThemed:function(J,K){var L=qx.core.Property.$$method.resetThemed;
J[L[K]]();
}}});
})();
(function(){var b="qx.util.ValueManager",a="abstract";
qx.Class.define(b,{type:a,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this._dynamic={};
},members:{_dynamic:null,resolveDynamic:function(c){return this._dynamic[c];
},isDynamic:function(d){return !!this._dynamic[d];
},resolve:function(e){if(e&&this._dynamic[e]){return this._dynamic[e];
}return e;
},_setDynamic:function(f){this._dynamic=f;
},_getDynamic:function(){return this._dynamic;
}},destruct:function(){this._dynamic=null;
}});
})();
(function(){var j="/",i="0",h="qx/static",g="http://",f="https://",e="file://",d="qx.util.AliasManager",c="singleton",b=".",a="static";
qx.Class.define(d,{type:c,extend:qx.util.ValueManager,construct:function(){qx.util.ValueManager.call(this);
this.__co={};
this.add(a,h);
},members:{__co:null,_preprocess:function(k){var n=this._getDynamic();

if(n[k]===false){return k;
}else if(n[k]===undefined){if(k.charAt(0)===j||k.charAt(0)===b||k.indexOf(g)===0||k.indexOf(f)===i||k.indexOf(e)===0){n[k]=false;
return k;
}
if(this.__co[k]){return this.__co[k];
}var m=k.substring(0,k.indexOf(j));
var l=this.__co[m];

if(l!==undefined){n[k]=l+k.substring(m.length);
}}return k;
},add:function(o,p){this.__co[o]=p;
var r=this._getDynamic();
for(var q in r){if(q.substring(0,q.indexOf(j))===o){r[q]=p+q.substring(o.length);
}}},remove:function(s){delete this.__co[s];
},resolve:function(t){var u=this._getDynamic();

if(t!=null){t=this._preprocess(t);
}return u[t]||t;
},getAliases:function(){var v={};

for(var w in this.__co){v[w]=this.__co[w];
}return v;
}},destruct:function(){this.__co=null;
}});
})();
(function(){var p="",o="/",n="mshtml",m="engine.name",l="io.ssl",k="string",j="//",i="?",h="data",g="type",c="data:image/",f=";",e="encoding",b="qx.util.ResourceManager",a="singleton",d=",";
qx.Class.define(b,{extend:qx.core.Object,type:a,construct:function(){qx.core.Object.call(this);
},statics:{__ho:qx.$$resources||{},__ip:{}},members:{has:function(q){return !!this.self(arguments).__ho[q];
},getData:function(r){return this.self(arguments).__ho[r]||null;
},getImageWidth:function(s){var t=this.self(arguments).__ho[s];
return t?t[0]:null;
},getImageHeight:function(u){var v=this.self(arguments).__ho[u];
return v?v[1]:null;
},getImageFormat:function(w){var x=this.self(arguments).__ho[w];
return x?x[2]:null;
},getCombinedFormat:function(y){var B=p;
var A=this.self(arguments).__ho[y];
var z=A&&A.length>4&&typeof (A[4])==k&&this.constructor.__ho[A[4]];

if(z){var D=A[4];
var C=this.constructor.__ho[D];
B=C[2];
}return B;
},toUri:function(E){if(E==null){return E;
}var F=this.self(arguments).__ho[E];

if(!F){return E;
}
if(typeof F===k){var H=F;
}else{var H=F[3];
if(!H){return E;
}}var G=p;

if((qx.core.Environment.get(m)==n)&&qx.core.Environment.get(l)){G=this.self(arguments).__ip[H];
}return G+qx.$$libraries[H].resourceUri+o+E;
},toDataUri:function(I){var K=this.constructor.__ho[I];
var L=this.constructor.__ho[K[4]];
var M;

if(L){var J=L[4][I];
M=c+J[g]+f+J[e]+d+J[h];
}else{M=this.toUri(I);
}return M;
}},defer:function(N){if((qx.core.Environment.get(m)==n)){if(qx.core.Environment.get(l)){for(var R in qx.$$libraries){var P;

if(qx.$$libraries[R].resourceUri){P=qx.$$libraries[R].resourceUri;
}else{N.__ip[R]=p;
continue;
}if(P.match(/^\/\//)!=null){N.__ip[R]=window.location.protocol;
}else if(P.match(/^\//)!=null){N.__ip[R]=window.location.protocol+j+window.location.host;
}else if(P.match(/^\.\//)!=null){var O=document.URL;
N.__ip[R]=O.substring(0,O.lastIndexOf(o)+1);
}else if(P.match(/^http/)!=null){N.__ip[R]=p;
}else{var S=window.location.href.indexOf(i);
var Q;

if(S==-1){Q=window.location.href;
}else{Q=window.location.href.substring(0,S);
}N.__ip[R]=Q.substring(0,Q.lastIndexOf(o)+1);
}}}}}});
})();
(function(){var j="qx.event.type.Event",i="qx.debug.io",h="fail",g="GET",f="qx.event.type.Data",e="load",d="loadEnd",c="Map",b="qx.io.request.AbstractRequest",a="changePhase",C="sent",B="qx.io.request.authentication.IAuthentication",A="error",z="loading",y="abort",x="success",w="String",v="",u="opened",t="POST",q="statusError",r="readyStateChange",o="abstract",p="unsent",m="changeResponse",n="Number",k="Content-Type",l="timeout",s="undefined";
qx.Class.define(b,{type:o,extend:qx.core.Object,construct:function(D){qx.core.Object.call(this);

if(D!==undefined){this.setUrl(D);
}var E=this._transport=this._createTransport();
this._setPhase(p);
this.__ns=qx.lang.Function.bind(this._onReadyStateChange,this);
this.__nt=qx.lang.Function.bind(this._onLoad,this);
this.__nu=qx.lang.Function.bind(this._onLoadEnd,this);
this.__nv=qx.lang.Function.bind(this._onAbort,this);
this.__mL=qx.lang.Function.bind(this._onTimeout,this);
this.__nw=qx.lang.Function.bind(this._onError,this);
E.onreadystatechange=this.__ns;
E.onload=this.__nt;
E.onloadend=this.__nu;
E.onabort=this.__nv;
E.ontimeout=this.__mL;
E.onerror=this.__nw;
},events:{"readyStateChange":j,"success":j,"load":j,"loadEnd":j,"abort":j,"timeout":j,"error":j,"statusError":j,"fail":j,"changeResponse":f,"changePhase":f},properties:{url:{check:w},requestHeaders:{check:c,nullable:true},timeout:{check:n,nullable:true,init:0},requestData:{check:function(F){return qx.lang.Type.isString(F)||qx.Class.isSubClassOf(F.constructor,qx.core.Object)||qx.lang.Type.isObject(F);
},nullable:true},authentication:{check:B,nullable:true}},members:{__ns:null,__nt:null,__nu:null,__nv:null,__mL:null,__nw:null,__nx:null,__ny:null,_transport:null,_createTransport:function(){throw new Error("Abstract method call");
},_getConfiguredUrl:function(){},_setRequestHeaders:function(){},_getParsedResponse:function(){throw new Error("Abstract method call");
},send:function(){var K=this._transport,G,J,H,I;
G=this._getConfiguredUrl();
if(/\#/.test(G)){G=G.replace(/\#.*/,v);
}K.timeout=this.getTimeout()*1000;
J=qx.lang.Type.isFunction(this.getMethod)?this.getMethod():g;
H=qx.lang.Type.isFunction(this.getAsync)?this.getAsync():true;
if(qx.core.Environment.get(i)){this.debug("Open low-level request with method: "+J+", url: "+G+", async: "+H);
}K.open(J,G,H);
this._setPhase(u);
I=this._serializeData(this.getRequestData());
this._setRequestHeaders();
this.__nA();
this.__nz();
if(qx.core.Environment.get(i)){this.debug("Send low-level request");
}J==g?K.send():K.send(I);
this._setPhase(C);
},abort:function(){if(qx.core.Environment.get(i)){this.debug("Abort request");
}this._transport.abort();
},getTransport:function(){return this._transport;
},getReadyState:function(){return this._transport.readyState;
},getPhase:function(){return this.__ny;
},getStatus:function(){return this._transport.status;
},getStatusText:function(){return this._transport.statusText;
},getResponseText:function(){return this._transport.responseText;
},getAllResponseHeaders:function(){return this._transport.getAllResponseHeaders();
},getResponseHeader:function(L){return this._transport.getResponseHeader(L);
},getResponseContentType:function(){return this.getResponseHeader(k);
},isDone:function(){return this.getReadyState()===4;
},getResponse:function(){return this.__nx;
},_setResponse:function(M){var N=M;

if(this.__nx!==M){this.__nx=M;
this.fireEvent(m,qx.event.type.Data,[this.__nx,N]);
}},_onReadyStateChange:function(){var O,P=this.getReadyState();

if(qx.core.Environment.get(i)){this.debug("Fire readyState: "+P);
}this.fireEvent(r);

if(P===3){this._setPhase(z);
}
if(this.isDone()){if(qx.core.Environment.get(i)){this.debug("Request completed with HTTP status: "+this.getStatus());
}this._setPhase(e);
if(qx.util.Request.isSuccessful(this.getStatus())){if(qx.core.Environment.get(i)){this.debug("Response is of type: '"+this.getResponseContentType()+"'");
}O=this._getParsedResponse();
this._setResponse(O);
this._fireStatefulEvent(x);
}else{this._fireStatefulEvent(q);
this.fireEvent(h);
}}},_onLoad:function(){this.fireEvent(e);
},_onLoadEnd:function(){this.fireEvent(d);
},_onAbort:function(){this._fireStatefulEvent(y);
},_onTimeout:function(){this._fireStatefulEvent(l);
this.fireEvent(h);
},_onError:function(){this.fireEvent(A);
this.fireEvent(h);
},_fireStatefulEvent:function(Q){this._setPhase(Q);
this.fireEvent(Q);
},_setPhase:function(R){var S=this.__ny;
this.__ny=R;
this.fireDataEvent(a,R,S);
},_serializeData:function(T){var U=typeof this.getMethod!==s&&this.getMethod()==t;

if(!T){return;
}
if(qx.lang.Type.isString(T)){return T;
}
if(qx.Class.isSubClassOf(T.constructor,qx.core.Object)){return qx.util.Serializer.toUriParameter(T);
}
if(qx.lang.Type.isObject(T)){return qx.lang.Object.toUriParameter(T,U);
}},__nz:function(){var V=this.getRequestHeaders();

if(V){qx.lang.Object.getKeys(V).forEach(function(W){this._transport.setRequestHeader(W,V[W]);
},this);
}},__nA:function(){var Y=this.getAuthentication(),X=this._transport;

if(Y){Y.getAuthHeaders().forEach(function(ba){if(ba.key&&ba.value){if(qx.core.Environment.get(i)){this.debug("Set authentication header '"+ba.key+"' to '"+ba.value+"'");
}X.setRequestHeader(ba.key,ba.value);
}},this);
}}},environment:{"qx.debug.io":false},destruct:function(){var bc=this._transport,bb=function(){};

if(this._transport){bc.onreadystatechange=bc.onload=bc.onloadend=bc.onabort=bc.ontimeout=bc.onerror=bb;
bc.dispose();
}}});
})();
(function(){var b="//",a="qx.util.Request";
qx.Class.define(a,{statics:{isCrossDomain:function(c){var e=qx.util.Uri.parseUri(c),location=window.location,d=location.protocol;
if(!(c.indexOf(b)!==-1)){return false;
}
if(d.substr(0,d.length-1)==e.protocol&&location.host===e.host&&location.port===e.port){return false;
}return true;
},isSuccessful:function(status){return (status>=200&&status<300||status===304);
}}});
})();
(function(){var x="source",w="password",v="qx.util.Uri",u="port",t="protocol",s="&",r="",q="userInfo",p="?",n="user",e="anchor",l="strict",h="queryKey",c="directory",b="loose",g="relative",f="path",j="host",a="file",k="authority",d="query";
qx.Class.define(v,{statics:{parseUri:function(y,z){var A={key:[x,t,k,q,n,w,j,u,g,f,c,a,d,e],q:{name:h,parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};
var o=A,m=A.parser[z?l:b].exec(y),B={},i=14;

while(i--){B[o.key[i]]=m[i]||r;
}B[o.q.name]={};
B[o.key[12]].replace(o.q.parser,function(C,D,E){if(D){B[o.q.name][D]=E;
}});
return B;
},appendParamsToUrl:function(F,G){if(G===undefined){return F;
}
if(qx.lang.Type.isObject(G)){G=qx.lang.Object.toUriParameter(G);
}
if(!G){return F;
}return F+=(/\?/).test(F)?s+G:p+G;
}}});
})();
(function(){var u='"',t="{",s="[",r=",",q="",p="get",o="}",n="]",m='":',l="&",d="null",k='\\t',g='\\"',c='\\n',b='\\b',f="=",e="qx.util.Serializer",h='\\r',a='\\\\',j='\\f';
qx.Class.define(e,{statics:{toUriParameter:function(v,w,x){var B=q;
var C=qx.util.PropertyUtil.getProperties(v.constructor);

for(var name in C){var y=v[p+qx.lang.String.firstUp(name)]();
if(qx.lang.Type.isArray(y)){var A=qx.data&&qx.data.IListData&&qx.Class.hasInterface(y&&y.constructor,qx.data.IListData);

for(var i=0;i<y.length;i++){var z=A?y.getItem(i):y[i];
B+=this.__ow(name,z,w);
}}else if(qx.lang.Type.isDate(y)&&x!=null){B+=this.__ow(name,x.format(y),w);
}else{B+=this.__ow(name,y,w);
}}return B.substring(0,B.length-1);
},__ow:function(name,D,E){if(D instanceof qx.core.Object&&E!=null){var F=encodeURIComponent(E(D));

if(F===undefined){var F=encodeURIComponent(D);
}}else{var F=encodeURIComponent(D);
}return encodeURIComponent(name)+f+F+l;
},toNativeObject:function(G,H,I){var L;
if(G==null){return null;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(G.constructor,qx.data.IListData)){L=[];

for(var i=0;i<G.getLength();i++){L.push(qx.util.Serializer.toNativeObject(G.getItem(i),H,I));
}return L;
}if(qx.lang.Type.isArray(G)){L=[];

for(var i=0;i<G.length;i++){L.push(qx.util.Serializer.toNativeObject(G[i],H,I));
}return L;
}if(G instanceof qx.core.Object){if(H!=null){var M=H(G);
if(M!=undefined){return M;
}}L={};
var N=qx.util.PropertyUtil.getAllProperties(G.constructor);

for(var name in N){if(N[name].group!=undefined){continue;
}var K=G[p+qx.lang.String.firstUp(name)]();
L[name]=qx.util.Serializer.toNativeObject(K,H,I);
}return L;
}if(qx.lang.Type.isDate(G)&&I!=null){return I.format(G);
}if(qx.locale&&qx.locale.LocalizedString&&G instanceof qx.locale.LocalizedString){return G.toString();
}if(qx.lang.Type.isObject(G)){L={};

for(var J in G){L[J]=qx.util.Serializer.toNativeObject(G[J],H,I);
}return L;
}return G;
},toJson:function(O,P,Q){var T=q;
if(O==null){return d;
}if(qx.data&&qx.data.IListData&&qx.Class.hasInterface(O.constructor,qx.data.IListData)){T+=s;

for(var i=0;i<O.getLength();i++){T+=qx.util.Serializer.toJson(O.getItem(i),P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(qx.lang.Type.isArray(O)){T+=s;

for(var i=0;i<O.length;i++){T+=qx.util.Serializer.toJson(O[i],P,Q)+r;
}
if(T!=s){T=T.substring(0,T.length-1);
}return T+n;
}if(O instanceof qx.core.Object){if(P!=null){var U=P(O);
if(U!=undefined){return u+U+u;
}}T+=t;
var V=qx.util.PropertyUtil.getProperties(O.constructor);

for(var name in V){if(V[name].group!=undefined){continue;
}var S=O[p+qx.lang.String.firstUp(name)]();
T+=u+name+m+qx.util.Serializer.toJson(S,P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(O instanceof qx.locale.LocalizedString){O=O.toString();
}if(qx.lang.Type.isDate(O)&&Q!=null){return u+Q.format(O)+u;
}if(qx.lang.Type.isObject(O)){T+=t;

for(var R in O){T+=u+R+m+qx.util.Serializer.toJson(O[R],P,Q)+r;
}
if(T!=t){T=T.substring(0,T.length-1);
}return T+o;
}if(qx.lang.Type.isString(O)){O=O.replace(/([\\])/g,a);
O=O.replace(/(["])/g,g);
O=O.replace(/([\r])/g,h);
O=O.replace(/([\f])/g,j);
O=O.replace(/([\n])/g,c);
O=O.replace(/([\t])/g,k);
O=O.replace(/([\b])/g,b);
return u+O+u;
}if(qx.lang.Type.isDate(O)||qx.lang.Type.isRegExp(O)){return u+O+u;
}return O+q;
}}});
})();
(function(){var t="qx.event.type.Event",s="GET",r="function",q="xml",p="POST",o="application/xml",n="HEAD",m="Boolean",l="PUT",k="Accept",d="application/json",j="application/x-www-form-urlencoded",g="Cache-Control",c="Content-Type",b="OPTIONS",f="qx.debug.io",e="qx.io.request.Xhr",h="json",a="DELETE",i="String";
qx.Class.define(e,{extend:qx.io.request.AbstractRequest,construct:function(u,v){if(v!==undefined){this.setMethod(v);
}qx.io.request.AbstractRequest.call(this,u);
},events:{"readystatechange":t,"success":t,"load":t,"statusError":t},statics:{PARSER:{json:qx.lang.Json.parse,xml:qx.xml.Document.fromString}},properties:{method:{check:[n,b,s,p,l,a],init:s},async:{check:m,init:true},accept:{check:i,nullable:true},cache:{check:function(w){return qx.lang.Type.isBoolean(w)||qx.lang.Type.isString(w);
},init:true}},members:{__ol:null,_createTransport:function(){return new qx.bom.request.Xhr();
},_getConfiguredUrl:function(){var x=this.getUrl(),y;

if(this.getMethod()===s&&this.getRequestData()){y=this._serializeData(this.getRequestData());
x=qx.util.Uri.appendParamsToUrl(x,y);
}
if(this.getCache()===false){x=qx.util.Uri.appendParamsToUrl(x,{nocache:new Date().valueOf()});
}return x;
},_setRequestHeaders:function(){var z=this._transport;
if(qx.lang.Type.isString(this.getCache())){z.setRequestHeader(g,this.getCache());
}if(this.getMethod()===p){z.setRequestHeader(c,j);
}if(this.getAccept()){if(qx.core.Environment.get(f)){this.debug("Accepting: '"+this.getAccept()+"'");
}z.setRequestHeader(k,this.getAccept());
}},_getParsedResponse:function(){var B=this._transport.responseText,A=this._getParser();

if(typeof A===r){return A.call(this,B);
}return B;
},setParser:function(C){var D=qx.io.request.Xhr;
if(typeof D.PARSER[C]===r){return this.__ol=D.PARSER[C];
}return this.__ol=C;
},_getParser:function(){var E=this.__ol;
if(E){return E;
}if(!this.isDone()){return;
}switch(this.getResponseContentType()){case d:E=qx.io.request.Xhr.PARSER[h];
break;
case o:E=qx.io.request.Xhr.PARSER[q];
break;
default:E=null;
break;
}if((/[^\/]+\/[^\+]+\+xml/).test(this.getResponseContentType())){E=qx.io.request.Xhr.PARSER[q];
}return E;
}}});
})();
(function(){var s="engine.name",r="",q="qx.debug.io",p="mshtml",o="gecko",n="engine.version",m="onunload",l="opera",k="undefined",j="activex",c="Microsoft.XMLHTTP",i="io.xhr",g="Microsoft.XMLDOM",b="xhr",a="Content-Type",f="browser.version",d="qx.bom.request.Xhr",h="file:";
qx.Bootstrap.define(d,{construct:function(){this.__qz=qx.Bootstrap.bind(this.__qH,this);
this.__mL=qx.Bootstrap.bind(this.__qJ,this);
this.__qG();
if(window.attachEvent){this.__qA=qx.Bootstrap.bind(this.__qM,this);
window.attachEvent(m,this.__qA);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{readyState:0,responseText:r,responseXML:null,status:0,statusText:r,timeout:0,open:function(t,u,v,w,x){if(this.__mm){return;
}this.__qB=false;
this.__mO=false;

if(typeof v==k){v=true;
}this.__qC=v;
if(!this.__qN()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.dispose();
this.__qG();
}this.__qE.onreadystatechange=this.__qz;

try{if(qx.core.Environment.get(q)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Open native request with method: "+t+", url: "+u+", async: "+v);
}this.__qE.open(t,u,v,w,x);
}catch(y){if(!qx.util.Request.isCrossDomain(u)){throw y;
}
if(!this.__qC){this.__qD=y;
}
if(this.__qC){if(window.XDomainRequest){this.readyState=4;
this.__qE=new XDomainRequest();
this.__qE.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);

if(qx.core.Environment.get(q)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Retry open native request with method: "+t+", url: "+u+", async: "+v);
}this.__qE.open(t,u,v,w,x);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}}if(qx.core.Environment.get(s)===o&&parseInt(qx.core.Environment.get(n),10)<2&&!this.__qC){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(z,A){if(this.__mm){return;
}this.__qE.setRequestHeader(z,A);
},send:function(B){if(this.__mm){return;
}if(!this.__qC&&this.__qD){throw this.__qD;
}B=typeof B==k?null:B;
try{if(qx.core.Environment.get(q)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Send native request");
}this.__qE.send(B);
}catch(C){if(!this.__qC){throw C;
}}if(qx.core.Environment.get(s)===o&&!this.__qC){this.__qH();
}this.__qB=true;
if(qx.core.Environment.get(s)===l&&this.timeout===0){this.timeout=10000;
}if(this.timeout>0){this.__qF=window.setTimeout(this.__mL,this.timeout);
}},abort:function(D){if(this.__mm){return;
}this.__mO=true;
this.__qE.abort();

if(this.__qE){this.readyState=this.__qE.readyState;
}
if(D){return;
}this.onabort();
},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(E){if(this.__mm){return;
}return this.__qE.getResponseHeader(E);
},getAllResponseHeaders:function(){if(this.__mm){return;
}return this.__qE.getAllResponseHeaders();
},getRequest:function(){return this.__qE;
},dispose:function(){if(this.__mm){return false;
}if(window.detachEvent){window.detachEvent(m,this.__qA);
}try{this.__qE.onreadystatechange;
}catch(G){return;
}var F=function(){};
this.__qE.onreadystatechange=F;
this.__qE.onload=F;
this.__qE.onerror=F;
this.abort(true);
this.__qE=null;
this.__mm=true;
return true;
},_createNativeXhr:function(){var H=qx.core.Environment.get(i);

if(H===b){return new XMLHttpRequest();
}
if(H==j){return new window.ActiveXObject(c);
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){return window.location.protocol;
},__qE:null,__qC:null,__qz:null,__qA:null,__mL:null,__qB:null,__mO:null,__ca:null,__mm:null,__qF:null,__qD:null,__qG:function(){this.__qE=this._createNativeXhr();
this.__qE.onreadystatechange=this.__qz;
this.__mm=this.__qB=this.__mO=false;
},__qH:function(){var I=this.__qE,J=true;

if(qx.core.Environment.get(q)){qx.Bootstrap.debug(qx.bom.request.Xhr,"Received native readyState: "+I.readyState);
}if(this.readyState==I.readyState){return;
}this.readyState=I.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__mO&&!this.__qB){return;
}if(!this.__qC&&(I.readyState==2||I.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText=r;
this.responseXML=null;

if(this.readyState>qx.bom.request.Xhr.OPENED){try{this.status=I.status;
this.statusText=I.statusText;
this.responseText=I.responseText;
this.responseXML=I.responseXML;
}catch(K){J=false;
}
if(J){this.__qK();
this.__qL();
}}this.__mS();
if(this.readyState==qx.bom.request.Xhr.DONE){if(I){I.onreadystatechange=function(){};
}}},__mS:function(){var L=this;
if(qx.core.Environment.get(s)==p&&qx.core.Environment.get(n)<8){if(this.__qC&&!this.__qB&&this.readyState>=qx.bom.request.Xhr.LOADING){if(this.readyState==qx.bom.request.Xhr.LOADING){return ;
}
if(this.readyState==qx.bom.request.Xhr.DONE){window.setTimeout(function(){L.readyState=3;
L.onreadystatechange();
L.readyState=4;
L.onreadystatechange();
L.__qI();
});
return;
}}}this.onreadystatechange();
this.__qI();
},__qI:function(){if(this.readyState===qx.bom.request.Xhr.DONE){window.clearTimeout(this.__qF);
if(this.__ca){this.ontimeout();
if(qx.core.Environment.get(s)===l){this.onerror();
}this.__ca=false;
}else{this.statusText?this.onload():this.onerror();
}this.onloadend();
}},__qJ:function(){var M=this.__qE;
this.readyState=qx.bom.request.Xhr.DONE;
this.__ca=true;
M.abort();
this.responseText=r;
this.responseXML=null;
this.__mS();
},__qK:function(){var N=this.__qE;
if(this._getProtocol()===h&&this.status===0){this.status=200;
}if(this.status===1223){this.status=204;
}if(N.readyState===qx.bom.request.Xhr.DONE&&this.status===0){this.status=304;
}},__qL:function(){if(qx.core.Environment.get(s)==p&&(this.getResponseHeader(a)||r).match(/[^\/]+\/[^\+]+\+xml/)&&this.responseXML&&!this.responseXML.documentElement){var O=new window.ActiveXObject(g);
O.async=false;
O.validateOnParse=false;
O.loadXML(this.responseText);
this.responseXML=O;
}},__qM:function(){try{if(this){this.dispose();
}}catch(e){}},__qN:function(){var name=qx.core.Environment.get(s);
var P=qx.core.Environment.get(f);
return !(name==p&&P<9||name==o&&P<3.5);
}},defer:function(){qx.core.Environment.add(q,false);
}});
})();
(function(){var k="Boolean",j="qx.event.type.Event",i="queued",h="String",g="sending",f="receiving",d="aborted",c="failed",b="nocache",a="completed",P="qx.io.remote.Response",O="POST",N="configured",M="timeout",L="GET",K="Pragma",J="no-url-params-on-post",I="PUT",H="no-cache",G="Cache-Control",r="Content-Type",s="text/plain",p="application/xml",q="application/json",n="text/html",o="application/x-www-form-urlencoded",l="qx.io.remote.Exchange",m="Integer",t="X-Qooxdoo-Response-Type",u="HEAD",y="qx.io.remote.Request",x="_applyResponseType",A="_applyState",z="text/javascript",C="changeState",B="_applyProhibitCaching",w="",F="_applyMethod",E="DELETE",D="boolean";
qx.Class.define(y,{extend:qx.core.Object,construct:function(Q,R,S){qx.core.Object.call(this);
this.__ry={};
this.__rz={};
this.__rA={};
this.__rB={};

if(Q!==undefined){this.setUrl(Q);
}
if(R!==undefined){this.setMethod(R);
}
if(S!==undefined){this.setResponseType(S);
}this.setProhibitCaching(true);
this.__rC=++qx.io.remote.Request.__rC;
},events:{"created":j,"configured":j,"sending":j,"receiving":j,"completed":P,"aborted":j,"failed":P,"timeout":P},statics:{__rC:0,methodAllowsRequestBody:function(T){return (T==O)||(T==I);
}},properties:{url:{check:h,init:w},method:{check:[L,O,I,u,E],apply:F,init:L},asynchronous:{check:k,init:true},data:{check:h,nullable:true},username:{check:h,nullable:true},password:{check:h,nullable:true},state:{check:[N,i,g,f,a,d,M,c],init:N,apply:A,event:C},responseType:{check:[s,z,q,p,n],init:s,apply:x},timeout:{check:m,nullable:true},prohibitCaching:{check:function(v){return typeof v==D||v===J;
},init:true,apply:B},crossDomain:{check:k,init:false},fileUpload:{check:k,init:false},transport:{check:l,nullable:true},useBasicHttpAuth:{check:k,init:false},parseJson:{check:k,init:true}},members:{__ry:null,__rz:null,__rA:null,__rB:null,__rC:null,send:function(){qx.io.remote.RequestQueue.getInstance().add(this);
},abort:function(){qx.io.remote.RequestQueue.getInstance().abort(this);
},reset:function(){switch(this.getState()){case g:case f:this.error("Aborting already sent request!");
case i:this.abort();
break;
}},isConfigured:function(){return this.getState()===N;
},isQueued:function(){return this.getState()===i;
},isSending:function(){return this.getState()===g;
},isReceiving:function(){return this.getState()===f;
},isCompleted:function(){return this.getState()===a;
},isAborted:function(){return this.getState()===d;
},isTimeout:function(){return this.getState()===M;
},isFailed:function(){return this.getState()===c;
},__rD:qx.event.GlobalError.observeMethod(function(e){var U=e.clone();
U.setTarget(this);
this.dispatchEvent(U);
}),_onqueued:function(e){this.setState(i);
this.__rD(e);
},_onsending:function(e){this.setState(g);
this.__rD(e);
},_onreceiving:function(e){this.setState(f);
this.__rD(e);
},_oncompleted:function(e){this.setState(a);
this.__rD(e);
this.dispose();
},_onaborted:function(e){this.setState(d);
this.__rD(e);
this.dispose();
},_ontimeout:function(e){this.setState(M);
this.__rD(e);
this.dispose();
},_onfailed:function(e){this.setState(c);
this.__rD(e);
this.dispose();
},_applyState:function(V,W){},_applyProhibitCaching:function(X,Y){if(!X){this.removeParameter(b);
this.removeRequestHeader(K);
this.removeRequestHeader(G);
return;
}if(X!==J||this.getMethod()!=O){this.setParameter(b,new Date().valueOf());
}else{this.removeParameter(b);
}this.setRequestHeader(K,H);
this.setRequestHeader(G,H);
},_applyMethod:function(ba,bb){if(qx.io.remote.Request.methodAllowsRequestBody(ba)){this.setRequestHeader(r,o);
}else{this.removeRequestHeader(r);
}var bc=this.getProhibitCaching();
this._applyProhibitCaching(bc,bc);
},_applyResponseType:function(bd,be){this.setRequestHeader(t,bd);
},setRequestHeader:function(bf,bg){this.__ry[bf]=bg;
},removeRequestHeader:function(bh){delete this.__ry[bh];
},getRequestHeader:function(bi){return this.__ry[bi]||null;
},getRequestHeaders:function(){return this.__ry;
},setParameter:function(bj,bk,bl){if(bl){this.__rA[bj]=bk;
}else{this.__rz[bj]=bk;
}},removeParameter:function(bm,bn){if(bn){delete this.__rA[bm];
}else{delete this.__rz[bm];
}},getParameter:function(bo,bp){if(bp){return this.__rA[bo]||null;
}else{return this.__rz[bo]||null;
}},getParameters:function(bq){return (bq?this.__rA:this.__rz);
},setFormField:function(br,bs){this.__rB[br]=bs;
},removeFormField:function(bt){delete this.__rB[bt];
},getFormField:function(bu){return this.__rB[bu]||null;
},getFormFields:function(){return this.__rB;
},getSequenceNumber:function(){return this.__rC;
}},destruct:function(){this.setTransport(null);
this.__ry=this.__rz=this.__rA=this.__rB=null;
}});
})();
(function(){var t="Integer",s="aborted",r="_onaborted",q="_on",p="__on",o="_applyEnabled",n="Boolean",m="sending",l="interval",k="failed",c="qx.io.remote.RequestQueue",j="timeout",g="completed",b="queued",a="__kr",f="io.maxrequests",d="receiving",h="singleton";
qx.Class.define(c,{type:h,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.__db=[];
this.__on=[];
this.__oo=0;
this.__kr=new qx.event.Timer(500);
this.__kr.addListener(l,this._oninterval,this);
},properties:{enabled:{init:true,check:n,apply:o},maxTotalRequests:{check:t,nullable:true},maxConcurrentRequests:{check:t,init:qx.core.Environment.get(f)},defaultTimeout:{check:t,init:5000}},members:{__db:null,__on:null,__oo:null,__kr:null,getRequestQueue:function(){return this.__db;
},getActiveQueue:function(){return this.__on;
},_debug:function(){var u;
},_check:function(){this._debug();
if(this.__on.length==0&&this.__db.length==0){this.__kr.stop();
}if(!this.getEnabled()){return;
}if(this.__db.length==0||(this.__db[0].isAsynchronous()&&this.__on.length>=this.getMaxConcurrentRequests())){return;
}if(this.getMaxTotalRequests()!=null&&this.__oo>=this.getMaxTotalRequests()){return;
}var v=this.__db.shift();
var w=new qx.io.remote.Exchange(v);
this.__oo++;
this.__on.push(w);
this._debug();
w.addListener(m,this._onsending,this);
w.addListener(d,this._onreceiving,this);
w.addListener(g,this._oncompleted,this);
w.addListener(s,this._oncompleted,this);
w.addListener(j,this._oncompleted,this);
w.addListener(k,this._oncompleted,this);
w._start=(new Date).valueOf();
w.send();
if(this.__db.length>0){this._check();
}},_remove:function(x){qx.lang.Array.remove(this.__on,x);
x.dispose();
this._check();
},__op:0,_onsending:function(e){e.getTarget().getRequest()._onsending(e);
},_onreceiving:function(e){e.getTarget().getRequest()._onreceiving(e);
},_oncompleted:function(e){var z=e.getTarget().getRequest();
var y=q+e.getType();
this._remove(e.getTarget());
try{if(z[y]){z[y](e);
}}catch(A){this.error("Request "+z+" handler "+y+" threw an error: ",A);
try{if(z[r]){var event=qx.event.Registration.createEvent(s,qx.event.type.Event);
z[r](event);
}}catch(B){}}},_oninterval:function(e){var I=this.__on;

if(I.length==0){this.__kr.stop();
return;
}var D=(new Date).valueOf();
var G;
var E;
var H=this.getDefaultTimeout();
var F;
var C;

for(var i=I.length-1;i>=0;i--){G=I[i];
E=G.getRequest();

if(E.isAsynchronous()){F=E.getTimeout();
if(F==0){continue;
}
if(F==null){F=H;
}C=D-G._start;

if(C>F){this.warn("Timeout: transport "+G.toHashCode());
this.warn(C+"ms > "+F+"ms");
G.timeout();
}}}},_applyEnabled:function(J,K){if(J){this._check();
}this.__kr.setEnabled(J);
},add:function(L){L.setState(b);

if(L.isAsynchronous()){this.__db.push(L);
}else{this.__db.unshift(L);
}this._check();

if(this.getEnabled()){this.__kr.start();
}},abort:function(M){var N=M.getTransport();

if(N){N.abort();
}else if(qx.lang.Array.contains(this.__db,M)){qx.lang.Array.remove(this.__db,M);
}}},destruct:function(){this._disposeArray(p);
this._disposeObjects(a);
this.__db=null;
}});
})();
(function(){var o="failed",n="sending",m="completed",k="receiving",j="aborted",h="timeout",g="qx.event.type.Event",f="Connection dropped",d="qx.io.remote.Response",c="=",bp="configured",bo="&",bn="Unknown status code. ",bm="qx.io.remote.transport.XmlHttp",bl="qx.io.remote.transport.Abstract",bk="Request-URL too large",bj="MSHTML-specific HTTP status code",bi="Not available",bh="Precondition failed",bg="Server error",v="Moved temporarily",w="qx.io.remote.Exchange",t="Possibly due to a cross-domain request?",u="Bad gateway",r="Gone",s="See other",p="Partial content",q="Server timeout",B="qx.io.remote.transport.Script",C="HTTP version not supported",L="Unauthorized",I="Possibly due to application URL using 'file:' protocol?",T="Multiple choices",O="Payment required",bc="Not implemented",Y="Proxy authentication required",E="Length required",bf="_applyState",be="changeState",bd="Not modified",D="qx.io.remote.Request",G="Connection closed by server",H="Moved permanently",K="_applyImplementation",M="",P="Method not allowed",V="Forbidden",bb="Use proxy",x="Ok",y="Conflict",F="Not found",S="Not acceptable",R="Request time-out",Q="Bad request",X="No content",W="file:",N="qx.io.remote.transport.Iframe",U="Request entity too large",a="Unknown status code",ba="Unsupported media type",z="Gateway time-out",A="created",J="Out of resources",b="undefined";
qx.Class.define(w,{extend:qx.core.Object,construct:function(bq){qx.core.Object.call(this);
this.setRequest(bq);
bq.setTransport(this);
},events:{"sending":g,"receiving":g,"completed":d,"aborted":g,"failed":d,"timeout":d},statics:{typesOrder:[bm,N,B],typesReady:false,typesAvailable:{},typesSupported:{},registerType:function(br,bs){qx.io.remote.Exchange.typesAvailable[bs]=br;
},initTypes:function(){if(qx.io.remote.Exchange.typesReady){return;
}
for(var bu in qx.io.remote.Exchange.typesAvailable){var bt=qx.io.remote.Exchange.typesAvailable[bu];

if(bt.isSupported()){qx.io.remote.Exchange.typesSupported[bu]=bt;
}}qx.io.remote.Exchange.typesReady=true;

if(qx.lang.Object.isEmpty(qx.io.remote.Exchange.typesSupported)){throw new Error("No supported transport types were found!");
}},canHandle:function(bv,bw,bx){if(!qx.lang.Array.contains(bv.handles.responseTypes,bx)){return false;
}
for(var by in bw){if(!bv.handles[by]){return false;
}}return true;
},_nativeMap:{0:A,1:bp,2:n,3:k,4:m},wasSuccessful:function(bz,bA,bB){if(bB){switch(bz){case null:case 0:return true;
case -1:return bA<4;
default:return typeof bz===b;
}}else{switch(bz){case -1:{};
return bA<4;
case 200:case 304:return true;
case 201:case 202:case 203:case 204:case 205:return true;
case 206:{};
return bA!==4;
case 300:case 301:case 302:case 303:case 305:case 400:case 401:case 402:case 403:case 404:case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 500:case 501:case 502:case 503:case 504:case 505:{};
return false;
case 12002:case 12007:case 12029:case 12030:case 12031:case 12152:case 13030:{};
return false;
default:if(bz>206&&bz<300){return true;
}qx.log.Logger.debug(this,"Unknown status code: "+bz+" ("+bA+")");
return false;
}}},statusCodeToString:function(bC){switch(bC){case -1:return bi;
case 0:var bD=window.location.href;
if(qx.lang.String.startsWith(bD.toLowerCase(),W)){return (bn+I);
}else{return (bn+t);
}break;
case 200:return x;
case 304:return bd;
case 206:return p;
case 204:return X;
case 300:return T;
case 301:return H;
case 302:return v;
case 303:return s;
case 305:return bb;
case 400:return Q;
case 401:return L;
case 402:return O;
case 403:return V;
case 404:return F;
case 405:return P;
case 406:return S;
case 407:return Y;
case 408:return R;
case 409:return y;
case 410:return r;
case 411:return E;
case 412:return bh;
case 413:return U;
case 414:return bk;
case 415:return ba;
case 500:return bg;
case 501:return bc;
case 502:return u;
case 503:return J;
case 504:return z;
case 505:return C;
case 12002:return q;
case 12029:return f;
case 12030:return f;
case 12031:return f;
case 12152:return G;
case 13030:return bj;
default:return a;
}}},properties:{request:{check:D,nullable:true},implementation:{check:bl,nullable:true,apply:K},state:{check:[bp,n,k,m,j,h,o],init:bp,event:be,apply:bf}},members:{send:function(){var bH=this.getRequest();

if(!bH){return this.error("Please attach a request object first");
}qx.io.remote.Exchange.initTypes();
var bF=qx.io.remote.Exchange.typesOrder;
var bE=qx.io.remote.Exchange.typesSupported;
var bJ=bH.getResponseType();
var bK={};

if(bH.getAsynchronous()){bK.asynchronous=true;
}else{bK.synchronous=true;
}
if(bH.getCrossDomain()){bK.crossDomain=true;
}
if(bH.getFileUpload()){bK.fileUpload=true;
}for(var bI in bH.getFormFields()){bK.programaticFormFields=true;
break;
}var bL,bG;

for(var i=0,l=bF.length;i<l;i++){bL=bE[bF[i]];

if(bL){if(!qx.io.remote.Exchange.canHandle(bL,bK,bJ)){continue;
}
try{bG=new bL;
this.setImplementation(bG);
bG.setUseBasicHttpAuth(bH.getUseBasicHttpAuth());
bG.send();
return true;
}catch(bM){this.error("Request handler throws error");
this.error(bM);
return;
}}}this.error("There is no transport implementation available to handle this request: "+bH);
},abort:function(){var bN=this.getImplementation();

if(bN){bN.abort();
}else{this.setState(j);
}},timeout:function(){var bQ=this.getImplementation();

if(bQ){var bP=M;

for(var bO in bQ.getParameters()){bP+=bo+bO+c+bQ.getParameters()[bO];
}this.warn("Timeout: implementation "+bQ.toHashCode()+", "+bQ.getUrl()+" ["+bQ.getMethod()+"], "+bP);
bQ.timeout();
}else{this.warn("Timeout: forcing state to timeout");
this.setState(h);
}this.__mI();
},__mI:function(){var bR=this.getRequest();

if(bR){bR.setTimeout(0);
}},_onsending:function(e){this.setState(n);
},_onreceiving:function(e){this.setState(k);
},_oncompleted:function(e){this.setState(m);
},_onabort:function(e){this.setState(j);
},_onfailed:function(e){this.setState(o);
},_ontimeout:function(e){this.setState(h);
},_applyImplementation:function(bS,bT){if(bT){bT.removeListener(n,this._onsending,this);
bT.removeListener(k,this._onreceiving,this);
bT.removeListener(m,this._oncompleted,this);
bT.removeListener(j,this._onabort,this);
bT.removeListener(h,this._ontimeout,this);
bT.removeListener(o,this._onfailed,this);
}
if(bS){var bV=this.getRequest();
bS.setUrl(bV.getUrl());
bS.setMethod(bV.getMethod());
bS.setAsynchronous(bV.getAsynchronous());
bS.setUsername(bV.getUsername());
bS.setPassword(bV.getPassword());
bS.setParameters(bV.getParameters(false));
bS.setFormFields(bV.getFormFields());
bS.setRequestHeaders(bV.getRequestHeaders());
if(bS instanceof qx.io.remote.transport.XmlHttp){bS.setParseJson(bV.getParseJson());
}var bY=bV.getData();

if(bY===null){var ca=bV.getParameters(true);
var bX=[];

for(var bU in ca){var bW=ca[bU];

if(bW instanceof Array){for(var i=0;i<bW.length;i++){bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW[i]));
}}else{bX.push(encodeURIComponent(bU)+c+encodeURIComponent(bW));
}}
if(bX.length>0){bS.setData(bX.join(bo));
}}else{bS.setData(bY);
}bS.setResponseType(bV.getResponseType());
bS.addListener(n,this._onsending,this);
bS.addListener(k,this._onreceiving,this);
bS.addListener(m,this._oncompleted,this);
bS.addListener(j,this._onabort,this);
bS.addListener(h,this._ontimeout,this);
bS.addListener(o,this._onfailed,this);
}},_applyState:function(cb,cc){switch(cb){case n:this.fireEvent(n);
break;
case k:this.fireEvent(k);
break;
case m:case j:case h:case o:var ce=this.getImplementation();

if(!ce){break;
}this.__mI();

if(this.hasListener(cb)){var cf=qx.event.Registration.createEvent(cb,qx.io.remote.Response);

if(cb==m){var cd=ce.getResponseContent();
cf.setContent(cd);
if(cd===null){cb=o;
}}else if(cb==o){cf.setContent(ce.getResponseContent());
}cf.setStatusCode(ce.getStatusCode());
cf.setResponseHeaders(ce.getResponseHeaders());
this.dispatchEvent(cf);
}this.setImplementation(null);
ce.dispose();
break;
}}},environment:{"qx.ioRemoteDebug":false,"qx.ioRemoteDebugData":false},destruct:function(){var cg=this.getImplementation();

if(cg){this.setImplementation(null);
cg.dispose();
}this.setRequest(null);
}});
})();
(function(){var q="qx.event.type.Event",p="String",o="failed",n="timeout",m="created",l="aborted",k="sending",j="configured",i="receiving",h="completed",c="Object",g="Boolean",f="abstract",b="_applyState",a="GET",e="changeState",d="qx.io.remote.transport.Abstract";
qx.Class.define(d,{type:f,extend:qx.core.Object,construct:function(){qx.core.Object.call(this);
this.setRequestHeaders({});
this.setParameters({});
this.setFormFields({});
},events:{"created":q,"configured":q,"sending":q,"receiving":q,"completed":q,"aborted":q,"failed":q,"timeout":q},properties:{url:{check:p,nullable:true},method:{check:p,nullable:true,init:a},asynchronous:{check:g,nullable:true,init:true},data:{check:p,nullable:true},username:{check:p,nullable:true},password:{check:p,nullable:true},state:{check:[m,j,k,i,h,l,n,o],init:m,event:e,apply:b},requestHeaders:{check:c,nullable:true},parameters:{check:c,nullable:true},formFields:{check:c,nullable:true},responseType:{check:p,nullable:true},useBasicHttpAuth:{check:g,nullable:true}},members:{send:function(){throw new Error("send is abstract");
},abort:function(){this.setState(l);
},timeout:function(){this.setState(n);
},failed:function(){this.setState(o);
},setRequestHeader:function(r,s){throw new Error("setRequestHeader is abstract");
},getResponseHeader:function(t){throw new Error("getResponseHeader is abstract");
},getResponseHeaders:function(){throw new Error("getResponseHeaders is abstract");
},getStatusCode:function(){throw new Error("getStatusCode is abstract");
},getStatusText:function(){throw new Error("getStatusText is abstract");
},getResponseText:function(){throw new Error("getResponseText is abstract");
},getResponseXml:function(){throw new Error("getResponseXml is abstract");
},getFetchedLength:function(){throw new Error("getFetchedLength is abstract");
},_applyState:function(u,v){switch(u){case m:this.fireEvent(m);
break;
case j:this.fireEvent(j);
break;
case k:this.fireEvent(k);
break;
case i:this.fireEvent(i);
break;
case h:this.fireEvent(h);
break;
case l:this.fireEvent(l);
break;
case o:this.fireEvent(o);
break;
case n:this.fireEvent(n);
break;
}return true;
}},destruct:function(){this.setRequestHeaders(null);
this.setParameters(null);
this.setFormFields(null);
}});
})();
(function(){var l="=",k="",j="engine.name",h="&",g="application/xml",f="application/json",d="text/html",c="textarea",b="_data_",a="load",F="text/plain",E="text/javascript",D="readystatechange",C="completed",B="?",A="qx.io.remote.transport.Iframe",z="none",y="display",x="gecko",w="frame_",s="aborted",t="pre",q="javascript:void(0)",r="sending",o="opera",p="failed",m="mshtml",n="form_",u="timeout",v="qx/static/blank.gif";
qx.Class.define(A,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var G=(new Date).valueOf();
var H=w+G;
var I=n+G;
var J;

if((qx.core.Environment.get(j)==m)){J=q;
}this.__nj=qx.bom.Iframe.create({id:H,name:H,src:J});
qx.bom.element.Style.set(this.__nj,y,z);
this.__Q=qx.bom.Element.create("form",{id:I,name:I,target:H});
qx.bom.element.Style.set(this.__Q,y,z);
qx.dom.Element.insertEnd(this.__Q,qx.dom.Node.getBodyElement(document));
this.__dc=qx.bom.Element.create(c,{id:b,name:b});
qx.dom.Element.insertEnd(this.__dc,this.__Q);
qx.dom.Element.insertEnd(this.__nj,qx.dom.Node.getBodyElement(document));
qx.event.Registration.addListener(this.__nj,a,this._onload,this);
this.__nk=qx.lang.Function.listener(this._onreadystatechange,this);
qx.bom.Event.addNativeListener(this.__nj,D,this.__nk);
},statics:{handles:{synchronous:false,asynchronous:true,crossDomain:false,fileUpload:true,programaticFormFields:true,responseTypes:[F,E,f,g,d]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4}},members:{__dc:null,__nl:0,__Q:null,__nj:null,__nk:null,send:function(){var L=this.getMethod();
var N=this.getUrl();
var R=this.getParameters(false);
var Q=[];

for(var M in R){var O=R[M];

if(O instanceof Array){for(var i=0;i<O.length;i++){Q.push(encodeURIComponent(M)+l+encodeURIComponent(O[i]));
}}else{Q.push(encodeURIComponent(M)+l+encodeURIComponent(O));
}}
if(Q.length>0){N+=(N.indexOf(B)>=0?h:B)+Q.join(h);
}if(this.getData()===null){var R=this.getParameters(true);
var Q=[];

for(var M in R){var O=R[M];

if(O instanceof Array){for(var i=0;i<O.length;i++){Q.push(encodeURIComponent(M)+l+encodeURIComponent(O[i]));
}}else{Q.push(encodeURIComponent(M)+l+encodeURIComponent(O));
}}
if(Q.length>0){this.setData(Q.join(h));
}}var K=this.getFormFields();

for(var M in K){var P=document.createElement(c);
P.name=M;
P.appendChild(document.createTextNode(K[M]));
this.__Q.appendChild(P);
}this.__Q.action=N;
this.__Q.method=L;
this.__dc.appendChild(document.createTextNode(this.getData()));
this.__Q.submit();
this.setState(r);
},_onload:qx.event.GlobalError.observeMethod(function(e){if(qx.core.Environment.get(j)==o&&this.getIframeHtmlContent()==k){return;
}
if(this.__Q.src){return;
}this._switchReadyState(qx.io.remote.transport.Iframe._numericMap.complete);
}),_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){this._switchReadyState(qx.io.remote.transport.Iframe._numericMap[this.__nj.readyState]);
}),_switchReadyState:function(S){switch(this.getState()){case C:case s:case p:case u:this.warn("Ignore Ready State Change");
return;
}while(this.__nl<S){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nl]);
}},setRequestHeader:function(T,U){},getResponseHeader:function(V){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return k;
},getIframeWindow:function(){return qx.bom.Iframe.getWindow(this.__nj);
},getIframeDocument:function(){return qx.bom.Iframe.getDocument(this.__nj);
},getIframeBody:function(){return qx.bom.Iframe.getBody(this.__nj);
},getIframeTextContent:function(){var W=this.getIframeBody();

if(!W){return null;
}
if(!W.firstChild){return k;
}if(W.firstChild.tagName&&W.firstChild.tagName.toLowerCase()==t){return W.firstChild.innerHTML;
}else{return W.innerHTML;
}},getIframeHtmlContent:function(){var X=this.getIframeBody();
return X?X.innerHTML:null;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==C){return null;
}var Y=this.getIframeTextContent();

switch(this.getResponseType()){case F:{};
return Y;
break;
case d:Y=this.getIframeHtmlContent();
{};
return Y;
break;
case f:Y=this.getIframeHtmlContent();
{};

try{return Y&&Y.length>0?qx.lang.Json.parse(Y):null;
}catch(ba){return this.error("Could not execute json: ("+Y+")",ba);
}case E:Y=this.getIframeHtmlContent();
{};

try{return Y&&Y.length>0?window.eval(Y):null;
}catch(bb){return this.error("Could not execute javascript: ("+Y+")",bb);
}case g:Y=this.getIframeDocument();
{};
return Y;
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Iframe,A);
},destruct:function(){if(this.__nj){qx.event.Registration.removeListener(this.__nj,a,this._onload,this);
qx.bom.Event.removeNativeListener(this.__nj,D,this.__nk);
if((qx.core.Environment.get(j)==x)){this.__nj.src=qx.util.ResourceManager.getInstance().toUri(v);
}qx.dom.Element.remove(this.__nj);
}
if(this.__Q){qx.dom.Element.remove(this.__Q);
}this.__nj=this.__Q=this.__dc=null;
}});
})();
(function(){var d="qx.event.handler.Iframe",c="load",b="iframe",a="navigate";
qx.Class.define(d,{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1,navigate:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(e){var f=qx.bom.Iframe.queryCurrentUrl(e);

if(f!==e.$$url){qx.event.Registration.fireEvent(e,a,qx.event.type.Data,[f]);
e.$$url=f;
}qx.event.Registration.fireEvent(e,c);
})},members:{canHandleEvent:function(g,h){return g.tagName.toLowerCase()===b;
},registerEvent:function(i,j,k){},unregisterEvent:function(l,m,n){}},defer:function(o){qx.event.Registration.addHandler(o);
}});
})();
(function(){var i="engine.name",h="load",g="",f="qx.bom.Iframe",e="osx",d="os.name",c="webkit",b="iframe",a="body";
qx.Class.define(f,{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(j,k){var j=j?qx.lang.Object.clone(j):{};
var l=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var m in l){if(j[m]==null){j[m]=l[m];
}}return qx.bom.Element.create(b,j,k);
},getWindow:function(n){try{return n.contentWindow;
}catch(o){return null;
}},getDocument:qx.core.Environment.select(i,{"mshtml":function(p){try{var q=this.getWindow(p);
return q?q.document:null;
}catch(r){return null;
}},"default":function(s){try{return s.contentDocument;
}catch(t){return null;
}}}),getBody:function(u){try{var v=this.getDocument(u);
return v?v.getElementsByTagName(a)[0]:null;
}catch(w){return null;
}},setSource:function(x,y){try{if(this.getWindow(x)&&qx.dom.Hierarchy.isRendered(x)){try{if((qx.core.Environment.get(i)==c)&&qx.core.Environment.get(d)==e){var z=this.getWindow(x);

if(z){z.stop();
}}this.getWindow(x).location.replace(y);
}catch(A){x.src=y;
}}else{x.src=y;
}this.__om(x);
}catch(B){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(C){var D=this.getDocument(C);

try{if(D&&D.location){return D.location.href;
}}catch(E){}return g;
},__om:function(F){var G=function(){qx.bom.Event.removeNativeListener(F,h,G);
F.$$url=qx.bom.Iframe.queryCurrentUrl(F);
};
qx.bom.Event.addNativeListener(F,h,G);
}}});
})();
(function(){var a="qx.dom.Element";
qx.Class.define(a,{statics:{hasChild:function(parent,b){return b.parentNode===parent;
},hasChildren:function(c){return !!c.firstChild;
},hasChildElements:function(d){d=d.firstChild;

while(d){if(d.nodeType===1){return true;
}d=d.nextSibling;
}return false;
},getParentElement:function(e){return e.parentNode;
},isInDom:function(f,g){if(!g){g=window;
}var h=g.document.getElementsByTagName(f.nodeName);

for(var i=0,l=h.length;i<l;i++){if(h[i]===f){return true;
}}return false;
},insertAt:function(j,parent,k){var m=parent.childNodes[k];

if(m){parent.insertBefore(j,m);
}else{parent.appendChild(j);
}return true;
},insertBegin:function(n,parent){if(parent.firstChild){this.insertBefore(n,parent.firstChild);
}else{parent.appendChild(n);
}},insertEnd:function(o,parent){parent.appendChild(o);
},insertBefore:function(p,q){q.parentNode.insertBefore(p,q);
return true;
},insertAfter:function(r,s){var parent=s.parentNode;

if(s==parent.lastChild){parent.appendChild(r);
}else{return this.insertBefore(r,s.nextSibling);
}return true;
},remove:function(t){if(!t.parentNode){return false;
}t.parentNode.removeChild(t);
return true;
},removeChild:function(u,parent){if(u.parentNode!==parent){return false;
}parent.removeChild(u);
return true;
},removeChildAt:function(v,parent){var w=parent.childNodes[v];

if(!w){return false;
}parent.removeChild(w);
return true;
},replaceChild:function(x,y){if(!y.parentNode){return false;
}y.parentNode.replaceChild(x,y);
return true;
},replaceAt:function(z,A,parent){var B=parent.childNodes[A];

if(!B){return false;
}parent.replaceChild(z,B);
return true;
}}});
})();
(function(){var r="&",q="=",p="?",o="application/json",n="completed",m="text/plain",l="text/javascript",k="qx.io.remote.transport.Script",j="",h="_ScriptTransport_data",c="script",g="timeout",f="_ScriptTransport_",b="_ScriptTransport_id",a="aborted",e="utf-8",d="failed";
qx.Class.define(k,{extend:qx.io.remote.transport.Abstract,construct:function(){qx.io.remote.transport.Abstract.call(this);
var s=++qx.io.remote.transport.Script.__nC;

if(s>=2000000000){qx.io.remote.transport.Script.__nC=s=1;
}this.__iI=null;
this.__nC=s;
},statics:{__nC:0,_instanceRegistry:{},ScriptTransport_PREFIX:f,ScriptTransport_ID_PARAM:b,ScriptTransport_DATA_PARAM:h,handles:{synchronous:false,asynchronous:true,crossDomain:true,fileUpload:false,programaticFormFields:false,responseTypes:[m,l,o]},isSupported:function(){return true;
},_numericMap:{"uninitialized":1,"loading":2,"loaded":2,"interactive":3,"complete":4},_requestFinished:qx.event.GlobalError.observeMethod(function(t,content){var u=qx.io.remote.transport.Script._instanceRegistry[t];

if(u==null){}else{u._responseContent=content;
u._switchReadyState(qx.io.remote.transport.Script._numericMap.complete);
}})},members:{__nl:0,__iI:null,__nC:null,send:function(){var x=this.getUrl();
x+=(x.indexOf(p)>=0?r:p)+qx.io.remote.transport.Script.ScriptTransport_ID_PARAM+q+this.__nC;
var A=this.getParameters();
var z=[];

for(var w in A){if(w.indexOf(qx.io.remote.transport.Script.ScriptTransport_PREFIX)==0){this.error("Illegal parameter name. The following prefix is used internally by qooxdoo): "+qx.io.remote.transport.Script.ScriptTransport_PREFIX);
}var y=A[w];

if(y instanceof Array){for(var i=0;i<y.length;i++){z.push(encodeURIComponent(w)+q+encodeURIComponent(y[i]));
}}else{z.push(encodeURIComponent(w)+q+encodeURIComponent(y));
}}
if(z.length>0){x+=r+z.join(r);
}var v=this.getData();

if(v!=null){x+=r+qx.io.remote.transport.Script.ScriptTransport_DATA_PARAM+q+encodeURIComponent(v);
}qx.io.remote.transport.Script._instanceRegistry[this.__nC]=this;
this.__iI=document.createElement(c);
this.__iI.charset=e;
this.__iI.src=x;
document.body.appendChild(this.__iI);
},_switchReadyState:function(B){switch(this.getState()){case n:case a:case d:case g:this.warn("Ignore Ready State Change");
return;
}while(this.__nl<B){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nl]);
}},setRequestHeader:function(C,D){},getResponseHeader:function(E){return null;
},getResponseHeaders:function(){return {};
},getStatusCode:function(){return 200;
},getStatusText:function(){return j;
},getFetchedLength:function(){return 0;
},getResponseContent:function(){if(this.getState()!==n){return null;
}
switch(this.getResponseType()){case m:case o:case l:{};
var F=this._responseContent;
return (F===0?0:(F||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.Script,k);
},destruct:function(){if(this.__iI){delete qx.io.remote.transport.Script._instanceRegistry[this.__nC];
document.body.removeChild(this.__iI);
}this.__iI=this._responseContent=null;
}});
})();
(function(){var m="failed",k="completed",j="=",h="aborted",g="sending",f="",d="&",c="engine.name",b="configured",a="timeout",L="application/xml",K="qx.io.remote.transport.XmlHttp",J="application/json",I="text/html",H="receiving",G="text/plain",F="text/javascript",E="?",D="created",C="Boolean",u='Referer',v="engine.version",r='Basic ',t="\n</pre>",p="string",q='Authorization',n="<pre>Could not execute json: \n",o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",w="mshtml",x=':',z="parseerror",y="file:",B="webkit",A="object";
qx.Class.define(K,{extend:qx.io.remote.transport.Abstract,statics:{handles:{synchronous:true,asynchronous:true,crossDomain:false,fileUpload:false,programaticFormFields:false,responseTypes:[G,F,J,L,I]},createRequestObject:qx.core.Environment.select(c,{"default":function(){return new XMLHttpRequest;
},"mshtml":function(){if(window.ActiveXObject&&qx.xml.Document.XMLHTTP){return new ActiveXObject(qx.xml.Document.XMLHTTP);
}
if(window.XMLHttpRequest){return new XMLHttpRequest;
}}}),isSupported:function(){return !!this.createRequestObject();
}},properties:{parseJson:{check:C,init:true}},members:{__nn:false,__nl:0,__no:null,getRequest:function(){if(this.__no===null){this.__no=qx.io.remote.transport.XmlHttp.createRequestObject();
this.__no.onreadystatechange=qx.lang.Function.bind(this._onreadystatechange,this);
}return this.__no;
},send:function(){this.__nl=0;
var Q=this.getRequest();
var M=this.getMethod();
var T=this.getAsynchronous();
var S=this.getUrl();
var O=(window.location.protocol===y&&!(/^http(s){0,1}\:/.test(S)));
this.__nn=O;
var W=this.getParameters(false);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){S+=(S.indexOf(E)>=0?d:E)+U.join(d);
}if(this.getData()===null){var W=this.getParameters(true);
var U=[];

for(var N in W){var R=W[N];

if(R instanceof Array){for(var i=0;i<R.length;i++){U.push(encodeURIComponent(N)+j+encodeURIComponent(R[i]));
}}else{U.push(encodeURIComponent(N)+j+encodeURIComponent(R));
}}
if(U.length>0){this.setData(U.join(d));
}}var V=function(X){var bd=o;
var bh=f;
var bb,ba,Y;
var be,bf,bg,bc;
var i=0;

do{bb=X.charCodeAt(i++);
ba=X.charCodeAt(i++);
Y=X.charCodeAt(i++);
be=bb>>2;
bf=((bb&3)<<4)|(ba>>4);
bg=((ba&15)<<2)|(Y>>6);
bc=Y&63;

if(isNaN(ba)){bg=bc=64;
}else if(isNaN(Y)){bc=64;
}bh+=bd.charAt(be)+bd.charAt(bf)+bd.charAt(bg)+bd.charAt(bc);
}while(i<X.length);
return bh;
};
try{if(this.getUsername()){if(this.getUseBasicHttpAuth()){Q.open(M,S,T);
Q.setRequestHeader(q,r+V(this.getUsername()+x+this.getPassword()));
}else{Q.open(M,S,T,this.getUsername(),this.getPassword());
}}else{Q.open(M,S,T);
}}catch(bi){this.error("Failed with exception: "+bi);
this.failed();
return;
}if(!(qx.core.Environment.get(c)==B)){Q.setRequestHeader(u,window.location.href);
}var P=this.getRequestHeaders();

for(var N in P){Q.setRequestHeader(N,P[N]);
}try{if(O&&T&&qx.core.Environment.get(c)==w&&qx.core.Environment.get(v)==9){qx.event.Timer.once(function(){Q.send(this.getData());
},this,0);
}else{Q.send(this.getData());
}}catch(bj){if(O){this.failedLocally();
}else{this.error("Failed to send data: "+bj,"send");
this.failed();
}return;
}if(!T){this._onreadystatechange();
}},failedLocally:function(){if(this.getState()===m){return;
}this.warn("Could not load from file: "+this.getUrl());
this.failed();
},_onreadystatechange:qx.event.GlobalError.observeMethod(function(e){switch(this.getState()){case k:case h:case m:case a:{};
return;
}var bk=this.getReadyState();

if(bk==4){if(!qx.io.remote.Exchange.wasSuccessful(this.getStatusCode(),bk,this.__nn)){if(this.getState()===b){this.setState(g);
}this.failed();
return;
}}if(bk==3&&this.__nl==1){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nl]);
}while(this.__nl<bk){this.setState(qx.io.remote.Exchange._nativeMap[++this.__nl]);
}}),getReadyState:function(){var bl=null;

try{bl=this.getRequest().readyState;
}catch(bm){}return bl;
},setRequestHeader:function(bn,bo){this.getRequestHeaders()[bn]=bo;
},getResponseHeader:function(bp){var bq=null;

try{bq=this.getRequest().getResponseHeader(bp)||null;
}catch(br){}return bq;
},getStringResponseHeaders:function(){var bt=null;

try{var bs=this.getRequest().getAllResponseHeaders();

if(bs){bt=bs;
}}catch(bu){}return bt;
},getResponseHeaders:function(){var bx=this.getStringResponseHeaders();
var by={};

if(bx){var bv=bx.split(/[\r\n]+/g);

for(var i=0,l=bv.length;i<l;i++){var bw=bv[i].match(/^([^:]+)\s*:\s*(.+)$/i);

if(bw){by[bw[1]]=bw[2];
}}}return by;
},getStatusCode:function(){var bz=-1;

try{bz=this.getRequest().status;
if(bz===1223){bz=204;
}}catch(bA){}return bz;
},getStatusText:function(){var bB=f;

try{bB=this.getRequest().statusText;
}catch(bC){}return bB;
},getResponseText:function(){var bD=null;

try{bD=this.getRequest().responseText;
}catch(bE){bD=null;
}return bD;
},getResponseXml:function(){var bH=null;
var bF=this.getStatusCode();
var bG=this.getReadyState();

if(qx.io.remote.Exchange.wasSuccessful(bF,bG,this.__nn)){try{bH=this.getRequest().responseXML;
}catch(bI){}}if(typeof bH==A&&bH!=null){if(!bH.documentElement){var s=String(this.getRequest().responseText).replace(/<\?xml[^\?]*\?>/,f);
bH.loadXML(s);
}if(!bH.documentElement){throw new Error("Missing Document Element!");
}
if(bH.documentElement.tagName==z){throw new Error("XML-File is not well-formed!");
}}else{throw new Error("Response was not a valid xml document ["+this.getRequest().responseText+"]");
}return bH;
},getFetchedLength:function(){var bJ=this.getResponseText();
return typeof bJ==p?bJ.length:0;
},getResponseContent:function(){var bK=this.getState();

if(bK!==k&&bK!=m){return null;
}var bM=this.getResponseText();

if(bK==m){return bM;
}
switch(this.getResponseType()){case G:case I:{};
return bM;
case J:{};

try{if(bM&&bM.length>0){var bL;

if(this.getParseJson()){bL=qx.lang.Json.parse(bM);
bL=(bL===0?0:(bL||null));
}else{bL=bM;
}return bL;
}else{return null;
}}catch(bN){this.error("Could not execute json: ["+bM+"]",bN);
return n+bM+t;
}case F:{};

try{if(bM&&bM.length>0){var bL=window.eval(bM);
return (bL===0?0:(bL||null));
}else{return null;
}}catch(bO){this.error("Could not execute javascript: ["+bM+"]",bO);
return null;
}case L:bM=this.getResponseXml();
{};
return (bM===0?0:(bM||null));
default:this.warn("No valid responseType specified ("+this.getResponseType()+")!");
return null;
}},_applyState:function(bP,bQ){switch(bP){case D:this.fireEvent(D);
break;
case b:this.fireEvent(b);
break;
case g:this.fireEvent(g);
break;
case H:this.fireEvent(H);
break;
case k:this.fireEvent(k);
break;
case m:this.fireEvent(m);
break;
case h:this.getRequest().abort();
this.fireEvent(h);
break;
case a:this.getRequest().abort();
this.fireEvent(a);
break;
}}},defer:function(){qx.io.remote.Exchange.registerType(qx.io.remote.transport.XmlHttp,K);
},destruct:function(){var bR=this.getRequest();

if(bR){bR.onreadystatechange=qx.lang.Function.empty;
switch(bR.readyState){case 1:case 2:case 3:bR.abort();
}}this.__no=null;
}});
})();
(function(){var c="Integer",b="Object",a="qx.io.remote.Response";
qx.Class.define(a,{extend:qx.event.type.Event,properties:{state:{check:c,nullable:true},statusCode:{check:c,nullable:true},content:{nullable:true},responseHeaders:{check:b,nullable:true}},members:{clone:function(d){var e=qx.event.type.Event.prototype.clone.call(this,d);
e.setType(this.getType());
e.setState(this.getState());
e.setStatusCode(this.getStatusCode());
e.setContent(this.getContent());
e.setResponseHeaders(this.getResponseHeaders());
return e;
},getResponseHeader:function(f){var g=this.getResponseHeaders();

if(g){return g[f]||null;
}return null;
}}});
})();
(function(){var n="error",m="?",l="fail",k="String",j="callback",i="loaded",h="changePhase",g="&",f='qx.data.store.Jsonp[',e='].callback',b="failed",d="=",c="success",a="qx.data.store.Jsonp";
qx.Class.define(a,{extend:qx.data.store.Json,construct:function(o,p,q){if(q!=undefined){this.setCallbackParam(q);
}qx.data.store.Json.call(this,o,p);
},properties:{callbackParam:{check:k,init:j,nullable:true},callbackName:{check:k,nullable:true}},members:{_createRequest:function(r){if(this.isDeprecatedTransport()){this._warnDeprecated();
return this.__nh(r);
}if(this._getRequest()){this._getRequest().dispose();
}var s=new qx.io.request.Jsonp();
this._setRequest(s);
s.setCallbackParam(this.getCallbackParam());
s.setCallbackName(this.getCallbackName());
s.setUrl(r);
s.addListener(c,this._onSuccess,this);
var t=this._delegate;

if(t&&qx.lang.Type.isFunction(t.configureRequest)){this._delegate.configureRequest(s);
}s.addListener(h,this._onChangePhase,this);
s.addListener(l,this._onFail,this);
s.send();
},__nh:function(u){if(this._getRequest()){this._getRequest().dispose();
}var w=new qx.io.ScriptLoader();
this._setRequest(w);
var x=this._delegate;

if(x&&qx.lang.Type.isFunction(x.configureRequest)){this._delegate.configureRequest(w);
}var v=u.indexOf(m)==-1?m:g;
u+=v+this.getCallbackParam()+d;
var y=parseInt(this.toHashCode(),10);
qx.data.store.Jsonp[y]=this;
u+=f+y+e;
w.load(u,function(status){delete this[y];

if(status===l){this.fireDataEvent(n);
}},this);
},callback:function(z){if(this.isDisposed()){return;
}this.__ni(z);
},__ni:function(A){if(A==undefined){this.setState(b);
this.fireEvent(n);
return;
}var B=this._delegate;

if(B&&qx.lang.Type.isFunction(B.manipulateData)){A=this._delegate.manipulateData(A);
}this._marshaler.toClass(A);
this.setModel(this._marshaler.toModel(A));
this.fireDataEvent(i,this.getModel());
},_warnDeprecated:function(){qx.log.Logger.warn("Using qx.io.ScriptLoader in qx.data.store.Jsonp "+"is deprecated. Please consult the API documentation.");
}}});
})();
(function(){var c="qx.event.type.Event",b="qx.io.request.Jsonp",a="Boolean";
qx.Class.define(b,{extend:qx.io.request.AbstractRequest,events:{"success":c,"load":c,"statusError":c},properties:{cache:{check:a,init:true}},members:{_createTransport:function(){return new qx.bom.request.Jsonp();
},_getConfiguredUrl:function(){var d=this.getUrl(),e;

if(this.getRequestData()){e=this._serializeData(this.getRequestData());
d=qx.util.Uri.appendParamsToUrl(d,e);
}
if(!this.getCache()){d=qx.util.Uri.appendParamsToUrl(d,{nocache:new Date().valueOf()});
}return d;
},_getParsedResponse:function(){return this._transport.responseJson;
},setCallbackParam:function(f){this._transport.setCallbackParam(f);
},setCallbackName:function(name){this._transport.setCallbackName(name);
}}});
})();
(function(){var k="qx.debug.io",j="engine.name",i="mshtml",h="",g="engine.version",f="head",e="script",d="opera",c="Unknown response headers",b="unknown",a="qx.bom.request.Script";
qx.Bootstrap.define(a,{construct:function(){this.__mR();
this.__mJ=qx.Bootstrap.bind(this._onNativeLoad,this);
this.__mK=qx.Bootstrap.bind(this._onNativeError,this);
this.__mL=qx.Bootstrap.bind(this._onTimeout,this);
this.__mM=document.head||document.getElementsByTagName(f)[0]||document.documentElement;
this.timeout=this.__mV()?0:15000;
},members:{readyState:null,status:null,statusText:null,timeout:null,__mN:null,open:function(l,m){if(this.__mm){return;
}this.__mR();
this.__mO=null;
this.__mP=m;

if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Open native request with "+"url: "+m);
}this.__mS(1);
},setRequestHeader:function(n,o){if(this.__mm){return;
}var p={};

if(this.readyState!==1){throw new Error("Invalid state");
}p[n]=o;
this.__mP=qx.util.Uri.appendParamsToUrl(this.__mP,p);
},send:function(){if(this.__mm){return;
}var s=this.__mW(),q=this.__mM,r=this;

if(this.timeout>0){this.__bX=window.setTimeout(this.__mL,this.timeout);
}
if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Send native request");
}q.insertBefore(s,q.firstChild);
window.setTimeout(function(){r.__mS(2);
r.__mS(3);
});
},abort:function(){if(this.__mm){return;
}this.__mO=true;
this.__mX();
this.onabort();
},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},onabort:function(){},ontimeout:function(){},getResponseHeader:function(t){if(this.__mm){return;
}return b;
},getAllResponseHeaders:function(){if(this.__mm){return;
}return c;
},setDetermineSuccess:function(u){qx.core.Assert.assertFunction(u);
this.__mN=u;
},dispose:function(){var v=this.__mQ;

if(!this.__mm){if(v){v.onload=v.onreadystatechange=null;
this.__mX();
}
if(this.__bX){window.clearTimeout(this.__bX);
}this.__mm=true;
}},_getUrl:function(){return this.__mP;
},_getScriptElement:function(){return this.__mQ;
},_onTimeout:function(){this.__mU();

if(!this.__mV()){this.onerror();
}this.ontimeout();

if(!this.__mV()){this.onloadend();
}},_onNativeLoad:function(){var y=this.__mQ,w=this.__mN,x=this;
if(this.__mO){return;
}if(qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9){if(!(/loaded|complete/).test(y.readyState)){return;
}else{if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native readyState: loaded");
}}}
if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Received native load");
}if(w){if(!this.status){this.status=w()?200:500;
}}
if(this.status===500){if(qx.core.Environment.get(k)){qx.Bootstrap.debug(qx.bom.request.Script,"Detected error");
}}
if(this.__bX){window.clearTimeout(this.__bX);
}window.setTimeout(function(){x.__mT();
x.__mS(4);
x.onload();
x.onloadend();
});
},_onNativeError:function(){this.__mU();
this.onerror();
this.onloadend();
},__mQ:null,__mM:null,__mP:h,__mJ:null,__mK:null,__mL:null,__bX:null,__mO:null,__mm:null,__mR:function(){this.readyState=0;
this.status=0;
this.statusText=h;
},__mS:function(z){this.readyState=z;
this.onreadystatechange();
},__mT:function(){this.__mX();
this.readyState=4;
if(!this.status){this.status=200;
}this.statusText=h+this.status;
},__mU:function(){this.__mX();
this.readyState=4;
this.status=0;
this.statusText=null;
},__mV:function(){var B=qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9;
var A=qx.core.Environment.get(j)===d;
return !(B||A);
},__mW:function(){var C=this.__mQ=document.createElement(e);
C.src=this.__mP;
C.onerror=this.__mK;
C.onload=this.__mJ;
if(qx.core.Environment.get(j)===i&&qx.core.Environment.get(g)<9){C.onreadystatechange=this.__mJ;
}return C;
},__mX:function(){var D=this.__mQ;

if(D&&D.parentNode){this.__mM.removeChild(D);
}}},defer:function(){qx.core.Environment.add(k,false);
}});
})();
(function(){var i="qx.debug.io",h="qx.bom.request.Jsonp",g="callback",f="open",e="dispose",d="",c="_onNativeLoad",b="].callback",a="qx.bom.request.Jsonp[";
qx.Bootstrap.define(h,{extend:qx.bom.request.Script,construct:function(){qx.bom.request.Script.apply(this);
this.__oa();
},members:{responseJson:null,__df:null,__nT:null,__nU:null,__nV:null,__nW:null,__mm:null,open:function(j,k){if(this.__mm){return;
}var l={},n,m,o=this;
this.responseJson=null;
this.__nV=false;
n=this.__nT||g;
m=this.__nU||a+this.__df+b;
if(!this.__nU){this.constructor[this.__df]=this;
}else{if(!window[this.__nU]){this.__nW=true;
window[this.__nU]=function(p){o.callback(p);
};
}else{if(qx.core.Environment.get(i)){qx.log.Logger.debug(qx.bom.request.Jsonp,"Callback "+this.__nU+" already exists");
}}}
if(qx.core.Environment.get(i)){qx.Bootstrap.debug(qx.bom.request.Jsonp,"Expecting JavaScript response to call: "+m);
}l[n]=m;
k=qx.util.Uri.appendParamsToUrl(k,l);
this.__nY(f,[j,k]);
},callback:function(q){if(this.__mm){return;
}this.__nV=true;
this.responseJson=q;
this.constructor[this.__df]=undefined;
this.__nX();
},setCallbackParam:function(r){this.__nT=r;
},setCallbackName:function(name){this.__nU=name;
},dispose:function(){this.__nX();
this.__nY(e);
},_onNativeLoad:function(){this.status=this.__nV?200:500;
this.__nY(c);
},__nX:function(){if(this.__nW&&window[this.__nU]){window[this.__nU]=undefined;
this.__nW=false;
}},__nY:function(s,t){qx.bom.request.Script.prototype[s].apply(this,t||[]);
},__oa:function(){this.__df=(new Date().valueOf())+(d+Math.random()).substring(2,5);
}}});
})();
(function(){var p="success",o="fail",n="mshtml",m="complete",l="error",k="load",j="opera",i="loaded",h="readystatechange",g="head",c="webkit",f="script",d="qx.io.ScriptLoader",b="text/javascript",a="abort";
qx.Bootstrap.define(d,{construct:function(){this.__mj=qx.Bootstrap.bind(this.__mn,this);
this.__mk=document.createElement(f);
},statics:{TIMEOUT:15},members:{__ml:null,__mm:null,__eB:null,__eC:null,__mj:null,__mk:null,load:function(q,r,s){if(this.__ml){throw new Error("Another request is still running!");
}this.__ml=true;
this.__mm=false;
var t=document.getElementsByTagName(g)[0];
var u=this.__mk;
this.__eB=r||null;
this.__eC=s||window;
u.type=b;
u.onerror=u.onload=u.onreadystatechange=this.__mj;
var self=this;
if(qx.bom.client.Engine.getName()===j&&this._getTimeout()>0){setTimeout(function(){self.dispose(o);
},this._getTimeout()*1000);
}u.src=q;
setTimeout(function(){t.appendChild(u);
},0);
},abort:function(){if(this.__ml){this.dispose(a);
}},dispose:function(status){if(this.__mm){return;
}this.__mm=true;
var x=this.__mk;
x.onerror=x.onload=x.onreadystatechange=null;
var w=x.parentNode;

if(w){w.removeChild(x);
}delete this.__ml;
if(this.__eB){var v=qx.bom.client.Engine.getName();

if(v==n||v==c){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__eB.call(self.__eC,status);
delete self.__eB;
}),0);
}else{this.__eB.call(this.__eC,status);
delete this.__eB;
}}},_getTimeout:function(){return qx.io.ScriptLoader.TIMEOUT;
},__mn:qx.event.GlobalError.observeMethod(function(e){var y=qx.bom.client.Engine.getName();
if(y==n){var z=this.__mk.readyState;

if(z==i){this.dispose(p);
}else if(z==m){this.dispose(p);
}else{return;
}}else if(y==j){if(qx.Bootstrap.isString(e)||e.type===l){return this.dispose(o);
}else if(e.type===k){return this.dispose(p);
}else{return;
}}else{if(qx.Bootstrap.isString(e)||e.type===l){this.dispose(o);
}else if(e.type===k){this.dispose(p);
}else if(e.type===h&&(e.target.readyState===m||e.target.readyState===i)){this.dispose(p);
}else{return;
}}})}});
})();
(function(){var g="://query.yahooapis.com/v1/public/yql?q=",f="callback",e="http",d="env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",c="&format=json&diagnostics=false&",b="https",a="qx.data.store.Yql";
qx.Class.define(a,{extend:qx.data.store.Jsonp,construct:function(h,i,j){var l=j?b:e;
var k=l+g+encodeURIComponent(h)+c+d;
qx.data.store.Jsonp.call(this,k,i,f);
}});
})();
(function(){var l="os.name",k="android",j="phonegap",h="menubutton",g="qx.event.type.Data",f="backbutton",e="qx.mobile.nativescroll",d="add",c="input",b="qx.ui.mobile.page.manager.Simple",a="remove";
qx.Class.define(b,{extend:qx.core.Object,construct:function(m){qx.core.Object.call(this);
this.__rT={};
this._setRoot(m);
this.__rX();
},events:{add:g,remove:g},members:{__rT:null,__rU:null,__cq:null,__rV:null,__rW:null,__rX:function(){if(qx.core.Environment.get(j)&&qx.core.Environment.get(l)==k){this.__rV=qx.lang.Function.bind(this._onBackButton,this);
this.__rW=qx.lang.Function.bind(this._onMenuButton,this);
qx.bom.Event.addNativeListener(document,f,this.__rV);
qx.bom.Event.addNativeListener(document,h,this.__rW);
}},__rY:function(){if(qx.core.Environment.get(j)&&qx.core.Environment.get(l)==k){qx.bom.Event.removeNativeListener(document,f,this.__rV);
qx.bom.Event.removeNativeListener(document,h,this.__rW);
}},_onBackButton:function(){if(qx.core.Environment.get(j)&&qx.core.Environment.get(l)==k){var n=true;

if(this.__rU){n=this.__rU.back();
}
if(n){navigator.app.exitApp();
}}},_onMenuButton:function(){if(qx.core.Environment.get(j)&&qx.core.Environment.get(l)==k){if(this.__rU){this.__rU.menu();
}}},add:function(o){this.__rT[o.getId()]=o;
this.fireDataEvent(d,o);
},remove:function(p){var q=this.getPage(p);
delete this.__rT[q.getId()];
this.fireDataEvent(a,q);
},show:function(r){var s=this.__rU;

if(s==r){return;
}
if(qx.core.Environment.get(e)){scrollTo(0,0);
}r.initialize();
r.start();
this._getRoot().add(r);

if(s){s.stop();
this.__sa();
this._removeCurrentPage();
}this._setCurrentPage(r);
},_removeCurrentPage:function(){this._getRoot().remove(this.__rU);
},_getRoot:function(){if(this.__cq==null){this._setRoot(qx.core.Init.getApplication().getRoot());
}return this.__cq;
},_setRoot:function(t){this.__cq=t;
},getCurrentPage:function(){return this.__rU;
},_setCurrentPage:function(u){this.__rU=u;
},getPage:function(v){return this.__rT[v];
},__sa:function(){var w=document.getElementsByTagName(c);

for(var i=0,length=w.length;i<length;i++){w[i].blur();
}}},destruct:function(){this.__rY();
this.__sb=this.__rT=this.__rU=this.__cq=null;
}});
})();
(function(){var g="",f="qx.core.BaseInit",d="engine.name",c="feedreader.MobileApplication",b="os.name",a="engine.version";
qx.Class.define(f,{statics:{getApplication:function(){return this.__ec||null;
},ready:function(){if(this.__ec){return;
}
if(qx.core.Environment.get(d)==g){qx.log.Logger.warn("Could not detect engine!");
}
if(qx.core.Environment.get(a)==g){qx.log.Logger.warn("Could not detect the version of the engine!");
}
if(qx.core.Environment.get(b)==g){qx.log.Logger.warn("Could not detect operating system!");
}qx.log.Logger.debug(this,"Load runtime: "+(new Date-qx.Bootstrap.LOADSTART)+"ms");
var i=c;
var j=qx.Class.getByName(i);

if(j){this.__ec=new j;
var h=new Date;
this.__ec.main();
qx.log.Logger.debug(this,"Main runtime: "+(new Date-h)+"ms");
var h=new Date;
this.__ec.finalize();
qx.log.Logger.debug(this,"Finalize runtime: "+(new Date-h)+"ms");
}else{qx.log.Logger.warn("Missing application class: "+i);
}},__ed:function(e){var k=this.__ec;

if(k){k.close();
}},__ee:function(){var l=this.__ec;

if(l){l.terminate();
}qx.core.ObjectRegistry.shutdown();
}}});
})();
(function(){var d="ready",c="shutdown",b="beforeunload",a="qx.core.Init";
qx.Class.define(a,{statics:{getApplication:qx.core.BaseInit.getApplication,ready:qx.core.BaseInit.ready,__ed:function(e){var f=this.__application;

if(f){e.setReturnValue(f.close());
}},__ee:function(){var g=this.__application;

if(g){g.terminate();
}}},defer:function(h){qx.event.Registration.addListener(window,d,h.ready,h);
qx.event.Registration.addListener(window,c,h.__ee,h);
qx.event.Registration.addListener(window,b,h.__ed,h);
}});
})();
(function(){var i="animationEnd",h="in",g="out",f="qx.event.type.Data",e="qx.ui.mobile.page.manager.Animation",d="reverse",c="slide",b="String",a="animationStart";
qx.Class.define(e,{extend:qx.ui.mobile.page.manager.Simple,events:{animationStart:f,animationEnd:f},properties:{defaultAnimation:{check:b,init:c}},statics:{ANIMATIONS:{"slide":true,"pop":true,"fade":true,"dissolve":true,"slideup":true,"flip":true,"swap":true,"cube":true}},members:{__sc:null,__sd:null,__se:null,__sf:null,__sg:null,isInAnimation:function(){return this.__sc;
},show:function(j,k){if(this.__sc){return;
}k=k||{};
this.__sd=k.animation||this.getDefaultAnimation();
k.reverse=k.reverse==null?false:k.reverse;
this.__se=k.fromHistory||k.reverse;
this.__sf=this.getCurrentPage();
this.__sg=j;
qx.ui.mobile.page.manager.Simple.prototype.show.call(this,j);
},_removeCurrentPage:function(){this.__sh();
},__sh:function(){this.__sc=true;
this.fireDataEvent(a,[this.__sf,this.__sg]);
var n=this.__sf.getContainerElement();
var l=this.__sg.getContainerElement();
var m=this.__sj(g);
var o=this.__sj(h);
qx.event.Registration.addListener(n,i,this._onAnimationEnd,this);
qx.event.Registration.addListener(l,i,this._onAnimationEnd,this);
qx.bom.element.Class.addClasses(l,o);
qx.bom.element.Class.addClasses(n,m);
},_onAnimationEnd:function(p){this._getRoot().remove(this.__sf);
this.__si();
this.fireDataEvent(i,[this.__sf,this.__sg]);
},__si:function(){if(this.__sc){var r=this.__sf.getContainerElement();
var q=this.__sg.getContainerElement();
qx.event.Registration.removeListener(r,i,this._onAnimationEnd,this);
qx.event.Registration.removeListener(q,i,this._onAnimationEnd,this);
qx.bom.element.Class.removeClasses(r,this.__sj(g));
qx.bom.element.Class.removeClasses(q,this.__sj(h));
this.__sc=false;
}},__sj:function(s){var t=[this.__sd,s];

if(this.__se){t.push(d);
}return t;
}},destruct:function(){this.__si();
this.__sc=this.__sd,this.__se=null;
this.__sf=this.__sg=null;
}});
})();
(function(){var b="engine.name",a="qx.event.handler.Transition";
qx.Class.define(a,{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(c){qx.core.Object.call(this);
this.__sk={};
this.__sl=qx.lang.Function.listener(this._onNative,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{transitionEnd:1,animationEnd:1,animationStart:1,animationIteration:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,TYPE_TO_NATIVE:qx.core.Environment.select("engine.name",{"webkit":{transitionEnd:"webkitTransitionEnd",animationEnd:"webkitAnimationEnd",animationStart:"webkitAnimationStart",animationIteration:"webkitAnimationIteration"},"gecko":{transitionEnd:"mozTransitionEnd",animationEnd:"mozAnimationEnd",animationStart:"mozAnimationStart",animationIteration:"mozAnimationIteration"},"default":null}),NATIVE_TO_TYPE:qx.core.Environment.select("engine.name",{"webkit":{webkitTransitionEnd:"transitionEnd",webkitAnimationEnd:"animationEnd",webkitAnimationStart:"animationStart",webkitAnimationIteration:"animationIteration"},"gecko":{mozTransitionEnd:"transitionEnd",mozAnimationEnd:"animationEnd",mozAnimationStart:"animationStart",mozAnimationIteration:"animationIteration"},"default":null})},members:{__sl:null,__sk:null,canHandleEvent:function(d,e){},registerEvent:qx.core.Environment.select(b,{"webkit|gecko":function(f,g,h){var j=qx.core.ObjectRegistry.toHashCode(f)+g;
var i=qx.event.handler.Transition.TYPE_TO_NATIVE[g];
this.__sk[j]={target:f,type:i};
qx.bom.Event.addNativeListener(f,i,this.__sl);
},"default":function(){}}),unregisterEvent:qx.core.Environment.select(b,{"webkit|gecko":function(k,l,m){var o=this.__sk;

if(!o){return;
}var n=qx.core.ObjectRegistry.toHashCode(k)+l;

if(o[n]){delete o[n];
}qx.bom.Event.removeNativeListener(k,qx.event.handler.Transition.TYPE_TO_NATIVE[l],this.__sl);
},"default":function(){}}),_onNative:qx.event.GlobalError.observeMethod(function(p){qx.event.Registration.fireEvent(p.target,qx.event.handler.Transition.NATIVE_TO_TYPE[p.type],qx.event.type.Event);
})},destruct:function(){var event;
var r=this.__sk;

for(var q in r){event=r[q];

if(event.target){qx.bom.Event.removeNativeListener(event.target,event.type,this.__sl);
}}this.__sk=this.__sl=null;
},defer:function(s){qx.event.Registration.addHandler(s);
}});
})();
(function(){var a="qx.ui.mobile.core.MLayoutHandling";
qx.Mixin.define(a,{members:{setLayout:function(b){return this._setLayout(b);
},getLayout:function(){return this._getLayout();
}},statics:{remap:function(c){c.getLayout=c._getLayout;
c.setLayout=c._setLayout;
}}});
})();
(function(){var a="qx.ui.mobile.container.Composite";
qx.Class.define(a,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling,qx.ui.mobile.core.MLayoutHandling],construct:function(b){qx.ui.mobile.core.Widget.call(this);

if(b){this.setLayout(b);
}},defer:function(c,d){qx.ui.mobile.core.MChildrenHandling.remap(d);
qx.ui.mobile.core.MLayoutHandling.remap(d);
}});
})();
(function(){var q="qx.event.type.Event",p="resize",o="px",n="orientationchange",m="start",l="qx.mobile.nativescroll",k="height",j="page",i="stop",h="resume",c="initialize",g="pause",f="back",b="minHeight",a="qx.ui.mobile.page.Page",e="menu",d="css.translate3d";
qx.Class.define(a,{extend:qx.ui.mobile.container.Composite,construct:function(r){qx.ui.mobile.container.Composite.call(this,r);

if(!r){this.setLayout(new qx.ui.mobile.layout.VBox());
}qx.ui.mobile.page.Page.getManager().add(this);
this._resize();
qx.event.Registration.addListener(window,n,this._resize,this);
qx.event.Registration.addListener(window,p,this._resize,this);
},events:{"initialize":q,"start":q,"stop":q,"pause":q,"resume":q,"back":q,"menu":q},properties:{defaultCssClass:{refine:true,init:j}},statics:{__x:null,getManager:function(){return qx.ui.mobile.page.Page.__x;
},setManager:function(s){qx.ui.mobile.page.Page.__x=s;
}},members:{__sm:false,_resize:function(){if(qx.core.Environment.get(l)){this._setStyle(b,window.innerHeight+o);
}else{this._setStyle(k,window.innerHeight+o);
}},_applyId:function(t,u){qx.ui.mobile.container.Composite.prototype._applyId.call(this,t,u);

if(u!=null){qx.ui.mobile.page.Page.getManager().remove(u);
}qx.ui.mobile.page.Page.getManager().add(this);
},back:function(){this.fireEvent(f);
var v=this._back();
return v||false;
},_back:function(){},menu:function(){this.fireEvent(e);
},show:function(w){qx.ui.mobile.page.Page.getManager().show(this,w);
},initialize:function(){if(!this.isInitialized()){this._initialize();
this.__sm=true;
this.fireEvent(c);
}},_initialize:function(){},isInitialized:function(){return this.__sm;
},start:function(){this._start();
this.fireEvent(m);
},_start:function(){},stop:function(){this._stop();
this.fireEvent(i);
},_stop:function(){},pause:function(){this._pause();
this.fireEvent(g);
},_pause:function(){},resume:function(){this._resume();
this.fireEvent(h);
},_resume:function(){}},destruct:function(){qx.event.Registration.removeListener(window,n,this._resize,this);
qx.event.Registration.removeListener(window,p,this._resize,this);
this.__sm=null;

if(!qx.core.ObjectRegistry.inShutDown){if(this.getId()){qx.ui.mobile.page.Page.getManager().remove(this.getId());
}}},defer:function(x){if(qx.core.Environment.get(d)){x.setManager(new qx.ui.mobile.page.manager.Animation());
}else{x.setManager(new qx.ui.mobile.page.manager.Simple());
}}});
})();
(function(){var b="abstract",a="qx.ui.mobile.layout.Abstract";
qx.Class.define(a,{extend:qx.core.Object,type:b,members:{_widget:null,__sn:null,__so:null,getCssClass:function(){},_getSupportedChildLayoutProperties:function(){},_setLayoutProperty:function(c,d,e){},setLayoutProperties:function(f,g){var i=this._getSupportedChildLayoutProperties();

for(var h in g){if(!i[h]){throw new Error("The layout does not support the "+h+" property");
}var j=g[h];
this._setLayoutProperty(f,h,j);
this._addChildLayoutProperty(f,h,j);
}},connectToWidget:function(k){if(this._widget){this._widget.removeCssClass(this.getCssClass());
}this._widget=k;

if(k){k.addCssClass(this.getCssClass());

if(this.__sn){for(var l in this.__sn){this.reset(l);
this.set(l,this.__sn[l]);
}}}else{this.__sn=null;
}},_addCachedProperty:function(m,n){if(!this.__sn){this.__sn={};
}this.__sn[m]=n;
},_getChildLayoutPropertyValue:function(o,p){var q=this.__sp(o);
return q[p];
},_addChildLayoutProperty:function(r,s,t){var u=this.__sp(r);

if(t==null){delete u[s];
}else{u[s]=t;
}},__sp:function(v){if(!this.__so){this.__so={};
}var w=this.__so;
var x=v.toHashCode();

if(!w[x]){w[x]={};
}return w[x];
}},destruct:function(){this._widget=null;
}});
})();
(function(){var l="_applyLayoutChange",k="boxFlex",j="abstract",i="middle",h="bottom",g="center",f="Boolean",e="flex",d="top",c="left",a="right",b="qx.ui.mobile.layout.AbstractBox";
qx.Class.define(b,{extend:qx.ui.mobile.layout.Abstract,type:j,construct:function(m,n,o){qx.ui.mobile.layout.Abstract.call(this);

if(m){this.setAlignX(m);
}
if(n){this.setAlignY(n);
}
if(o){this.setReversed(o);
}},properties:{alignX:{check:[c,g,a],nullable:true,init:null,apply:l},alignY:{check:[d,i,h],nullable:true,init:null,apply:l},reversed:{check:f,nullable:true,init:null,apply:l}},statics:{PROPERTY_CSS_MAPPING:{"alignX":{"hbox":{"left":"boxPackStart","center":"boxPackCenter","right":"boxPackEnd"},"vbox":{"left":"boxAlignStart","center":"boxAlignCenter","right":"boxAlignEnd"}},"alignY":{"hbox":{"top":"boxAlignStart","middle":"boxAlignCenter","bottom":"boxAlignEnd"},"vbox":{"top":"boxPackStart","middle":"boxPackCenter","bottom":"boxPackEnd"}},"reversed":{"hbox":{"true":"boxReverse","false":null},"vbox":{"true":"boxReverse","false":null}}},SUPPORTED_CHILD_LAYOUT_PROPERTIES:{"flex":1}},members:{_getSupportedChildLayoutProperties:function(){return qx.ui.mobile.layout.AbstractBox.SUPPORTED_CHILD_LAYOUT_PROPERTIES;
},_setLayoutProperty:function(p,q,r){if(q==e){var s=this._getChildLayoutPropertyValue(p,q);

if(s!=null){p.removeCssClass(k+r);
}p.addCssClass(k+r);
}},connectToWidget:function(t){if(this._widget){this.resetAlignX();
this.resetAlignY();
this.resetReversed();
}qx.ui.mobile.layout.Abstract.prototype.connectToWidget.call(this,t);
},_applyLayoutChange:function(u,v,w){if(this._widget){var A=this.getCssClass();
var y=qx.ui.mobile.layout.AbstractBox.PROPERTY_CSS_MAPPING[w][A];

if(v){var z=y[v];

if(z){this._widget.removeCssClass(z);
}}
if(u){var x=y[u];

if(x){this._widget.addCssClass(x);
}}}else{if(u){this._addCachedProperty(w,u);
}}}}});
})();
(function(){var b="vbox",a="qx.ui.mobile.layout.VBox";
qx.Class.define(a,{extend:qx.ui.mobile.layout.AbstractBox,members:{getCssClass:function(){return b;
}}});
})();
(function(){var n="String",m="",l="Boolean",k="tap",j="_applyShowButton",i="_applyShowBackButton",h="action",g="content",f="_applyBackButtonText",e="qx.event.type.Event",b="_applyContentCssClass",d="_applyButtonText",c="qx.ui.mobile.page.NavigationPage",a="_applyTitle";
qx.Class.define(c,{extend:qx.ui.mobile.page.Page,events:{action:e},properties:{title:{check:n,init:m,nullable:true,apply:a},backButtonText:{check:n,init:m,apply:f},buttonText:{check:n,init:m,apply:d},showBackButton:{check:l,init:false,apply:i},showButton:{check:l,init:false,apply:j},contentCssClass:{check:n,init:g,nullable:true,apply:b}},members:{__sq:null,__sr:null,__ss:null,__st:null,__oG:null,__su:null,getContent:function(){return this.__oG;
},_getTitle:function(){return this.__sr;
},_getNavigationBar:function(){return this.__sq();
},_getBackButton:function(){return this.__ss;
},_getButton:function(){return this.__st;
},_getScrollContainer:function(){return this.__su;
},_applyTitle:function(o,p){if(this.__sr){this.__sr.setValue(o);
}},_applyBackButtonText:function(q,r){if(this.__ss){this.__ss.setValue(q);
}},_applyButtonText:function(s,t){if(this.__st){this.__st.setValue(s);
}},_applyShowBackButton:function(u,v){this._showBackButton();
},_applyShowButton:function(w,x){this._showButton();
},_applyContentCssClass:function(y,z){if(this.__oG){this.__oG.setDefaultCssClass(y);
}},_showBackButton:function(){if(this.__ss){if(this.getShowBackButton()){this.__ss.show();
}else{this.__ss.hide();
}}},_showButton:function(){if(this.__st){if(this.getShowButton()){this.__st.show();
}else{this.__st.hide();
}}},_initialize:function(){qx.ui.mobile.page.Page.prototype._initialize.call(this);
this.__sq=this._createNavigationBar();

if(this.__sq){this.add(this.__sq);
}this.__su=this._createScrollContainer();
this.__oG=this._createContent();

if(this.__oG){this.__su.add(this.__oG);
}
if(this.__su){this.add(this.__su,{flex:1});
}},_createScrollContainer:function(){return new qx.ui.mobile.container.Scroll();
},_createContent:function(){var content=new qx.ui.mobile.container.Composite();
content.setDefaultCssClass(this.getContentCssClass());
return content;
},_createNavigationBar:function(){var A=new qx.ui.mobile.navigationbar.NavigationBar();
this.__ss=this._createBackButton();

if(this.__ss){this.__ss.addListener(k,this._onBackButtonTap,this);
this.__ss.setValue(this.getBackButtonText());
this._showBackButton();
A.add(this.__ss);
}this.__sr=this._createTitle();

if(this.__sr){A.add(this.__sr,{flex:1});
}this.__st=this._createButton();

if(this.__st){this.__st.addListener(k,this._onButtonTap,this);
this.__st.setValue(this.getButtonText());
this._showButton();
A.add(this.__st);
}return A;
},_createTitle:function(){return new qx.ui.mobile.navigationbar.Title(this.getTitle());
},_createBackButton:function(){return new qx.ui.mobile.navigationbar.BackButton();
},_createButton:function(){return new qx.ui.mobile.navigationbar.Button();
},_onBackButtonTap:function(B){this.back();
},_onButtonTap:function(C){this.fireEvent(h);
}},destruct:function(){this.__sq=this.__sr=this.__ss=this.__st=this.__oG=this.__su=null;
}});
})();
(function(){var m="resize",l="orientationchange",k="domupdated",j="qx/mobile/js/iscroll",i='TEXTAREA',h=".js",g='INPUT',f="scrollbar",d='SELECT',c="div",a="qx.ui.mobile.container.MIScroll",b="success";
qx.Mixin.define(a,{construct:function(){this.__sw();
this.__rX();
},members:{__sv:null,_createScrollElement:function(){var scroll=qx.bom.Element.create(c);
return scroll;
},_getScrollContentElement:function(){return this.getContainerElement().childNodes[0];
},__sw:function(){if(!window.iScroll){var o=j;
o+=h;
var n=qx.util.ResourceManager.getInstance().toUri(o);
var p=new qx.io.ScriptLoader();
p.load(n,this.__sz,this);
}else{this._setScroll(this.__sx());
}},__sx:function(){var scroll=new iScroll(this.getContainerElement(),{hideScrollbar:true,fadeScrollbar:true,hScrollbar:false,scrollbarClass:f,onBeforeScrollStart:function(e){var q=e.target;

while(q.nodeType!=1){q=q.parentNode;
}
if(q.tagName!=d&&q.tagName!=g&&q.tagName!=i){e.preventDefault();
}}});
return scroll;
},__rX:function(){qx.event.Registration.addListener(window,l,this._refresh,this);
qx.event.Registration.addListener(window,m,this._refresh,this);
this.addListener(k,this._refresh,this);
},__sy:function(){qx.event.Registration.removeListener(window,l,this._refresh,this);
qx.event.Registration.removeListener(window,m,this._refresh,this);
this.removeListener(k,this._refresh,this);
},__sz:function(status){if(status==b){this._setScroll(this.__sx());
}else{}},_setScroll:function(scroll){this.__sv=scroll;
},_refresh:function(){if(this.__sv){this.__sv.refresh();
}}},destruct:function(){this.__sy();
if(this.__sv){this.__sv.destroy();
}this.__sv;
}});
})();
(function(){var a="qx.ui.mobile.container.MNativeScroll";
qx.Mixin.define(a,{members:{_createScrollElement:function(){return null;
},_getScrollContentElement:function(){return null;
}}});
})();
(function(){var c="qx.ui.mobile.container.Scroll",b="scroll",a="qx.mobile.nativescroll";
qx.Class.define(c,{extend:qx.ui.mobile.core.Widget,include:[qx.ui.mobile.core.MChildrenHandling],properties:{defaultCssClass:{refine:true,init:b}},members:{_createContainerElement:function(){var e=qx.ui.mobile.core.Widget.prototype._createContainerElement.call(this);
var d=this._createScrollElement();

if(d){e.appendChild(d);
}return e;
},_getContentElement:function(){var f=qx.ui.mobile.core.Widget.prototype._getContentElement.call(this);
var g=this._getScrollContentElement();
return g||f;
}},defer:function(h){if(qx.core.Environment.get(a)==false){qx.Class.include(h,qx.ui.mobile.container.MIScroll);
}else{qx.Class.include(h,qx.ui.mobile.container.MNativeScroll);
}}});
})();
(function(){var c="middle",b="navigationbar",a="qx.ui.mobile.navigationbar.NavigationBar";
qx.Class.define(a,{extend:qx.ui.mobile.container.Composite,construct:function(d){qx.ui.mobile.container.Composite.call(this,d);

if(!d){this.setLayout(new qx.ui.mobile.layout.HBox().set({alignY:c}));
}},properties:{defaultCssClass:{refine:true,init:b}}});
})();
(function(){var b="qx.ui.mobile.layout.HBox",a="hbox";
qx.Class.define(b,{extend:qx.ui.mobile.layout.AbstractBox,members:{getCssClass:function(){return a;
}}});
})();
(function(){var g="no-wrap",f="Boolean",e="label",d="_applyValue",c="qx.ui.mobile.basic.Label",b="_applyWrap",a="changeValue";
qx.Class.define(c,{extend:qx.ui.mobile.core.Widget,construct:function(h){qx.ui.mobile.core.Widget.call(this);

if(h){this.setValue(h);
}this.initWrap();
},properties:{defaultCssClass:{refine:true,init:e},value:{nullable:true,init:null,apply:d,event:a},anonymous:{refine:true,init:true},wrap:{check:f,init:true,apply:b}},members:{_applyValue:function(i,j){this._setHtml(i);
},_applyWrap:function(k,l){if(k){this.removeCssClass(g);
}else{this.addCssClass(g);
}}}});
})();
(function(){var b="qx.ui.mobile.navigationbar.Title",a="h1";
qx.Class.define(b,{extend:qx.ui.mobile.basic.Label,properties:{wrap:{refine:true,init:false}},members:{_getTagName:function(){return a;
}}});
})();
(function(){var e="disabled",d="changeEnabled",c="_applyEnabled",b="Boolean",a="qx.ui.mobile.form.MEnable";
qx.Mixin.define(a,{properties:{enabled:{init:true,check:b,nullable:false,event:d,apply:c}},members:{_applyEnabled:function(f,g){if(f){this._setAttribute(e,null);

if(this.getAnonymous()){this.setAnonymous(false);
}}else{this._setAttribute(e,e);
this.setAnonymous(true);
}}}});
})();
(function(){var b="qx.ui.mobile.form.Button",a="button";
qx.Class.define(b,{extend:qx.ui.mobile.basic.Label,include:[qx.ui.mobile.form.MEnable],properties:{defaultCssClass:{refine:true,init:a},anonymous:{refine:true,init:false},wrap:{refine:true,init:false},activatable:{refine:true,init:true}}});
})();
(function(){var b="qx.ui.mobile.navigationbar.Button",a="navigationbar-button";
qx.Class.define(b,{extend:qx.ui.mobile.form.Button,properties:{defaultCssClass:{refine:true,init:a}}});
})();
(function(){var b="qx.ui.mobile.navigationbar.BackButton",a="navigationbar-backbutton";
qx.Class.define(b,{extend:qx.ui.mobile.navigationbar.Button,properties:{defaultCssClass:{refine:true,init:a}}});
})();
(function(){var g="changeSelectedFeed",f="changeFeeds",d="feedreader.mobile.OverviewPage",c="changeSelection",b="Feed Reader",a="_applyFeeds";
qx.Class.define(d,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setTitle(b);
},properties:{feeds:{event:f,init:null,apply:a},selectedFeed:{event:g,init:null,nullable:true}},members:{__oD:null,__sA:null,_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
this.__oD=new qx.ui.mobile.list.List();
this.__oD.setDelegate({configureItem:function(h,i){h.setTitle(i.getTitle());
h.setShowArrow(true);
}});
this.__oD.addListener(c,function(e){var j=this.__sA.getItem(e.getData());
this.setSelectedFeed(j);
},this);
this.getContent().add(this.__oD);
},_applyFeeds:function(k,l){this.__sA=k.getFeeds().getItem(0).getFeeds();
this.__oD.setModel(this.__sA);
}}});
})();
(function(){var r="change",q="_applyDelegate",p="changeModel",o="LI",n="",m="list",l="changeDelegate",k="qx.data.Array",j="data-selectable",i="false",c="__sB",h="qx.ui.mobile.list.List",f="changeSelection",b="tap",a="ul",e="Integer",d="_applyModel",g="qx.event.type.Data";
qx.Class.define(h,{extend:qx.ui.mobile.core.Widget,construct:function(s){qx.ui.mobile.core.Widget.call(this);
this.addListener(b,this._onTap,this);
this.__sB=new qx.ui.mobile.list.provider.Provider(this);

if(s){this.setDelegate(s);
}},events:{changeSelection:g},properties:{defaultCssClass:{refine:true,init:m},delegate:{apply:q,event:l,init:null,nullable:true},model:{check:k,apply:d,event:p,nullable:true,init:null},itemCount:{check:e,init:0}},members:{__sB:null,_getTagName:function(){return a;
},_onTap:function(t){var v=t.getOriginalTarget();
var u=-1;

while(v.tagName!=o){v=v.parentNode;
}
if(qx.bom.element.Attribute.get(v,j)!=i&&qx.dom.Element.hasChild(this.getContainerElement(),v)){u=qx.dom.Hierarchy.getElementIndex(v);
}
if(u!=-1){this.fireDataEvent(f,u);
}},_applyModel:function(w,x){if(x!=null){x.removeListener(r,this.__sC,this);
}
if(w!=null){w.addListener(r,this.__sC,this);
}this.__sC();
},_applyDelegate:function(y,z){this.__sB.setDelegate(y);
},__sC:function(){var A=this.getModel();
this.setItemCount(A?A.getLength():0);
this.__sD();
},__sD:function(){this._setHtml(n);
var E=this.getItemCount();
var D=this.getModel();
var F=this.getContentElement();

for(var C=0;C<E;C++){var B=this.__sB.getItemElement(D.getItem(C),C);
F.appendChild(B);
}this._domUpdated();
}},destruct:function(){this._disposeObjects(c);
}});
})();
(function(){var d="_applyDelegate",c="qx.ui.mobile.list.provider.Provider",b="createItemRenderer",a="changeDelegate";
qx.Class.define(c,{extend:qx.core.Object,properties:{delegate:{event:a,init:null,nullable:true,apply:d}},members:{__sE:null,_setItemRenderer:function(e){this.__sE=e;
},_getItemRenderer:function(){return this.__sE;
},getItemElement:function(f,g){this.__sE.reset();
this._configureItem(f,g);
return qx.bom.Element.clone(this.__sE.getContainerElement(),true);
},_configureItem:function(h,i){var j=this.getDelegate();

if(j!=null&&j.configureItem!=null){j.configureItem(this.__sE,h,i);
}},_createItemRenderer:function(){var l=qx.util.Delegate.getMethod(this.getDelegate(),b);
var k=null;

if(l==null){k=new qx.ui.mobile.list.renderer.Default();
}else{k=l();
}return k;
},_applyDelegate:function(m,n){this._setItemRenderer(this._createItemRenderer());
}},destruct:function(){this.__sE=null;
}});
})();
(function(){var a="qx.util.Delegate";
qx.Class.define(a,{statics:{getMethod:function(b,c){if(qx.util.Delegate.containsMethod(b,c)){return qx.lang.Function.bind(b[c],b);
}return null;
},containsMethod:function(d,e){var f=qx.lang.Type;

if(f.isObject(d)){return f.isFunction(d[e]);
}return false;
}}});
})();
(function(){var k="Boolean",j="arrow",i="selected",h="listItem",g="li",f="_applyAttribute",e="_applySelected",d="qx.ui.mobile.list.renderer.Abstract",c="LI",b="_applyShowArrow",a="abstract";
qx.Class.define(d,{extend:qx.ui.mobile.core.Widget,type:a,include:[qx.ui.mobile.core.MChildrenHandling],construct:function(){qx.ui.mobile.core.Widget.call(this);
this.initSelectable();
this.initShowArrow();
},properties:{defaultCssClass:{refine:true,init:h},selected:{check:k,init:false,apply:e},selectable:{check:k,init:true,apply:f},showArrow:{check:k,init:false,apply:b},activatable:{refine:true,init:true}},members:{reset:function(){},_getTagName:function(){return g;
},getRowIndexFromEvent:function(l){return this.getRowIndex(l.getOriginalTarget());
},getRowIndex:function(m){while(m.tagName!=c){m=m.parentNode;
}return qx.dom.Hierarchy.getElementIndex(m);
},_applyShowArrow:function(n,o){if(n){this.addCssClass(j);
}else{this.removeCssClass(j);
}},_applySelected:function(p,q){if(p){this.addCssClass(i);
}else{this.removeCssClass(i);
}}}});
})();
(function(){var f="",e="list-itemlabel",d="qx.ui.mobile.list.renderer.Default",c="list-itemimage",b="middle",a="subtitle";
qx.Class.define(d,{extend:qx.ui.mobile.list.renderer.Abstract,construct:function(){qx.ui.mobile.list.renderer.Abstract.call(this);
this.add(this._create());
},members:{__sF:null,__sr:null,__sG:null,getImageWidget:function(){return this.__sF;
},getTitleWidget:function(){return this.__sr;
},getSubTitleWidget:function(){return this.__sG;
},setImage:function(g){this.__sF.setSource(g);
},setTitle:function(h){this.__sr.setValue(h);
},setSubTitle:function(i){this.__sG.setValue(i);
},_create:function(){var j=qx.ui.mobile.container.Composite;
var l=new j(new qx.ui.mobile.layout.HBox().set({alignY:b}));
this.__sF=new qx.ui.mobile.basic.Image();
this.__sF.setAnonymous(true);
this.__sF.addCssClass(c);
l.add(this.__sF);
var k=new j(new qx.ui.mobile.layout.VBox());
l.add(k,{flex:1});
this.__sr=new qx.ui.mobile.basic.Label();
this.__sr.setWrap(false);
this.__sr.addCssClass(e);
k.add(this.__sr);
this.__sG=new qx.ui.mobile.basic.Label();
this.__sG.setWrap(false);
this.__sG.addCssClass(a);
k.add(this.__sG);
return l;
},reset:function(){this.__sF.setSource(null);
this.__sr.setValue(f);
this.__sG.setValue(f);
}}});
})();
(function(){var h="qx.event.type.Event",g="src",f="_applySource",e="loaded",d="img",c="loadingFailed",b="qx.ui.mobile.basic.Image",a="String";
qx.Class.define(b,{extend:qx.ui.mobile.core.Widget,construct:function(i){qx.ui.mobile.core.Widget.call(this);

if(i){this.setSource(i);
}else{this.initSource();
}},events:{loadingFailed:h,loaded:h},properties:{source:{check:a,nullable:true,init:null,apply:f}},members:{_getTagName:function(){return d;
},_applySource:function(j,k){var l=j;

if(l){l=qx.util.ResourceManager.getInstance().toUri(l);
var m=qx.io.ImageLoader;

if(!m.isFailed(l)){m.load(l,this.__ln,this);
}}this._setSource(l);
},__ln:function(n,o){if(o.failed){this.warn("Image could not be loaded: "+n);
this.fireEvent(c);
}else{this.fireEvent(e);
}this._domUpdated();
},_setSource:function(p){this._setAttribute(g,p);
}}});
})();
(function(){var c="engine.name",b="load",a="qx.io.ImageLoader";
qx.Bootstrap.define(a,{statics:{__dc:{},__ii:{width:null,height:null},__ij:/\.(png|gif|jpg|jpeg|bmp)\b/i,isLoaded:function(d){var e=this.__dc[d];
return !!(e&&e.loaded);
},isFailed:function(f){var g=this.__dc[f];
return !!(g&&g.failed);
},isLoading:function(h){var j=this.__dc[h];
return !!(j&&j.loading);
},getFormat:function(k){var m=this.__dc[k];
return m?m.format:null;
},getSize:function(n){var o=this.__dc[n];
return o?{width:o.width,height:o.height}:this.__ii;
},getWidth:function(p){var q=this.__dc[p];
return q?q.width:null;
},getHeight:function(r){var s=this.__dc[r];
return s?s.height:null;
},load:function(t,u,v){var w=this.__dc[t];

if(!w){w=this.__dc[t]={};
}if(u&&!v){v=window;
}if(w.loaded||w.loading||w.failed){if(u){if(w.loading){w.callbacks.push(u,v);
}else{u.call(v,t,w);
}}}else{w.loading=true;
w.callbacks=[];

if(u){w.callbacks.push(u,v);
}var y=new Image();
var x=qx.lang.Function.listener(this.__ik,this,y,t);
y.onload=x;
y.onerror=x;
y.src=t;
w.element=y;
}},abort:function(z){var A=this.__dc[z];

if(A&&!A.loaded){A.aborted=true;
var C=A.callbacks;
var B=A.element;
B.onload=B.onerror=null;
delete A.callbacks;
delete A.element;
delete A.loading;

for(var i=0,l=C.length;i<l;i+=2){C[i].call(C[i+1],z,A);
}}this.__dc[z]=null;
},__ik:qx.event.GlobalError.observeMethod(function(event,D,E){var F=this.__dc[E];
if(event.type===b){F.loaded=true;
F.width=this.__il(D);
F.height=this.__im(D);
var G=this.__ij.exec(E);

if(G!=null){F.format=G[1];
}}else{F.failed=true;
}D.onload=D.onerror=null;
var H=F.callbacks;
delete F.loading;
delete F.callbacks;
delete F.element;
for(var i=0,l=H.length;i<l;i+=2){H[i].call(H[i+1],E,F);
}}),__il:qx.core.Environment.select(c,{"gecko":function(I){return I.naturalWidth;
},"default":function(J){return J.width;
}}),__im:qx.core.Environment.select(c,{"gecko":function(K){return K.naturalHeight;
},"default":function(L){return L.height;
}})}});
})();
(function(){var g="_applyFeed",f="Back",d="changeFeed",c="changeSelection",b="feedreader.mobile.FeedPage",a="changeSelectedArticle";
qx.Class.define(b,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setShowBackButton(true);
this.setBackButtonText(this.tr(f));
},properties:{feed:{event:d,init:null,nullable:true,apply:g},selectedArticle:{event:a,init:null,nullable:true}},members:{__oD:null,__sH:null,_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
this.__oD=new qx.ui.mobile.list.List();
this.__oD.setDelegate({configureItem:function(h,i){h.setTitle(i.getTitle());
h.setShowArrow(true);
}});
this.__oD.addListener(c,function(e){var j=this.__sH.getItem(e.getData());
this.setSelectedArticle(j);
},this);
this.getContent().add(this.__oD);
},_applyFeed:function(k,l){if(k!=null){this.__sH=k.getArticles();
this.__oD.setModel(this.__sH);
this.setTitle(k.getTitle());
}}}});
})();
(function(){var e="Back",d="whitearea",c="_applyArticle",b="feedreader.mobile.ArticlePage",a="changeArticle";
qx.Class.define(b,{extend:qx.ui.mobile.page.NavigationPage,construct:function(){qx.ui.mobile.page.NavigationPage.call(this);
this.setShowBackButton(true);
this.setBackButtonText(this.tr(e));
},properties:{article:{event:a,init:null,nullable:true,apply:c}},members:{__sI:null,_initialize:function(){qx.ui.mobile.page.NavigationPage.prototype._initialize.call(this);
this.__sI=new qx.ui.mobile.embed.Html();
this.__sI.addCssClass(d);
this.getContent().add(this.__sI);
},_applyArticle:function(f,g){if(f!=null){this.setTitle(f.getTitle());
var h=feedreader.ArticleBuilder.createHtml(f);
this.__sI.setHtml(h);
}}}});
})();
(function(){var d="qx.ui.mobile.embed.Html",c="changeHtml",b="String",a="_applyHtml";
qx.Class.define(d,{extend:qx.ui.mobile.core.Widget,construct:function(e){qx.ui.mobile.core.Widget.call(this);

if(e){this.setHtml(e);
}},properties:{html:{check:b,init:null,nullable:true,event:c,apply:a}},members:{_applyHtml:function(f,g){this._setHtml(f);
}}});
})();
(function(){var j="</div>",i="",h="<div class='description'>",g="<div class='date'>",f="'>read more ...</a>",e="</h1>",d="<div class='container'>",c="<a target='_blank' href='",b="<h1 class='blog'>",a="feedreader.ArticleBuilder";
qx.Class.define(a,{statics:{createHtml:function(k,l){if(!k){return i;
}var n=new qx.util.StringBuilder();
var m=(k.getPubDate&&k.getPubDate())||i;
var p=i;

if(k.getDescription){p=k.getDescription();
}else if(k.getContent){p=k.getContent().getContent&&k.getContent().getContent();
}var o=k.getLink();

if(o.getHref){o=o.getHref();
}else if(o instanceof qx.data.Array){o=o.getItem(0).getHref();
}n.add(d);

if(l){n.add(b,k.getTitle(),e);
}n.add(g,m,j);
n.add(h,p,j);
n.add(c,o,f);
n.add(j);
return n.get();
}}});
})();
(function(){var f="mshtml",e="engine.name",d="pop.push.reverse.shift.sort.splice.unshift.join.slice",c="number",b="qx.type.BaseArray",a=".";
qx.Class.define(b,{extend:Array,construct:function(g){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function k(l){if((qx.core.Environment.get(e)==f)){j.prototype={length:0,$$isArray:true};
var o=d.split(a);

for(var length=o.length;length;){j.prototype[o[--length]]=Array.prototype[o[length]];
}}var p=Array.prototype.slice;
j.prototype.concat=function(){var r=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var q;

if(arguments[i] instanceof j){q=p.call(arguments[i],0);
}else if(arguments[i] instanceof Array){q=arguments[i];
}else{q=[arguments[i]];
}r.push.apply(r,q);
}return r;
};
j.prototype.toString=function(){return p.call(this,0).toString();
};
j.prototype.toLocaleString=function(){return p.call(this,0).toLocaleString();
};
j.prototype.constructor=j;
j.prototype.indexOf=qx.lang.Core.arrayIndexOf;
j.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
j.prototype.forEach=qx.lang.Core.arrayForEach;
j.prototype.some=qx.lang.Core.arraySome;
j.prototype.every=qx.lang.Core.arrayEvery;
var m=qx.lang.Core.arrayFilter;
var n=qx.lang.Core.arrayMap;
j.prototype.filter=function(){var s=new this.constructor;
s.push.apply(s,m.apply(this,arguments));
return s;
};
j.prototype.map=function(){var t=new this.constructor;
t.push.apply(t,n.apply(this,arguments));
return t;
};
j.prototype.slice=function(){var u=new this.constructor;
u.push.apply(u,Array.prototype.slice.apply(this,arguments));
return u;
};
j.prototype.splice=function(){var v=new this.constructor;
v.push.apply(v,Array.prototype.splice.apply(this,arguments));
return v;
};
j.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
j.prototype.valueOf=function(){return this.length;
};
return j;
}function j(length){if(arguments.length===1&&typeof length===c){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function h(){}h.prototype=[];
j.prototype=new h;
j.prototype.length=0;
qx.type.BaseArray=k(j);
})();
})();
(function(){var b="",a="qx.util.StringBuilder";
qx.Class.define(a,{extend:qx.type.BaseArray,construct:function(c){qx.type.BaseArray.apply(this,arguments);
},members:{clear:function(){this.length=0;
},get:function(){return this.join(b);
},add:null,isEmpty:function(){return this.length===0;
},size:function(){return this.join(b).length;
}},defer:function(d,e){e.add=e.push;
e.toString=e.get;
e.valueOf=e.get;
}});
})();
(function(){var p="other",o="widgets",n="fonts",m="appearances",k="qx.Theme",j="]",h="[Theme ",g="colors",f="decorations",e="Theme",b="meta",d="borders",c="icons";
qx.Bootstrap.define(k,{statics:{define:function(name,q){if(!q){var q={};
}q.include=this.__oq(q.include);
q.patch=this.__oq(q.patch);
var r={$$type:e,name:name,title:q.title,toString:this.genericToString};
if(q.extend){r.supertheme=q.extend;
}r.basename=qx.Bootstrap.createNamespace(name,r);
this.__ot(r,q);
this.__or(r,q);
this.$$registry[name]=r;
for(var i=0,a=q.include,l=a.length;i<l;i++){this.include(r,a[i]);
}
for(var i=0,a=q.patch,l=a.length;i<l;i++){this.patch(r,a[i]);
}},__oq:function(s){if(!s){return [];
}
if(qx.Bootstrap.isArray(s)){return s;
}else{return [s];
}},__or:function(t,u){var v=u.aliases||{};

if(u.extend&&u.extend.aliases){qx.Bootstrap.objectMergeWith(v,u.extend.aliases,false);
}t.aliases=v;
},getAll:function(){return this.$$registry;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},genericToString:function(){return h+this.name+j;
},__os:function(w){for(var i=0,x=this.__ou,l=x.length;i<l;i++){if(w[x[i]]){return x[i];
}}},__ot:function(y,z){var C=this.__os(z);
if(z.extend&&!C){C=z.extend.type;
}y.type=C||p;
var E=function(){};
if(z.extend){E.prototype=new z.extend.$$clazz;
}var D=E.prototype;
var B=z[C];
for(var A in B){D[A]=B[A];
if(D[A].base){D[A].base=z.extend;
}}y.$$clazz=E;
y[C]=new E;
},$$registry:{},__ou:[g,d,f,n,c,o,m,b],__ge:null,__ov:null,__gg:function(){},patch:function(F,G){var I=this.__os(G);

if(I!==this.__os(F)){throw new Error("The mixins '"+F.name+"' are not compatible '"+G.name+"'!");
}var H=G[I];
var J=F.$$clazz.prototype;

for(var K in H){J[K]=H[K];
}},include:function(L,M){var O=M.type;

if(O!==L.type){throw new Error("The mixins '"+L.name+"' are not compatible '"+M.name+"'!");
}var N=M[O];
var P=L.$$clazz.prototype;

for(var Q in N){if(P[Q]!==undefined){continue;
}P[Q]=N[Q];
}}}});
})();
(function(){var k="_applyBoxShadow",j="px ",i="Integer",h="shadowHorizontalLength",g="box-shadow",f="-webkit-box-shadow",e="shadowVerticalLength",d="-moz-box-shadow",c="shorthand",b="qx.ui.decoration.MBoxShadow",a="Color";
qx.Mixin.define(b,{properties:{shadowHorizontalLength:{nullable:true,check:i,apply:k},shadowVerticalLength:{nullable:true,check:i,apply:k},shadowBlurRadius:{nullable:true,check:i,apply:k},shadowColor:{nullable:true,check:a,apply:k},shadowLength:{group:[h,e],mode:c}},members:{_styleBoxShadow:function(l){var m=qx.theme.manager.Color.getInstance();
var p=m.resolve(this.getShadowColor());

if(p!=null){var q=this.getShadowVerticalLength()||0;
var n=this.getShadowHorizontalLength()||0;
var blur=this.getShadowBlurRadius()||0;
var o=n+j+q+j+blur+j+p;
l[d]=o;
l[f]=o;
l[g]=o;
}},_applyBoxShadow:function(){}}});
})();
(function(){var f="_applyTheme",e="qx.theme.manager.Color",d="Theme",c="changeTheme",b="string",a="singleton";
qx.Class.define(e,{type:a,extend:qx.util.ValueManager,properties:{theme:{check:d,nullable:true,apply:f,event:c}},members:{_applyTheme:function(g){var h={};

if(g){var i=g.colors;
var j=qx.util.ColorUtil;
var k;

for(var l in i){k=i[l];

if(typeof k===b){if(!j.isCssString(k)){throw new Error("Could not parse color: "+k);
}}else if(k instanceof Array){k=j.rgbToRgbString(k);
}else{throw new Error("Could not parse color: "+k);
}h[l]=k;
}}this._setDynamic(h);
},resolve:function(m){var p=this._dynamic;
var n=p[m];

if(n){return n;
}var o=this.getTheme();

if(o!==null&&o.colors[m]){return p[m]=o.colors[m];
}return m;
},isDynamic:function(q){var s=this._dynamic;

if(q&&(s[q]!==undefined)){return true;
}var r=this.getTheme();

if(r!==null&&q&&(r.colors[q]!==undefined)){s[q]=r.colors[q];
return true;
}return false;
}}});
})();
(function(){var h=",",e="rgb(",d=")",c="qx.theme.manager.Color",a="qx.util.ColorUtil";
qx.Class.define(a,{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(j){return this.NAMED[j]!==undefined;
},isSystemColor:function(k){return this.SYSTEM[k]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined(c);
},isThemedColor:function(l){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(l);
},stringToRgb:function(m){if(this.supportsThemes()&&this.isThemedColor(m)){var m=qx.theme.manager.Color.getInstance().resolveDynamic(m);
}
if(this.isNamedColor(m)){return this.NAMED[m];
}else if(this.isSystemColor(m)){throw new Error("Could not convert system colors to RGB: "+m);
}else if(this.isRgbString(m)){return this.__ck();
}else if(this.isHex3String(m)){return this.__cm();
}else if(this.isHex6String(m)){return this.__cn();
}throw new Error("Could not parse color: "+m);
},cssStringToRgb:function(n){if(this.isNamedColor(n)){return this.NAMED[n];
}else if(this.isSystemColor(n)){throw new Error("Could not convert system colors to RGB: "+n);
}else if(this.isRgbString(n)){return this.__ck();
}else if(this.isRgbaString(n)){return this.__cl();
}else if(this.isHex3String(n)){return this.__cm();
}else if(this.isHex6String(n)){return this.__cn();
}throw new Error("Could not parse color: "+n);
},stringToRgbString:function(o){return this.rgbToRgbString(this.stringToRgb(o));
},rgbToRgbString:function(s){return e+s[0]+h+s[1]+h+s[2]+d;
},rgbToHexString:function(u){return (qx.lang.String.pad(u[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(u[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(v){return (this.isThemedColor(v)||this.isNamedColor(v)||this.isHex3String(v)||this.isHex6String(v)||this.isRgbString(v)||this.isRgbaString(v));
},isCssString:function(w){return (this.isSystemColor(w)||this.isNamedColor(w)||this.isHex3String(w)||this.isHex6String(w)||this.isRgbString(w)||this.isRgbaString(w));
},isHex3String:function(x){return this.REGEXP.hex3.test(x);
},isHex6String:function(y){return this.REGEXP.hex6.test(y);
},isRgbString:function(z){return this.REGEXP.rgb.test(z);
},isRgbaString:function(A){return this.REGEXP.rgba.test(A);
},__ck:function(){var D=parseInt(RegExp.$1,10);
var C=parseInt(RegExp.$2,10);
var B=parseInt(RegExp.$3,10);
return [D,C,B];
},__cl:function(){var G=parseInt(RegExp.$1,10);
var F=parseInt(RegExp.$2,10);
var E=parseInt(RegExp.$3,10);
return [G,F,E];
},__cm:function(){var J=parseInt(RegExp.$1,16)*17;
var I=parseInt(RegExp.$2,16)*17;
var H=parseInt(RegExp.$3,16)*17;
return [J,I,H];
},__cn:function(){var M=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var L=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var K=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [M,L,K];
},hex3StringToRgb:function(N){if(this.isHex3String(N)){return this.__cm(N);
}throw new Error("Invalid hex3 value: "+N);
},hex6StringToRgb:function(O){if(this.isHex6String(O)){return this.__cn(O);
}throw new Error("Invalid hex6 value: "+O);
},hexStringToRgb:function(P){if(this.isHex3String(P)){return this.__cm(P);
}
if(this.isHex6String(P)){return this.__cn(P);
}throw new Error("Invalid hex value: "+P);
},rgbToHsb:function(Q){var S,T,V;
var bc=Q[0];
var Y=Q[1];
var R=Q[2];
var bb=(bc>Y)?bc:Y;

if(R>bb){bb=R;
}var U=(bc<Y)?bc:Y;

if(R<U){U=R;
}V=bb/255.0;

if(bb!=0){T=(bb-U)/bb;
}else{T=0;
}
if(T==0){S=0;
}else{var X=(bb-bc)/(bb-U);
var ba=(bb-Y)/(bb-U);
var W=(bb-R)/(bb-U);

if(bc==bb){S=W-ba;
}else if(Y==bb){S=2.0+X-W;
}else{S=4.0+ba-X;
}S=S/6.0;

if(S<0){S=S+1.0;
}}return [Math.round(S*360),Math.round(T*100),Math.round(V*100)];
},hsbToRgb:function(bd){var i,f,p,q,t;
var be=bd[0]/360;
var bf=bd[1]/100;
var bg=bd[2]/100;

if(be>=1.0){be%=1.0;
}
if(bf>1.0){bf=1.0;
}
if(bg>1.0){bg=1.0;
}var bh=Math.floor(255*bg);
var bi={};

if(bf==0.0){bi.red=bi.green=bi.blue=bh;
}else{be*=6.0;
i=Math.floor(be);
f=be-i;
p=Math.floor(bh*(1.0-bf));
q=Math.floor(bh*(1.0-(bf*f)));
t=Math.floor(bh*(1.0-(bf*(1.0-f))));

switch(i){case 0:bi.red=bh;
bi.green=t;
bi.blue=p;
break;
case 1:bi.red=q;
bi.green=bh;
bi.blue=p;
break;
case 2:bi.red=p;
bi.green=bh;
bi.blue=t;
break;
case 3:bi.red=p;
bi.green=q;
bi.blue=bh;
break;
case 4:bi.red=t;
bi.green=p;
bi.blue=bh;
break;
case 5:bi.red=bh;
bi.green=p;
bi.blue=q;
break;
}}return [bi.red,bi.green,bi.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
})();
(function(){var j="solid",i="_applyStyle",h="double",g="px ",f="dotted",e="_applyWidth",d="Color",c="",b="dashed",a="Number",D=" ",C="shorthand",B="widthTop",A="styleRight",z="styleBottom",y="widthBottom",x="widthLeft",w="styleTop",v="colorBottom",u="styleLeft",q="widthRight",r="colorLeft",o="colorRight",p="colorTop",m="border-top",n="border-left",k="border-right",l="qx.ui.decoration.MSingleBorder",s="border-bottom",t="absolute";
qx.Mixin.define(l,{properties:{widthTop:{check:a,init:0,apply:e},widthRight:{check:a,init:0,apply:e},widthBottom:{check:a,init:0,apply:e},widthLeft:{check:a,init:0,apply:e},styleTop:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleRight:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleBottom:{nullable:true,check:[j,f,b,h],init:j,apply:i},styleLeft:{nullable:true,check:[j,f,b,h],init:j,apply:i},colorTop:{nullable:true,check:d,apply:i},colorRight:{nullable:true,check:d,apply:i},colorBottom:{nullable:true,check:d,apply:i},colorLeft:{nullable:true,check:d,apply:i},left:{group:[x,u,r]},right:{group:[q,A,o]},top:{group:[B,w,p]},bottom:{group:[y,z,v]},width:{group:[B,q,y,x],mode:C},style:{group:[w,A,z,u],mode:C},color:{group:[p,o,v,r],mode:C}},members:{_styleBorder:function(E){var F=qx.theme.manager.Color.getInstance();
var G=this.getWidthTop();

if(G>0){E[m]=G+g+this.getStyleTop()+D+(F.resolve(this.getColorTop())||c);
}var G=this.getWidthRight();

if(G>0){E[k]=G+g+this.getStyleRight()+D+(F.resolve(this.getColorRight())||c);
}var G=this.getWidthBottom();

if(G>0){E[s]=G+g+this.getStyleBottom()+D+(F.resolve(this.getColorBottom())||c);
}var G=this.getWidthLeft();

if(G>0){E[n]=G+g+this.getStyleLeft()+D+(F.resolve(this.getColorLeft())||c);
}E.position=t;
E.top=0;
E.left=0;
},_resizeBorder:function(H,I,J){var K=this.getInsets();
I-=K.left+K.right;
J-=K.top+K.bottom;
if(I<0){I=0;
}
if(J<0){J=0;
}return {left:K.left-this.getWidthLeft(),top:K.top-this.getWidthTop(),width:I,height:J};
},_getDefaultInsetsForBorder:function(){return {top:this.getWidthTop(),right:this.getWidthRight(),bottom:this.getWidthBottom(),left:this.getWidthLeft()};
},_applyWidth:function(){this._applyStyle();
this._resetInsets();
},_applyStyle:function(){}}});
})();
(function(){var d="qx.ui.decoration.MBackgroundColor",c="Color",b="_applyBackgroundColor",a="";
qx.Mixin.define(d,{properties:{backgroundColor:{check:c,nullable:true,apply:b}},members:{_tintBackgroundColor:function(e,f,g){var h=qx.theme.manager.Color.getInstance();

if(f==null){f=this.getBackgroundColor();
}g.backgroundColor=h.resolve(f)||a;
},_resizeBackgroundColor:function(i,j,k){var l=this.getInsets();
j-=l.left+l.right;
k-=l.top+l.bottom;
return {left:l.left,top:l.top,width:j,height:k};
},_applyBackgroundColor:function(){}}});
})();
(function(){var t="_applyBackgroundImage",s="repeat",r="",q="mshtml",p="engine.name",o="backgroundPositionX",n='<div style="',m="backgroundPositionY",l='</div>',k="no-repeat",d="engine.version",j="scale",g='">',c=" ",b="repeat-x",f="repeat-y",e="hidden",h="qx.ui.decoration.MBackgroundImage",a="String",i="browser.quirksmode";
qx.Mixin.define(h,{properties:{backgroundImage:{check:a,nullable:true,apply:t},backgroundRepeat:{check:[s,b,f,k,j],init:s,apply:t},backgroundPositionX:{nullable:true,apply:t},backgroundPositionY:{nullable:true,apply:t},backgroundPosition:{group:[m,o]}},members:{_generateMarkup:this._generateBackgroundMarkup,_generateBackgroundMarkup:function(u,content){var y=r;
var x=this.getBackgroundImage();
var w=this.getBackgroundRepeat();
var top=this.getBackgroundPositionY();

if(top==null){top=0;
}var z=this.getBackgroundPositionX();

if(z==null){z=0;
}u.backgroundPosition=z+c+top;
if(x){var v=qx.util.AliasManager.getInstance().resolve(x);
y=qx.bom.element.Decoration.create(v,w,u);
}else{if((qx.core.Environment.get(p)==q)){if(parseFloat(qx.core.Environment.get(d))<7||qx.core.Environment.get(i)){u.overflow=e;
}}
if(!content){content=r;
}y=n+qx.bom.element.Style.compile(u)+g+content+l;
}return y;
},_applyBackgroundImage:function(){}}});
})();
(function(){var k="px",j="engine.name",i="div",h="img",g="",f="no-repeat",d="scale-x",c="mshtml",b="scale",a="b64",I="scale-y",H="qx/icon",G="repeat",F=".png",E="crop",D="engine.version",C="progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",B='<div style="',A="repeat-y",z='<img src="',r="qx.bom.element.Decoration",s="', sizingMethod='",p='"/>',q="png",n="')",o='"></div>',l='" style="',m="none",t="webkit",u=" ",w="repeat-x",v="DXImageTransform.Microsoft.AlphaImageLoader",y="qx/static/blank.gif",x="absolute";
qx.Class.define(r,{statics:{DEBUG:false,__ls:{},__lt:(qx.core.Environment.get(j)==c)&&qx.core.Environment.get(D)<9,__lu:qx.core.Environment.select(j,{"mshtml":{"scale-x":true,"scale-y":true,"scale":true,"no-repeat":true},"default":null}),__lv:{"scale-x":h,"scale-y":h,"scale":h,"repeat":i,"no-repeat":i,"repeat-x":i,"repeat-y":i},update:function(J,K,L,M){var O=this.getTagName(L,K);

if(O!=J.tagName.toLowerCase()){throw new Error("Image modification not possible because elements could not be replaced at runtime anymore!");
}var P=this.getAttributes(K,L,M);

if(O===h){J.src=P.src||qx.util.ResourceManager.getInstance().toUri(y);
}if(J.style.backgroundPosition!=g&&P.style.backgroundPosition===undefined){P.style.backgroundPosition=null;
}if(J.style.clip!=g&&P.style.clip===undefined){P.style.clip=null;
}var N=qx.bom.element.Style;
N.setStyles(J,P.style);
if(this.__lt){try{J.filters[v].apply();
}catch(e){}}},create:function(Q,R,S){var T=this.getTagName(R,Q);
var V=this.getAttributes(Q,R,S);
var U=qx.bom.element.Style.compile(V.style);

if(T===h){return z+V.src+l+U+p;
}else{return B+U+o;
}},getTagName:function(W,X){if((qx.core.Environment.get(j)==c)){if(X&&this.__lt&&this.__lu[W]&&qx.lang.String.endsWith(X,F)){return i;
}}return this.__lv[W];
},getAttributes:function(Y,ba,bb){if(!bb){bb={};
}
if(!bb.position){bb.position=x;
}
if((qx.core.Environment.get(j)==c)){bb.fontSize=0;
bb.lineHeight=0;
}else if((qx.core.Environment.get(j)==t)){bb.WebkitUserDrag=m;
}var bd=qx.util.ResourceManager.getInstance().getImageFormat(Y)||qx.io.ImageLoader.getFormat(Y);
var bc;
if(this.__lt&&this.__lu[ba]&&bd===q){bc=this.__ly(bb,ba,Y);
}else{if(ba===b){bc=this.__lz(bb,ba,Y);
}else if(ba===d||ba===I){bc=this.__lA(bb,ba,Y);
}else{bc=this.__lD(bb,ba,Y);
}}return bc;
},__lw:function(be,bf,bh){if(be.width==null&&bf!=null){be.width=bf+k;
}
if(be.height==null&&bh!=null){be.height=bh+k;
}return be;
},__lx:function(bi){var bj=qx.util.ResourceManager.getInstance().getImageWidth(bi)||qx.io.ImageLoader.getWidth(bi);
var bk=qx.util.ResourceManager.getInstance().getImageHeight(bi)||qx.io.ImageLoader.getHeight(bi);
return {width:bj,height:bk};
},__ly:function(bl,bm,bn){var bq=this.__lx(bn);
bl=this.__lw(bl,bq.width,bq.height);
var bp=bm==f?E:b;
var bo=C+qx.util.ResourceManager.getInstance().toUri(bn)+s+bp+n;
bl.filter=bo;
bl.backgroundImage=bl.backgroundRepeat=g;
return {style:bl};
},__lz:function(br,bs,bt){var bu=qx.util.ResourceManager.getInstance().toUri(bt);
var bv=this.__lx(bt);
br=this.__lw(br,bv.width,bv.height);
return {src:bu,style:br};
},__lA:function(bw,bx,by){var bz=qx.util.ResourceManager.getInstance();
var bC=bz.getCombinedFormat(by);
var bE=this.__lx(by);
var bA;

if(bC){var bD=bz.getData(by);
var bB=bD[4];

if(bC==a){bA=bz.toDataUri(by);
}else{bA=bz.toUri(bB);
}
if(bx===d){bw=this.__lB(bw,bD,bE.height);
}else{bw=this.__lC(bw,bD,bE.width);
}return {src:bA,style:bw};
}else{if(bx==d){bw.height=bE.height==null?null:bE.height+k;
}else if(bx==I){bw.width=bE.width==null?null:bE.width+k;
}bA=bz.toUri(by);
return {src:bA,style:bw};
}},__lB:function(bF,bG,bH){var bI=qx.util.ResourceManager.getInstance().getImageHeight(bG[4]);
bF.clip={top:-bG[6],height:bH};
bF.height=bI+k;
if(bF.top!=null){bF.top=(parseInt(bF.top,10)+bG[6])+k;
}else if(bF.bottom!=null){bF.bottom=(parseInt(bF.bottom,10)+bH-bI-bG[6])+k;
}return bF;
},__lC:function(bJ,bK,bL){var bM=qx.util.ResourceManager.getInstance().getImageWidth(bK[4]);
bJ.clip={left:-bK[5],width:bL};
bJ.width=bM+k;
if(bJ.left!=null){bJ.left=(parseInt(bJ.left,10)+bK[5])+k;
}else if(bJ.right!=null){bJ.right=(parseInt(bJ.right,10)+bL-bM-bK[5])+k;
}return bJ;
},__lD:function(bN,bO,bP){var bS=qx.util.ResourceManager.getInstance();
var bX=bS.getCombinedFormat(bP);
var ca=this.__lx(bP);
if(bX&&bO!==G){var bY=bS.getData(bP);
var bW=bY[4];

if(bX==a){var bV=bS.toDataUri(bP);
var bU=bT=0;
}else{var bV=bS.toUri(bW);
var bU=bY[5];
var bT=bY[6];
}var bQ=qx.bom.element.Background.getStyles(bV,bO,bU,bT);

for(var bR in bQ){bN[bR]=bQ[bR];
}
if(ca.width!=null&&bN.width==null&&(bO==A||bO===f)){bN.width=ca.width+k;
}
if(ca.height!=null&&bN.height==null&&(bO==w||bO===f)){bN.height=ca.height+k;
}return {style:bN};
}else{bN=this.__lw(bN,ca.width,ca.height);
bN=this.__lE(bN,bP,bO);
return {style:bN};
}},__lE:function(cb,cc,cd){var top=null;
var ch=null;

if(cb.backgroundPosition){var ce=cb.backgroundPosition.split(u);
ch=parseInt(ce[0],10);

if(isNaN(ch)){ch=ce[0];
}top=parseInt(ce[1],10);

if(isNaN(top)){top=ce[1];
}}var cg=qx.bom.element.Background.getStyles(cc,cd,ch,top);

for(var cf in cg){cb[cf]=cg[cf];
}if(cb.filter){cb.filter=g;
}return cb;
},__lF:function(ci){if(this.DEBUG&&qx.util.ResourceManager.getInstance().has(ci)&&ci.indexOf(H)==-1){if(!this.__ls[ci]){qx.log.Logger.debug("Potential clipped image candidate: "+ci);
this.__ls[ci]=true;
}}},isAlphaImageLoaderEnabled:qx.core.Environment.select(j,{"mshtml":function(){return qx.bom.element.Decoration.__lt;
},"default":function(){return false;
}})}});
})();
(function(){var u="number",t="0",s="px",r=";",q="'",p="')",o="gecko",n="background-image:url(",m=");",l="",e=")",k="background-repeat:",h="engine.version",c="data:",b=" ",g="qx.bom.element.Background",f="url(",i="background-position:",a="base64",j="url('",d="engine.name";
qx.Class.define(g,{statics:{__iv:[n,null,m,i,null,r,k,null,r],__iw:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__ix:function(v,top){var w=qx.core.Environment.get(d);
var x=qx.core.Environment.get(h);

if(w==o&&x<1.9&&v==top&&typeof v==u){top+=0.01;
}
if(v){var z=(typeof v==u)?v+s:v;
}else{z=t;
}
if(top){var y=(typeof top==u)?top+s:top;
}else{y=t;
}return z+b+y;
},__iy:function(A){var String=qx.lang.String;
var B=A.substr(0,50);
return String.startsWith(B,c)&&String.contains(B,a);
},compile:function(C,D,E,top){var F=this.__ix(E,top);
var G=qx.util.ResourceManager.getInstance().toUri(C);

if(this.__iy(G)){G=q+G+q;
}var H=this.__iv;
H[1]=G;
H[4]=F;
H[7]=D;
return H.join(l);
},getStyles:function(I,J,K,top){if(!I){return this.__iw;
}var L=this.__ix(K,top);
var N=qx.util.ResourceManager.getInstance().toUri(I);
var O;

if(this.__iy(N)){O=j+N+p;
}else{O=f+N+e;
}var M={backgroundPosition:L,backgroundImage:O};

if(J!=null){M.backgroundRepeat=J;
}return M;
},set:function(P,Q,R,S,top){var T=this.getStyles(Q,R,S,top);

for(var U in T){P.style[U]=T[U];
}}}});
})();
(function(){var a="qx.ui.decoration.IDecorator";
qx.Interface.define(a,{members:{getMarkup:function(){},resize:function(b,c,d){},tint:function(e,f){},getInsets:function(){}}});
})();
(function(){var i="Number",h="_applyInsets",g="abstract",f="insetRight",e="insetTop",d="insetBottom",c="qx.ui.decoration.Abstract",b="shorthand",a="insetLeft";
qx.Class.define(c,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],type:g,properties:{insetLeft:{check:i,nullable:true,apply:h},insetRight:{check:i,nullable:true,apply:h},insetBottom:{check:i,nullable:true,apply:h},insetTop:{check:i,nullable:true,apply:h},insets:{group:[e,f,d,a],mode:b}},members:{__jB:null,_getDefaultInsets:function(){throw new Error("Abstract method called.");
},_isInitialized:function(){throw new Error("Abstract method called.");
},_resetInsets:function(){this.__jB=null;
},getInsets:function(){if(this.__jB){return this.__jB;
}var j=this._getDefaultInsets();
return this.__jB={left:this.getInsetLeft()==null?j.left:this.getInsetLeft(),right:this.getInsetRight()==null?j.right:this.getInsetRight(),bottom:this.getInsetBottom()==null?j.bottom:this.getInsetBottom(),top:this.getInsetTop()==null?j.top:this.getInsetTop()};
},_applyInsets:function(){this.__jB=null;
}},destruct:function(){this.__jB=null;
}});
})();
(function(){var b="px",a="qx.ui.decoration.Single";
qx.Class.define(a,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder],construct:function(c,d,e){qx.ui.decoration.Abstract.call(this);
if(c!=null){this.setWidth(c);
}
if(d!=null){this.setStyle(d);
}
if(e!=null){this.setColor(e);
}},members:{_markup:null,getMarkup:function(f){if(this._markup){return this._markup;
}var g={};
this._styleBorder(g,f);
var h=this._generateBackgroundMarkup(g);
return this._markup=h;
},resize:function(i,j,k){var l=this._resizeBorder(i,j,k);
i.style.width=l.width+b;
i.style.height=l.height+b;
i.style.left=parseInt(i.style.left)+l.left+b;
i.style.top=parseInt(i.style.top)+l.top+b;
},tint:function(m,n){this._tintBackgroundColor(m,n,m.style);
},_isInitialized:function(){return !!this._markup;
},_getDefaultInsets:function(){return this._getDefaultInsetsForBorder();
}},destruct:function(){this._markup=null;
}});
})();
(function(){var j="_applyLinearBackgroundGradient",i=" ",h=")",g="engine.name",f="horizontal",e=",",d=" 0",c="px",b="browser.name",a="0",K="shorthand",J="Color",I="vertical",H="",G="Number",F="webkit",E="%",D="),to(",C="from(",B="background-image",q="engine.version",r="-moz-",o="-webkit-gradient(linear,",p="startColorPosition",m="-o-",n="deg, ",k="startColor",l="ie",s="qx.ui.decoration.MLinearBackgroundGradient",t="endColorPosition",w="opera",v="linear-gradient(",y="endColor",x="-ms-",A="gecko",z="background",u="-webkit-";
qx.Mixin.define(s,{properties:{startColor:{check:J,nullable:true,apply:j},endColor:{check:J,nullable:true,apply:j},orientation:{check:[f,I],init:I,apply:j},startColorPosition:{check:G,init:0,apply:j},endColorPosition:{check:G,init:100,apply:j},colorPositionUnit:{check:[c,E],init:E,apply:j},gradientStart:{group:[k,p],mode:K},gradientEnd:{group:[y,t],mode:K}},members:{_styleLinearBackgroundGradient:function(L){var O=qx.theme.manager.Color.getInstance();
var U=this.getColorPositionUnit();
if(qx.core.Environment.get(g)==F&&parseFloat(qx.core.Environment.get(q))<534.16){U=U===c?H:U;

if(this.getOrientation()==f){var T=this.getStartColorPosition()+U+d+U;
var S=this.getEndColorPosition()+U+d+U;
}else{var T=a+U+i+this.getStartColorPosition()+U;
var S=a+U+i+this.getEndColorPosition()+U;
}var Q=C+O.resolve(this.getStartColor())+D+O.resolve(this.getEndColor())+h;
var P=o+T+e+S+e+Q+h;
L[z]=P;
}else{var V=this.getOrientation()==f?0:270;
var N=O.resolve(this.getStartColor())+i+this.getStartColorPosition()+U;
var M=O.resolve(this.getEndColor())+i+this.getEndColorPosition()+U;
var R=H;

if(qx.core.Environment.get(g)==A){R=r;
}else if(qx.core.Environment.get(b)==w){R=m;
}else if(qx.core.Environment.get(b)==l){R=x;
}else if(qx.core.Environment.get(g)==F){R=u;
}L[B]=R+v+V+n+N+e+M+h;
}},_resizeLinearBackgroundGradient:function(W,X,Y){var ba=this.getInsets();
X-=ba.left+ba.right;
Y-=ba.top+ba.bottom;
return {left:ba.left,top:ba.top,width:X,height:Y};
},_applyLinearBackgroundGradient:function(){}}});
})();
(function(){var j="px ",i=" ",h='',g="Color",f="Number",e="border-top",d="border-left",c="border-bottom",b="border-right",a="shorthand",C="line-height",B="engine.name",A="mshtml",z="innerWidthRight",y="top",x="innerColorBottom",w="innerWidthTop",v="innerColorRight",u="innerColorTop",t="relative",q="browser.documentmode",r="innerColorLeft",o="qx.ui.decoration.MDoubleBorder",p="left",m="engine.version",n="innerWidthBottom",k="innerWidthLeft",l="position",s="absolute";
qx.Mixin.define(o,{include:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundImage],construct:function(){this._getDefaultInsetsForBorder=this.__qY;
this._resizeBorder=this.__qX;
this._styleBorder=this.__qV;
this._generateMarkup=this.__qW;
},properties:{innerWidthTop:{check:f,init:0},innerWidthRight:{check:f,init:0},innerWidthBottom:{check:f,init:0},innerWidthLeft:{check:f,init:0},innerWidth:{group:[w,z,n,k],mode:a},innerColorTop:{nullable:true,check:g},innerColorRight:{nullable:true,check:g},innerColorBottom:{nullable:true,check:g},innerColorLeft:{nullable:true,check:g},innerColor:{group:[u,v,x,r],mode:a}},members:{__qU:null,__qV:function(D){var E=qx.theme.manager.Color.getInstance();
D.position=t;
var F=this.getInnerWidthTop();

if(F>0){D[e]=F+j+this.getStyleTop()+i+E.resolve(this.getInnerColorTop());
}var F=this.getInnerWidthRight();

if(F>0){D[b]=F+j+this.getStyleRight()+i+E.resolve(this.getInnerColorRight());
}var F=this.getInnerWidthBottom();

if(F>0){D[c]=F+j+this.getStyleBottom()+i+E.resolve(this.getInnerColorBottom());
}var F=this.getInnerWidthLeft();

if(F>0){D[d]=F+j+this.getStyleLeft()+i+E.resolve(this.getInnerColorLeft());
}},__qW:function(G){var J=this._generateBackgroundMarkup(G);
var H=qx.theme.manager.Color.getInstance();
G[e]=h;
G[b]=h;
G[c]=h;
G[d]=h;
G[C]=0;
if((qx.core.Environment.get(B)==A&&parseFloat(qx.core.Environment.get(m))<8)||(qx.core.Environment.get(B)==A&&qx.core.Environment.get(q)<8)){G[C]=h;
}var I=this.getWidthTop();

if(I>0){G[e]=I+j+this.getStyleTop()+i+H.resolve(this.getColorTop());
}var I=this.getWidthRight();

if(I>0){G[b]=I+j+this.getStyleRight()+i+H.resolve(this.getColorRight());
}var I=this.getWidthBottom();

if(I>0){G[c]=I+j+this.getStyleBottom()+i+H.resolve(this.getColorBottom());
}var I=this.getWidthLeft();

if(I>0){G[d]=I+j+this.getStyleLeft()+i+H.resolve(this.getColorLeft());
}G[l]=s;
G[y]=0;
G[p]=0;
return this.__qU=this._generateBackgroundMarkup(G,J);
},__qX:function(K,L,M){var N=this.getInsets();
L-=N.left+N.right;
M-=N.top+N.bottom;
var O=N.left-this.getWidthLeft()-this.getInnerWidthLeft();
var top=N.top-this.getWidthTop()-this.getInnerWidthTop();
return {left:O,top:top,width:L,height:M,elementToApplyDimensions:K.firstChild};
},__qY:function(){return {top:this.getWidthTop()+this.getInnerWidthTop(),right:this.getWidthRight()+this.getInnerWidthRight(),bottom:this.getWidthBottom()+this.getInnerWidthBottom(),left:this.getWidthLeft()+this.getInnerWidthLeft()};
}}});
})();
(function(){var c="px",b="qx.ui.decoration.Background",a="absolute";
qx.Class.define(b,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(d){qx.ui.decoration.Abstract.call(this);

if(d!=null){this.setBackgroundColor(d);
}},members:{__nb:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nb;
},getMarkup:function(e){if(this.__nb){return this.__nb;
}var f={position:a,top:0,left:0};
var g=this._generateBackgroundMarkup(f);
return this.__nb=g;
},resize:function(h,i,j){var k=this.getInsets();
h.style.width=(i-k.left-k.right)+c;
h.style.height=(j-k.top-k.bottom)+c;
h.style.left=-k.left+c;
h.style.top=-k.top+c;
},tint:function(l,m){this._tintBackgroundColor(l,m,l.style);
}},destruct:function(){this.__nb=null;
}});
})();
(function(){var j='"></div>',i="_applyStyle",h="1px",g='<div style="',f='border:',e="1px solid ",d="Color",c=";",b="px",a='</div>',x="qx.ui.decoration.Beveled",w="css.boxmodel",v='<div style="position:absolute;top:1px;left:1px;',u='border-bottom:',t='border-right:',s="",r="content",q='border-left:',p='border-top:',o="Number",m='<div style="position:absolute;top:1px;left:0px;',n='position:absolute;top:0px;left:1px;',k='<div style="overflow:hidden;font-size:0;line-height:0;">',l="absolute";
qx.Class.define(x,{extend:qx.ui.decoration.Abstract,include:[qx.ui.decoration.MBackgroundImage,qx.ui.decoration.MBackgroundColor],construct:function(y,z,A){qx.ui.decoration.Abstract.call(this);
if(y!=null){this.setOuterColor(y);
}
if(z!=null){this.setInnerColor(z);
}
if(A!=null){this.setInnerOpacity(A);
}},properties:{innerColor:{check:d,nullable:true,apply:i},innerOpacity:{check:o,init:1,apply:i},outerColor:{check:d,nullable:true,apply:i}},members:{__nb:null,_getDefaultInsets:function(){return {top:2,right:2,bottom:2,left:2};
},_isInitialized:function(){return !!this.__nb;
},_applyStyle:function(){},getMarkup:function(){if(this.__nb){return this.__nb;
}var B=qx.theme.manager.Color.getInstance();
var C=[];
var F=e+B.resolve(this.getOuterColor())+c;
var E=e+B.resolve(this.getInnerColor())+c;
C.push(k);
C.push(g);
C.push(f,F);
C.push(qx.bom.element.Opacity.compile(0.35));
C.push(j);
C.push(m);
C.push(q,F);
C.push(t,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
C.push(g);
C.push(n);
C.push(p,F);
C.push(u,F);
C.push(qx.bom.element.Opacity.compile(1));
C.push(j);
var D={position:l,top:h,left:h,opacity:1};
C.push(this._generateBackgroundMarkup(D));
C.push(v);
C.push(f,E);
C.push(qx.bom.element.Opacity.compile(this.getInnerOpacity()));
C.push(j);
C.push(a);
return this.__nb=C.join(s);
},resize:function(G,H,I){if(H<4){H=4;
}
if(I<4){I=4;
}if(qx.core.Environment.get(w)==r){var outerWidth=H-2;
var outerHeight=I-2;
var O=outerWidth;
var N=outerHeight;
var innerWidth=H-4;
var innerHeight=I-4;
}else{var outerWidth=H;
var outerHeight=I;
var O=H-2;
var N=I-2;
var innerWidth=O;
var innerHeight=N;
}var Q=b;
var M=G.childNodes[0].style;
M.width=outerWidth+Q;
M.height=outerHeight+Q;
var L=G.childNodes[1].style;
L.width=outerWidth+Q;
L.height=N+Q;
var K=G.childNodes[2].style;
K.width=O+Q;
K.height=outerHeight+Q;
var J=G.childNodes[3].style;
J.width=O+Q;
J.height=N+Q;
var P=G.childNodes[4].style;
P.width=innerWidth+Q;
P.height=innerHeight+Q;
},tint:function(R,S){this._tintBackgroundColor(R,S,R.childNodes[3].style);
}},destruct:function(){this.__nb=null;
}});
})();
(function(){var a="qx.ui.decoration.Uniform";
qx.Class.define(a,{extend:qx.ui.decoration.Single,construct:function(b,c,d){qx.ui.decoration.Single.call(this);
if(b!=null){this.setWidth(b);
}
if(c!=null){this.setStyle(c);
}
if(d!=null){this.setColor(d);
}}});
})();
(function(){var o="Number",n="_applyInsets",m="-l",l="insetRight",k="insetTop",j="_applyBaseImage",i="insetBottom",h="-b",g="set",f="shorthand",c="-t",e="insetLeft",d="String",b="qx.ui.decoration.Grid",a="-r";
qx.Class.define(b,{extend:qx.core.Object,implement:[qx.ui.decoration.IDecorator],construct:function(p,q){qx.core.Object.call(this);

if(qx.ui.decoration.css3.BorderImage.IS_SUPPORTED){this.__mY=new qx.ui.decoration.css3.BorderImage();

if(p){this.__na(p);
}}else{this.__mY=new qx.ui.decoration.GridDiv(p);
}
if(q!=null){this.__mY.setInsets(q);
}},properties:{baseImage:{check:d,nullable:true,apply:j},insetLeft:{check:o,nullable:true,apply:n},insetRight:{check:o,nullable:true,apply:n},insetBottom:{check:o,nullable:true,apply:n},insetTop:{check:o,nullable:true,apply:n},insets:{group:[k,l,i,e],mode:f}},members:{__mY:null,getMarkup:function(){return this.__mY.getMarkup();
},resize:function(r,s,t){this.__mY.resize(r,s,t);
},tint:function(u,v){},getInsets:function(){return this.__mY.getInsets();
},_applyInsets:function(w,x,name){var y=g+qx.lang.String.firstUp(name);
this.__mY[y](w);
},_applyBaseImage:function(z,A){if(this.__mY instanceof qx.ui.decoration.GridDiv){this.__mY.setBaseImage(z);
}else{this.__na(z);
}},__na:function(B){var G,H,J,I;
this.__mY.setBorderImage(B);
var L=qx.util.AliasManager.getInstance().resolve(B);
var M=/(.*)(\.[a-z]+)$/.exec(L);
var K=M[1];
var C=M[2];
var F=qx.util.ResourceManager.getInstance();
var N=F.getImageHeight(K+c+C);
var D=F.getImageWidth(K+a+C);
var E=F.getImageHeight(K+h+C);
var O=F.getImageWidth(K+m+C);
this.__mY.setSlice([N,D,E,O]);
}},destruct:function(){this.__mY=null;
}});
})();
(function(){var j="_applyStyle",i="stretch",h="Integer",g="px",f=" ",e="repeat",d="round",c="shorthand",b="px ",a="sliceBottom",y=";'></div>",x="<div style='",w="sliceLeft",v="sliceRight",u="repeatX",t="String",s="qx.ui.decoration.css3.BorderImage",r="border-box",q="",p='") ',n="sliceTop",o='url("',l="hidden",m="repeatY",k="absolute";
qx.Class.define(s,{extend:qx.ui.decoration.Abstract,construct:function(z,A){qx.ui.decoration.Abstract.call(this);
if(z!=null){this.setBorderImage(z);
}
if(A!=null){this.setSlice(A);
}},statics:{IS_SUPPORTED:qx.bom.element.Style.isPropertySupported("borderImage")},properties:{borderImage:{check:t,nullable:true,apply:j},sliceTop:{check:h,init:0,apply:j},sliceRight:{check:h,init:0,apply:j},sliceBottom:{check:h,init:0,apply:j},sliceLeft:{check:h,init:0,apply:j},slice:{group:[n,v,a,w],mode:c},repeatX:{check:[i,e,d],init:i,apply:j},repeatY:{check:[i,e,d],init:i,apply:j},repeat:{group:[u,m],mode:c}},members:{__nb:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this.__nb;
},getMarkup:function(){if(this.__nb){return this.__nb;
}var B=this._resolveImageUrl(this.getBorderImage());
var C=[this.getSliceTop(),this.getSliceRight(),this.getSliceBottom(),this.getSliceLeft()];
var D=[this.getRepeatX(),this.getRepeatY()].join(f);
this.__nb=[x,qx.bom.element.Style.compile({"borderImage":o+B+p+C.join(f)+f+D,position:k,lineHeight:0,fontSize:0,overflow:l,boxSizing:r,borderWidth:C.join(b)+g}),y].join(q);
return this.__nb;
},resize:function(E,F,G){E.style.width=F+g;
E.style.height=G+g;
},tint:function(H,I){},_applyStyle:function(){},_resolveImageUrl:function(J){return qx.util.ResourceManager.getInstance().toUri(qx.util.AliasManager.getInstance().resolve(J));
}},destruct:function(){this.__nb=null;
}});
})();
(function(){var j="px",i="0px",h="-1px",g="no-repeat",f="engine.version",e="scale-x",d="scale-y",c="-tr",b="-l",a='</div>',z="scale",y="-br",x="-t",w="browser.quirksmode",v="-tl",u="-r",t='<div style="position:absolute;top:0;left:0;overflow:hidden;font-size:0;line-height:0;">',s="_applyBaseImage",r="-b",q="String",o="",p="-bl",m="qx.ui.decoration.GridDiv",n="-c",k="mshtml",l="engine.name";
qx.Class.define(m,{extend:qx.ui.decoration.Abstract,construct:function(A,B){qx.ui.decoration.Abstract.call(this);
if(A!=null){this.setBaseImage(A);
}
if(B!=null){this.setInsets(B);
}},properties:{baseImage:{check:q,nullable:true,apply:s}},members:{_markup:null,_images:null,_edges:null,_getDefaultInsets:function(){return {top:0,right:0,bottom:0,left:0};
},_isInitialized:function(){return !!this._markup;
},getMarkup:function(){if(this._markup){return this._markup;
}var C=qx.bom.element.Decoration;
var D=this._images;
var E=this._edges;
var F=[];
F.push(t);
F.push(C.create(D.tl,g,{top:0,left:0}));
F.push(C.create(D.t,e,{top:0,left:E.left+j}));
F.push(C.create(D.tr,g,{top:0,right:0}));
F.push(C.create(D.bl,g,{bottom:0,left:0}));
F.push(C.create(D.b,e,{bottom:0,left:E.left+j}));
F.push(C.create(D.br,g,{bottom:0,right:0}));
F.push(C.create(D.l,d,{top:E.top+j,left:0}));
F.push(C.create(D.c,z,{top:E.top+j,left:E.left+j}));
F.push(C.create(D.r,d,{top:E.top+j,right:0}));
F.push(a);
return this._markup=F.join(o);
},resize:function(G,H,I){var J=this._edges;
var innerWidth=H-J.left-J.right;
var innerHeight=I-J.top-J.bottom;
if(innerWidth<0){innerWidth=0;
}
if(innerHeight<0){innerHeight=0;
}G.style.width=H+j;
G.style.height=I+j;
G.childNodes[1].style.width=innerWidth+j;
G.childNodes[4].style.width=innerWidth+j;
G.childNodes[7].style.width=innerWidth+j;
G.childNodes[6].style.height=innerHeight+j;
G.childNodes[7].style.height=innerHeight+j;
G.childNodes[8].style.height=innerHeight+j;

if((qx.core.Environment.get(l)==k)){if(parseFloat(qx.core.Environment.get(f))<7||(qx.core.Environment.get(w)&&parseFloat(qx.core.Environment.get(f))<8)){if(H%2==1){G.childNodes[2].style.marginRight=h;
G.childNodes[5].style.marginRight=h;
G.childNodes[8].style.marginRight=h;
}else{G.childNodes[2].style.marginRight=i;
G.childNodes[5].style.marginRight=i;
G.childNodes[8].style.marginRight=i;
}
if(I%2==1){G.childNodes[3].style.marginBottom=h;
G.childNodes[4].style.marginBottom=h;
G.childNodes[5].style.marginBottom=h;
}else{G.childNodes[3].style.marginBottom=i;
G.childNodes[4].style.marginBottom=i;
G.childNodes[5].style.marginBottom=i;
}}}},tint:function(K,L){},_applyBaseImage:function(M,N){if(M){var R=this._resolveImageUrl(M);
var S=/(.*)(\.[a-z]+)$/.exec(R);
var Q=S[1];
var P=S[2];
var O=this._images={tl:Q+v+P,t:Q+x+P,tr:Q+c+P,bl:Q+p+P,b:Q+r+P,br:Q+y+P,l:Q+b+P,c:Q+n+P,r:Q+u+P};
this._edges=this._computeEdgeSizes(O);
}},_resolveImageUrl:function(T){return qx.util.AliasManager.getInstance().resolve(T);
},_computeEdgeSizes:function(U){var V=qx.util.ResourceManager.getInstance();
return {top:V.getImageHeight(U.t),bottom:V.getImageHeight(U.b),left:V.getImageWidth(U.l),right:V.getImageWidth(U.r)};
}},destruct:function(){this._markup=this._images=this._edges=null;
}});
})();
(function(){var j="px",i="Integer",h="_applyBorderRadius",g="radiusTopRight",f="radiusTopLeft",e="-webkit-border-bottom-left-radius",d="-webkit-background-clip",c="radiusBottomRight",b="-webkit-border-bottom-right-radius",a="border-top-left-radius",w="border-top-right-radius",v="border-bottom-left-radius",u="radiusBottomLeft",t="-webkit-border-top-left-radius",s="shorthand",r="-moz-border-radius-bottomright",q="padding-box",p="border-bottom-right-radius",o="qx.ui.decoration.MBorderRadius",n="-moz-border-radius-topright",l="-webkit-border-top-right-radius",m="-moz-border-radius-topleft",k="-moz-border-radius-bottomleft";
qx.Mixin.define(o,{properties:{radiusTopLeft:{nullable:true,check:i,apply:h},radiusTopRight:{nullable:true,check:i,apply:h},radiusBottomLeft:{nullable:true,check:i,apply:h},radiusBottomRight:{nullable:true,check:i,apply:h},radius:{group:[f,g,c,u],mode:s}},members:{_styleBorderRadius:function(x){x[d]=q;
var y=this.getRadiusTopLeft();

if(y>0){x[m]=y+j;
x[t]=y+j;
x[a]=y+j;
}y=this.getRadiusTopRight();

if(y>0){x[n]=y+j;
x[l]=y+j;
x[w]=y+j;
}y=this.getRadiusBottomLeft();

if(y>0){x[k]=y+j;
x[e]=y+j;
x[v]=y+j;
}y=this.getRadiusBottomRight();

if(y>0){x[r]=y+j;
x[b]=y+j;
x[p]=y+j;
}},_applyBorderRadius:function(){}}});
})();
(function(){var cJ="solid",cI="invalid",cH="scale",cG="border-main",cF="border-invalid",cE="shadow",cD="border-separator",cC="checkbox-hovered",cB="button-start",cA="button-end",bK="background-light",bJ="tabview-background",bI="repeat-x",bH="radiobutton",bG="button-css",bF="border-input",bE="border-inner-input",bD="border-inner-scrollbar",bC="radiobutton-checked",bB="tabview-inactive",cQ="checkbox",cR="window-border",cO="radiobutton-disabled",cP="radiobutton-hovered-invalid",cM="tabview-page-button-top-active-css",cN="button-border-disabeld",cK="tabview-page-button-top-inactive-css",cL="decoration/form/input.png",cS="border-toolbar-border-inner",cT="input-css",cj="border-toolbar-button-outer",ci="border-disabled",cl="background-pane",ck="checkbox-disabled-border",cn="button-hovered-end",cm="repeat-y",cp="border-dragover",co="button-hovered-start",ch="progressive-table-header-border-right",cg="decoration/scrollbar/scrollbar-button-bg-vertical.png",k="radiobutton-background",l="checkbox-focus",m="scrollbar-slider-horizontal-css",n="menu-end",o="decoration/selection.png",p="horizontal",q="table-header-start",r="decoration/scrollbar/scrollbar-button-bg-horizontal.png",s="decoration/form/input-focused.png",t="checkbox-hovered-invalid",di="decoration/table/header-cell.png",dh="tabview-inactive-start",dg="table-header-end",df="border-button",dm="border-focused-invalid",dl="button-focused-css",dk="checkbox-border",dj="tabview-start",dp="checkbox-start",dn="decoration/tabview/tab-button-top-active.png",bb="group-background",bc="decoration/form/button-c.png",Y="keyboard-focus",ba="button-disabled-start",bf="selected-end",bg="table-header-hovered",bd="decoration/groupbox/groupbox.png",be="decoration/pane/pane.png",W="decoration/menu/background.png",X="tooltip-error",J="decoration/toolbar/toolbar-part.gif",I="input-focused-css",L="decoration/menu/bar-background.png",K="window-border-caption",F="radiobutton-hovered",E="decoration/tabview/tab-button-bottom-active.png",H="radiobutton-checked-focused",G="groupitem-end",D="button-disabled-css",C="group-border",bl="scrollbar-slider-vertical-css",bm="decoration/form/button-checked.png",bn="window-css",bo="selected-start",bh="window-resize-frame-css",bi="tabview-end",bj="window-statusbar-background",bk="decoration/scrollbar/scrollbar-bg-vertical.png",bp="button-pressed-css",bq="toolbar-button-hovered-css",T="window-caption-active-end",S="dotted",R="checkbox-disabled-end",Q="window-caption-active-start",P="button-focused",O="menu-start",N="decoration/form/tooltip-error.png",M="window-captionbar-active-css",V="qx/decoration/Modern",U="border-toolbar-separator-left",br="decoration/scrollbar/scrollbar-bg-horizontal.png",bs="decoration/tabview/tab-button-left-active.png",bt="decoration/tabview/tab-button-right-inactive.png",bu="decoration/tabview/tab-button-bottom-inactive.png",bv="decoration/form/button-disabled.png",bw="decoration/form/button-pressed.png",bx="background-splitpane",by="decoration/form/button-checked-focused.png",bz="px",bA="decoration/window/statusbar.png",bO="input-border-disabled",bN="checkbox-inner",bM="scrollbar-horizontal-css",bL="button-disabled-end",bS="center",bR="toolbar-end",bQ="groupitem-start",bP="decoration/form/button-hovered.png",bU="checkbox-hovered-inner",bT="input-focused-start",cc="scrollbar-start",cd="scrollbar-slider-start",ca="radiobutton-checked-disabled",cb="checkbox-focused",bX="qx.theme.modern.Decoration",bY="decoration/form/button.png",bV="decoration/app-header.png",bW="decoration/form/button-focused.png",ce="radiobutton-checked-hovered",cf="button-hovered-css",ct="checkbox-disabled-inner",cs="border-toolbar-separator-right",cv="border-focused",cu="decoration/shadow/shadow.png",cx="scrollbar-end",cw="decoration/group-item.png",cz="window-caption-inactive-end",cy="checkbox-end",cr="tabview-inactive-end",cq="input-end",db="no-repeat",dc="decoration/tabview/tab-button-left-inactive.png",dd="input-focused-inner-invalid",de="menu-separator-top",cW="window-caption-inactive-start",cX="scrollbar-slider-end",cY="decoration/window/captionbar-inactive.png",da="decoration/tabview/tab-button-top-inactive.png",cU="pane-end",cV="input-focused-end",j="decoration/form/tooltip-error-arrow.png",i="menubar-start",h="toolbar-start",g="checkbox-disabled-start",f="radiobutton-focused",e="pane-start",d="table-focus-indicator",c="button-checked-css",b="decoration/form/button-checked-c.png",a="menu-separator-bottom",w="decoration/shadow/shadow-small.png",x="input-start",u="decoration/tabview/tabview-pane.png",v="decoration/window/captionbar-active.png",A="decoration/tabview/tab-button-right-active.png",B="button-checked-focused-css",y="decoration/toolbar/toolbar-gradient.png",z="checkbox-hovered-inner-invalid";
qx.Theme.define(bX,{aliases:{decoration:V},decorations:{"main":{decorator:qx.ui.decoration.Uniform,style:{width:1,color:cG}},"selected":{decorator:qx.ui.decoration.Background,style:{backgroundImage:o,backgroundRepeat:cH}},"selected-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bo,endColor:bf}},"selected-dragover":{decorator:qx.ui.decoration.Single,style:{backgroundImage:o,backgroundRepeat:cH,bottom:[2,cJ,cp]}},"dragover":{decorator:qx.ui.decoration.Single,style:{bottom:[2,cJ,cp]}},"pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:be,insets:[0,2,3,0]}},"pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:bJ,radius:3,shadowColor:cE,shadowBlurRadius:2,shadowLength:0,gradientStart:[e,0],gradientEnd:[cU,100]}},"group":{decorator:qx.ui.decoration.Grid,style:{baseImage:bd}},"group-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{backgroundColor:bb,radius:4,color:C,width:1}},"border-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"keyboard-focus":{decorator:qx.ui.decoration.Single,style:{width:1,color:Y,style:S}},"radiobutton":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:k,radius:5,width:1,innerWidth:2,color:dk,innerColor:k,shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:5}},"radiobutton-checked":{include:bH,style:{backgroundColor:bC}},"radiobutton-checked-focused":{include:bC,style:{shadowBlurRadius:4}},"radiobutton-checked-hovered":{include:bC,style:{innerColor:cC}},"radiobutton-focused":{include:bH,style:{shadowBlurRadius:4}},"radiobutton-hovered":{include:bH,style:{backgroundColor:cC,innerColor:cC}},"radiobutton-disabled":{include:bH,style:{innerColor:cO,backgroundColor:cO,color:ck}},"radiobutton-checked-disabled":{include:cO,style:{backgroundColor:ca}},"radiobutton-invalid":{include:bH,style:{color:cI}},"radiobutton-checked-invalid":{include:bC,style:{color:cI}},"radiobutton-checked-focused-invalid":{include:H,style:{color:cI,shadowColor:cI}},"radiobutton-checked-hovered-invalid":{include:ce,style:{color:cI,innerColor:cP}},"radiobutton-focused-invalid":{include:f,style:{color:cI,shadowColor:cI}},"radiobutton-hovered-invalid":{include:F,style:{color:cI,innerColor:cP,backgroundColor:cP}},"separator-horizontal":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,colorLeft:cD}},"separator-vertical":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cD}},"tooltip-error":{decorator:qx.ui.decoration.Grid,style:{baseImage:N,insets:[2,5,5,2]}},"tooltip-error-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow],style:{backgroundColor:X,radius:4,shadowColor:cE,shadowBlurRadius:2,shadowLength:1}},"tooltip-error-arrow":{decorator:qx.ui.decoration.Background,style:{backgroundImage:j,backgroundPositionY:bS,backgroundRepeat:db,insets:[0,0,0,10]}},"shadow-window":{decorator:qx.ui.decoration.Grid,style:{baseImage:cu,insets:[4,8,8,4]}},"shadow-window-css":{decorator:[qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{shadowColor:cE,shadowBlurRadius:2,shadowLength:1}},"shadow-popup":{decorator:qx.ui.decoration.Grid,style:{baseImage:w,insets:[0,3,3,0]}},"popup-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MBackgroundColor],style:{width:1,color:cG,shadowColor:cE,shadowBlurRadius:3,shadowLength:1}},"scrollbar-horizontal":{decorator:qx.ui.decoration.Background,style:{backgroundImage:br,backgroundRepeat:bI}},"scrollbar-vertical":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bk,backgroundRepeat:cm}},"scrollbar-slider-horizontal":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cH,outerColor:cG,innerColor:bD,innerOpacity:0.5}},"scrollbar-slider-horizontal-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:r,backgroundRepeat:cH,outerColor:ci,innerColor:bD,innerOpacity:0.3}},"scrollbar-slider-vertical":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cg,backgroundRepeat:cH,outerColor:cG,innerColor:bD,innerOpacity:0.5}},"scrollbar-slider-vertical-disabled":{decorator:qx.ui.decoration.Beveled,style:{backgroundImage:cg,backgroundRepeat:cH,outerColor:ci,innerColor:bD,innerOpacity:0.3}},"scrollbar-horizontal-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[cc,0],gradientEnd:[cx,100]}},"scrollbar-vertical-css":{include:bM,style:{orientation:p}},"scrollbar-slider-horizontal-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[cd,0],gradientEnd:[cX,100],color:cG,width:1}},"scrollbar-slider-vertical-css":{include:m,style:{orientation:p}},"scrollbar-slider-horizontal-disabled-css":{include:m,style:{color:cN}},"scrollbar-slider-vertical-disabled-css":{include:bl,style:{color:cN}},"button-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:df,width:1,startColor:cB,endColor:cA,startColorPosition:35,endColorPosition:100}},"button-disabled-css":{include:bG,style:{color:cN,startColor:ba,endColor:bL}},"button-hovered-css":{include:bG,style:{startColor:co,endColor:cn}},"button-checked-css":{include:bG,style:{endColor:cB,startColor:cA}},"button-pressed-css":{include:bG,style:{endColor:co,startColor:cn}},"button-focused-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{radius:3,color:df,width:1,innerColor:P,innerWidth:2,startColor:cB,endColor:cA,startColorPosition:30,endColorPosition:100}},"button-checked-focused-css":{include:dl,style:{endColor:cB,startColor:cA}},"button-invalid-css":{include:bG,style:{color:cF}},"button-disabled-invalid-css":{include:D,style:{color:cF}},"button-hovered-invalid-css":{include:cf,style:{color:cF}},"button-checked-invalid-css":{include:c,style:{color:cF}},"button-pressed-invalid-css":{include:bp,style:{color:cF}},"button-focused-invalid-css":{include:dl,style:{color:cF}},"button-checked-focused-invalid-css":{include:B,style:{color:cF}},"button":{decorator:qx.ui.decoration.Grid,style:{baseImage:bY,insets:2}},"button-disabled":{decorator:qx.ui.decoration.Grid,style:{baseImage:bv,insets:2}},"button-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:bW,insets:2}},"button-hovered":{decorator:qx.ui.decoration.Grid,style:{baseImage:bP,insets:2}},"button-pressed":{decorator:qx.ui.decoration.Grid,style:{baseImage:bw,insets:2}},"button-checked":{decorator:qx.ui.decoration.Grid,style:{baseImage:bm,insets:2}},"button-checked-focused":{decorator:qx.ui.decoration.Grid,style:{baseImage:by,insets:2}},"button-invalid-shadow":{decorator:qx.ui.decoration.Single,style:{color:cI,width:1}},"checkbox-invalid-shadow":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:dm,insets:[0]}},"checkbox":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow],style:{width:1,color:dk,innerWidth:1,innerColor:bN,gradientStart:[dp,0],gradientEnd:[cy,100],shadowLength:0,shadowBlurRadius:0,shadowColor:l,insetLeft:4}},"checkbox-hovered":{include:cQ,style:{innerColor:bU,gradientStart:[cC,0],gradientEnd:[cC,100]}},"checkbox-focused":{include:cQ,style:{shadowBlurRadius:4}},"checkbox-disabled":{include:cQ,style:{color:ck,innerColor:ct,gradientStart:[g,0],gradientEnd:[R,100]}},"checkbox-invalid":{include:cQ,style:{color:cI}},"checkbox-hovered-invalid":{include:cC,style:{color:cI,innerColor:z,gradientStart:[t,0],gradientEnd:[t,100]}},"checkbox-focused-invalid":{include:cb,style:{color:cI,shadowColor:cI}},"input-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBackgroundColor],style:{color:bF,innerColor:bE,innerWidth:1,width:1,backgroundColor:bK,startColor:x,endColor:cq,startColorPosition:0,endColorPosition:12,colorPositionUnit:bz}},"border-invalid-css":{include:cT,style:{color:cF}},"input-focused-css":{include:cT,style:{startColor:bT,innerColor:cV,endColorPosition:4}},"input-focused-invalid-css":{include:I,style:{innerColor:dd,color:cF}},"input-disabled-css":{include:cT,style:{color:bO}},"input":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bF,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"input-focused":{decorator:qx.ui.decoration.Beveled,style:{outerColor:bF,innerColor:cv,backgroundImage:s,backgroundRepeat:bI,backgroundColor:bK}},"input-focused-invalid":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cI,innerColor:dm,backgroundImage:s,backgroundRepeat:bI,backgroundColor:bK,insets:[2]}},"input-disabled":{decorator:qx.ui.decoration.Beveled,style:{outerColor:ci,innerColor:bE,innerOpacity:0.5,backgroundImage:cL,backgroundRepeat:bI,backgroundColor:bK}},"toolbar":{decorator:qx.ui.decoration.Background,style:{backgroundImage:y,backgroundRepeat:cH}},"toolbar-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:40,endColorPosition:60,startColor:h,endColor:bR}},"toolbar-button-hovered":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cj,innerColor:cS,backgroundImage:bc,backgroundRepeat:cH}},"toolbar-button-checked":{decorator:qx.ui.decoration.Beveled,style:{outerColor:cj,innerColor:cS,backgroundImage:b,backgroundRepeat:cH}},"toolbar-button-hovered-css":{decorator:[qx.ui.decoration.MDoubleBorder,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBorderRadius],style:{color:cj,width:1,innerWidth:1,innerColor:cS,radius:2,gradientStart:[cB,30],gradientEnd:[cA,100]}},"toolbar-button-checked-css":{include:bq,style:{gradientStart:[cA,30],gradientEnd:[cB,100]}},"toolbar-separator":{decorator:qx.ui.decoration.Single,style:{widthLeft:1,widthRight:1,colorLeft:U,colorRight:cs,styleLeft:cJ,styleRight:cJ}},"toolbar-part":{decorator:qx.ui.decoration.Background,style:{backgroundImage:J,backgroundRepeat:cm}},"tabview-pane":{decorator:qx.ui.decoration.Grid,style:{baseImage:u,insets:[4,6,7,4]}},"tabview-pane-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MSingleBorder],style:{width:1,color:cR,radius:3,gradientStart:[dj,90],gradientEnd:[bi,100]}},"tabview-page-button-top-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:dn}},"tabview-page-button-top-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:da}},"tabview-page-button-bottom-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:E}},"tabview-page-button-bottom-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bu}},"tabview-page-button-left-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:bs}},"tabview-page-button-left-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:dc}},"tabview-page-button-right-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:A}},"tabview-page-button-right-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:bt}},"tabview-page-button-top-active-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MBoxShadow],style:{radius:[3,3,0,0],width:[1,1,0,1],color:bJ,backgroundColor:dj,shadowLength:1,shadowColor:cE,shadowBlurRadius:2}},"tabview-page-button-top-inactive-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{radius:[3,3,0,0],color:bB,colorBottom:bJ,width:1,gradientStart:[dh,0],gradientEnd:[cr,100]}},"tabview-page-button-bottom-active-css":{include:cM,style:{radius:[0,0,3,3],width:[0,1,1,1],backgroundColor:dh}},"tabview-page-button-bottom-inactive-css":{include:cK,style:{radius:[0,0,3,3],width:[0,1,1,1],colorBottom:bB,colorTop:bJ}},"tabview-page-button-left-active-css":{include:cM,style:{radius:[3,0,0,3],width:[1,0,1,1],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-left-inactive-css":{include:cK,style:{radius:[3,0,0,3],width:[1,0,1,1],colorBottom:bB,colorRight:bJ}},"tabview-page-button-right-active-css":{include:cM,style:{radius:[0,3,3,0],width:[1,1,1,0],shadowLength:0,shadowBlurRadius:0}},"tabview-page-button-right-inactive-css":{include:cK,style:{radius:[0,3,3,0],width:[1,1,1,0],colorBottom:bB,colorLeft:bJ}},"splitpane":{decorator:qx.ui.decoration.Uniform,style:{backgroundColor:cl,width:3,color:bx,style:cJ}},"window":{decorator:qx.ui.decoration.Single,style:{backgroundColor:cl,width:1,color:cG,widthTop:0}},"window-captionbar-active":{decorator:qx.ui.decoration.Grid,style:{baseImage:v}},"window-captionbar-inactive":{decorator:qx.ui.decoration.Grid,style:{baseImage:cY}},"window-statusbar":{decorator:qx.ui.decoration.Grid,style:{baseImage:bA}},"window-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],shadowBlurRadius:4,shadowLength:2,shadowColor:cE}},"window-incl-statusbar-css":{include:bn,style:{radius:[5,5,5,5]}},"window-resize-frame-css":{decorator:[qx.ui.decoration.MBorderRadius,qx.ui.decoration.MSingleBorder],style:{radius:[5,5,0,0],width:1,color:cG}},"window-resize-frame-incl-statusbar-css":{include:bh,style:{radius:[5,5,5,5]}},"window-captionbar-active-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius,qx.ui.decoration.MLinearBackgroundGradient],style:{width:1,color:cR,colorBottom:K,radius:[5,5,0,0],gradientStart:[Q,30],gradientEnd:[T,70]}},"window-captionbar-inactive-css":{include:M,style:{gradientStart:[cW,30],gradientEnd:[cz,70]}},"window-statusbar-css":{decorator:[qx.ui.decoration.MBackgroundColor,qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBorderRadius],style:{backgroundColor:bj,width:[0,1,1,1],color:cR,radius:[0,0,5,5]}},"window-pane-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MBackgroundColor],style:{backgroundColor:cl,width:1,color:cR,widthTop:0}},"table":{decorator:qx.ui.decoration.Single,style:{width:1,color:cG,style:cJ}},"table-statusbar":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:cG,style:cJ}},"table-scroller-header":{decorator:qx.ui.decoration.Single,style:{backgroundImage:di,backgroundRepeat:cH,widthBottom:1,colorBottom:cG,style:cJ}},"table-scroller-header-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[dg,90],widthBottom:1,colorBottom:cG}},"table-header-cell":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cD,styleRight:cJ}},"table-header-cell-hovered":{decorator:qx.ui.decoration.Single,style:{widthRight:1,colorRight:cD,styleRight:cJ,widthBottom:1,colorBottom:bg,styleBottom:cJ}},"table-scroller-focus-indicator":{decorator:qx.ui.decoration.Single,style:{width:2,color:d,style:cJ}},"progressive-table-header":{decorator:qx.ui.decoration.Single,style:{width:1,color:cG,style:cJ}},"progressive-table-header-cell":{decorator:qx.ui.decoration.Single,style:{backgroundImage:di,backgroundRepeat:cH,widthRight:1,colorRight:ch,style:cJ}},"progressive-table-header-cell-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[q,10],gradientEnd:[dg,90],widthRight:1,colorRight:ch}},"menu":{decorator:qx.ui.decoration.Single,style:{backgroundImage:W,backgroundRepeat:cH,width:1,color:cG,style:cJ}},"menu-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient,qx.ui.decoration.MBoxShadow,qx.ui.decoration.MSingleBorder],style:{gradientStart:[O,0],gradientEnd:[n,100],shadowColor:cE,shadowBlurRadius:2,shadowLength:1,width:1,color:cG}},"menu-separator":{decorator:qx.ui.decoration.Single,style:{widthTop:1,colorTop:de,widthBottom:1,colorBottom:a}},"menubar":{decorator:qx.ui.decoration.Single,style:{backgroundImage:L,backgroundRepeat:cH,width:1,color:cD,style:cJ}},"menubar-css":{decorator:[qx.ui.decoration.MSingleBorder,qx.ui.decoration.MLinearBackgroundGradient],style:{gradientStart:[i,0],gradientEnd:[n,100],width:1,color:cD}},"app-header":{decorator:qx.ui.decoration.Background,style:{backgroundImage:bV,backgroundRepeat:cH}},"progressbar":{decorator:qx.ui.decoration.Single,style:{width:1,color:bF}},"group-item":{decorator:qx.ui.decoration.Background,style:{backgroundImage:cw,backgroundRepeat:cH}},"group-item-css":{decorator:[qx.ui.decoration.MLinearBackgroundGradient],style:{startColorPosition:0,endColorPosition:100,startColor:bQ,endColor:G}}}});
})();
(function(){var bB="white",bA="#EEEEEE",bz="#E4E4E4",by="#F3F3F3",bx="#F0F0F0",bw="#E8E8E8",bv="#CCCCCC",bu="#EFEFEF",bt="#1a1a1a",bs="#00204D",bh="gray",bg="#F4F4F4",bf="#fffefe",be="#AFAFAF",bd="#084FAB",bc="#FCFCFC",bb="#CCC",ba="#F2F2F2",Y="black",X="#ffffdd",bI="#b6b6b6",bJ="#004DAD",bG="#BABABA",bH="#005BC3",bE="#334866",bF="#CECECE",bC="#D9D9D9",bD="#D8D8D8",bK="#99C3FE",bL="#001533",bl="#B3B3B3",bk="#D5D5D5",bn="#C3C3C3",bm="#DDDDDD",bp="#FF9999",bo="css.rgba",br="#E8E8E9",bq="#084FAA",bj="#C5C5C5",bi="rgba(0, 0, 0, 0.4)",a="#DBDBDB",b="#4a4a4a",c="#83BAEA",d="#D7E7F4",e="#07125A",f="#FAF2F2",g="#87AFE7",h="#F7EAEA",i="#777D8D",j="#FBFBFB",bP="#CACACA",bO="#909090",bN="#9B9B9B",bM="#F0F9FE",bT="#314a6e",bS="#B4B4B4",bR="#787878",bQ="qx.theme.modern.Color",bV="#000000",bU="#26364D",H="#A7A7A7",I="#D1E4FF",F="#5CB0FD",G="#EAEAEA",L="#003B91",M="#80B4EF",J="#FF6B78",K="#949494",D="#808080",E="#930000",r="#7B7B7B",q="#C82C2C",t="#DFDFDF",s="#B6B6B6",n="#0880EF",m="#4d4d4d",p="#f4f4f4",o="#7B7A7E",l="#D0D0D0",k="#f8f8f8",R="#404955",S="#959595",T="#AAAAAA",U="#F7E9E9",N="#314A6E",O="#C72B2B",P="#FAFAFA",Q="#FBFCFB",V="#B2D2FF",W="#666666",B="#CBC8CD",A="#999999",z="#8EB8D6",y="#b8b8b8",x="#727272",w="#33508D",v="#F1F1F1",u="#990000",C="#00368A";
qx.Theme.define(bQ,{colors:{"background-application":t,"background-pane":by,"background-light":bc,"background-medium":bA,"background-splitpane":be,"background-tip":X,"background-tip-error":O,"background-odd":bz,"htmlarea-background":bB,"progressbar-background":bB,"text-light":bO,"text-gray":b,"text-label":bt,"text-title":bT,"text-input":bV,"text-hovered":bL,"text-disabled":o,"text-selected":bf,"text-active":bU,"text-inactive":R,"text-placeholder":B,"border-inner-scrollbar":bB,"border-main":m,"menu-separator-top":bj,"menu-separator-bottom":P,"border-separator":D,"border-toolbar-button-outer":bI,"border-toolbar-border-inner":k,"border-toolbar-separator-right":p,"border-toolbar-separator-left":y,"border-input":bE,"border-inner-input":bB,"border-disabled":s,"border-pane":bs,"border-button":W,"border-column":bv,"border-focused":bK,"invalid":u,"border-focused-invalid":bp,"border-dragover":w,"keyboard-focus":Y,"table-pane":by,"table-focus-indicator":n,"table-row-background-focused-selected":bd,"table-row-background-focused":M,"table-row-background-selected":bd,"table-row-background-even":by,"table-row-background-odd":bz,"table-row-selected":bf,"table-row":bt,"table-row-line":bb,"table-column-line":bb,"table-header-hovered":bB,"progressive-table-header":T,"progressive-table-header-border-right":ba,"progressive-table-row-background-even":bg,"progressive-table-row-background-odd":bz,"progressive-progressbar-background":bh,"progressive-progressbar-indicator-done":bv,"progressive-progressbar-indicator-undone":bB,"progressive-progressbar-percent-background":bh,"progressive-progressbar-percent-text":bB,"selected-start":bJ,"selected-end":C,"tabview-background":e,"shadow":qx.core.Environment.get(bo)?bi:A,"pane-start":j,"pane-end":bx,"group-background":bw,"group-border":bS,"radiobutton-background":bu,"checkbox-border":N,"checkbox-focus":g,"checkbox-hovered":V,"checkbox-hovered-inner":I,"checkbox-inner":bA,"checkbox-start":bz,"checkbox-end":by,"checkbox-disabled-border":bR,"checkbox-disabled-inner":bP,"checkbox-disabled-start":l,"checkbox-disabled-end":bD,"checkbox-hovered-inner-invalid":f,"checkbox-hovered-invalid":U,"radiobutton-checked":bH,"radiobutton-disabled":bk,"radiobutton-checked-disabled":r,"radiobutton-hovered-invalid":h,"tooltip-error":q,"scrollbar-start":bv,"scrollbar-end":v,"scrollbar-slider-start":bA,"scrollbar-slider-end":bn,"button-border-disabeld":S,"button-start":bx,"button-end":be,"button-disabled-start":bg,"button-disabled-end":bG,"button-hovered-start":bM,"button-hovered-end":z,"button-focused":c,"border-invalid":E,"input-start":bx,"input-end":Q,"input-focused-start":d,"input-focused-end":F,"input-focused-inner-invalid":J,"input-border-disabled":bN,"input-border-inner":bB,"toolbar-start":bu,"toolbar-end":bm,"window-border":bs,"window-border-caption":x,"window-caption-active-text":bB,"window-caption-active-start":bq,"window-caption-active-end":L,"window-caption-inactive-start":ba,"window-caption-inactive-end":a,"window-statusbar-background":bu,"tabview-start":bc,"tabview-end":bA,"tabview-inactive":i,"tabview-inactive-start":G,"tabview-inactive-end":bF,"table-header-start":bw,"table-header-end":bl,"menu-start":br,"menu-end":bC,"menubar-start":bw,"groupitem-start":H,"groupitem-end":K,"groupitem-text":bB,"virtual-row-layer-background-even":bB,"virtual-row-layer-background-odd":bB}});
})();
(function(){var eq="css.gradients",ep="widget",eo="atom",en="-css",em="button-frame",el="css.borderradius",ek="css.boxshadow",ej="main",ei="button",eh="bold",cC="text-selected",cB="image",cA="text-disabled",cz="middle",cy="selected",cx="background-light",cw="label",cv="groupbox",cu="decoration/arrows/down.png",ct="popup",ex="cell",ey="border-invalid",ev="input",ew="input-disabled",et="menu-button",eu="input-focused-invalid",er="toolbar-button",es="spinner",ez="input-focused",eA="tooltip",dI="qx/static/blank.gif",dH="radiobutton",dK="list",dJ="tree-item",dM="combobox",dL="treevirtual-contract",dO="scrollbar",dN="datechooser/nav-button",dF="center",dE="checkbox",v="treevirtual-expand",w="",x="textfield",y="-invalid",z="decoration/arrows/right.png",A="background-application",B="invalid",C="right-top",D="selectbox",E="text-title",eQ="icon/16/places/folder-open.png",eP="radiobutton-hovered",eO="group-item",eN="scrollbar/button",eU="right",eT="combobox/button",eS="virtual-list",eR="icon/16/places/folder.png",eW="radiobutton-checked-focused",eV="text-label",bz="decoration/tree/closed.png",bA="table-scroller-header",bx="scrollbar-slider-horizontal",by="checkbox-hovered",bD="checkbox-checked",bE="decoration/arrows/left.png",bB="radiobutton-checked",bC="button-focused",bv="text-light",bw="menu-slidebar-button",bb="tree",ba="checkbox-undetermined",bd="table-scroller-header-css",bc="text-input",W="slidebar/button-forward",V="background-splitpane",Y="text-hovered",X=".png",U="decoration/tree/open.png",T="default",bK="decoration/arrows/down-small.png",bL="datechooser",bM="slidebar/button-backward",bN="radiobutton-checked-disabled",bG="checkbox-focused",bH="radiobutton-checked-hovered",bI="treevirtual-folder",bJ="shadow-popup",bO="icon/16/mimetypes/office-document.png",bP="background-medium",bo="icon/32/places/folder-open.png",bn="icon/22/places/folder-open.png",bm="table",bl="decoration/arrows/up.png",bk="decoration/form/",bj="radiobutton-focused",bi="button-checked",bh="decoration/window/maximize-active-hovered.png",bs="keyboard-focus",br="menu-css",bQ="decoration/cursors/",bR="slidebar",bS="tooltip-error-arrow",bT="table-scroller-focus-indicator",bU="popup-css",bV="move-frame",bW="nodrop",bX="decoration/table/boolean-true.png",bY="-invalid-css",ca="menu",cK="app-header",cJ="row-layer",cI="text-inactive",cH="move",cO="decoration/window/restore-active-hovered.png",cN="border-separator",cM="shadow-window",cL="tree-folder",cS="window-pane-css",cR="right.png",ds="checkbox-undetermined-hovered",dt="window-incl-statusbar-css",dq="tabview-page-button-bottom-inactive",dr="tooltip-error",dn="window-css",dp="window-statusbar",dl="button-hovered",dm="decoration/scrollbar/scrollbar-",dA="background-tip",dB="menubar-css",dT="scrollbar-slider-horizontal-disabled",dS="radiobutton-disabled",dV="window-resize-frame-css",dU="button-pressed",dX="table-pane",dW="decoration/window/close-active.png",ea="native",dY="button-invalid-shadow",dQ="decoration/window/minimize-active-hovered.png",dP="menubar",eH="icon/16/actions/dialog-cancel.png",eI="tabview-page-button-top-inactive",eJ="tabview-page-button-left-inactive",eK="menu-slidebar",eD="toolbar-button-checked",eE="decoration/tree/open-selected.png",eF="decoration/window/minimize-inactive.png",eG="icon/16/apps/office-calendar.png",eB="group-item-css",eC="group",k="tabview-page-button-right-inactive",j="decoration/window/minimize-active.png",i="decoration/window/restore-inactive.png",h="checkbox-checked-focused",g="splitpane",f="combobox/textfield",e="decoration/window/close-active-hovered.png",d="qx/icon/Tango/16/actions/window-close.png",c="checkbox-pressed",b="button-disabled",J="selected-dragover",K="tooltip-error-css",H="decoration/window/maximize-inactive.png",I="dragover",N="scrollarea",O="scrollbar-vertical",L="decoration/menu/checkbox-invert.gif",M="decoration/toolbar/toolbar-handle-knob.gif",Q="icon/22/mimetypes/office-document.png",R="table-header-cell",cW="button-checked-focused",cQ="up.png",de="best-fit",da="pane-css",cF="decoration/tree/closed-selected.png",cD="qx.theme.modern.Appearance",bf="text-active",cG="checkbox-disabled",bq="toolbar-button-hovered",bp="window-resize-frame-incl-statusbar-css",ck="decoration/form/checked.png",cl="progressive-table-header",cm="decoration/table/select-column-order.png",cn="decoration/menu/radiobutton.gif",co="decoration/arrows/forward.png",cp="decoration/table/descending.png",cq="decoration/form/undetermined.png",cr="tree-file",ch="window-captionbar-active",ci="checkbox-checked-hovered",cE="scrollbar-slider-vertical",dd="toolbar",dc="alias",db="decoration/window/restore-active.png",di="decoration/table/boolean-false.png",dh="icon/32/mimetypes/office-document.png",dg="tabview-pane",df="decoration/arrows/rewind.png",cY="top",cX="icon/16/actions/dialog-ok.png",P="progressbar-background",bu="table-header-cell-hovered",bt="window-statusbar-css",cP="window",bF="text-gray",cV="decoration/menu/radiobutton-invert.gif",cU="text-placeholder",cT="slider",be="toolbar-css",dk="keep-align",S="down.png",bg="groupitem-text",cb="tabview-page-button-top-active",cc="icon/22/places/folder.png",cd="decoration/window/maximize-active.png",ce="checkbox-checked-pressed",cf="decoration/window/close-inactive.png",cg="tabview-page-button-left-active",dD="toolbar-part",cj="decoration/splitpane/knob-vertical.png",ec=".gif",eb="virtual-row-layer-background-odd",ee="table-statusbar",ed="progressive-table-header-cell-css",eg="window-captionbar-inactive",ef="copy",cs="decoration/arrows/down-invert.png",dR="decoration/menu/checkbox.gif",dj="window-caption-active-text",dG="decoration/splitpane/knob-horizontal.png",F="group-css",G="icon/32/places/folder.png",dy="virtual-row-layer-background-even",dz="toolbar-separator",dw="tabview-page-button-bottom-active",dx="decoration/arrows/up-small.png",du="decoration/table/ascending.png",dv="decoration/arrows/up-invert.png",a="small",dC="tabview-page-button-right-active",s="-disabled",r="scrollbar-horizontal",q="progressbar",p="checkbox-undetermined-focused",o="progressive-table-header-cell",n="menu-separator",m="tabview-pane-css",l="pane",u="htmlarea-background",t="decoration/arrows/right-invert.png",eL="left.png",eM="icon/16/actions/view-refresh.png";
qx.Theme.define(cD,{appearances:{"widget":{},"root":{style:function(eX){return {backgroundColor:A,textColor:eV,font:T};
}},"label":{style:function(eY){return {textColor:eY.disabled?cA:undefined};
}},"move-frame":{style:function(fa){return {decorator:ej};
}},"resize-frame":bV,"dragdrop-cursor":{style:function(fb){var fc=bW;

if(fb.copy){fc=ef;
}else if(fb.move){fc=cH;
}else if(fb.alias){fc=dc;
}return {source:bQ+fc+ec,position:C,offset:[2,16,2,6]};
}},"image":{style:function(fd){return {opacity:!fd.replacement&&fd.disabled?0.3:1};
}},"atom":{},"atom/label":cw,"atom/icon":cB,"popup":{style:function(fe){var ff=qx.core.Environment.get(ek);
return {decorator:ff?bU:ej,backgroundColor:cx,shadow:ff?undefined:bJ};
}},"button-frame":{alias:eo,style:function(fg){var fk,fj;
var fh=[3,9];

if(fg.checked&&fg.focused&&!fg.inner){fk=cW;
fj=undefined;
fh=[1,7];
}else if(fg.disabled){fk=b;
fj=undefined;
}else if(fg.pressed){fk=dU;
fj=Y;
}else if(fg.checked){fk=bi;
fj=undefined;
}else if(fg.hovered){fk=dl;
fj=Y;
}else if(fg.focused&&!fg.inner){fk=bC;
fj=undefined;
fh=[1,7];
}else{fk=ei;
fj=undefined;
}var fi;
if(qx.core.Environment.get(el)&&qx.core.Environment.get(eq)){if(fg.invalid&&!fg.disabled){fk+=bY;
}else{fk+=en;
}}else{fi=fg.invalid&&!fg.disabled?dY:undefined;
fh=[2,8];
}return {decorator:fk,textColor:fj,shadow:fi,padding:fh,margin:[1,0]};
}},"button-frame/image":{style:function(fl){return {opacity:!fl.replacement&&fl.disabled?0.5:1};
}},"button":{alias:em,include:em,style:function(fm){return {center:true};
}},"hover-button":{alias:eo,include:eo,style:function(fn){var fo=fn.hovered?cy:undefined;

if(fo&&qx.core.Environment.get(eq)){fo+=en;
}return {decorator:fo,textColor:fn.hovered?cC:undefined};
}},"splitbutton":{},"splitbutton/button":ei,"splitbutton/arrow":{alias:ei,include:ei,style:function(fp,fq){return {icon:cu,padding:[fq.padding[0],fq.padding[1]-6],marginLeft:1};
}},"checkbox":{alias:eo,style:function(fr){var fs=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var fu;

if(fs){if(fr.checked){fu=ck;
}else if(fr.undetermined){fu=cq;
}else{fu=dI;
}}else{if(fr.checked){if(fr.disabled){fu=bD;
}else if(fr.focused){fu=h;
}else if(fr.pressed){fu=ce;
}else if(fr.hovered){fu=ci;
}else{fu=bD;
}}else if(fr.undetermined){if(fr.disabled){fu=ba;
}else if(fr.focused){fu=p;
}else if(fr.hovered){fu=ds;
}else{fu=ba;
}}else if(!fr.disabled){if(fr.focused){fu=bG;
}else if(fr.pressed){fu=c;
}else if(fr.hovered){fu=by;
}}fu=fu||dE;
var ft=fr.invalid&&!fr.disabled?y:w;
fu=bk+fu+ft+X;
}return {icon:fu,minWidth:fs?14:undefined,gap:fs?8:6};
}},"checkbox/icon":{style:function(fv){var fx=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);

if(!fx){return {opacity:!fv.replacement&&fv.disabled?0.3:1};
}var fy;

if(fv.disabled){fy=cG;
}else if(fv.focused){fy=bG;
}else if(fv.hovered){fy=by;
}else{fy=dE;
}fy+=fv.invalid&&!fv.disabled?y:w;
var fw;
if(fv.undetermined){fw=[2,0];
}return {decorator:fy,padding:fw,width:12,height:10};
}},"radiobutton":{alias:eo,style:function(fz){var fA=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);
var fC;

if(fA){fC=dI;
}else{if(fz.checked&&fz.focused){fC=eW;
}else if(fz.checked&&fz.disabled){fC=bN;
}else if(fz.checked&&fz.hovered){fC=bH;
}else if(fz.checked){fC=bB;
}else if(fz.focused){fC=bj;
}else if(fz.hovered){fC=eP;
}else{fC=dH;
}var fB=fz.invalid&&!fz.disabled?y:w;
fC=bk+fC+fB+X;
}return {icon:fC,gap:fA?8:6};
}},"radiobutton/icon":{style:function(fD){var fE=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);

if(!fE){return {opacity:!fD.replacement&&fD.disabled?0.3:1};
}var fF;

if(fD.disabled&&!fD.checked){fF=dS;
}else if(fD.checked&&fD.focused){fF=eW;
}else if(fD.checked&&fD.disabled){fF=bN;
}else if(fD.checked&&fD.hovered){fF=bH;
}else if(fD.checked){fF=bB;
}else if(fD.focused){fF=bj;
}else if(fD.hovered){fF=eP;
}else{fF=dH;
}fF+=fD.invalid&&!fD.disabled?y:w;
return {decorator:fF,width:12,height:10};
}},"textfield":{style:function(fG){var fL;
var fJ=!!fG.focused;
var fK=!!fG.invalid;
var fH=!!fG.disabled;

if(fJ&&fK&&!fH){fL=eu;
}else if(fJ&&!fK&&!fH){fL=ez;
}else if(fH){fL=ew;
}else if(!fJ&&fK&&!fH){fL=ey;
}else{fL=ev;
}
if(qx.core.Environment.get(eq)){fL+=en;
}var fI;

if(fG.disabled){fI=cA;
}else if(fG.showingPlaceholder){fI=cU;
}else{fI=bc;
}return {decorator:fL,padding:[2,4,1],textColor:fI};
}},"textarea":{include:x,style:function(fM){return {padding:4};
}},"spinner":{style:function(fN){var fR;
var fP=!!fN.focused;
var fQ=!!fN.invalid;
var fO=!!fN.disabled;

if(fP&&fQ&&!fO){fR=eu;
}else if(fP&&!fQ&&!fO){fR=ez;
}else if(fO){fR=ew;
}else if(!fP&&fQ&&!fO){fR=ey;
}else{fR=ev;
}
if(qx.core.Environment.get(eq)){fR+=en;
}return {decorator:fR};
}},"spinner/textfield":{style:function(fS){return {marginRight:2,padding:[2,4,1],textColor:fS.disabled?cA:bc};
}},"spinner/upbutton":{alias:em,include:em,style:function(fT,fU){return {icon:dx,padding:[fU.padding[0]-1,fU.padding[1]-5],shadow:undefined,margin:0};
}},"spinner/downbutton":{alias:em,include:em,style:function(fV,fW){return {icon:bK,padding:[fW.padding[0]-1,fW.padding[1]-5],shadow:undefined,margin:0};
}},"datefield":dM,"datefield/button":{alias:eT,include:eT,style:function(fX){return {icon:eG,padding:[0,3],decorator:undefined};
}},"datefield/textfield":f,"datefield/list":{alias:bL,include:bL,style:function(fY){return {decorator:undefined};
}},"groupbox":{style:function(ga){return {legendPosition:cY};
}},"groupbox/legend":{alias:eo,style:function(gb){return {padding:[1,0,1,4],textColor:gb.invalid?B:E,font:eh};
}},"groupbox/frame":{style:function(gc){var gd=qx.core.Environment.get(el);
return {padding:gd?10:12,margin:gd?1:undefined,decorator:gd?F:eC};
}},"check-groupbox":cv,"check-groupbox/legend":{alias:dE,include:dE,style:function(ge){return {padding:[1,0,1,4],textColor:ge.invalid?B:E,font:eh};
}},"radio-groupbox":cv,"radio-groupbox/legend":{alias:dH,include:dH,style:function(gf){return {padding:[1,0,1,4],textColor:gf.invalid?B:E,font:eh};
}},"scrollarea":{style:function(gg){return {minWidth:50,minHeight:50};
}},"scrollarea/corner":{style:function(gh){return {backgroundColor:A};
}},"scrollarea/pane":ep,"scrollarea/scrollbar-x":dO,"scrollarea/scrollbar-y":dO,"scrollbar":{style:function(gi){if(gi[ea]){return {};
}var gj=qx.core.Environment.get(eq);
var gk=gi.horizontal?r:O;

if(gj){gk+=en;
}return {width:gi.horizontal?undefined:16,height:gi.horizontal?16:undefined,decorator:gk,padding:1};
}},"scrollbar/slider":{alias:cT,style:function(gl){return {padding:gl.horizontal?[0,1,0,1]:[1,0,1,0]};
}},"scrollbar/slider/knob":{include:em,style:function(gm){var gn=qx.core.Environment.get(eq);
var go=gm.horizontal?bx:cE;

if(gm.disabled){go+=s;
}
if(gn){go+=en;
}return {decorator:go,minHeight:gm.horizontal?undefined:9,minWidth:gm.horizontal?9:undefined,padding:undefined,margin:0};
}},"scrollbar/button":{alias:em,include:em,style:function(gp){var gs=dm;

if(gp.left){gs+=eL;
}else if(gp.right){gs+=cR;
}else if(gp.up){gs+=cQ;
}else{gs+=S;
}var gr=qx.core.Environment.get(eq);

if(gp.left||gp.right){var gq=gp.left?3:4;
return {padding:gr?[3,0,3,gq]:[2,0,2,gq],icon:gs,width:15,height:14,margin:0};
}else{return {padding:gr?3:[3,2],icon:gs,width:14,height:15,margin:0};
}}},"scrollbar/button-begin":eN,"scrollbar/button-end":eN,"slider":{style:function(gt){var gx;
var gv=!!gt.focused;
var gw=!!gt.invalid;
var gu=!!gt.disabled;

if(gv&&gw&&!gu){gx=eu;
}else if(gv&&!gw&&!gu){gx=ez;
}else if(gu){gx=ew;
}else if(!gv&&gw&&!gu){gx=ey;
}else{gx=ev;
}
if(qx.core.Environment.get(eq)){gx+=en;
}return {decorator:gx};
}},"slider/knob":{include:em,style:function(gy){return {decorator:gy.disabled?dT:bx,shadow:undefined,height:14,width:14,padding:0};
}},"list":{alias:N,style:function(gz){var gD;
var gB=!!gz.focused;
var gC=!!gz.invalid;
var gA=!!gz.disabled;

if(gB&&gC&&!gA){gD=eu;
}else if(gB&&!gC&&!gA){gD=ez;
}else if(gA){gD=ew;
}else if(!gB&&gC&&!gA){gD=ey;
}else{gD=ev;
}
if(qx.core.Environment.get(eq)){gD+=en;
}return {backgroundColor:cx,decorator:gD};
}},"list/pane":ep,"listitem":{alias:eo,style:function(gE){var gF;

if(gE.dragover){gF=gE.selected?J:I;
}else{gF=gE.selected?cy:undefined;

if(gF&&qx.core.Environment.get(eq)){gF+=en;
}}return {padding:gE.dragover?[4,4,2,4]:4,textColor:gE.selected?cC:undefined,decorator:gF};
}},"slidebar":{},"slidebar/scrollpane":{},"slidebar/content":{},"slidebar/button-forward":{alias:em,include:em,style:function(gG){return {padding:5,center:true,icon:gG.vertical?cu:z};
}},"slidebar/button-backward":{alias:em,include:em,style:function(gH){return {padding:5,center:true,icon:gH.vertical?bl:bE};
}},"tabview":{style:function(gI){return {contentPadding:16};
}},"tabview/bar":{alias:bR,style:function(gJ){var gK=qx.core.Environment.get(el)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(eq);
var gL={marginBottom:gJ.barTop?-1:0,marginTop:gJ.barBottom?gK?-4:-7:0,marginLeft:gJ.barRight?gK?-3:-5:0,marginRight:gJ.barLeft?-1:0,paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0};

if(gJ.barTop||gJ.barBottom){gL.paddingLeft=5;
gL.paddingRight=7;
}else{gL.paddingTop=5;
gL.paddingBottom=7;
}return gL;
}},"tabview/bar/button-forward":{include:W,alias:W,style:function(gM){if(gM.barTop||gM.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/button-backward":{include:bM,alias:bM,style:function(gN){if(gN.barTop||gN.barBottom){return {marginTop:2,marginBottom:2};
}else{return {marginLeft:2,marginRight:2};
}}},"tabview/bar/scrollpane":{},"tabview/pane":{style:function(gO){var gP=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);
return {decorator:gP?m:dg,minHeight:100,marginBottom:gO.barBottom?-1:0,marginTop:gO.barTop?-1:0,marginLeft:gO.barLeft?-1:0,marginRight:gO.barRight?-1:0};
}},"tabview-page":{alias:ep,include:ep,style:function(gQ){var gR=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);
return {padding:gR?[4,3]:undefined};
}},"tabview-page/button":{alias:eo,style:function(gS){var ha,gV=0;
var gY=0,gT=0,gW=0,gX=0;
var gU=qx.core.Environment.get(el)&&qx.core.Environment.get(ek)&&qx.core.Environment.get(eq);

if(gS.checked){if(gS.barTop){ha=cb;
gV=gU?[5,11]:[6,14];
gW=gS.firstTab?0:-5;
gX=gS.lastTab?0:-5;
}else if(gS.barBottom){ha=dw;
gV=gU?[5,11]:[6,14];
gW=gS.firstTab?0:-5;
gX=gS.lastTab?0:-5;
gY=3;
}else if(gS.barRight){ha=dC;
gV=gU?[5,10]:[6,13];
gY=gS.firstTab?0:-5;
gT=gS.lastTab?0:-5;
gW=2;
}else{ha=cg;
gV=gU?[5,10]:[6,13];
gY=gS.firstTab?0:-5;
gT=gS.lastTab?0:-5;
}}else{if(gS.barTop){ha=eI;
gV=gU?[3,9]:[4,10];
gY=4;
gW=gS.firstTab?5:1;
gX=1;
}else if(gS.barBottom){ha=dq;
gV=gU?[3,9]:[4,10];
gT=4;
gW=gS.firstTab?5:1;
gX=1;
gY=3;
}else if(gS.barRight){ha=k;
gV=gU?[3,9]:[4,10];
gX=5;
gY=gS.firstTab?5:1;
gT=1;
gW=3;
}else{ha=eJ;
gV=gU?[3,9]:[4,10];
gW=5;
gY=gS.firstTab?5:1;
gT=1;
gX=1;
}}
if(ha&&gU){ha+=en;
}return {zIndex:gS.checked?10:5,decorator:ha,padding:gV,marginTop:gY,marginBottom:gT,marginLeft:gW,marginRight:gX,textColor:gS.disabled?cA:gS.checked?bf:cI};
}},"tabview-page/button/label":{alias:cw,style:function(hb){return {padding:[0,1,0,1],margin:hb.focused?0:1,decorator:hb.focused?bs:undefined};
}},"tabview-page/button/close-button":{alias:eo,style:function(hc){return {icon:d};
}},"toolbar":{style:function(hd){var he=qx.core.Environment.get(eq);
return {decorator:he?be:dd,spacing:2};
}},"toolbar/part":{style:function(hf){return {decorator:dD,spacing:2};
}},"toolbar/part/container":{style:function(hg){return {paddingLeft:2,paddingRight:2};
}},"toolbar/part/handle":{style:function(hh){return {source:M,marginLeft:3,marginRight:3};
}},"toolbar-button":{alias:eo,style:function(hi){var hk;

if(hi.pressed||(hi.checked&&!hi.hovered)||(hi.checked&&hi.disabled)){hk=eD;
}else if(hi.hovered&&!hi.disabled){hk=bq;
}var hj=qx.core.Environment.get(eq)&&qx.core.Environment.get(el);

if(hj&&hk){hk+=en;
}return {marginTop:2,marginBottom:2,padding:(hi.pressed||hi.checked||hi.hovered)&&!hi.disabled||(hi.disabled&&hi.checked)?3:5,decorator:hk};
}},"toolbar-menubutton":{alias:er,include:er,style:function(hl){return {showArrow:true};
}},"toolbar-menubutton/arrow":{alias:cB,include:cB,style:function(hm){return {source:bK};
}},"toolbar-splitbutton":{style:function(hn){return {marginTop:2,marginBottom:2};
}},"toolbar-splitbutton/button":{alias:er,include:er,style:function(ho){return {icon:cu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-splitbutton/arrow":{alias:er,include:er,style:function(hp){if(hp.pressed||hp.checked||(hp.hovered&&!hp.disabled)){var hq=1;
}else{var hq=3;
}return {padding:hq,icon:cu,marginTop:undefined,marginBottom:undefined};
}},"toolbar-separator":{style:function(hr){return {decorator:dz,margin:7};
}},"tree":dK,"tree-item":{style:function(hs){var ht=hs.selected?cy:undefined;

if(ht&&qx.core.Environment.get(eq)){ht+=en;
}return {padding:[2,6],textColor:hs.selected?cC:undefined,decorator:ht};
}},"tree-item/icon":{include:cB,style:function(hu){return {paddingRight:5};
}},"tree-item/label":cw,"tree-item/open":{include:cB,style:function(hv){var hw;

if(hv.selected&&hv.opened){hw=eE;
}else if(hv.selected&&!hv.opened){hw=cF;
}else if(hv.opened){hw=U;
}else{hw=bz;
}return {padding:[0,5,0,2],source:hw};
}},"tree-folder":{include:dJ,alias:dJ,style:function(hx){var hz,hy;

if(hx.small){hz=hx.opened?eQ:eR;
hy=eQ;
}else if(hx.large){hz=hx.opened?bo:G;
hy=bo;
}else{hz=hx.opened?bn:cc;
hy=bn;
}return {icon:hz,iconOpened:hy};
}},"tree-file":{include:dJ,alias:dJ,style:function(hA){return {icon:hA.small?bO:hA.large?dh:Q};
}},"treevirtual":bm,"treevirtual-folder":{style:function(hB){return {icon:hB.opened?eQ:eR};
}},"treevirtual-file":{include:bI,alias:bI,style:function(hC){return {icon:bO};
}},"treevirtual-line":{style:function(hD){return {icon:dI};
}},"treevirtual-contract":{style:function(hE){return {icon:U,paddingLeft:5,paddingTop:2};
}},"treevirtual-expand":{style:function(hF){return {icon:bz,paddingLeft:5,paddingTop:2};
}},"treevirtual-only-contract":dL,"treevirtual-only-expand":v,"treevirtual-start-contract":dL,"treevirtual-start-expand":v,"treevirtual-end-contract":dL,"treevirtual-end-expand":v,"treevirtual-cross-contract":dL,"treevirtual-cross-expand":v,"treevirtual-end":{style:function(hG){return {icon:dI};
}},"treevirtual-cross":{style:function(hH){return {icon:dI};
}},"tooltip":{include:ct,style:function(hI){return {backgroundColor:dA,padding:[1,3,2,3],offset:[15,5,5,5]};
}},"tooltip/atom":eo,"tooltip-error":{include:eA,style:function(hJ){var hK=qx.core.Environment.get(el)&&qx.core.Environment.get(ek);
return {textColor:cC,backgroundColor:undefined,placeMethod:ep,offset:[0,0,0,14],marginTop:-2,position:C,showTimeout:100,hideTimeout:10000,decorator:hK?K:dr,shadow:bS,font:eh,padding:hK?3:undefined};
}},"tooltip-error/atom":eo,"window":{style:function(hL){var hN=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var hO;
var hM;

if(hN){if(hL.showStatusbar){hO=dt;
}else{hO=dn;
}}else{hM=cM;
}return {decorator:hO,shadow:hM,contentPadding:[10,10,10,10],margin:[0,5,5,0]};
}},"window-resize-frame":{style:function(hP){var hQ=qx.core.Environment.get(el);
var hR;

if(hQ){if(hP.showStatusbar){hR=bp;
}else{hR=dV;
}}else{hR=ej;
}return {decorator:hR};
}},"window/pane":{style:function(hS){var hT=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
return {decorator:hT?cS:cP};
}},"window/captionbar":{style:function(hU){var hV=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var hW=hU.active?ch:eg;

if(hV){hW+=en;
}return {decorator:hW,textColor:hU.active?dj:bF,minHeight:26,paddingRight:2};
}},"window/icon":{style:function(hX){return {margin:[5,0,3,6]};
}},"window/title":{style:function(hY){return {alignY:cz,font:eh,marginLeft:6,marginRight:12};
}},"window/minimize-button":{alias:eo,style:function(ia){return {icon:ia.active?ia.hovered?dQ:j:eF,margin:[4,8,2,0]};
}},"window/restore-button":{alias:eo,style:function(ib){return {icon:ib.active?ib.hovered?cO:db:i,margin:[5,8,2,0]};
}},"window/maximize-button":{alias:eo,style:function(ic){return {icon:ic.active?ic.hovered?bh:cd:H,margin:[4,8,2,0]};
}},"window/close-button":{alias:eo,style:function(id){return {icon:id.active?id.hovered?e:dW:cf,margin:[4,8,2,0]};
}},"window/statusbar":{style:function(ie){var ig=qx.core.Environment.get(el)&&qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
return {padding:[2,6],decorator:ig?bt:dp,minHeight:18};
}},"window/statusbar-text":{style:function(ih){return {font:a};
}},"iframe":{style:function(ii){return {decorator:ej};
}},"resizer":{style:function(ij){var ik=qx.core.Environment.get(ek)&&qx.core.Environment.get(el)&&qx.core.Environment.get(eq);
return {decorator:ik?da:l};
}},"splitpane":{style:function(il){return {decorator:g};
}},"splitpane/splitter":{style:function(im){return {width:im.horizontal?3:undefined,height:im.vertical?3:undefined,backgroundColor:V};
}},"splitpane/splitter/knob":{style:function(io){return {source:io.horizontal?dG:cj};
}},"splitpane/slider":{style:function(ip){return {width:ip.horizontal?3:undefined,height:ip.vertical?3:undefined,backgroundColor:V};
}},"selectbox":em,"selectbox/atom":eo,"selectbox/popup":ct,"selectbox/list":{alias:dK},"selectbox/arrow":{include:cB,style:function(iq){return {source:cu,paddingLeft:5};
}},"datechooser":{style:function(ir){var iv;
var it=!!ir.focused;
var iu=!!ir.invalid;
var is=!!ir.disabled;

if(it&&iu&&!is){iv=eu;
}else if(it&&!iu&&!is){iv=ez;
}else if(is){iv=ew;
}else if(!it&&iu&&!is){iv=ey;
}else{iv=ev;
}
if(qx.core.Environment.get(eq)){iv+=en;
}return {padding:2,decorator:iv,backgroundColor:cx};
}},"datechooser/navigation-bar":{},"datechooser/nav-button":{include:em,alias:em,style:function(iw){var ix={padding:[2,4],shadow:undefined};

if(iw.lastYear){ix.icon=df;
ix.marginRight=1;
}else if(iw.lastMonth){ix.icon=bE;
}else if(iw.nextYear){ix.icon=co;
ix.marginLeft=1;
}else if(iw.nextMonth){ix.icon=z;
}return ix;
}},"datechooser/last-year-button-tooltip":eA,"datechooser/last-month-button-tooltip":eA,"datechooser/next-year-button-tooltip":eA,"datechooser/next-month-button-tooltip":eA,"datechooser/last-year-button":dN,"datechooser/last-month-button":dN,"datechooser/next-month-button":dN,"datechooser/next-year-button":dN,"datechooser/month-year-label":{style:function(iy){return {font:eh,textAlign:dF,textColor:iy.disabled?cA:undefined};
}},"datechooser/date-pane":{style:function(iz){return {textColor:iz.disabled?cA:undefined,marginTop:2};
}},"datechooser/weekday":{style:function(iA){return {textColor:iA.disabled?cA:iA.weekend?bv:undefined,textAlign:dF,paddingTop:2,backgroundColor:bP};
}},"datechooser/week":{style:function(iB){return {textAlign:dF,padding:[2,4],backgroundColor:bP};
}},"datechooser/day":{style:function(iC){var iD=iC.disabled?undefined:iC.selected?cy:undefined;

if(iD&&qx.core.Environment.get(eq)){iD+=en;
}return {textAlign:dF,decorator:iD,textColor:iC.disabled?cA:iC.selected?cC:iC.otherMonth?bv:undefined,font:iC.today?eh:undefined,padding:[2,4]};
}},"combobox":{style:function(iE){var iI;
var iG=!!iE.focused;
var iH=!!iE.invalid;
var iF=!!iE.disabled;

if(iG&&iH&&!iF){iI=eu;
}else if(iG&&!iH&&!iF){iI=ez;
}else if(iF){iI=ew;
}else if(!iG&&iH&&!iF){iI=ey;
}else{iI=ev;
}
if(qx.core.Environment.get(eq)){iI+=en;
}return {decorator:iI};
}},"combobox/popup":ct,"combobox/list":{alias:dK},"combobox/button":{include:em,alias:em,style:function(iJ,iK){var iL={icon:cu,padding:[iK.padding[0],iK.padding[1]-6],shadow:undefined,margin:undefined};

if(iJ.selected){iL.decorator=bC;
}return iL;
}},"combobox/textfield":{include:x,style:function(iM){return {decorator:undefined};
}},"menu":{style:function(iN){var iO=qx.core.Environment.get(eq)&&qx.core.Environment.get(ek);
var iP={decorator:iO?br:ca,shadow:iO?undefined:bJ,spacingX:6,spacingY:1,iconColumnWidth:16,arrowColumnWidth:4,placementModeY:iN.submenu||iN.contextmenu?de:dk};

if(iN.submenu){iP.position=C;
iP.offset=[-2,-3];
}return iP;
}},"menu/slidebar":eK,"menu-slidebar":ep,"menu-slidebar-button":{style:function(iQ){var iR=iQ.hovered?cy:undefined;

if(iR&&qx.core.Environment.get(eq)){iR+=en;
}return {decorator:iR,padding:7,center:true};
}},"menu-slidebar/button-backward":{include:bw,style:function(iS){return {icon:iS.hovered?dv:bl};
}},"menu-slidebar/button-forward":{include:bw,style:function(iT){return {icon:iT.hovered?cs:cu};
}},"menu-separator":{style:function(iU){return {height:0,decorator:n,margin:[4,2]};
}},"menu-button":{alias:eo,style:function(iV){var iW=iV.selected?cy:undefined;

if(iW&&qx.core.Environment.get(eq)){iW+=en;
}return {decorator:iW,textColor:iV.selected?cC:undefined,padding:[4,6]};
}},"menu-button/icon":{include:cB,style:function(iX){return {alignY:cz};
}},"menu-button/label":{include:cw,style:function(iY){return {alignY:cz,padding:1};
}},"menu-button/shortcut":{include:cw,style:function(ja){return {alignY:cz,marginLeft:14,padding:1};
}},"menu-button/arrow":{include:cB,style:function(jb){return {source:jb.selected?t:z,alignY:cz};
}},"menu-checkbox":{alias:et,include:et,style:function(jc){return {icon:!jc.checked?undefined:jc.selected?L:dR};
}},"menu-radiobutton":{alias:et,include:et,style:function(jd){return {icon:!jd.checked?undefined:jd.selected?cV:cn};
}},"menubar":{style:function(je){var jf=qx.core.Environment.get(eq);
return {decorator:jf?dB:dP};
}},"menubar-button":{alias:eo,style:function(jg){var jh=(jg.pressed||jg.hovered)&&!jg.disabled?cy:undefined;

if(jh&&qx.core.Environment.get(eq)){jh+=en;
}return {decorator:jh,textColor:jg.pressed||jg.hovered?cC:undefined,padding:[3,8]};
}},"colorselector":ep,"colorselector/control-bar":ep,"colorselector/control-pane":ep,"colorselector/visual-pane":cv,"colorselector/preset-grid":ep,"colorselector/colorbucket":{style:function(ji){return {decorator:ej,width:16,height:16};
}},"colorselector/preset-field-set":cv,"colorselector/input-field-set":cv,"colorselector/preview-field-set":cv,"colorselector/hex-field-composite":ep,"colorselector/hex-field":x,"colorselector/rgb-spinner-composite":ep,"colorselector/rgb-spinner-red":es,"colorselector/rgb-spinner-green":es,"colorselector/rgb-spinner-blue":es,"colorselector/hsb-spinner-composite":ep,"colorselector/hsb-spinner-hue":es,"colorselector/hsb-spinner-saturation":es,"colorselector/hsb-spinner-brightness":es,"colorselector/preview-content-old":{style:function(jj){return {decorator:ej,width:50,height:10};
}},"colorselector/preview-content-new":{style:function(jk){return {decorator:ej,backgroundColor:cx,width:50,height:10};
}},"colorselector/hue-saturation-field":{style:function(jl){return {decorator:ej,margin:5};
}},"colorselector/brightness-field":{style:function(jm){return {decorator:ej,margin:[5,7]};
}},"colorselector/hue-saturation-pane":ep,"colorselector/hue-saturation-handle":ep,"colorselector/brightness-pane":ep,"colorselector/brightness-handle":ep,"colorpopup":{alias:ct,include:ct,style:function(jn){return {padding:5,backgroundColor:A};
}},"colorpopup/field":{style:function(jo){return {decorator:ej,margin:2,width:14,height:14,backgroundColor:cx};
}},"colorpopup/selector-button":ei,"colorpopup/auto-button":ei,"colorpopup/preview-pane":cv,"colorpopup/current-preview":{style:function(jp){return {height:20,padding:4,marginLeft:4,decorator:ej,allowGrowX:true};
}},"colorpopup/selected-preview":{style:function(jq){return {height:20,padding:4,marginRight:4,decorator:ej,allowGrowX:true};
}},"colorpopup/colorselector-okbutton":{alias:ei,include:ei,style:function(jr){return {icon:cX};
}},"colorpopup/colorselector-cancelbutton":{alias:ei,include:ei,style:function(js){return {icon:eH};
}},"table":{alias:ep,style:function(jt){return {decorator:bm};
}},"table/statusbar":{style:function(ju){return {decorator:ee,padding:[0,2]};
}},"table/column-button":{alias:em,style:function(jv){var jw=qx.core.Environment.get(eq);
return {decorator:jw?bd:bA,padding:3,icon:cm};
}},"table-column-reset-button":{include:et,alias:et,style:function(){return {icon:eM};
}},"table-scroller":ep,"table-scroller/scrollbar-x":dO,"table-scroller/scrollbar-y":dO,"table-scroller/header":{style:function(jx){var jy=qx.core.Environment.get(eq);
return {decorator:jy?bd:bA};
}},"table-scroller/pane":{style:function(jz){return {backgroundColor:dX};
}},"table-scroller/focus-indicator":{style:function(jA){return {decorator:bT};
}},"table-scroller/resize-line":{style:function(jB){return {backgroundColor:cN,width:2};
}},"table-header-cell":{alias:eo,style:function(jC){return {minWidth:13,minHeight:20,padding:jC.hovered?[3,4,2,4]:[3,4],decorator:jC.hovered?bu:R,sortIcon:jC.sorted?(jC.sortedAscending?du:cp):undefined};
}},"table-header-cell/label":{style:function(jD){return {minWidth:0,alignY:cz,paddingRight:5};
}},"table-header-cell/sort-icon":{style:function(jE){return {alignY:cz,alignX:eU};
}},"table-header-cell/icon":{style:function(jF){return {minWidth:0,alignY:cz,paddingRight:5};
}},"table-editor-textfield":{include:x,style:function(jG){return {decorator:undefined,padding:[2,2],backgroundColor:cx};
}},"table-editor-selectbox":{include:D,alias:D,style:function(jH){return {padding:[0,2],backgroundColor:cx};
}},"table-editor-combobox":{include:dM,alias:dM,style:function(jI){return {decorator:undefined,backgroundColor:cx};
}},"progressive-table-header":{alias:ep,style:function(jJ){return {decorator:cl};
}},"progressive-table-header-cell":{alias:eo,style:function(jK){var jL=qx.core.Environment.get(eq);
return {minWidth:40,minHeight:25,paddingLeft:6,decorator:jL?ed:o};
}},"app-header":{style:function(jM){return {font:eh,textColor:cC,padding:[8,12],decorator:cK};
}},"app-header-label":cw,"virtual-list":dK,"virtual-list/row-layer":cJ,"row-layer":{style:function(jN){return {colorEven:dy,colorOdd:eb};
}},"group-item":{include:cw,alias:cw,style:function(jO){return {padding:4,decorator:qx.core.Environment.get(eq)?eB:eO,textColor:bg,font:eh};
}},"virtual-selectbox":D,"virtual-selectbox/dropdown":ct,"virtual-selectbox/dropdown/list":{alias:eS},"virtual-combobox":dM,"virtual-combobox/dropdown":ct,"virtual-combobox/dropdown/list":{alias:eS},"virtual-tree":{include:bb,alias:bb,style:function(jP){return {itemHeight:26};
}},"virtual-tree-folder":cL,"virtual-tree-file":cr,"column-layer":ep,"cell":{style:function(jQ){return {textColor:jQ.selected?cC:eV,padding:[3,6],font:T};
}},"cell-string":ex,"cell-number":{include:ex,style:function(jR){return {textAlign:eU};
}},"cell-image":ex,"cell-boolean":{include:ex,style:function(jS){return {iconTrue:bX,iconFalse:di};
}},"cell-atom":ex,"cell-date":ex,"cell-html":ex,"htmlarea":{"include":ep,style:function(jT){return {backgroundColor:u};
}},"progressbar":{style:function(jU){return {decorator:q,padding:[1],backgroundColor:P};
}},"progressbar/progress":{style:function(jV){var jW=jV.disabled?eO:cy;

if(qx.core.Environment.get(eq)){jW+=en;
}return {decorator:jW};
}}}});
})();
(function(){var c="Tango",b="qx/icon/Tango",a="qx.theme.icon.Tango";
qx.Theme.define(a,{title:c,aliases:{"icon":b}});
})();
(function(){var t="os.version",s="os.name",r="win",q="7",p="vista",o="osx",n="Liberation Sans",m="Tahoma",l="sans-serif",k="Arial",d="Lucida Grande",j="Candara",g="Segoe UI",c="Consolas",b="monospace",f="Courier New",e="Lucida Console",h="Monaco",a="qx.theme.modern.Font",i="DejaVu Sans Mono";
qx.Theme.define(a,{fonts:{"default":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"bold":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?12:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l],bold:true},"small":{size:(qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p))?11:10,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[d]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[g,j]:[m,n,k,l]},"monospace":{size:11,lineHeight:1.4,family:qx.core.Environment.get(s)==o?[e,h]:((qx.core.Environment.get(s)==r&&(qx.core.Environment.get(t)==q||qx.core.Environment.get(t)==p)))?[c]:[c,i,f,b]}}});
})();
(function(){var b="qx.theme.Modern",a="Modern";
qx.Theme.define(b,{title:a,meta:{color:qx.theme.modern.Color,decoration:qx.theme.modern.Decoration,font:qx.theme.modern.Font,appearance:qx.theme.modern.Appearance,icon:qx.theme.icon.Tango}});
})();


qx.$$loader.init();

