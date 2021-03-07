import { GetServerSideProps } from "next";
import Head from "next/head";

import ExperienceBar from "components/ExperienceBar";
import Profile from "components/Profile";
import CompletedChallenges from "components/CompletedChallenges";
import Countdown from "components/Countdown";
import ChallengeBox from "components/ChallengeBox";

import { CountdownProvider } from "contexts/CountdownContext";
import { ChallengesProvider } from "contexts/ChallengesContext";

import styles from "styles/pages/Home.module.css";

interface LayoutProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home: React.FC<LayoutProps> = (props) => {
  const { level, currentExperience, challengesCompleted } = props;

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    },
  };
};
