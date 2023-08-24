import { Heading } from "@chakra-ui/react";
import styled from "./CardFeature.module.css";
import {
  GlobeAmericas,
  Globe,
  TelephoneFill,
  Clock,
} from "react-bootstrap-icons";

const CardFeature = () => {
  const handleScroll = event => {
    event.preventDefault(); // Prevent the default link behavior
    const targetId = event.currentTarget.getAttribute("href"); // Get the target id from the link's href attribute
    const targetElement = document.querySelector(targetId); // Find the target element by its id
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the target element
    }
  };
  return (
    <>
      <Heading textAlign="center">خدمات قابل ارائه</Heading>
      <div className={styled.container}>
        <div className={styled.row}>
          <div className={styled.card}>
            <div className={styled.info}>
              <div className={styled.sub}>استان ها</div>
              <div className={styled.title}>
                می توانید به تمام استان های ایرن دسترسی داشته باشید
              </div>
              <a href="#states" onClick={handleScroll} className={styled.btn}>
                اطلاعات بیشتر
              </a>
            </div>
            <div className={styled.image}>
              <Globe />
            </div>
          </div>
          <div className={styled.card}>
            <div className={styled.info}>
              <div className={styled.sub}>شهرستان ها</div>
              <div className={styled.title}>
                می توانید بعد از انتخاب استان به شهر های آن استان دسترسی داشته
                باشید
              </div>

              <a href="#cities" onClick={handleScroll} className={styled.btn}>
                اطلاعات بیشتر
              </a>
            </div>
            <div className={styled.image}>
              <GlobeAmericas />
            </div>
          </div>
        </div>
        <div className={styled.row}>
          <div className={styled.card}>
            <div className={styled.info}>
              <div className={styled.sub}>کد شهر</div>
              <div className={styled.title}>
                شما می توانید به کد های تلفن شهر های ایران دسترسی داشته باشید
              </div>

              <a
                href="#phonecode"
                onClick={handleScroll}
                className={styled.btn}
              >
                اطلاعات بیشتر
              </a>
            </div>
            <div className={styled.image}>
              <TelephoneFill />
            </div>
          </div>
          <div className={styled.card}>
            <div className={styled.info}>
              <div className={styled.sub}>ساعت محلی</div>
              <div className={styled.title}>
                شما می توانید به ساعت محلی کشور ها دسترسی داشته باشید
              </div>
              <a href="#timezone" onClick={handleScroll} className={styled.btn}>
                اطلاعات بیشتر
              </a>
            </div>
            <div className={styled.image}>
              <Clock />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardFeature;
