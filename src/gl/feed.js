const FEED = (el, address) => {
  const player1 = dashjs.MediaPlayer().create();
  player1.initialize(el, address, true);
  player1.setJumpGaps(true);
  player1.setSmallGapLimit(10);
  player1.setSegmentOverlapToleranceTime(4);
};

export default FEED;
