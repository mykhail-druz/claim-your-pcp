import { Footer, Header } from "@/components";
import React, { ReactNode } from "react";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
 
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />

    </>
  );
};
