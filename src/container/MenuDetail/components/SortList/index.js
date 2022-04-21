import React from "react";
import { SortListWrapper } from "./style";
import SelectSort from "../../../../component/SelectSort";
import { useTranslation } from "react-i18next";

const SortList = ({selectSort, handleSelectSort}) => {
  const { t } = useTranslation();
  const genres = [
    {
      id: "option-0",
      title: t("Select"),
      value: 0,
    },
    {
      id: "option-1",
      title: t("User_Score_Ascending"),
      value: 1,
    },
    {
      id: "option-2",
      title: t("User_Score_Descending"),
      value: 2,
    },
    {
      id: "option-3",
      title: t("Title_A_Z"),
      value: 3,
    },
    {
      id: "option-4",
      title: t("Title_Z_A"),
      value: 4,
    },
  ];

  return (
    <SortListWrapper>
      <SelectSort
      options={genres} 
      name="sort"
      className="select-sort"
      value={selectSort}
      onChange={handleSelectSort}
      />
    </SortListWrapper>
  );
};

export default SortList;
