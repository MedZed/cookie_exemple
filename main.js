var url = window.location.href;
var host = window.location.host;

function pref(reg, lang) {
    Cookies.set('language', lang);
    Cookies.set('region', reg);
    console.log(Cookies.get('language'));
    console.log(Cookies.get('region'));

}

if (url.indexOf('http://192.168.2.102:5500/qa_ar/index.html') != -1) {
    pref('qa', 'ar');
} else if (url.indexOf('http://192.168.2.102:5500/qa_en/index.html') != -1) {
    pref('qa', 'en');
} else if (url.indexOf('http://192.168.2.102:5500/bh_ar/index.html') != -1) {
    pref('bh', 'ar');
} else if (url.indexOf('http://192.168.2.102:5500/bh_en/index.html') != -1) {
    pref('bh', 'en');
} else if (url.indexOf('http://192.168.2.102:5500/ua_ar/index.html') != -1) {
    pref('ua', 'ar');
} else if (url.indexOf('http://192.168.2.102:5500/ua_en/index.html') != -1) {
    pref('ua', 'en');
} else {
    window.location.replace("http://192.168.2.102:5500/index.html");
}

