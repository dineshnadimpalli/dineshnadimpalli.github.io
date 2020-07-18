/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
	isSplash: false,  // Change this to false if you don't want Splash screen.
};


//Home Page
const greeting = {
	title: "Dinesh Nadimpalli",
	logo_name: "DineshNadimpalli",
	// nickname: "layman_brother",
	subTitle:
		"A self-motivated and passionate individual who loves to code👨🏻‍💻, build🛠 and colloborate🤝 in creating software products that creates impact",
	resumeLink:
		"https://drive.google.com/open?id=1XYpYhLeqCdyx_q6l0bQoC7RgwQjAjXPf",
	// portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
	{
		name: 'Github',
		link: 'https://github.com/dineshnadimpalli',
		className: 'github',
		iconName: 'fa-github'
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/dineshnadimpalli/',
		className: 'linkedin',
		iconName: 'fa-linkedin-in'
	},
	{
		name: 'Gmail',
		link: 'mailto:dinesh601048@gmail.com',
		className: 'google',
		iconName: 'fa-google'
	},
	{
		name: 'Stack Overflow',
		link: 'https://stackoverflow.com/users/8238968/dinesh-nadimpalli?tab=profile',
		className: 'stackoverflow',
		iconName: 'fa-stack-overflow'
	},
	{
		name: 'WhatsApp',
		link: 'tel:+91-88979121499',
		className: 'whatsapp',
		iconName: 'fa-whatsapp'
	}
]


