import React, { useState } from 'react';
import '../App.css';
import AlbumList from './AlbumList';
import AlbumForm from './AlbumForm';

function App() {
	const [albums, setAlbums] = useState([
		{
			id: 1,
			title: 'Kind of Blue',
			artist: 'Miles Davis',
			releaseYear: 1959,
			genre: 'Jazz',
			imgUrl: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-031-Miles-Davis-KIND-OF-BLUE.jpg?w=1000',
			deleteVisible: false,
		},
		{
			id: 2,
			title: 'Blue',
			artist: 'Joni Mitchell',
			releaseYear: 1971,
			genre: 'Folk',
			imgUrl: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-003-JoniMitchell-BLUE-HR.jpg?w=1000',
			deleteVisible: false,
		},
	]);

	return (
		<div className="vinyl-app-container">
			<div className="header">
				<img
					src={require('../images/vinyl-icon.png')}
					alt="vinyl-icon"
				/>
				{albums.length === 0 ? (
					<>
						<h1>Add some vinyl!</h1>
						<AlbumForm albums={albums} setAlbums={setAlbums} />
					</>
				) : (
					<>
						<h1>My vinyl collection</h1>
						<AlbumForm albums={albums} setAlbums={setAlbums} />
					</>
				)}
			</div>

			<AlbumList albums={albums} setAlbums={setAlbums} />
		</div>
	);
}

export default App;
