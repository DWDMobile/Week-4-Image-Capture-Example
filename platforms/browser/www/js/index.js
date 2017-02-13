var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        console.log("javascript works");
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        $('.take-photo').click(function() {
            app.takePhoto();
        });
    },
    
    takePhoto: function() {
        navigator.camera.getPicture(this.onSuccess, this.onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });
    },

    onSuccess: function(imageData) {
        var image = $('.the-photo').attr('src', "data:image/jpeg;base64," + imageData);
    },

    onFail: function() {
        console.log('Something went wrong');
    }
}