export default function Navlink({ text, svg }) {
    return (
        <button className="nav-link">
            <h2 className="navlink-text"><span>{svg}</span> {text}</h2>
        </button>
        // <>
        //     <input type="radio" className="nav-link" id={`radio-${text}`} value={text} name="navlinks"/>
        //     <label className="navlink-text" for={`radio-${text}`}><span>{svg}</span> {text}</label>
        // </>
    )
}