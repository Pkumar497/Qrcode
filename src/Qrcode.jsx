import React, { useState } from 'react'

const Qrcode = () => {
  const [img,setImg]=useState("");
  const [loading,setLoading]=useState(false);
  const [qrData,setQrData]=useState("prasu");
  const [qrsize,setQrSize] = useState("150");
  async function generateQR(){
    setLoading(true);
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${qrData}`;
      setImg(url);
    }catch(error){
      console.log("Error generating Qr code",error);
    }
    finally{
      setLoading(false);
    }
  }
  function downloadQr() {
    fetch(img)
    .then((response)=>response.blob())
    .then((blob) =>{
      const link=document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download="qrcode.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    
    })
    .catch((error)=>{
      console.error("error downloading Qr code",error);

    });
  }
  return (
    <div className='app-container'>
      <h1>QR CODE GENERATOR</h1>
      {loading && <p>please wait....</p>}
      {img && <img src={img} className='qr-code'/>}
      <div className="">
        <label htmlFor='dataInput' className='input-label'>
          Data for QR code:
        </label>
        <input type='text' value={qrData} id='dataInput' placeholder='Enter data for QR code' onChange={(e)=>setQrData(e.target.value)}/>
        <label htmlFor='sizeInput' className='input-label'>
          img size(e.g. 150):
        </label>
        <input type='text' value={qrsize} onChange={(e)=>setQrSize(e.target.value)} id='sizeInput' placeholder='enter img size'/>
        <button className='generate' onClick={generateQR} disabled={loading}>Generate QR code</button>
        <button className='download' onClick={downloadQr}>Download QR code</button>
        
      </div>
    <p className='footer'>Designed By PRASANNA</p>
    </div>
  )
}

export default Qrcode
