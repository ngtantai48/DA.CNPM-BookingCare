import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
        }
    }
    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParents()
    }

    handleOnChangeInput = (event) => {
        console.log(event.target.value);
    }

    render() {
        return (
          <Modal
            isOpen={this.props.isOpen}
            toggle={() => this.toggle()}
            size="lg"
            className={"model-user-container"}
          >
            <ModalHeader toggle={() => this.toggle()}>
              Create a new user
            </ModalHeader>
            <ModalBody>
              <div className="modal-user-body">
                <div className="input-container">
                  <label>Email</label>
                  <input
                    type="text"
                    onChange={(event) => {this.handleOnChangeInput(event)}}
                  />
                </div>
                <div className="input-container">
                  <label>Password</label>
                  <input
                    type="password"
                  />
                </div>
                <div className="input-container">
                  <label>First name</label>
                  <input
                    type="text"
                  />
                </div>
                <div className="input-container">
                  <label>Last name</label>
                  <input
                    type="text"
                  />
                </div>
                <div className="input-container">
                  <label>Address</label>
                  <input
                    type="text"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                className="px-3"
                onClick={() => {
                  this.handleAddNewUser();
                }}
              >
                Add new
              </Button>{" "}
              <Button className="px-3" onClick={() => this.toggle()}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        );
      }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
