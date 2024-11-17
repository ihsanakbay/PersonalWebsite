/* empty css                                 */
import { c as createComponent, r as renderTemplate, a as createAstro, b as addAttribute, h as renderComponent, y as renderHead, z as renderSlot, m as maybeRenderHead, F as Fragment } from '../chunks/astro/server_CxL1CRUk.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const basics = {
	name: "İhsan Akbay",
	label: "iOS Developer",
	image: "/me_avatar.png",
	email: "ihsankabaydev@gmail.com",
	phone: "+90 (546) 859 5907",
	url: "https://ihsanakbay.dev",
	summary: "I'm a Software Developer who loves to build experiences that help people do what they couldn't do before. I feel fulfilled when using my skills to do so. Currently, I work as an iOS Developer at Enqura. In my previous roles, I specialized in developing iOS Applications\nand Backend Services. I graduated with a degree in Engineering, which has provided me with a solid foundation\nin problem-solving and innovation. I firmly believe that being an engineer is not only a profession but also a lifelong hobby.",
	theme: "default",
	location: {
		city: "Ankara",
		region: "Turkey"
	},
	profiles: [
		{
			network: "LinkedIn",
			username: "ihsanakbay",
			url: "https://linkedin.com/in/ihsanakbay"
		},
		{
			network: "GitHub",
			username: "ihsanakbay",
			url: "https://github.com/ihsanakbay"
		}
	]
};
const work = [
	{
		name: "Enqura Information Technologies",
		position: "iOS Developer",
		location_type: "Remote",
		location: "Ankara, Turkey",
		url: "https://www.enqura.com/",
		startDate: "2024-06",
		endDate: null,
		summary: "",
		responsibilities: [
			"Collaborated with senior developers to design and implement web applications using modern JavaScript frameworks.",
			"Assisted in debugging and optimizing front-end code to ensure smooth user experiences.",
			"Participated in code reviews and contributed to improving coding standards within the team."
		],
		skills: [
			"Swift",
			"SwiftUI",
			"UIKit"
		]
	},
	{
		name: "Etiya Information Technologies",
		position: "Software Developer",
		location_type: "Hybrid",
		location: "Ankara, Turkey",
		url: "https://innovativesolutions.com",
		startDate: "2023-11",
		endDate: "2024-05",
		summary: "",
		responsibilities: [
			"Worked as a Senior Java Backend Developer for Videotron (videotron.com), one\nof Canada's top telecom companies."
		],
		skills: [
			"Java",
			"Spring Boot",
			"SQL",
			"Bitbucket"
		]
	},
	{
		name: "Yapı Kredi Technology",
		position: "iOS Developer",
		location_type: "Remote",
		location: "Kocaeli, Turkey",
		startDate: "2023-03",
		endDate: "2023-10",
		summary: "",
		responsibilities: [
			"Developed and maintained iOS applications using Swift, UIKit, SwiftUI, and 3rd-\nparty libraries.",
			"MVVM, MVVM-C & VIPER architectures were used.",
			"Participated in the AppStore submission processes, ensuring compliance with\nApple's guidelines.",
			"Utilized Figma and Zeplin to collaborate closely with the UI/UX design team,\nensuring seamless integration of design elements into iOS applications.",
			"Collaborated with cross-functional teams in an Agile environment, contributing to\ndaily Stand-up meetings, Sprint Planning, and Retrospectives."
		],
		skills: [
			"Swift",
			"UIKit",
			"SwiftUI"
		]
	},
	{
		name: "Polifarma Pharmaceutical Industry & Trade Inc.",
		position: "Software Developer",
		location_type: "On-Site",
		location: "Tekirdağ, Turkey",
		startDate: "2019-04",
		endDate: "2023-03",
		summary: "",
		responsibilities: [
			"Developed and maintained iOS applications using Swift, UIKit, SwiftUI, and 3rd-\nparty libraries without using Storyboards.",
			"UI/UX Design tools such as Zeplin and Sketch were used.",
			"Developed Backend Services with Java, Spring Boot, and Go, connected with SAP."
		],
		skills: [
			"Swift",
			"UIKit",
			"SwiftUI",
			"Go",
			"Java",
			"SAP"
		]
	}
];
const education = [
	{
		institution: "Inonu University",
		url: "https://stateuniversity.edu",
		area: "Electrical & Electronics Engineering, BSc.",
		studyType: "Bachelor",
		startDate: "2013",
		endDate: "2018",
		score: "",
		courses: [
			"CS101 - Introduction to Computer Science",
			"CS102 - Data Structures"
		]
	}
];
const certificates = [
	{
		name: "Agile Awareness, Scrum and Basic SAFe",
		date: "2024-01",
		issuer: "Projera",
		url: ""
	},
	{
		name: "Create the User Interface with SwiftUI",
		date: "2022-12",
		issuer: "Meta",
		url: "https://www.coursera.org/account/accomplishments/certificate/ZRMFSB7CXTNT"
	},
	{
		name: "Introduction to iOS Mobile Application Development",
		date: "2022-12",
		issuer: "Meta",
		url: "https://www.coursera.org/account/accomplishments/certificate/WVFEXJZ292UF"
	},
	{
		name: "Programming Fundamentals in Swift",
		date: "2022-12",
		issuer: "Meta",
		url: "https://www.coursera.org/account/accomplishments/certificate/FDMMJ8D67SES"
	}
];
const skills = [
	{
		name: "Swift",
		level: "",
		keywords: [
			"iOS"
		]
	},
	{
		name: "SwiftUI",
		level: "",
		keywords: [
			""
		]
	},
	{
		name: "UIKit",
		level: "",
		keywords: [
			"iOS"
		]
	},
	{
		name: "Golang",
		level: "",
		keywords: [
			"Backend Development"
		]
	},
	{
		name: "Java",
		level: "",
		keywords: [
			""
		]
	},
	{
		name: "SpringBoot",
		level: "",
		keywords: [
			""
		]
	},
	{
		name: "Figma",
		level: "",
		keywords: [
			"Design",
			"UI"
		]
	},
	{
		name: "Zeplin",
		level: "Intermediate",
		keywords: [
			"Design",
			"UI"
		]
	},
	{
		name: "Sketch",
		level: "",
		keywords: [
			"Design",
			"UI"
		]
	},
	{
		name: "Git",
		level: "",
		keywords: [
			"Version Control",
			"Collaboration",
			"Source Code"
		]
	},
	{
		name: "Python",
		level: "",
		keywords: [
			""
		]
	},
	{
		name: "Firebase",
		level: "",
		keywords: [
			""
		]
	},
	{
		name: "Postgresql",
		level: "",
		keywords: [
			""
		]
	}
];
const projects = [
	{
		name: "ExpenseMate",
		isActive: true,
		description: "Expense Tracker App",
		highlights: [
			"Built with Swift and SwiftUI"
		],
		url: "https://bit.ly/4hOtP2P"
	},
	{
		name: "Türk Ticaret Bankası",
		isActive: true,
		description: "iOS Mobile App",
		highlights: [
			"Built with Swift and SwiftUI"
		],
		url: ""
	},
	{
		name: "Hepiyi Sigorta",
		isActive: true,
		description: "iOS Mobile App",
		highlights: [
			"Built with Swift and SwiftUI"
		],
		url: "https://apps.apple.com/tr/app/hepiyi-sigorta/id6451968275"
	},
	{
		name: "Koç Office Free",
		isActive: true,
		description: "Koç Holding Office Reservation Platform",
		highlights: [
			"Built with Swift and SwiftUI"
		],
		url: "https://apps.apple.com/tr/app/ko%C3%A7-office-free/id1571499394"
	},
	{
		name: "Dinamik",
		isActive: true,
		description: "Yapı Kredi HR Mobile App",
		highlights: [
			"Built with Swift and SwiftUI"
		],
		url: "https://play.google.com/store/apps/details?id=com.ykb.dinamik&hl=tr&pli=1"
	},
	{
		name: "ESV Mobil",
		isActive: true,
		description: "Yapı Kredi Bank Retirement Fund Foundation",
		highlights: [
			"Built with Swift and SwiftUI"
		],
		url: "https://apps.apple.com/tr/app/esv-mobil/id1609917748"
	}
];

const $$Vengeance = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- 
                I’m Vengeance
          .  .
          |\\_|\\
          | a_a\\
          | | "]
      ____| '-\\___
     /.----.___.-'\\
    //        _    \\
   //   .-. (~v~) /|
  |'|  /\\:  .--  / \\
 // |-/  \\_/____/\\/~|
