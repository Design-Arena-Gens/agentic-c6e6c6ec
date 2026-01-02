"use client";

const capabilities = [
  {
    title: "Code-Erstellung & -Refactoring",
    description:
      "Implementiert Features in modernen Frameworks wie Next.js, React, Vue oder Node APIs – inklusive Architekturentscheidungen, Refactoring und Dokumentation."
  },
  {
    title: "Analyse & Debugging",
    description:
      "Untersucht bestehende Repositories, deckt Fehlerquellen auf, erklärt Risiken und liefert konkrete Fixes mit Fokus auf Stabilität und Tests."
  },
  {
    title: "Automatisierte Workflows",
    description:
      "Schreibt CI/CD-Pipelines, Test-Suites, Linter-Konfigurationen und Skripte zur Qualitätssicherung für Projekte aller Größenordnungen."
  },
  {
    title: "Produktkonzeption",
    description:
      "Übersetzt vage Anforderungen in präzise technische Backlogs, UI-Wireframes, Systemarchitekturen und Roadmaps mit priorisierten Meilensteinen."
  }
];

const workflow = [
  {
    title: "Anforderung erfassen",
    text: "Analysiert den Kontext, identifiziert Abhängigkeiten und steckt Scope sowie Erfolgskriterien sauber ab."
  },
  {
    title: "Lösung planen",
    text: "Erarbeitet eine modulare Architektur, priorisiert Aufgaben und wählt passende Tools oder Bibliotheken."
  },
  {
    title: "Implementieren & testen",
    text: "Liefert produktionsreifen Code mit Tests, lintern und optionaler Dokumentation – inklusive Iterationsschleifen."
  },
  {
    title: "Übergabe & Deployment",
    text: "Bereitet Rollouts vor, automatisiert Deployments (z. B. Vercel, CI), schreibt Release Notes und überwacht KPIs."
  }
];

export default function Home() {
  return (
    <main className="app">
      <section className="headline">
        <h1>Was kann dieser KI-Developer?</h1>
        <p>
          Codex begleitet dich bei jedem Schritt moderner Produktentwicklung – vom technischen
          Konzept über die konkrete Implementierung bis zum Betrieb. Hier findest du eine
          kuratierte Übersicht der wichtigsten Fähigkeiten.
        </p>
      </section>

      <section aria-label="Fähigkeiten" className="capabilities-grid">
        {capabilities.map((capability) => (
          <article className="card" key={capability.title}>
            <h3>{capability.title}</h3>
            <p>{capability.description}</p>
          </article>
        ))}
      </section>

      <section aria-label="Arbeitsweise" className="timeline">
        {workflow.map((step, index) => (
          <div className="timeline-step" key={step.title}>
            <span className="timeline-number">{index + 1}</span>
            <div className="timeline-body">
              <span className="timeline-title">{step.title}</span>
              <span className="timeline-text">{step.text}</span>
            </div>
          </div>
        ))}
      </section>

      <section aria-label="Call to Action" className="cta">
        <div>
          <h2>Bereit für das nächste Feature?</h2>
          <p>
            Beschreibe dein Ziel, und Codex setzt es um – von Web-Apps über APIs bis hin zu
            Automatisierungen. Die beste Zeit zum Starten ist jetzt.
          </p>
        </div>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Loslegen
        </button>
      </section>
    </main>
  );
}
