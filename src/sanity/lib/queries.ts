export const settingsQuery = `
  *[_type == "settings"][0] {
    heroTitle,
    heroSub,
    about,
    avatar,
    linkedinUrl,
    email,
    "cvPdfUrl": cvPdf.asset->url
  }
`

export const experiencesQuery = `
  *[_type == "experience"] | order(startDate desc) {
    _id,
    company,
    role,
    city,
    initials,
    color,
    "logoUrl": logo.asset->url,
    startDate,
    endDate,
    isCurrent
  }
`

export const educationQuery = `
  *[_type == "education"] | order(endYear desc) {
    _id,
    school,
    degree,
    startYear,
    endYear,
    initials,
    color,
    "logoUrl": logo.asset->url,
    websiteUrl
  }
`

export const projectsQuery = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    missionType,
    date,
    description,
    image,
    tags,
    link,
    "slug": slug.current,
    order
  }
`

export const projectSlugsQuery = `
  *[_type == "project" && defined(slug.current)] {
    "slug": slug.current
  }
`

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    missionType,
    date,
    description,
    image,
    tags,
    link,
    "slug": slug.current
  }
`

export const skillsQuery = `
  *[_type == "skill"] | order(order asc) {
    _id,
    label,
    category,
    order
  }
`