const skills = {
	data: [
		// {
		//   title: "Data Science & AI",
		//   fileName: "DataScienceImg",
		//   skills: [
		//     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
		//     "⚡ Experience of working with Computer Vision and NLP projects",
		//     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis"
		//   ],
		//   softwareSkills: [
		//     {
		//       skillName: "Tensorflow",
		//       fontAwesomeClassname: "logos-tensorflow",
		//       style: {
		//         backgroundColor: "transparent"
		//       }
		//     },
		//     {
		//       skillName: "Keras",
		//       fontAwesomeClassname: "simple-icons:keras",
		//       style: {
		//         backgroundColor: "white",
		//         color: "#D00000"
		//       }
		//     },
		//     {
		//       skillName: "PyTorch",
		//       fontAwesomeClassname: "logos-pytorch",
		//       style: {
		//         backgroundColor: "transparent"
		//       }
		//     },
		//     {
		//       skillName: "Python",
		//       fontAwesomeClassname: "ion-logo-python",
		//       style: {
		//         backgroundColor: "transparent",
		//         color: "#3776AB"
		//       }
		//     }
		//   ]
		// },
		{
			title: "Full Stack Development",
			fileName: "FullStackImg",
			skills: [
				"⚡ Building complex user experience for web applications using React & Redux",
				"⚡ Developing cross-platform mobile applications using React-Native & Redux",
				"⚡ Creating backend server applications using Node, Express with MongoDB as database",
			],
			softwareSkills: [
				// {
				//   skillName: "Sass",
				//   fontAwesomeClassname: "simple-icons:sass",
				//   style: {
				//     color: "#CC6699"
				//   }
				// },
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "simple-icons:javascript",
					style: {
						backgroundColor: "#000000",
						color: "#F7DF1E"
					}
				},
				{
					skillName: "ReactJS(Web)",
					fontAwesomeClassname: "simple-icons:react",
					style: {
						color: "#61DAFB",
                        backgroundColor: "#2c2e39",
                        borderRadius: "50px",
                        padding: "5px"
					}
				},
				{
					skillName: "React-Native(Mobile)",
					fontAwesomeClassname: "simple-icons:react",
					style: {
						color: "#61DAFB",
                        backgroundColor: "#202020",
                        borderRadius: '50%',
                        padding: "5px"
					}
				},
				{
					skillName: "ElectronJs",
					fontAwesomeClassname: "simple-icons:electron",
					style: {
						color: "#61DAFB",
						backgroundColor: '#2c2e39',
						borderRadius: '50px',
						padding: '5px'
					}
				},
				{
					skillName: "NodeJS",
					fontAwesomeClassname: "simple-icons:node-dot-js",
					style: {
						color: "#339933"
					}
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "logos:mongodb",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "simple-icons:npm",
					style: {
						color: "#CB3837"
					}
				},
				{
					skillName: "Git",
					fontAwesomeClassname: "simple-icons:git",
					style: {
						color: "#F1502F"
					}
				},
				{
					skillName: "HTML5",
					fontAwesomeClassname: "simple-icons:html5",
					style: {
						color: "#E34F26"
					}
				},
				{
					skillName: "CSS3",
					fontAwesomeClassname: "fa-css3",
					style: {
						color: "#1572B6"
					}
				},
				// {
				//   skillName: "Yarn",
				//   fontAwesomeClassname: "simple-icons:yarn",
				//   style: {
				//     color: "#2C8EBB"
				//   }
				// },
				// {
				//   skillName: "Gatsby",
				//   fontAwesomeClassname: "simple-icons:gatsby",
				//   style: {
				//     color: "#663399"
				//   }
				// },
				// {
				//   skillName: "Flutter",
				//   fontAwesomeClassname: "simple-icons:flutter",
				//   style: {
				//     color: "#02569B"
				//   }
				// }
			]
		},
		// {
		//   title: "Cloud Infra-Architecture",
		//   fileName: "CloudInfraImg",
		//   skills: [
		//     "⚡ Experience working on multiple cloud platforms",
		//     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
		//     "⚡ Deploying deep learning models on cloud to use on mobile devices",
		//     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS"
		//   ],
		//   softwareSkills: [
		//     {
		//       skillName: "GCP",
		//       fontAwesomeClassname: "simple-icons:googlecloud",
		//       style: {
		//         color: "#4285F4"
		//       }
		//     },
		//     {
		//       skillName: "AWS",
		//       fontAwesomeClassname: "simple-icons:amazonaws",
		//       style: {
		//         color: "#FF9900"
		//       }
		//     },
		//     {
		//       skillName: "Azure",
		//       fontAwesomeClassname: "simple-icons:microsoftazure",
		//       style: {
		//         color: "#0089D6"
		//       }
		//     },
		//     {
		//       skillName: "Firebase",
		//       fontAwesomeClassname: "simple-icons:firebase",
		//       style: {
		//         color: "#FFCA28"
		//       }
		//     },
		//     {
		//       skillName: "PostgreSQL",
		//       fontAwesomeClassname: "simple-icons:postgresql",
		//       style: {
		//         color: "#336791"
		//       }
		//     },
		//     {
		//       skillName: "MongoDB",
		//       fontAwesomeClassname: "simple-icons:mongodb",
		//       style: {
		//         color: "#47A248"
		//       }
		//     },
		//     {
		//       skillName: "Docker",
		//       fontAwesomeClassname: "simple-icons:docker",
		//       style: {
		//         color: "#1488C6"
		//       }
		//     },
		//     {
		//       skillName: "Kubernetes",
		//       fontAwesomeClassname: "simple-icons:kubernetes",
		//       style: {
		//         color: "#326CE5"
		//       }
		//     }
		//   ]
		// },
		// {
		//   title: "UI/UX Design",
		//   fileName: "DesignImg",
		//   skills: [
		//     "⚡ Designing highly attractive user interface for mobile and web applications",
		//     "⚡ Customizing logo designs and building logos from scratch",
		//     "⚡ Creating the flow of application functionalities to optimize user experience"
		//   ],
		//   softwareSkills: [
		//     {
		//       skillName: "Adobe XD",
		//       fontAwesomeClassname: "simple-icons:adobexd",
		//       style: {
		//         color: "#FF2BC2"
		//       }
		//     },
		//     {
		//       skillName: "Figma",
		//       fontAwesomeClassname: "simple-icons:figma",
		//       style: {
		//         color: "#F24E1E"
		//       }
		//     },
		//     {
		//       skillName: "Adobe Illustrator",
		//       fontAwesomeClassname: "simple-icons:adobeillustrator",
		//       style: {
		//         color: "#FF7C00"
		//       }
		//     },
		//     {
		//       skillName: "Inkscape",
		//       fontAwesomeClassname: "simple-icons:inkscape",
		//       style: {
		//         color: "#000000"
		//       }
		//     }
		//   ]
		// }
	]
};


// Education Page
const competitiveSites = {
	competitiveSites: [
		{
			siteName: "HackerRank",
			iconifyClassname: "simple-icons:hackerrank",
			style: {
				color: "#2EC866"
			},
			profileLink: "https://www.hackerrank.com/layman_brother"
		},
		{
			siteName: "Codechef",
			iconifyClassname: "simple-icons:codechef",
			style: {
				color: "#5B4638"
			},
			profileLink: "https://www.codechef.com/users/ashutosh_1919"
		},
		{
			siteName: "Codeforces",
			iconifyClassname: "simple-icons:codeforces",
			style: {
				color: "#1F8ACB"
			},
			profileLink: "http://codeforces.com/profile/layman_brother"
		},
		{
			siteName: "Hackerearth",
			iconifyClassname: "simple-icons:hackerearth",
			style: {
				color: "#323754"
			},
			profileLink: "https://www.hackerearth.com/@ashutosh391"
		},
		{
			siteName: "Kaggle",
			iconifyClassname: "simple-icons:kaggle",
			style: {
				color: "#20BEFF"
			},
			profileLink: "https://www.kaggle.com/laymanbrother"
		}
	]
}

