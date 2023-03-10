import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MedPjSEnjL1fvYCaXCO6U2vUejoqpmSwVadaskW9bscn02OxRgB5eeZAlyvL3glQ9aMP0zkoYexKoCepOtH1K4M00YgLBrYBQ');
 
const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
 
app.post("/checkout", async (req, res) => {
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });
 
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });
 
    res.send(JSON.stringify({
        url: session.url
    }));
});
 
app.listen(4000, () => console.log("Listening on port 4000!"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

