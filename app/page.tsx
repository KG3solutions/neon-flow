"use client";

import { useState } from "react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText("http://localhost:3210");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main>
      <header className="nav">
        <a className="wordmark" href="#top">NEON FLOW<span> / KG3</span></a>
        <a className="quiet-link" href="#install">Installation</a>
      </header>

      <section id="top" className="hero">
        <div className="eyebrow"><i /> MACOS · ART-NET</div>
        <h1>Local control for<br />pixel-based neon.</h1>
        <p className="lede">Neon Flow is a straightforward Art-Net controller for building smooth color movement, gradients, and chases during a demo.</p>
        <div className="actions">
          <a className="download" href="/releases/KG3-Neon-Flow-macOS-arm64.zip">Download for Apple Silicon <b>↓</b></a>
          <a className="secondary" href="#install">Read install notes</a>
        </div>
        <p className="fine">macOS Apple Silicon · 115 MB · unsigned app</p>
      </section>

      <section className="signal" aria-label="Neon Flow signal preview">
        <div className="signal-top"><span>OUTPUT PREVIEW</span><span>ART-NET · LIVE</span></div>
        <div className="neon-bar"><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /></div>
        <div className="signal-readout"><span>UNIVERSE 1</span><span>72 PIXELS</span><span>30 FPS</span></div>
      </section>

      <section id="install" className="section">
        <div className="section-label">INSTALLATION</div>
        <div className="steps">
          <article><b>01</b><h2>Download</h2><p>Download the app ZIP and double-click it to unpack.</p></article>
          <article><b>02</b><h2>Move to Applications</h2><p>Drag <em>KG3 Neon Flow.app</em> into your Applications folder.</p></article>
          <article><b>03</b><h2>Connect</h2><p>Join the controller network, open the app, then enter the controller IP and universe.</p></article>
        </div>
      </section>

      <section className="detail-grid">
        <article>
          <div className="section-label">COMPATIBILITY</div>
          <dl><dt>System</dt><dd>macOS on Apple Silicon</dd><dt>Protocol</dt><dd>Art-Net / DMX over Ethernet</dd><dt>Pixel support</dt><dd>RGB pixels, including WS2811</dd></dl>
        </article>
        <article>
          <div className="section-label">FIRST RUN</div>
          <p>macOS may block the first launch because this build is unsigned. Control-click the app, choose <strong>Open</strong>, then confirm.</p>
          <button onClick={copy}>{copied ? "Address copied" : "Copy local controller address"}</button>
        </article>
      </section>

      <footer><span>KG3</span><span>Neon Flow is local-first. It sends Art-Net from the computer that runs it.</span></footer>
    </main>
  );
}
