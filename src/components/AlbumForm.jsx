import React, { useState } from 'react';

const AlbumForm = (props) => {
	const [albumId, setAlbumId] = useState(5);
	const [albumTitle, setAlbumTitle] = useState('');
	const [albumArtist, setAlbumArtist] = useState('');
	const [albumYear, setAlbumYear] = useState('');
	const [albumGenre, setAlbumGenre] = useState('');
	const [albumImage, setAlbumImage] = useState('');

	const [featuresVisible, setFeaturesVisible] = useState(false);

	const addAlbum = (event) => {
		event.preventDefault();

		props.setAlbums([
			...props.albums,
			{
				id: albumId,
				title: albumTitle,
				artist: albumArtist,
				releaseYear: albumYear,
				genre: albumGenre,
				imgUrl: albumImage,
				deleteVisible: false,
				isEditingYear: false,
				isEditingTitle: false,
				isEditingArtist: false,
				isEditingImage: false,
			},
		]);

		// Increment our id after each addition
		setAlbumId((prevAlbumId) => prevAlbumId + 1);

		// Reset input fields after form submission
		setAlbumTitle('');
		setAlbumArtist('');
		setAlbumYear('');
		setAlbumGenre('');
		setAlbumImage('');
	};
	return (
		<>
			{!featuresVisible && (
				<button
					className="button-one"
					onClick={() =>
						setFeaturesVisible(
							(prevFeaturesVisible) => !prevFeaturesVisible
						)
					}
				>
					+ Add album
				</button>
			)}
			{featuresVisible && (
				<div className="add-album-container">
					<form
						action="#"
						className="add-album-form"
						onSubmit={(event) => addAlbum(event)}
					>
						<input
							type="text"
							className="album-input"
							placeholder="Enter the album title..."
							value={albumTitle}
							onChange={(event) =>
								setAlbumTitle(event.target.value)
							}
							required
						/>
						<input
							type="text"
							className="album-input"
							placeholder="Add the artist..."
							value={albumArtist}
							onChange={(event) =>
								setAlbumArtist(event.target.value)
							}
							required
						/>
						<input
							type="number"
							min="1900"
							max="2022"
							step="1"
							className="album-input"
							placeholder="Year released?"
							value={albumYear}
							onChange={(event) =>
								setAlbumYear(event.target.value)
							}
							required
						/>
						<input
							type="text"
							className="album-input"
							placeholder="Genre?"
							value={albumGenre}
							onChange={(event) =>
								setAlbumGenre(event.target.value)
							}
							required
						/>
						<input
							type="img"
							className="album-input"
							placeholder="(optional) Image URL for your album"
							value={albumImage}
							onChange={(event) =>
								setAlbumImage(event.target.value)
							}
						/>
						<div>
							<button type="submit" className="button-one">
								+ Add
							</button>
							<button
								onClick={() =>
									setFeaturesVisible(
										(prevFeaturesVisible) =>
											!prevFeaturesVisible
									)
								}
								className="button-two"
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default AlbumForm;
