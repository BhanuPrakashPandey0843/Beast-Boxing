import React, { useState } from 'react';
import './Faq.css'; 

const faqData = [
  { 
    question: 'What makes Beast Boxing different from other boxing promotions?', 
    answer: 'Beast Boxing distinguishes itself from other boxing promotions through its comprehensive and athlete-focused approach to professional boxing. While many boxing organizations primarily focus on promoting matches and gaining viewership, Beast Boxing is dedicated to the full development of its athletes. We believe that to truly elevate the sport and the athletes within it, we must provide a more well-rounded platform. This includes not only preparing our boxers with top-tier training and exposure in world-class tournaments but also creating a sustainable career path that leads to financial independence and success. We are deeply invested in ensuring our athletes are prepared for both the physical and financial demands of professional boxing. For instance, while boxers are often trained to be physically and mentally prepared for the ring, Beast Boxing provides its athletes with essential guidance on handling their personal finances, building their brand, and creating long-term opportunities beyond the ring. This holistic approach goes far beyond the traditional promotion model, which typically focuses on short-term competition. At Beast Boxing, we are committed to a long-term partnership with our fighters, providing them not only with coaching and resources for winning matches but also with the tools needed for career longevity, sponsorships, and post-career financial growth. Another way we set ourselves apart is through the close relationships we have with sponsors, trainers, and various boxing organizations. By fostering these connections, we ensure that our athletes are constantly exposed to new opportunities and can gain access to the best possible resources in the sport. We don’t just aim to create champions in the ring; we want to develop athletes who can thrive financially and professionally, which ultimately helps to raise the profile of boxing as a whole. In essence, Beast Boxing is a transformative force in the industry, dedicated to nurturing talent both inside and outside the ring.' 
  },
  { 
    question: 'How does Beast Boxing help boxers achieve financial success?', 
    answer: 'Beast Boxing recognizes that a professional boxing career is not just about the thrill of competition but also about securing financial stability for our athletes. This is why we take an integrated approach to ensure that our fighters not only succeed in the ring but also create substantial financial gains throughout their careers. Our financial strategy revolves around three core pillars: competition earnings, sponsorship deals, and long-term brand building. Firstly, we ensure that our boxers are placed in top-tier tournaments and competitive matches, where the prize money is substantial. We aim to make sure that our athletes have the chance to earn lucrative incomes from their performances, which can help them build a strong financial foundation. Beyond the earnings from individual fights, Beast Boxing facilitates sponsorship and endorsement deals, which can significantly boost a fighter’s income. We work tirelessly to pair our athletes with reputable brands and companies that are aligned with their image, helping them maximize their earning potential outside of the ring. Another important facet of achieving financial success is personal branding, and we take this very seriously. At Beast Boxing, we believe that each athlete is a unique brand, and we provide them with the tools and guidance necessary to build their personal brand, engage with fans, and use their visibility to secure additional streams of income. This might include social media collaborations, merchandise sales, and media appearances. We teach our athletes how to leverage their popularity and public profiles to create a long-lasting impact in the world of sports and entertainment. Finally, Beast Boxing offers financial literacy and career planning advice. Many boxers may not have the resources or knowledge to make smart financial decisions, but we provide coaching on budgeting, investing, and planning for life after boxing. With a well-rounded approach to both athletic and financial development, we ensure that our athletes don’t just succeed in the ring but also build sustainable financial security and prepare for a prosperous future.' 
  },
  { 
    question: 'What type of training programs does Beast Boxing offer?', 
    answer: 'Beast Boxing’s training programs are designed to be comprehensive, ensuring that each athlete is prepared not just for competition, but for a successful, long-term career in the sport. Our training philosophy is built around the idea that a boxer must be physically fit, mentally tough, and technically skilled to reach the highest levels of the sport. Therefore, we offer a variety of specialized training regimens that cover all aspects of the sport. First and foremost, we provide elite technical boxing training, which is focused on refining the fundamentals such as footwork, defense, punching techniques, and ring control. Every boxer at Beast Boxing works closely with experienced trainers who assess their strengths and weaknesses and tailor their training to maximize performance. We also emphasize the importance of versatility in the ring, ensuring that our athletes are well-rounded fighters capable of adapting to different opponents and styles. Additionally, physical conditioning is a cornerstone of our programs. Boxing is an intense sport that requires stamina, speed, strength, and agility. Our boxers undergo rigorous strength and conditioning regimens designed to optimize their cardiovascular health, endurance, and explosive power. This includes weight training, plyometric exercises, high-intensity interval training (HIIT), and agility drills. We focus on improving the boxers core strength, which is critical for generating power in punches and maintaining balance throughout the fight. Beyond physical fitness and technical skills, Beast Boxing is also dedicated to developing mental toughness. The psychological aspect of boxing cannot be overstated, as it is just as important as physical readiness. We offer mental coaching to help boxers build resilience, focus, and strategic thinking. Whether its preparing for the pressures of a big fight or recovering from a loss, we ensure that our athletes are mentally prepared to handle any situation in and outside the ring. Moreover, our training includes injury prevention and recovery plans. Boxing can be physically demanding, so we incorporate stretching, flexibility training, and rest periods to ensure our athletes are not only pushing their limits but also maintaining their physical well-being. The Beast Boxing approach is holistic and ensures that each fighter is equipped to succeed both physically and mentally, now and in the future.' 
  },
 
  { 
    question: 'How can boxers get involved in Beast Boxing s programs?', 
    answer: 'Joining Beast Boxing is an exciting opportunity for any boxer who is serious about advancing their career to the highest level. We are always on the lookout for talented athletes who are driven, disciplined, and ready to take on the challenges of professional boxing. There are several ways for aspiring boxers to get involved in our programs. The first step for anyone interested in joining Beast Boxing is to reach out to us. We have multiple channels for contacting us, including our website, social media, and through direct email. Our team reviews all inquiries, and we welcome boxers at any level – from amateur athletes looking to turn pro to experienced professionals seeking new training opportunities and sponsorships. Once we receive an inquiry, we will evaluate the athlete’s background, achievements, and potential. If the boxer meets our criteria, we will schedule a consultation to discuss their goals, aspirations, and the tailored training programs we can offer. Our process of integrating boxers into Beast Boxing’s fold involves a detailed assessment of their skills, strengths, and areas for improvement. This helps us design a personalized training regimen that is specifically suited to their needs. For more experienced athletes, we work with them to identify opportunities in upcoming tournaments and high-profile matches, providing them with the best possible platform to showcase their talent. Beast Boxing prides itself on being a talent incubator, so once a boxer joins our program, they have access to not only world-class training but also to a robust support network of sponsors, promoters, and boxing organizations. This extensive network helps ensure that our athletes are always prepared for success, both in terms of skill and career development. Becoming a part of Beast Boxing means becoming a part of a thriving community that is committed to making each fighter the best they can be.' 
  },
  { 
    question: 'What is Beast Boxing’s long-term vision for the sport of boxing?', 
    answer: 'Beast Boxing’s long-term vision for the sport of boxing is ambitious and transformative. We see ourselves not just as a promotional company but as a cornerstone of a new era in professional boxing. Our vision is rooted in the belief that boxing can be more than just a sport – it can be a career pathway for athletes to thrive and build a lasting legacy, both within the sport and in their personal lives. We aim to elevate boxing to new heights by nurturing talent from the grassroots level and supporting athletes as they develop their skills and build their careers. Beast Boxing is dedicated to providing boxers with access to the best training facilities, coaching expertise, sponsorships, and opportunities for global exposure. We envision a world where the athletes we train go on to compete and succeed in the biggest arenas, making boxing more popular and respected than ever before. A key component of this vision is to foster a sustainable and financially rewarding career for every boxer we train. We believe that success in boxing should be measured not only by the number of wins but also by the long-term financial security and brand value athletes can create. Beast Boxing is committed to ensuring that boxers are prepared for life after their careers in the ring, equipping them with the skills they need to manage their wealth, expand their professional networks, and make a lasting impact on the world. By pushing the boundaries of what’s possible in boxing, Beast Boxing aims to transform the sport into a dynamic, thriving industry that attracts global audiences, investors, and sponsors. Our vision is to help our athletes not only become champions but also influential figures who shape the future of the sport and inspire the next generation of boxers.' 
  }
];


