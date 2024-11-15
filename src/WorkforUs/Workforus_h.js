import Header from "../Header/Header";
import Header1 from "../Header/Header2";
import Footerah from "../footerah/Footerah";
import JobCard from "./component/Jobcard_h";
const jobData = [
  {
    title: "Freelance Writer",
    company: "RateMyStation.com",
    workType: "Remote working",
    salary: "$100,000 - $130,000",
    employmentType: "Full time",
    details: [
      "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      "Massa fringilla quam pretium adipiscing in non tellus.",
      "Massa fringilla quam pretium.",
    ],
    activelyHiring: "Actively Hiring",
    updatedTime: "Updated 8 hours ago",
  },
  {
    title: "Social Media Manager",
    company: "RateMyStation.com",
    workType: "Remote working",
    salary: "$100,000 - $130,000",
    employmentType: "Full time",
    details: [
      "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      "Massa fringilla quam pretium adipiscing in non tellus.",
      "Massa fringilla quam pretium.",
    ],
    activelyHiring: "Actively Hiring",
    updatedTime: "Updated 8 hours ago",
  },
  {
    title: "Freelance Writer",
    company: "RateMyStation.com",
    workType: "Remote working",
    salary: "$100,000 - $130,000",
    employmentType: "Full time",
    details: [
      "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      "Massa fringilla quam pretium adipiscing in non tellus.",
      "Massa fringilla quam pretium.",
    ],
    activelyHiring: "Actively Hiring",
    updatedTime: "Updated 8 hours ago",
  },
  {
    title: "Social Media Manager",
    company: "RateMyStation.com",
    workType: "Remote working",
    salary: "$100,000 - $130,000",
    employmentType: "Full time",
    details: [
      "Massa fringilla quam pretium adipiscing in non tellus. Turpis quis turpis sit euismod lobortis sapien rhoncus condimentum dolor.",
      "Massa fringilla quam pretium adipiscing in non tellus.",
      "Massa fringilla quam pretium.",
    ],
    activelyHiring: "Actively Hiring",
    updatedTime: "Updated 8 hours ago",
  },
];

const WorkforUs = () => {
  return (
    <div>
      <Header1 />
      <section className="w-100 faq--terms--detail--section--h">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="faq--term--detail--h work--forus--title--h">
                <h1>Work for Us</h1>
                <p>See our latest vacancies below.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 faq--search--detail--container faq--search--detail--container-alt">
            <div className="faq--work--card--container--h ">
              <div className="row row-cols-1 row-cols-lg-2 g-4 mx-auto work--for--us--card--h">
                {jobData.map((job, index) => (
                  <JobCard key={index} {...job} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footerah />
    </div>
  );
};

export default WorkforUs;
