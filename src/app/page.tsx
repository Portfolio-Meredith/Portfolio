import { client } from '@/sanity/lib/client'
import { settingsQuery, experiencesQuery, educationQuery, projectsQuery, skillsQuery } from '@/sanity/lib/queries'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import WorkList from '@/components/sections/WorkList'
import EducationList from '@/components/sections/EducationList'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'
import { createImageUrlBuilder } from '@sanity/image-url'

const builder = createImageUrlBuilder(client)

export const revalidate = 60

export default async function Home() {
  const [settings, experiences, education, projects, skills] = await Promise.all([
    client.fetch(settingsQuery, {}, { next: { revalidate: 60 } }),
    client.fetch(experiencesQuery, {}, { next: { revalidate: 60 } }),
    client.fetch(educationQuery, {}, { next: { revalidate: 60 } }),
    client.fetch(projectsQuery, {}, { next: { revalidate: 60 } }),
    client.fetch(skillsQuery, {}, { next: { revalidate: 60 } }),
  ])

  const avatarUrl = settings?.avatar
    ? builder.image(settings.avatar).width(160).quality(80).auto('format').url()
    : undefined

  return (
    <div className="bg-bg min-h-screen">
      {/* Colonne CV — 620px */}
      <main className="mx-auto" style={{ maxWidth: '620px', padding: '0 1.5rem' }}>
        <Hero
          title={settings?.heroTitle ?? "bonjour, je suis\nmérédith 👋"}
          sub={settings?.heroSub ?? "Étudiante en communication à l'EFAP Lyon — Stratégie de marque & digital"}
          avatarUrl={avatarUrl}
        />

        <hr className="border-t border-border my-10" />

        {settings?.about && (
          <>
            <div style={{ padding: '3rem 0' }}>
              <About content={settings.about} />
            </div>
            <hr className="border-t border-border" />
          </>
        )}

        {experiences?.length > 0 && (
          <>
            <div style={{ padding: '3rem 0' }}>
              <WorkList experiences={experiences} />
            </div>
            <hr className="border-t border-border" />
          </>
        )}

        {education?.length > 0 && (
          <div style={{ padding: '3rem 0' }}>
            <EducationList education={education} />
          </div>
        )}
      </main>

      {/* Section Projets — breakout 860px */}
      {projects?.length > 0 && (
        <>
          <hr className="border-t border-border" />
          <div className="mx-auto" style={{ maxWidth: '860px', padding: '0 1.5rem' }}>
            <Projects projects={projects} />
          </div>
        </>
      )}

      {/* Colonne centrée — 620px */}
      <main className="mx-auto" style={{ maxWidth: '620px', padding: '0 1.5rem' }}>
        {skills?.length > 0 && (
          <>
            <hr className="border-t border-border" />
            <Skills skills={skills} />
          </>
        )}

        <hr className="border-t border-border" />

        <Contact
          linkedinUrl={settings?.linkedinUrl}
          email={settings?.email}
          cvPdfUrl={settings?.cvPdfUrl}
        />
      </main>

      <Footer />
    </div>
  )
}
