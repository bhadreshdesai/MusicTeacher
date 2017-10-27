$(document).ready(function () {
    //Toggle fullscreen
    $(".cpanel-fullscreen").click(function (e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.children('i').hasClass('glyphicon-resize-full'))
        {
            $this.children('i').removeClass('glyphicon-resize-full');
            $this.children('i').addClass('glyphicon-resize-small');
        } else if ($this.children('i').hasClass('glyphicon-resize-small'))
        {
            $this.children('i').removeClass('glyphicon-resize-small');
            $this.children('i').addClass('glyphicon-resize-full');
        }
        $(this).closest('.panel').toggleClass('panel-fullscreen');
    });

    $("#fileToLoad").change(function (e) {
        var fileToLoad = e.target.files[0];
        if (fileToLoad) {
            var reader = new FileReader();
            reader.onload = function (fileLoadedEvent) {
                var textFromFileLoaded = fileLoadedEvent.target.result;
                $("#abc").val(textFromFileLoaded);
                $("#abc").change();
            };
            reader.readAsText(fileToLoad, 'UTF-8');
            $("#fileName").val(fileToLoad.name);
            // so we can reload the same file again
            $("#fileToLoad").val("");
        }
    });
});
