import React, { createContext, ReactNode, useState } from "react";

interface ChallengesProviderProps {
  children: ReactNode;
}

interface ChallengesContextProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  statNewChallenge: () => void;
}

const ChallengesContext = createContext({} as ChallengesContextProps);

const ChallengesProvider: React.FC<ChallengesProviderProps> = (props) => {
  const { children } = props;

  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const statNewChallenge = () => {};

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        levelUp,
        statNewChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export { ChallengesContext, ChallengesProvider };
