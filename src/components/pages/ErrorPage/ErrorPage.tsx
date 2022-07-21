import React from 'react';
import { Typography } from 'components/shared/Typography';
import styles from './ErrorPage.module.scss';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

const ErrorPage = () => (
  <div className={styles.errorPage}>
    <div className={styles.notFound}>
      <Typography variant="h1" className={styles.notFound404}>
        404
      </Typography>
      <Typography variant="h3" className={styles.errorHeader}>
        OOPS! NOTHING WAS FOUND
      </Typography>
      <Typography variant="h5" className={styles.errorText}>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
        <span> </span>
        <NavLink to={ROUTES.ROOT} className={styles.link}>
          Return to homepage
        </NavLink>
      </Typography>
    </div>
  </div>
);

export default ErrorPage;
