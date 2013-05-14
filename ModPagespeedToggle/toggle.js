var loc = window.location.href;
var hash = window.location.href.match(/#.*/);
if(hash && hash.length) loc = loc.replace(hash[0],'');

var current = loc.match(/(?:\?|&)?ModPagespeed=([oO](?:n|ff))*/);
var new_val = 'Off';
if(current && current[1] && current[1].toLowerCase() === 'off') {
	new_val = 'On';
}
loc = loc.replace(/(?:\?|&)?ModPagespeed=(?:[oO](?:n|ff))*/,'');
window.location.href = loc + (loc.indexOf('?') > -1 ? '&' : '?') + 'ModPagespeed=' + new_val + (hash ? hash[0] : '');