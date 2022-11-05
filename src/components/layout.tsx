import { NextPage } from "next";
import React, { ReactElement } from "react";
import Header from "./header";

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
    </>
  );
}
