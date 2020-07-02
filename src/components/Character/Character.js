import React from 'react';
import './Character.css';

class Character extends React.Component {
    state = {
        isEditing: false,
        name: this.props.character.name,
        caste: this.props.character.caste,
        description: this.props.character.description
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
        let characterToUpdate = {
            _id: this.props.character._id,
            name: this.state.name,
            caste: this.state.caste,
            description: this.state.description,
        }
        this.props.handleEdit(characterToUpdate);
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    render() {
        return(
            <div className="character">
                {
                    this.state.isEditing &&
                    <>
                        <form onSubmit={this.submitEdit}>
                            <label>Name:
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                            </label>
                            <br/>
                            <label>Caste:
                                <input type="text" name="caste" value={this.state.caste} onChange={this.handleChange}/>
                            </label>
                            <br/>
                            <label>Description:
                                <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                            </label>
                            <br/>
                            <button onClick={this.handleEdit}>Cancel</button>
                            <button type="submit">Submit</button>
                        </form>
                    </>
                }
                {
                    !this.state.isEditing &&
                    <>
                    <p>Name: {this.props.character.name}</p>
                    <p>Caste: {this.props.character.caste}</p>
                    <p>Description: {this.props.character.description}</p>
                    <br/>
                    <button onClick={this.handleEdit}>Edit</button>
                    <button onClick={() => this.props.handleDelete(this.props.character._id)}>Delete</button>
                    </>
                }
            </div>
        )
    }
}

export default Character;