

class App extends React.Component {
    render() {
        
        let sep = "15px"

        return (
            <Cuerpo>
                <div style={{
                    fontFamily:"src",
                    fontSize:"30px",
                    color:"crimson"
                }} className="">
                    <div style={{
                        width:"100%",
                        maxWidth:"",
                        height:"max-content",
                        backgroundColor:">#333",
                    
                        paddingBottom:sep,
                    }} className="medio">
                        <div className="des-box medio">
                            <center id="deci">

                            </center>
                        </div>
                    </div>

                    <div style={{
                        marginTop:"30px",
                        width:"100%",
                        height:"max-content",
                        backgroundColor:"#333",
                        paddingTop:sep,
                        paddingBottom:sep,
                    }}>
                        
                    </div>
                </div>
            </Cuerpo>
        )
    }
};

let destacados = [
    pub("saludos Terricolas", "/img/page/bg.jpg", "/", "imagen coño"),
    pub("saludos Terricolas", "/img/page/bg.jpg", "/", "imagen coño"),
    pub("saludos Terricolas", "/img/page/bg.jpg", "/", "imagen coño"),
    pub("saludos Terricolas", "/img/page/bg.jpg", "/", "imagen coño"),
    pub("saludos Terricolas", "/img/page/bg.jpg", "/", "imagen coño"),
    pub("saludos Terricolas", "/img/page/bg.jpg", "/", "imagen coño"),
];


ReactDOM.render(
    <App></App>,
    go("__app__"),
    () => {
        console.log("render finish")

        ReactDOM.render(
            destacados.map((e, i) => {

                return(
                    entrada(e, (i%6)==0)
                )
            }),
            go("deci"),
            () => {

            }
        )
    }
);