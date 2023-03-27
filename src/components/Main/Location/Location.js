import "./Location.css";
import { YMaps, Map, ZoomControl, Polygon } from "@pbe/react-yandex-maps";

function Location() {
  return (
    <section className="location">
      <h2 className="location__title">АЛЛЕЯ НА КАРТЕ ГОРОДА</h2>
      <div className="location__conteiner">
        <YMaps>
          <Map
            defaultState={{
              center: [58.006, 56.22336],
              zoom: 17,
              controls: [],
            }}
            width="100%"
            height="400px"
          >
            <Polygon
              geometry={[
                [
                  [58.00627, 56.22524],
                  [58.005665, 56.2218],
                  [58.005785, 56.22172],
                  [58.0064, 56.22516],
                ],
              ]}
              options={{
                fillColor: "#e04f4f",
                strokeColor: "#e04f4f",
                opacity: 0.3,
                strokeWidth: 2,
                strokeStyle: "shortdash",
              }}
            />
            <ZoomControl options={{ float: "right" }} />
          </Map>
        </YMaps>
      </div>
    </section>
  );
}

export default Location;
