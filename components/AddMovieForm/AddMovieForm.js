import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
    return(
        <div className={styles.addmovieform__container}>
            <section className={styles.addmovieform}>
                <div className={styles.addmovieform__left}>
                    <img className={styles.addmovieform__image} src="https://picsum.photos/600/400" alt=""></img>
                </div>
                <div className={styles.addmovieform__right}>
                    <form  className={styles.addmovieform__form} action="/handlesubmit">
                        <h2 className={styles.addmovieform__judul}>Add Movie</h2>
                        <label  className={styles.addmovieform__title} for="title">Title</label><br />
                        <input type="text" id="title" name="title" value="" /><br />
                        <label className={styles.addmovieform___yeard} for="yeard">Yeard</label><br />
                        <input type="number" id="yeard" name="yeard" value="yeard" /><br /><br />
                        <input className={styles.addmovieform__button} type="submit" value="Submit" />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AddMovieForm;