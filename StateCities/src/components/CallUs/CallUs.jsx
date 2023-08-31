import { useEffect, useRef } from "react";
import { Heading, Text, Link, Flex } from "@chakra-ui/react";
import { initializeCardBehavior } from "../../JS/hi"; // Import the function
import { Linkedin, Github, Telegram } from "react-bootstrap-icons";
import salar from "../../assets/image/salar.jpeg";
import abbas from "../../assets/image/abbas.jpeg";
import "./CallUs.css";

const CallUs = () => {
  const salarCardRef = useRef(null); // Create refs for each card
  const abbasCardRef = useRef(null);

  useEffect(() => {
    if (salarCardRef.current) {
      initializeCardBehavior(salarCardRef.current); // Initialize behavior for the first card
    }
    if (abbasCardRef.current) {
      initializeCardBehavior(abbasCardRef.current); // Initialize behavior for the second card
    }
  }, []);

  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }} // Change direction to column on mobile and row on larger screens
      alignItems={{ base: "center", md: "flex-start" }}
    >
      <div ref={salarCardRef} className="card" data-state="#about">
        <div className="card-header">
          <div className="card-cover"></div>
          <img className="card-avatar" src={salar} alt="avatar" />

          <Heading className="card-fullname">سالار ارجمند پور</Heading>
          <h2 className="card-jobtitle">Backend Developer</h2>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">درباره</div>
              <p className="card-desc">
                وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند
                می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در
                خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به
                زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌
                های وطن خودش می‌باشد و بس!
              </p>
            </div>
            <div className="card-social">
              <a href="https://www.linkedin.com/in/salar-arjmand-pour/">
                <Linkedin className="socialIconCard" />
              </a>
              <a href="https://github.com/salararjmandpour">
                <Github className="socialIconCard" />
              </a>
              <a href="https://t.me/Salararjmandpour_0xf0">
                <Telegram className="socialIconCard" />
              </a>
            </div>
          </div>
          <div className="card-section" id="experience">
            <div className="card-content">
              <Text className="card-subtitle">تجارب کاری</Text>

              <div className="card-timeline">
                <div className="card-item" data-year="2019">
                  <div className="card-item-title">
                    Technical Services Manager at <span>ARGtelecom</span>
                  </div>
                  <div className="card-item-desc">
                    Technical manager of ADSL , VDSL , 3G / 4G modem factory and
                    blood glucose measuring devices.
                  </div>
                </div>
                <div className="card-item" data-year="2019">
                  <div className="card-item-title">
                    Web developer at <span>Breezens</span>
                  </div>
                  <div className="card-item-desc">
                    Developed and management website
                  </div>
                </div>
                <div className="card-item" data-year="2018">
                  <div className="card-item-title">
                    Wordpress Developer at <span>REDRONIC</span>
                  </div>
                  <div className="card-item-desc">
                    Developed and management website
                  </div>
                </div>
                <div className="card-item" data-year="2023">
                  <div className="card-item-title">
                    node.js back-End developer at <span>Arshida holding</span>
                  </div>
                  <div className="card-item-desc">
                    Build CRM application ( Api,Database,Security, )
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-section" id="contact">
            <div className="card-content">
              <Text className="card-subtitle">راه های ارتباطی</Text>
              <div className="card-contact-wrapper">
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>

                  <Text>ایران تهران</Text>
                </div>
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  922158127(98+)
                </div>
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  info@salararjmandpour.me
                </div>
                {/* <button className="contact-me"></button> */}
                <Link
                  className="contact-me"
                  href="mailto:  info@salararjmandpour.me"
                >
                  درخواست همکاری
                </Link>
              </div>
            </div>
          </div>
          <div className="card-buttons">
            <button data-section="#about" className="is-active">
              درباره من
            </button>
            <button data-section="#experience">تجربه کاری</button>
            <button data-section="#contact">ارتباط با من</button>
          </div>
        </div>
      </div>
      <div ref={abbasCardRef} className="card" data-state="#about">
        <div className="card-header">
          <div className="card-cover abbas"></div>
          <img className="card-avatar" src={abbas} alt="avatar" />

          <Heading className="card-fullname">عباس دیلمی زاده</Heading>
          <h2 className="card-jobtitle">FrontEnd Developer</h2>
        </div>
        <div className="card-main">
          <div className="card-section is-active" id="about">
            <div className="card-content">
              <div className="card-subtitle">درباره</div>
              <p className="card-desc">
                وقتی ثروت‌ های بزرگ به دست برخی مردم می‌افتد در پرتو آن نیرومند
                می‌شوند و در سایهٔ نیرومندی و ثروت خیال می‌ کنند که می‌توانند در
                خارج از وطن خود زندگی نمایند و خوشبخت و سرافراز باشند ولی به
                زودی می‌ فهمند که اشتباه کرده‌ اند و عظمت هر ملتی بر روی خرابه‌
                های وطن خودش می‌باشد و بس!
              </p>
            </div>
            <div className="card-social">
              <a href="https://www.linkedin.com/in/abbas-daylami/">
                <Linkedin className="socialIconCard" />
              </a>
              <a href="https://github.com/getintern">
                <Github className="socialIconCard" />
              </a>
              <a href="https://t.me/isbbas">
                <Telegram className="socialIconCard" />
              </a>
            </div>
          </div>
          <div className="card-section" id="experience">
            <div className="card-content">
              <Text className="card-subtitle">تجارب کاری</Text>

              <div className="card-timeline">
                <div className="card-item" data-year="2013">
                  <div className="card-item-title">
                    Junior Front-end Developer at <span>IKCO-Ahwaz</span>
                  </div>
                  <div className="card-item-desc">
                    <Text>Admin Of Site</Text>
                    <Text> HTML&CSS • Javascript • Wordpress </Text>
                  </div>
                </div>
                <div className="card-item" data-year="2014">
                  <div className="card-item-title">
                    Junior Front-End Developer at <span>PCK</span>
                  </div>
                  <div className="card-item-desc">
                    <Text> Developed UI Of site</Text>
                    <Text>
                      By using Javascript and Front-End tools and technologies
                      could accomplish a couple of projects using HTML5, CSS3,
                      SCSS/SASS, Javascript, React.js, and Context-API.
                    </Text>
                  </div>
                </div>
                <div className="card-item" data-year="2018">
                  <div className="card-item-title">
                    Freelancer <span>Ponisha</span>
                  </div>
                  <div className="card-item-desc">
                    Getting Project from freelance job or remote work
                  </div>
                </div>
                <div className="card-item" data-year="2023">
                  <div className="card-item-title">
                    Front-End Developer at <span>Arshida</span>
                  </div>
                  <div className="card-item-desc">
                    I successfully acquired a challenging CRM project within the
                    realm of freelance work, leveraging my expertise in ReactJS,
                    SCSS, and Zustand. Through collaborative efforts with a
                    friend, I not only developed the entire application's
                    frontend but also seamlessly integrated it with a backend
                    system.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card-section" id="contact">
            <div className="card-content">
              <Text className="card-subtitle">راه های ارتباطی</Text>
              <div className="card-contact-wrapper">
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>

                  <Text>ایران - تهران</Text>
                </div>
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  9166230490(+98)
                </div>
                <div className="card-contact">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  mrabbas44@gmail.com
                </div>
                <Link className="contact-me" href="mailto:mrabbas44@gmail.com">
                  درخواست همکاری
                </Link>
              </div>
            </div>
          </div>
          <div className="card-buttons">
            <button data-section="#about" className="is-active">
              درباره من
            </button>
            <button data-section="#experience">تجربه کاری</button>
            <button data-section="#contact">ارتباط با من</button>
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default CallUs;
