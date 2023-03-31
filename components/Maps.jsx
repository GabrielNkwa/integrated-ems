const { LoadScript } = require("./LoadScript");
const ScriptLoaded = require("./docs/ScriptLoaded").default;

<ScriptLoaded>
  <GoogleMap
    id="circle-example"
    mapContainerStyle={{
      height: "400px",
      width: "800px"
    }}
    zoom={7}
    center={{
        lat:  9.0778, 
        lng: 8.6775
    }}
  />
</ScriptLoaded>;