const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <section className="bg-photo bg-cover bg-center text-black py-10">
      <h2 className="text-lg md:text-xl text-center font-semibold text-gray-400 tracking-wider uppercase mb-2">
        FAQ
      </h2>
        <div className="container px-6 mx-auto">
          <h1 className="text-5xl font-bold text-center lg:text-5xl mb-8">
            Frequently Asked <span className="text-teal-500">Questions </span>
          </h1>
          <p className="text-center max-w-2xl mx-auto text-lg mb-10">
            Find answers to the most commonly asked questions below. If you have any other questions, feel free to reach out to us.
          </p>
          <div className="space-y-6">
            {faqData.map((item, i) => (
              <div key={i} className="faq-item bg-white shadow-md rounded-lg overflow-hidden transition-all duration-500">
                <button
                  className="flex items-center justify-between w-full px-8 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => toggleCollapse(i)}
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-content-${i}`}
                >
                  <h2 className="text-lg font-medium text-gray-900">
                    {item.question}
                  </h2>
                  <span
                    className={`transform transition-transform duration-300 ${
                      openIndex === i ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={openIndex === i ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'}
                      />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-content-${i}`}
                  className={`faq-content px-8 py-4 text-gray-700 transition-max-height duration-300 ease-in-out ${
                    openIndex === i ? 'max-h-screen' : 'max-h-0'
                  }`}
                  style={{ overflow: 'hidden' }}
                >
                  <hr className="border-gray-300 mb-4" />
                  <p className="text-sm">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
