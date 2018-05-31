export default class VideoPlayer {
  constructor(el, address, { onLoad }) {
    this.el = el;
    this.player = dashjs.MediaPlayer().create();
    this.player.initialize(el, address, true);
    this.player.setJumpGaps(true);
    this.player.getDebug().setLogToBrowserConsole(false);
    this.player.setSmallGapLimit(10);
    this.player.setSegmentOverlapToleranceTime(4);

    var self = this
    function _onload(e) {
      e.target.setAttribute("crossorigin", "anonymous");
      e.target.removeEventListener("loadeddata", _onload);
      if (onLoad) {
        onLoad(self);
      }
    }

    el.addEventListener("loadeddata", _onload);
  }
}
