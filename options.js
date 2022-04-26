

(function() {

    window.buildbot = window.buildbot || {};
    
    var prefs = new buildbot.PrefStore;
    
   
    function main() {
      var checkbox = document.getElementById('notifications');
      prefs.getUseNotifications(function(useNotifications) {
        checkbox.checked = useNotifications;
        checkbox.addEventListener(
          'click',
          function() {prefs.setUseNotifications(checkbox.checked);});
      });
    
      var textbox = document.getElementById('try-job-username');
      prefs.getTryJobUsername(function(tryJobUsername) {
        textbox.value = tryJobUsername;
        textbox.addEventListener(
            'change',
            function() {prefs.setTryJobUsername(textbox.value);});
      });
    }
    
    main();
    
    })();