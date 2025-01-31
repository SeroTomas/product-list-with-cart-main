
interface Props {
    styles: string
}

const DecrementIcon = ({ styles }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" viewBox="0 0 10 2" className={styles}><path d="M0 .375h10v1.25H0V.375Z" /></svg>
    )
}
export default DecrementIcon;