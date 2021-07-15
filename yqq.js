alert('欢迎黄海东老师');

var pic = document.querySelector('img');
        document.addEventListener('mousemove', function(e) {
            var x = e.pageX;
            var y = e.pageY;
            console.log('x坐标是' + x, 'y坐标是' + y);
            pic.style.left = x - 50 + 'px';
            pic.style.top = y - 40 + 'px';
 });