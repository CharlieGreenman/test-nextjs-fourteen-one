import styles from './tester.module.scss';

/* eslint-disable-next-line */
export interface StylesProps {}

export function Styles(props: StylesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Styles!</h1>
      <h2>Let's show the world what we are made of 👏👏👏</h2>
    </div>
  );
}

export default Styles;
