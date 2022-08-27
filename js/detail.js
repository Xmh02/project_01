window.addEventListener('load', function () {
    var preimg = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    preimg.addEventListener('mouseover', function () {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preimg.addEventListener('mouseout', function () {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preimg.addEventListener('mousemove', function (e) {
        var maskLeft = e.pageX - this.offsetLeft;
        var maskTop = e.pageY - this.offsetTop;
        //遮挡层移动距离
        var maskX = maskLeft - mask.offsetWidth / 2;
        var maskY = maskTop - mask.offsetHeight / 2;
        //遮挡层最大移动距离
        var maskMaxleft = preimg.offsetWidth - mask.offsetWidth
        var maskMaxtop = preimg.offsetHeight - mask.offsetHeight
        if (maskX <= 0) {
            maskX = 0
        } else if (maskX >= maskMaxleft) {
            maskX = maskMaxleft
        }
        if (maskY <= 0) {
            maskY = 0
        } else if (maskY >= maskMaxtop) {
            maskY = maskMaxtop
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        var bigImg = document.querySelector('.bigImg');
        //大图片最大移动距离
        var bigMaxleft = bigImg.offsetWidth - big.offsetWidth;
        var bigMaxtop = bigImg.offsetHeight - big.offsetHeight;
        //大图片移动距离=遮挡层移动距离*大图片最大移动距离/遮挡层最大移动距离
        var bigImgx = maskX * bigMaxleft / maskMaxleft;
        var bigImgy = maskY * bigMaxtop / maskMaxtop;
        bigImg.style.left = -bigImgx + 'px';
        bigImg.style.top = -bigImgy + 'px';
    })
})