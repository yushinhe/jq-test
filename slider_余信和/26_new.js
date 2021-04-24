$(function () {
    let divWidth = $('#sliderBoard').width();

    let imgArr = ['013', '011', '017', '021', '027', '033', '049', '019']
    let imgCount = imgArr.length;

    for (let i = 0; i < imgCount; i++) {
        $('#contentButton').append('<li></li>');
        $('#content').append(`<li><img src="./images/washDrawing/${imgArr[i]}.JPG" class="image"></li>`)
    }

    $('#contentButton li:nth-child(1)').addClass('clickMe');
    $('#content li').width(divWidth);  //li的寬度
    $('#content').width(divWidth * imgCount);  //ul的寬度

    let index = 0;
    function slideTo(index) {
        $('#content').animate({
            left: divWidth * index * -1,
        });
        $('#contentButton li').eq(index).addClass('clickMe').siblings().removeClass('clickMe');
    }
    $('#contentButton li').click(function () {
        index = $(this).index();
        slideTo(index)
    });

    $(window).resize(function () {
        divWidth = $('#sliderBoard').width();
        $('#content li').width(divWidth);  //li的寬度
        console.log(index, divWidth);
        $('#content').width(divWidth * imgCount);  //ul的寬度
        $('#content').css({
            left: divWidth * index * -1,
        });
    })
    function autoPlay() {
        if (index < imgCount - 1) {
            index++;
        } else {
            index = 0;
        }

        console.log(index);
        slideTo(index)
    }

    setInterval(autoPlay, 5000)

});