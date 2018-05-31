import Emitter from "utils/emitter";
class Bridge {
  constructor() {
    this.videoEls = [];
    this.videosLoaded = false;
  }
  setStore(store) {
    this._store = store;
  }
  addVideoEl(el) {
    this.videoEls.push(el);
    if (
      this.videoEls.length ===
      this._store.getState().app.get('cameras').length
    ) {
      this.videosLoaded = true
      Emitter.emit('videos:ready', this.videoEls)
    }
  }
}

export default new Bridge();
