import React from "react";
import "./Card.styles.css";

export const Card = ({ info }) => (
	<div className="card">
		<img
			alt={`"${info.name}"`}
			src={`https://robohash.org/${info.id + 1}?set=set2&size=150x150`}
		/>
		<h4>{info.name}</h4>
		<h5>{info.role}</h5>
	</div>
);
