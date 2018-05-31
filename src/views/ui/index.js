import glamorous from "glamorous";

export const ContainerSimple = glamorous.div({ display: "flex" });

export const ContainerStack = glamorous.div({
  display: "flex",
  "alignItems": "flex-start",
  "justifyContent": "center",
  "flexDirection": "column",
});

export const ContainerRow = glamorous.div({
  display: "flex",
  "alignItems": "flex-start",
  "justifyContent": "center",
});

export const Container = glamorous.div({
  width: "100%",
  height: "100%",
  display: "flex",
});


export const Button = glamorous.button({});