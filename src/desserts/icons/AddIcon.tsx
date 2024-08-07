
interface Props {
    styles: string
}

const AddIcon = ({ styles }: Props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" className={styles}><path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
    )
}
export default AddIcon;