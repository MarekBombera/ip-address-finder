import { useSelector } from "react-redux";
import { RootState } from "../reducers/";

import { Icon } from "leaflet";
import { MapContainer, Marker, Popup, ZoomControl } from "react-leaflet";
import ReactLeafletGoogleLayer from "react-leaflet-google-layer";
import { ChangeView } from "./ChangeView";

import location_icon from "../assets/images/location-icon.svg";

export const Maps = (): JSX.Element => {
	const { fetchSearchedReducer } = useSelector((state: RootState) => state);

	if (fetchSearchedReducer === null || fetchSearchedReducer.latitude === null) {
		return <div></div>;
	}

	const { latitude, longitude } = fetchSearchedReducer;

	interface LocationIcon {
		iconUrl: string;
		iconSize: [number, number];
	}

	const locationIcon = new Icon<LocationIcon>({
		iconUrl: location_icon,
		iconSize: [65, 65],
	});

	return (
		<>
			<MapContainer
				center={[latitude, longitude]}
				zoom={15}
				zoomControl={false}
				scrollWheelZoom={false}
			>
				<ZoomControl position="bottomleft" />
				<ChangeView center={[latitude, longitude]} zoom={15} />
				<ReactLeafletGoogleLayer
					apiKey="AIzaSyCJz_9LBoWz48-A7mPgFiEYXjDfnErA4wQ"
					type={"roadmap"}
				/>
				<Marker position={[latitude, longitude]} icon={locationIcon}>
					<Popup>
						<p>Your IP address comes from around this region</p>
					</Popup>
				</Marker>
			</MapContainer>
		</>
	);
};
