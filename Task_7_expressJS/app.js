const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.use(adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "page-not-found.html"));
});

app.listen(4000);
// app.listen at backend; var server = http.createServer(this); return server.listen.apply(server, arguments);