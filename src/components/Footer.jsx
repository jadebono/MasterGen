import React, { useState } from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer className="page-footer font-small blue pt-4 fixed-bottom">
        <div className="footer-copyright text-center py-3 bg-primary text-white">
          © 2022 Copyright:{" "}
          <a
            href="mailto:joe@jadebono.com"
            className="text-white"
            subject="MasterGen"
          >
            Joseph Anthony Debono
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
}
