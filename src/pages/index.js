import React from "react";
import clsx from "clsx";
import Layout from "../theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Pythoning news and blogs efficiently with ${siteConfig.title}`}
      description="Secure, fast, no-bugs and easy-to-use platform for news and blogs. "
    >
      <Hero></Hero>
      {/* <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header> */}
      <main>
        <Features></Features>
      </main>
    </Layout>
  );
}
