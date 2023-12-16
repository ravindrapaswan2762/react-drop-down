import styles from "./options.module.css"

export function Options(props){
    return (
        <div className={styles.options}>
            {props.options.map((item, index) => (
                <div
                    key={index}
                    className={styles.option}
                    onClick={() => {
                        props.setOption(item);
                        props.setHovered(false);
                    }}
                >
                    {item}
                </div>
            ))}
        </div>
    )
}