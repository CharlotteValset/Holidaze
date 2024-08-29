import ProfileImage from "../../assets/images/profileImage.png";

export const BookingsAccordion = () => {
  return (
    <div id="accordion-open" data-accordion="open">
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full max-w-80 p-2 font-medium rtl:text-right gap-3"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
        >
          <div className="flex items-center gap-12">
            <div className="flex flex-row items-center gap-1">
              <img src={ProfileImage} alt="" className="w-6 h-6 rounded-full" />
              <p className="text-sm truncate">Mr: Pixel</p>
            </div>
            <span className="text-sm">17/08/2024</span>
          </div>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
        <div className="px-3 pt-1 pb-3 bg-gray-100 max-w-80">
          <div className="flex justify-between">
            <p>Email:</p>
            <p className="font-medium">mr-pixel@email.com</p>
          </div>
          <div className="flex justify-between">
            <p>Check-in date:</p>
            <p className="font-medium">17/08/2024</p>
          </div>
          <div className="flex justify-between">
            <p>Check-out date:</p>
            <p className="font-medium">20/08/2024</p>
          </div>
          <div className="flex justify-between">
            <p>Days:</p>
            <p className="font-medium">3</p>
          </div>
          <div className="flex justify-between">
            <p>Guests:</p>
            <p className="font-medium">5</p>
          </div>
          <div className="flex justify-between">
            <p>Total amount:</p>
            <p className="font-medium">$ 1967</p>
          </div>
        </div>
      </div>
    </div>
  );
};
