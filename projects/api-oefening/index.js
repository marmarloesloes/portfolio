const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 3000;

// EJS instellen als templating engine
app.set("view engine", "ejs");

// Statische bestanden (CSS, afbeeldingen)
app.use(express.static("public"));

// Route om het weer in Chili op te halen
app.get("/", async (req, res) => {
    try {
        // Maak een GET-aanroep naar OpenWeatherMap API om het weer voor Chili op te halen
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: "Valparaiso,cl", // Dit is de landcode
                appid: "89227c80832c9aba1d73e47f5f9464a7", // Vervang dit door je echte API-sleutel
                units: "metric", // Zorg ervoor dat je de temperatuur in graden Celsius krijgt
                lang: "nl" // Dit zorgt ervoor dat de beschrijving in het Nederlands wordt weergegeven
            }
        });

        // Haal het weer uit de response
        const weatherData = response.data;

        // Stuur de weerdata naar de EJS-template
        res.render("index", { weather: weatherData });
    } catch (error) {
        console.error("Er ging iets mis bij het ophalen van het weer:", error.message);
        res.status(500).send("Er ging iets mis bij het ophalen van het weer.");
    }
});

// Server starten
app.listen(PORT, () => {
    console.log(`Server draait op http://localhost:${PORT}`);
});
