import React, { createContext, ReactNode, useState } from "react";

import challenges from "../../challenges.json";

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengeProps {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: ChallengeProps;
  experienceToNextLevel: number;
  levelUp: () => void;
  resetChallenge: () => void;
  statNewChallenge: () => void;
}

const ChallengesContext = createContext({} as ChallengesContextProps);

const ChallengesProvider: React.FC<ChallengesProviderProps> = (props) => {
  const { children } = props;

  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const statNewChallenge = () => {
    const radomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[radomChallengeIndex];

    setActiveChallenge(challenge);
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        activeChallenge,
        levelUp,
        resetChallenge,
        statNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export { ChallengesContext, ChallengesProvider };
