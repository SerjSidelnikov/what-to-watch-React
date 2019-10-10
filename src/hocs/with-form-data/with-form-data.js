import {PureComponent} from 'react';

const withFormData = (Component) => {
  class WithFormData extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        data: {
          'email': ``,
          'password': ``,
        },
      };

      this._handleInput = this._handleInput.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          handleInput={this._handleInput}
          handleSubmit={this._handleSubmit}
        />
      );
    }

    _handleInput(event) {
      const {type, value} = event.currentTarget;

      this.setState(({data}) => ({
        data: Object.assign({}, data, {
          [type]: value,
        }),
      }));
    }

    _handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.data);
    }
  }

  WithFormData.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  return WithFormData;
};

export default withFormData;
