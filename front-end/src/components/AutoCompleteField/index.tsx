import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { Address } from "../../entities/Address";
import { FormField, FormFieldProps } from "../FormField";
import { LoadGoogleScript } from "../LoadGoogleScript";

type Props = {
    value: null | Address 
    onChange: (address: null | Address) => void
} & Omit <FormFieldProps, 'value' | 'onChange'>

export function AutoCompleteField ({ value, onChange, ...fieldProps}: Props) {
    const autocompleteRef = useRef<null | google.maps.places.Autocomplete>(null)
    const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
        autocompleteRef.current = autocomplete
        autocomplete.setBounds(new google.maps.LatLngBounds(
            new google.maps.LatLng(-22.98818567803929, -43.227613046765335),
            new google.maps.LatLng(-22.933589146212203, -43.174815124235195)
        ))
    }
    const handleChange = () => {
       const place = autocompleteRef.current?.getPlace()
       if (place && place.formatted_address && place.geometry?.location) {
        const address: Address = {
            address: place.formatted_address,
            lat: place.geometry.location?.lat(),
            lng: place.geometry.location.lng()
        }
        onChange(address)
       }
    }
    return (
        <LoadGoogleScript>
            <Autocomplete
                onLoad={handleLoad}
                onPlaceChanged={handleChange}
                options={{
                    strictBounds: true
                }}
            >
                <FormField 
                 {...fieldProps}
                 onChange={() => onChange(null)}
                 />
            </Autocomplete>
        </LoadGoogleScript>
    )
}