
function truncate(evnt) {
    let ele = document.querySelector('.panel-body')

    let vals = ele.value.split('')
    ele.value = vals.slice(0,-1).join('')
}

// $(function() {
//     $('#dot').one('click', function () {
//         $(this).attr('disabled', 'disabled');
//     });
// });


    function dotClicked()
    {
        // $('#dot').one('click', function () {
        $('#dot').attr('disabled', 'disabled');
        // });
    }


$( document ).ready(function() {
    $('#clear,#minus,#plus,#multiply').click(function () {

        $('#dot').removeAttr('disabled');

    });
});