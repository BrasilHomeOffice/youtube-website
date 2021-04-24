import styles from './ForumCategory.module.scss'

export default function ForumCategory(props) {
    return (
        <div className={styles.container}>
            <div className={styles.iconContainer}>
                <img className={styles.icon} src="https://img.icons8.com/doodle/48/000000/chat.png"/>
            </div>
            <div className={styles.contentContainer}>
                <a href="#" >{props.value.title}</a>
                <p>{props.value.description.substr(0,30)}</p>
            </div>
            <div className={styles.postContainer}>
                <p>{props.value.postNumber} <br /> post{props.value.postNumber > 1 ? 's' : ''}</p>
            </div>
            <div className={styles.modificationsContainer}>
                <p>{props.value.finallyPost.title}</p>
                <p>{props.value.finallyPost.name}, {props.value.finallyPost.datetime}</p>
            </div>
        </div>
    )
}