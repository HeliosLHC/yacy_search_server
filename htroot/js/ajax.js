/**
 * Copyright (C) 2009 by Michael Peter Christen; mc@yacy.net, Frankfurt a. M., Germany
 * first published 07.04.2005 on http://yacy.net
 * Licensed under the GNU GPL-v2 license
 */

function createRequestObject() {
    var ro;
    if (window.XMLHttpRequest) {
        ro = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        ro = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return ro;
}
var http = createRequestObject();

function sndReq(action) {
    //http.open('get', 'rpc.php?action='+action);
    http.open('get', action);
    http.onreadystatechange = handleResponse;
    http.send(null);
}
