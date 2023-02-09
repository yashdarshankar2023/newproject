import React from 'react';
import "../css/table.css"
import { Link , useNavigate} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const table = (SetselectMode) => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {

        setData(data)
      });
  }
    , []);
  
  const navigate = useNavigate()

  function gotoDetails(data){
    navigate("/details",{state : {id:data}})
  
  }
  const data_hospital={"_id":{"$oid":"6386ff3f377dfdcf319dd8dd"},"name":"hospitalA","application_id":"110011","vacancy":"32","contact":"7899216543","password":"Hospital@12345","general_bed":"10","icu_bed":"9","oxygen_bed":"12","ventilator_bed":"8","link":"https://medicaldialogues.in/h-upload/2022/08/30/184686-hospital-1.webp","general_bed_av":"3","icu_bed_av":"1","oxygen_bed_av":"2","ventilator_bed_av":"3","v_bed":"11","v_bed_av":"2"}


  return (
    <div>



      <div class="hover-table-layout">




      <div class="listing-item">
            <figure class="image">
              <img src={data_hospital.link} alt="image" />

              <div class="listing">
                <h4>{data_hospital.name}</h4>
                <h4 style={{display:"flex"}}>Total Bed Available :<div style={{color:"green",fontStyle:"bold",marginRight: '.5rem',marginLeft:".5rem"}}>{parseInt(data_hospital.general_bed - data_hospital.general_bed_av) + parseInt(data_hospital.oxygen_bed - data_hospital.oxygen_bed_av) + parseInt(data_hospital.icu_bed - data_hospital.icu_bed_av) + parseInt(data_hospital.v_bed - data_hospital.v_bed_av)}</div></h4>
                <h4 style={{display:"flex"}}>General Bed Available: <div style={{color:"green",fontStyle:"bold",marginRight: '.5rem',marginLeft:".5rem"}}>{data_hospital.general_bed - data_hospital.general_bed_av}</div></h4>
                <h4 style={{display:"flex"}}>Oxygen Bed Available: <div style={{color:"green",fontStyle:"bold",marginRight: '.5rem',marginLeft:".5rem"}}>{data_hospital.oxygen_bed - data_hospital.oxygen_bed_av}</div></h4>
                <h4 style={{display:"flex"}}>ICU Bed Available:<div style={{color:"green",fontStyle:"bold",marginRight: '.5rem',marginLeft:".5rem"}}>{data_hospital.icu_bed - data_hospital.icu_bed_av}</div></h4>
                <h4 style={{display:"flex"}}>ventilator Bed Available: <div style={{color:"green",fontStyle:"bold",marginRight: '.5rem',marginLeft:".5rem"}}>{data_hospital.v_bed - data_hospital.v_bed_av}</div></h4>
                <h4><button type="button" class="button" onClick={() => gotoDetails(data_hospital)}>Book Now</button></h4>

              </div>


            </figure>

          </div>
          
      

        {data.map((d, index) =>


          <div class="listing-item">
            <figure class="image">
              <img src={d.link} alt="image" />

              <div class="listing">
                <h4>{d.name}</h4>
                <h4 style={{display:"flex"}}>Total Bed Available :<div style={{color:"green",fontStyle:"bold",marginRight: '.5rem',marginLeft:".5rem"}}>{parseInt(d.general_bed - d.general_bed_av) + parseInt(d.oxygen_bed - d.oxygen_bed_av) + parseInt(d.icu_bed - d.icu_bed_av) + parseInt(d.v_bed - d.v_bed_av)}</div></h4>
                <h4 style={{display:"flex"}}>General Bed Available: <div style={{color:"green",fontStyle:"bold",marginRight: '.5rem',marginLeft:".5rem"}}>{d.general_bed - d.general_bed_av}</div></h4>
                <h4 style={{display:"flex"}}>Oxygen Bed Available: <div style={{color:"green",fontStyle:"bold",marginRight: '.5rem',marginLeft:".5rem"}}>{d.oxygen_bed - d.oxygen_bed_av}</div></h4>
                <h4 style={{display:"flex"}}>ICU Bed Available:<div style={{color:"green",fontStyle:"bold",marginRight: '.5rem',marginLeft:".5rem"}}>{d.icu_bed - d.icu_bed_av}</div></h4>
                <h4 style={{display:"flex"}}>ventilator Bed Available: <div style={{color:"green",fontStyle:"bold",marginRight: '.5rem',marginLeft:".5rem"}}>{d.v_bed - d.v_bed_av}</div></h4>
                <h4><button type="button" class="button" onClick={() => gotoDetails(d)}>Book Now</button></h4>

              </div>


            </figure>

          </div>




        )}
      </div>

    </div>
  )
}

export default table