var request = require('request')
  , parseString = request('xml2js').parseString;

Module.register("krbus", {
  defaults: {
    text: "버스 도착 정보",
    ServiceKey : "",
    stations : [
      {
        sid : "", // Station ID
        sname : "", // Station name
        rid : "", // Bus route ID
        rname : "" // Bus route name
      }
    ],
    apiurl : ' http://openapi.gbis.go.kr/ws/rest/busarrivalservice'
  },

  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.text;


    if (this.config.ServiceKey === "") {
      wrapper.innerHTML = this.name + "의 config 에서 버스 도착 정보 조회 API 사용을 위한 key를 설정하세요.";
      wrapper.className = "dimmed light small";
      return wrapper;
    }

    if (this.config.stationId === []) {
      wrapper.innerHTML = this.name + "의 config 에서 정류소 및 버스 정보를 설정하세요";
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
    if (this.config.ServiceKey === "" || this.config.stations === []) {
      Log.error("KRBUS: API 키와 정류소 및 버스 정보를 설정하세요.");
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

  getParams: function(sid, bid) {
    var params = "";

    if(sid === "" || bid === "") {
      Log.error('정류소 번호, 버스 번호가 필요합니다.');
    } else {
      params = "?";
      params += "stationId=" + encodeURIComponent(sid);
      params += "&routeId=" + encodeURIComponent(bid);
      params += "&ServiceKey=" + encodeURIComponent(this.config.Servicekey);
    }

    return params;
  },

});
