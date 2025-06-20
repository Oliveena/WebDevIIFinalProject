import React, { useEffect, useState } from "react";
import { useAuth } from '../context/AuthContext';
import axios from "axios";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  CircularProgress,
  MenuItem,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Container,
  Stack,
} from "@mui/material";

export default function Dashboard() {
  const apiKey = process.env.REACT_APP_ALPHA_KEY;
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("global");
  const { user, isAuthenticated, logout } = useAuth();
  const [username, setUsername] = useState(user?.name || "User");
  const [savingGoal, setSavingGoal] = useState("");
const [goalAmount, setGoalAmount] = useState(0);
const [currentSavings, setCurrentSavings] = useState(0); 


  useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser) {
    setUsername(storedUser.name);
  }
}, []);

//   const canadianKeywords = [
//     "Canada", "Canadian", "Toronto", "Vancouver", "Montreal", "Bank of Canada", "BNC", "RBC", "Desjardins", "Ottawa", "Quebec", "Ontario", "Nova-Scotia", "Manitoba"
//   ];

//   const europeanKeywords = [
//     "Europe", "European", "ECB", "Germany", "France", "Spain", "Italy", "Eurozone", "EU", "Brussels", "Paris", "Berlin", "Madrid", "Euro"
//   ];

// const keywordMatch = (keywords) => (item) => {
//   const text = (item.title + " " + item.summary).toLowerCase();
//   // "some" makes filter more lax
//   return keywords.some((word) =>
//     text.includes(word.toLowerCase())
//   );
// };


// const isRelevant = (item) => {
//   const content = (item.title + " " + (item.summary || "")).toLowerCase();
//   // some laxity allowed, news with >1 impertinent term are blocled
//   const bannedHits = bannedPhrases.filter(phrase => content.includes(phrase));
//   return bannedHits.length < 2;
// };


//   // unnecessary keywords (boilerplate or internal releases)
// const bannedPhrases = [
//   "transaction in own shares",
//   "the information contained herein is not for release",
//   "disclosure",
//   "form 6-k",
//   "regulatory news service",
//   "announcement pursuant",
//   "this announcement contains inside information",
// ];

//   useEffect(() => {
//     const fetchNews = async () => {
//       setLoading(true);
//       try {
//   const response = await axios.get("https://www.alphavantage.co/query", {
//     params: {
//       function: "NEWS_SENTIMENT",
//       topics: "economy_fiscal",
//       apikey: apiKey,
//     },
//   });

//   console.log("API Response:", response.data);

//   const allNews = response.data.feed || [];

//   console.log("Original:", allNews.length); 
//   console.log("Filtered:", allNews.filter(isRelevant).length); 

//         const filtered = {
//   canada: allNews.filter(keywordMatch(canadianKeywords)).filter(isRelevant),
//   europe: allNews.filter(keywordMatch(europeanKeywords)).filter(isRelevant),
//   global: allNews.filter(isRelevant),
// }[filter];

// // debugging
// console.log("Filter:", filter);
// console.log("All News:", allNews.length);
// console.log("Filtered News:", filtered.length);

//         setNews(filtered || []);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//         setNews([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, [apiKey, filter]);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Hello, {username}
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        Welcome to your budget app.
      </Typography>
<Box sx={{ mt: 3, textAlign: "center" }}>
  <Typography variant="h6" gutterBottom>
    What are you saving up for?
  </Typography>

  {/* Goal Selection */}
  <TextField
    select
    value={savingGoal}
    onChange={(e) => setSavingGoal(e.target.value)}
    label="Select Goal"
    sx={{ minWidth: 200, mb: 2 }}
  >
    <MenuItem value="house">House</MenuItem>
    <MenuItem value="car">Car</MenuItem>
    <MenuItem value="travel">Travel</MenuItem>
    <MenuItem value="family">Family</MenuItem>
    <MenuItem value="other">Other</MenuItem>
  </TextField>

  {/* Custom goal name input */}
  {savingGoal === "other" && (
    <TextField
      value={savingGoal}
      onChange={(e) => setSavingGoal(e.target.value)}
      label="Enter your goal"
      sx={{ minWidth: 200, mb: 2 }}
    />
  )}


  {/* Amount Inputs with Validation */}
  <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
    <TextField
      type="number"
      label="Goal amount ($)"
      value={goalAmount}
      error={goalAmount < 0}
      helperText={goalAmount < 0 ? "Amount cannot be negative" : ""}
      onChange={(e) => {
        const value = Number(e.target.value);
        setGoalAmount(value >= 0 ? value : 0);
      }}
      sx={{ minWidth: 150 }}
    />
    <TextField
      type="number"
      label="Current savings ($)"
      value={currentSavings}
      error={currentSavings < 0}
      helperText={currentSavings < 0 ? "Savings cannot be negative" : ""}
      onChange={(e) => {
        const value = Number(e.target.value);
        setCurrentSavings(value >= 0 ? value : 0);
      }}
      sx={{ minWidth: 150 }}
    />
  </Box>

  {/* Feedback Summary */}
  {savingGoal && goalAmount > 0 && (
    <Typography variant="body1" sx={{ mt: 2 }}>
      You’re <strong>${Math.max(goalAmount - currentSavings, 0).toLocaleString()}</strong> away from your goal of <strong>${goalAmount.toLocaleString()}</strong> for <strong>{savingGoal}</strong>.
    </Typography>
  )}

  {goalAmount > 0 && currentSavings >= goalAmount && (
    <Typography variant="body1" sx={{ mt: 2, color: "green" }}>
     Congratulations! You’ve reached your savings goal for <strong>{savingGoal}</strong>.
    </Typography>
  )}
</Box>
{/* 
<Box sx={{ mt: 6 }}>
  <Typography variant="h5" gutterBottom>
    Latest Financial News
  </Typography>

  <Box sx={{ mb: 2, textAlign: "center" }}>
    <ToggleButtonGroup
      value={filter}
      exclusive
      onChange={(e, newFilter) => {
        if (newFilter) setFilter(newFilter);
      }}
      color="primary"
    >
      <ToggleButton value="canada">Canada</ToggleButton>
      <ToggleButton value="europe">Europe</ToggleButton>
      <ToggleButton value="global">Global</ToggleButton>
    </ToggleButtonGroup>
  </Box>

  {loading ? (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
      <CircularProgress />
    </Box>
  ) : news.length > 0 ? (
    <Stack direction="row" spacing={2} sx={{ overflowX: "auto", pb: 2 }}>
      {news.slice(0, 10).map((item) => (
        <Card
          key={item.url}
          sx={{
            minWidth: 300,
            maxWidth: 300,
            maxHeight: 380,
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            border: '2px solid #FFD700',
            boxSizing: 'border-box',
          }}
          variant="outlined"
        >
          {item.banner_image && (
            <CardMedia
              component="img"
              height="120"
              image={item.banner_image}
              alt="news thumbnail"
            />
          )}
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {item.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                height: 72,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
              }}
            >
              {item.summary}
            </Typography>
          </CardContent>
          <CardActions sx={{ mt: "auto" }}>
            <Button
              size="small"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      ))}
    </Stack>
  ) : (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      mt={4}
    >
      No news available at this time.
    </Typography>
  )}
</Box>
*/}
</Container>
);
}