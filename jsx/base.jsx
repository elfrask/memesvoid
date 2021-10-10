
let go = (id) => document.getElementById(id);


class Cuerpo extends React.Component {
    render() {

        let senal = React

        return (
            <div>
                <Cabeza/> 
                <div className="page">
                    {this.props.children}
                </div>   
                <Pie/>    
            </div>
        )
    }
};


class Cabeza extends React.Component {
    render() {

        return (
            <div>
                
            </div>
        )
    }
};
class Pie extends React.Component {
    render() {

        return (
            <div>
                
            </div>
        )
    }
};
