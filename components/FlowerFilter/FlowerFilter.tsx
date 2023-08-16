'use client'

import { useState, FormEvent } from 'react';
import styles from './FlowerFilter.module.css';
import Image from 'next/image';
import Link from 'next/link';

let flowersSearchResults = []

export default function FlowerFilter( props: any ) {
    
    // We need the search input from the client to be updated each time a key is pressed
    const [search, setSearch] = useState('');
    // We need the API response. The props are coming from the server side ( ListOfFlowers.tsx )
    const flowerResults  = props.value;
    
    
    return (
        <>
            {/* Search field from the client. The field "value={search}" will let us modify the list of flowers */}
            <input type="text"
              value={search}
              onChange={ (e) => setSearch(e.target.value.toString())}
              placeholder='Buscar flores'
              pattern="[a-z0-9]{1,15}"
              className={styles.TextField}
            />
            

            <section className={styles.list}>
                <ul className={styles.grid}>
                    {
                        (   /* Filter the flower list according to search field from the client */
                            search === null
                            ?   flowersSearchResults = flowerResults
                            :   flowersSearchResults = flowerResults.filter((flower:any) =>  
                                    ((flower.name).toLowerCase()).includes(search.toLowerCase()) || ((flower.binomialName).toLowerCase()).includes(search.toLowerCase())
                                    )  
                            /* Once the results are filtered, the array is mapped to turn the array properties into HTML elements */

                        ).map(( flower:any ) => 

                            (
                            <li key={flower.id} className={styles.liFlower}>
                                
                                <Link className={styles.Link} scroll={false} key={flower.id} href={`/flower/${encodeURIComponent(flower.id)}`}>
                                    <Image 
                                        className={styles.image}
                                        src={flower.imgUrl}
                                        width={250}
                                        height={330}
                                        alt="Picture of the flower">
                                            
                                    </Image>
                                </Link>
                            </li> 
                            )
                        )
                    }
                </ul>
                
            </section>
        </>
    )
}

