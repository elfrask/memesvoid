

class App extends React.Component {
    render() {
        

        return (
            <Cuerpo>
                <div style={{
                    fontFamily:"src",
                    fontSize:"30px",
                    color:"crimson"
                }}>
                    Ricardito el nene bonito 7v7r {"<3"}
                </div>
            </Cuerpo>
        )
    }
};



ReactDOM.render(
    <App></App>,
    go("__app__"),
    () => {
        console.log("render finish")
    }
);