|/  \\ |  []_|_|_] \\ |
| \\  | \\ |___   _\\ ]_}
| |  '-' /   '.'  |
| |     /    /|:  | 
| |     |   / |:  /\\
| |     /  /  |  /  \\
| |    |  /  /  |    \\
\\ |    |/\\/  |/|/\\    \\
 \\|\\ |\\|  |  | / /\\/\\__\\
  \\ \\| | /   | |__
       / |   |____)
       |_/
  -->`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/layouts/Vengeance.astro", void 0);

const $$Astro$5 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  const { image, summary, url, theme } = basics;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><title>${title}</title><meta name="description"${addAttribute(summary, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="preload" as="image"${addAttribute(image, "href")}><meta property="og:url"${addAttribute(url, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(summary, "content")}><meta property="og:image" content=""><meta name="twitter:card" content="summary_large_image"><meta property="twitter:domain"${addAttribute(url.split("//")[1] ?? "", "content")}><meta property="twitter:url"${addAttribute(url, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(summary, "content")}><meta name="twitter:image" content=""><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Itim"><link rel="stylesheet" href="/themes/themes.css">${renderComponent($$result, "Vengeance", $$Vengeance, {})}${renderHead()}</head> <body${addAttribute(theme, "data-theme")} class="relative bg-skin-fill"> <div class="absolute top-0 -z-10 h-full w-full print:hidden"> <div class="bg-skin-hue/10 absolute bottom-auto left-[20%] right-auto top-0 h-[200px] w-[200px] -translate-x-[30%] translate-y-[20%] rounded-full blur-[80px] invert-0 dark:bg-white/5"></div> </div> ${renderSlot($$result, $$slots["default"])}  </body> </html>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Section;
  const { className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["flex flex-col gap-4 print:gap-0", className], "class:list")}> ${title && renderTemplate`<h3 class="relative flex w-full items-center gap-3 pb-4 text-3xl print:gap-1 print:pb-0 print:text-xl">${title}</h3>`} ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/components/Section.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const { summary } = basics;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p> ${summary} </p> ` })}`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/components/sections/About.astro", void 0);

const $$Astro$3 = createAstro();
const $$Education = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Education;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "Education" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="space-y-4 py-3 print:space-y-0"> ${education.map(({ institution, startDate, endDate, area, url }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
    const years = `${startYear} - ${endYear}`;
    return renderTemplate`<div class="flex items-baseline"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 hidden h-5 w-5 self-start md:inline-block print:hidden"> <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path> <path d="M22 10v6"></path> <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path> </svg> <div class="relative w-full items-baseline justify-between gap-2"> <h3 class="mr-6 items-baseline gap-x-2 gap-y-0.5 font-medium"> <a target="_blank" class="hover:text-skin-hue group flex items-center gap-[6px] decoration-dotted underline-offset-[5px] hover:underline"${addAttribute(url, "href")}> ${institution} </a> </h3> <div class="text-sm text-skin-muted">${area}</div> <time class="right-0 top-0 text-xs text-skin-muted md:absolute md:block">${years}</time> </div> </div>`;
  })} </ul> ${certificates.length > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h4>Certificates</h4> <ul class="space-y-4 py-3 print:space-y-0"> ${certificates.map(({ name, date, issuer, url }) => {
    const certificateYear = new Date(date).getFullYear();
    return renderTemplate`<div class="flex items-baseline"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 hidden h-5 w-5 self-start md:inline-block print:hidden"> <path d="M15 12h-5"></path> <path d="M15 8h-5"></path> <path d="M19 17V5a2 2 0 0 0-2-2H4"></path> <path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"></path> </svg> <div class="relative w-full items-baseline justify-between gap-2"> <h3 class="mr-6 items-baseline gap-x-2 gap-y-0.5 font-medium"> <a class="hover:text-skin-hue group flex items-center gap-[6px] text-skin-base decoration-dotted underline-offset-[5px] hover:underline"${addAttribute(url, "href")} target="_blank"> ${name} </a> </h3> <div class="text-sm text-skin-muted">${issuer}</div> <time class="right-0 top-0 text-xs text-skin-muted md:absolute md:block">${certificateYear}</time> </div> </div>`;
  })} </ul> ` })}`}` })}`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/components/sections/Education.astro", void 0);

const $$Html = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/html.astro", void 0);

const $$Css = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/css.astro", void 0);

const $$Javascript = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path><path d="M7.5 8h3v8l-2 -1"></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/javascript.astro", void 0);

const $$Type = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"></path><path d="M9 12h4"></path><path d="M11 12v6"></path><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/type.astro", void 0);

const $$React = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/react.astro", void 0);

const $$Node = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0"></path><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/node.astro", void 0);

const $$Sql = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"></path><path d="M9 7h.01"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/sql.astro", void 0);

const $$Git = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path><path d="M12 15v-6"></path><path d="M15 11l-2 -2"></path><path d="M11 7l-1.9 -1.9"></path><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/git.astro", void 0);

const $$GitHub = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/GitHub.astro", void 0);

const $$Swift = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M729.173 841.387c-100.693 58.026-238.506 64-378.026 4.266A589.099 589.099 0 0 1 85.333 618.667c28.587 23.466 62.294 42.666 98.134 59.733 143.786 66.987 287.146 62.293 388.266 0-143.786-110.507-266.24-254.293-357.12-371.627-19.2-19.2-33.28-43.093-47.786-64.426 353.28 258.133 337.92 323.84 102.826-43.094C478.293 410.027 672 529.493 672 529.493c6.827 3.84 10.667 6.827 15.36 9.387 4.267-10.667 8.107-21.76 11.093-33.28 33.707-121.6-4.693-261.12-88.746-375.893C803.84 247.04 919.04 467.2 870.827 651.947c-1.28 4.693-2.56 9.386-2.134 16.64 95.574 120.746 69.974 246.613 57.6 222.72-51.626-101.974-148.48-70.4-197.12-49.92z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/swift.astro", void 0);

const $$Swiftui = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 50 50" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M14.182 5C9.122 5 5 9.122 5 14.182v21.636C5 40.878 9.122 45 14.182 45h21.636C40.878 45 45 40.878 45 35.818V14.182C45 9.122 40.878 5 35.818 5H14.182zm0 2h21.636A7.166 7.166 0 0 1 43 14.182v21.636A7.166 7.166 0 0 1 35.818 43H14.182A7.166 7.166 0 0 1 7 35.818V14.182A7.166 7.166 0 0 1 14.182 7zm12.816 6.033c2.078 4.156 3.283 6.5 2.307 12.227C27.079 23.774 18.855 17.152 17 15c1.336 2.375 5.18 7.586 6.516 8.922-2.375-1.632-10.02-7.645-10.02-7.645s6.532 9.871 12.024 13.211c-2.078.668-6.59 3.398-14.457-1.425 2.003 2.745 5.55 8.255 14.234 7.736 3.043-.148 4.896-1.113 6.603-1.781 1.707-.668 3.34-.595 4.75 1.93.297-2.302.371-4.454-2.004-6.903 0 0 2.348-8.95-7.648-16.012z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/swiftui.astro", void 0);

const $$Kotlin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M55.467 1024 537.6 533.333 1024 1024zM0 0h512L0 533.333zm571.733 0L0 597.333V1024l512-512L1024 0z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/kotlin.astro", void 0);

