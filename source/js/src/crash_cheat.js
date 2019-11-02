<!-- 崩溃欺骗 -->
var titleTime;
var OriginTitle;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        OriginTitle = document.title; 
        document.title = '泥憋走吖 (つ´ω`)つ';
        clearTimeout(titleTime);
    }
    else {
        document.title = '(ﾉ>ω<)ﾉ 欢迎回来 | ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
