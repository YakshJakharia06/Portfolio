import React from 'react'

const ResumeTemplate = () => {
  return (
    <div>
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <div
          id="resume-template"
          style={{
            width: '210mm',
            minHeight: '297mm',
            padding: '15mm',
            boxSizing: 'border-box',
            background: 'white',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.4',
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '15px',
            }}
          >
            <h1
              style={{
                fontSize: '25pt',
                margin: '0',
                color: '#000',
                fontWeight: '700',
              }}
            >
              YAKSH MILAN JAKHARIA
            </h1>

            <p
              style={{
                fontSize: '9.5pt',
                margin: '5px 0',
              }}
            >
              Software Development Engineer Intern
            </p>

            <p
              style={{
                fontSize: '9pt',
                margin: '3px 0',
              }}
            >
              Thane, Maharashtra, India | 8530944492 | jakhariayaksh@gmail.com
            </p>

            <p
              style={{
                fontSize: '9pt',
                margin: '3px 0',
              }}
            >
              LinkedIn | GitHub | LeetCode
            </p>
          </div>

          <div
            style={{
              borderBottom: '2px solid #333',
              marginBottom: '12px',
            }}
          />

          {/* Professional Summary */}
          <h3
            style={{
              fontSize: '12pt',
              color: '#2563eb',
              margin: '0 0 6px 0',
              textTransform: 'uppercase',
              borderBottom: '1px solid #ddd',
              paddingBottom: '3px',
            }}
          >
            Professional Summary
          </h3>

          <p
            style={{
              fontSize: '9pt',
              margin: '0 0 10px 0',
            }}
          >
            Third-year B.E. (AIML) student with hands-on experience building
            full-stack MERN applications and integrating AI/NLP capabilities.
            Proficient in Java, Python, JavaScript, React.js, Node.js, and
            MongoDB; solved 110+ DSA problems on LeetCode. Top-20 finisher at
            HackVerse Hackathon. Seeking an SDE internship to apply strong
            problem-solving and full-stack development skills at a product-based
            company.
          </p>

          {/* Technical Skills */}
          <h3
            style={{
              fontSize: '12pt',
              color: '#2563eb',
              margin: '0 0 6px 0',
              textTransform: 'uppercase',
              borderBottom: '1px solid #ddd',
              paddingBottom: '3px',
            }}
          >
            Technical Skills
          </h3>

          <div
            style={{
              fontSize: '9pt',
              marginBottom: '10px',
            }}
          >
            <p style={{ margin: '2px 0' }}>
              <strong>Programming Languages:</strong> Java, Python, JavaScript
            </p>

            <p style={{ margin: '2px 0' }}>
              <strong>Frameworks & Libraries:</strong> React.js, Node.js,
              Express.js, Next.js
            </p>

            <p style={{ margin: '2px 0' }}>
              <strong>Databases:</strong> MongoDB, SQL
            </p>

            <p style={{ margin: '2px 0' }}>
              <strong>Developer Tools:</strong> Git, GitHub, VS Code, Postman,
              Vercel
            </p>

            <p style={{ margin: '2px 0' }}>
              <strong>Version Control:</strong> Git, GitHub
            </p>

            <p style={{ margin: '2px 0' }}>
              <strong>Operating Systems:</strong> Windows
            </p>

            <p style={{ margin: '2px 0' }}>
              <strong>Core CS Fundamentals:</strong> Data Structures &
              Algorithms, Object-Oriented Programming, DBMS, Operating Systems,
              Computer Networks
            </p>
          </div>

          {/* Education */}
          <h3
            style={{
              fontSize: '12pt',
              color: '#2563eb',
              margin: '0 0 6px 0',
              textTransform: 'uppercase',
              borderBottom: '1px solid #ddd',
              paddingBottom: '3px',
            }}
          >
            Education
          </h3>

          <div style={{ marginBottom: '10px' }}>
            <p
              style={{
                margin: '0',
                fontWeight: 'bold',
                fontSize: '9.5pt',
              }}
            >
              B.E. in Artificial Intelligence & Machine Learning (AIML)
            </p>

            <p
              style={{
                margin: '2px 0',
                fontSize: '9pt',
              }}
            >
              Universal College of Engineering, Kaman, Vasai, Maharashtra
            </p>

            <p
              style={{
                margin: '2px 0',
                fontSize: '9pt',
              }}
            >
              Expected 2028 | CGPA: 8.01 / 10
            </p>

            <p
              style={{
                margin: '2px 0',
                fontSize: '9pt',
              }}
            >
              <strong>Relevant Coursework:</strong> Data Structures &
              Algorithms, Object-Oriented Programming, Database Management
              Systems, Operating Systems, Computer Networks, Machine Learning
            </p>
          </div>

          {/* Experience */}
          <h3
            style={{
              fontSize: '12pt',
              color: '#2563eb',
              margin: '0 0 6px 0',
              textTransform: 'uppercase',
              borderBottom: '1px solid #ddd',
              paddingBottom: '3px',
            }}
          >
            Experience
          </h3>

          <div style={{ marginBottom: '10px' }}>
            <p
              style={{
                margin: '0',
                fontWeight: 'bold',
                fontSize: '9.5pt',
              }}
            >
              HackVerse Hackathon — Participant
            </p>

            <ul
              style={{
                margin: '2px 0 0 0',
                fontSize: '9pt',
                paddingLeft: '18px',
              }}
            >
              <li>
                Selected among the Top 20 out of all participating teams for
                building a functional prototype under time-constrained
                hackathon conditions.
              </li>

              <li>
                Collaborated in a team environment to design, build, and
                present a working solution, strengthening skills in rapid
                prototyping, debugging, and technical presentation.
              </li>
            </ul>
          </div>

          {/* Projects */}
          <h3
            style={{
              fontSize: '12pt',
              color: '#2563eb',
              margin: '0 0 6px 0',
              textTransform: 'uppercase',
              borderBottom: '1px solid #ddd',
              paddingBottom: '3px',
            }}
          >
            Projects
          </h3>

          {/* VoiceKhata */}
          <div style={{ marginBottom: '9px' }}>
            <p
              style={{
                margin: '0',
                fontWeight: 'bold',
                fontSize: '9.5pt',
              }}
            >
              VoiceKhata — AI-Powered Voice Bookkeeping App
              <span style={{ fontWeight: 'normal' }}> | In Progress</span>
            </p>

            <p
              style={{
                margin: '2px 0',
                fontSize: '8.5pt',
              }}
            >
              <strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, Next.js
            </p>

            <ul
              style={{
                margin: '2px 0',
                fontSize: '9pt',
                paddingLeft: '18px',
              }}
            >
              <li>
                Built a voice-first digital ledger for merchants supporting
                multiple inputs.
              </li>

              <li>
                Developed customer management, payment tracking, reminder
                system, and risk scoring features.
              </li>

              <li>
                Designed REST APIs and scalable backend architecture for ledger
                operations.
              </li>
            </ul>
          </div>

          {/* Donate Money */}
          <div style={{ marginBottom: '9px' }}>
            <p
              style={{
                margin: '0',
                fontWeight: 'bold',
                fontSize: '9.5pt',
              }}
            >
              Donate-Money — Crowdfunding Platform
              <span style={{ fontWeight: 'normal' }}> | In Progress</span>
            </p>

            <p
              style={{
                margin: '2px 0',
                fontSize: '8.5pt',
              }}
            >
              <strong>Tech Stack:</strong> Next.js, React.js, Node.js,
              Express.js, MongoDB, Auth.js
            </p>

            <ul
              style={{
                margin: '2px 0',
                fontSize: '9pt',
                paddingLeft: '18px',
              }}
            >
              <li>
                Developing a full-stack crowdfunding platform for creating and
                managing fundraising campaigns.
              </li>

              <li>
                Implemented secure user authentication using Auth.js.
              </li>

              <li>
                Built responsive frontend components with Next.js and React.
              </li>

              <li>
                Developed backend services using Node.js, Express.js, and
                MongoDB.
              </li>

              <li>
                Deployed the application on Vercel for online access and
                continuous development.
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <h3
            style={{
              fontSize: '12pt',
              color: '#2563eb',
              margin: '0 0 6px 0',
              textTransform: 'uppercase',
              borderBottom: '1px solid #ddd',
              paddingBottom: '3px',
            }}
          >
            Certifications
          </h3>

          <ul
            style={{
              margin: '0 0 10px 0',
              fontSize: '9pt',
              paddingLeft: '18px',
            }}
          >
            <li>
              HackVerse Hackathon — Certificate of Participation | HackVerse
            </li>
          </ul>

          {/* Achievements */}
          <h3
            style={{
              fontSize: '12pt',
              color: '#2563eb',
              margin: '0 0 6px 0',
              textTransform: 'uppercase',
              borderBottom: '1px solid #ddd',
              paddingBottom: '3px',
            }}
          >
            Achievements
          </h3>

          <ul
            style={{
              margin: '0',
              fontSize: '9pt',
              paddingLeft: '18px',
            }}
          >
            <li>
              Selected among Top 20 teams at HackVerse Hackathon.
            </li>

            <li>
              Solved 100+ Data Structures & Algorithms problems on LeetCode,
              strengthening problem-solving and competitive programming skills.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResumeTemplate
