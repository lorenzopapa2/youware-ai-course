import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import ModuleCards from "@/components/module-cards"
import SyllabusAccordion from "@/components/syllabus-accordion"
import TracksTabs from "@/components/tracks-tabs"
import Mentors from "@/components/mentors"
import ProjectTimeline from "@/components/project-timeline"
import EvaluationSystem from "@/components/evaluation-system"
import ImplementationSuggestions from "@/components/implementation-suggestions"
import FAQ from "@/components/faq"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ModuleCards />
        <SyllabusAccordion />
        <TracksTabs />
        <Mentors />
        <ProjectTimeline />
        <EvaluationSystem />
        <ImplementationSuggestions />
        <FAQ />
      </main>
    </div>
  )
}