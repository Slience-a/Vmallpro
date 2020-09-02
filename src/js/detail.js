requirejs.config({
    paths : {
        "jquery" : "../lib/jquery-3.4.1.min"
    }
});
//详情页的具体流程，拿到详情页要用到的数据。
define(['jquery','../api/server' , './modules/banner'],function($ , { getBanner2Data } , initBanner){
    //console.log( $ );
    var type = location.search.match(/type=([^&]+)/)[1];
    var id = location.search.match(/id=([^&]+)/)[1];
    console.log( type , id );
    // console.log(type,id);
    getBanner2Data().then((res)=>{
        initBanner(res);
    });
});
