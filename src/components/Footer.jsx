function Footer() {
    
    return (
        <div>
            <p>{currentDate()}</p>
        </div>
    )
}

function currentDate() {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    return `${dia}/${mes}/${anio}`
}
export default Footer