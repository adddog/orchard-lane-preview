import { Component } from "inferno"
import { connect } from "inferno-redux"
import ThreeScene from "orchard-lane-three"
import glamorous from "glamorous"
import { ContainerStack, Container, Button } from "views/ui"

export const VideoEl = glamorous.video({
  width: "240px",
  height: "180px",
  display: "none",
})

export const StartButton = glamorous.button({
  position: "absolute",
  top: "0",
  left: "0",
})

export const VideoSelect = glamorous.select({
  position: "absolute",
  top: "0",
  left: "30px",
})

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {
      started: false,
    }
  }
  componentDidMount() {
    this.scene = ThreeScene(this.videoEL, this.el)
  }
  /**~~~~**

**~~~~**/
  render() {
    return (
      <ContainerStack>
        <Container
          innerRef={el => {
            this.el = el
          }}
        />
        <VideoEl
          src={`${process.env.BUCKET}DSCN0003.MP4`}
          autoPlay
          controls
          crossorigin={"anonymous"}
          crossOrigin={"anonymous"}
          muted
          innerRef={el => {
            this.videoEL = el
          }}
        />
        {!this.state.started ? (
          <StartButton
            onClick={() => {
              this.setState({ started: true })
              this.scene.start()
            }}
          >
            START
          </StartButton>
        ) : null}
        {this.state.started ? (
          <VideoSelect>
            {this.props.videos.map(name => (
              <option value={`${process.env.BUCKET}${name}`}>
                {name}
              </option>
            ))}
          </VideoSelect>
        ) : null}
      </ContainerStack>
    )
  }
}

const mapStateToProps = () => store => ({
  videos: store.app.get("videos"),
})

const mapDispatchToProps = (dispatch, props) => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player)
