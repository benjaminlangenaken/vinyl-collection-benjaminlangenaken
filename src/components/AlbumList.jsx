import React from 'react';

const AlbumList = (props) => {
	const urlPatternValidation = (URL) => {
		const regex = new RegExp(
			'(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
		);
		return regex.test(URL);
	};

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

	const deleteAlbum = (id) => {
		props.setAlbums([...props.albums].filter((album) => id !== album.id));
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
						<div className="album-card-text-container">
							<div className="genre-year">
								<h3>{album.releaseYear}</h3>
								<h3>{album.genre}</h3>
							</div>
							<div className="title-artist">
								<h2>{album.title}</h2>
								<h2>{album.artist}</h2>
							</div>
						</div>
						{!urlPatternValidation(album.imgUrl) ? (
							<img
								src={require('../images/vinyl.png')}
								className="placeholder-img"
								alt="album cover"
							/>
						) : (
							<img
								src={album.imgUrl}
								className="album-img"
								alt="album cover"
							/>
						)}
						{album.deleteVisible && (
							<button
								className="x-button"
								onClick={() => deleteAlbum(album.id)}
							>
								<img src={require('../images/remove.png')} alt="" className="x-button-icon"/>
							</button>
						)}
					</div>
				))}
			</div>
		</>
	);
};

export default AlbumList;
