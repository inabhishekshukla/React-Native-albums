import React, { Component } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'

class AlbumList extends Component {
    state = { albums: [] }

    componentWillMount() {
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }), 
        err => console.log(JSON.stringify(err, undefined, 2)))
    }

    renderAlbums() {
        return this.state.albums.map(album => <Text>{ album.title }</Text>)
    }

    render() {
        console.log(this.state)
        return (
            <View>
                { this.renderAlbums() }
            </View>
        )
    }
}

export default AlbumList