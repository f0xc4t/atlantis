(function() {
    var ws;
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    ws = new window.WebSocket("ws://player.louistone.com:8845");
    
    console.log(ws);
    setTimeout(
        function() {
            if (ws && ws.readyState == 1) {
                ws.send('{"login":{"name":"zzz"}}');
            }
        },
        200
    );
    
    ws.onmessage = function(e) {
        console.log(e.data);
    }
})();
