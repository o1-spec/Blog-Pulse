"use client";
import { FaqData, FaqInterface } from "@/app/_lib/TypeInterface";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Faq() {
  const [isVisible, setIsVisible] = useState(Array(8).fill(false));
  const [faqData, setFaqData] = useState<FaqData>({ faq: [] });
  const toggleVisibility = (index: number) => {
    const updatedVisibility = [...isVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsVisible(updatedVisibility);
  };

  useEffect(function () {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFaqData(data))
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  const faq = faqData?.faq;

  return (
    <>
      <section className="py-16 pb-16" id="faq">
        <h3 className="text-4xl font-semibold text-center pb-12">
          FAQs
        </h3>
        <div className="max-w-4xl my-0 mx-auto px-4 lg:px-0">
          {faq?.map((faq: FaqInterface, index: number) => (
            <div
              className="pb-6 pt-6 cursor-pointer border-b border-b-grey"
              key={faq?.id}
              onClick={() => toggleVisibility(index)}
            >
              <div className="flex justify-between pb-1">
                <span className="text-lg md:text-xl font-semibold">
                  {faq?.question}
                </span>
                {!isVisible[index] ? (
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="1x"
                    className="text-black"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faMinus}
                    size="1x"
                    className="text-black"
                  />
                )}
              </div>
              {isVisible[index] && (
                <p className="pb-1 pt-4 text-sm leading-5">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Faq;
