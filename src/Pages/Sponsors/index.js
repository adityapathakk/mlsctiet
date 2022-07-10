import React from "react";
import styles from "./styles/home.module.css";




const Sponsors = () => {

  return( 
  <div className={styles.main}>
    <h1 className={styles.heading}>Our Sponsors</h1>
    
    {/* First carousel */}

    <div className={styles.carousel}> lol</div>

    <div className={styles.whysponsorus}>
      <h2 className={styles.subheading}> Why Sponsor Us? </h2>

      {/* First Para */}

      <p className={styles.sponsorPara}>
        <span className={styles.sponsorText}>Youth Hub:</span>
        MLSC is one of the elite clubs of TIET and has a reach to a crowd of over 10000 people on campus, which is a huge audience base to begin with.</p>

      {/* Second Para */}
 
      <p className={styles.sponsorPara}> 
        <span className={styles.sponsorText}>Connecting Tech Enthusiasts all over India:</span>
        MLSC, is also an Open Source Community and on our discord server, we have a reach of over 1100 people from all around the nation, including premium institutes like IITs and NITs.</p>

      {/* Third Para */}

      <p className={styles.sponsorPara}>
        <span className={styles.sponsorText}>Flagship Events:</span>
        MLSC conducts some big events throughout the year, which is an exhibit for a massive crowd both offline and online. Our past events like Makeathon and Abhyudaya have been a major attraction to a magnificent audience, which gives you the exact opportunity to increase your brand’s awareness and have the organic reach you were looking for</p>

      {/* Fourth Para */}

      <p className={styles.sponsorPara}>
        <span className={styles.sponsorText}>Ultimate Social Media Reach:</span>
         MLSC has a social media outreach of over 8000 across the platforms like Facebook, Instagram, LinkedIn and Discord. Strategically advertising your brand escalates your brand’s reputation among the audience you look for, which is the youth.</p>

    </div>

    {/* why sponsor us div ends here and second corousel div starts */}
    
    <div className={styles.carousel}> lol</div>

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
