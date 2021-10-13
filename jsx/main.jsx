

class App extends React.Component {
    render() {
        

        return (
            <Cuerpo>
                <div style={{
                    fontFamily:"src",
                    fontSize:"30px",
                    color:"crimson"
                }} className="medio">
                    <div className="des-box" id="deci">
                        
                    </div>
                </div>
            </Cuerpo>
        )
    }
};

let destacados = [
    pub("saludos Terricolas", "imagen", "/", "imagen coño"),
    pub("saludos Terricolas", "imagen", "/", "imagen coño"),
    pub("saludos Terricolas", "imagen", "/", "imagen coño"),
    pub("saludos Terricolas", "imagen", "/", "imagen coño"),
    pub("saludos Terricolas", "imagen", "/", "imagen coño"),
    pub("saludos Terricolas", "imagen", "/", "imagen coño"),
];

ReactDOM.render(
    <App></App>,
    go("__app__"),
    () => {
        console.log("render finish")

        ReactDOM.render(
            destacados.map((e, i) => {

                return(
                    <Img 
                    className={"des-a " +(i==0?" des-b":"")}
                    src={e.img}
                    link={e.link}
                    size="-1px"
                    >
                        <div className="des-title" alt={e.seo||e.title||"imagen"}>
                            {e.title}
                        </div>
                    </Img>
                )
            }),
            go("deci"),
            () => {

            }
        )
    }
);