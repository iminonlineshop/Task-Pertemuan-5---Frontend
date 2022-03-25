import styles from "./Movie.module.css";

function Movie() {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movie__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>23 Maret 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>24 Maret 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>25 Maret 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>26 Maret 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>27 Maret 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>28 Maret 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>29 Maret 2022</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://picsum.photos/300/400"
              alt=""
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>30 Maret 2022</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Movie;