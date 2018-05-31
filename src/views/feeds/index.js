import { Component } from "inferno";
import glamorous from "glamorous";
import Renderer from "gl";
import VideoFeed from "./feed";
import { ContainerRow } from "views/ui";

export default class Feeds extends Component {
  constructor(props) {
    super(props);
    this.videoEls = [];
  }
  render() {
    const store = this.context.store;
    const state = store.getState();
    return (
      <ContainerRow>
        {state.app
          .get("cameras")
          .map((props, index) => <VideoFeed index={index} {...props}  />)}
      </ContainerRow>
    );
  }
}

/*<canvas
          width={240}
          height={180}
          ref={el => {
            this.canvasEl = el;
          }}
        />*/
