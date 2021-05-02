// left bottom div 
$(document).ready(function () {
    // left-bottom div 
    $('#tweet_chat').on('click', function () {

        $('.fade_container').fadeToggle();
    });

    //when search is active
    $(document).on("click", '.search', function () {
        $("#serch_focus_div").fadeToggle();
    });

    $('.trend_btn').on("click", function () {
        
        clear();
        var p = document.createElement('p');
        var p2 = document.createElement('p');
        p.setAttribute("class", "trend_text");
        p2.setAttribute("class", "trend_text");
        p.innerHTML = "<i class=\"far fa-tired\"></i> I am not interested";
        p2.innerHTML = "<i class=\"far fa-tired\"></i> Contains malicious or spam";
        var div = document.createElement('div');
        div.classList.add('spam');
        div.appendChild(p);
        div.appendChild(p2);
        console.log(div);

        $('#trends').append(div);

    });

    function clear(){
        $('.spam').remove();
    }









});