let express = require("express");
let bp = require("body-parser");
let app = express();
let fs = require("fs")

app.use(bp.json())

function open(p) {
    p=p||""
    let me = {
        exist:() => fs.existsSync(p),
        write:(e) => fs.writeFileSync(p, e),
        read:() => fs.readFileSync(p, "utf-8"),
        toString: () => me.read(),
        react:() => `<script src="/${p}" type="text/babel"></script>`
    };
    return me
};

function template(p) {
    return (t) => {
        return open(p).read().replace("<page/>", t)
    }
};

let website = template("public/template.html");


(()=>{
    app.get("/", (req, res) => {
        res.send(website(open("jsx/main.jsx").react()))
    });

})();

let lista = ["js", "css", "sass", "docs", "img", "music", "data", "jsx", "app"]
lista.forEach(x=>{
    if (!fs.existsSync(x)) {
        fs.mkdirSync(x)
    };
    app.use("/"+x, express.static("./"+x))
});

app.listen(4500, () => {
    console.log("Server open in the port 4500")
})