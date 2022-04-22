import React from 'react';
import AlbumEdit from './AlbumEdit';

const AlbumList = (props) => {
	const showDeleteButton = (id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				album.deleteVisible = true;
				return album;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	const hideDeleteButton = (id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				album.deleteVisible = false;
				return album;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	return (
		<>
			<div className="album-list-container">
				{props.albums.map((album) => (
					<div
						className="album-card"
						key={album.id}
						onMouseOver={() => showDeleteButton(album.id)}
						onMouseOut={() => hideDeleteButton(album.id)}
					>
						<AlbumEdit
							album={album}
							albums={props.albums}
							setAlbums={props.setAlbums}
							updateAlbumYear={props.updateAlbumYear}
							updateAlbumGenre={props.updateAlbumGenre}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default AlbumList;
