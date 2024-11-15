import FAQTopicCard from "./Faqtopiccard_h";
const FAQTopics = () => {
    const topics = [
      { title: "Corporate Policies", description: "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam. Et risus commodo natoque pulvinar eu, interdum." },
      { title: "Subscription", description: "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam. Et risus commodo natoque pulvinar eu, interdum." },
      { title: "Privacy", description: "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam. Et risus commodo natoque pulvinar eu, interdum." },
      { title: "Payment", description: "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam. Et risus commodo natoque pulvinar eu, interdum." }
    ];
  
    return (
      <div className="faq--main--card--two mx-auto">
   
        <h1 className="faq--detail--related--title faq--main--card--two--title">Topics</h1>
        <div className="row row-cols-1 row-cols-lg-2 g-4 faq--detail--related--container--h faq--main--related--container--h">
          {topics.map((topic, index) => (
            <FAQTopicCard key={index} title={topic.title} description={topic.description} />
          ))}
        </div>
      </div>
    );
  };
  export default FAQTopics