const $$Flutter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M610.73 0 98.134 512 256 669.867 925.184.512H611.285L610.731 0zm.598 472.405L335.232 747.904l276.053 276.053h314.582L650.24 747.99l275.627-275.626H611.37z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/flutter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Experience;
  const SKILLS_ICONS = {
    HTML: $$Html,
    CSS: $$Css,
    JavaScript: $$Javascript,
    TypeScript: $$Type,
    React: $$React,
    Node: $$Node,
    MySQL: $$Sql,
    Git: $$Git,
    GitHub: $$GitHub,
    Swift: $$Swift,
    SwiftUI: $$Swiftui,
    Kotlin: $$Kotlin,
    Flutter: $$Flutter
  };
  return renderTemplate(_a || (_a = __template(["", ' <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/collapse@3.x.x/dist/cdn.min.js"><\/script> <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script> '])), renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "Experience", "data-astro-cid-ghubstuj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="flex flex-col" data-astro-cid-ghubstuj> ${work.map(({ name, startDate, endDate, position, summary, responsibilities, url, skills, location, location_type }) => {
    const startYear = new Date(startDate).getFullYear();
    const startMonth = new Date(startDate).getMonth();
    const endYear = endDate != null ? new Date(endDate).getFullYear() : "Present";
    const endMonth = endDate != null ? new Date(endDate).getMonth() : "";
    const start = `${startMonth}.${startYear}`;
    const end = `${endMonth}${endMonth == "" ? "" : "."}${endYear}`;
    return renderTemplate`<li class="relative print:py-2" data-astro-cid-ghubstuj> <div class="group relative grid pb-1 print:pb-0 transition-all print:grid-cols-1 print:gap-1 sm:grid-cols-12 sm:gap-8 md:gap-6 lg:hover:!opacity-100 " data-astro-cid-ghubstuj> <header class="relative mt-1 text-xs font-semibold sm:col-span-2" data-astro-cid-ghubstuj> <time${addAttribute(startDate, "datetime")}${addAttribute(startDate, "data-title")} data-astro-cid-ghubstuj>${start}</time>-<time${addAttribute(endDate, "datetime")}${addAttribute(endDate, "data-title")} data-astro-cid-ghubstuj>${end}</time> </header> <div class="relative flex flex-col pb-6 print:pb-0 before:-ml-6 sm:col-span-10 before:w-px print:before:hidden before:absolute before:bg-skin-muted before:h-full before:mt-2" data-astro-cid-ghubstuj> <div class="absolute w-2 h-2 bg-skin-muted rounded-full mt-2 -translate-x-[1.71rem] ring print:hidden ring-skin-fill" data-astro-cid-ghubstuj></div> <h3 data-astro-cid-ghubstuj> <div class="inline-flex items-center text-lg print:text-base leading-tight group/link focus-visible:text-amber-500" aria-label="{position} - {company}" data-astro-cid-ghubstuj> <span data-astro-cid-ghubstuj>${position} <span data-astro-cid-ghubstuj>@</span> ${url ? renderTemplate`<a class="text-skin-hue"${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-ghubstuj>${name}</a>` : renderTemplate`<span data-astro-cid-ghubstuj>${name}</span>`} ${url && renderTemplate`<span class="inline-block text-skin-hue print:[&>svg]:hidden" data-astro-cid-ghubstuj> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="inline-block w-4 h-4 ml-1 transition-transform translate-y-px shrink-0 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" aria-hidden="true" data-astro-cid-ghubstuj> <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" data-astro-cid-ghubstuj></path> </svg> </span>`} </span> </div> </h3> ${(location || location_type) && renderTemplate`<div class="text-xs text-skin-muted" data-astro-cid-ghubstuj> ${location} ${location && location_type && "-"} ${location_type} </div>`} <div class="mt-4  print:gap-0 flex flex-col gap-4 print:text-xs text-sm" x-data="{ expanded: false }" data-astro-cid-ghubstuj> ${summary && renderTemplate`<div class="flex flex-col gap-1" data-astro-cid-ghubstuj> <h4 data-astro-cid-ghubstuj>Summary:</h4> <ul class="text-skin-muted [&>li]:ml-4 flex list-disc flex-col gap-2" data-astro-cid-ghubstuj> ${Array.isArray(summary) ? summary.map((item) => ({ item })) : renderTemplate`<li data-astro-cid-ghubstuj>${summary}</li>`} </ul> </div>`} ${responsibilities && renderTemplate`<div class="md:after:from-skin-hue dark:md:after:to-skin-hue/0  flex relative flex-col max-sm:!h-auto print:!h-auto gap-4 print:gap-2 md:after:bg-gradient-to-t md:after:absolute md:after:bottom-0 md:after:w-full print:after:hidden md:after:h-12 md:after:content-[''] " :class="expanded ? 'after:hidden' : ''" x-show="expanded" x-collapse.min.50px data-astro-cid-ghubstuj> ${responsibilities && renderTemplate`<div class="flex flex-col gap-1" data-astro-cid-ghubstuj> <h4 data-astro-cid-ghubstuj>Responsibilities:</h4> <ul class="text-skin-muted [&>li]:ml-4 flex list-disc flex-col gap-2" data-astro-cid-ghubstuj> ${responsibilities.map((responsibility) => renderTemplate`<li data-astro-cid-ghubstuj>${responsibility}</li>`)} </ul> </div>`} </div>
                
                <button @click="expanded = ! expanded" class="print:hidden group/more w-fit cursor-pointer items-center justify-center gap-1.5 text-xs underline text-skin-muted transition-all hover:text-skin-base flex" data-astro-cid-ghubstuj> <span x-text="expanded ? 'Show less' : 'Show more'" data-astro-cid-ghubstuj>Show more</span> <svg class="w-4 h-4 group-hover/more:translate-y-0.5 duration-200 ease-out" :class="{ 'rotate-180': expanded }" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ghubstuj><polyline points="6 9 12 15 18 9" data-astro-cid-ghubstuj></polyline></svg> </button>


                <ul class="flex print:hidden flex-wrap gap-2" aria-label="Technologies used" data-astro-cid-ghubstuj> ${skills && skills.map((skill) => {
      const iconName = skill === "Next.js" ? "Next" : skill;
      const Icon = SKILLS_ICONS[iconName];
      return renderTemplate`<li class="bg-skin-button-accent/20 border-skin-hue/20 text-skin-hue print:p-0 print:bg-transparent print:text-zinc-800 flex gap-1 items-center border-solid print:border-none border rounded-md px-2 py-0.5 text-xs" data-astro-cid-ghubstuj> ${Icon && renderTemplate`${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-ghubstuj": true })}`} <span data-astro-cid-ghubstuj>${skill}</span> </li>`;
    })} </ul>`} </div> </div> </div> </li>`;
  })} </ul> ` }));
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/components/sections/Experience.astro", void 0);

const $$Mail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail size-4"><title>Mail Icon</title><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/Mail.astro", void 0);

const $$Phone = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><title>Phone Icon</title><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/Phone.astro", void 0);

const $$X = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/X.astro", void 0);

const $$LinkedIn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/LinkedIn.astro", void 0);

const $$WorldMap = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="10"></circle> <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path> </svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/WorldMap.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const { name, label, image, location, profiles, phone, email } = basics;
  const { city, region } = location;
  const SOCIAL_ICONS = {
    GitHub: $$GitHub,
    LinkedIn: $$LinkedIn,
    X: $$X
  };
  const linkedInfo = profiles.find(({ network }) => network === "LinkedIn");
  const linkedUrl = linkedInfo?.url;
  const printInfo = [email, phone, linkedUrl].filter(Boolean).join(" \u2022 ");
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col-reverse gap-8" data-astro-cid-anhloy43> <div class="info" data-astro-cid-anhloy43> <h1 data-astro-cid-anhloy43>${name}</h1> <h2 data-astro-cid-anhloy43>${label}</h2> <div class="flex items-center gap-2 pt-2 text-sm text-skin-muted" data-astro-cid-anhloy43> ${renderComponent($$result2, "WorldMap", $$WorldMap, { "data-astro-cid-anhloy43": true })} ${city}, ${region} </div> <footer class="print" data-astro-cid-anhloy43> ${printInfo} </footer> <footer class="no-print" data-astro-cid-anhloy43> ${renderTemplate`<div${addAttribute(`{ copyText: '${email}', copyNotification: false, copyToClipboard() { navigator.clipboard.writeText(this.copyText); this.copyNotification = true; let that = this; setTimeout(function(){ that.copyNotification = false; }, 3000); } }`, "x-data")} class="relative flex items-center" data-astro-cid-anhloy43> <div x-show="copyNotification" x-transition:enter="transition ease-out duration-300" x-transition:enter-start="opacity-0 translate-y-3" x-transition:enter-end="opacity-100 translate-x-0" x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 translate-x-0" x-transition:leave-end="opacity-0 translate-y-2" style="display:none;" class="absolute left-0" x-cloak data-astro-cid-anhloy43> <div class="-mt-1.5 flex h-7 -translate-y-full items-center rounded border-r border-green-500 bg-green-500 px-3 text-xs text-white" data-astro-cid-anhloy43> <span class="!text-white" data-astro-cid-anhloy43>Copied!</span> <div class="absolute left-0 bottom-0 inline-block h-full translate-x-full translate-y-5 overflow-hidden" data-astro-cid-anhloy43> <div class="h-3 w-3 origin-center rotate-45 transform border border-transparent bg-green-500" data-astro-cid-anhloy43></div> </div> </div> </div> <button @click="copyToClipboard();" class="group flex h-8 w-9 cursor-pointer items-center justify-center rounded-md text-skin-muted hover:bg-skin-button-accent hover:text-skin-inverted [&>span]:hover:text-skin-inverted" data-astro-cid-anhloy43> <svg x-show="copyNotification" class="h-4 w-4 stroke-current text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" x-cloak data-astro-cid-anhloy43> <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" data-astro-cid-anhloy43></path> </svg> <span x-show="!copyNotification" data-astro-cid-anhloy43> ${renderComponent($$result2, "Mail", $$Mail, { "data-astro-cid-anhloy43": true })} </span> </button> </div>`} ${renderTemplate`<a${addAttribute(`tel:${phone}`, "href")}${addAttribute(`Call ${name} at ${phone}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Phone", $$Phone, { "data-astro-cid-anhloy43": true })} </a>`} ${profiles.map(({ network, url }) => {
    const Icon = SOCIAL_ICONS[network];
    return renderTemplate`<a${addAttribute(url, "href")}${addAttribute(`Visit ${name} profile on ${network}`, "title")} target="_blank" rel="noopener noreferrer" data-astro-cid-anhloy43> ${renderComponent($$result2, "Icon", Icon, { "data-astro-cid-anhloy43": true })} </a>`;
  })} <div class="no-print footer-button max-sm:hidden group flex h-8 w-9 cursor-pointer items-center justify-center rounded-md text-skin-hue hover:bg-skin-button-accent hover:text-skin-inverted [&>span]:hover:text-skin-inverted" data-astro-cid-anhloy43> <svg xmlns="http://www.w3.org/2000/svg" class="icon h-6 w-6 icon-tabler icon-tabler-command" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-anhloy43> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-anhloy43></path> <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" data-astro-cid-anhloy43></path> </svg> </div> </footer> </div> <figure class="print:hidden w-fit relative" data-astro-cid-anhloy43> <img class="shadow-lg shadow-skin-hues"${addAttribute(image, "src")}${addAttribute(name, "alt")} data-astro-cid-anhloy43> <div class="pointer-events-none absolute -inset-2" data-astro-cid-anhloy43> <div class="absolute -inset-y-8 right-0 w-px bg-skin-hue/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" data-astro-cid-anhloy43></div> <div class="absolute -inset-y-8 left-0 w-px bg-skin-hue/50 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]" data-astro-cid-anhloy43></div> <div class="absolute -inset-x-8 bottom-0 h-px bg-skin-hue/50 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]" data-astro-cid-anhloy43></div> <div class="absolute -inset-x-8 top-0 h-px bg-skin-hue/50 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]" data-astro-cid-anhloy43></div> </div> </figure> </div> ` })}  `;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/components/sections/Hero.astro", void 0);

