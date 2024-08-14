const_dirname = path.dirname("")

import build from '../build'

const buildPath = path.join(_dirname, "../build");


app.use(express.static(buildPath))


app.get("/*", function(req, res) {
    res.sendFile(
        path.join(_dirname,"../client/build/index.html"),
        function (err){
            if(err){
                res.status(500).send(err);
            }
        }
    );
})
