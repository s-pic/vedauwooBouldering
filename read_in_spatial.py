##read in shapefile and convert to something for leaflet
import geopandas

shp_file = geopandas.read_file('assets/vedauwoo.shp')

shp_file.to_file('assets/vedauwoo.geojson', driver = 'GeoJSON')

##NOTE: manually save as geojson, then create a json file where you add var name{} to it