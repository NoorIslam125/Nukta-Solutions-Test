import React from "react";

const Card = (props) => (
  <>
    <div className="CardPage max-sm:h-full md:my-10 max-sm:my-10 justify-center items-center">
      <div className="Course-Discount text-center  flex justify-center">
        <h1 className="text-3xl w-64 text-gray-500">
          When Course has <strong>{props.Discount}</strong>
        </h1>
      </div>
      <div className="CardWrapper my-5 transition-transform duration-300 ease-in-out transform hover:scale-105">
        <div className="Card shadow-md h-Card max-sm:h-96 border-black w-96 max-sm:w-72 rounded-2xl flex flex-col zoom-on-hover">
          <div className="Image">
            <img className="rounded-t-2xl" src={props.Image} alt="" />
          </div>
          <div className="Image-Content px-3 py-3">
            <h1 className="text-2xl font-bold">This is a One Line Title</h1>
            <p>Two line paragraph Lorem ipsum dolor sit amet consectetur.</p>
            <div className="Price flex justify-between items-center">
              {props.Left && (
                <div className="Left text-xl line-through">{props.Left}</div>
              )}
              <div
                className={`Center text-2xl ${
                  props.Center && "text-custom-sky"
                }`}>
                {props.Center}
              </div>
              {props.Right && (
                <div className="Right bg-custom-sky font-semibold px-2 py-1 rounded-lg">
                  {props.Right}
                </div>
              )}
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="OtherDetailes text-gray-400 flex gap-5 px-3 items-center h-full">
            <div className="first flex gap-3 items-center">
              <i class="fa-solid fa-clock"></i>
              <span>10 hrs</span>
            </div>
            <div className="Second flex gap-3 items-center">
              <i class="fas fa-user-friends"></i>
              <span>308</span>
            </div>
            <div className="Third flex gap-3 items-center">
              <i class="fa-solid fa-book"></i>
              <span>17</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Card;
