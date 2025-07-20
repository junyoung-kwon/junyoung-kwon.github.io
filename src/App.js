import React from "react";

export default function App() {
  return (
    <main style={{ minHeight: "100vh", padding: "2rem", fontFamily: "Arial, sans-serif", backgroundColor: "#f3f4f6" }}>
      <section style={{ maxWidth: "700px", margin: "0 auto" }}>
        <header style={{ marginBottom: "3rem", textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Eric Kwon</h1>
          <p style={{ fontSize: "1.125rem", color: "#4b5563" }}>Software Engineer | Web Developer | Tech Enthusiast</p>
        </header>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>About Me</h2>
          <p>Hello! I'm Eric, a passionate developer who loves building web applications.</p>
        </section>

        <section style={{ marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Projects</h2>
          <ul style={{ paddingLeft: "1.5rem" }}>
            <li>Project A: A productivity app that helps users manage tasks efficiently.</li>
            <li>Project B: A data visualization tool using D3.js and React.</li>
            <li>Project C: A personal finance tracker with budget planning features.</li>
          </ul>
        </section>

        <section>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem" }}>Contact</h2>
          <p>Feel free to reach out via email or social media.</p>
        </section>
      </section>
    </main>
  );
}
