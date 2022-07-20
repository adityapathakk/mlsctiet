import React from "react";  
import styles from "./styles/home.module.css";
import logo from "./assets/mlsc_shield_new.png";
import { useRef,useState , useEffect} from "react";
import circle from "./assets/circle.png";

//Ikshan's code for swiper JS

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";



const Sponsors = () => {
  const initialValues= { fullName: "", companyName: "", email: "", desciption: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  const handleChange = (e) => {
    // console.log(e.target);
    const { name , value } = e.target;
    setFormValues({...formValues, [name]: value});
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues)); 
    setIsSubmit(true);


  }

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) => {
    const errors={};
    const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if(!values.fullName) {
      errors.fullName = "Full name is required!";
    }

    if(!values.companyName) {
      errors.companyName = "Company name is required!";
    }

    if(!values.email) {
      errors.email = "E-mail is required!";
    } else if(!regex.test(values.email)){
      errors.email = "This e-mail is not valid";
    }

    return errors;
  }

  return( 
  <div className={styles.main}>

    <h1 className={styles.heading}>Our Sponsors</h1>
    
    {/* First carousel */}

    <Swiper
        pagination={{
          type: "progressbar",
        }}
        autoplay={{
          delay: 5000,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
        <div className={styles.carousel1}>
          <img className={styles.circle} src={circle} alt="animation"></img>
            <div className={styles.container1}> 
              
              <img className={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Sponsored which event</h2>
              <h2 classname={styles.sponsorText}>About the company</h2>
            </div> 
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
            <div className={styles.container1}> 
              <img className={styles.circle} src={circle} alt="animation"></img>
              <img className={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Sponsored which event</h2>
              <h2 classname={styles.sponsorText}>About the company</h2>
            </div> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.carousel1}>
            <div className={styles.container1}> 
              <img className={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Sponsored which event</h2>
              <h2 classname={styles.sponsorText}>About the company</h2>
            </div> 
          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
            <div className={styles.container1}> 
              <img className={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Sponsored which event</h2>
              <h2 classname={styles.sponsorText}>About the company</h2>
            </div> 
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
            <div className={styles.container1}> 
              <img className={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Sponsored which event</h2>
              <h2 classname={styles.sponsorText}>About the company</h2>
            </div>
        </div> 

        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
            <div className={styles.container1}> 
              <img className={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Sponsored which event</h2>
              <h2 classname={styles.sponsorText}>About the company</h2>
            </div>  
            </div>         
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
            <div className={styles.container1}> 
              <img className={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Sponsored which event</h2>
              <h2 classname={styles.sponsorText}>About the company</h2>
            </div>  
          </div>         
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
            <div className={styles.container1}> 
              <img className={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Sponsored which event</h2>
              <h2 classname={styles.sponsorText}>About the company</h2>
            </div>  
          </div>         
        </SwiperSlide>
        <SwiperSlide>
        <div className={styles.carousel1}>
            <div className={styles.container1}> 
              <img className={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
            </div>

            <div className={styles.containerSpace}></div>
          
            <div className={styles.container2}>
              <h2 classname={styles.sponsorText}>Name of company</h2>
              <h2 classname={styles.sponsorText}>Sponsored which event</h2>
              <h2 classname={styles.sponsorText}>About the company</h2>
            </div> 
        </div>
        </SwiperSlide>
      </Swiper>
     
      {/* <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
          navigation pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className={styles.mySwiper}
      >
         <SwiperSlide> 
            <div className={styles.carousel1}>
            <div className={styles.container1}> 
            <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
            </div>
            <div className={styles.containerSpace}></div>
          
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Sponsored which event</h2>
            <h2 classname={styles.sponsorText}>About the company</h2>
          </div> 
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className={styles.carousel1}>
          <div className={styles.container1}> 
            <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
          </div>
          <div className={styles.containerSpace}></div>
          
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Sponsored which event</h2>
            <h2 classname={styles.sponsorText}>About the company</h2>
          </div> 
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className={styles.carousel1}>
          <div className={styles.container1}> 
            <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
          </div>
          <div className={styles.containerSpace}></div>
          
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Sponsored which event</h2>
            <h2 classname={styles.sponsorText}>About the company</h2>
          </div> 
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={styles.carousel1}>
          <div className={styles.container1}> 
            <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
          </div>
          <div className={styles.containerSpace}></div>
          
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Sponsored which event</h2>
            <h2 classname={styles.sponsorText}>About the company</h2>
          </div> 
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={styles.carousel1}>
          <div className={styles.container1}> 
            <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
          </div>
          <div className={styles.containerSpace}></div>
          
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Sponsored which event</h2>
            <h2 classname={styles.sponsorText}>About the company</h2>
          </div> 
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={styles.carousel1}>
          <div className={styles.container1}> 
            <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
          </div>
          <div className={styles.containerSpace}></div>
          
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Sponsored which event</h2>
            <h2 classname={styles.sponsorText}>About the company</h2>
          </div> 
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={styles.carousel1}>
          <div className={styles.container1}> 
            <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
          </div>
          <div className={styles.containerSpace}></div>
          
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Sponsored which event</h2>
            <h2 classname={styles.sponsorText}>About the company</h2>
          </div> 
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className={styles.carousel1}>
          <div className={styles.container1}> 
            <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
          </div>
          <div className={styles.containerSpace}></div>
          
          <div className={styles.container2}>
            <h2 classname={styles.sponsorText}>Name of company</h2>
            <h2 classname={styles.sponsorText}>Sponsored which event</h2>
            <h2 classname={styles.sponsorText}>About the company</h2>
          </div> 
        </div>
        </SwiperSlide>
      </Swiper>  */}

    {/*carousel div ends right here and WHY SPONSOR US div starts from here */}

    <div className={styles.whysponsorus}>
      <h2 className={styles.subheading}> Why Sponsor Us? </h2>

      {/* First Para */}

      <p className={styles.sponsorPara}>
        <span className={styles.sponsorText}>Youth Hub:&nbsp;</span>
        MLSC is one of the elite clubs of TIET and has a reach to a crowd of over 10000 people on campus, which is a huge audience base to begin with.</p>

      {/* Second Para */}
 
      <p className={styles.sponsorPara}> 
        <span className={styles.sponsorText}>Connecting Tech Enthusiasts all over India:&nbsp;</span>
        MLSC, is also an Open Source Community and on our discord server, we have a reach of over 1100 people from all around the nation, including premium institutes like IITs and NITs.</p>

      {/* Third Para */}

      <p className={styles.sponsorPara}>
        <span className={styles.sponsorText}>Flagship Events:&nbsp;</span>
        MLSC conducts some big events throughout the year, which is an exhibit for a massive crowd both offline and online. Our past events like Makeathon and Abhyudaya have been a major attraction to a magnificent audience, which gives you the exact opportunity to increase your brand’s awareness and have the organic reach you were looking for</p>

      {/* Fourth Para */}

      <p className={styles.sponsorPara}>
        <span className={styles.sponsorText}>Ultimate Social Media Reach:&nbsp;</span>
         MLSC has a social media outreach of over 8000 across the platforms like Facebook, Instagram, LinkedIn and Discord. Strategically advertising your brand escalates your brand’s reputation among the audience you look for, which is the youth.</p>

    </div>

    {/* why sponsor us div ends here and second corousel div starts */}
    
    <div className={styles.carousel2}>
      <div className={styles.box1}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>

      <div className={styles.box2}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>

      <div className={styles.box3}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>

      <div className={styles.box4}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>

      <div className={styles.box5}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>

      <div className={styles.box6}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>
    
    </div>

    {/*Second carousel ends, Form begins*/}
    
    <h1 className={styles.heading}>Want To Sponsor Our Upcoming Event?</h1>

    <div className={styles.sponsorForm}>
      
      <form method="get" onSubmit={handleSubmit}>
        
        <label for="spnsor-fullname"></label>
        <input type="text" name ="fullName" placeholder="Full Name" size="23" value={formValues.fullName} onChange={handleChange}></input>
        <p className={styles.errormssg}>{formErrors.fullName}</p>

        <label for="spnsor-companyname"></label>
        <input type="text" name="companyName" placeholder="Company Name" size="23" value={formValues.companyName} onChange={handleChange}></input>
        <p className={styles.errormssg}>{formErrors.companyName}</p>
        
        <label for="spnsor-email"></label>
        <input type="email" name="email" placeholder="Email-Address" size="100" value={formValues.email} onChange={handleChange}></input>
        <p className={styles.errormssg}>{formErrors.email}</p>

        <label for="spnsor-message"></label>
        <textarea rows="10" name="description" cols="33" placeholder="Type your message here..."  onChange={handleChange}></textarea>
        <p className={styles.errormssg}>{formErrors.desciption}</p>

        <div className={styles.spnsorformsubmit}>
        <input type="submit" name=""></input>
        </div>

        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className={styles.success}>Your message has been conveyed!</div>):(<div></div>)}

      </form>
    </div>
  </div>
  );
};

export default Sponsors;