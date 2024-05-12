'use-client'
import { GeoSearchControl, OpenStreetMapProvider} from 'leaflet-geosearch';
import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';
import 'leaflet-geosearch/assets/css/leaflet.css'

const Search = () => {
  const provider = new OpenStreetMapProvider();
  const [location,setLocation]=useState<any>()

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
    style: 'bar'

  });

  const map = useMap();
    // @ts-ignore
    useEffect(() => {
    map.addControl(searchControl);
    map.on ('geosearch/showlocation',(result:any)=>{
        
        const{location}=result;
        setLocation(location)

    })
    return () => map.removeControl(searchControl);
  }, []);
  useEffect(()=>{
    console.log('location',location)
  },[location])

  return null;
};
export default  Search;