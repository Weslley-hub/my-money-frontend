import { createContext, ReactNode, useContext, useRef, useState } from "react";
import { Card } from "../../../models/Card";
import { CardModal, CardModalHandles } from "../components";

export type CardContextData = {
  cards: Card[];
  addCard: (card: Card) => void;
  updateCard: (updatedCard: Card) => void;
  removeCard: (cardId: string) => void;
  openCardModal(data?: Card): void;
};

const CardContext = createContext<CardContextData>(
  {} as CardContextData
);

type CardProviderProps = {
  children: ReactNode;
};

const initialState: Card[]= [
  {
  id: "1",
  name: "Automovel",
  flag:"🚘",
  number :"123",
  type: "Crédito"
  
  },
  {
    id: "2",
  name: "Alimentação",
  flag:"🍔",
  number :"456",
  type: "Débito"
  
  },
  {
    id: "3",
    name: "Pai",
    flag:"🧙‍♂️",
    number :"789",
    type: "DEBIT_CREDIT_CARD"
    
    }
  
  
  ];
export const CardProvider = ({ children }: CardProviderProps) => {
  const cardModalRef = useRef<CardModalHandles | null>(null);

  const [cards, setCards] = useState<Card[]>(initialState);

  function addCard(card: Card) {
    const newCard = [
      ...cards,
      { ...card, id: new Date().toISOString() }
    ];
    setCards(newCard);
  }

  function updateCard(updatedCard: Card) {
    const otherCards = cards.filter(
      (card) => card.id !== updatedCard.id
    );
    setCards([...otherCards, updatedCard]);
  }

  function removeCard(cardId: string) {
    const remainingCards = cards.filter(
      (card) => card.id !== cardId
    );
    setCards(remainingCards);
  }

  function openCardModal(data?: Card) {
    cardModalRef.current?.open(data);
  }

  return (
    <CardContext.Provider
      value={{
        cards,
        addCard,
        removeCard,
        updateCard,
        openCardModal
      }}
    >
      {children}

      <CardModal ref={cardModalRef} />
    </CardContext.Provider>
  );
};

export const useCard = (): CardContextData => {
  const contextData = useContext(CardContext);
  return { ...contextData };
};
