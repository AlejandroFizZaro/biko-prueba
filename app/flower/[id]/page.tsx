import Link from "next/link"
import Image from "next/image"
import getFlowers from "@/helpers/getFlowers";
import styles from "./page.module.css";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";


export default async function flower ({params}) {
    const { id } = params;
    const selectedFlower  = (await getFlowers()).filter((flower) => flower.id.includes( id.toString() ))
    

    return (
        <>  <Link className={styles.Link} scroll={false} href={`/`}> Atrás </Link>
            <ul className={styles.section}>
                
                { selectedFlower.map((flower) => (
                    <li key={flower.id} className={styles.liflower}>
                        <Image 
                            className={styles.image}
                            src={flower.imgUrl}
                            width={250}
                            height={330}
                            alt="Picture of the flower"
                        />
                        <main className={styles.main}>
                            <span className={styles.description}>Name: {flower.name}</span>
                            <span className={styles.description}>Binomial Name: {flower.binomialName}</span>
                            <span className={styles.description}>Price: {flower.price}</span>
                            <span className={styles.description}>Waterings per week: {flower.wateringsPerWeek}</span>
                            <span className={styles.description}>Height (cm): {flower.heightInCm}</span>
                        </main>
                    </li>
                ))}
                
            </ul>
        </>
    )
}