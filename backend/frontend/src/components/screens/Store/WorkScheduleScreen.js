import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const WorkScheduleScreen = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo.isAdmin) {
      navigate("/login");
    }
  }, [dispatch, navigate, userInfo]);
  
  return (
    <div>
      <h1>Work Schedule</h1>
    </div>
  );
};

export default WorkScheduleScreen;
