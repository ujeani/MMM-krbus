var request = require('request');

Module.register("krbus", {
  defaults: {
    text: "버스 도착 정보",
    ServiceKey : "",
    stationId : "",
    apiurl : ' http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station'
  },

  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.text;


    if (this.config.ServiceKey === "") {
      wrapper.innerHTML = this.name + "의 config 에서 버스 도착 정보 조회 api 사용을 위한 key를 설정하세요.";
      wrapper.className = "dimmed light small";
      return wrapper;
    }

    if (this.config.stationId === "") {
      wrapper.innerHTML = this.name + "의 config 에서 버스정류소 아이디를 설정하세요.";
      wrapper.className = "dimmed light small";
      return wrapper;
    }

    if (!this.loaded) {
      wrapper.innerHTML = this.translate("LOADING");
      wrapper.className = "dimmed light small";
      return wrapper;
    }

    return wrapper;
  },

  updateBusArrivals: function() {
    if (this.config.ServiceKey === "" || this.config.stationId === "") {
      Log.error("KRBUS: Need ServiceKey & stationId");
      return;
    }

    var url = apiurl;

    request({
      url: url + this.getParams(),
      method: 'GET'
    }, function (error, response, body) {
      Log.info('Status', response.statusCode);
      Log.info('Headers', JSON.stringify(response.headers));
      Log.info('Reponse received', body);
    });
  },

  getParams: function() {
    var params = "?";

    params += "stationId=" + encodeURIComponent(this.config.stationId);
    params += "&ServiceKey=" + encodeURIComponent(this.config.Servicekey);

    return params;
  },

});
