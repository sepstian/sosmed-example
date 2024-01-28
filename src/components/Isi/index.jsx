const Isi =(props) =>{
    return <div onClick={props.onClick} className={props.class}>
        {props.children}
    </div>
}

export default Isi