const $$Arrow = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd"></path> </svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/Arrow.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "Projects", "data-astro-cid-44zkpkd5": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 gap-3 md:grid-cols-2 print:flex print:flex-col" data-astro-cid-44zkpkd5> ${projects.map(({ url, description, highlights, name, isActive }) => {
    return renderTemplate`<div role="contentinfo" class="grid-span-1 ring-skin-muted relative flex flex-col rounded-md bg-skin-button-muted/50 p-5 shadow-sm ring-1" data-astro-cid-44zkpkd5> <div class="flex items-center justify-between space-x-[10px]" data-astro-cid-44zkpkd5> <div class="flex items-center gap-2" data-astro-cid-44zkpkd5> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder size-4" data-astro-cid-44zkpkd5> <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" data-astro-cid-44zkpkd5></path> </svg> <div class="flex items-center gap-[6px]" data-astro-cid-44zkpkd5> ${isActive ? renderTemplate`<a class="hover:text-skin-hue group flex items-center gap-[6px] text-lg decoration-dotted underline-offset-[5px] hover:underline"${addAttribute(url, "href")}${addAttribute(`Ver ${name}`, "title")} target="_blank" data-astro-cid-44zkpkd5> ${name} <span class="text-skin-hue transition ease-linear group-hover:-translate-y-0.5 group-hover:translate-x-0.5" data-astro-cid-44zkpkd5> ${renderComponent($$result2, "Arrow", $$Arrow, { "data-astro-cid-44zkpkd5": true })} </span> </a>` : renderTemplate`<span data-astro-cid-44zkpkd5>${name}</span>`} </div> </div> </div> <p class="py-3 text-sm text-skin-base" data-astro-cid-44zkpkd5>${description}</p> <ul class="mt-1 text-sm text-skin-muted" data-astro-cid-44zkpkd5> ${highlights.map((highlight) => {
      return renderTemplate`<li data-astro-cid-44zkpkd5>${highlight}</li>`;
    })} </ul> </div>`;
  })} </div> ` })} `;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/components/sections/Projects.astro", void 0);

const $$Tailwind = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/tailwind.astro", void 0);

const $$Next = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="16" height="16" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993"></path><path d="M15 12v-3"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/next.astro", void 0);

const $$Figma = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/Figma.astro", void 0);

const $$Gitlab = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gitlab"><path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/Gitlab.astro", void 0);

const $$Firebase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="firebase"> <path d="M20.5 19.364L18.296 5.365c-.044-.259-.261-.453-.524-.453-.146 0-.278.06-.375.158L3.5 19.364l7.69 4.428C11.413 23.923 11.681 24 11.966 24c.284 0 .551-.077.781-.211L20.5 19.364 20.5 19.364zM7.37.286C7.28.116 7.105 0 6.902 0 6.637 0 6.417.199 6.377.461L4.063 15.673 9.86 5.06 7.371.289 7.37.286zM14.251 7.148L12.47 3.666c-.091-.174-.267-.29-.47-.29-.203 0-.379.116-.469.287L11.53 3.666l-7.82 14.318L14.251 7.148z"></path> </svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/firebase.astro", void 0);

const $$Go = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="go"> <path d="M108.2 64.8c-.1-.1-.2-.2-.4-.2l-.1-.1c-.1-.1-.2-.1-.2-.2l-.1-.1c-.1 0-.2-.1-.2-.1l-.2-.1c-.1 0-.2-.1-.2-.1l-.2-.1c-.1 0-.2-.1-.2-.1-.1 0-.1 0-.2-.1l-.3-.1c-.1 0-.1 0-.2-.1l-.3-.1h-.1l-.4-.1h-.2c-.1 0-.2 0-.3-.1h-2.3c-.6-13.3.6-26.8-2.8-39.6 12.9-4.6 2.8-22.3-8.4-14.4-7.4-6.4-17.6-7.8-28.3-7.8-10.5.7-20.4 2.9-27.4 8.4-2.8-1.4-5.5-1.8-7.9-1.1v.1c-.1 0-.3.1-.4.2-.1 0-.3.1-.4.2h-.1c-.1 0-.2.1-.4.2h-.1l-.3.2h-.1l-.3.2h-.1l-.3.2s-.1 0-.1.1l-.3.2s-.1 0-.1.1l-.3.2s-.1 0-.1.1l-.3.2-.1.1c-.1.1-.2.1-.2.2l-.1.1-.2.2-.1.1c-.1.1-.1.2-.2.2l-.1.1c-.1.1-.1.2-.2.2l-.1.1c-.1.1-.1.2-.2.2l-.1.1c-.1.1-.1.2-.2.2l-.1.1c-.1.1-.1.2-.2.2l-.1.1-.1.3s0 .1-.1.1l-.1.3s0 .1-.1.1l-.1.3s0 .1-.1.1l-.1.3s0 .1-.1.1c.4.3.4.4.4.4v.1l-.1.3v.1c0 .1 0 .2-.1.3v3.1c0 .1 0 .2.1.3v.1l.1.3v.1l.1.3s0 .1.1.1l.1.3s0 .1.1.1l.1.3s0 .1.1.1l.2.3s0 .1.1.1l.2.3s0 .1.1.1l.2.3.1.1.3.3.3.3h.1c1 .9 2 1.6 4 2.2v-.2c-4.2 12.6-.7 25.3-.5 38.3-.6 0-.7.4-1.7.5h-.5c-.1 0-.3 0-.5.1-.1 0-.3 0-.4.1l-.4.1h-.1l-.4.1h-.1l-.3.1h-.1l-.3.1s-.1 0-.1.1l-.3.1-.2.1c-.1 0-.2.1-.2.1l-.2.1-.2.1c-.1 0-.2.1-.2.1l-.2.1-.4.3c-.1.1-.2.2-.3.2l-.4.4-.1.1c-.1.2-.3.4-.4.5l-.2.3-.3.6-.1.3v.3c0 .5.2.9.9 1.2.2 3.7 3.9 2 5.6.8l.1-.1c.2-.2.5-.3.6-.3h.1l.2-.1c.1 0 .1 0 .2-.1.2-.1.4-.1.5-.2.1 0 .1-.1.1-.2l.1-.1c.1-.2.2-.6.2-1.2l.1-1.3v1.8c-.5 13.1-4 30.7 3.3 42.5 1.3 2.1 2.9 3.9 4.7 5.4h-.5c-.2.2-.5.4-.8.6l-.9.6-.3.2-.6.4-.9.7-1.1 1c-.2.2-.3.4-.4.5l-.4.6-.2.3c-.1.2-.2.4-.2.6l-.1.3c-.2.8 0 1.7.6 2.7l.4.4h.2c.1 0 .2 0 .4.1.2.4 1.2 2.5 3.9.9 2.8-1.5 4.7-4.6 8.1-5.1l-.5-.6c5.9 2.8 12.8 4 19 4.2 8.7.3 18.6-.9 26.5-5.2 2.2.7 3.9 3.9 5.8 5.4l.1.1.1.1.1.1.1.1s.1 0 .1.1c0 0 .1 0 .1.1 0 0 .1 0 .1.1h2.1000000000000005s.1 0 .1-.1h.1s.1 0 .1-.1h.1s.1 0 .1-.1c0 0 .1 0 .1-.1l.1-.1s.1 0 .1-.1l.1-.1h.1l.2-.2.2-.1h.1l.1-.1h.1l.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1.1-.1v-.1s0-.1.1-.1v-.1s0-.1.1-.1v-.1s0-.1.1-.1v-1.4000000000000001s-.3 0-.3-.1l-.3-.1v-.1l.3-.1s.2 0 .2-.1l.1-.1v-2.1000000000000005s0-.1-.1-.1v-.1s0-.1-.1-.1v-.1s0-.1-.1-.1c0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1 0 0 0-.1-.1-.1l-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1v-.1l-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1c2-1.9 3.8-4.2 5.1-6.9 5.9-11.8 4.9-26.2 4.1-39.2h.1c.1 0 .2.1.2.1h.30000000000000004s.1 0 .1.1h.1s.1 0 .1.1l.2.1c1.7 1.2 5.4 2.9 5.6-.8 1.6.6-.3-1.8-1.3-2.5zm-72.2-41.8c-3.2-16 22.4-19 23.3-3.4.8 13-20 16.3-23.3 3.4zm36.1 15c-1.3 1.4-2.7 1.2-4.1.7 0 1.9.4 3.9.1 5.9-.5.9-1.5 1-2.3 1.4-1.2-.2-2.1-.9-2.6-2l-.2-.1c-3.9 5.2-6.3-1.1-5.2-5-1.2.1-2.2-.2-3-1.5-1.4-2.6.7-5.8 3.4-6.3.7 3 8.7 2.6 10.1-.2 3.1 1.5 6.5 4.3 3.8 7.1zm-7-17.5c-.9-13.8 20.3-17.5 23.4-4 3.5 15-20.8 18.9-23.4 4zM41.7 17c-1.9 0-3.5 1.7-3.5 3.8 0 2.1 1.6 3.8 3.5 3.8s3.5-1.7 3.5-3.8c0-2.1-1.5-3.8-3.5-3.8zm1.6 5.7c-.5 0-.8-.4-.8-1 0-.5.4-1 .8-1 .5 0 .8.4.8 1 0 .5-.3 1-.8 1zM71.1 16.1c-1.9 0-3.4 1.7-3.4 3.8 0 2.1 1.5 3.8 3.4 3.8s3.4-1.7 3.4-3.8c0-2.1-1.5-3.8-3.4-3.8zm1.6 5.6c-.4 0-.8-.4-.8-1 0-.5.4-1 .8-1s.8.4.8 1-.4 1-.8 1z"></path> </svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/go.astro", void 0);

