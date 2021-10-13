
let go = (id) => document.getElementById(id);
let asi = (v1,v2) => Object.assign(v1||{}, v2||{});
let genlink = (l) => (() =>{if (typeof(l)!=="function") {if (l!=="") document.location.assign(l)} else {l()}});
function pub(title, img, link, seo) {
    return {
        title:title,
        img:img,
        link:link,
        seo:seo,
    }
}


class Img extends React.Component {
    render() {
        return (
            <div className={"img " + (this.props.className||"")} style={asi({
                width:this.props.size||"50px",
                height:this.props.size||"50px",
                backgroundImage:`url("${this.props.src||this.props.img}")`,
                borderRadius:this.props.radius||"0px",
                boxShadow:`0px 0px 10px ${this.props.shadow||"transparent"}`,
            }, this.props.style||{})}>
                {this.props.children}
            </div>
        )
    }
};

class Button extends React.Component {
    render() {
        return (
            <div className={"bt " + (this.props.className||"")} style={asi({
                borderRadius:this.props.radius||"0px",
                boxShadow:`0px 0px 10px ${this.props.shadow||"transparent"}`,
                BackgroundColor:`${this.props.bgcolor||"transparent"}`,
                color:`${this.props.color||"#000"}`,
                fontSize:this.props.size||"100%",
                fontWeight:this.props.bold||"100",
            }, this.props.style||{})} onClick={genlink(this.props.link||"")}>
                {this.props.children}
            </div>
        )
    }
};
class Cuerpo extends React.Component {
    render() {

        return (
            <div>
                <Cabeza/> 
                <div className="page-web" id="__page__">
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
            <div className="head">
                <div style={{maxWidth:"100px", width:"100%"}} className="medio l">
                    
                    <Button size="50px" bold="400" link="#" color="gold"
                        style={{
                            fontFamily:"scr"
                        }}>
                        Ricardito
                    </Button>
                </div>
                <div className="medio r land" style={{ 
                    height:"100%", 
                    backgroundColor:"#FFFFFF22",
                    width:"100%",
                    minWidth:"max-content",
                    maxWidth:"400px"
                }}>
                    {
                        ["Inicio", "Reciente", "Destacados"].map(x=>{
                            return(
                                <Button size="18px" bold="400" link="#" color="wheat">
                                    {x}
                                </Button>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};
class Pie extends React.Component {
    render() {

        return (
            <div className="pie" style={{
                color:"#ccc"
            }} alt="Frask - webdev - blog - fullstack">
                <a href="https://frask.repl.co" style={{
                    color:"#ccc"
                }}>
                    Web creada y diseñada por Frask Dreemurr
                </a>
            </div>
        )
    }
};


