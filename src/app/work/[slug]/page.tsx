import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: `${project.name} | Masood Khan`, description: project.summary }
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main id="main" className="project-detail-page">
      <div className="page-shell project-detail-shell">
        <Link href="/#work" className="back-link"><ArrowLeft size={15} /> Back to selected work</Link>
        <div className="project-detail-heading">
          <div>
            <p className="eyebrow">{project.number} / {project.category}</p>
            <h1>{project.name}<span>.</span></h1>
            <p className="project-detail-summary">{project.summary}</p>
          </div>
          <span className="project-detail-year">{project.year}</span>
        </div>

        <Reveal className={`project-detail-art${project.coverImage ? " has-product-image" : ""}`}>
          {project.coverImage ? (
            <Image
              src={project.coverImage}
              alt={`${project.name} project screenshot`}
              fill
              sizes="100vw"
              className="project-detail-image"
              priority
            />
          ) : (
            <ProjectVisual type={project.visual} />
          )}
        </Reveal>

        {project.gallery && project.gallery.length > 0 ? (
          <section className="project-gallery" aria-label={`${project.name} screenshots`}>
            <div className="project-gallery-heading">
              <h2>Product screens.</h2>
              <p>Selected views from the implementation.</p>
            </div>
            <div className="project-gallery-grid">
              {project.gallery.map((image) => (
                <figure className="project-gallery-item" key={image.src}>
                  <div className="project-gallery-frame">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
                  </div>
                  {image.caption ? <figcaption>{image.caption}</figcaption> : null}
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <div className="project-facts">
          <div><span>PROJECT TYPE</span><strong>{project.category}</strong></div>
          <div><span>PERIOD</span><strong>{project.year}</strong></div>
          <div><span>FOCUS</span><strong>{project.stack.slice(0, 3).join(" · ")}</strong></div>
        </div>

        <div className="project-detail-content">
          <Reveal className="detail-section detail-overview">
            <p className="eyebrow">01 / OVERVIEW</p>
            <div><h2>The context.</h2><p>{project.overview}</p></div>
          </Reveal>
          <Reveal className="detail-section">
            <p className="eyebrow">02 / CONTRIBUTIONS</p>
            <div><h2>What I worked on.</h2><ul className="contribution-list">{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </Reveal>
          <Reveal className="detail-section">
            <p className="eyebrow">03 / ENGINEERING NOTES</p>
            <div><h2>How it comes together.</h2><div className="detail-notes">{project.details.map((item, index) => <p key={item}><span>0{index + 1}</span>{item}</p>)}</div></div>
          </Reveal>
          <Reveal className="detail-section">
            <p className="eyebrow">04 / TECHNOLOGY</p>
            <div><h2>The toolkit.</h2><div className="detail-tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
          </Reveal>
        </div>

        <div className="project-next-row">
          {project.externalUrl ? (
            <a className="button button-dark" href={project.externalUrl} target="_blank" rel="noreferrer">Visit live project <ArrowUpRight size={15} /></a>
          ) : (
            <span className="project-private-note">Repository links are added only where a public project URL has been confirmed.</span>
          )}
          <a className="text-link" href="https://github.com/Masood899" target="_blank" rel="noreferrer"><Github size={15} /> GitHub profile <ArrowUpRight size={14} /></a>
        </div>
        <div className="project-pagination">
          <Link href="/#work">← All projects</Link>
          <span>MASOOD KHAN / {project.number}</span>
        </div>
      </div>
    </main>
  );
}
