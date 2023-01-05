import React from "react";
import "./ProfileInformation.scss";
import PiAvatar from "../../assets/images/pi-avatar.png";
import PiPencil from "../../assets/images/pencil.svg";
import PiDelete from "../../assets/images/delete.svg";
import AddPiAvatar from "../../assets/images/addpiavatar.svg";

const ProfileInformation = () => {
  return (
    <div className="profileInformation">
      {/* PI Header /- START */}
      <div className="border-bottom-gray-1 pb-2">
        <small className="bg-lavender text-dark1 text-uppercase ff-inter fw-semibold fs-12 p-8 lh-15">
          Last Update 3 days ago
        </small>
        <h4 className="fw-normal fs-48 lh-58 text-dark1 m-0 py-12">
          Profile information
        </h4>
        <p className="fw-normal fs-18 lh-28 ff-inter text-dark2 m-0">
          Provide personal details and how we can reach you
        </p>
      </div>
      {/* PI Header /- END */}

      {/* PI Avatar /- Start */}
      <div className="pi-header">
        <div className="pi-section-header border-bottom-gray-1 pb-2">
          <h5 className="fw-bold fs-4 lh-34 text-drak1 m-0">Avatar</h5>
          <p className="fw-normal fs-5 lh-26 text-dark3 m-0">
            Provide personal details and how we can reach you
          </p>
        </div>

        <div className="pi-section-avatar mt-3">
          <div className="text-center">
            {/* <img src={PiAvatar} alt="avatar" /> */}
            <div class="pi-image">
              <label class="label">
                <input type="file" />
                <figure class="pi-avatar-figure">
                  <img src={PiAvatar} class="pi-avatar" alt="avatar" />
                  <figcaption class="pi-avatar-figcaption">
                    <img src={AddPiAvatar} />
                  </figcaption>
                </figure>
              </label>
            </div>
          </div>
          <div className="pi-avatar-btn d-flex gap-4 justify-content-center my-2">
            <div className="adujst-btn">
              <button className="bg-transparent border-0 d-flex gap-2">
                <img className="img-fluid" src={PiPencil} alt="icon" />
                <span className="text-green text-uppercase fw-semibold fs-12 lh-15 ff-inter">
                  Adjust
                </span>
              </button>
            </div>
            <div className="remove-btn">
              <button className="bg-transparent border-0 d-flex gap-2">
                <img className="img-fluid" src={PiDelete} alt="icon" />
                <span className="text-green text-uppercase fw-semibold fs-12 lh-15 ff-inter">
                  Delete
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* PI Avatar /- END */}
    </div>
  );
};

export default ProfileInformation;
