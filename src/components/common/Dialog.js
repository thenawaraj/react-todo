export const Dialog=(props)=>{
    return <section className="dialog"> 
    {/* This is the dialog Box */}
    <div className="backdrop" onClick={props.closeDialog}></div>
    <div className="card slideTop">
    {props.children}
    </div>
    </section>
}