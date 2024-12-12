# basemap-starter
Some getting started code to show a protomaps basemap in maplibre gl js

## Steps

1. Create pmtiles with housenumbers

- Based on https://github.com/protomaps/PMTiles/issues/503#issuecomment-2518591467 modify the source code, add this line 

`.setAttr("house_number", sf.getTag("addr:housenumber"))`

- compile the tiles/target/protomaps-basemap-HEAD-with-deps.jar and run java -jar target/*-with-deps.jar --download --force --area=monaco

Download here if you want to skip: https://github.com/user-attachments/files/18040328/monaco.pmtiles.zip


2. Run web app

Clone this repo

Run a http server inside the repo folder, one that supports http range requests.

Example: `npx serve --debug . -p 3000` or simply `npx serve`.

Open the browser and look a the nice basemap of Monaco.

## Demo



## License

`zurich.pmtiles` is made with OpenStreetMap data licensed as ODbL. The rest of the code is permissive.
