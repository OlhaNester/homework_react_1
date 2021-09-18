import React from 'react';
import PropTypes from 'prop-types';
import StatsItem from './StatsItem';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="Аватар пользователя"
          className={styles.avatar}
          width="200"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>

        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <StatsItem label="Followers" quantity={stats.followers} />
        <StatsItem label="Views" quantity={stats.views} />
        <StatsItem label="Likes" quantity={stats.likes} />
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default Profile;
