import { ArrowDown, ArrowDownRight, ArrowUpRight, Braces, Cpu, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { ProjectVisual } from "@/components/project-visual";
import { projects, additionalBuilds } from "@/data/projects";

const skills = [
  { number: "01", title: "Software engineering", body: "Java, Python, C, C++, SQL, Spring Boot, Spring Security, Spring Data JPA, Hibernate, REST APIs" },
  { number: "02", title: "Frontend development", body: "Next.js, React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Zustand, TanStack React Query, Axios" },
  { number: "03", title: "AI & machine learning", body: "Scikit-learn, XGBoost, NLP, Transformers, FAISS, supervised fine-tuning" },
  { number: "04", title: "Data & infrastructure", body: "PostgreSQL, MySQL, Redis, Docker, AWS, RabbitMQ, Flyway, Postman, LangChain, Git, GitHub" }
];

export default function HomePage() {
  const [lead, ...rest] = projects;

  return (
    <main id="main">
      <section className="hero-section page-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="availability-dot" /> SOFTWARE ENGINEER <span className="eyebrow-separator">/</span> AI & ML ENGINEER</p>
          <h1>Engineering<br />software.<br /><em>Exploring intelligence.</em></h1>
          <p className="hero-description">I&apos;m Masood Khan — an engineer interested in building thoughtful digital products, scalable software systems and intelligent applications.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore my work <ArrowUpRight size={16} /></a>
            <a className="button button-text" href="/resume.pdf" target="_blank" rel="noreferrer">Download résumé <ArrowDown size={15} /></a>
          </div>
          <div className="hero-location"><MapPin size={14} /> BENGALURU, INDIA <span>·</span> OPEN TO INTERESTING OPPORTUNITIES</div>
        </div>
        <div className="hero-art-wrap">
          <div className="hero-art-label label-top">SYSTEMS / 01</div>
          <div className="hero-art" aria-label="Abstract visual representing connected software systems and intelligent applications">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="art-core"><Braces size={36} strokeWidth={1.1} /><span>BUILD<br />THINK<br />REFINE</span></div>
            <div className="art-node node-one"><Cpu size={17} /></div>
            <div className="art-node node-two"><Sparkles size={17} /></div>
            <div className="art-node node-three"><Braces size={17} /></div>
            <div className="art-coordinate">12°58&apos; N<br />77°35&apos; E</div>
          </div>
          <div className="hero-art-caption"><span>SOFTWARE × INTELLIGENCE</span><span>PORTFOLIO / 01</span></div>
        </div>
        <a className="scroll-indicator" href="#work"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16} /></a>
      </section>

      <section className="intro-strip page-shell" aria-label="Professional summary">
        <p>I work across full-stack engineering, backend systems and applied AI — from the first system diagram to the final interface.</p>
        <div className="intro-strip-side"><span>BASED IN</span><b>BENGALURU, IN</b></div>
      </section>

      <section className="work-section section-space" id="work">
        <div className="page-shell">
          <Reveal className="section-heading">
            <div><p className="eyebrow">01 / SELECTED WORK</p><h2>Ideas, engineered<br /><em>into reality.</em></h2></div>
            <p className="section-aside">A selection of products, research work and machine-learning systems I&apos;ve worked on.</p>
          </Reveal>

          <Reveal>
            <ProjectCard project={lead} wide />
          </Reveal>
          <div className="project-grid">
            {rest.map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.07}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
          <div className="additional-builds">
            <div className="additional-heading"><span>ALSO ON GITHUB</span><a href="https://github.com/Masood899" target="_blank" rel="noreferrer">View profile <ArrowUpRight size={14} /></a></div>
            <div className="additional-grid">
              {additionalBuilds.map((item) => (
                <div className="additional-card" key={item.name}>
                  <div><span className="additional-dot" /><h3>{item.name}</h3></div>
                  <p>{item.description}</p>
                  <span className="additional-stack">{item.stack}</span>
                  <div className="additional-links"><a href={item.url} target="_blank" rel="noreferrer">Repository <ArrowUpRight size={13} /></a>{"liveUrl" in item && item.liveUrl ? <a href={item.liveUrl} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={13} /></a> : null}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section section-space" id="about">
        <div className="page-shell about-layout">
          <Reveal className="about-heading"><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2>Curiosity drives<br /><em>the engineering.</em></h2></Reveal>
          <Reveal className="about-copy">
            <p className="about-lede">I&apos;m pursuing a B.E. in Artificial Intelligence and Machine Learning at BMS Institute of Technology and Management.</p>
            <p>My interests sit at the intersection of software engineering and artificial intelligence. From designing backend architectures and building full-stack products to experimenting with machine-learning models, I enjoy understanding how things work and turning ideas into functional systems.</p>
            <p>I&apos;m particularly interested in building reliable software, exploring intelligent systems and continuously improving the way I engineer solutions.</p>
            <div className="about-facts"><div><strong>8.63</strong><span>CGPA</span></div><div><strong>2027</strong><span>EXPECTED GRADUATION</span></div><div><strong>4+</strong><span>FEATURED PROJECTS</span></div></div>
          </Reveal>
        </div>
      </section>

      <section className="expertise-section section-space" id="expertise">
        <div className="page-shell">
          <Reveal className="section-heading compact-heading">
            <div><p className="eyebrow">03 / TECHNICAL EXPERTISE</p><h2>Tools for the<br /><em>work that matters.</em></h2></div>
            <p className="section-aside">A practical toolkit across product engineering, intelligent systems and infrastructure.</p>
          </Reveal>
          <div className="skills-list">
            {skills.map((skill) => (
              <Reveal key={skill.number} className="skill-row">
                <span className="skill-number">{skill.number}</span><h3>{skill.title}</h3><p>{skill.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section section-space" id="experience">
        <div className="page-shell experience-layout">
          <Reveal><p className="eyebrow">04 / EXPERIENCE & EDUCATION</p><h2>Learning by<br /><em>building.</em></h2></Reveal>
          <div className="timeline">
            <Reveal className="timeline-item">
              <span className="timeline-date">JUN 2025 — PRESENT</span>
              <div><h3>Research Project · Unisys India</h3><p className="timeline-subtitle">Industry collaboration</p><p>Contributing to research on reward modeling, pairwise ranking, dataset curation and semantic retrieval for specialized programming-language datasets.</p></div>
            </Reveal>
            <Reveal className="timeline-item">
              <span className="timeline-date">2023 — 2027</span>
              <div><h3>B.E. Artificial Intelligence and Machine Learning</h3><p className="timeline-subtitle">BMS Institute of Technology and Management</p><p>Bengaluru, Karnataka · CGPA 8.63</p></div>
            </Reveal>
            <Reveal className="timeline-item">
              <span className="timeline-date">2021 — 2023</span>
              <div><h3>Pre-University Education</h3><p className="timeline-subtitle">Presidency PU College</p><p>12th Board · 90.6%</p></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="recognition-section section-space" id="recognition">
        <div className="page-shell recognition-layout">
          <div><p className="eyebrow">05 / RECOGNITION</p><h2>Good work is<br /><em>better together.</em></h2></div>
          <div className="recognition-list">
            <div><span>01</span><div><h3>3rd Place — NEURONOVA</h3><p>12-hour hackathon · AI-based deforestation system</p></div><span className="recognition-year">HACKATHON</span></div>
            <div><span>02</span><div><h3>2nd Place — Startup Sprint</h3><p>IEEE Computer Society Chapter · BMSIT&M</p></div><span className="recognition-year">HACKATHON</span></div>
          </div>
          <div className="certification-row"><span>CERTIFICATIONS</span><p>Complete Data Analyst Training — Udemy</p><p>Python Fundamentals Certification — Infosys</p></div>
        </div>
      </section>

      <section className="connect-band page-shell">
        <div className="connect-inner">
          <div><p className="eyebrow">LET&apos;S CONNECT</p><h2>Curious about what<br /><em>we could build?</em></h2></div>
          <div className="connect-links">
            <a href="mailto:masoodkann899@gmail.com"><Mail size={16} /> Email me <ArrowUpRight size={15} /></a>
            <a href="https://github.com/Masood899" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={15} /></a>
            <a href="https://www.linkedin.com/in/masood-khan-a83a772b3" target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
