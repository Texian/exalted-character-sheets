import React from 'react';
import CharacterApi from '../api/CharacterApi';
import Character from '../components/Character/Character';

class CharacterContainer extends React.Component {
    state = {
        characters: []
    }

    handleEdit = (character) => {
        CharacterApi.update(character)
        .then(res => {
            let characters = this.state.characters;
            let characterToUpdate = characters.findIndex(character => character._id === res.data._id);
            characters[characterToUpdate] = res.data;
            this.setState({
                characters
            })
        })
    }

    handleDelete = (id) => {
        CharacterApi.deleteCharacter(id)
        .then(res => {
            let characters = this.state.characters.filter(character => {
                return character._id !==id;
            })
            this.setState({
                characters
            })
        })
    }

    componentDidMount() {
        CharacterApi.index()
        .then(res => {
            if (res.status === 200) {
                this.setState({
                    characters: res.data
                })
            }
        })
        .catch(err => console.log(`componentDidMount error: ${err}`));
    }

    render() {
        let characters = this.state.characters;

        return(
            <div className="characterContainer">
                {characters && characters.map(character => {
                    return <Character character={character} key={character._id} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
                })}
                {!characters &&
                <>
                    <p>No characters to show</p>
                </>
                }
            </div>
        )
    }
}

export default CharacterContainer;