# basemap-starter
Some getting started code to show a protomaps basemap in maplibre gl js adding housnumbers and optionally roads under construction to protomaps.
Vanilla JS + CDN example for minimal overhead.

## Steps

1. Create pmtiles with housenumbers

- Based on https://github.com/protomaps/PMTiles/issues/503#issuecomment-2518591467 modify the `Buildings.java` source code, add this line 

`.setAttr("house_number", sf.getTag("addr:housenumber"))` , find the complete file in this repo

- Modify `Roads.java` with this line, find the complete file in this repo

```java 
if (sf.hasTag("construction")) {
  feat.setAttr("construction", sf.getString("construction"));
}
```

- compile the `tiles/target/protomaps-basemap-HEAD-with-deps.jar` with `mvn clean package` in tiles directory and run `java -jar target/*-with-deps.jar --download --force --area=monaco`

2. Run web app

- Clone this repo and move the monaco.pmtiles file to the base dir.
- Run a http server inside the repo folder, one that supports http range requests, e.g. with `npx serve`.

Open the browser and look a the nice basemap of Monaco.

## To Do 
Add other objects with hosunumbers as buildings are not sufficient.

## Demo

do-me.github.io/basemap-starter

![image](https://github.com/user-attachments/assets/ec83bb6f-709b-481b-a88a-499516b9bcb0)

![image](https://github.com/user-attachments/assets/3527fe62-c084-458f-9a4f-96ce79315d52)

For 3D buildings with housnumbers use `style_3D.json`: 

![image](https://github.com/user-attachments/assets/f2eabb85-ae4b-4a6c-af6c-3944283d52f0)

## Construction Style 

![image](https://github.com/user-attachments/assets/6fab6fea-19c5-4056-8acc-a12bff64461c)


## License

`monaco.pmtiles` is made with OpenStreetMap data licensed as ODbL. The rest of the code is permissive.
