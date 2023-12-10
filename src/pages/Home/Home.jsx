import Clock from "../../components/Clock/Clock";
import Imganimation from "../Imganimation/Imganimation";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <p className={style.timer}>
          <Clock/>
        </p>
        <p className={`primary-fs ${style.heading}`}>
          <Imganimation text="GULAM AHMAD" speed={30} singleline={true} />
        </p>
        <p className={`primary-fs ${style.heading}`}> &lt;Web Developer/&gt;</p>
        <p className={style.qoute}>
          Passionate web developer with a keen eye for creating sleek and
          responsive websites that blend cutting-edge technology with intuitive
          user experiences.
        </p>

        <div className={style.btn}>
          <button>Projects</button>
          <button>Resume</button>
        </div>
      </div>
      <div className={style.circle}>
        <Imganimation speed={30} />
      </div>
    </div>
  );
};

export default Home;
