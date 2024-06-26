import Imganimation from "../../components/Imganimation/Imganimation";
import style from "./Skill.module.css";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiDjango } from "react-icons/si";
// import CounterAnimation from "../../components/Counter/CounterAnimation";

const Skill = () => {
  return (
    <section id="skill" className={style.skill}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={style.skill_container}>
          <h1 className="primary-fs">
            <Imganimation
              text="Skills & Expertise"
              singleline={true}
              speed={30}
            />
          </h1>
          <p>
            Frontend Developer @HiPER Automotive as a Intern (4 Months)
            <br />
            <br />
            Main area of experties is Frontend Development.
            <br />
            <br />
            Building small and medium webapps using React Js, Material UI
            Tailwind, custom layouts and other featuers.
            <br />
            <br />
            Containerizing Webapp Using Docker for faster deployment
            <br />
            <br />I have also Full Stack developer experience with my one
            freelance project.
          </p>
        </div>
      </div>
      <div className={style.skill_view}>
        <div>
          <FaReact></FaReact>
          {/* <CounterAnimation start={0} end={80} duration={1500} /> */}
        </div>
        <div>
          <FaNodeJs></FaNodeJs>
          {/* <CounterAnimation start={0} end={80} duration={1500} /> */}
        </div>
        <div>
          <SiRedux></SiRedux>
          {/* <CounterAnimation start={0} end={70} duration={1500} /> */}
        </div>

        <div>
          <SiExpress></SiExpress>
          {/* <CounterAnimation start={0} end={70} duration={1500} /> */}
        </div>
        <div>
          <SiMysql></SiMysql>
          {/* <CounterAnimation start={0} end={90} duration={1500} /> */}
        </div>

        <div>
          <SiDjango></SiDjango>
          {/* <CounterAnimation start={0} end={60} duration={1500} /> */}
        </div>
      </div>
    </section>
  );
};

export default Skill;
