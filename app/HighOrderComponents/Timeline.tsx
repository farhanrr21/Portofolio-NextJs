'use client'
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ShinyText from "../animations/ShinyText/ShinyText";
import Image from "next/image";

const TimelineSection = () => {
  const data = [
    {
      title: "Nawasena",
      content: (
        <div>
          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            🚀 Hackathon Project: Nawasena
          </h1>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-300 text-justify">
            In April, I joined a hackathon competition called VHack with my teammates{' '}
            <a
              href="https://www.linkedin.com/in/abdulrozzaq/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Abdul Rozzaq
            </a>{' '}
            and{' '}
            <a
              href="https://www.linkedin.com/in/djievalenciasantoso/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Djie Valencia Santoso
            </a>
            . Our project, Nawasena, was a mobile application aimed at helping university students, fresh graduates, and anyone looking for an internship.
          </p>

          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            🛠 My Role
          </h1>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-300 text-justify">
            I was responsible for building the frontend using Flutter. While my teammates handled design and business, I learned a lot about UI/UX slicing, managing my time effectively, and solving complex problems under pressure.
          </p>
          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            🎯 What We Built
          </h1>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-300 text-justify">
            The app aimed to connect job seekers with companies and focusing on facilitate internship opportunities.
          </p>
          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            📚 What I Learned
          </h1>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs text-neutral-300 md:text-sm">
              + Mastered Flutter for mobile development
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
              + Worked under pressure in a competitive environment
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-neutral-300">
              + Gained valuable experience in time management and team collaboration
            </div>
          </div>
          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            🏆 The Outcome
          </h1>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-300 text-justify">
            Though we only made it to the top 20 finalists, the experience was incredibly impactful, giving me insights into building apps and competing at a high level.
          </p>
          <div className="flex flex-row gap-2 mb-8 select-none">
            <ShinyText text="#Flutter" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
            <ShinyText text="#FrontendDevelopment" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
            <ShinyText text="#MobileDevelopment" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
            <ShinyText text="#Hackathon" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/nawasena_header.png"
              alt="nawasena project"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/prototipe.png"
              alt="prototype"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/photo_vhack.png"
              alt="documentation 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/photo_collage.png"
              alt="documentation 2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "SPMI Online",
      content: (
        <div>
          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            🚀 Internship Project: SPMI Online for PT. Pancasila University
          </h1>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-300 text-justify">
            In July-August, I joined an internship at PT. Pancasila University with{' '}
            <a
              href="https://www.linkedin.com/in/luthfi-anis-syafar-41ba78277/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Luthfi Anis Syafar
            </a>{' '}
            and Khrisna Fauzan Maulana. Our task: to develop the SPMI Online platform—an Internal Quality Assurance System for the university.
          </p>

          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            🛠 The Challenge
          </h1>
          <p className="mb-4 text-xs md:text-sm font-normal text-neutral-300 text-justify">
            The project was based on a website and developed using Laravel. As we collaborated with the University Pancasila student team, we were unsure at first how to approach it due to new concepts and technologies. But with the support of our mentors and teammates, we successfully built all the required features.
          </p>
          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            🎯 What We Built
          </h1>
          <div className="mb-4 font-semibold">
            <div className="flex items-center gap-2 text-xs  text-neutral-300 md:text-sm">
              + Complex database design
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              + Answer and question feature
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              + Data visualization
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              + Excel file data transfer
            </div>
          </div>
          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            📚 What I Learned
          </h1>
          <div className="mb-4 font-semibold">
            <div className="flex items-center gap-2 text-xs  text-neutral-300 md:text-sm">
              + Backend development with Laravel
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              + Routing, sessions, and database design for the web
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              + How to collaborate on integrating frontend and backend in one project
            </div>
          </div>
          <div className="flex flex-row gap-2 mb-8 select-none">
            <ShinyText text="#Laravel" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
            <ShinyText text="#BackendDevelopment" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
            <ShinyText text="#DatabaseDesign" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
            <ShinyText text="#WebDevelopment" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/content2_login.png"
              alt="nawasena project"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/content2_quiz.png"
              alt="prototype"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/content2_discuss.jpg"
              alt="documentation 1"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/content2_db.png"
              alt="documentation 2"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "HEXA",
      content: (
        <div>
          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            🚀 Capstone Project - Hexa for PT. Cahaya Trans Utama
          </h1>
          <p className="mb-4 text-xs md:text-sm font-normal  text-neutral-300 text-justify">
            At the end of the semester, I worked on a capstone project for PT. Cahaya Trans Utama, focusing on improving their loading and unloading process. Our team of 3 —{' '}
            <a
              href="https://www.linkedin.com/in/afrinata/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Hoga Cavan Afrinata
            </a>{' '}
            (Backend),{' '}
            <a
              href="https://www.linkedin.com/in/zidanerp/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:underline"
            >
              Zidan Romandhon Putra
            </a>{' '}
            (Frontend), and myself (Mobile Developer) — built both a website and Flutter mobile app to streamline real-time data management and enhance staff coordination.
          </p>

          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            🎯 Goal
          </h1>
          <p className="mb-4 text-xs md:text-sm font-normal  text-neutral-300 text-justify">
            The app and website, named Hexa, simplify project management, attendance, and stockpile data, solving real-time challenges at the company.
          </p>
          <h1 className="mb-4 text-sm font-semibold text-white md:text-md">
            🔍 Key Testing
          </h1>
          <div className="mb-4">
            <div className="flex items-center gap-2 text-xs  text-neutral-300 md:text-sm">
              + Functionality: Core features (project, attendance, stockpiles) work flawlessly.
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              + Usability: Excellent user comfort; some areas for improvement.
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              + Perfomance: Smooth across devices, no major issues.
            </div>
            <div className="flex items-center gap-2 text-xs  md:text-sm text-neutral-300">
              + API: Seamless communication between app/website and backend.
            </div>
          </div>
          <div className="flex flex-row gap-2 mb-8 select-none">
            <ShinyText text="#FullStack" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
            <ShinyText text="#Flutter" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
            <ShinyText text="#API" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
            <ShinyText text="#MobileApp" disabled={false} speed={3} className="border border-gray py-2 px-4 rounded-full font-bold" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/hexa_mobile.png"
              alt="hexa mobile app"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/hexa_lapangan.jpeg"
              alt="lapangan"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/hexa_penyerahan.jpeg"
              alt="documentation"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="project" className="relative w-full">
      <Timeline data={data} />
    </section>
  );
}

export default TimelineSection

