import React, { createContext, ReactNode, useEffect, useState } from "react";

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
  completedChallenge: () => void;
}

const ChallengesContext = createContext({} as ChallengesContextProps);

const ChallengesProvider: React.FC<ChallengesProviderProps> = (props) => {
  const { children } = props;

  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = () => {
    setLevel(level + 1);
  };

  const statNewChallenge = () => {
    const radomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[radomChallengeIndex];

    setActiveChallenge(challenge);

    new Audio("/notification.mp3").play();

    if (Notification.permission === "granted") {
      new Notification("Novo desafio", {
        body: `Valendo ${challenge.amount} xp`,
      });
    }
  };

  const resetChallenge = () => {
    setActiveChallenge(null);
  };

  const completedChallenge = () => {
    if (!activeChallenge) {
      return;
    }

    const { amount } = activeChallenge;

    let finalExperiencie = currentExperience + amount;

    if (finalExperiencie >= experienceToNextLevel) {
      finalExperiencie = finalExperiencie - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperiencie);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
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
        completedChallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
};

export { ChallengesContext, ChallengesProvider };