const $$Java = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 24" id="java"> <path d="M5.701 18.561s-.918.534.653.714c.575.085 1.239.134 1.913.134 1.084 0 2.138-.125 3.149-.363l-.093.018c.374.228.809.445 1.262.624l.059.02c-4.698 2.014-10.633-.117-6.942-1.148zM5.127 15.933s-1.029.762.542.924c.687.086 1.482.136 2.289.136 1.461 0 2.884-.162 4.252-.468l-.129.024c.275.258.604.463.968.596l.02.006c-5.68 1.661-12.008.131-7.942-1.218zM9.966 11.475c1.158 1.333-.304 2.532-.304 2.532s2.939-1.52 1.59-3.418c-1.261-1.772-2.228-2.653 3.006-5.688 0 0-8.216 2.052-4.292 6.574z"></path> <path d="M16.18 20.505s.678.56-.747.992c-2.712.822-11.287 1.07-13.67.033-.856-.373.75-.89 1.254-.998.232-.059.499-.093.774-.093h.057-.003c-.952-.671-6.155 1.318-2.64 1.886 9.579 1.554 17.462-.7 14.978-1.82zM6.142 13.21s-4.362 1.036-1.545 1.412c.759.063 1.644.098 2.536.098 1.139 0 2.264-.058 3.372-.171l-.139.012c1.805-.152 3.618-.48 3.618-.48-.425.186-.785.382-1.126.605l.029-.018c-4.43 1.165-12.986.623-10.523-.569 1.086-.563 2.372-.893 3.734-.893h.046-.002zM13.966 17.585c4.502-2.34 2.421-4.588.967-4.286-.199.037-.372.085-.539.146l.023-.007c.095-.134.226-.237.379-.295l.006-.002c2.874-1.01 5.086 2.981-.928 4.56.037-.033.067-.072.089-.115l.001-.002zM11.252 0s2.494 2.494-2.366 6.33c-3.896 3.077-.889 4.831 0 6.836-2.274-2.052-3.943-3.858-2.824-5.54 1.644-2.468 6.197-3.664 5.19-7.627z"></path> <path d="m6.585 23.925c4.32.277 10.96-.154 11.12-2.198 0 0-.302.775-3.572 1.391-1.806.326-3.885.512-6.008.512-1.739 0-3.448-.125-5.121-.366l.191.023s.553.458 3.393.64z"></path> </svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/java.astro", void 0);

