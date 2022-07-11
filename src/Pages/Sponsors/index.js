import React from "react";
import styles from "./styles/home.module.css";
import logo from "./assets/mlsc_shield_new.png";



const Sponsors = () => {

  return( 
  <div className={styles.main}>
    <h1 className={styles.heading}>Our Sponsors</h1>
    
    {/* First carousel */}

    <div className={styles.carousel1}>

      <div className={styles.container1}>

        {/* <div className={styles.cont}>
          <div className={styles.dots_d1}></div>
          <div className={styles.dots_d2}></div>
          <div className={styles.dots_d3}></div>
          <div className={styles.dots_d4}></div>
          <div className={styles.dots_d5}></div>
          <div className={styles.dots_d6}></div>
          <div className={styles.dots_d7}></div>
          <div className={styles.dots_d8}></div>
	      </div> */}

        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>
      <div className={styles.containerSpace}></div>
        
      <div className={styles.container2}>
        <h2 classname={styles.sponsorText}>Name of company</h2>
        <h2 classname={styles.sponsorText}>Sponsored which event</h2>
        <h2 classname={styles.sponsorText}>About the company</h2>
      </div>
    </div>


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

      <div className={styles.box7}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>

      <div className={styles.box8}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>

      <div className={styles.box9}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>

      <div className={styles.box10}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>

      <div className={styles.box11}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>

      <div className={styles.box12}>
        <img id={styles.spnsrlogo1} src={logo} alt="sponsor logo"></img>
      </div>

      
    
    
    
    
    </div>

    {/*Second carousel ends, Form begins*/}
    
    <h1 className={styles.heading}>Want To Sponsor Our Upcoming Event?</h1>

    <div className={styles.sponsorForm}>
      
      <form method="get">
        
        <label for="spnsor-fullname"></label>
        <input type="text" placeholder="Full Name" size="23"></input>
        <p></p>

        <label for="spnsor-companyname"></label>
        <input type="text" placeholder="Company Name" size="23"></input>
        <p></p>
        
        <label for="spnsor-email"></label>
        <input type="email" placeholder="Email-Address" size="100"></input>
        <p></p>

        <label for="spnsor-message"></label>
        <textarea rows="10" cols="33" placeholder="Type your message here..."></textarea>
        <p></p>

        <div className={styles.spnsorformsubmit}>
        <input type="submit" name=""></input>
        </div>

      </form>
    </div>
  </div>
  );
};

export default Sponsors;
