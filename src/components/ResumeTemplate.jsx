import React from 'react'

const ResumeTemplate = () => {
	return (
		<div>
			<div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
				<div id="resume-template" style={{
					width: '210mm',
					minHeight: '297mm',
					padding: '20mm',
					background: 'white',
					color: '#333',
					fontFamily: 'Arial, sans-serif',
					lineHeight: '1.5'
				}}>
					{/* Header */}
					<div style={{ textAlign: 'center', marginBottom: '20px' }}>
						<h1 style={{ fontSize: '26pt', margin: '0', color: '#000' }}>YAKSH JAKHARIA</h1>
						<p style={{ fontSize: '10pt', margin: '5px 0' }}>
							Mumbai, Maharashtra | 8530944492 | jakhariyaksh@gmail.com
						</p>
						<p style={{ fontSize: '10pt', margin: '0' }}>
							linkedin.com/in/yaksh-jakharia-409555311 | github.com/YakshJakharia06
						</p>
					</div>

					<div style={{ borderBottom: '2px solid #444', marginBottom: '15px' }}></div>

					{/* Education */}
					<h3 style={{ fontSize: '14pt', color: '#2563eb', marginBottom: '10px', textTransform: 'uppercase' }}>Education</h3>
					<div style={{ marginBottom: '15px' }}>
						<p style={{ margin: '0', fontWeight: 'bold' }}>Higher Secondary Certificate (HSC) | Maharashtra State Board</p>
						<p style={{ margin: '0', fontSize: '10pt' }}>St. Gregorios Public School & Jr. College, Mulund West, Mumbai | 62.67%</p>

						<p style={{ margin: '10px 0 0 0', fontWeight: 'bold' }}>Secondary School Certificate (SSC) | Maharashtra State Board</p>
						<p style={{ margin: '0', fontSize: '10pt' }}>Holy Mary Convent High School, Bhiwandi, Thane | 79.40%</p>
					</div>

					{/* Skills */}
					<h3 style={{ fontSize: '14pt', color: '#2563eb', marginBottom: '10px', textTransform: 'uppercase' }}>Technical Skills</h3>
					<div style={{ fontSize: '10pt', marginBottom: '15px' }}>
						<p style={{ margin: '3px 0' }}><strong>Frontend:</strong> React.js, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+)</p>
						<p style={{ margin: '3px 0' }}><strong>Backend:</strong> Node.js, Express.js, REST APIs, Socket.io</p>
						<p style={{ margin: '3px 0' }}><strong>Databases:</strong> MongoDB, PostgreSQL</p>
						<p style={{ margin: '3px 0' }}><strong>Tools:</strong> Git/GitHub, Firebase, Vercel</p>
					</div>

					{/* Experience/Projects */}
					<h3 style={{ fontSize: '14pt', color: '#2563eb', marginBottom: '10px', textTransform: 'uppercase' }}>Project Experience</h3>

					<div style={{ marginBottom: '12px' }}>
						<p style={{ margin: '0', fontWeight: 'bold' }}>X (Twitter) Clone | MERN Stack, Socket.io</p>
						<ul style={{ margin: '0', fontSize: '10pt', paddingLeft: '20px' }}>
							<li>Built real-time features: dynamic feeds, likes, comments, and live notifications.</li>
							<li>Designed scalable REST APIs and real-time event handling with Socket.io.</li>
						</ul>
					</div>

					<div style={{ marginBottom: '12px' }}>
						<p style={{ margin: '0', fontWeight: 'bold' }}>Donation Web Application | MERN Stack, Stripe API</p>
						<ul style={{ margin: '0', fontSize: '10pt', paddingLeft: '20px' }}>
							<li>Implemented secure workflows with Stripe; built history tracking dashboards.</li>
						</ul>
					</div>

					<div style={{ marginBottom: '12px' }}>
						<p style={{ margin: '0', fontWeight: 'bold' }}>Password Manager | React, Node.js, CryptoJS</p>
						<ul style={{ margin: '0', fontSize: '10pt', paddingLeft: '20px' }}>
							<li>Engineered an encrypted credential vault with master-key protection.</li>
						</ul>
					</div>

					{/* Summary */}
					<h3 style={{ fontSize: '14pt', color: '#2563eb', marginBottom: '10px', textTransform: 'uppercase' }}>Professional Summary</h3>
					<p style={{ fontSize: '10pt', margin: '0' }}>
						Full Stack MERN Developer with hands-on experience building scalable, secure, and web applications.
						Expertise in real-time systems and RESTful architecture.
					</p>
				</div>
			</div>
		</div>
	)
}

export default ResumeTemplate
