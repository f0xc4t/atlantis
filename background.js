var opt = ["token"];
chrome.storage.local.get(opt, function(data) {
    for (var i = 0, len = opt.length; i < len; i++) {
        var key = opt[i];
        
        if (!(key in data)) {
            
        }
    }
});

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'main',
    bounds: { width: 320, height: 480 }
  });
});