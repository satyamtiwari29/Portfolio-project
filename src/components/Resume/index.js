import "./style.css";
import Title from "../Title/index.js";
import Typography from "../Typography/index.js";
import ResumeWrapper from "../ResumeWrapper/index.js";
import PrimaryButton from "../primaryButton/index.js";
function Resume() {
  return (
    <section className="Resumesection">
      <Title className="title">Education & Experience</Title>
      < h1>
        I Have Completed My Master <span>Degree & Experience</span> With Leading
        Companies
      </h1>

      <div className="wrapperbutton">
      <div className="resumewrappercontainer111">
      <ResumeWrapper className="resumewrapper11"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/01.png"
        alt="logo"
        children="Boxsouth University"
        title="Master Degree Visual Art & Design"
        paragraph="Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
      />
      <ResumeWrapper className="resumewrapper22"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/02.png"
        alt="logo"
        children="Meddout Ltd."
        title="Senior UI/UX Designer"
        paragraph="Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
      />
      </div>
      <div  className="resumewrappercontainer111">
      <ResumeWrapper className="resumewrapper33"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/03.png"
        alt="logo"
        children="Plays.tv University"
        title="Master Degree Visual Art & Design"
        paragraph="Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
      />
      <ResumeWrapper className="resumewrapper44"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/04.png"
        alt="logo"
        children="Timeuest Ltd."
        title="Senior UI/UX Designer4"
        paragraph="Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
      />
      </div>
      <div  className="resumewrappercontainer111">
      <ResumeWrapper className="resumewrapper55"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/05.png"
        alt="logo"
        children="Playwell University"
        title="Master Degree Visual Art & Design"
        paragraph="Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
      />
      <ResumeWrapper className="resumewrapper66"
        src="	https://demos.codexcoder.com/labartisan/html/maxino/assets/images/exp/06.png"
        alt="logo"
        children="Trackbox Ltd."
        title="Junior Graphic Designer"
        paragraph="Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
      />
      </div>

<div className="resumebuttondiv">
      <PrimaryButton className="resumebutton">
      <span>Download My CV</span>
      <img 
      src="https://demos.codexcoder.com/labartisan/html/maxino/assets/images/icon/btn-1.png"
      alt="logo"
      />
      
      
      </PrimaryButton>
      </div>
      </div>


    </section>
  );
}
export default Resume;
