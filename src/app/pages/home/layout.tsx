import styles from './styles.module.css'
export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <section>
        <nav>This is dashboard nav bar</nav>
        <main className={styles.main}>
        {children}

        </main>
    </section>
    )
  }