const degrees = {
	degrees: [
		{
			title: "Indian Institute of Information Technology Kurnool",
			subtitle: "B.Tech. in Computer Engineering",
			logo_path: "iiitk_logo.png",
			alt_name: "IIITDM Kurnool",
			duration: "2016 - Present",
			descriptions: [
				"⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
				"⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
				"⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics."
			],
			website_link: "http://iiitk.ac.in"
		}
	]
}

const certifications = {
	certifications: [
		{
			title: "Machine Learning",
			subtitle: "- Andrew Ng",
			logo_path: "stanford_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
			alt_name: "Stanford University",
			color_code: "#8C151599"
		},
		{
			title: "Deep Learning",
			subtitle: "- Andrew Ng",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "ML on GCP",
			subtitle: "- GCP Training",
			logo_path: "google_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "Data Science",
			subtitle: "- Alex Aklson",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
			alt_name: "IBM",
			color_code: "#1F70C199"
		},
		{
			title: "Big Data",
			subtitle: "- Kim Akers",
			logo_path: "microsoft_logo.png",
			certificate_link:
				"https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
			alt_name: "Microsoft",
			color_code: "#D83B0199"
		},
		{
			title: "Advanced Data Science",
			subtitle: "- Romeo Kienzler",
			logo_path: "ibm_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
			alt_name: "IBM",
			color_code: "#1F70C199"
		},
		{
			title: "Advanced ML on GCP",
			subtitle: "- GCP Training",
			logo_path: "google_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "DL on Tensorflow",
			subtitle: "- Laurence Moroney",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
			alt_name: "deeplearning.ai",
			color_code: "#00000099"
		},
		{
			title: "Fullstack Development",
			subtitle: "- Jogesh Muppala",
			logo_path: "coursera_logo.png",
			certificate_link:
				"https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
			alt_name: "Coursera",
			color_code: "#2A73CC"
		},
		{
			title: "Kuberenetes on GCP",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
			alt_name: "GCP",
			color_code: "#4285F499"
		},
		{
			title: "Cryptography",
			subtitle: "- Saurabh Mukhopadhyay",
			logo_path: "nptel_logo.png",
			certificate_link:
				"https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
			alt_name: "NPTEL",
			color_code: "#FFBB0099"
		},
		{
			title: "Cloud Architecture",
			subtitle: "- Qwiklabs",
			logo_path: "gcp_logo.png",
			certificate_link:
				"https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
			alt_name: "GCP",
			color_code: "#4285F499"
		}
	]
};


