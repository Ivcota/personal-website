import "@fontsource/inter";
import "@fontsource/space-mono";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import "../styles/globals.css";
import Navbar from "./../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{
            fontFamily: "Space Mono",
            fontFamilyMonospace: "Space Mono",
            defaultRadius: "md",
            headings: {
              fontFamily: "Inter",
            },
            spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
            breakpoints: {
              xs: 500,
              sm: 800,
              md: 1000,
              lg: 1200,
              xl: 1400,
            },
            colors: {
              dark: [
                "#d5d7e0",
                "#acaebf",
                "#8c8fa3",
                "#666980",
                "#4d4f66",
                "#34354a",
                "#2b2c3d",
                "#1d1e30",
                "#0c0d21",
                "#01010a",
              ],
            },

            colorScheme: colorScheme,
          }}
          withGlobalStyles
        >
          <Navbar />
          <Component {...pageProps} />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

export default MyApp;
