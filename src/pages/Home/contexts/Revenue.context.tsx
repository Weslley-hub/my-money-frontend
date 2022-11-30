import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { RevenueModel } from "../../../models";

import { RevenuesModal, RevenuesModalHandles } from "../components/ExpenseModal/RevenuesModal";

export type RevenuesContextData = {
  revenues: RevenueModel[];
  addRevenue: (revenue: RevenueModel) => void;
  updateRevenue: (updatedRevenue: RevenueModel) => void;
  removeRevenue: (revenueId: string) => void;
  openRevenueModal(data?: RevenueModel): void;
};

const RevenuesContext = createContext<RevenuesContextData>(
  {} as RevenuesContextData
);

type RevenuesProviderProps = {
  children: ReactNode;
};

export const RevenuesProvider = ({ children }: RevenuesProviderProps) => {
  const revenuesModalRef = useRef<RevenuesModalHandles | null>(null);

  const [revenues, setRevenues] = useState<RevenueModel[]>([]);

  function addRevenue(revenue: RevenueModel) {
    const newRevenues = [
      ...revenues,
      { ...revenue, id: new Date().toISOString() }
    ];
    setRevenues(newRevenues);
  }

  function updateRevenue(updatedRevenues:RevenueModel) {
    const otherRevenues = revenues.filter(
      (revenues) => revenues.id !== updatedRevenues.id
    );
    setRevenues([...otherRevenues, updatedRevenues]);
  }

  function removeRevenue(revenuesId: string) {
    const remainingRevenues= revenues.filter(
      (revenues) => revenues.id !== revenuesId
    );
    setRevenues(remainingRevenues);
  }

  function openRevenueModal(data?: RevenueModel) {
    revenuesModalRef.current?.open(data);
  }
  
  return (
    <RevenuesContext.Provider
      value={{
        revenues,
        addRevenue,
        removeRevenue,
        updateRevenue,
        openRevenueModal
      }}
    >
      {children}

      <RevenuesModal ref={revenuesModalRef} />
    </RevenuesContext.Provider>
  );
};

export const useRevenues = (): RevenuesContextData => {
  const contextData = useContext(RevenuesContext);
  return { ...contextData };
};