// Experience Page
const experience = {
	title: "Experience",
	subtitle: "Work and Internship",
	description:
		"Worked with both Product and Service based companies developing web and mobile applications. Active colloborator in tech community forums",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Work",
			experiences: [
				{
					title: "Software Engineer",
					company: "Enquero Global",
					company_url: "https://enquero.com/",
					logo_path: "enqueroLogo.gif",
					duration: "Oct 2019 - PRESENT",
					location: "Bengaluru, India",
					// description:
					// 	"I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
					color: "#0879bf",
					languages: [
						{
							"name": "JavaScript",
							"iconifyClass": "logos-javascript"
						},
						{
							"name": "ReactJS(Web & Mobile)",
							"iconifyClass": "simple-icons:react",
							"style": {
								"color": "#61DAFB",
								"backgroundColor": "#2c2e39",
								"borderRadius": "50px",
								"padding": "5px"
							}
						},
						{
							"name": "Redux",
							"iconifyClass": "logos:redux"
						}
					]
				},
				{
					title: "Software Developer",
					company: "MyAnatomy Integration Pvt Ltd",
					company_url: "https://www.linkedin.com/company/muffito-inc/about/",
					logo_path: "myanatomyLogo.png",
					duration: "Aug 2018 - Sep 2019",
					location: "Bengaluru, India",
					// description:
					// 	"I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
					color: "#9b1578",
					languages: [
						{
							"name": "JavaScript",
							"iconifyClass": "logos-javascript"
						},
						{
							"name": "ReactJS(Web & Mobile)",
							"iconifyClass": "simple-icons:react",
							"style": {
								"color": "#61DAFB",
								"backgroundColor": "#2c2e39",
								"borderRadius": "50px",
								"padding": "5px"
							}
						},
						{
							"name": "Redux",
							"iconifyClass": "logos:redux"
						},
						{
							"name": "NodeJs",
							"iconifyClass": "logos:nodejs"
						},
						{
							"name": "MongoDB",
							"iconifyClass": "logos:mongodb"
						}
					]
				}
			],
		},
		{
			title: "Internship",
			experiences: [
				{
					title: "Software Development Intern",
					company: "MyAnatomy Integration Pvt Ltd",
					company_url: "https://www.linkedin.com/company/muffito-inc/about/",
					logo_path: "myanatomyLogo.png",
					duration: "Aug 2018 - Sep 2019",
					location: "Bengaluru, India",
					// description:
					// 	"I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
					color: "#9b1578",
					languages: [
						{
							"name": "JavaScript",
							"iconifyClass": "logos-javascript"
						},
						{
							"name": "ReactJS(Web & Mobile)",
							"iconifyClass": "simple-icons:react",
							"style": {
								"color": "#61DAFB",
								"backgroundColor": "#2c2e39",
								"borderRadius": "50px",
								"padding": "5px"
							}
						},
						{
							"name": "Redux",
							"iconifyClass": "logos:redux"
						},
						{
							"name": "NodeJs",
							"iconifyClass": "logos:nodejs"
						},
						{
							"name": "MongoDB",
							"iconifyClass": "logos:mongodb"
						}
					]
				}
			],
		},
		// {
		// 	title: "Volunteerships",
		// 	experiences: [
		// 		{
		// 			title: "Google Explore ML Facilitator",
		// 			company: "Google",
		// 			company_url: "https://about.google/",
		// 			logo_path: "google_logo.png",
		// 			duration: "June 2019 - April 2020",
		// 			location: "Hyderabad, Telangana",
		// 			description:
		// 				"Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
		// 			color: "#4285F4",
		// 		},
		// 		{
		// 			title: "Microsoft Student Partner",
		// 			company: "Microsoft",
		// 			company_url: "https://www.microsoft.com/",
		// 			logo_path: "microsoft_logo.png",
		// 			duration: "Aug 2019 - May 2020",
		// 			location: "Hyderabad, Telangana",
		// 			description:
		// 				"Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
		// 			color: "#D83B01",
		// 		},
		// 		{
		// 			title: "Mozilla Campus Captain",
		// 			company: "Mozilla",
		// 			company_url: "https://www.mozilla.org/",
		// 			logo_path: "mozilla_logo.png",
		// 			duration: "Oct 2019 - May 2020",
		// 			location: "Kurnool, Andhra Pradesh",
		// 			description:
		// 				"My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
		// 			color: "#000000",
		// 		},
		// 		{
		// 			title: "Developer Students Club Member",
		// 			company: "DSC IIITDM Kurnool",
		// 			company_url:
		// 				"https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
		// 			logo_path: "dsc_logo.png",
		// 			duration: "Jan 2018 - May 2020",
		// 			location: "Kurnool, Andhra Pradesh",
		// 			description:
		// 				"We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
		// 			color: "#0C9D58",
		// 		},
		// 		{
		// 			title: "Developer Program Member",
		// 			company: "Github",
		// 			company_url: "https://github.com/",
		// 			logo_path: "github_logo.png",
		// 			duration: "July 2019 - PRESENT",
		// 			location: "Work From Home",
		// 			description:
		// 				"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
		// 			color: "#181717",
		// 		},
		// 	],
		// },
	],
};

// Projects Page
const projectsHeader = {
	title: "Projects",
	description:
		"My projects are mostly hobby projects which I do to learn & develop new technologies and to improve my skill set",
	avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
	contactSection: {
		title: "Contact Me",
		profile_image_path: "newProfilePic.png",
		description:
			"Feel free to reach out to me on any of the below mentioned media for colloboration or help related to JavaScript, React, React-Native, NodeJs and MongoDb",
	},
	blogSection: {
		title: "Blogs",
		subtitle:
			"For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
		link: "https://ashutoshhathidara.wordpress.com",
		avatar_image_path: "blogs_image.svg",
	},
	addressSection: {
		title: "Address",
		subtitle:
			"Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
		avatar_image_path: "address_image.svg",
		location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
	},
	phoneSection: {
		title: "Phone Number",
		subtitle: "+91 8320758513",
	},
};

export {
	settings,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	experience,
	projectsHeader,
	contactPageData,
};
