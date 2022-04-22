import React from 'react';

const AlbumEdit = (props) => {
	const urlPatternValidation = (URL) => {
		const regex = new RegExp(
			'(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
		);
		return regex.test(URL);
	};

	const deleteAlbum = (id) => {
		props.setAlbums([...props.albums].filter((album) => id !== album.id));
	};

	const editAlbumYear = (id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				album.isEditingYear = true;
				return album;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	const updateAlbumYear = (event, id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				if (event.target.value.trim().length === 0) {
					album.isEditingYear = false;
					return album;
				}
				album.releaseYear = event.target.value;
				album.isEditingYear = false;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	const editAlbumGenre = (id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				album.isEditingGenre = true;
				return album;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	const updateAlbumGenre = (event, id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				if (event.target.value.trim().length === 0) {
					album.isEditingGenre = false;
					return album;
				}
				album.genre = event.target.value;
				album.isEditingGenre = false;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	const editAlbumTitle = (id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				album.isEditingTitle = true;
				return album;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	const updateAlbumTitle = (event, id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				if (event.target.value.trim().length === 0) {
					album.isEditingTitle = false;
					return album;
				}
				album.title = event.target.value;
				album.isEditingTitle = false;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	const editAlbumArtist = (id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				album.isEditingArtist = true;
				return album;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	const updateAlbumArtist = (event, id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				if (event.target.value.trim().length === 0) {
					album.isEditingArtist = false;
					return album;
				}
				album.artist = event.target.value;
				album.isEditingArtist = false;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	const editAlbumImgUrl = (id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				album.isEditingImgUrl = true;
				return album;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	const updateAlbumImgUrl = (event, id) => {
		const updatedAlbums = props.albums.map((album) => {
			if (album.id === id) {
				if (event.target.value.trim().length === 0) {
					album.isEditingImgUrl = false;
					return album;
				}
				album.imgUrl = event.target.value;
				album.isEditingImgUrl = false;
			}
			return album;
		});
		props.setAlbums(updatedAlbums);
	};

	return (
		<>
			<div className="album-card-text-container">
				<div className="genre-year">
					{!props.album.isEditingYear ? (
						<h3 onDoubleClick={() => editAlbumYear(props.album.id)}>
							{props.album.releaseYear}
						</h3>
					) : (
						<input
							type="number"
							min="1900"
							max="2022"
							step="1"
							autoFocus
							className="card-input-year"
							defaultValue={props.album.releaseYear}
							onBlur={(event) =>
								updateAlbumYear(event, props.album.id)
							}
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									updateAlbumYear(event, props.album.id);
								}
							}}
						/>
					)}
					{!props.album.isEditingGenre ? (
						<h3
							onDoubleClick={() => editAlbumGenre(props.album.id)}
						>
							{props.album.genre}
						</h3>
					) : (
						<input
							type="text"
							autoFocus
							className="card-input-genre"
							defaultValue={props.album.genre}
							onBlur={(event) =>
								updateAlbumGenre(event, props.album.id)
							}
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									updateAlbumGenre(event, props.album.id);
								}
							}}
						/>
					)}
				</div>
				<div className="title-artist">
					{!props.album.isEditingTitle ? (
						<h2
							onDoubleClick={() => editAlbumTitle(props.album.id)}
						>
							{props.album.title}
						</h2>
					) : (
						<input
							type="text"
							autoFocus
							className="card-input-title"
							defaultValue={props.album.title}
							onBlur={(event) =>
								updateAlbumTitle(event, props.album.id)
							}
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									updateAlbumTitle(event, props.album.id);
								}
							}}
						/>
					)}
					{!props.album.isEditingArtist ? (
						<h2
							onDoubleClick={() =>
								editAlbumArtist(props.album.id)
							}
						>
							{props.album.artist}
						</h2>
					) : (
						<input
							type="text"
							autoFocus
							className="card-input-artist"
							defaultValue={props.album.artist}
							onBlur={(event) =>
								updateAlbumArtist(event, props.album.id)
							}
							onKeyDown={(event) => {
								if (event.key === 'Enter') {
									updateAlbumArtist(event, props.album.id);
								}
							}}
						/>
					)}
				</div>
			</div>

			{!urlPatternValidation(props.album.imgUrl) ? (
				<img
					src={require('../images/vinyl.png')}
					className="placeholder-img"
					alt="album cover"
				/>
			) : (
				<img
					src={props.album.imgUrl}
					className="album-img"
					alt="album-cover"
				/>
			)}
			{props.album.deleteVisible && (
				<button
					className="x-button"
					onClick={() => deleteAlbum(props.album.id)}
				>
					<img
						src={require('../images/remove.png')}
						alt="remove-icon"
						className="x-button-icon"
					/>
				</button>
			)}
			{!props.album.isEditingImgUrl ? (
				<div
					className="overlay"
					onDoubleClick={() => editAlbumImgUrl(props.album.id)}
				>
					<div className="text">Change image</div>
				</div>
			) : (
				<input
					type="text"
					autoFocus
					className="card-input-image"
					defaultValue={props.album.imgUrl}
					onBlur={(event) => updateAlbumImgUrl(event, props.album.id)}
					onKeyDown={(event) => {
						if (event.key === 'Enter') {
							updateAlbumImgUrl(event, props.album.id);
						}
					}}
				/>
			)}
		</>
	);
};

export default AlbumEdit;
