import React, { useState } from "react";
import MastGen from "../src/components/MastGen";
import Footer from "./components/Footer";

// !!popup info on mouseover

export default function App() {
  return (
    <React.Fragment>
      <h1 className="text-primary text-center mt-4 mb-5">
        MasterGen: A Master Password Generator
      </h1>
      <MastGen />
      <Footer />
    </React.Fragment>
  );
}
