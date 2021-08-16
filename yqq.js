alert('欢迎黄海东老师');

var pic = document.querySelector('img');
        document.addEventListener('mousemove', function(e) {
            var x = e.pageX;
            var y = e.pageY;
            pic.style.left = x - 50 + 'px';
            pic.style.top = y - 40 + 'px';
 });
function disableInfo() {
    document.onkeydown = function() {
        var e = window.event || arguments[0];
        if(e.keyCode == 123) {
            return false;
        } else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
            return false;
        } else if((e.shiftKey) && (e.keyCode == 121)){
            return false;
        }
    };
 document.oncontextmenu = function() {
        return false;
    }
}
