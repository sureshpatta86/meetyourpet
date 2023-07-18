import React from "react";

//faq page for the petshopapp

const HelpPage = () => {
  return (
    <div className=" flex flex-col pt-10  w-full items-center justify-start space-y-2">
      <div className="flex flex-wrap justify-start overflow-hidden bg-slate-700 text-white w-11/12 md:w-1/2">
        <label
          className="grow px-4 py-3 font-normal md:font-medium"
          htmlFor="collapse"
        >
          What is MeetYourPet?
        </label>
        <input
          className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800
           accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse"
          id="collapse"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <div
          className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 
        opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 
        peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100"
        >
          MeetYourPet is a platform that connects pet lovers with responsible
          breeders and sellers. We are dedicated to promoting ethical and
          responsible pet ownership, ensuring that our furry friends are treated
          with the love and care they deserve.
        </div>
      </div>

      <div className="flex flex-wrap justify-start overflow-hidden bg-slate-700 text-white w-11/12 md:w-1/2">
        <label className="grow px-4 py-3 font-medium" htmlFor="collapse2">
          How do I find a pet?
        </label>
        <input
          className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse2"
          id="collapse2"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
          Our user-friendly search filters allow you to browse through a wide
          range of pet listings, including various breeds, sizes, ages, and
          more. We provide detailed information about each pet, including their
          temperament, health history, and any special requirements they may
          have, so you can make an informed decision.
        </div>
      </div>

      <div className="flex flex-wrap justify-start overflow-hidden bg-slate-700 text-white w-11/12 md:w-1/2">
        <label
          className="grow px-4 py-3 font-normal md:font-medium"
          htmlFor="collapse3"
        >
          How do I contact a seller?
        </label>
        <input
          className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse3"
          id="collapse3"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
          Once you have found a pet you are interested in, you can contact the
          seller directly through our platform. Simply click on the “Contact
          Seller” button on the listing page and fill out the form. The seller
          will then get in touch with you to discuss the next steps.
        </div>
      </div>

      <div className="flex flex-wrap justify-start overflow-hidden bg-slate-700 text-white w-11/12 md:w-1/2">
        <label
          className="grow px-4 py-3 font-normal md:font-medium"
          htmlFor="collapse4"
        >
          How do I know if a seller is reputable?
        </label>
        <input
          className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse4"
          id="collapse4"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
          We carefully vet and screen all the breeders and sellers listed on our
          platform to ensure that they meet our high standards of animal
          welfare. We work closely with them to ensure that their practices
          align with ethical breeding standards, including proper health care,
          socialization, and responsible breeding practices.
        </div>
      </div>

      <div className="flex flex-wrap justify-start overflow-hidden bg-slate-700 text-white w-11/12 md:w-1/2">
        <label
          className="grow px-4 py-3 font-normal md:font-medium"
          htmlFor="collapse5"
        >
          How do I know if a pet is healthy?
        </label>
        <input
          className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse5"
          id="collapse5"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
          We provide detailed information about each pet, including their health
          history, so you can make an informed decision. We also recommend that
          you take your new pet to the vet for a check-up as soon as possible
          after bringing them home.
        </div>
      </div>

      <div className="flex flex-wrap justify-start overflow-hidden bg-slate-700 text-white w-11/12 md:w-1/2">
        <label
          className="grow px-4 py-3 font-normal md:font-medium"
          htmlFor="collapse6"
        >
          What if I change my mind?
        </label>
        <input
          className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse6"
          id="collapse6"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
          We understand that sometimes things don’t work out as planned. If you
          change your mind about a pet, you can contact the seller to discuss
          your options. Please note that some sellers may charge a cancellation
          fee.
        </div>
      </div>

      <div className="flex flex-wrap justify-start overflow-hidden bg-slate-700 text-white w-11/12 md:w-1/2">
        <label
          className="grow px-4 py-3 font-normal md:font-medium"
          htmlFor="collapse7"
        >
          What if I have a problem with my pet?
        </label>
        <input
          className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
          type="checkbox"
          name="collapse7"
          id="collapse7"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="mx-4 my-3 h-6 w-6 transition-all duration-200 peer-checked:rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
        <div className="-transparent absolute -translate-y-full scale-75 scale-y-0 px-4 py-3 opacity-0 transition-all duration-200 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-slate-800 peer-checked:opacity-100">
          If you have any concerns about your pet, please contact the seller
          directly. They will be able to advise you on the best course of
          action.
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
