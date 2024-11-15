import React, { useRef, useState } from 'react';
// import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';
import { baseurl } from '.././baseurl';
import axios from 'axios';
 

const CloudinaryUpload = ({ cloudName, uploadPreset,backgroundColor,number, isImagedisplay }) => {
  const [site_url, setWebsiteUrl] = useState('');
  const [title, setTitle] = useState('');
  const [brand_email, setbrand_email] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  



  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [image_url,setimage]= useState('')

  const handle_child_cloudinary=(e)=>{
    cloudName(e)
  }

  const [selectedFile, setSelectedFile] = useState(null);


   uploadPreset= "tixx1a8u"

  const handleFileChange =  (event) => {
    setSelectedFile(event.target.files[0]);

     
        handleUpload(event)
        
    
  };

  const handleUpload = async (e) => {
    if (!e) {
      console.error('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/degjqq6vo/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log('Upload successful TS:', data.url);
      handle_child_cloudinary(data.url)
      setimage(data.url)
      // Handle success: data contains information about the uploaded file
    } catch (error) {
      console.error('Error uploading file:', error);
      // Handle error
    }
  };



  const Upload_data=(e)=>{
    e.preventDefault()
    Upload_data1(e)
    console.log(site_url,title,image_url,selectedOption,"UPLOAD DATA")

    const formData=({
      site_url:site_url,
      image_url:image_url,
      title:title,
      brand_email:brand_email,
      category: selectedOption


    })

      axios.get(`${baseurl}/upload-brand`,formData)
      
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
  }

  const Upload_data1=(e)=>{
    e.preventDefault()
    console.log(site_url,title,image_url,selectedOption,"UPLOAD DATA")

    const formData=({
      site_url:site_url,
      image_url:image_url,
      title:title,
      brand_email:brand_email,
      category: selectedOption


    })

    axios.get(`${baseurl}/upload-brand1`,formData)
      .then((response)=>{

        console.log(response.data,"DATA!!")
        if(response.data.data.length >0)
          {
            

           
          }


      })
      .catch((error)=>{
        console.log(error)


      })






  }
  const triggerFileInput = () => {
    const inputElement = document.getElementById(number);
    if (inputElement) {
      inputElement.click();
    } else {
      console.error('File input element not found');
    }
  };
 



  return (
    


<div style={{backgroundColor:backgroundColor}} onClick={triggerFileInput}>
      {/* <button onClick={triggerFileInput}>TS</button> */}
     <div className="Upload-show" >
     {isImagedisplay ? 
        <img src={isImagedisplay} alt="displayed" /> : 
        <span>+</span>
      }
        {/* <CloudinaryUpload cloudName={handleCallback}/> */}
      </div>
      <input
        type="file"
        id= {number}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {/* {image && <img src={image} alt="Uploaded file" />} */}
    </div>
  );
};

export default CloudinaryUpload;
