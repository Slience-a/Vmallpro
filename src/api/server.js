
//提供一个全站所有的API接口地址，通过{}提供给外面。

define (['jquery'],function($){

    function getBannerData(){
        return $.ajax('/api/mock/banner.json');//提供出去一个promise对象
     }
     function getBanner2Data(){
        return $.ajax('/api/mock/banner2.json');//提供出去一个promise对象
     }
     function getPhoneData(){
         return $.ajax('/api/mock/phone.json');
     }
     function getBookData(){
         return $.ajax('/api/mock/book.json');
     }
     function getPadData(){
         return $.ajax('/api/mock/pad.json');
     }
     function getDetailData(type,id){
         var promise = new Promise(function(resolve,reject){
            $.ajax(`/api/mock/${type}.json`).then((res)=>{
                for(var i = 0;i < res.goods_list.length;i++){
                    if(id == res.goods_list[i].goodsId){
                        resolve(res.goods_list[i]);//找到id对应的数据
                    }
                }
         });
    });
               return promise;
     }
      return{
        getBannerData,
        getBanner2Data,
        getPhoneData,
        getBookData,
        getPadData,
        getDetailData
      };
});