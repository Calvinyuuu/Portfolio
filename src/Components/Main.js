import '../css/Main.css'

export default function Main(){
    return(
        <div className="bg-slate-400 flex flex-col h-full">
            <div className="flex">
                <div>
                    <h1>Hi! My Name is Calvin</h1>
                    <h3>Welcome to my Portfolio</h3>
                </div>
                <div className="max-width">
                    <img alt="temp" className=""></img>
                </div>
            </div>
        </div>
    );
}