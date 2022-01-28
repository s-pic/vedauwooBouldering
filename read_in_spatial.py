##read in shapefile and convert to something for leaflet
import geopandas
local_file = 'C:/Users/jlomb/Documents/Vedauwoo Guidebook/'

shp_file = geopandas.read_file(local_file + 'vedauwoo.shp')

shp_file.to_file('vedauwoo.geojson', driver = 'GeoJSON')