import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <Link className={`project-card${wide ? " project-card-wide" : ""}`} href={`/work/${project.slug}`}>
      <div className={`project-card-visual${project.coverImage ? " has-product-image" : ""}`}>
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={`${project.name} product screenshot`}
            fill
            sizes={wide ? "(max-width: 760px) 100vw, 55vw" : "(max-width: 760px) 100vw, 33vw"}
            className="project-card-image"
            priority={wide}
          />
        ) : (
          <ProjectVisual type={project.visual} compact={!wide} />
        )}
      </div>
      <div className="project-card-copy">
        <div className="project-card-meta"><span>{project.number} / {project.category}</span><span>{project.year}</span></div>
        <div className="project-card-title-row"><h3>{project.name}</h3><span className="project-arrow"><ArrowUpRight size={18} /></span></div>
        <p>{project.summary}</p>
        <div className="tag-list">{project.stack.slice(0, wide ? 6 : 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
      </div>
    </Link>
  );
}
