##read in shapefile and convert to something for leaflet
import geopandas
from fiona.crs import from_epsg

shp_file = geopandas.read_file('C:/Users/jlomb/Documents/Vedauwoo Guidebook/vedauwoo.shp')

number_range = list(shp_file.index)

sub_area = shp_file['Sub-Area']

spatial_id_col = [str(sub_area_val) + '_' + str(index) for sub_area_val, index in zip(sub_area,number_range)]

shp_file['SpatialID'] = spatial_id_col

shp_file.crs = from_epsg(4326)

shp_file.to_file('assets/vedauwoo.geojson', driver = 'GeoJSON')
shp_file.to_file('assets/vedauwoo.shp')
##NOTE: manually save as geojson, then create a json file where you add var name{} to it