import { Component } from "inferno";
import { autobind } from "core-decorators";
import { connect } from "inferno-redux";
import { FormControl, Input } from "inferno-bootstrap";
import glamorous from "glamorous";
import Bridge from "store/bridge";
import { addAddressAt, startRaspberryAt } from "store/actions";
import { ContainerStack, Button } from "views/ui";
import { InputForm } from "views/ui/form";
import FeedPlayer from "./feedPlayer";

export const VideoEl = glamorous.video({
  width: "240px",
  height: "180px",
});

class VideoFeed extends Component {
  constructor(props) {
    super(props);
  }

  @autobind
  onSubmit(v) {
    this.props.addAddressAt({ index: this.props.index, value: v });
  }

  @autobind
  onStart() {
    this.props.startRaspberryAt(this.props.index);
  }

  render(props) {
    return (
      <ContainerStack>
        <VideoEl
          autoplay
          controls
          muted
          innerRef={el => {
            new FeedPlayer(el, `${props.srvAddr}/manifest.mpd`, {
              onLoad: player => Bridge.addVideoEl(player.el),
            });
          }}
        />
        <InputForm placeholder={props.cameraAddr} text={"ADD CAMERA"} onSubmit={this.onSubmit} />
        <Button onClick={this.onStart}>START</Button>
      </ContainerStack>
    );
  }
}

const mapStateToProps = () => store => ({});

const mapDispatchToProps = (dispatch, props) => ({
  addAddressAt: v => dispatch(addAddressAt(v)),
  startRaspberryAt: index => dispatch(startRaspberryAt(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  VideoFeed
);
