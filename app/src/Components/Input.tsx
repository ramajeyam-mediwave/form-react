import { Component } from "react";
interface inputProps {
  name: string;
  type: string;
  placeholder: string;
}
class Input extends Component<inputProps> {
  render() {
    return (
      <div>
        <label>
          {this.props.name}
          <input
            name={this.props.name}
            type={this.props.type}
            placeholder={this.props.placeholder}
          />
        </label>
      </div>
    );
  }
}
export default Input;