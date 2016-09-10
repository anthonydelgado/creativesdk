$(document).ready(function () {

    // Instantiate Feather - Adobe SDK
    var featherEditor = new Aviary.Feather({
        apiKey: '32a617c5e98042d8b2aedc0171f36303',
        theme: 'light', // Check out our new 'light' and 'dark' themes!
        tools: 'all',
        appendTo: '',
        onSave: function(imageID, newURL) {
            var img = document.getElementById(imageID);
            img.src = newURL;
            featherEditor.close();
        },
        onError: function(errorObj) {
            console.log(errorObj.message);
        }
    });
    function launchEditor(id, src) {
        featherEditor.launch({
            image: id,
            url: src
        });
        return false;
    }

    // Open Editor on click
    $('#editImage').on('click', function () {
        // console.log('hello world');
        var img = $('#image')[0];
        launchEditor('image', img.src);
    })
})