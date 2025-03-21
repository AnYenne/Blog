import axios from "axios"
import { FormControl} from "@mui/material"


const UploadCloudinary = ({onUploadSuccess}) => {
    const cloudinaryUrl = import.meta.env.VITE_CLOUDINARY_URL

    const handleImageFile = (ev) => {
    const file = ev.target.files[0];
    if(!file) {
        console.error("No file selected.");
        return;
    }
     
    const formData = new FormData();
    formData.append('file', file)
    formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_PRESET_NAME)
   

    axios
    .post(cloudinaryUrl, formData)
    .then(res => {
        console.log(res.data)
        const uploadedUrl = res.data.secure_url;
        if(onUploadSuccess){
            onUploadSuccess(uploadedUrl)
        }
    })
    .catch((error) => console.error(`failed upload file to cloudinary`, error))

    
} 
    return (
        <FormControl>
        <input
            style={{width:'100%', padding: '10px 26px'}} 
            id="" 
            type="file"
            accept="image/*"
            onChange ={(ev) => handleImageFile(ev)}
        />
        </FormControl>
    )
}
export default UploadCloudinary