const data = [
  {
    "date": "22nd August 1996",
    "title": "A leo is born",
    "subtitle": "Beginning of my journey",
    "content": "Born and brought up in West bengal. Speaks in Hindi, Bengali and English."
  },
  {
    "date": "2013-2015",
    "title": "D.A.V Public School",
    "subtitle": "Metric and Higher Secondary",
    "content": "Have always been interested in Science and Maths since childhood. Found that I had interest to play kho-kho and soccer. Always involved myself in the co-curricular activities. Grabbed 2nd position in Maths Olympiad in School Division. Secured 10 CGPA in X and 87% in XII (PCMB)."
  },
  {
    "date": "2015-2019",
    "title": "Kalinga Institute of Industrial Technology",
    "subtitle": "Acquired degree in Baachelor of Technology",
    "content": "During my college years I volunteered for NSS, teaching the kids who were unable to afford to learn. This was an amazing experience for me as I understood what we take for granted is something some of us only wish. Completed my Engineering in Electronics and Telecommunication from KIIT with CGPA 8.23."
  },
  {
    "date": "2019-Current",
    "title": "Mindtree Ltd.",
    "subtitle": "Fullstack Software Engineer",
    "content": "With a 2 years experience on the field, I've had a lot of opportunities to try on various technology stacks including React and Java. Always have a keen eye for frontend to provide satisfying End User experience. Never limiting myself to frontend, also have worked extensively in Chatbot development and designed and developed several Automating framework. Love to work with different teams keeping a team player mindset. Also have been recognized for Best Team excellence award in Mindtree."
  },
]

const ContentBox = ({ date, title, subtitle, content, index }) => {
  const isEven = index % 2 === 0

  return (
    <div className="about-timeline">
      <div className={`${isEven ? "t-right" : "t-left"}`}>
        <div className={`t-box ${isEven ? "t-right-inner" : "t-left-inner"}`}>
          <div className="t-time">{date}</div>
          {title && (<div className="t-title">{title}</div>)}
          {subtitle && (<div className="t-subtitle">{subtitle}</div>)}
          {content && (<div className={`t-content ${isEven ? "text-left" : "text-right"}`}>{content}</div>)}
        </div>
      </div>
      <div className="t">
        <div className="t-circle-outer">
          <div className="t-circle"></div>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="about-wrapper">
      { data.map((content, index) => (
        <ContentBox date={content.date} title={content.title} subtitle={content.subtitle} content={content.content} index={index} key={index}/>
      )) }
    </div>
  )
}