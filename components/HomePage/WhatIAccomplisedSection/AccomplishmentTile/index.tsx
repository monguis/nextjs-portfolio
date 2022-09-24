import Image from 'next/image';
import styles from '../../../../styles/componentStyles/HomePage/accomplishment-tile.module.scss'

interface tileProps {
    title: string;
    location: string;
    description: string;
    locationLogo: string;
    accomplishmentDate: Date;
}

export const AccomplishmentTile: React.FC<tileProps> = ({ title, locationLogo, location, description, accomplishmentDate }) => {

    return <div className={styles["main"]}>
        <div className={styles["main__location-logo__wrapper"]}>
            <Image layout="fill"
                objectFit='contain'
                src={locationLogo}
                alt={location + " logo"}
                className={styles["main__location-logo__image"]} />
        </div>
        <article className={styles['main__written-content']}>
            <h4>
                <strong>{title}</strong>
                <br />{location}&nbsp;-&nbsp;<time>{accomplishmentDate.getFullYear()}</time>
            </h4>
            <p className={styles["main__written-content__description-paragraph"]}>{description}</p>
        </article>
    </div>
}