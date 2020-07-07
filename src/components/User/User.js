import React from 'react';

class User extends React.Component{
    state = {
        isEditing: false,
        username: this.props.user.username,
        email: this.props.user.email,
        password: this.props.user.password,
    }

    handleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitEdit = (e) => {
        e.preventDefault();
        let userToUpdate = {
            _id: this.props.user._id,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        this.props.handleEdit(userToUpdate);
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render() {
        return(
            <div className="user">
                {
                    this.state.isEditing &&
                    <>
                    <form onSubmit={this.submitEdit}>
                        <label>Username:
                            <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                        </label>
                        <br />
                        <label>Email:
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
                        </label>
                        <br />
                        <label>Password:
                            <input type="password" name="password" value={this.state.userpasswordname} onChange={this.handleChange}/>
                        </label>
                    </form>
                    </>
                }
                {
                    !this.state.isEditing &&
                    <>
                    <p>Username: {this.props.user.username}</p>
                    <p>Email: {this.props.user.email}</p>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={() => this.props.handleDelete(this.props.user._id)}>Delete</button>
                    </>
                }
            </div>
        )
    }
}

export default User;