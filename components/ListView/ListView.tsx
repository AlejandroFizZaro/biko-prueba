import styles from "./ListView.module.css";
import ListOfFlowers from  "@/components/ListOfFlowers/ListOfFlowers";

export default function ListView() {
    return(
     <>
        <section className={styles.listView}> 
            <ListOfFlowers searchProp={undefined}/>
        </section>
     </>
    )
}