const $$Postgresql = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="postgresql"> <polygon points="21.953 14.917 21.957 14.913 21.951 14.917 21.952 14.917"></polygon> <path d="M18.991,14.727l0.002,0.002v0.001l-0.003,0.001c-0.145,0.053-0.265,0.075-0.366,0.12c-0.103,0.041-0.186,0.116-0.235,0.212l-0.001,0.002c-0.062,0.115-0.116,0.319-0.1,0.666c0.041,0.03,0.091,0.053,0.142,0.069l0.004,0.001c0.169,0.052,0.452,0.086,0.768,0.081c0.63-0.007,1.406-0.156,1.818-0.35c0.355-0.169,0.659-0.373,0.93-0.615c-1.376,0.288-2.153,0.211-2.63,0.012C19.196,14.875,19.087,14.808,18.991,14.727z"></path> <polygon points="17.58 4.151 17.586 4.16 17.593 4.168"></polygon> <path d="M12.317 19.299c-.001-.025 0-.051-.001-.076 0-.01-.001-.017-.001-.027L12.317 19.299zM11.262 14.886c-.058-.029-.126-.05-.199-.06H11.06v-.002h-.021c-.052.005-.128.023-.276.188-.344.39-.464.635-.748.864-.284.228-.652.35-1.388.503-.233.048-.367.101-.455.144.029.024.026.03.069.053.108.06.246.113.358.142.316.08.836.173 1.378.08.542-.094 1.106-.357 1.587-1.04.083-.118.092-.292.024-.479C11.52 15.092 11.368 14.931 11.262 14.886zM15.3 1.502l-.057.011c.019-.004.04-.006.059-.01C15.301 1.503 15.301 1.502 15.3 1.502zM18.082 6.9c-.671.009-1.047.184-1.245.413-.28.325-.306.895-.132 1.597.173.703.53 1.489.866 2.142.168.327.331.621.462.86.132.24.229.41.288.555.054.134.115.252.176.362.26-.555.306-1.1.28-1.668-.034-.703-.196-1.422-.172-2.15.027-.851.193-1.405.207-2.063C18.593 6.918 18.339 6.9 18.082 6.9zM18.206 7.406l-.001.008c0 .003 0 .006 0 .01 0 .046-.013.09-.036.126l.001-.001c-.031.057-.067.107-.109.15-.098.109-.229.185-.377.211L17.68 7.911c-.021.003-.045.004-.07.004-.126 0-.242-.04-.337-.108l.002.001c-.049-.034-.092-.073-.127-.117L17.147 7.69c-.031-.034-.053-.078-.062-.125V7.563c0-.005-.001-.01-.001-.015 0-.043.016-.083.043-.113.032-.037.07-.067.114-.089l.002-.001c.095-.054.223-.094.368-.116.054-.008.108-.012.158-.013v.003h.049c.065.002.125.009.178.022.053.012.099.03.136.055C18.169 7.321 18.197 7.359 18.206 7.406L18.206 7.406zM7.077 11.307c0-.18.014-.356.04-.529l-.002.019c.102-.739.116-1.43.104-1.976C7.207 8.289 7.169 7.935 7.169 7.714c0-.003 0-.006 0-.009 0-.003 0-.007 0-.01V7.69L7.168 7.684V7.683c0-.002 0-.003 0-.005 0-1.184.208-2.319.585-3.372C8.03 3.562 8.442 2.807 9.059 2.195 8.452 1.993 7.376 1.685 6.21 1.627c-.112-.006-.243-.01-.374-.01H5.835v.001c-.125 0-.251.004-.375.011C4.462 1.687 3.518 1.98 2.844 2.704 2.168 3.428 1.723 4.615 1.82 6.58c.019.372.179 1.414.453 2.652.275 1.238.662 2.695 1.128 3.982.467 1.287 1.033 2.407 1.571 2.937.271.265.506.372.719.363.214-.01.472-.135.787-.518.619-.754 1.204-1.421 1.808-2.069l-.02.021C7.536 13.303 7.077 12.36 7.077 11.307z"></path> <path d="M12.396 1.568V1.566c-1.168.003-2.005.36-2.641.895C9.1 3.014 8.661 3.771 8.372 4.546c-.343.92-.46 1.81-.507 2.414l.013-.008c.353-.2.816-.4 1.312-.516.496-.116 1.03-.151 1.514.039.484.19.884.637 1.029 1.315.695 3.257-.216 4.468-.552 5.382-.107.263-.218.601-.311.946l-.016.067c.042-.01.085-.022.127-.026.237-.02.423.06.533.108.338.142.57.44.695.78.033.089.056.185.07.284.013.034.02.074.02.115 0 .004 0 .008 0 .012-.016.5-.026 1.087-.026 1.677 0 .699.014 1.395.04 2.088.023.526.056.992.097 1.359.043.374.103.657.141.753.126.32.311.739.645 1.024.334.284.813.474 1.688.284.759-.165 1.227-.394 1.54-.723.313-.329.499-.787.618-1.488.179-1.05.538-4.095.582-4.668-.02-.432.043-.764.18-1.017.14-.26.358-.419.545-.505.094-.043.182-.072.254-.093-.088-.127-.167-.233-.249-.336l.009.011c-.259-.316-.48-.679-.647-1.07l-.011-.029c-.101-.209-.186-.367-.275-.522l.021.039c-.131-.24-.297-.54-.471-.877-.348-.675-.726-1.493-.923-2.29-.196-.796-.224-1.62.278-2.201.444-.516 1.225-.73 2.396-.61-.034-.105-.055-.192-.114-.332-.285-.67-.628-1.248-1.035-1.772-.993-1.282-2.598-2.551-5.076-2.592H12.396zM11.622 16.666c0 .012 0 .023 0 .035l0 0V16.666z"></path> <polygon points="7.851 7.77 7.853 7.769 7.856 7.766"></polygon> <path d="M14.231,0.421c0.017-0.005,0.035-0.007,0.051-0.011l0.02-0.006L14.231,0.421z"></path> <polygon points="9.321 7.093 9.331 7.092 9.339 7.089"></polygon> <polygon points="10.047 7.391 10.045 7.391 10.045 7.391"></polygon> <path d="M10.56,12.937c0.401-1.094,1.19-1.892,0.526-5.006c-0.109-0.51-0.324-0.716-0.62-0.832c-0.144-0.053-0.311-0.084-0.486-0.084c-0.011,0-0.023,0-0.034,0l0.002,0C9.735,7.017,9.529,7.044,9.331,7.092C8.911,7.198,8.541,7.348,8.197,7.54c-0.129,0.071-0.24,0.145-0.344,0.228L7.834,7.786c0.006,0.146,0.034,0.5,0.046,1.021c0.012,0.57-0.002,1.297-0.111,2.084c-0.236,1.71,0.99,3.126,2.43,3.128C10.284,13.668,10.422,13.312,10.56,12.937z M9.709,7.968L9.709,7.968C9.662,7.92,9.624,7.866,9.593,7.807L9.591,7.803C9.565,7.761,9.55,7.71,9.55,7.655c0-0.01,0.001-0.02,0.002-0.03v0.001C9.567,7.518,9.655,7.462,9.74,7.431C9.819,7.405,9.907,7.39,10.001,7.39c0.014,0,0.028,0,0.044,0.001l-0.001-0.004c0.052,0,0.108,0.005,0.164,0.013c0.151,0.021,0.286,0.062,0.388,0.122c0.051,0.028,0.095,0.063,0.13,0.105l0.001,0.001c0.034,0.039,0.054,0.09,0.054,0.147c0,0.008,0,0.016-0.001,0.024V7.798c-0.01,0.06-0.037,0.112-0.074,0.154c-0.041,0.05-0.087,0.093-0.139,0.129l-0.002,0.001C10.464,8.156,10.337,8.2,10.2,8.2c-0.027,0-0.054-0.002-0.08-0.005h0.003C9.957,8.167,9.815,8.085,9.709,7.968z"></path> <path d="M8.177 7.55c.007-.004.014-.006.02-.01C8.198 7.54 8.199 7.539 8.2 7.538L8.177 7.55zM18.115 3.752c.433.555.808 1.187 1.097 1.865l.021.055c.109.264.182.487.223.66.021.087.035.16.04.236.002.038.004.077-.012.144 0 .003-.005.01-.006.013.03.876-.185 1.47-.21 2.306-.02.606.133 1.318.171 2.095.036.73-.051 1.532-.52 2.319.04.048.075.096.113.144 1.239-1.975 2.132-4.16 2.608-6.023.255-1.003.39-1.912.402-2.632.01-.72-.123-1.242-.291-1.46-1.326-1.716-3.119-2.153-4.623-2.165V1.31h-.144c-.58.009-1.14.076-1.681.193C16.531 2.055 17.461 2.905 18.115 3.752z"></path> <path d="M12.561,0.258h-0.01C11.387,0.238,10.388,0.524,9.581,1C8.787,0.721,7.14,0.24,5.403,0.336C4.194,0.403,2.874,0.775,1.896,1.82C0.921,2.865,0.406,4.482,0.514,6.682c0.03,0.607,0.201,1.597,0.484,2.879c0.284,1.282,0.682,2.783,1.179,4.152c0.497,1.37,1.041,2.6,1.892,3.436c0.425,0.419,1.01,0.771,1.699,0.742c0.484-0.02,0.921-0.235,1.299-0.552c0.184,0.245,0.38,0.352,0.559,0.451C7.851,17.915,8.07,18,8.297,18.056c0.408,0.103,1.106,0.241,1.924,0.1c0.279-0.047,0.572-0.139,0.864-0.27c0.011,0.33,0.024,0.653,0.036,0.98c0.041,1.036,0.066,1.993,0.373,2.832c0.049,0.137,0.185,0.843,0.718,1.466c0.533,0.624,1.579,1.013,2.769,0.755c0.84-0.182,1.907-0.51,2.617-1.532c0.701-1.01,1.017-2.459,1.08-4.809c0.016-0.127,0.035-0.235,0.054-0.336l0.167,0.015h0.02c0.896,0.041,1.868-0.088,2.68-0.47c0.719-0.337,1.263-0.678,1.66-1.283c0.099-0.15,0.207-0.331,0.237-0.643c0.03-0.312-0.147-0.8-0.441-1.025c-0.588-0.452-0.957-0.28-1.353-0.197c-0.353,0.083-0.761,0.135-1.179,0.146h-0.008c1.142-1.947,1.961-4.015,2.428-5.845c0.277-1.08,0.432-2.076,0.444-2.947c0.013-0.871-0.057-1.642-0.573-2.309c-1.611-2.084-3.876-2.66-5.629-2.68c-0.054-0.001-0.109-0.002-0.163-0.001V0c-0.954,0.008-1.872,0.152-2.741,0.409L14.24,0.423C13.738,0.329,13.155,0.269,12.561,0.258z M14.93,0.895c0.612-0.151,1.316-0.242,2.04-0.251h0.006l0.001-0.004c1.658-0.016,3.775,0.455,5.296,2.422c0.342,0.442,0.444,1.088,0.432,1.884c-0.013,0.795-0.158,1.747-0.424,2.79c-0.516,2.02-1.49,4.375-2.862,6.488c0.045,0.033,0.097,0.062,0.151,0.084l0.005,0.002c0.286,0.12,0.939,0.223,2.242-0.048c0.328-0.07,0.568-0.117,0.817,0.075c0.112,0.096,0.182,0.238,0.182,0.397c0,0.01,0,0.02-0.001,0.03v-0.001c-0.015,0.127-0.06,0.241-0.129,0.336c-0.252,0.383-0.749,0.746-1.385,1.045c-0.564,0.266-1.373,0.405-2.09,0.413c-0.36,0.004-0.691-0.024-0.973-0.113l-0.018-0.007c-0.109,1.06-0.359,3.153-0.522,4.108c-0.13,0.77-0.358,1.382-0.794,1.84c-0.435,0.458-1.05,0.734-1.878,0.914c-1.025,0.223-1.773-0.017-2.255-0.428c-0.481-0.41-0.701-0.954-0.834-1.287c-0.091-0.23-0.138-0.528-0.184-0.926s-0.079-0.885-0.102-1.434c-0.022-0.558-0.034-1.214-0.034-1.873c0-0.217,0.002-0.433,0.004-0.65c-0.413,0.384-0.935,0.654-1.515,0.757l-0.018,0.003c-0.681,0.117-1.288,0.002-1.651-0.09c-0.193-0.049-0.361-0.118-0.519-0.204c-0.166-0.09-0.324-0.193-0.43-0.394c-0.042-0.077-0.067-0.17-0.067-0.268c0-0.039,0.004-0.078,0.012-0.114c0.036-0.134,0.111-0.248,0.214-0.328l0.001-0.001c0.196-0.161,0.454-0.251,0.845-0.333c0.71-0.148,0.958-0.249,1.109-0.37c0.128-0.104,0.274-0.314,0.53-0.622c-0.001-0.009-0.002-0.024-0.003-0.038v-0.003c-0.484-0.014-0.935-0.145-1.329-0.366l0.015,0.008c-0.148,0.158-0.905,0.968-1.827,2.092c-0.388,0.47-0.817,0.74-1.269,0.759s-0.861-0.211-1.209-0.552c-0.695-0.683-1.249-1.858-1.732-3.186c-0.482-1.328-0.874-2.807-1.153-4.067c-0.28-1.26-0.444-2.276-0.468-2.766c-0.104-2.082,0.377-3.485,1.202-4.37c0.826-0.885,1.958-1.22,3.061-1.284c1.981-0.115,3.861,0.584,4.242,0.734C10.396,1.194,11.341,0.88,12.52,0.9c0.594,0.009,1.165,0.088,1.711,0.229l-0.05-0.011l0.02-0.009c0.191-0.072,0.435-0.145,0.685-0.205L14.93,0.895z"></path> </svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/postgresql.astro", void 0);

