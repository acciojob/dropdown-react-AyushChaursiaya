import React, { useState, useState } from "react";
import "./../styles/App.css";
import React, { useState } from 'react'
import { states } from "./Data";



function DropDown() {
	const [selectedState, setSelectedState] = useState(0);
	const [selectedCity, setSelectedCity] = useState(0);
	const [selectedLandmarks, setSelectedLandmarks] = useState(0);

	const currentState = states[selectedState];
	const currentCity = currentState ? currentState.city[selectedCity] : null;
	const currentLandmark = currentCity && currentCity.landmarks ? currentCity.landmarks[selectedLandmarks] : null;

	const handleSelectedState = (e) => {
		setSelectedState(parseInt(e.target.value, 10));
		setSelectedCity(0);
		setSelectedLandmarks(0);
	};

	const handleSelectedCity = (e) => {
		setSelectedCity(parseInt(e.target.value, 10));
		setSelectedLandmarks(0);
	};

	const handleSelectedLandmark = (e) => {
		setSelectedLandmarks(parseInt(e.target.value, 10));
	};

	return (
		<div className='allFild'>
			<div className='selectedFind'>
				<select id='state' value={selectedState} onChange={handleSelectedState}>
					{states.map((state, index) => (
						<option key={index} value={index}>
							{state.name}
						</option>
					))}
				</select>

				{currentState && (
					<select id='city' value={selectedCity} onChange={handleSelectedCity}>
						{currentState.city.map((city, index) => (
							<option key={index} value={index}>
								{city.name}
							</option>
						))}
					</select>
				)}

				{currentCity && (
					<select id='landmark' value={selectedLandmarks} onChange={handleSelectedLandmark}>
						{currentCity.landmarks.map((landmark, index) => (
							<option key={index} value={index}>
								{landmark.name}
							</option>
						))}
					</select>
				)}
			</div>

			<div className='cardData'>
				<div className='stateCard'>
					<h2>{currentState ? currentState.name : ""}</h2>
					<p>{currentState ? currentState.description : ""}</p>
				</div>

				<div className='CityCard'>
					<h2>{currentCity ? currentCity.name : ""}</h2>
					<p>{currentCity ? currentCity.description : ""}</p>
				</div>

				<div className='landmarkCard'>
					<h2>{currentLandmark ? currentLandmark.name : ""}</h2>
					<p>{currentLandmark ? currentLandmark.description : ""}</p>
				</div>
			</div>
		</div>
	);
}

export default DropDown;
