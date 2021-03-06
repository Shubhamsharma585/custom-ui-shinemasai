
import React, { useState } from 'react'
import styles from './styles.module.css'
const payload = {
    title: "",
    location: "",
    experience: "Experience (Years)"
    
  };



export const ExampleComponent = (Props) =>
{


    const [userData, setUserData] = React.useState(payload);
    const {title,location,experience}=userData;
    const [loc,setLoc] = useState("");
    
    const exp = ["Experience (Years)","0 Yrs","1 Yrs","2 Yrs","3 Yrs","4 Yrs","5 Yrs","6 Yrs","7 Yrs","8 Yrs","9 Yrs","10 Yrs","11 Yrs","12 Yrs","13 Yrs","14 Yrs","15 Yrs","16 Yrs","17 Yrs","18 Yrs","19 Yrs","20 Yrs","21 Yrs","22 Yrs","23 Yrs","24 Yrs","25+ Yrs"];
    const handleUserData=(e)=>{
        const {value,name}=e.target;

    
        setUserData({...userData,[name]:value})
       
    }


    function sendbundle()
    {
        Props.getbundle({
            title,
            location,
            experience
        })
    }

    
    return (
 
            <div>
             
                <h1 className={styles.ah1 }>Search Bar</h1>

                
                <div style={{display:'flex',marginTop:"25px"}}>
                    <div className={styles.searchInput} style={{border:"1px solid gray"}}>
                        <label></label>
                        <input type="text" placeholder="Job title,skills" name="title" value={title} onChange={handleUserData}/>
                        <div style={{width:"50px",padding:"5px",textAlign:"center",fontSize:"10px",color:"#fff",backgroundColor:"#fa7185",borderRadius:"4px",marginTop:"-45px",marginLeft:"252px"}}>Required</div>
                    </div>

                    <div className={styles.searchInput} style={{marginLeft:"15px", border:"1px solid gray"}}>
                        <label></label>
                        <input type="text" placeholder="Location" name="location" value={location} onChange={handleUserData} />
                    </div>
                    <div className={styles.searchInput} style={{marginLeft:"15px",paddingLeft:"15px"}}>
                        <select className={styles.searchInput} style={{color:"gray"}} name="experience" value={experience} onChange={handleUserData}>
                            {exp.map((branch) => (
                            <option key={branch} value={branch}>
                                {branch}
                            </option>
                            ))}
                        </select>
                    </div>
    
                   <div className={styles.submit} onClick={() => sendbundle()}>Search</div>

                </div>
               

            </div>
            
     
    )
}


