const_dirname = path.dirname("")


const buildPath = path.join(_dirname, "../build");


app.use(express.static(buildPath))


app.get("/*", function(req, res) {
    res.sendFile(
        path.join(_dirname,"../build/index.html"),
        function (err){
            if(err){
                res.status(500).send(err);
            }
        }
    );
})
