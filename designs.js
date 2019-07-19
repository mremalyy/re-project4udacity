// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);

})

function makeGrid(height, width) {
    $('tr').remove();

    for (var row = 1; row <= height; row++) {
        $('#pixelCanvas').append('<tr id=table' + row + '></tr');
        for (var column = 1; column <= width; column++) {
            $('#table' + row).append('<td></td>');
        }
    }
    //add color
    $('td').click(function addcolor() {
        color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }

    })
}