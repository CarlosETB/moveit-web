import styles from "styles/components/Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.container}>
      <img src="https://github.com/CarlosETB.png" alt="Profile Image" />

      <div>
        <strong>Carlos Tonholi</strong>
        <p>
          <img src="icons/level.svg" alt="" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
