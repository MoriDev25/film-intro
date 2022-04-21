import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PeopleMenu from "../MenuDetail/PeopleMenu";
import People from "../Detail/People";

const RedirectPeople = () => {
  const [currentRoute, setCurrentRoute] = useState("");
  const params = useParams();

  useEffect(() => {
    setCurrentRoute(params.id);
  }, [params]);
  if (currentRoute === "list") {
    return <PeopleMenu />;
  } else {
    return <People peopleId={params.id} />;
  }
};

export default RedirectPeople;
