const app = express();
const connectDb = require('./config/connectDB')
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// Connecting To Local Database
connectDb();

app.get("/", function (req, res) {
    res.send("Hey")
})

app.listen(PORT, () => {
    console.log(`Server Started On Port ${PORT}`);
})