import React, { useState } from "react";
import { projects, projectCategories } from "@/constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { arrow } from "@/assets/icons";

export default function Projects() {
  return (
    <>
      <Hero />

      <div className="flex flex-col items-center px-4 md:px-8 ">
        <div className="max-w-3xl border border-x-transparent border-y-violet-600 p-5">
          <p className="py-4 text-left leading-relaxed text-base">
            This page hosts a variety of my projects, showcasing hands-on
            experience in web development and programming. Most of them are
            simple experiments or exercises, reflecting my ongoing practice and
            curiosity in learning new technologies, such as JS, TS, HTML, CSS,
            and database interactions. By exploring different tools and
            frameworks, I aim to strengthen my problem-solving skills and apply
            theoretical knowledge to real-world scenarios. This collection is a
            snapshot of my continuous growth, and it evolves as I take on new
            challenges and expand my technical expertise. Some projects are covered by an NDA,
  so the work below makes that approach visible through public examples: an{' '}
  <a
    href='https://rpa-simulator.vercel.app/dashboard'
    target='_blank'
    rel='noopener noreferrer'
    className='underline'
  >
    <strong>RPA simulator</strong>
  </a>{' '} that reproduces the kind of dashboard
  navigation, filtering, and record extraction I worked with, and a{' '}
  <a
    href='https://roxyle.github.io/calcolatore-da-RAL-a-netto/'
    target='_blank'
    rel='noopener noreferrer'
    className='underline'
  >
    <strong>Gross-to-Net salary calculator</strong>
  </a>{' '}
  shipped with a full public <strong>design document</strong> covering
  requirements, decisions, logic, and implementation.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-10 flex flex-col gap-10">
        {projectCategories.map((category) => {
          const items = projects.filter((p) => p.category === category);
          if (items.length === 0) return null;

          return (
            <section key={category} aria-labelledby={`category-${category}`}>
              <h3
                id={`category-${category}`}
                className="font-poppins text-sm uppercase tracking-widest text-slate-500 mb-4"
              >
                {category}
              </h3>

              <ul className="flex flex-col gap-4">
                {items.map((project) => (
                  <li
                    key={project.id}
                    className="outline outline-1 outline-slate-600 rounded-xl p-5
                    flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
                  >
                    <div className="block-container w-12 h-12 shrink-0 ml-1">
                      <div className={`btn-back rounded-xl ${project.theme}`} />
                      <div className="btn-front rounded-xl flex justify-center items-center">
                        <Image
                          src={project.iconUrl}
                          alt=""
                          className="w-1/2 h-1/2 object-contain"
                        />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-poppins font-semibold mr-1">
                          {project.name}
                        </h4>
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-slate-300 border border-slate-700 rounded-md px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mt-1">
                        {project.description}
                      </p>
                    </div>

                    <div className="shrink-0 flex items-center gap-2 font-poppins">
                      {project.link && project.link.trim() !== "" ? (
                        <>
                          <Link
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-blue-600 whitespace-nowrap"
                          >
                            Take a Look
                          </Link>
                          <Image
                            src={arrow}
                            alt=""
                            className="w-4 h-4 object-contain"
                          />
                        </>
                      ) : (
                        <span className="font-semibold text-blue-600 whitespace-nowrap">
                          Sorry 🚫 NDA
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <Footer />
    </>
  );
}
