

class App extends React.Component {
    render() {

        return (
            <div>
                Saludos! Hola mundo!!        
            </div>
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