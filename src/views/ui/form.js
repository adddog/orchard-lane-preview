import { Component } from "inferno";
import glamorous from "glamorous";
import { ContainerStack, Button } from "views/ui";

export const Input = glamorous.input({});

export class InputForm extends Component {
  render(props) {
    return (
      <ContainerStack>
        <Input placeholder={props.placeholder} innerRef={el => (this.inputEl = el)} />
        <Button onClick={() => props.onSubmit(this.inputEl.value)}>
          {props.text}
        </Button>
      </ContainerStack>
    );
  }
}
