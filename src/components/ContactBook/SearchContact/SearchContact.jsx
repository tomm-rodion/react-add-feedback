import { Component } from 'react';
import { LabelSerchContact } from './SearchContact.styled';

export class SearchContact extends Component {
  state = {
    inputValue: '',
  };

  handleChange = event => {
    const data = event.target.value;
    this.setState({ inputValue: data });
    this.props.onSaerch(data);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <form>
          <LabelSerchContact>
            Search contact
            <input
              type="text"
              name="search"
              title="Search contact for name"
              onChange={this.handleChange}
              value={inputValue}
            />
          </LabelSerchContact>
        </form>
      </>
    );
  }
}
