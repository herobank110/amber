declare class ViewTimeline {
  constructor(opts: { subject: Element; orientation?: string });
  currentTime: any;
}

type AnimationTimeRangeKeywords = "cover" | "contain" | "enter" | "exit";
type AnimationTimeRangeKey = `${number}%`;
type AnimationTimeRangeKeys =
  | ""
  | ` ${AnimationTimeRangeKey} ${AnimationTimeRangeKey}`;
type AnimationTimeRange =
  `${AnimationTimeRangeKeywords}${AnimationTimeRangeKeys}`;

interface KeyframeAnimationOptions {
  // timeline?: ViewTimeline;
  timeRange?: AnimationTimeRange;
}
