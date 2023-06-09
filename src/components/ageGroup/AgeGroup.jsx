import "./ageGroup.style.css";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import { tiers } from "./Tiers";
import theme from "../../theme";

const defaultTheme = createTheme();

function AgeGroup() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
          style={{
            fontFamily: theme.typography.h1.fontFamily,
            fontWeight: "bolder",
          }}
        >
          Infant to School Age Programs
        </Typography>
        <Typography
          variant="p"
          align="center"
          color="text.secondary"
          component="p"
        >
          At Helen Lucy Daycare, we believe that every child is unique and
          deserves the best care possible. That's why we offer personalized
          attention, flexible schedules, and affordable rates. Whether you need
          full-time or part-time care, we have a spot for your child.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" className="mainAgeContainer">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={13}
              sm={tier.title === "Enterprise" ? 13 : 6}
              md={6}
            >
              <Card>
                <CardHeader
                  className="cardTitle"
                  title={tier.title}
                  titleTypographyProps={{ align: "center", fontWeight: "bold" }}
                  sx={{
                    backgroundColor: `${tier.color}`,
                    color: "white",
                    textShadow: "1px 2px 2px rgba(0, 0, 0, 0.6)",
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    {tier.ageGroupPic}
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        sx={
                          {
                            // fontWeight: "bold",
                          }
                        }
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                      backgroundColor: theme.palette.accent.main,
                      textShadow: "1px 2px 2px rgba(0, 0, 0, 0.6)",
                    }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default AgeGroup;
