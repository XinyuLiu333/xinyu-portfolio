"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ViewTransition } from "react";
import { Project } from "@/lib/types";
import RequestAccessModal from "./RequestAccessModal";
import { useGate } from "./GateContext";

export default function EssayCard({ project }: { project: Project }) {
  const hero = project.cardImage ?? project.images[0];
  const [showModal, setShowModal] = useState(false);
  const { unlocked } = useGate();
  const locked = project.isGated && !unlocked;

  const cardContent = (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
      <div className="flex-1 min-w-0 sm:py-2">
        <h3 className="font-serif text-xl text-text-primary mb-1">
          {project.title}
        </h3>
        <span className="text-sm text-text-muted">
          {project.company}, {project.year}
        </span>
        <p className="text-text-secondary text-base leading-relaxed mt-3 mb-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono text-text-muted border border-border rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <ViewTransition name={`hero-${project.slug}`}>
        <div
          className="w-full sm:w-[280px] sm:flex-shrink-0 relative overflow-hidden rounded-lg"
          style={{ backgroundColor: project.coverColor }}
        >
          {hero ? (
            <Image
              src={hero.src}
              alt={hero.alt}
              width={800}
              height={450}
              sizes="(max-width: 640px) 100vw, 280px"
              className={`w-full h-auto transition-transform duration-500 group-hover:scale-[1.03] ${locked ? "blur-[6px]" : ""}`}
            />
          ) : (
            <div className="aspect-[16/9] flex items-center justify-center">
              <span className="text-white/80 font-serif text-lg text-center px-4">
                {project.title}
              </span>
            </div>
          )}
          {locked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/30 backdrop-blur-sm rounded-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </ViewTransition>
    </div>
  );

  if (locked) {
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className="block w-full text-left group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          {cardContent}
        </button>
        {showModal && (
          <RequestAccessModal
            project={project}
            onClose={() => setShowModal(false)}
          />
        )}
      </>
    );
  }

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block group hover:-translate-y-1 transition-all duration-300"
    >
      {cardContent}
    </Link>
  );
}
