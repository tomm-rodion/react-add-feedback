import { Component } from 'react';
import { LabelForm } from '../ContactsForm/ContactsForm.styled';

export class SearchContact extends Component {
  state = {
    inputValue: '',
  };

  handleChange = event => {
    const data = event.target.value;
    this.setState({ inputValue: data });
    this.props.onSaerch(data);
    console.log('delete later :', data);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <form>
          <LabelForm style={{ marginLeft: '5px', marginTop: '20px' }}>
            Search contact
            <input
              type="text"
              name="search"
              title="Search contact for name"
              onChange={this.handleChange}
              value={inputValue}
            />
          </LabelForm>
        </form>
      </>
    );
  }
}
