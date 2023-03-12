// @name::sample
// @author::mul
// @homepage::samplelib.com
// @version::1.0

var data = {
  info: {
    type: "msg",
    value:
      "This is an example script for mul! Script providers can customize this SOURCE SETUP PAGE and even get user data input just like the example below.",
  },
  "Api Key:": { type: "str", value: "this is just an example" },
};
const surl = "https://download.samplelib.com/mp3/sample-15s.mp3";
const crequest = "https://picsum.photos/800";

function search(query, page) {
  var songs = JsUtil.newList();
  for (var i = 0; i < 10; i++) {
    var r = httpClient.get(new Request.Builder().url(crequest).build());
    var curl = r.header("Location");
    var id = curl.split("/")[4];
    r.close();
    songs.add(
      new ExternalSong(
        +id,
        "sample " + id,
        "samplelib.com",
        surl,
        curl,
        JsUtil.newMap()
      )
    );
  }
  songs.add(
    new ExternalSongContainer(
      "",
      "container",
      "",
      "",
      "https://picsum.photos/id/237/200",
      JsUtil.newMap(),
      ""
    )
  );
  return songs;
}

function fetchContainerInfo(container, page) {
  var songs = JsUtil.newList();
  for (var i = 0; i < 10; i++) {
    var r = httpClient.get(new Request.Builder().url(crequest).build());
    var curl = r.header("Location");
    var id = curl.split("/")[4];
    r.close();
    songs.add(
      new ExternalSong(
        +id,
        "sample " + id,
        "samplelib.com",
        surl,
        curl,
        JsUtil.newMap()
      )
    );
  }
  return songs;
}

function fetchSongInfo(song) {
  return song;
}
