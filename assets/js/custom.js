$('#tweet-link').on('click', function() {
    $('.modals').fadeIn();
    $('body').css('overflow', 'hidden');
});
$('#modal-close-button').on('click', function() {
    $('.modals').fadeOut();
    $('body').css('overflow', 'inherit');
});

const tweetInput = document.querySelector("#what-happening");

tweetInput.onkeyup = function() {
    var inputInfo = tweetInput.value;
    if(inputInfo !== "") {
        document.getElementById('tweet-button-disabled').disabled = false;
        $('#tweet-button-disabled').css('background-color', '#1da1f2');
    } else {
        document.getElementById('tweet-button-disabled').disabled = true;
        $('#tweet-button-disabled').css('background-color', '#8ED0F8');
    }
}


