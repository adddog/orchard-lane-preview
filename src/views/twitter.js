// // adapted from https://github.com/timwis/choo-leaflet-demo/blob/master/src/map.js
var Nanocomponent = require('nanocomponent/')
var html = require('bel')

module.exports = Leaflet

function Leaflet () {
  if (!(this instanceof Leaflet)) return new Leaflet()
  Nanocomponent.call(this)

  this.map = null // capture leaflet
  this.coords = [0, 0] // null island
}

Leaflet.prototype = Object.create(Nanocomponent.prototype)

Leaflet.prototype.createElement = function (coords) {
  this.coords = coords
  return html`
    <div style="height: 500px">
      <div id="map"></div>
    </div>
  `
}

Leaflet.prototype.update = function (coords) {
  if (!this.map) return this._log.warn('missing map', 'failed to update')
  if (coords[0] !== this.coords[0] || coords[1] !== this.coords[1]) {
    var self = this
  }
  return false
}

Leaflet.prototype.beforerender = function (el) {
  var coords = this.coords
}

Leaflet.prototype.load = function () {
  this.map.invalidateSize()
}

Leaflet.prototype.unload = function () {

  this.map.remove()
  this.map = null
  this.coords = [0, 0]
}
