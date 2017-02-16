/**
 * Created by woojin on 2017. 2. 15..
 */
Module.register("krbus", {
  defaults: {
    text: "Bus arrivals",
    key : "",

  },

  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.text;


    if (this.config.appid === "") {
      wrapper.innerHTML = this.name + "의 config 에서 경기도 버스 도착 정보 조회 api 사용을 위한 key를 설정하세요.";
      wrapper.className = "dimmed light small";
      return wrapper;
    }



    return wrapper;



  }
});
