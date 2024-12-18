import React from "react";
import { Box } from "@mui/material";

const App = () => {
  const contentBoxes = [
    "Content Box 1",
    "Content Box 2",
    "Content Box 3",
    "Content Box 4",
    "Content Box 5",
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "10px",
        margin: 0,
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        "@media (max-width: 700px)": {
          flexDirection: "column",
          alignItems: "stretch",
        },
      }}
    >
      {/* Content Boxes and Arrows */}
      {contentBoxes.map((content, index) => (
        <React.Fragment key={index}>
          {/* Content Box */}
          <Box
            sx={{
              flex: "1",
              minWidth: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#8971a4",
                width: "100%",
                minHeight: "150px",
                border: "1px solid #b2b0b0",
                padding: "20px",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                boxSizing: "border-box",
                color: "#fff",
              }}
            >
              {content}
            </Box>
          </Box>

          {/* Conditionally Render Arrow Column */}
          {index < contentBoxes.length - 1 && (
            <Box
              sx={{
                flex: "0 0 8%",
                maxWidth: "8%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "@media (max-width: 700px)": {
                  flex: "0 0 100%",
                  maxWidth: "100%",
                  height: "50px",
                },
              }}
            >
              {/* Right Arrow (Visible on larger screens) */}
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  height: "150px",
                  "& span": {
                    display: "inline-block",
                    border: "solid black",
                    borderWidth: "0 4px 4px 0",
                    padding: "10px",
                    transform: "rotate(-45deg)", // Right arrow on larger screens
                  },
                }}
              >
                <span></span>
              </Box>

              {/* Down Arrow (Visible on small screens) */}
              <Box
                sx={{
                  display: { xs: "flex", sm: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50px",
                  "& span": {
                    display: "inline-block",
                    border: "solid black",
                    borderWidth: "0 4px 4px 0",
                    padding: "10px",
                    transform: "rotate(45deg)", // Down arrow for small screens (vertical layout)
                    marginTop: "10px",
                  },
                }}
              >
                <span></span>
              </Box>
            </Box>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default App;
