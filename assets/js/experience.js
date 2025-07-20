AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data Analyst",
    cardImage: "assets/images/experience-page/cleartrip.png",
    place: "Cleartrip AE - Dubai, UAE",
    time: "(Sept, 2023 - present)",
    desp: "<li>Conduct comprehensive daily data analysis, extracting valuable insights to drive informed decision-making and business strategy.</li> <li>Design and develop interactive Tableau dashboards, leveraging data pipelines to visualize complex information and facilitate data-driven discussions across departments.</li> <li>Directly collaboration with cross-functional teams to identify areas for process improvement and implement data-driver solutions.</li> <li>Made Python automations to significantly improve efficiency in various business processes</li> <li> Created Web Scrapers as a way to monitor competitor's prices as well as our own site's content availability.</li>",
  },
  {
    title: "AI Software Engineering Fellow",
    cardImage: "assets/images/experience-page/headstarter.png",
    place: "New York, USA (Remote)",
    time: "(Jul - Aug, 2024)",
    desp: "<li>Developed 5 Generative AI Web Applications mainly using NextJS and AI APIs</li> <li>Used OpenAI API, Grok API, Firebase, Pinecone Vector Database, Retrieval-Augmented Generation</li>",
  },
  {
    title: "Data Analyst Intern",
    cardImage: "assets/images/experience-page/ahead.png",
    place: "AHEAD Tutorial and Review Center - QC Philippines",
    time: "(Feb - May, 2023)",
    desp: "<li>Leveraged data-driven insights to optimize business processes and drive informed decision-making. Spearheaded data analysis projects utilizing Python to extract meaningful insights from complex datasets, identifying trends and patterns to inform strategic direction.</li> <li> Championed automation initiatives to streamline workflows and improve operational efficiency. This included automating repetitive tasks within Google Sheets and streamlining data collection processes through customized Google Forms.</li> <li>Translated complex data analyses into clear and concise presentations, effectively communicating findings and recommendations to stakeholders at various levels of the organization. </li>",
  },
  {
    title: "Computer Vision Data Specialist",
    cardImage: "assets/images/experience-page/apex.png",
    place: "Apex Co. - Tokyo, Japan",
    time: "(Mar - Apr, 2023)",
    desp: "<li>Expertly annotated large volumes of image data for AI and Machine Learning projects, ensuring high-quality training datasets for cutting-edge computer vision models.</li> <li>Collaborated closely with machine learning engineers to refine and optimize computer vision models, providing valuable insights on data quality and annotation challenges.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
