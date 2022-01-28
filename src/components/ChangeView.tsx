import { useMap } from "react-leaflet";

//React-Leaflet needs its own child component to re-center map because <MapContainer/> values are immutable.

type ChangeViewProps = {
	center: [number, number];
	zoom: number;
};

export const ChangeView = ({ center, zoom }: ChangeViewProps): JSX.Element => {
	const map = useMap();
	map.setView(center, zoom);

	return <></>;
};
