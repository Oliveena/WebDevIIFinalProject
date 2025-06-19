import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  CircularProgress,
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
  const [username, setUsername] = useState("............");

  const canadianKeywords = [
    "Canada", "Canadian", "Toronto", "Vancouver", "Montreal", "Bank of Canada", "BNC", "RBC", "Desjardins", "Ottawa", "Quebec", "Ontario", "Nova-Scotia", "Manitoba"
  ];

  const europeanKeywords = [
    "Europe", "European", "ECB", "Germany", "France", "Spain", "Italy", "Eurozone", "EU", "Brussels", "Paris", "Berlin", "Madrid", "Euro"
  ];



console.log("Original:", allNews.length);
console.log("Filtered:", allNews.filter(isRelevant).length);

  const keywordMatch = (keywords) => (item) =>
    keywords.some((word) =>
      (item.title + item.summary).toLowerCase().includes(word.toLowerCase())
    );

const isRelevant = (item) => {
  const content = (item.title + " " + (item.summary || "")).toLowerCase();
  return !bannedPhrases.some(phrase => content.includes(phrase));
};

  // unnecessary keywords (boilerplate or internal releases)
const bannedPhrases = [
  "transaction in own shares",
  "the information contained herein is not for release",
  "disclosure",
  "form 6-k",
  "regulatory news service",
  "announcement pursuant",
  "this announcement contains inside information",
];

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await axios.get("https://www.alphavantage.co/query", {
          params: {
            function: "NEWS_SENTIMENT",
            topics: "economy_fiscal",
            apikey: apiKey,
          },
        });

        const allNews = response.data.feed || [];

        const filtered = {
  canada: allNews.filter(keywordMatch(canadianKeywords)).filter(isRelevant),
  europe: allNews.filter(keywordMatch(europeanKeywords)).filter(isRelevant),
  global: allNews.filter(isRelevant),
}[filter];

        setNews(filtered || []);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [apiKey, filter]);

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Hello {username}
      </Typography>

      <Typography variant="body1" align="center" gutterBottom>
        Welcome to your budget app.
      </Typography>

      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="body2">
          <strong>Suggestion:</strong> Add a “What are you saving up for?” section
          like “house”, “car”, “travel”, or “family”.
        </Typography>
        <Typography variant="body2" mt={1}>
          Then we can show something like: <em>“You're $X away from your goal of $Y for [selectedGoal]”</em>
        </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Latest Financial News
        </Typography>

        {/* Toggle between Global, Canada, and Europe */}
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
                  display: "flex",
                  flexDirection: "column",
                  flexShrink: 0,
                }}
                variant="outlined"
              >
                {item.banner_image && (
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.banner_image}
                    alt="news thumbnail"
                  />
                )}
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.summary.slice(0, 100)}...
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
    </Container>
  );
}
