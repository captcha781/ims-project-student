import React from "react";
import {
  TeamOutlined,
  CaretUpFilled,
  CaretRightFilled,
} from "@ant-design/icons";
import { GoPencil } from "react-icons/go";
import { RiBookLine } from "react-icons/ri";
import { BsCalendar3 } from "react-icons/bs";

const DashLayout = () => {
  return (
    <React.Fragment>
      <div className="dashlayout">
        <div className="dash-item tw-border-green-400">
          <div className="tw-py-3 tw-px-3 tw-text-2xl tw-font-semibold tw-text-gray-700">
            Classroom
          </div>
          <p className="tw-px-3 tw-text-md tw-flex tw-gap-1">
            <span className="tw-text-green-500 tw-font-medium tw-flex tw-items-center">
              <CaretUpFilled /> 54
            </span>{" "}
            students present today
          </p>
          <TeamOutlined className="dash-item-icon tw-bg-green-500 tw-shadow-teal-100 tw-text-base" />
        </div>

        <div className="dash-item tw-border-indigo-400">
          <div className="tw-py-3 tw-px-3 tw-text-2xl tw-font-semibold tw-text-gray-700">
            Results
          </div>
          <p className="tw-px-3 tw-text-md tw-flex tw-gap-1">
            <span className="tw-text-green-500 tw-font-medium tw-flex tw-items-center">
              <CaretUpFilled /> A+
            </span>{" "}
            grade on the last exam
          </p>
          <div className="dash-item-icon tw-bg-indigo-500 tw-shadow-indigo-200">
            <GoPencil className="tw-text-lg" />
          </div>
        </div>

        <div className="dash-item tw-border-sky-400">
          <div className="tw-py-3 tw-px-3 tw-text-2xl tw-font-semibold tw-text-gray-700">
            Exams
          </div>
          <p className="tw-px-3 tw-text-md tw-flex tw-gap-1">
            {/* <span className="tw-text-green-500 tw-font-medium tw-flex tw-items-center">
              <CaretRightFilled />
            </span>{""} */}
            Next exam on 16/02/2023
          </p>
          <div className="dash-item-icon tw-bg-sky-500 tw-shadow-sky-200">
            <RiBookLine className="tw-text-lg" />
          </div>
        </div>

        <div className="dash-item tw-border-orange-400">
          <div className="tw-py-3 tw-px-3 tw-text-2xl tw-font-semibold tw-text-gray-700">
            Calander
          </div>
          <p className="tw-px-3 tw-text-md tw-flex tw-gap-1">
            {/* <span className="tw-text-green-500 tw-font-medium tw-flex tw-items-center">
              <CaretRightFilled /> 
            </span>{""} */}
            Next event / holiday is Pongal
          </p>
          <div className="dash-item-icon tw-bg-orange-500 tw-shadow-orange-200">
            <BsCalendar3 className="tw-text-lg" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DashLayout;
