/**
* @license  Copyright (c) 2015 Toshiharu Irie.
* This script released under the MIT license (MIT-LICENSE.txt).
*/

var ua = (function(){
  var check = navigator.userAgent.toLowerCase(),
    is = function(u){return check.indexOf(u);};
  return {
    ie: is('msie') !== -1 || is('trident') !== -1,
    ie8: is('msie 8') !== -1,
    ie9: is('msie 9') !== -1,
    ie10: is('msie 10') !== -1,
    ie11: is('msie') === -1 && is('trident') !== -1 && is('rv:11') !== -1,
    firefox: is('firefox') !== -1,
    chrome: is('chrome') !== -1,
    safari: is('safari') !== -1 && is('chrome') === -1,
    iphone: is('iphone') !== -1,
    ipod: is('ipod') !== -1,
    ipad: is('ipad') !== -1,
    androidMobile: is('android') !== -1 && is('mobile') !== -1,
    androidTablet: is('android') !== -1 && is('mobile') === -1,
    smartphone: is('iphone') !== -1 || is('ipod') !== -1 || is('android') !== -1 && is('mobile') !== -1,
    tablet: is('ipad') !== -1 || (is('android') !== -1 && is('mobile') === -1) || is('n-06d') !== -1,
    windows: is('windows') !== -1,
    mac: is('mac os x') !== -1 && is('iphone') === -1
  };
})();