const $$Python = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="python"> <path d="m11.727 0c-.967.001-1.914.086-2.834.248l.098-.014c-2.423.428-2.862 1.324-2.862 2.976v2.182h5.726v.727h-7.874c-.02 0-.043-.001-.066-.001-1.737 0-3.184 1.239-3.507 2.881l-.004.023c-.256.872-.403 1.874-.403 2.91s.147 2.038.422 2.985l-.019-.076c.407 1.695 1.379 2.902 3.04 2.902h1.969v-2.616c.045-1.953 1.622-3.523 3.574-3.557h.003 5.719c1.584-.013 2.863-1.299 2.863-2.885 0-.009 0-.017 0-.026v.001-5.452c-.104-1.561-1.314-2.81-2.848-2.975l-.014-.001c-.866-.149-1.863-.234-2.879-.234-.036 0-.071 0-.107 0h.005zm-3.096 1.755h.017c.603 0 1.091.489 1.091 1.091s-.489 1.091-1.091 1.091c-.601 0-1.089-.487-1.091-1.088 0-.002 0-.005 0-.008 0-.596.48-1.08 1.074-1.086h.001z"></path> <path d="m18.287 6.119v2.542c-.022 1.977-1.604 3.578-3.572 3.63h-.005-5.719c-1.584.033-2.856 1.322-2.862 2.909v5.453c0 1.551 1.349 2.464 2.862 2.91.855.277 1.839.437 2.86.437s2.005-.16 2.927-.456l-.068.019c1.44-.417 2.862-1.258 2.862-2.91v-2.184h-5.719v-.727h8.582c1.664 0 2.284-1.161 2.863-2.902.28-.87.441-1.871.441-2.91s-.161-2.04-.46-2.979l.019.07c-.411-1.656-1.2-2.902-2.863-2.902zm-3.216 13.807h.017c.603 0 1.091.489 1.091 1.091s-.489 1.091-1.091 1.091c-.603 0-1.091-.489-1.091-1.091 0-.001 0-.003 0-.004 0-.002 0-.005 0-.007 0-.595.48-1.077 1.074-1.08z"></path> </svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/python.astro", void 0);

const $$Sketch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="sketch"> <polygon points="5.073 4.383 4.85 8.395 11.444 1.5 5.2 2.142"></polygon> <polygon points="19.542 9.202 19.543 9.197 13.041 21.469 23.955 9.202"></polygon> <polygon points="19.733 3.234 19.276 2.643 19.319 3.454 19.615 8.77 24 8.77"></polygon> <polygon points="5.107 8.77 5.108 8.77 18.896 8.77 12.006 1.547"></polygon> <polygon points="18.805 2.142 12.561 1.5 19.15 8.4"></polygon> <polygon points="4.394 8.77 4.728 2.643 .898 7.602 .898 7.603 0 8.77"></polygon> <polygon points="19.043 9.197 4.962 9.197 12.007 22.5"></polygon> <polygon points=".045 9.202 10.964 21.469 5.011 10.233 4.468 9.202"></polygon> </svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/sketch.astro", void 0);

const $$SpringBoot = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#8bc34a" d="M43.982,23.635c0.069-4.261-0.891-9.328-2.891-15.273l-1.568-4.662l-2.13,4.433 c-0.114,0.237-0.244,0.469-0.38,0.698C33.514,5.827,28.974,4,24,4C12.954,4,4,12.954,4,24c0,11.046,8.954,20,20,20s20-8.954,20-20 C44,23.877,43.984,23.758,43.982,23.635z"></path><path fill="#fff" d="M39.385 32.558c-3.123 4.302-8.651 4.533-13.854 4.442H18.75h-1.938c4.428-1.593 7.063-1.972 9.754-3.4 5.068-2.665 10.078-8.496 11.121-14.562-1.93 5.836-7.779 10.85-13.109 12.889-3.652 1.393-10.248 2.745-10.248 2.745l-.267-.145C9.573 32.268 9.437 22.214 17.6 18.968c3.574-1.423 6.993-.641 10.854-1.593 4.122-1.012 8.89-4.208 10.83-8.375C41.456 15.667 44.07 26.106 39.385 32.558L39.385 32.558zM15.668 38.445C15.386 38.795 14.955 39 14.505 39c-.823 0-1.495-.677-1.495-1.5s.677-1.5 1.495-1.5c.341 0 .677.118.941.336C16.086 36.855 16.186 37.805 15.668 38.445L15.668 38.445z"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/spring-boot.astro", void 0);

const $$Uikit = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg class="svg-icon" style="width:1em;height:1em;vertical-align:middle;fill:currentColor;overflow:hidden" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="uikit"> <polygon points="16.1 2.302 12.088 0 7.897 2.569 11.965 4.786"></polygon> <polygon points="1.5 7.955 1.5 18 11.813 24 22.5 18 22.5 6 17.745 3.286 13.602 5.775 18.384 8.475 18.384 15.553 11.96 19.092 5.644 15.553 5.644 10.069"></polygon> </svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/uikit.astro", void 0);

const $$Zeplin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!--?xml version="1.0" encoding="UTF-8"?--><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->${maybeRenderHead()}<svg width="800px" height="800px" viewBox="0 -25.5 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"> <g> <path d="M39.4581835,141.08876 L26.06592,145.981138 L25.3468612,185.822068 L71.7063531,168.886393 C55.8055906,163.545118 44.1938825,154.147745 39.4581835,141.08876" fill="#FDBD39"></path> <path d="M46.4667106,98.9501402 L0,115.925113 L26.06592,145.981138 L39.4581835,141.08876 C34.7363388,128.067864 37.6482635,113.349016 46.4667106,98.9501402" fill="#F69833"></path> <path d="M124.661911,41.4617978 C65.4909743,63.0776445 27.3438118,107.682177 39.4581835,141.08876 L253.735454,62.8105729 C241.621082,29.4038388 183.832998,19.8458002 124.661911,41.4617978" fill="#FECF33"></path> <path d="M168.531576,162.437536 C227.702664,140.821538 265.921506,96.4148524 253.735454,62.8105729 L39.4581835,141.08876 C51.6440849,174.693191 109.36064,184.053382 168.531576,162.437536" fill="#EE6723"></path> <path d="M253.735454,62.8105729 L39.4581835,141.08876 C43.6540237,152.65928 59.6544751,158.359673 82.1049225,158.359673 C103.99232,158.359673 132.010165,152.945698 161.219915,142.274787 C220.391153,120.65894 262.021873,85.6614162 253.735454,62.8105729" fill="#F69833"></path> <path d="M211.088715,45.5395094 C189.201167,45.5395094 161.183473,50.9536355 131.973421,61.6243956 C72.8024849,83.240393 31.1716141,118.237766 39.4581835,141.08876 L253.735454,62.8105729 C249.539614,51.239902 233.539162,45.5395094 211.088715,45.5395094" fill="#FDBD39"></path> <path d="M199.254889,187.931735 L199.253384,187.931735 C192.949007,187.931735 183.648075,182.237086 171.608696,171.006186 C157.365459,157.718974 141.049826,138.257533 125.666635,116.207148 C110.284047,94.1576692 97.6439718,72.1133296 90.0749551,54.13461 C81.8282918,34.5422784 80.6524988,22.4956552 86.5801037,18.329071 C87.8798306,17.416464 89.4465506,16.9541148 91.2364425,16.9541148 C96.0581269,16.9541148 105.453026,20.5439339 122.825788,37.6467743 L123.205722,38.0205532 L123.154372,38.5521264 C123.035558,39.7807752 122.92608,41.0204576 122.828499,42.237166 L122.634842,44.6532016 L120.930485,42.9360556 C102.211915,24.0779808 93.9720282,22.0420723 91.2978825,22.0420723 C90.5353037,22.0420723 89.9279812,22.1971459 89.4926306,22.5032124 C86.9214869,24.3098355 86.7559906,33.1584047 94.7511718,52.1509974 C102.185111,69.8092916 114.641318,91.5202079 129.82528,113.284175 C145.009845,135.050259 161.075802,154.224073 175.064395,167.273688 C190.148969,181.345185 196.946522,182.864635 199.169054,182.864635 C199.936452,182.864635 200.560038,182.699737 201.022494,182.374476 C203.734889,180.468702 203.738052,170.98956 194.822024,150.547195 L194.412725,149.608743 L195.308725,149.118281 C196.204875,148.627668 197.071511,148.144611 197.884235,147.682565 L198.957628,147.072548 L199.452461,148.206278 C205.774456,162.691306 211.683991,181.101391 203.935021,186.548617 C202.628518,187.466363 201.054118,187.931735 199.254889,187.931735 L199.254889,187.931735 Z M199.253384,185.697374 L199.254984,185.697374 L199.253917,186.814479 L199.253384,185.697374 Z" fill="#EE6723"></path> <path d="M169.968038,161.826763 L169.877986,162.940089 C168.382042,181.450231 164.443256,203.703753 154.17344,204.60442 C153.966833,204.622859 153.752546,204.632382 153.538259,204.632382 C146.561656,204.632382 139.961224,194.636479 133.920678,174.921871 C128.205402,156.270713 123.770428,131.228585 121.432696,104.408702 C119.094814,77.5944125 119.129901,52.1599148 121.531332,32.7909739 C124.148856,11.6847846 129.132122,0.662463744 136.341835,0.02977536 C136.554918,0.0101266347 136.775831,0 136.994033,0 C142.055153,0 149.682748,5.73077248 157.491351,32.4236942 L152.392734,33.4077922 C149.7856,24.4877319 146.944301,17.2328242 144.123633,12.2476445 C141.514391,7.63654609 138.977431,5.09717726 136.979576,5.09717726 C136.91392,5.09717726 136.847812,5.09989786 136.782607,5.10549018 C133.6576,5.37996753 129.106522,12.9602881 126.569261,33.4203371 C124.210598,52.4417984 124.182136,77.4951109 126.489148,103.965246 C128.797515,130.439311 133.160056,155.107207 138.772781,173.424186 C141.2864,181.627825 144.04352,188.388794 146.745976,192.976616 C149.238061,197.207285 151.649732,199.53732 153.536753,199.53732 C153.601656,199.53732 153.666259,199.534297 153.730711,199.528856 C156.720791,199.266773 162.355652,191.378572 164.727266,163.625225 L169.968038,161.826763" fill="#EE6723"></path> </g> </svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/zeplin.astro", void 0);

