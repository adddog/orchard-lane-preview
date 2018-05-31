import { Component } from "inferno"
import ThreeScene from "orchard-lane-three"

class Video extends Component {
  componentDidMount() {
    ThreeScene(this.mediaPlayer.mediaSource.el, this.el)
  }
  render() {
    return (
      <VideoEl
        autoplay
        controls
        muted
        innerRef={el => {
          this.el = el
        }}
      />
    )
  }
}

const mapStateToProps = () => store => ({});

const mapDispatchToProps = (dispatch, props) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(
  Video
);