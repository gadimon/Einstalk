import styles from './main.module.css'
interface Props {
  children: React.ReactNode
}

const Main = ({children}:Props) => {
  return (
    <>
      <main className={styles.main}>
        {children}

        
      </main>
    </>
  );
};

export default Main;
