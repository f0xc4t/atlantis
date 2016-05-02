$(document).ready(function() {
   window.WebSocket = window.WebSocket || window.MozWebSocket;
    var ws = new window.WebSocket("ws://localhost:8843");
    console.log(ws);
    $('.msg').html(456); 
    
    
    ws.onmessage = function(e) {
        $('.msg').append($("<div></div>").html(e.data));
        var _d = JSON.parse(e.data);
        chrome.storage.local.get("token", function(data) {
            if (!("token" in data)) {
                chrome.storage.local.set({"token": _d["token"]}, function() {
                    $('.msg').append($("<div></div>").html("save success"));
                });
            }
        });
        
    };
        
    ws.onopen = function(e) {
        console.log("Connection established!");
    }
    
    $(".input").on("click", ".button", function() {
        chrome.storage.local.get("token", function(data) {
            if ("token" in data) {
                console.log(data["token"]);
                $('.msg').append($("<div></div>").html("token => " + data["token"]));
                ws.send('{"login":{"token":"'+data["token"]+'"}}');
            } else {
                var name = $('.name').val();
                if (name) {
                    ws.send('{"register":{"name":'+name+'}}');
                }
                
                $('.name').value = "";
            }
        });
    }).on("click", ".clear", function() {
        chrome.storage.local.clear(function() {
            $('msg').append($("<div></div>").html("clear storage"));
        });
    });
});




