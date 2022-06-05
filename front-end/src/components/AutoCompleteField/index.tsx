import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { FormField, Props } from "../FormField";
import { LoadGoogleScript } from "../LoadGoogleScript";

export function AutoCompleteField (fieldProps: Props) {
    const autocompleteRef = useRef<null | google.maps.places.Autocomplete>(null)
    const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
        autocompleteRef.current = autocomplete
    }
    const handleChange = () => {
        (autocompleteRef.current?.getPlace())

    }
    return (
        <LoadGoogleScript>
            <Autocomplete
                onLoad={handleLoad}
                onPlaceChanged={handleChange}
            >
                <FormField {...fieldProps} />
            </Autocomplete>
        </LoadGoogleScript>
    )
}