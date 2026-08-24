import express from "express";
import { config } from "dotenv";
import cors from "cors";

const app = express();
const router = express.Router();


config({path: "./config.env"});

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,

})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

router.post("/send/mail", async(req,res,next)=>{
    const {name, email, message} = req.body;
    if(!name || !email || !message){
        return next(
            res.status(400).json({
                success: false,
                message: "Please provide all details"
            })
        );
    }
    
});


app.use(router);

app.listen(process.env.PORT, () => {
    console.log('Server listening at ports ${process.env.PORT}');
});

// import express from "express";
// import { config } from "dotenv";
// import cors from "cors";

// // Load environment variables early
// config({ path: "./config.env" });

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json()); // Allows your app to parse JSON bodies

// // Server setup
// const PORT = process.env.PORT || 4000; // Fallback to 4000 if PORT isn't defined

// app.listen(PORT, () => {
//     // Fixed: Using backticks for template literals
//     console.log(`Server listening at port ${PORT}`);
// });
