import React from 'react';

const AlbumList = (props) => {
	const urlPatternValidation = (URL) => {
		const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
		return regex.test(URL);
	};

	return (
		<>
			<div className="album-list-container">
				{props.albums.map((album) => (
					<div className="album-card" key={album.id}>
						<div className="genre-year">
							<h3>{album.releaseYear}</h3>
							<h3>{album.genre}</h3>
						</div>
						<div className="title-artist">
							<h2>{album.title}</h2>
							<h2>{album.artist}</h2>
						</div>
						{!urlPatternValidation(album.imgUrl)
							? (
						<img
							src={require("../images/vinyl.png")}
							className="placeholder-img"
							alt="album cover"
						/>):(<img
							src={album.imgUrl}
							alt="album cover"
						/>)}
					</div>
				))}
			</div>
		</>
	);
};

export default AlbumList;
