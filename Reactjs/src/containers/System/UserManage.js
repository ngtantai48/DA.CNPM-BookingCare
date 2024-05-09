import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUsers } from '../../services/userService';
class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
      let response = await getAllUsers('ALL');
      console.log('get users from nodejs: ', response);
    }


    render() {
        let arrUsers = this.state.arrUsers;
        return (
          <div className="users-container">
            {/* <ModalUser
              isOpen={this.state.isOpenModalUser}
              toggleFromParent={this.toggleUserModal}
              createNewUser={this.createNewUser}
            /> */}
            {/* {this.state.isOpenModalEditUser && (
            //   <ModalEditUser
            //     isOpen={this.state.isOpenModalEditUser}
            //     toggleFromParent={this.toggleUserEditModal}
            //     currentUser={this.state.userEdit}
            //     editUser={this.doEditUser}
            //   />
            )} */}
            <div className="title text-center">MANAGE USERS</div>
            <div className="mx-1">
              <button
                className="btn btn-primary px-3"
                onClick={() => this.handleAddNewUser()}
              >
                <i className="fas fa-plus"></i> Add New User
              </button>
            </div>
            <div className="users-table mt-4 mx-3">
              <table id="customers">
                <tbody>
                  <tr>
                    <th>Email</th>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Address</th>
                    <th>Actions</th>
                  </tr>
    
                  {arrUsers &&
                    arrUsers.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{item.email}</td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.address}</td>
                          <td>
                            <button
                              className="btn-edit"
                              onClick={() => this.handleEditUser(item)}
                            >
                              <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button
                              className="btn-delete"
                              onClick={() => this.handleDeleteUser(item)}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