const $$Astro = createAstro();
const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Skills;
  const SKILLS_ICONS = {
    HTML: $$Html,
    CSS: $$Css,
    JavaScript: $$Javascript,
    TypeScript: $$Type,
    React: $$React,
    Node: $$Node,
    MySQL: $$Sql,
    Git: $$Git,
    GitHub: $$GitHub,
    Next: $$Next,
    Tailwind: $$Tailwind,
    Swift: $$Swift,
    SwiftUI: $$Swiftui,
    Kotlin: $$Kotlin,
    Flutter: $$Flutter,
    Figma: $$Figma,
    Gitlab: $$Gitlab,
    Firebase: $$Firebase,
    Golang: $$Go,
    Java: $$Java,
    Postgresql: $$Postgresql,
    Python: $$Python,
    Sketch: $$Sketch,
    SpringBoot: $$SpringBoot,
    UIKit: $$Uikit,
    Zeplin: $$Zeplin,
    Javascript: $$Javascript
  };
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "className": Astro2.props.className, "title": "Skills" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<ul class="[&>li>svg]:text-skin-hue inline-flex flex-wrap gap-6 [&>li>svg]:size-5 [&>li]:text-sm"> ${skills.map(({ name }) => {
    const iconName = name === "Next.js" ? "Next" : name;
    const Icon = SKILLS_ICONS[iconName];
    return renderTemplate`<li class="border-skin-hue/20s bg-skin-button-accent/20s borders border-solids flex items-center gap-1 rounded-md px-2 py-0.5 text-xs text-skin-muted print:border-none print:bg-transparent print:p-0 print:text-zinc-800"> ${Icon && renderTemplate`${renderComponent($$result2, "Icon", Icon, {})}`} <span>${name}</span> </li>`;
  })} </ul> ` })}`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/components/sections/Skills.astro", void 0);

const $$Tail = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full max-w-7xl justify-center md:col-span-6 print:hidden"> ${(/* @__PURE__ */ new Date()).getFullYear()} &copy; İhsan Akbay
</div>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/components/sections/Tail.astro", void 0);

const $$KeyboardManager = createComponent(($$result, $$props, $$slots) => {
  const { profiles } = basics;
  const SOCIAL_ICONS = {
    GitHub: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><path
    fill="currentColor"
    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  ></path></svg
>`,
    LinkedIn: `<svg
  height="16"
  width="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><title>LinkedIn</title><path
    fill="currentColor"
    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  ></path></svg
>`,
    X: `<svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  style="margin-right: 8px"
  ><title>X</title><path
    fill="currentColor"
    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
  ></path></svg
>
`
  };
  const profilesInfo = profiles.map(({ network, url }) => {
    const icon = SOCIAL_ICONS[network];
    const firstLetter = network[0].toUpperCase();
    return {
      id: network,
      section: "Social",
      title: `Visit ${network}`,
      url,
      icon,
      hotkey: `ctrl+${firstLetter}`
    };
  });
  return renderTemplate`${maybeRenderHead()}<footer id="normal-footer" class="no-print flex flex-col gap-2" data-astro-cid-5uazswxx> <div data-astro-cid-5uazswxx>
Press <kbd data-astro-cid-5uazswxx>Cmd</kbd> + <kbd data-astro-cid-5uazswxx>K</kbd> to open the command palette.
</div> </footer> <div class="footer-button no-print" data-astro-cid-5uazswxx> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-command" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" stroke="#777" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-5uazswxx> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-5uazswxx></path> <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10" data-astro-cid-5uazswxx></path> </svg> </div> <div id="hotkeypad" data-placeholder="Search Command"${addAttribute(JSON.stringify(profilesInfo), "data-info")} data-astro-cid-5uazswxx></div>  `;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/components/KeyboardManager.astro", void 0);

const $$ThemeSwitch$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-moon"><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"></path><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.9 4.9 1.4 1.4"></path><path d="m17.7 17.7 1.4 1.4"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.3 17.7-1.4 1.4"></path><path d="m19.1 4.9-1.4 1.4"></path></svg>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/icons/themeSwitch.astro", void 0);

const $$ThemeSwitch = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="no-print inline-flex items-center" data-astro-cid-g6q3pnbr> <!-- <div class="flex items-center gap-1">
		<Theme />
		<select name="themeSwitch" id="themeSwitch" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 dark:text-gray-100 dark:ring-gray-700 sm:text-sm sm:leading-6">
			<option value="system">System</option>
			<option value="dark">Dark</option>
			<option value="light">Light</option>
		</select>
	</div> --> <div class="group/theme flex items-center gap-2" data-astro-cid-g6q3pnbr> <label for="themeSwitch" class="flex items-center gap-1 text-sm font-medium leading-6 text-skin-base transition-transform ease-in-out group-hover/theme:rotate-45" data-astro-cid-g6q3pnbr> ${renderComponent($$result, "Theme", $$ThemeSwitch$1, { "data-astro-cid-g6q3pnbr": true })}</label> <select id="themeSwitch" name="themeSwitch" class="focus:ring-skin-hue ring-skin-muted block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-skin-base ring-1 ring-inset focus:ring-2 sm:text-sm sm:leading-6" data-astro-cid-g6q3pnbr> <option value="system" data-astro-cid-g6q3pnbr>System</option> <option value="dark" data-astro-cid-g6q3pnbr>Dark</option> <option value="light" data-astro-cid-g6q3pnbr>Light</option> </select> </div>   </div>`;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/components/ThemeSwitch.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const { name, label } = basics;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${name} Portafolio - ${label}`, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="relative grid max-w-7xl gap-12 p-8 max-sm:py-16 md:grid-cols-6 md:p-16 xl:gap-24 print:max-w-none print:grid-cols-1 print:gap-6" data-astro-cid-j7pv25f6> <div class="space-y-6 md:col-span-2 print:col-span-1 print:grid print:grid-cols-2 print:gap-5 print:space-y-0" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Hero", $$Hero, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "ThemeSwitch", $$ThemeSwitch, { "data-astro-cid-j7pv25f6": true })} </div> <div class="space-y-12 md:col-span-4 print:col-span-1 print:grid print:grid-cols-4 print:gap-2 print:space-y-0" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Experience", $$Experience, { "className": "print:col-span-3", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Projects", $$Projects, { "className": "print:hidden", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Skills", $$Skills, { "className": "print:hidden", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Education", $$Education, { "className": "order-first", "data-astro-cid-j7pv25f6": true })} </div> ${renderComponent($$result2, "Tail", $$Tail, { "data-astro-cid-j7pv25f6": true })} </main> ${renderComponent($$result2, "KeyboardManager", $$KeyboardManager, { "data-astro-cid-j7pv25f6": true })} ` })} `;
}, "/Users/ihsanakbay/Documents/PersonalWebsite/src/pages/index.astro", void 0);

const $$file = "/Users/ihsanakbay/Documents/PersonalWebsite/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
